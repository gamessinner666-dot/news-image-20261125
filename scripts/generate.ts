import { writeFileSync, readFileSync, mkdirSync, existsSync } from 'node:fs';
import { join, dirname, resolve } from 'node:path';
import { execFileSync } from 'node:child_process';
import { createHash } from 'node:crypto';
import { fileURLToPath } from 'node:url';
import {
  EDITION_DATE,
  EDITION_DECK,
  REGIONS,
  REGION_MAP,
  KEY_METRICS,
  TIMELINE_EVENTS,
  HERO_STORIES,
  MEDIUM_STORIES,
  DIGEST_LEFT,
  DIGEST_RIGHT,
  EXCLUDED_TUE_24,
  EXCLUDED_THU_26,
  type EpistemicTag,
  type DigestStory,
} from '../data/stories.ts';
import { renderHeroGraphic, renderMediumGraphic } from './illustrations.ts';
import { renderWorldMapSvg } from './world-map.ts';

function esc(s: string): string {
  return s
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;');
}

function epistemicStyle(tag: EpistemicTag | DigestStory['epistemic']): string {
  if (tag === 'CONFIRMED' || tag === 'CONF') return 'background:#DCFCE7;color:#14532D;border-color:#86EFAC;';
  if (tag === 'OFFICIAL' || tag === 'OFF') return 'background:#DBEAFE;color:#1E3A8A;border-color:#93C5FD;';
  if (tag === 'REPORTED' || tag === 'RPT') return 'background:#FEF3C7;color:#78350F;border-color:#FCD34D;';
  return 'background:#FEE2E2;color:#991B1B;border-color:#FCA5A5;';
}

