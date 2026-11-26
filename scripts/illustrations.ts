// 13 full-bleed editorial pictorial SVG illustrations for Wednesday 25 November 2026.
// Drawn from scratch in crisp Economist/BBC editorial vector style: ships, microchips, space station,
// tankers, bills, mines, refineries, power pylons, flags, factories, courthouses, and skylines.

export function renderHeroGraphic(key: 'tariffs' | 'chiprout' | 'tiangong'): string {
  if (key === 'tariffs') {
    // Full-bleed container ship crossing ocean carrying tariff-labeled shipping containers (6 named + 8 more = 14)
    return `<svg viewBox="0 0 316 104" width="100%" height="104" xmlns="http://www.w3.org/2000/svg">
      <!-- Bright editorial sky & sea -->
      <rect width="316" height="72" fill="#E6F0F7"/>
      <rect y="72" width="316" height="32" fill="#2D6A9F"/>
      <path d="M0,78 Q38,74 76,78 T152,78 T228,78 T316,78" fill="none" stroke="#60A5FA" stroke-width="1.3" stroke-opacity="0.5"/>
      <path d="M18,90 Q60,86 102,90 T186,90 T270,90" fill="none" stroke="#93C5FD" stroke-width="1" stroke-opacity="0.4"/>
      <!-- Port crane silhouette on right -->
      <path d="M266,72 L274,20 L282,72 M254,24 L308,24 M274,24 L298,42" fill="none" stroke="#94A3B8" stroke-width="2.2"/>
      <!-- Ship hull & bridge -->
      <path d="M24,62 L236,62 L222,82 L40,82 Z" fill="#1E293B"/>
      <path d="M35,75 L226,75 L222,82 L40,82 Z" fill="#B91C1C"/>
      <rect x="196" y="34" width="24" height="28" fill="#F8FAFC" stroke="#475569" stroke-width="1"/>
      <rect x="200" y="39" width="16" height="5" fill="#1E293B"/>
      <rect x="206" y="25" width="7" height="9" fill="#B91C1C"/>
      <!-- Stacked shipping containers with exact 15%-35% USTR rates (6 named + 8 more = 14) -->
      <rect x="38" y="47" width="56" height="15" fill="#B91C1C" stroke="#FAF5EA" stroke-width="0.8"/>
      <text x="66" y="57.5" text-anchor="middle" font-family="Segoe UI,Arial,sans-serif" font-size="8.0" font-weight="800" fill="#FFFFFF">VIETNAM 35%</text>
      <rect x="95" y="47" width="48" height="15" fill="#C2410C" stroke="#FAF5EA" stroke-width="0.8"/>
      <text x="119" y="57.5" text-anchor="middle" font-family="Segoe UI,Arial,sans-serif" font-size="8.0" font-weight="800" fill="#FFFFFF">INDIA 25%</text>
      <rect x="144" y="47" width="48" height="15" fill="#991B1B" stroke="#FAF5EA" stroke-width="0.8"/>
      <text x="168" y="57.5" text-anchor="middle" font-family="Segoe UI,Arial,sans-serif" font-size="8.0" font-weight="800" fill="#FFFFFF">CHINA 20%</text>
      <rect x="52" y="32" width="44" height="15" fill="#1D4ED8" stroke="#FAF5EA" stroke-width="0.8"/>
      <text x="74" y="42.5" text-anchor="middle" font-family="Segoe UI,Arial,sans-serif" font-size="8.0" font-weight="800" fill="#FFFFFF">EU 15%</text>
      <rect x="97" y="32" width="54" height="15" fill="#0F766E" stroke="#FAF5EA" stroke-width="0.8"/>
      <text x="124" y="42.5" text-anchor="middle" font-family="Segoe UI,Arial,sans-serif" font-size="7.6" font-weight="800" fill="#FFFFFF">JP·KR 15%</text>
      <rect x="152" y="32" width="40" height="15" fill="#475569" stroke="#FAF5EA" stroke-width="0.8"/>
      <text x="172" y="42.5" text-anchor="middle" font-family="Segoe UI,Arial,sans-serif" font-size="7.6" font-weight="800" fill="#FFFFFF">+8 MORE</text>
      <!-- Top-right crisp tariff stamp -->
      <rect x="228" y="7" width="82" height="28" rx="3" fill="#B91C1C"/>
      <text x="269" y="18.8" text-anchor="middle" font-family="Segoe UI,Arial,sans-serif" font-size="9.4" font-weight="800" fill="#FFFFFF">14 NATIONS</text>
      <text x="269" y="30" text-anchor="middle" font-family="Segoe UI,Arial,sans-serif" font-size="7.1" font-weight="700" fill="#FECACA">15%–35% SEC. 301</text>
      <!-- Story number badge -->
      <circle cx="15" cy="90" r="10" fill="#0F766E" stroke="#FAF5EA" stroke-width="1.5"/>
      <text x="15" y="93.5" text-anchor="middle" font-family="Segoe UI,Arial,sans-serif" font-size="10" font-weight="800" fill="#FFFFFF">1</text>
    </svg>`;
  }

  if (key === 'chiprout') {
    // Full-bleed dark-slate AI microchip + plummeting crimson chart
    return `<svg viewBox="0 0 316 104" width="100%" height="104" xmlns="http://www.w3.org/2000/svg">
      <rect width="316" height="104" fill="#18202C"/>
      <line x1="0" y1="26" x2="316" y2="26" stroke="#2D3A4F" stroke-width="0.8"/>
      <line x1="0" y1="52" x2="316" y2="52" stroke="#2D3A4F" stroke-width="0.8"/>
      <line x1="0" y1="78" x2="316" y2="78" stroke="#2D3A4F" stroke-width="0.8"/>
      <g stroke="#64748B" stroke-width="1.6">
        <line x1="28" y1="22" x2="28" y2="30"/><line x1="38" y1="22" x2="38" y2="30"/><line x1="48" y1="22" x2="48" y2="30"/><line x1="58" y1="22" x2="58" y2="30"/>
        <line x1="28" y1="68" x2="28" y2="76"/><line x1="38" y1="68" x2="38" y2="76"/><line x1="48" y1="68" x2="48" y2="76"/><line x1="58" y1="68" x2="58" y2="76"/>
        <line x1="12" y1="36" x2="20" y2="36"/><line x1="12" y1="46" x2="20" y2="46"/><line x1="12" y1="56" x2="20" y2="56"/>
        <line x1="66" y1="36" x2="74" y2="36"/><line x1="66" y1="46" x2="74" y2="46"/><line x1="66" y1="56" x2="74" y2="56"/>
      </g>
      <rect x="20" y="30" width="46" height="38" rx="4" fill="#0F172A" stroke="#F87171" stroke-width="1.6"/>
      <text x="43" y="55" text-anchor="middle" font-family="Segoe UI,Arial,sans-serif" font-size="16" font-weight="800" fill="#FCA5A5">AI</text>
      <polygon points="78,24 114,29 144,44 166,56 196,86 196,104 78,104" fill="#EF4444" fill-opacity="0.22"/>
      <polyline points="78,24 114,29 144,44 166,56 196,86" fill="none" stroke="#EF4444" stroke-width="3"/>
      <circle cx="196" cy="86" r="4" fill="#FCA5A5" stroke="#B91C1C" stroke-width="1.5"/>
      <text x="150" y="96" font-family="Segoe UI,Arial,sans-serif" font-size="8.4" font-weight="800" fill="#FDE68A">4,697.51</text>
      <rect x="206" y="7" width="104" height="90" rx="3" fill="#0F172A" fill-opacity="0.88" stroke="#334155" stroke-width="0.9"/>
      <text x="213" y="23" font-family="Segoe UI,Arial,sans-serif" font-size="7.8" font-weight="700" fill="#CBD5E1">KOSPI</text>
      <text x="304" y="23" text-anchor="end" font-family="Segoe UI,Arial,sans-serif" font-size="11" font-weight="800" fill="#F87171">–6.2%</text>
      <line x1="212" y1="30" x2="304" y2="30" stroke="#334155" stroke-width="0.7"/>
      <text x="213" y="45" font-family="Segoe UI,Arial,sans-serif" font-size="7.6" font-weight="700" fill="#CBD5E1">SK HYNIX</text>
      <text x="304" y="45" text-anchor="end" font-family="Segoe UI,Arial,sans-serif" font-size="10.2" font-weight="800" fill="#F87171">–11.1%</text>
      <line x1="212" y1="52" x2="304" y2="52" stroke="#334155" stroke-width="0.7"/>
      <text x="213" y="67" font-family="Segoe UI,Arial,sans-serif" font-size="7.6" font-weight="700" fill="#CBD5E1">SAMSUNG</text>
      <text x="304" y="67" text-anchor="end" font-family="Segoe UI,Arial,sans-serif" font-size="10.2" font-weight="800" fill="#F87171">–9.9%</text>
      <line x1="212" y1="74" x2="304" y2="74" stroke="#334155" stroke-width="0.7"/>
      <text x="213" y="88" font-family="Segoe UI,Arial,sans-serif" font-size="7.5" font-weight="700" fill="#CBD5E1">TAIEX</text>
      <text x="304" y="88" text-anchor="end" font-family="Segoe UI,Arial,sans-serif" font-size="9.6" font-weight="800" fill="#FBBF24">–4.8%</text>
      <circle cx="15" cy="90" r="10" fill="#B45309" stroke="#FAF5EA" stroke-width="1.5"/>
      <text x="15" y="93.5" text-anchor="middle" font-family="Segoe UI,Arial,sans-serif" font-size="10" font-weight="800" fill="#FFFFFF">2</text>
    </svg>`;
  }

  // tiangong: Full-bleed orbital space scene with Earth curve, Tiangong station, Shenzhou-24, PK & CN flags
  return `<svg viewBox="0 0 316 104" width="100%" height="104" xmlns="http://www.w3.org/2000/svg">
    <rect width="316" height="104" fill="#0E1B33"/>
    <circle cx="26" cy="18" r="1" fill="#E2E8F0"/><circle cx="72" cy="12" r="1.2" fill="#FEF08A"/>
    <circle cx="122" cy="20" r="1" fill="#E2E8F0"/><circle cx="212" cy="14" r="1.2" fill="#E2E8F0"/>
    <circle cx="288" cy="18" r="1" fill="#FEF08A"/><circle cx="256" cy="26" r="1" fill="#E2E8F0"/>
    <path d="M0,104 Q158,64 316,104 Z" fill="#1D6FA5"/>
    <path d="M0,104 Q158,64 316,104" fill="none" stroke="#7DD3FC" stroke-width="2.5"/>
    <rect x="92" y="42" width="28" height="11" rx="4" fill="#E2E8F0"/>
    <rect x="86" y="34" width="10" height="27" rx="1" fill="#3B82F6"/>
    <path d="M120,47.5 L142,47.5" stroke="#FACC15" stroke-width="2" stroke-dasharray="3,2"/>
    <rect x="144" y="40" width="94" height="15" rx="4" fill="#F8FAFC" stroke="#94A3B8" stroke-width="1"/>
    <rect x="176" y="28" width="28" height="39" rx="3" fill="#CBD5E1"/>
    <rect x="150" y="13" width="22" height="27" fill="#1D4ED8" stroke="#93C5FD" stroke-width="0.9"/>
    <rect x="150" y="55" width="22" height="27" fill="#1D4ED8" stroke="#93C5FD" stroke-width="0.9"/>
    <rect x="210" y="13" width="22" height="27" fill="#1D4ED8" stroke="#93C5FD" stroke-width="0.9"/>
    <rect x="210" y="55" width="22" height="27" fill="#1D4ED8" stroke="#93C5FD" stroke-width="0.9"/>
    <rect x="12" y="10" width="30" height="19" fill="#15803D" stroke="#FFFFFF" stroke-width="0.7"/>
    <rect x="12" y="10" width="7.5" height="19" fill="#FFFFFF"/>
    <circle cx="30" cy="19.5" r="4.5" fill="#FFFFFF"/>
    <circle cx="31.5" cy="18.8" r="3.6" fill="#15803D"/>
    <rect x="46" y="10" width="30" height="19" fill="#DC2626" stroke="#FFFFFF" stroke-width="0.7"/>
    <circle cx="53" cy="16" r="2.6" fill="#FACC15"/>
    <circle cx="59" cy="13.5" r="1" fill="#FACC15"/><circle cx="60.5" cy="16.5" r="1" fill="#FACC15"/><circle cx="59" cy="19.5" r="1" fill="#FACC15"/>
    <text x="164" y="96" text-anchor="middle" font-family="Segoe UI,Arial,sans-serif" font-size="8.4" font-weight="800" fill="#FFFFFF" letter-spacing="0.35">SHENZHOU-24 · TIANGONG DOCKED 03:56 UTC</text>
    <circle cx="15" cy="90" r="10" fill="#B45309" stroke="#FAF5EA" stroke-width="1.5"/>
    <text x="15" y="93.5" text-anchor="middle" font-family="Segoe UI,Arial,sans-serif" font-size="10" font-weight="800" fill="#FFFFFF">3</text>
  </svg>`;
}

