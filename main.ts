import { readFileSync, writeFileSync, mkdirSync, chmodSync } from 'node:fs';
import { dirname, join, resolve } from 'node:path';
import { createHash } from 'node:crypto';
import { fileURLToPath } from 'node:url';

const PNG_SIGNATURE = Buffer.from([0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a]);
const MAX_BYTES = 1_048_576;
const MAX_DIMENSION = 1024;

function verifyPngBuffer(buf: Buffer): { width: number; height: number; sha256: string } {
  if (buf.length < 33) {
    throw new Error(`entry.png too small (${buf.length} bytes)`);
  }
  if (buf.length > MAX_BYTES) {
    throw new Error(`entry.png exceeds 1 MiB limit (${buf.length} bytes)`);
  }
  if (!buf.subarray(0, 8).equals(PNG_SIGNATURE)) {
    throw new Error('entry.png does not start with a valid PNG signature');
  }
  const ihdrType = buf.subarray(12, 16).toString('ascii');
  if (ihdrType !== 'IHDR') {
    throw new Error(`Expected IHDR chunk first, got ${ihdrType}`);
  }
  const width = buf.readUInt32BE(16);
  const height = buf.readUInt32BE(20);
  if (width < 1 || height < 1 || width > MAX_DIMENSION || height > MAX_DIMENSION) {
    throw new Error(`Invalid PNG dimensions: ${width}x${height}`);
  }
  const iendMarker = Buffer.from([0x00, 0x00, 0x00, 0x00, 0x49, 0x45, 0x4e, 0x44, 0xae, 0x42, 0x60, 0x82]);
  if (!buf.subarray(buf.length - 12).equals(iendMarker)) {
    throw new Error('entry.png missing standard IEND terminator');
  }
  // Walk PNG chunks to verify complete structural integrity before writing
  let offset = 8;
  let sawIdat = false;
  while (offset + 12 <= buf.length) {
    const chunkLen = buf.readUInt32BE(offset);
    const chunkType = buf.subarray(offset + 4, offset + 8).toString('ascii');
    const nextOffset = offset + 12 + chunkLen;
    if (nextOffset > buf.length) {
      throw new Error(`Truncated PNG chunk ${chunkType} at byte ${offset}`);
    }
    if (chunkType === 'IDAT') sawIdat = true;
    offset = nextOffset;
  }
  if (offset !== buf.length || !sawIdat) {
    throw new Error('PNG chunk framing check failed');
  }
  const sha256 = createHash('sha256').update(buf).digest('hex');
  return { width, height, sha256 };
}

function main(): void {
  const rootDir = dirname(fileURLToPath(import.meta.url));
  const sourcePath = join(rootDir, 'entry.png');
  const outputDir = resolve(process.env.MAKEFUN_OUTPUT_DIR || '/output');
  const destPath = join(outputDir, 'entry.png');

  const imageBytes = readFileSync(sourcePath);
  const meta = verifyPngBuffer(imageBytes);

  mkdirSync(outputDir, { recursive: true, mode: 0o755 });
  writeFileSync(destPath, imageBytes, { mode: 0o644 });
  try {
    chmodSync(destPath, 0o644);
  } catch {
    // Windows ignores POSIX chmod bits safely
  }

  console.log(
    `Wrote ${destPath} (${imageBytes.length} bytes, ${meta.width}x${meta.height}, sha256=${meta.sha256})`
  );
}

main();
