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
  FIELDS_SUMMARY,
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

function epistemicStyle(tag: EpistemicTag): string {
  if (tag === 'CONFIRMED') return 'border-color:#15803D;color:#14532D;background:#DCFCE7;';
  if (tag === 'OFFICIAL') return 'border-color:#1D4ED8;color:#1E3A8A;background:#DBEAFE;';
  if (tag === 'REPORTED') return 'border-color:#B45309;color:#78350F;background:#FEF3C7;';
  return 'border-color:#B91C1C;color:#991B1B;background:#FEE2E2;';
}

function buildHtml(): string {
  const totalStories = REGIONS.reduce((sum, r) => sum + r.count, 0);

  const regionBarHtml = REGIONS.map((r) => {
    const minPx = r.id === 'OC' ? 66 : r.id === 'GL' ? 58 : r.id === 'LA' ? 62 : 70;
    return `<div class="reg-seg" style="flex:${r.count} 1 0;min-width:${minPx}px;background:${r.color}">${esc(r.shortLabel.toUpperCase())} ${r.count}</div>`;
  }).join('');

  const metricsHtml = KEY_METRICS.map(
    (m) => `
    <div class="kpi-item">
      <div class="kpi-val" style="color:${m.color}">${esc(m.value)}</div>
      <div class="kpi-txt"><div>${esc(m.line1)}</div><div>${esc(m.line2)}</div></div>
    </div>`
  ).join('');

  const timelineHtml = TIMELINE_EVENTS.map(
    (ev) => `<span class="tl-item"><strong>${esc(ev.utc)}</strong> ${esc(ev.label)}</span>`
  ).join('');

  const heroesHtml = HERO_STORIES.map((h) => {
    const reg = REGION_MAP[h.region];
    return `
    <article class="hero-col">
      <div class="hero-art">${renderHeroGraphic(h.graphicKey)}</div>
      <div class="hero-meta">
        <span class="loc-beat" style="color:${reg.color}">${esc(h.locationBeat)}</span>
        <span class="epi-badge" style="${epistemicStyle(h.epistemic)}">${esc(h.epistemic)}</span>
      </div>
      <h2 class="hero-head">${esc(h.headline)}</h2>
      <p class="hero-body">${esc(h.summary)}</p>
      <div class="why-line"><span>WHY IT MATTERS</span> ${esc(h.whyItMatters)}</div>
    </article>`;
  }).join('');

  const mediumHtml = MEDIUM_STORIES.map((m) => {
    const reg = REGION_MAP[m.region];
    return `
    <article class="med-col">
      <div class="med-art">${renderMediumGraphic(m.graphicKey, m.num, reg.color, m.badgeText)}</div>
      <div class="med-loc" style="color:${reg.color}">${esc(m.locationBeat)}</div>
      <h3 class="med-head">${esc(m.headline)}</h3>
      <p class="med-body">${esc(m.summary)}</p>
    </article>`;
  }).join('');

  const renderDigestRow = (d: DigestStory): string => {
    const color = REGION_MAP[d.region].color;
    const claimPill = d.claim ? `<span class="claim-tag">CLAIM</span>` : '';
    return `<div class="dig-row">
      <span class="dig-num" style="background:${color}">${d.num}</span>
      <span class="dig-text"><strong>${esc(d.place)}</strong> ${esc(d.text)}</span>${claimPill}
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
<title>${esc(EDITION_DATE)} — The World in One Day</title>
<style>
  * { box-sizing: border-box; margin: 0; padding: 0; }
  html, body {
    width: 1024px;
    height: 1024px;
    overflow: hidden;
    background: #FAF5EA;
    color: #141414;
    font-family: "Segoe UI", Arial, Helvetica, sans-serif;
    -webkit-font-smoothing: antialiased;
  }
  .page {
    width: 1024px;
    height: 1024px;
    padding: 0 14px 6px 14px;
    display: flex;
    flex-direction: column;
  }

  /* TOP DARK EDITORIAL BAR */
  .top-ribbon {
    margin: 0 -14px;
    background: #14181F;
    color: #F8FAFC;
    padding: 3.5px 14px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 8.6px;
    font-weight: 800;
    letter-spacing: 0.7px;
  }
  .top-ribbon span:last-child { color: #E2E8F0; font-weight: 700; }

  /* GIANT MASTHEAD */
  .mast-title {
    font-family: Georgia, "Times New Roman", serif;
    font-size: 60px;
    font-weight: 700;
    line-height: 0.96;
    letter-spacing: -1.1px;
    text-align: center;
    color: #111111;
    padding: 4px 0 3px 0;
  }
  .mast-deck {
    font-family: Georgia, "Times New Roman", serif;
    font-style: italic;
    font-size: 11.4px;
    font-weight: 600;
    text-align: center;
    color: #991B1B;
    border-top: 0.9px solid #CFC5B1;
    padding: 2.5px 0 3.5px 0;
    white-space: nowrap;
  }

  /* 9-REGION BAR + 18-FIELD BREADTH STRIP */
  .reg-bar {
    display: flex;
    width: 100%;
    height: 14.5px;
    gap: 1.5px;
  }
  .reg-seg {
    display: flex;
    align-items: center;
    justify-content: center;
    color: #FFFFFF;
    font-size: 7.4px;
    font-weight: 800;
    letter-spacing: 0.25px;
    white-space: nowrap;
  }
  .fields-bar {
    font-size: 7.1px;
    font-weight: 700;
    color: #44403C;
    padding: 2.5px 0;
    border-bottom: 1.4px solid #1C1917;
    white-space: nowrap;
    overflow: hidden;
  }

  /* 5 HUGE OPEN KEY NUMBERS (NO BOXES!) */
  .kpi-row {
    display: grid;
    grid-template-columns: repeat(5, minmax(0, 1fr));
    gap: 8px;
    padding: 4px 0 3.5px 0;
    border-bottom: 0.9px solid #C8BEA8;
  }
  .kpi-item {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 5px;
    border-right: 0.8px solid #D5CBB8;
    padding-right: 4px;
  }
  .kpi-item:last-child { border-right: none; }
  .kpi-val {
    font-family: Georgia, "Times New Roman", serif;
    font-size: 22px;
    font-weight: 800;
    line-height: 0.95;
    letter-spacing: -0.5px;
  }
  .kpi-txt {
    font-size: 7.5px;
    font-weight: 700;
    line-height: 1.15;
    color: #292524;
  }

  /* DARK UTC TIMELINE STRIP */
  .tl-bar {
    background: #1B2330;
    color: #E2E8F0;
    padding: 2.5px 7px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 7.1px;
    margin-top: 3px;
    margin-bottom: 5px;
  }
  .tl-head { color: #FACC15; font-weight: 800; letter-spacing: 0.4px; }
  .tl-item strong { color: #FFFFFF; font-weight: 800; }

  /* 3 FULL-BLEED HERO LEADS (UNBOXED EDITORIAL COLUMNS) */
  .hero-grid {
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: 12px;
    padding-bottom: 6px;
    border-bottom: 1.6px solid #1C1917;
  }
  .hero-col {
    display: flex;
    flex-direction: column;
    gap: 3px;
    min-width: 0;
  }
  .hero-art { width: 100%; height: 104px; }
  .hero-meta {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-top: 1px;
  }
  .loc-beat { font-size: 7.5px; font-weight: 800; letter-spacing: 0.35px; }
  .epi-badge {
    font-size: 6.4px;
    font-weight: 800;
    padding: 0.8px 4px;
    border: 0.8px solid transparent;
    border-radius: 2px;
    letter-spacing: 0.3px;
  }
  .hero-head {
    font-family: Georgia, "Times New Roman", serif;
    font-size: 15.2px;
    font-weight: 700;
    line-height: 1.1;
    color: #111111;
  }
  .hero-body {
    font-size: 8.6px;
    line-height: 1.24;
    color: #292524;
  }
  .why-line {
    font-size: 7.6px;
    font-weight: 700;
    color: #1C1917;
    border-top: 0.7px solid #D8CEBC;
    padding-top: 2px;
    white-space: nowrap;
    overflow: hidden;
  }
  .why-line span { color: #B91C1C; font-weight: 800; letter-spacing: 0.25px; margin-right: 3px; }

  /* 10 MEDIUM ILLUSTRATED STORIES (2 ROWS x 5 UNBOXED COLUMNS) */
  .med-grid {
    display: grid;
    grid-template-columns: repeat(5, minmax(0, 1fr));
    column-gap: 10px;
    row-gap: 6px;
    padding: 6px 0 6px 0;
    border-bottom: 1.4px solid #1C1917;
  }
  .med-col {
    display: flex;
    flex-direction: column;
    gap: 2px;
    min-width: 0;
  }
  .med-art { width: 100%; height: 60px; }
  .med-loc {
    font-size: 6.6px;
    font-weight: 800;
    letter-spacing: 0.25px;
    padding-top: 1px;
    white-space: nowrap;
    overflow: hidden;
  }
  .med-head {
    font-family: Georgia, "Times New Roman", serif;
    font-size: 11px;
    font-weight: 700;
    line-height: 1.1;
    color: #111111;
  }
  .med-body {
    font-size: 7.7px;
    line-height: 1.18;
    color: #292524;
  }

  /* BOTTOM: WORLD LOCATOR MAP (LEFT) + 36 SINGLE-LINE BRIEFS (RIGHT) */
  .bottom-grid {
    display: grid;
    grid-template-columns: 314px minmax(0, 1fr);
    gap: 10px;
    padding: 5px 0 4px 0;
    flex: 1;
    min-height: 0;
  }
  .map-col {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 4px;
  }
  .space-strip {
    display: flex;
    gap: 4px;
  }
  .sp-chip {
    flex: 1;
    background: #EFE9DC;
    border: 0.7px solid #C8BEA8;
    border-radius: 2px;
    padding: 2px 3px;
    font-size: 6.4px;
    font-weight: 800;
    color: #1E293B;
    text-align: center;
    white-space: nowrap;
  }
  .sec-head {
    font-size: 8.2px;
    font-weight: 800;
    letter-spacing: 0.45px;
    color: #111111;
    display: flex;
    justify-content: space-between;
    align-items: baseline;
    border-bottom: 0.9px solid #C8BEA8;
    padding-bottom: 1.5px;
  }
  .sec-head span { font-size: 6.9px; font-weight: 600; color: #57534E; letter-spacing: 0; }
  .map-legend {
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: 2px 5px;
    font-size: 6.9px;
    font-weight: 700;
    color: #292524;
  }
  .leg-item { display: inline-flex; align-items: center; gap: 3px; white-space: nowrap; }
  .leg-dot { width: 6px; height: 6px; border-radius: 50%; flex-shrink: 0; }

  .digest-wrap {
    display: flex;
    flex-direction: column;
    gap: 3px;
    min-width: 0;
  }
  .digest-cols {
    display: grid;
    grid-template-columns: minmax(0, 1fr) minmax(0, 1fr);
    gap: 0 10px;
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
    align-items: center;
    gap: 3.5px;
    font-size: 7.4px;
    line-height: 1.05;
    color: #1C1917;
    white-space: nowrap;
    overflow: hidden;
    min-width: 0;
  }
  .dig-num {
    width: 11.5px;
    height: 11.5px;
    border-radius: 50%;
    color: #FFFFFF;
    font-size: 6.2px;
    font-weight: 800;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
  }
  .dig-text { min-width: 0; overflow: hidden; text-overflow: ellipsis; }
  .dig-text strong { color: #0F172A; font-weight: 800; margin-right: 2px; }
  .claim-tag {
    margin-left: auto;
    font-size: 5.5px;
    font-weight: 800;
    color: #991B1B;
    background: #FEE2E2;
    border: 0.6px solid #B91C1C;
    border-radius: 2px;
    padding: 0.4px 2.5px;
    flex-shrink: 0;
  }

  /* DATE CHECK AUDIT BOX */
  .date-check {
    background: #FFF5F5;
    border: 1.5px solid #B91C1C;
    border-radius: 2.5px;
    padding: 3px 7px;
    font-size: 7.3px;
    line-height: 1.24;
    color: #450A0A;
  }
  .dc-tag {
    display: inline-block;
    background: #B91C1C;
    color: #FFFFFF;
    font-size: 6.7px;
    font-weight: 800;
    padding: 0.5px 4.5px;
    border-radius: 2px;
    margin-right: 4px;
    letter-spacing: 0.3px;
  }
  .dc-lbl { font-weight: 800; color: #991B1B; }

  /* EDITORIAL FOOTER */
  .footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 6.9px;
    font-weight: 600;
    color: #57534E;
    padding-top: 2.5px;
  }
  .footer strong { color: #141414; font-weight: 800; }
</style>
</head>
<body>
  <div class="page">
    <div class="top-ribbon">
      <span>THE WORLD IN ONE DAY</span>
      <span>${totalStories} VERIFIED STORIES · 9 REGIONS · 18 FIELDS · ALL FIRST REPORTED ON WEDNESDAY 25 NOVEMBER 2026</span>
    </div>

    <h1 class="mast-title">${esc(EDITION_DATE)}</h1>
    <div class="mast-deck">${esc(EDITION_DECK)}</div>

    <div class="reg-bar">${regionBarHtml}</div>
    <div class="fields-bar">${esc(FIELDS_SUMMARY)}</div>

    <section class="kpi-row">${metricsHtml}</section>

    <section class="tl-bar">
      <span class="tl-head">THE DAY IN UTC</span>
      ${timelineHtml}
    </section>

    <section class="hero-grid">${heroesHtml}</section>

    <section class="med-grid">${mediumHtml}</section>

    <section class="bottom-grid">
      <div class="map-col">
        <div class="sec-head">WHERE IT HAPPENED <span>pins #1–#13 · dots = briefs</span></div>
        ${renderWorldMapSvg()}
        <div class="space-strip">
          <div class="sp-chip">#3 Orbit · Tiangong</div>
          <div class="sp-chip">#49 ESA Hera · DART</div>
          <div class="sp-chip">#49 UN · 47K Femicides</div>
        </div>
        <div class="map-legend">${legendHtml}</div>
      </div>

      <div class="digest-wrap">
        <div class="sec-head">ALSO ON WEDNESDAY 25 NOVEMBER <span>36 more dated stories · 18 + 18 across all 9 regions</span></div>
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
      <span><strong>OFFICIAL</strong> authority’s act · <strong>CONFIRMED</strong> 2+ wires · <strong>REPORTED</strong> press/leak · <strong>CLAIM</strong> one side’s unverified account</span>
      <span><strong>Maps &amp; drawings original in code, not photographs</strong> · Sources: Reuters, AP, BBC, Al Jazeera, FT, Guardian, USTR, Ofgem, CMSA, ESA, ABS, UN</span>
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
      '--default-background-color=faf5ea',
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