export function renderMediumGraphic(
  key:
    | 'cairo'
    | 'ofgem'
    | 'westjava'
    | 'gulfwar'
    | 'ukrainegrid'
    | 'solomons'
    | 'bangladesh'
    | 'ramaphosa'
    | 'gaza'
    | 'netanyahu',
  num: number,
  regionColor: string,
  badgeText: string
): string {
  const badgeW = Math.max(54, badgeText.length * 6.4 + 10);
  const overlayBadge = `
    <rect x="20" y="42" width="${badgeW}" height="14" rx="2" fill="#141414" fill-opacity="0.86"/>
    <text x="${20 + badgeW / 2}" y="51.8" text-anchor="middle" font-family="Segoe UI,Arial,sans-serif" font-size="7.5" font-weight="800" fill="#FFFFFF" letter-spacing="0.3">${badgeText}</text>
    <circle cx="12" cy="49" r="8.5" fill="${regionColor}" stroke="#FAF5EA" stroke-width="1.4"/>
    <text x="12" y="52.2" text-anchor="middle" font-family="Segoe UI,Arial,sans-serif" font-size="8.6" font-weight="800" fill="#FFFFFF">${num}</text>
  `;

  switch (key) {
    case 'cairo':
      return `<svg viewBox="0 0 188 60" width="100%" height="60" xmlns="http://www.w3.org/2000/svg">
        <rect width="188" height="60" fill="#FDE8D8"/>
        <circle cx="110" cy="18" r="14" fill="#475569" fill-opacity="0.45"/>
        <circle cx="132" cy="14" r="16" fill="#334155" fill-opacity="0.5"/>
        <circle cx="154" cy="18" r="12" fill="#64748B" fill-opacity="0.38"/>
        <path d="M98,44 C94,30 104,20 112,12 C117,24 125,18 128,28 C134,20 142,28 136,44 Z" fill="#DC2626"/>
        <path d="M107,44 C104,34 112,27 117,22 C121,30 127,31 125,44 Z" fill="#F59E0B"/>
        <rect y="42" width="188" height="18" fill="#475569"/>
        <line x1="10" y1="51" x2="178" y2="51" stroke="#F8FAFC" stroke-width="1.3" stroke-dasharray="9,6"/>
        <rect x="64" y="31" width="44" height="13" rx="4" fill="#1E293B" transform="rotate(-11 86 38)"/>
        <rect x="148" y="36" width="22" height="8" rx="1.5" fill="#991B1B"/>
        ${overlayBadge}
      </svg>`;

    case 'ofgem':
      // Upgraded: high-contrast gas flame + crisp bill with bold rising crimson arrow for 300px punch
      return `<svg viewBox="0 0 188 60" width="100%" height="60" xmlns="http://www.w3.org/2000/svg">
        <rect width="188" height="60" fill="#DBEAFE"/>
        <!-- Blue gas flame + rising arrow -->
        <path d="M32,42 C20,31 24,17 34,7 C41,17 48,30 36,42 Z" fill="#1D4ED8"/>
        <path d="M33,40 C28,33 30,25 34,19 C38,25 40,33 35,40 Z" fill="#93C5FD"/>
        <!-- Energy Bill Paper Card (clear of bottom-left badge) -->
        <rect x="74" y="4" width="108" height="51" rx="3" fill="#FFFFFF" stroke="#60A5FA" stroke-width="1.2"/>
        <rect x="74" y="4" width="108" height="12.5" rx="2" fill="#1E3A8A"/>
        <text x="128" y="12.8" text-anchor="middle" font-family="Segoe UI,Arial,sans-serif" font-size="7.2" font-weight="800" fill="#FFFFFF" letter-spacing="0.4">OFGEM JAN 1 CAP</text>
        <text x="80" y="28.5" font-family="Segoe UI,Arial,sans-serif" font-size="8.2" font-weight="700" fill="#64748B" text-decoration="line-through">£1,723</text>
        <!-- Bold upward red surge arrow -->
        <path d="M114,27.5 L127,20.5 L123,19.8 L131,19 L128,26.5 L127,22.5" fill="#B91C1C" stroke="#B91C1C" stroke-width="1.6" stroke-linejoin="round"/>
        <text x="157" y="28.5" text-anchor="middle" font-family="Segoe UI,Arial,sans-serif" font-size="9.2" font-weight="800" fill="#B91C1C">+26%</text>
        <text x="128" y="48.5" text-anchor="middle" font-family="Georgia,serif" font-size="18" font-weight="800" fill="#B91C1C">£2,166</text>
        ${overlayBadge}
      </svg>`;

    case 'westjava':
      return `<svg viewBox="0 0 188 60" width="100%" height="60" xmlns="http://www.w3.org/2000/svg">
        <rect width="188" height="22" fill="#CBD5E1"/>
        <g stroke="#0284C7" stroke-width="1.2"><line x1="28" y1="3" x2="24" y2="15"/><line x1="56" y1="4" x2="52" y2="16"/><line x1="128" y1="3" x2="124" y2="15"/><line x1="156" y1="5" x2="152" y2="16"/></g>
        <path d="M0,22 L72,18 L116,22 L188,20 L188,60 L0,60 Z" fill="#9A7B56"/>
        <path d="M0,22 L72,18 L116,22 L188,20 L188,27 L0,27 Z" fill="#4D7C0F"/>
        <rect x="82" y="20" width="24" height="38" fill="#291A0D"/>
        <rect x="82" y="32" width="24" height="26" fill="#0284C7"/>
        <path d="M12,21 Q48,16 82,23" fill="none" stroke="#0284C7" stroke-width="3.2"/>
        <text x="148" y="44" text-anchor="middle" font-family="Segoe UI,Arial,sans-serif" font-size="9.6" font-weight="800" fill="#FEF3C7">100 m</text>
        <text x="148" y="54" text-anchor="middle" font-family="Segoe UI,Arial,sans-serif" font-size="7.1" font-weight="700" fill="#FDE68A">17 TRAPPED</text>
        ${overlayBadge}
      </svg>`;

    case 'gulfwar':
      return `<svg viewBox="0 0 188 60" width="100%" height="60" xmlns="http://www.w3.org/2000/svg">
        <rect width="188" height="40" fill="#E0F2FE"/>
        <rect y="40" width="188" height="20" fill="#0369A1"/>
        <rect x="16" y="28" width="22" height="14" rx="2" fill="#CBD5E1" stroke="#475569" stroke-width="1"/>
        <rect x="42" y="30" width="18" height="12" rx="2" fill="#94A3B8" stroke="#475569" stroke-width="1"/>
        <rect x="65" y="18" width="5" height="24" fill="#64748B"/>
        <path d="M138,42 L144,18 L150,42 M126,22 L168,22" fill="none" stroke="#334155" stroke-width="2"/>
        <circle cx="156" cy="30" r="8" fill="#DC2626" fill-opacity="0.3"/>
        <path d="M156,34 C153,27 156,22 158,19 C161,23 163,28 156,34 Z" fill="#DC2626"/>
        <g stroke="#B91C1C" stroke-width="1.6">
          <line x1="88" y1="12" x2="98" y2="12"/><line x1="93" y1="7" x2="93" y2="17"/>
          <line x1="112" y1="16" x2="122" y2="16"/><line x1="117" y1="11" x2="117" y2="21"/>
        </g>
        <circle cx="93" cy="12" r="6" fill="#F59E0B" fill-opacity="0.35"/>
        <circle cx="117" cy="16" r="6" fill="#F59E0B" fill-opacity="0.35"/>
        <rect x="128" y="4" width="56" height="12.5" rx="2" fill="#B91C1C"/>
        <text x="156" y="12.8" text-anchor="middle" font-family="Segoe UI,Arial,sans-serif" font-size="7.1" font-weight="800" fill="#FFFFFF">BRENT $94.61</text>
        ${overlayBadge}
      </svg>`;

    case 'ukrainegrid':
      // Upgraded: higher-contrast steel pylon, crimson strike starburst, bright amber ZNPP diesel badge
      return `<svg viewBox="0 0 188 60" width="100%" height="60" xmlns="http://www.w3.org/2000/svg">
        <rect width="188" height="60" fill="#1E293B"/>
        <rect y="45" width="188" height="15" fill="#0F172A"/>
        <!-- ZNPP nuclear containment dome & cooling stack with amber backup glow -->
        <path d="M18,45 L18,28 A15,13 0 0,1 48,28 L48,45 Z" fill="#64748B" stroke="#94A3B8" stroke-width="0.9"/>
        <rect x="27" y="34" width="12" height="5" rx="1" fill="#FACC15"/>
        <rect x="54" y="21" width="9" height="24" fill="#94A3B8"/>
        <!-- Bright steel electrical pylon -->
        <path d="M108,45 L120,10 L132,45 M99,19 L141,19 M104,29 L136,29 M113,29 L127,19 M127,29 L113,19" fill="none" stroke="#E2E8F0" stroke-width="2"/>
        <!-- Crimson strike impact & severed yellow line -->
        <circle cx="145" cy="19" r="7.5" fill="#EF4444" fill-opacity="0.45"/>
        <path d="M141,19 Q154,27 162,41" fill="none" stroke="#FACC15" stroke-width="2" stroke-dasharray="3,2"/>
        <polygon points="154,8 147,21 153,21 148,34 162,18 156,18" fill="#FACC15" stroke="#B91C1C" stroke-width="0.6"/>
        <rect x="122" y="45" width="62" height="12" rx="2" fill="#B45309"/>
        <text x="153" y="53.5" text-anchor="middle" font-family="Segoe UI,Arial,sans-serif" font-size="7.1" font-weight="800" fill="#FEF3C7">ZNPP DIESEL</text>
        ${overlayBadge}
      </svg>`;

    case 'solomons':
      return `<svg viewBox="0 0 188 60" width="100%" height="60" xmlns="http://www.w3.org/2000/svg">
        <rect width="188" height="36" fill="#E0F2FE"/>
        <rect y="36" width="188" height="24" fill="#0284C7"/>
        <rect x="16" y="8" width="46" height="26" fill="#1E3A8A" stroke="#FFFFFF" stroke-width="0.8"/>
        <path d="M16,8 L36,20 M36,8 L16,20 M26,8 L26,20 M16,14 L36,14" stroke="#FFFFFF" stroke-width="2"/>
        <path d="M26,8 L26,20 M16,14 L36,14" stroke="#DC2626" stroke-width="1"/>
        <circle cx="52" cy="14" r="1.5" fill="#FFFFFF"/><circle cx="56" cy="21" r="1.5" fill="#FFFFFF"/><circle cx="48" cy="24" r="1.5" fill="#FFFFFF"/>
        <rect x="126" y="8" width="46" height="26" fill="#1D4ED8" stroke="#FFFFFF" stroke-width="0.8"/>
        <polygon points="126,34 172,8 172,34" fill="#15803D"/>
        <line x1="126" y1="34" x2="172" y2="8" stroke="#FACC15" stroke-width="3.2"/>
        <rect x="74" y="10" width="40" height="34" rx="2" fill="#FFFDF7" stroke="#475569" stroke-width="1"/>
        <line x1="80" y1="18" x2="108" y2="18" stroke="#64748B" stroke-width="1.3"/>
        <line x1="80" y1="24" x2="108" y2="24" stroke="#64748B" stroke-width="1.3"/>
        <line x1="80" y1="30" x2="100" y2="30" stroke="#64748B" stroke-width="1.3"/>
        <circle cx="104" cy="36" r="4.5" fill="#0369A1"/>
        ${overlayBadge}
      </svg>`;

    case 'bangladesh':
      return `<svg viewBox="0 0 188 60" width="100%" height="60" xmlns="http://www.w3.org/2000/svg">
        <rect width="188" height="60" fill="#FEF3C7"/>
        <path d="M12,28 L34,14 L34,28 L56,14 L56,28 L78,14 L78,28 L92,28 L92,56 L12,56 Z" fill="#9A3412"/>
        <rect x="20" y="34" width="12" height="8" fill="#FDE68A"/><rect x="38" y="34" width="12" height="8" fill="#FDE68A"/>
        <rect x="56" y="34" width="12" height="8" fill="#FDE68A"/><rect x="74" y="34" width="12" height="8" fill="#FDE68A"/>
        <rect x="106" y="30" width="24" height="20" fill="#94A3B8"/>
        <text x="118" y="27" text-anchor="middle" font-family="Segoe UI,Arial,sans-serif" font-size="6.8" font-weight="700" fill="#475569">12.5k</text>
        <rect x="136" y="18" width="24" height="32" fill="#15803D"/>
        <text x="148" y="15" text-anchor="middle" font-family="Segoe UI,Arial,sans-serif" font-size="7.4" font-weight="800" fill="#15803D">17k</text>
        <text x="172" y="25" text-anchor="middle" font-family="Segoe UI,Arial,sans-serif" font-size="8.5" font-weight="800" fill="#B91C1C">+36%</text>
        <text x="171" y="42" text-anchor="middle" font-family="Segoe UI,Arial,sans-serif" font-size="6.8" font-weight="800" fill="#991B1B">140+</text>
        <text x="171" y="49" text-anchor="middle" font-family="Segoe UI,Arial,sans-serif" font-size="6" font-weight="700" fill="#991B1B">SHUT</text>
        ${overlayBadge}
      </svg>`;

    case 'ramaphosa':
      // Upgraded: deeper portico shadow behind fluted white columns + bold high-contrast gavel
      return `<svg viewBox="0 0 188 60" width="100%" height="60" xmlns="http://www.w3.org/2000/svg">
        <rect width="188" height="60" fill="#DCFCE7"/>
        <!-- Classical Pillared High Court Facade with dark portico recess -->
        <polygon points="24,21 94,4 164,21" fill="#15803D" stroke="#14532D" stroke-width="0.9"/>
        <rect x="32" y="21" width="124" height="5" fill="#14532D"/>
        <rect x="38" y="26" width="112" height="25" fill="#166534"/>
        <rect x="44" y="26" width="10" height="25" fill="#FFFFFF" stroke="#14532D" stroke-width="0.8"/>
        <rect x="66" y="26" width="10" height="25" fill="#FFFFFF" stroke="#14532D" stroke-width="0.8"/>
        <rect x="112" y="26" width="10" height="25" fill="#FFFFFF" stroke="#14532D" stroke-width="0.8"/>
        <rect x="134" y="26" width="10" height="25" fill="#FFFFFF" stroke="#14532D" stroke-width="0.8"/>
        <rect x="24" y="51" width="140" height="6" fill="#14532D"/>
        <!-- Crisp gold-trimmed mahogany gavel in center doorway -->
        <rect x="83" y="29" width="21" height="9" rx="2" fill="#B45309" stroke="#FEF3C7" stroke-width="1" transform="rotate(-24 94 33)"/>
        <line x1="94" y1="36" x2="107" y2="49" stroke="#FDE68A" stroke-width="3.2" stroke-linecap="round"/>
        <line x1="94" y1="36" x2="107" y2="49" stroke="#78350F" stroke-width="1.8" stroke-linecap="round"/>
        ${overlayBadge}
      </svg>`;

    case 'gaza':
      // Upgraded: warm dusk ochre sky, bold damaged skyline, crisp white hospital with red cross + NO POWER
      return `<svg viewBox="0 0 188 60" width="100%" height="60" xmlns="http://www.w3.org/2000/svg">
        <rect width="188" height="44" fill="#F3E2CE"/>
        <rect y="44" width="188" height="16" fill="#C4AD91"/>
        <!-- Damaged concrete skyline -->
        <rect x="12" y="16" width="38" height="30" fill="#57534E"/>
        <rect x="18" y="22" width="7" height="7" fill="#1C1917"/><rect x="33" y="22" width="7" height="7" fill="#1C1917"/>
        <rect x="18" y="34" width="7" height="7" fill="#1C1917"/>
        <path d="M56,46 L56,12 L78,21 L89,14 L102,26 L102,46 Z" fill="#44403C"/>
        <circle cx="84" cy="12" r="9.5" fill="#475569" fill-opacity="0.5"/>
        <circle cx="96" cy="9" r="7.5" fill="#64748B" fill-opacity="0.4"/>
        <!-- Al-Rantisi Hospital card -->
        <rect x="116" y="10" width="64" height="38" rx="2.5" fill="#FFFFFF" stroke="#B91C1C" stroke-width="1.3"/>
        <rect x="140" y="21" width="16" height="5" fill="#DC2626"/>
        <rect x="145.5" y="15.5" width="5" height="16" fill="#DC2626"/>
        <rect x="122" y="35" width="52" height="10" rx="1.5" fill="#991B1B"/>
        <text x="148" y="42.4" text-anchor="middle" font-family="Segoe UI,Arial,sans-serif" font-size="6.8" font-weight="800" fill="#FFFFFF">NO POWER</text>
        ${overlayBadge}
      </svg>`;

    case 'netanyahu':
      return `<svg viewBox="0 0 188 60" width="100%" height="60" xmlns="http://www.w3.org/2000/svg">
        <rect width="188" height="60" fill="#F5EFE6"/>
        <rect x="0" y="40" width="188" height="20" fill="#78350F"/>
        <rect x="18" y="16" width="40" height="24" rx="2" fill="#E2D4BA" stroke="#92400E" stroke-width="1"/>
        <text x="38" y="31" text-anchor="middle" font-family="Segoe UI,Arial,sans-serif" font-size="8.5" font-weight="800" fill="#451A03">1000</text>
        <rect x="68" y="16" width="40" height="24" rx="2" fill="#E2D4BA" stroke="#92400E" stroke-width="1"/>
        <text x="88" y="31" text-anchor="middle" font-family="Segoe UI,Arial,sans-serif" font-size="8.5" font-weight="800" fill="#451A03">2000</text>
        <rect x="118" y="10" width="52" height="30" rx="2" fill="#FEF2F2" stroke="#B91C1C" stroke-width="1.5"/>
        <text x="144" y="23" text-anchor="middle" font-family="Segoe UI,Arial,sans-serif" font-size="9.5" font-weight="800" fill="#B91C1C">4000</text>
        <text x="144" y="34" text-anchor="middle" font-family="Segoe UI,Arial,sans-serif" font-size="6.6" font-weight="800" fill="#991B1B">RETHINK</text>
        ${overlayBadge}
      </svg>`;
  }
}
