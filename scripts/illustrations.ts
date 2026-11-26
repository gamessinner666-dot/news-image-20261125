// Bespoke, bright Economist/BBC-style code-drawn SVG graphics for Wednesday 25 November 2026.
// Every graphic uses crisp vector geometry and inline data callouts on bright newsprint tints.

export function renderHeroGraphic(key: 'ustr' | 'hormuz' | 'rosstat'): string {
  if (key === 'ustr') {
    const bars = [
      { label: 'China (alt)', text: '40% alt / 20% base', color: '#B91C1C', w: 146 },
      { label: 'Vietnam', text: '35%', color: '#C2410C', w: 128 },
      { label: 'India', text: '25%', color: '#D97706', w: 92 },
      { label: 'ASEAN-4', text: '18–20%', color: '#0F766E', w: 73 },
      { label: 'EU·JP·KR·TW', text: '15% cap', color: '#1D4ED8', w: 55 },
    ];
    const rows = bars
      .map((b, i) => {
        const y = 20 + i * 13.8;
        return `
          <text x="58" y="${(y + 8.3).toFixed(1)}" text-anchor="end" font-family="Segoe UI,Arial,sans-serif" font-size="7.1" font-weight="700" fill="#1E293B">${b.label}</text>
          <rect x="62" y="${y.toFixed(1)}" width="150" height="10" rx="1.6" fill="#E2ECE9"/>
          <rect x="62" y="${y.toFixed(1)}" width="${b.w}" height="10" rx="1.6" fill="${b.color}"/>
          <text x="${(62 + b.w + 4.5).toFixed(1)}" y="${(y + 8.1).toFixed(1)}" font-family="Segoe UI,Arial,sans-serif" font-size="7.1" font-weight="800" fill="#0F172A">${b.text}</text>
        `;
      })
      .join('');
    return `<svg viewBox="0 0 300 94" width="100%" height="94" xmlns="http://www.w3.org/2000/svg">
      <rect width="300" height="94" rx="4" fill="#F2FBF9" stroke="#B7E4DB" stroke-width="0.9"/>
      <text x="8" y="12.5" font-family="Segoe UI,Arial,sans-serif" font-size="7.5" font-weight="800" fill="#0F766E" letter-spacing="0.35">USTR SECTION 301 · PROPOSED CEILINGS</text>
      <rect x="217" y="3.5" width="77" height="12.5" rx="2.5" fill="#0F766E"/>
      <text x="255.5" y="12" text-anchor="middle" font-family="Segoe UI,Arial,sans-serif" font-size="7.1" font-weight="800" fill="#FFFFFF">14 ECONOMIES</text>
      <line x1="62" y1="18" x2="62" y2="88" stroke="#94A3B8" stroke-width="0.75"/>
      <line x1="135" y1="18" x2="135" y2="88" stroke="#CBD5E1" stroke-width="0.6" stroke-dasharray="2,2"/>
      <line x1="208" y1="18" x2="208" y2="88" stroke="#CBD5E1" stroke-width="0.6" stroke-dasharray="2,2"/>
      ${rows}
      <text x="294" y="89" text-anchor="end" font-family="Segoe UI,Arial,sans-serif" font-size="6.4" font-weight="700" fill="#475569">Hearings: Jan 25, 2027</text>
    </svg>`;
  }

  if (key === 'hormuz') {
    return `<svg viewBox="0 0 300 94" width="100%" height="94" xmlns="http://www.w3.org/2000/svg">
      <rect width="300" height="94" rx="4" fill="#E7F2FA" stroke="#E8B4B4" stroke-width="0.9"/>
      <!-- Arabian Peninsula (SW) -->
      <path d="M0,32 L46,38 L82,53 L124,71 L162,73 L184,63 L210,77 L232,94 L0,94 Z" fill="#EFE4CD" stroke="#C5B293" stroke-width="0.9"/>
      <!-- Iran landmass (NE) -->
      <path d="M60,0 L300,0 L300,54 L256,50 L218,38 L184,48 L150,31 L104,17 Z" fill="#E8DFD1" stroke="#BFA98B" stroke-width="0.9"/>
      <!-- Shipping lane -->
      <path d="M74,31 C118,40 152,55 186,55 C215,54 246,62 276,71" fill="none" stroke="#1D4ED8" stroke-width="1.4" stroke-dasharray="3.5,2.5"/>
      <!-- Ras Tanura refinery tanks + confirmed fire/smoke plume -->
      <rect x="82" y="59" width="8" height="7" rx="1" fill="#64748B"/>
      <rect x="92" y="57" width="9" height="9" rx="1" fill="#475569"/>
      <circle cx="96" cy="57" r="9" fill="#DC2626" fill-opacity="0.18"/>
      <path d="M96,58 C92.5,51 94.5,46 96.5,42 C99,46 101,51 96,58 Z" fill="#DC2626"/>
      <path d="M99,45 C106,38 115,36 125,34" fill="none" stroke="#334155" stroke-width="3.4" stroke-linecap="round" stroke-opacity="0.58"/>
      <text x="12" y="75" font-family="Segoe UI,Arial,sans-serif" font-size="7.5" font-weight="800" fill="#991B1B">RAS TANURA</text>
      <text x="12" y="85" font-family="Segoe UI,Arial,sans-serif" font-size="6.4" font-weight="700" fill="#475569">NASA FIRMS plume</text>
      <!-- Strait of Hormuz 2 claimed mine strikes -->
      <circle cx="192" cy="56" r="5.8" fill="#F59E0B" fill-opacity="0.32" stroke="#D97706" stroke-width="1.1"/>
      <circle cx="207" cy="59" r="5.8" fill="#F59E0B" fill-opacity="0.32" stroke="#D97706" stroke-width="1.1"/>
      <path d="M189,56 L195,56 M192,53 L192,59" stroke="#B91C1C" stroke-width="1.4"/>
      <path d="M204,59 L210,59 M207,56 L207,62" stroke="#B91C1C" stroke-width="1.4"/>
      <!-- Clean non-overlapping Iran/IRGC callout with pointer -->
      <line x1="196" y1="29" x2="196" y2="49" stroke="#B45309" stroke-width="0.9" stroke-dasharray="2,1.5"/>
      <text x="176" y="13" text-anchor="middle" font-family="Segoe UI,Arial,sans-serif" font-size="7.2" font-weight="800" fill="#7C2D12">IRAN</text>
      <rect x="132" y="16" width="88" height="12" rx="2" fill="#FFFBEB" stroke="#F59E0B" stroke-width="0.7"/>
      <text x="176" y="24.2" text-anchor="middle" font-family="Segoe UI,Arial,sans-serif" font-size="6.3" font-weight="800" fill="#92400E">IRGC: 2 mined (claim)</text>
      <text x="247" y="86" text-anchor="middle" font-family="Segoe UI,Arial,sans-serif" font-size="6.5" font-weight="800" fill="#1E3A8A">STRAIT OF HORMUZ</text>
      <!-- Brent Oil Callout Pill -->
      <rect x="225" y="4" width="71" height="24" rx="3" fill="#B91C1C"/>
      <text x="260.5" y="14.5" text-anchor="middle" font-family="Segoe UI,Arial,sans-serif" font-size="8.1" font-weight="800" fill="#FFFFFF">BRENT $94.61</text>
      <text x="260.5" y="23.8" text-anchor="middle" font-family="Segoe UI,Arial,sans-serif" font-size="6.5" font-weight="700" fill="#FECACA">+3.5% ON DAY</text>
      <!-- Top-left label -->
      <rect x="4" y="4" width="90" height="12.5" rx="2.5" fill="#FFFFFF" fill-opacity="0.92"/>
      <text x="8" y="12.8" font-family="Segoe UI,Arial,sans-serif" font-size="6.8" font-weight="800" fill="#991B1B">PERSIAN GULF FLASHPOINT</text>
    </svg>`;
  }

  return `<svg viewBox="0 0 300 94" width="100%" height="94" xmlns="http://www.w3.org/2000/svg">
    <rect width="300" height="94" rx="4" fill="#F4F7FE" stroke="#C5D5F7" stroke-width="0.9"/>
    <text x="8" y="12.5" font-family="Segoe UI,Arial,sans-serif" font-size="7.4" font-weight="800" fill="#1D4ED8" letter-spacing="0.25">LEAKED ROSSTAT WAR DEATHS (2022–SEP 2026)</text>
    <line x1="28" y1="78" x2="218" y2="78" stroke="#94A3B8" stroke-width="0.8"/>
    <line x1="28" y1="55" x2="218" y2="55" stroke="#CBD5E1" stroke-width="0.6" stroke-dasharray="2,2"/>
    <line x1="28" y1="32" x2="218" y2="32" stroke="#CBD5E1" stroke-width="0.6" stroke-dasharray="2,2"/>
    <text x="24" y="79" text-anchor="end" font-family="Segoe UI,Arial,sans-serif" font-size="6.2" fill="#64748B">0</text>
    <text x="24" y="57" text-anchor="end" font-family="Segoe UI,Arial,sans-serif" font-size="6.2" fill="#64748B">250K</text>
    <text x="24" y="34" text-anchor="end" font-family="Segoe UI,Arial,sans-serif" font-size="6.2" fill="#64748B">500K</text>
    <polygon points="34,78 78,70 122,56 166,39 209,19 209,78" fill="#93C5FD" fill-opacity="0.28"/>
    <polyline points="34,78 78,70 122,56 166,39 209,19" fill="none" stroke="#60A5FA" stroke-width="1.3" stroke-dasharray="3,2"/>
    <polygon points="34,78 78,72 122,63 166,50 209,33 209,78" fill="#1D4ED8" fill-opacity="0.24"/>
    <polyline points="34,78 78,72 122,63 166,50 209,33" fill="none" stroke="#1D4ED8" stroke-width="2.4"/>
    <circle cx="209" cy="33" r="3.4" fill="#B91C1C" stroke="#FFFFFF" stroke-width="1.1"/>
    <circle cx="209" cy="19" r="2.6" fill="#1D4ED8"/>
    <text x="34" y="88" text-anchor="middle" font-family="Segoe UI,Arial,sans-serif" font-size="6.2" fill="#475569">2022</text>
    <text x="78" y="88" text-anchor="middle" font-family="Segoe UI,Arial,sans-serif" font-size="6.2" fill="#475569">2023</text>
    <text x="122" y="88" text-anchor="middle" font-family="Segoe UI,Arial,sans-serif" font-size="6.2" fill="#475569">2024</text>
    <text x="166" y="88" text-anchor="middle" font-family="Segoe UI,Arial,sans-serif" font-size="6.2" fill="#475569">2025</text>
    <text x="209" y="88" text-anchor="middle" font-family="Segoe UI,Arial,sans-serif" font-size="6.2" font-weight="800" fill="#1E293B">Sep’26</text>
    <rect x="223" y="18" width="72" height="31" rx="3" fill="#1D4ED8"/>
    <text x="259" y="31.5" text-anchor="middle" font-family="Segoe UI,Arial,sans-serif" font-size="9.6" font-weight="800" fill="#FFFFFF">490,334</text>
    <text x="259" y="42.5" text-anchor="middle" font-family="Segoe UI,Arial,sans-serif" font-size="6.2" font-weight="700" fill="#DBEAFE">ROSSTAT LEAK</text>
    <rect x="223" y="54" width="72" height="31" rx="3" fill="#FFFFFF" stroke="#93C5FD" stroke-width="0.9"/>
    <text x="259" y="67.5" text-anchor="middle" font-family="Segoe UI,Arial,sans-serif" font-size="9.1" font-weight="800" fill="#1E3A8A">~700,000</text>
    <text x="259" y="78" text-anchor="middle" font-family="Segoe UI,Arial,sans-serif" font-size="5.9" font-weight="700" fill="#475569">EST. INCL. MISSING</text>
  </svg>`;
}

