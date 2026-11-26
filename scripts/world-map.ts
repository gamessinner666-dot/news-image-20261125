import { MAP_PINS, REGION_MAP } from '../data/stories.ts';

// Crisp light-parchment Robinson-style World Locator Map SVG with non-overlapping numbered pins.
export function renderWorldMapSvg(): string {
  const pinsSvg = MAP_PINS.map((pin) => {
    const color = REGION_MAP[pin.region].color;
    const isHero = pin.num <= 3;
    const r = isHero ? 6.2 : 5.1;
    const fontSize = isHero ? 6.3 : 5.4;
    return `
      <g>
        <circle cx="${pin.x}" cy="${pin.y}" r="${(r + 1.1).toFixed(1)}" fill="#FFFFFF" fill-opacity="0.92"/>
        <circle cx="${pin.x}" cy="${pin.y}" r="${r.toFixed(1)}" fill="${color}"/>
        <text x="${pin.x}" y="${(pin.y + fontSize * 0.36).toFixed(1)}" text-anchor="middle"
          font-family="Segoe UI,Arial,sans-serif" font-size="${fontSize}" font-weight="800" fill="#FFFFFF">${pin.num}</text>
      </g>
    `;
  }).join('');

  return `<svg viewBox="0 0 336 184" width="100%" height="184" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <clipPath id="mapFrame">
        <rect x="1" y="1" width="334" height="182" rx="4"/>
      </clipPath>
    </defs>
    <rect x="0.5" y="0.5" width="335" height="183" rx="4" fill="#E8F2F7" stroke="#C7BBA6" stroke-width="1"/>
    <g clip-path="url(#mapFrame)">
      <!-- Subtle graticule -->
      <line x1="0" y1="46" x2="336" y2="46" stroke="#D1E3EE" stroke-width="0.6"/>
      <line x1="0" y1="92" x2="336" y2="92" stroke="#BBD4E3" stroke-width="0.7" stroke-dasharray="3,2"/>
      <line x1="0" y1="138" x2="336" y2="138" stroke="#D1E3EE" stroke-width="0.6"/>
      <line x1="84" y1="0" x2="84" y2="184" stroke="#D1E3EE" stroke-width="0.6"/>
      <line x1="168" y1="0" x2="168" y2="184" stroke="#D1E3EE" stroke-width="0.6"/>
      <line x1="252" y1="0" x2="252" y2="184" stroke="#D1E3EE" stroke-width="0.6"/>

      <!-- Stylized World Continents (clean editorial silhouettes scaled to 184h) -->
      <g transform="scale(1, 1.07)">
        <!-- North America -->
        <path d="M18,22 L42,16 L78,18 L108,24 L118,36 L104,48 L96,60 L82,68 L74,80 L64,76 L58,64 L48,54 L36,42 L22,36 Z"
          fill="#E5DCC9" stroke="#B7A88E" stroke-width="0.8"/>
        <!-- Greenland -->
        <path d="M114,10 L138,8 L144,22 L128,28 L116,22 Z" fill="#E5DCC9" stroke="#B7A88E" stroke-width="0.8"/>
        <!-- Central America -->
        <path d="M74,80 L84,88 L90,92 L84,94 L72,85 Z" fill="#E5DCC9" stroke="#B7A88E" stroke-width="0.7"/>
        <!-- South America -->
        <path d="M88,92 L106,92 L124,102 L132,116 L124,132 L110,148 L100,156 L94,144 L94,124 L86,108 Z"
          fill="#E5DCC9" stroke="#B7A88E" stroke-width="0.8"/>
        <!-- Europe -->
        <path d="M150,24 L172,18 L194,20 L208,28 L206,46 L196,56 L184,60 L172,58 L160,60 L150,56 L154,44 L148,36 Z"
          fill="#E5DCC9" stroke="#B7A88E" stroke-width="0.8"/>
        <!-- UK / Ireland -->
        <path d="M153,36 L160,36 L161,46 L154,46 Z" fill="#E5DCC9" stroke="#B7A88E" stroke-width="0.7"/>
        <!-- Africa -->
        <path d="M148,66 L172,64 L196,68 L210,82 L212,96 L202,116 L194,136 L182,138 L174,120 L170,102 L152,92 L144,78 Z"
          fill="#E5DCC9" stroke="#B7A88E" stroke-width="0.8"/>
        <!-- Madagascar -->
        <path d="M210,118 L215,118 L214,130 L209,130 Z" fill="#E5DCC9" stroke="#B7A88E" stroke-width="0.6"/>
        <!-- Middle East & Asia -->
        <path d="M204,22 L248,18 L292,22 L316,32 L308,48 L294,64 L278,76 L266,84 L254,84 L244,92 L236,78 L224,80 L212,80 L202,68 L204,50 Z"
          fill="#E5DCC9" stroke="#B7A88E" stroke-width="0.8"/>
        <!-- Japan -->
        <path d="M302,52 L310,50 L312,62 L304,64 Z" fill="#E5DCC9" stroke="#B7A88E" stroke-width="0.7"/>
        <!-- Maritime SE Asia / Indonesia -->
        <path d="M258,98 L272,102 L286,106 L296,108 L292,113 L274,111 L256,104 Z" fill="#E5DCC9" stroke="#B7A88E" stroke-width="0.7"/>
        <!-- Australia -->
        <path d="M270,118 L294,114 L310,124 L308,142 L292,146 L274,140 L268,128 Z"
          fill="#E5DCC9" stroke="#B7A88E" stroke-width="0.8"/>
        <!-- New Zealand & Solomons -->
        <path d="M318,144 L326,140 L328,150 L320,154 Z" fill="#E5DCC9" stroke="#B7A88E" stroke-width="0.7"/>
        <circle cx="319" cy="113" r="3" fill="#E5DCC9" stroke="#B7A88E" stroke-width="0.7"/>
      </g>

      <!-- Numbered Region-Colored Story Pins -->
      ${pinsSvg}

      <!-- Subtle map footer captions -->
      <text x="6" y="178" font-family="Segoe UI,Arial,sans-serif" font-size="6.3" font-weight="700" fill="#64748B">32 GEO PINS · NUMBERED TO STORIES</text>
      <text x="330" y="178" text-anchor="end" font-family="Segoe UI,Arial,sans-serif" font-size="6.3" font-weight="700" fill="#475569">HEROES #1–#3 ENLARGED</text>
    </g>
  </svg>`;
}