function buildHtml(): string {
  const totalStories = REGIONS.reduce((sum, r) => sum + r.count, 0);

  const timelineHtml = TIMELINE_EVENTS.map((ev) => {
    const color = REGION_MAP[ev.region].color;
    return `<div class="tl-item"><span class="tl-dot" style="background:${color}"></span><span class="tl-utc">${esc(ev.utc)}</span> <span class="tl-lbl">${esc(ev.label)}</span></div>`;
  }).join('');

  const metricsHtml = KEY_METRICS.map(
    (m) => `
    <div class="kpi-card" style="border-top-color:${m.color}">
      <div class="kpi-val" style="color:${m.color}">${esc(m.value)}</div>
      <div class="kpi-lbl">${esc(m.label)}</div>
      <div class="kpi-sub">${esc(m.sub)}</div>
    </div>`
  ).join('');

  // Min-width protection on every segment ensures zero overflow on smaller regions like Oceania (2)
  const regionBarHtml = REGIONS.map((r) => {
    const minPx = r.id === 'OC' ? 68 : r.id === 'GL' ? 84 : r.id === 'SA' ? 76 : r.id === 'LA' ? 68 : 74;
    return `<div class="reg-seg" style="flex:${r.count} 1 0;min-width:${minPx}px;background:${r.color}">${esc(r.shortLabel)} <span>${r.count}</span></div>`;
  }).join('');

  const heroesHtml = HERO_STORIES.map((h) => {
    const reg = REGION_MAP[h.region];
    return `
    <article class="hero-card" style="border-top-color:${reg.color}">
      <div class="card-meta">
        <span class="pin-badge" style="background:${reg.color}">${h.num}</span>
        <span class="reg-name" style="color:${reg.color}">${esc(reg.name.toUpperCase())}</span>
        <span class="epi-pill" style="${epistemicStyle(h.epistemic)}">${esc(h.epistemic)}</span>
        <span class="meta-right">${esc(h.utc)} · ${esc(h.source)}</span>
      </div>
      <div class="hero-graphic">${renderHeroGraphic(h.graphicKey)}</div>
      <h2 class="hero-head">${esc(h.headline)}</h2>
      <p class="hero-body">${esc(h.summary)}</p>
    </article>`;
  }).join('');

  const mediumHtml = MEDIUM_STORIES.map((m) => {
    const reg = REGION_MAP[m.region];
    return `
    <article class="med-card" style="border-top-color:${reg.color}">
      <div class="med-meta">
        <span class="pin-sm" style="background:${reg.color}">${m.num}</span>
        <span class="epi-sm" style="${epistemicStyle(m.epistemic)}">${esc(m.epistemic)}</span>
        <span class="med-src">${esc(m.source)}</span>
      </div>
      <div class="med-graphic">${renderMediumGraphic(m.graphicKey)}</div>
      <h3 class="med-head">${esc(m.headline)}</h3>
      <p class="med-body">${esc(m.summary)}</p>
    </article>`;
  }).join('');

  const renderDigestRow = (d: DigestStory): string => {
    const color = REGION_MAP[d.region].color;
    return `<div class="dig-row">
      <span class="dig-num" style="background:${color}">${d.num}</span>
      <span class="dig-epi" style="${epistemicStyle(d.epistemic)}">${d.epistemic}</span>
      <span class="dig-text"><strong>${esc(d.lead)}</strong> ${esc(d.detail)} <em>(${esc(d.source)})</em></span>
    </div>`;
  };

  const digestLeftHtml = DIGEST_LEFT.map(renderDigestRow).join('');
  const digestRightHtml = DIGEST_RIGHT.map(renderDigestRow).join('');

  const legendHtml = REGIONS.map(
    (r) => `<span class="leg-item"><span class="leg-dot" style="background:${r.color}"></span>${esc(r.shortLabel)}</span>`
  ).join('');

  return `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8" />
<title>${esc(EDITION_DATE)} — World News Broadsheet</title>
<style>
  * { box-sizing: border-box; margin: 0; padding: 0; }
  html, body {
    width: 1024px;
    height: 1024px;
    overflow: hidden;
    background: #FAF6EE;
    color: #141414;
    font-family: "Segoe UI", Arial, Helvetica, sans-serif;
    -webkit-font-smoothing: antialiased;
  }
  .page {
    width: 1024px;
    height: 1024px;
    padding: 8px 14px 7px 14px;
    display: flex;
    flex-direction: column;
    gap: 5.5px;
  }

  /* MASTHEAD */
  .masthead {
    border-top: 2.8px solid #141414;
    border-bottom: 2.2px solid #141414;
    padding: 3px 0 4px 0;
  }
  .mast-top {
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 8.3px;
    font-weight: 800;
    letter-spacing: 0.7px;
    color: #44403C;
    border-bottom: 0.8px solid #C8BEA8;
    padding-bottom: 2px;
    margin-bottom: 1px;
  }
  .mast-title {
    font-family: Georgia, "Times New Roman", serif;
    font-size: 56px;
    font-weight: 700;
    line-height: 0.98;
    letter-spacing: -0.9px;
    text-align: center;
    color: #111111;
    padding: 1px 0 2px 0;
  }
  .mast-deck {
    font-family: Georgia, "Times New Roman", serif;
    font-style: italic;
    font-size: 10.7px;
    font-weight: 600;
    text-align: center;
    color: #292524;
    border-top: 0.8px solid #D6CCB8;
    padding-top: 2px;
    white-space: nowrap;
    overflow: hidden;
  }

  /* UTC TIMELINE */
  .timeline {
    display: flex;
    align-items: center;
    justify-content: space-between;
    background: #F1EADA;
    border: 0.8px solid #D5CBB8;
    border-radius: 3px;
    padding: 3px 6px;
    gap: 3px;
  }
  .tl-head {
    font-size: 7.3px;
    font-weight: 800;
    color: #1E293B;
    letter-spacing: 0.3px;
    white-space: nowrap;
    padding-right: 4px;
    border-right: 1px solid #C4B89E;
  }
  .tl-item {
    display: inline-flex;
    align-items: center;
    gap: 2px;
    font-size: 7.2px;
    white-space: nowrap;
  }
  .tl-dot { width: 5.2px; height: 5.2px; border-radius: 50%; display: inline-block; flex-shrink: 0; }
  .tl-utc { font-weight: 800; color: #1E293B; }
  .tl-lbl { font-weight: 600; color: #334155; }

  /* 6-METRIC KEY NUMBERS STRIP */
  .kpi-strip {
    display: grid;
    grid-template-columns: repeat(6, minmax(0, 1fr));
    gap: 6px;
  }
  .kpi-card {
    background: #FFFEFA;
    border: 0.8px solid #D5CBB8;
    border-top-width: 2.8px;
    border-radius: 3px;
    padding: 3.5px 6px 3.5px 6px;
    text-align: center;
  }
  .kpi-val {
    font-family: Georgia, "Times New Roman", serif;
    font-size: 16px;
    font-weight: 800;
    line-height: 1.06;
  }
  .kpi-lbl {
    font-size: 8px;
    font-weight: 800;
    color: #1C1917;
    line-height: 1.15;
  }
  .kpi-sub {
    font-size: 6.9px;
    font-weight: 600;
    color: #57534E;
    line-height: 1.12;
  }

  /* 9-REGION BALANCE BAR */
  .reg-bar {
    display: flex;
    width: 100%;
    height: 16px;
    border-radius: 3px;
    overflow: hidden;
    gap: 1.5px;
  }
  .reg-seg {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 2.5px;
    color: #FFFFFF;
    font-size: 7.4px;
    font-weight: 800;
    letter-spacing: 0.15px;
    white-space: nowrap;
    padding: 0 3px;
  }
  .reg-seg span {
    background: rgba(255,255,255,0.22);
    border-radius: 2px;
    padding: 0 3px;
    font-size: 7px;
  }

  /* HERO ROW (3 LARGE CARDS) */
  .hero-grid {
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: 7px;
  }
  .hero-card {
    background: #FFFEFA;
    border: 0.9px solid #D4C9B4;
    border-top-width: 3.2px;
    border-radius: 3px;
    padding: 5.5px 7.5px 6px 7.5px;
    display: flex;
    flex-direction: column;
    gap: 4px;
  }
  .card-meta {
    display: flex;
    align-items: center;
    gap: 4px;
    font-size: 7.1px;
    line-height: 1;
  }
  .pin-badge {
    width: 14.5px;
    height: 14.5px;
    border-radius: 50%;
    color: #FFF;
    font-size: 8px;
    font-weight: 800;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
  }
  .reg-name { font-weight: 800; font-size: 7.3px; letter-spacing: 0.2px; white-space: nowrap; }
  .epi-pill {
    font-size: 6.3px;
    font-weight: 800;
    padding: 1px 4px;
    border-radius: 2px;
    border: 0.6px solid transparent;
    white-space: nowrap;
  }
  .meta-right {
    margin-left: auto;
    font-size: 6.6px;
    font-weight: 600;
    color: #57534E;
    white-space: nowrap;
  }
  .hero-graphic { width: 100%; height: 94px; }
  .hero-head {
    font-family: Georgia, "Times New Roman", serif;
    font-size: 13px;
    font-weight: 700;
    line-height: 1.14;
    color: #111111;
  }
  .hero-body {
    font-size: 8.6px;
    line-height: 1.25;
    color: #292524;
  }

  /* MEDIUM ROW (2x5 = 10 CARDS) */
  .med-grid {
    display: grid;
    grid-template-columns: repeat(5, minmax(0, 1fr));
    gap: 6px;
  }
  .med-card {
    background: #FFFEFA;
    border: 0.8px solid #D6CCB8;
    border-top-width: 2.6px;
    border-radius: 3px;
    padding: 4.5px 5.5px 5px 5.5px;
    display: flex;
    flex-direction: column;
    gap: 3px;
  }
  .med-meta {
    display: flex;
    align-items: center;
    gap: 3px;
    line-height: 1;
  }
  .pin-sm {
    width: 13px;
    height: 13px;
    border-radius: 50%;
    color: #FFF;
    font-size: 7.2px;
    font-weight: 800;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
  }
  .epi-sm {
    font-size: 5.9px;
    font-weight: 800;
    padding: 0.8px 3px;
    border-radius: 2px;
    border: 0.5px solid transparent;
    white-space: nowrap;
  }
  .med-src {
    margin-left: auto;
    font-size: 6.1px;
    font-weight: 600;
    color: #57534E;
    white-space: nowrap;
    overflow: hidden;
  }
  .med-graphic { width: 100%; height: 52px; }
  .med-head {
    font-family: Georgia, "Times New Roman", serif;
    font-size: 9.6px;
    font-weight: 700;
    line-height: 1.13;
    color: #111111;
  }
  .med-body {
    font-size: 7.75px;
    line-height: 1.2;
    color: #292524;
  }

  /* BOTTOM SECTION: WORLD MAP + 24 SYMMETRICAL BRIEFS */
  .bottom-grid {
    display: grid;
    grid-template-columns: 344px minmax(0, 1fr);
    gap: 8px;
    flex: 1;
    min-height: 0;
  }
  .panel {
    background: #FFFEFA;
    border: 0.9px solid #D5CBB8;
    border-radius: 3px;
    padding: 5px 7px 5px 7px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 4px;
    min-width: 0;
  }
  .panel-title {
    font-size: 8.2px;
    font-weight: 800;
    letter-spacing: 0.5px;
    color: #1C1917;
    border-bottom: 1px solid #D5CBB8;
    padding-bottom: 2px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .panel-title span { font-weight: 600; color: #57534E; font-size: 7.1px; letter-spacing: 0.1px; }

  .space-pills {
    display: flex;
    gap: 4px;
    justify-content: space-between;
  }
  .sp-pill {
    flex: 1;
    background: #F1F5F9;
    border: 0.7px solid #94A3B8;
    border-radius: 2.5px;
    padding: 2.5px 4px;
    font-size: 6.5px;
    font-weight: 800;
    color: #1E293B;
    text-align: center;
    white-space: nowrap;
  }
  .map-legend {
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: 2px 6px;
    font-size: 6.8px;
    font-weight: 700;
    color: #334155;
    padding-top: 1px;
  }
  .leg-item { display: inline-flex; align-items: center; gap: 3px; white-space: nowrap; }
  .leg-dot { width: 6px; height: 6px; border-radius: 50%; display: inline-block; flex-shrink: 0; }

  .digest-cols {
    display: grid;
    grid-template-columns: minmax(0, 1fr) minmax(0, 1fr);
    gap: 0 9px;
    flex: 1;
    min-height: 0;
  }
  .dig-col {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    min-width: 0;
    height: 100%;
  }
  .dig-row {
    display: flex;
    align-items: flex-start;
    gap: 3.5px;
    font-size: 7.6px;
    line-height: 1.18;
    color: #1C1917;
    min-width: 0;
  }
  .dig-num {
    width: 12.5px;
    height: 12.5px;
    border-radius: 50%;
    color: #FFF;
    font-size: 6.5px;
    font-weight: 800;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
    margin-top: 0.5px;
  }
  .dig-epi {
    font-size: 5.5px;
    font-weight: 800;
    padding: 0.6px 2.8px;
    border-radius: 2px;
    border: 0.5px solid transparent;
    flex-shrink: 0;
    margin-top: 1px;
  }
  .dig-text { min-width: 0; }
  .dig-text strong { color: #0F172A; font-weight: 800; }
  .dig-text em { font-style: normal; color: #64748B; font-size: 6.7px; font-weight: 600; }

  /* DATE CHECK AUDIT BOX */
  .date-check {
    background: #FFF5F5;
    border: 1.6px solid #B91C1C;
    border-radius: 3px;
    padding: 4px 8px;
    font-size: 7.45px;
    line-height: 1.26;
    color: #450A0A;
  }
  .dc-tag {
    display: inline-block;
    background: #B91C1C;
    color: #FFFFFF;
    font-size: 6.8px;
    font-weight: 800;
    padding: 0.6px 4.5px;
    border-radius: 2px;
    margin-right: 4px;
    letter-spacing: 0.3px;
  }
  .dc-lbl { font-weight: 800; color: #991B1B; }

  /* FOOTER */
  .footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 7px;
    font-weight: 600;
    color: #57534E;
    border-top: 0.8px solid #D5CBB8;
    padding-top: 2px;
  }
  .footer strong { color: #1C1917; font-weight: 800; }
</style>
</head>
<body>
  <div class="page">
    <header class="masthead">
      <div class="mast-top">
        <span>THE WORLD IN ONE DAY  ·  FULL-DAY EDITION (00:00–23:59 UTC)  ·  ${totalStories} VERIFIED STORIES  ·  9 REGIONS</span>
        <span>GLOBAL BROADSHEET · MULTI-WIRE VERIFIED</span>
      </div>
      <h1 class="mast-title">${esc(EDITION_DATE)}</h1>
      <div class="mast-deck">${esc(EDITION_DECK)}</div>
    </header>

    <section class="timeline">
      <span class="tl-head">UTC TIMELINE</span>
      ${timelineHtml}
    </section>

    <section class="kpi-strip">
      ${metricsHtml}
    </section>

    <section class="reg-bar" aria-label="Regional balance">
      ${regionBarHtml}
    </section>

    <section class="hero-grid">
      ${heroesHtml}
    </section>

    <section class="med-grid">
      ${mediumHtml}
    </section>

    <section class="bottom-grid">
      <div class="panel">
        <div class="panel-title">WORLD LOCATOR MAP <span>Color-coded by region</span></div>
        ${renderWorldMapSvg()}
        <div class="space-pills">
          <div class="sp-pill">#4 LEO · SpaceX 1M Sats</div>
          <div class="sp-pill">#5 Orbit · Tiangong CN/PK</div>
          <div class="sp-pill">#19–20 Global Tech &amp; UN</div>
        </div>
        <div class="map-legend">${legendHtml}</div>
      </div>

      <div class="panel">
        <div class="panel-title">MORE WORLD NEWS — 24 VERIFIED BRIEFS <span>12 + 12 symmetrical · all 9 regions · verified 25 Nov 2026</span></div>
        <div class="digest-cols">
          <div class="dig-col">${digestLeftHtml}</div>
          <div class="dig-col">${digestRightHtml}</div>
        </div>
      </div>
    </section>

    <section class="date-check">
      <div><span class="dc-tag">DATE CHECK · 25 NOV ONLY</span><span class="dc-lbl">Excluded Tue 24 Nov:</span> ${esc(EXCLUDED_TUE_24)}</div>
      <div><span class="dc-lbl">Excluded Thu 26 Nov:</span> ${esc(EXCLUDED_THU_26)}</div>
    </section>

    <footer class="footer">
      <span><strong>Epistemic Tags:</strong> CONFIRMED (multi-wire/sat/court) · OFFICIAL (govt/agency) · REPORTED (leak/probe) · CLAIM (single-side)</span>
      <span><strong>Maps &amp; graphics drawn in code, not photographs</strong> · Sources: Reuters, AP, BBC, FT, Guardian, USTR, FCC, ABS, EC, NASA FIRMS, UEFA</span>
    </footer>
  </div>
</body>
</html>`;
}