export function renderMediumGraphic(
  key:
    | 'spacex'
    | 'shenzhou'
    | 'solomons'
    | 'usmacro'
    | 'uk_eu'
    | 'bangladesh'
    | 'kospi'
    | 'africa'
    | 'latam'
    | 'sports'
): string {
  switch (key) {
    case 'spacex':
      return `<svg viewBox="0 0 184 52" width="100%" height="52" xmlns="http://www.w3.org/2000/svg">
        <rect width="184" height="52" rx="3" fill="#EEF2F9" stroke="#CBD5E1" stroke-width="0.8"/>
        <path d="M8,52 A78,36 0 0,1 104,52" fill="#3B82F6" fill-opacity="0.22" stroke="#1D4ED8" stroke-width="1.2"/>
        <ellipse cx="56" cy="33" rx="44" ry="14" fill="none" stroke="#334155" stroke-width="1" stroke-dasharray="3,2"/>
        <rect x="19" y="23" width="10" height="5.5" rx="1" fill="#0F766E"/>
        <rect x="51" y="15" width="10" height="5.5" rx="1" fill="#1D4ED8"/>
        <rect x="82" y="22" width="10" height="5.5" rx="1" fill="#0F766E"/>
        <line x1="15" y1="25.8" x2="33" y2="25.8" stroke="#0F766E" stroke-width="1.2"/>
        <line x1="47" y1="17.8" x2="65" y2="17.8" stroke="#1D4ED8" stroke-width="1.2"/>
        <rect x="108" y="5" width="71" height="22" rx="2.5" fill="#1E293B"/>
        <text x="143.5" y="15.8" text-anchor="middle" font-family="Segoe UI,Arial,sans-serif" font-size="9.1" font-weight="800" fill="#FFFFFF">1,000,000</text>
        <text x="143.5" y="23.8" text-anchor="middle" font-family="Segoe UI,Arial,sans-serif" font-size="5.8" font-weight="700" fill="#93C5FD">ORBITAL AI NODES</text>
        <text x="143.5" y="37" text-anchor="middle" font-family="Segoe UI,Arial,sans-serif" font-size="6.8" font-weight="800" fill="#334155">FCC “Starmind”</text>
        <text x="143.5" y="46.5" text-anchor="middle" font-family="Segoe UI,Arial,sans-serif" font-size="6.2" font-weight="600" fill="#64748B">2033 → 2040 goal</text>
      </svg>`;

    case 'shenzhou':
      return `<svg viewBox="0 0 184 52" width="100%" height="52" xmlns="http://www.w3.org/2000/svg">
        <rect width="184" height="52" rx="3" fill="#FFFBEB" stroke="#FCD34D" stroke-width="0.8"/>
        <path d="M22,42 Q64,9 122,19" fill="none" stroke="#B45309" stroke-width="1.8" stroke-dasharray="3,2"/>
        <circle cx="22" cy="42" r="3.2" fill="#B91C1C"/>
        <text x="23" y="49.5" text-anchor="middle" font-family="Segoe UI,Arial,sans-serif" font-size="5.8" font-weight="800" fill="#78350F">JIUQUAN</text>
        <rect x="122" y="16" width="24" height="6.5" rx="2" fill="#1E293B"/>
        <rect x="115" y="8" width="8" height="22" rx="1" fill="#0369A1"/>
        <rect x="145" y="8" width="8" height="22" rx="1" fill="#0369A1"/>
        <text x="134" y="39.5" text-anchor="middle" font-family="Segoe UI,Arial,sans-serif" font-size="7.1" font-weight="800" fill="#1E293B">TIANGONG</text>
        <text x="134" y="48.5" text-anchor="middle" font-family="Segoe UI,Arial,sans-serif" font-size="6.1" font-weight="800" fill="#15803D">CN + PK CREW</text>
        <rect x="5" y="4" width="68" height="15" rx="2.5" fill="#B45309"/>
        <text x="39" y="14" text-anchor="middle" font-family="Segoe UI,Arial,sans-serif" font-size="7" font-weight="800" fill="#FFFFFF">SHENZHOU-24</text>
        <text x="8" y="29" font-family="Segoe UI,Arial,sans-serif" font-size="6.4" font-weight="700" fill="#92400E">00:18 UTC</text>
      </svg>`;

    case 'solomons':
      return `<svg viewBox="0 0 184 52" width="100%" height="52" xmlns="http://www.w3.org/2000/svg">
        <rect width="184" height="52" rx="3" fill="#F0F9FF" stroke="#BAE6FD" stroke-width="0.8"/>
        <path d="M6,29 L44,27 L56,40 L44,52 L6,52 Z" fill="#E8DFCE" stroke="#94A3B8" stroke-width="0.8"/>
        <circle cx="94" cy="17" r="3.6" fill="#0369A1"/>
        <circle cx="101" cy="21" r="2.3" fill="#0369A1"/>
        <path d="M48,38 Q70,25 91,18" fill="none" stroke="#0369A1" stroke-width="1.9"/>
        <text x="28" y="44" text-anchor="middle" font-family="Segoe UI,Arial,sans-serif" font-size="6.6" font-weight="800" fill="#0C4A6E">AU</text>
        <text x="86" y="11" text-anchor="middle" font-family="Segoe UI,Arial,sans-serif" font-size="6" font-weight="800" fill="#0369A1">HONIARA</text>
        <rect x="111" y="5" width="68" height="23" rx="2.5" fill="#0369A1"/>
        <text x="145" y="16" text-anchor="middle" font-family="Segoe UI,Arial,sans-serif" font-size="9.2" font-weight="800" fill="#FFFFFF">A$740M</text>
        <text x="145" y="24.5" text-anchor="middle" font-family="Segoe UI,Arial,sans-serif" font-size="5.8" font-weight="700" fill="#BAE6FD">10-YEAR PACT</text>
        <rect x="111" y="32" width="68" height="14" rx="2" fill="#FFFFFF" stroke="#0369A1" stroke-width="0.8"/>
        <text x="145" y="41.2" text-anchor="middle" font-family="Segoe UI,Arial,sans-serif" font-size="6" font-weight="800" fill="#0369A1">NO FOREIGN BASES</text>
      </svg>`;

    case 'usmacro':
      return `<svg viewBox="0 0 184 52" width="100%" height="52" xmlns="http://www.w3.org/2000/svg">
        <rect width="184" height="52" rx="3" fill="#F0FDFA" stroke="#99F6E4" stroke-width="0.8"/>
        <text x="31" y="10.5" text-anchor="middle" font-family="Segoe UI,Arial,sans-serif" font-size="6.3" font-weight="800" fill="#0F766E">US Q3 GDP</text>
        <rect x="9" y="24" width="19" height="18" rx="1.5" fill="#94A3B8"/>
        <text x="18.5" y="21.5" text-anchor="middle" font-family="Segoe UI,Arial,sans-serif" font-size="6" font-weight="700" fill="#475569">3.4%</text>
        <rect x="34" y="18" width="19" height="24" rx="1.5" fill="#0F766E"/>
        <text x="43.5" y="15.8" text-anchor="middle" font-family="Segoe UI,Arial,sans-serif" font-size="6.5" font-weight="800" fill="#0F766E">4.3%</text>
        <text x="31" y="49" text-anchor="middle" font-family="Segoe UI,Arial,sans-serif" font-size="5.7" font-weight="700" fill="#475569">Rev. Up</text>
        <line x1="61" y1="6" x2="61" y2="46" stroke="#CBD5E1" stroke-width="0.8"/>
        <rect x="66" y="6" width="51" height="40" rx="2.5" fill="#FEF2F2" stroke="#FCA5A5" stroke-width="0.8"/>
        <text x="91.5" y="17" text-anchor="middle" font-family="Segoe UI,Arial,sans-serif" font-size="6.2" font-weight="800" fill="#991B1B">OCT PCE</text>
        <text x="91.5" y="32" text-anchor="middle" font-family="Segoe UI,Arial,sans-serif" font-size="11.2" font-weight="800" fill="#B91C1C">3.8%</text>
        <text x="91.5" y="42" text-anchor="middle" font-family="Segoe UI,Arial,sans-serif" font-size="5.6" font-weight="700" fill="#7F1D1D">Core 3.3%</text>
        <text x="123" y="14.5" font-family="Segoe UI,Arial,sans-serif" font-size="6.7" font-weight="800" fill="#15803D">DOW 50,183</text>
        <text x="123" y="25.5" font-family="Segoe UI,Arial,sans-serif" font-size="6.4" font-weight="700" fill="#B91C1C">S&amp;P -0.25%</text>
        <text x="123" y="36" font-family="Segoe UI,Arial,sans-serif" font-size="6.4" font-weight="700" fill="#B91C1C">NDQ -0.62%</text>
        <text x="123" y="46.5" font-family="Segoe UI,Arial,sans-serif" font-size="6.3" font-weight="800" fill="#B45309">Gold -$175</text>
      </svg>`;

    case 'uk_eu':
      return `<svg viewBox="0 0 184 52" width="100%" height="52" xmlns="http://www.w3.org/2000/svg">
        <rect width="184" height="52" rx="3" fill="#EFF6FF" stroke="#BFDBFE" stroke-width="0.8"/>
        <rect x="5" y="5" width="84" height="42" rx="2.5" fill="#FFFFFF" stroke="#93C5FD" stroke-width="0.8"/>
        <!-- Tiny atomic orbit icon -->
        <circle cx="17" cy="14" r="2" fill="#1D4ED8"/>
        <ellipse cx="17" cy="14" rx="6" ry="2.4" fill="none" stroke="#1D4ED8" stroke-width="0.8" transform="rotate(30 17 14)"/>
        <ellipse cx="17" cy="14" rx="6" ry="2.4" fill="none" stroke="#1D4ED8" stroke-width="0.8" transform="rotate(-30 17 14)"/>
        <text x="54" y="16" text-anchor="middle" font-family="Segoe UI,Arial,sans-serif" font-size="6.2" font-weight="800" fill="#1E3A8A">UK ATOMIC</text>
        <text x="47" y="30.5" text-anchor="middle" font-family="Segoe UI,Arial,sans-serif" font-size="10.2" font-weight="800" fill="#1D4ED8">1952–67</text>
        <text x="47" y="41.5" text-anchor="middle" font-family="Segoe UI,Arial,sans-serif" font-size="6" font-weight="700" fill="#475569">40-yr veteran win</text>
        <rect x="95" y="5" width="84" height="42" rx="2.5" fill="#1D4ED8"/>
        <text x="137" y="16" text-anchor="middle" font-family="Segoe UI,Arial,sans-serif" font-size="6.4" font-weight="800" fill="#DBEAFE">EU + UK CARTEL</text>
        <text x="137" y="31" text-anchor="middle" font-family="Segoe UI,Arial,sans-serif" font-size="10.8" font-weight="800" fill="#FFFFFF">€570M+</text>
        <text x="137" y="41.5" text-anchor="middle" font-family="Segoe UI,Arial,sans-serif" font-size="5.8" font-weight="700" fill="#BFDBFE">Givaudan·IFF·Firm.</text>
      </svg>`;

    case 'bangladesh':
      return `<svg viewBox="0 0 184 52" width="100%" height="52" xmlns="http://www.w3.org/2000/svg">
        <rect width="184" height="52" rx="3" fill="#FFF7ED" stroke="#FDBA74" stroke-width="0.8"/>
        <rect x="10" y="28" width="23" height="14" rx="1.5" fill="#94A3B8"/>
        <text x="21.5" y="25" text-anchor="middle" font-family="Segoe UI,Arial,sans-serif" font-size="6.2" font-weight="700" fill="#475569">৳12.5k</text>
        <text x="21.5" y="49" text-anchor="middle" font-family="Segoe UI,Arial,sans-serif" font-size="5.6" fill="#64748B">Old</text>
        <rect x="39" y="20" width="23" height="22" rx="1.5" fill="#C2410C"/>
        <text x="50.5" y="17" text-anchor="middle" font-family="Segoe UI,Arial,sans-serif" font-size="6.6" font-weight="800" fill="#C2410C">৳17k</text>
        <text x="50.5" y="49" text-anchor="middle" font-family="Segoe UI,Arial,sans-serif" font-size="5.6" font-weight="700" fill="#9A3412">Board</text>
        <rect x="68" y="15" width="23" height="27" rx="1.5" fill="none" stroke="#B91C1C" stroke-width="1.2" stroke-dasharray="2.5,1.5"/>
        <text x="79.5" y="12" text-anchor="middle" font-family="Segoe UI,Arial,sans-serif" font-size="6.3" font-weight="800" fill="#B91C1C">৳18k+</text>
        <text x="79.5" y="49" text-anchor="middle" font-family="Segoe UI,Arial,sans-serif" font-size="5.6" fill="#B91C1C">Unions</text>
        <rect x="100" y="6" width="79" height="40" rx="2.5" fill="#B91C1C"/>
        <text x="139.5" y="21.5" text-anchor="middle" font-family="Segoe UI,Arial,sans-serif" font-size="11.5" font-weight="800" fill="#FFFFFF">140+</text>
        <text x="139.5" y="32" text-anchor="middle" font-family="Segoe UI,Arial,sans-serif" font-size="6.2" font-weight="800" fill="#FECACA">FACTORIES SHUT</text>
        <text x="139.5" y="41.5" text-anchor="middle" font-family="Segoe UI,Arial,sans-serif" font-size="5.7" fill="#FEE2E2">4–2 vote · +36%</text>
      </svg>`;

    case 'kospi':
      return `<svg viewBox="0 0 184 52" width="100%" height="52" xmlns="http://www.w3.org/2000/svg">
        <rect width="184" height="52" rx="3" fill="#FEF2F2" stroke="#FECACA" stroke-width="0.8"/>
        <line x1="8" y1="16" x2="112" y2="16" stroke="#94A3B8" stroke-width="0.8" stroke-dasharray="2.5,2"/>
        <text x="10" y="12.5" font-family="Segoe UI,Arial,sans-serif" font-size="6" font-weight="800" fill="#64748B">5,000 LINE</text>
        <polygon points="10,15 34,19 56,25 78,33 108,43 108,47 10,47" fill="#DC2626" fill-opacity="0.18"/>
        <polyline points="10,15 34,19 56,25 78,33 108,43" fill="none" stroke="#B91C1C" stroke-width="2.2"/>
        <circle cx="108" cy="43" r="2.8" fill="#B91C1C"/>
        <text x="84" y="47" font-family="Segoe UI,Arial,sans-serif" font-size="6.4" font-weight="800" fill="#991B1B">4,698</text>
        <rect x="116" y="5" width="63" height="20" rx="2.5" fill="#B91C1C"/>
        <text x="147.5" y="15" text-anchor="middle" font-family="Segoe UI,Arial,sans-serif" font-size="8.8" font-weight="800" fill="#FFFFFF">-6.16%</text>
        <text x="147.5" y="22.5" text-anchor="middle" font-family="Segoe UI,Arial,sans-serif" font-size="5.5" font-weight="700" fill="#FECACA">SEOUL KOSPI</text>
        <rect x="116" y="28" width="63" height="19" rx="2.5" fill="#FFFFFF" stroke="#FCA5A5" stroke-width="0.8"/>
        <text x="147.5" y="38" text-anchor="middle" font-family="Segoe UI,Arial,sans-serif" font-size="7.8" font-weight="800" fill="#B91C1C">-2.78%</text>
        <text x="147.5" y="44.8" text-anchor="middle" font-family="Segoe UI,Arial,sans-serif" font-size="5.4" font-weight="700" fill="#475569">NIKKEI 225</text>
      </svg>`;

    case 'africa':
      return `<svg viewBox="0 0 184 52" width="100%" height="52" xmlns="http://www.w3.org/2000/svg">
        <rect width="184" height="52" rx="3" fill="#F0FDF4" stroke="#BBF7D0" stroke-width="0.8"/>
        <rect x="5" y="5" width="84" height="42" rx="2.5" fill="#15803D"/>
        <!-- Tiny scale/shield mark -->
        <path d="M13,11 L21,11 L21,16 C21,18.5 17,20 17,20 C17,20 13,18.5 13,16 Z" fill="#BBF7D0" fill-opacity="0.35" stroke="#DCFCE7" stroke-width="0.8"/>
        <text x="53" y="16" text-anchor="middle" font-family="Segoe UI,Arial,sans-serif" font-size="6.1" font-weight="800" fill="#DCFCE7">W. CAPE COURT</text>
        <text x="47" y="30.5" text-anchor="middle" font-family="Segoe UI,Arial,sans-serif" font-size="9.8" font-weight="800" fill="#FFFFFF">VOIDED</text>
        <text x="47" y="41.5" text-anchor="middle" font-family="Segoe UI,Arial,sans-serif" font-size="5.8" font-weight="700" fill="#BBF7D0">Phala Phala report</text>
        <rect x="95" y="5" width="84" height="42" rx="2.5" fill="#FFFFFF" stroke="#FCA5A5" stroke-width="0.9"/>
        <!-- Tiny medical cross -->
        <rect x="103" y="12.5" width="7" height="2.4" fill="#DC2626"/>
        <rect x="105.3" y="10.2" width="2.4" height="7" fill="#DC2626"/>
        <text x="143" y="16" text-anchor="middle" font-family="Segoe UI,Arial,sans-serif" font-size="6.1" font-weight="800" fill="#B91C1C">DRC EBOLA</text>
        <text x="137" y="30.5" text-anchor="middle" font-family="Segoe UI,Arial,sans-serif" font-size="9.8" font-weight="800" fill="#991B1B">11,700+</text>
        <text x="137" y="41.5" text-anchor="middle" font-family="Segoe UI,Arial,sans-serif" font-size="5.7" font-weight="700" fill="#475569">Medics evacuated</text>
      </svg>`;

    case 'latam':
      return `<svg viewBox="0 0 184 52" width="100%" height="52" xmlns="http://www.w3.org/2000/svg">
        <rect width="184" height="52" rx="3" fill="#FAF5FF" stroke="#E9D5FF" stroke-width="0.8"/>
        <rect x="5" y="5" width="85" height="42" rx="2.5" fill="#7E22CE"/>
        <text x="47.5" y="16" text-anchor="middle" font-family="Segoe UI,Arial,sans-serif" font-size="6.3" font-weight="800" fill="#F3E8FF">CARTAGENA</text>
        <text x="47.5" y="30.5" text-anchor="middle" font-family="Segoe UI,Arial,sans-serif" font-size="10.2" font-weight="800" fill="#FFFFFF">70+ FREED</text>
        <text x="47.5" y="41.5" text-anchor="middle" font-family="Segoe UI,Arial,sans-serif" font-size="5.8" font-weight="700" fill="#E9D5FF">17-hr Éxito siege</text>
        <rect x="95" y="5" width="84" height="42" rx="2.5" fill="#FFFFFF" stroke="#C084FC" stroke-width="0.9"/>
        <path d="M106,33 Q137,20 168,31" fill="none" stroke="#9333EA" stroke-width="1.2" stroke-dasharray="2.5,1.5"/>
        <circle cx="106" cy="33" r="2.2" fill="#7E22CE"/>
        <circle cx="168" cy="31" r="2.2" fill="#B91C1C"/>
        <text x="137" y="16" text-anchor="middle" font-family="Segoe UI,Arial,sans-serif" font-size="6.3" font-weight="800" fill="#6B21A8">MEXICO PROTEST</text>
        <text x="137" y="27" text-anchor="middle" font-family="Segoe UI,Arial,sans-serif" font-size="6.4" font-weight="800" fill="#1E293B">US → SPAIN</text>
        <text x="137" y="42" text-anchor="middle" font-family="Segoe UI,Arial,sans-serif" font-size="5.6" font-weight="700" fill="#475569">Gómez Mont row</text>
      </svg>`;

    case 'sports':
      return `<svg viewBox="0 0 184 52" width="100%" height="52" xmlns="http://www.w3.org/2000/svg">
        <rect width="184" height="52" rx="3" fill="#EEF5FF" stroke="#BFDBFE" stroke-width="0.8"/>
        <rect x="5" y="4.5" width="85" height="20" rx="2.2" fill="#1D4ED8"/>
        <text x="47.5" y="17.5" text-anchor="middle" font-family="Segoe UI,Arial,sans-serif" font-size="7.9" font-weight="800" fill="#FFFFFF">LIL 2–1 BAY</text>
        <rect x="94" y="4.5" width="85" height="20" rx="2.2" fill="#FFFFFF" stroke="#93C5FD" stroke-width="0.9"/>
        <text x="136.5" y="17.5" text-anchor="middle" font-family="Segoe UI,Arial,sans-serif" font-size="7.9" font-weight="800" fill="#1E3A8A">PSG 2–2 ROM</text>
        <rect x="5" y="27.5" width="85" height="20" rx="2.2" fill="#FFFFFF" stroke="#93C5FD" stroke-width="0.9"/>
        <text x="47.5" y="40.5" text-anchor="middle" font-family="Segoe UI,Arial,sans-serif" font-size="7.9" font-weight="800" fill="#15803D">BRU 0–3 LIV</text>
        <rect x="94" y="27.5" width="85" height="20" rx="2.2" fill="#0F766E"/>
        <text x="136.5" y="40.5" text-anchor="middle" font-family="Segoe UI,Arial,sans-serif" font-size="7.4" font-weight="800" fill="#FFFFFF">DC: ITA 2–1 KR</text>
      </svg>`;
  }
}