function findChrome(): string {
  const candidates = [
    process.env.CHROME_PATH,
    'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe',
    'C:\\Program Files (x86)\\Google\\Chrome\\Application\\chrome.exe',
    'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe',
  ].filter(Boolean) as string[];

  for (const c of candidates) {
    if (existsSync(c)) return c;
  }
  throw new Error('Could not find Chrome or Edge binary');
}

function render(): void {
  const scriptsDir = dirname(fileURLToPath(import.meta.url));
  const repoDir = resolve(scriptsDir, '..');
  const workDir = resolve(repoDir, '..');
  const distDir = join(workDir, 'render-work');
  mkdirSync(distDir, { recursive: true });

  const htmlPath = join(distDir, 'broadsheet.html');
  const outPng = join(repoDir, 'entry.png');
  const preview300Html = join(distDir, 'preview300.html');
  const preview300Png = join(workDir, 'preview-300.png');

  const html = buildHtml();
  writeFileSync(htmlPath, html, 'utf8');

  const chrome = findChrome();
  const fileUrl = 'file:///' + htmlPath.replaceAll('\\', '/');

  execFileSync(
    chrome,
    [
      '--headless=new',
      '--disable-gpu',
      '--no-sandbox',
      '--hide-scrollbars',
      '--force-device-scale-factor=1',
      '--default-background-color=faf6ee',
      '--window-size=1024,1024',
      `--screenshot=${outPng}`,
      fileUrl,
    ],
    { stdio: 'inherit' }
  );

  const buf = readFileSync(outPng);
  const width = buf.readUInt32BE(16);
  const height = buf.readUInt32BE(20);
  const sha256 = createHash('sha256').update(buf).digest('hex');
  console.log(`Rendered ${outPng}: ${width}x${height}, ${buf.length} bytes (${(buf.length / 1024).toFixed(1)} KB), sha256=${sha256}`);

  if (width !== 1024 || height !== 1024) {
    throw new Error(`Expected 1024x1024, got ${width}x${height}`);
  }
  if (buf.length > 1_048_576) {
    throw new Error(`PNG exceeds 1 MiB (${buf.length} bytes)`);
  }

  // Generate 300x300 thumbnail preview for visual inspection
  const pngUrl = 'file:///' + outPng.replaceAll('\\', '/');
  writeFileSync(
    preview300Html,
    `<!DOCTYPE html><html><body style="margin:0;padding:0;width:300px;height:300px;overflow:hidden;"><img src="${pngUrl}" width="300" height="300" style="display:block;"/></body></html>`,
    'utf8'
  );
  execFileSync(
    chrome,
    [
      '--headless=new',
      '--disable-gpu',
      '--no-sandbox',
      '--hide-scrollbars',
      '--force-device-scale-factor=1',
      '--window-size=300,300',
      `--screenshot=${preview300Png}`,
      'file:///' + preview300Html.replaceAll('\\', '/'),
    ],
    { stdio: 'inherit' }
  );
  console.log(`Rendered 300x300 inspection thumbnail: ${preview300Png}`);
}

render();
