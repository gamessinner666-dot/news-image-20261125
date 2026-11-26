export type RegionId =
  | 'EU'
  | 'ME'
  | 'NA'
  | 'EA'
  | 'AF'
  | 'SA'
  | 'LA'
  | 'GL'
  | 'OC';

export type EpistemicTag = 'CONFIRMED' | 'OFFICIAL' | 'REPORTED' | 'CLAIM' | 'CLAIM/CONF.';

export interface RegionMeta {
  id: RegionId;
  name: string;
  shortLabel: string;
  color: string;
  tint: string;
  count: number;
}

export interface HeroStory {
  num: number;
  region: RegionId;
  epistemic: EpistemicTag;
  utc: string;
  source: string;
  headline: string;
  summary: string;
  graphicKey: 'ustr' | 'hormuz' | 'rosstat';
}

export interface MediumStory {
  num: number;
  region: RegionId;
  epistemic: EpistemicTag;
  utc: string;
  source: string;
  headline: string;
  summary: string;
  graphicKey:
    | 'shenzhou'
    | 'spacex'
    | 'cairo'
    | 'ofgem'
    | 'kospi'
    | 'westjava'
    | 'usmacro'
    | 'solomons'
    | 'bangladesh'
    | 'africa';
}

export interface DigestStory {
  num: number;
  region: RegionId;
  epistemic: 'CONF' | 'OFF' | 'RPT' | 'CLM';
  lead: string;
  detail: string;
  source: string;
}

export interface KeyMetric {
  value: string;
  label: string;
  sub: string;
  color: string;
}

export interface TimelineEvent {
  utc: string;
  label: string;
  region: RegionId;
}

export interface MapPin {
  num: number;
  region: RegionId;
  x: number;
  y: number;
  place: string;
}

export const EDITION_DATE = 'Wednesday 25 November 2026';
export const EDITION_DECK =
  'US proposes Section 301 tariffs on 14 partners  ·  Ras Tanura burns & coalition hits Hodeidah  ·  Cairo tanker inferno kills 31+  ·  Rosstat leak: 490,334 RU dead';

export const REGIONS: RegionMeta[] = [
  { id: 'EU', name: 'Europe', shortLabel: 'Europe', color: '#1D4ED8', tint: '#EFF6FF', count: 13 },
  { id: 'NA', name: 'North America', shortLabel: 'N. America', color: '#0F766E', tint: '#F0FDFA', count: 6 },
  { id: 'AF', name: 'Africa', shortLabel: 'Africa', color: '#15803D', tint: '#F0FDF4', count: 6 },
  { id: 'ME', name: 'Middle East', shortLabel: 'Mid East', color: '#B91C1C', tint: '#FEF2F2', count: 5 },
  { id: 'EA', name: 'East Asia', shortLabel: 'E. Asia', color: '#B45309', tint: '#FFFBEB', count: 5 },
  { id: 'LA', name: 'Latin America', shortLabel: 'LatAm', color: '#7E22CE', tint: '#FAF5FF', count: 4 },
  { id: 'SA', name: 'South & SE Asia', shortLabel: 'S/SE Asia', color: '#C2410C', tint: '#FFF7ED', count: 3 },
  { id: 'GL', name: 'World & Space', shortLabel: 'World/Space', color: '#334155', tint: '#F1F5F9', count: 3 },
  { id: 'OC', name: 'Oceania', shortLabel: 'Oceania', color: '#0369A1', tint: '#F0F9FF', count: 2 },
];

export const REGION_MAP: Record<RegionId, RegionMeta> = Object.fromEntries(
  REGIONS.map((r) => [r.id, r])
) as Record<RegionId, RegionMeta>;

export const KEY_METRICS: KeyMetric[] = [
  { value: '14', label: 'USTR 301 Partners', sub: 'Up to 40% CN · 35% VN', color: '#0F766E' },
  { value: '490,334', label: 'Leaked RU War Dead', sub: 'Rosstat / BBC-Mediazona', color: '#1D4ED8' },
  { value: '+26%', label: 'UK Energy Cap £2,166', sub: 'Ofgem Jan–Mar 2027', color: '#1D4ED8' },
  { value: '31+', label: 'Cairo Tanker Dead', sub: 'Giza Ring Road inferno', color: '#15803D' },
  { value: '-6.16%', label: 'Seoul Kospi Plunge', sub: '4,698 · Nikkei -2.78%', color: '#B45309' },
  { value: '1,000,000', label: 'SpaceX AI Sats OK’d', sub: 'FCC · Brent $94.61 (+3.5%)', color: '#B91C1C' },
];

export const TIMELINE_EVENTS: TimelineEvent[] = [
  { utc: '00:18', label: 'Shenzhou-24', region: 'EA' },
  { utc: '03:30', label: 'AU–Solomons', region: 'OC' },
  { utc: '06:30', label: 'Kospi -6.2%', region: 'EA' },
  { utc: '07:00', label: 'Ofgem +26%', region: 'EU' },
  { utc: '07:15', label: 'Rosstat 490K', region: 'EU' },
  { utc: '09:00', label: 'Cairo 31+', region: 'AF' },
  { utc: '09:30', label: 'Ras Tanura', region: 'ME' },
  { utc: '13:30', label: 'US GDP 4.3%', region: 'NA' },
  { utc: '15:00', label: 'USTR 301', region: 'NA' },
  { utc: '18:45', label: 'FCC 1M Sats', region: 'GL' },
  { utc: '21:55', label: 'UCL Lille 2-1', region: 'EU' },
];

export const HERO_STORIES: HeroStory[] = [
  {
    num: 1,
    region: 'NA',
    epistemic: 'OFFICIAL',
    utc: '15:00 UTC',
    source: 'USTR · Reuters · AP',
    headline: 'US proposes Section 301 tariffs on 14 trading partners',
    summary:
      'USTR Jamieson Greer cites structural overcapacity across 14 economies: proposed ceilings up to 20% China (40% alt), 35% Vietnam, 25% India, 18–20% ASEAN, 15% EU/JP/KR/TW; hearings Jan 25, 2027.',
    graphicKey: 'ustr',
  },
  {
    num: 2,
    region: 'ME',
    epistemic: 'CLAIM/CONF.',
    utc: '09:30 UTC',
    source: 'NASA FIRMS · Reuters · AP',
    headline: 'Ras Tanura burns, coalition hits Hodeidah; Hormuz mines claimed',
    summary:
      'NASA FIRMS confirms smoke over Saudi Arabia’s largest refinery after Houthi drone claim; Saudi coalition bombs Yemen’s Hodeidah port; IRGC claims 2 unnamed Hormuz tankers hit mines; Brent +3.5% ($94.61).',
    graphicKey: 'hormuz',
  },
  {
    num: 3,
    region: 'EU',
    epistemic: 'REPORTED',
    utc: '07:15 UTC',
    source: 'BBC · Mediazona · Reuters',
    headline: 'Leaked Rosstat files reveal 490,334 Russian war dead',
    summary:
      'Cyber Partisans & Silent Crow breach Russia’s stats agency (through Sept 2026); BBC & Mediazona verify 490,334 military deaths (~700K est. incl. missing). Merz warns: “Russia wants more than Ukraine.”',
    graphicKey: 'rosstat',
  },
];

export const MEDIUM_STORIES: MediumStory[] = [
  {
    num: 4,
    region: 'EA',
    epistemic: 'CONFIRMED',
    utc: '00:18 UTC',
    source: 'AP · Guardian · Xinhua',
    headline: 'Shenzhou-24 docks first Pakistani astronaut at Tiangong',
    summary: 'PAF pilot Muhammad Zeeshan Ali launches from Jiuquan with Tang Hongbo & Wu Yi.',
    graphicKey: 'shenzhou',
  },
  {
    num: 5,
    region: 'GL',
    epistemic: 'OFFICIAL',
    utc: '18:45 UTC',
    source: 'FCC · Guardian · Reuters',
    headline: 'FCC clears SpaceX for 1M orbital AI data centers',
    summary: '“Starmind” license sets 2033–40 milestones; Amazon, Viasat & astronomers warn of debris.',
    graphicKey: 'spacex',
  },
  {
    num: 6,
    region: 'AF',
    epistemic: 'CONFIRMED',
    utc: '09:00 UTC',
    source: 'AP · Guardian · National',
    headline: 'Giza fuel tanker inferno kills at least 31 near Cairo',
    summary: 'Overturned tanker explodes on Al-Warraq Ring Road, engulfing dozens of vehicles; 20+ hurt.',
    graphicKey: 'cairo',
  },
  {
    num: 7,
    region: 'EU',
    epistemic: 'OFFICIAL',
    utc: '07:00 UTC',
    source: 'Ofgem · BBC · Guardian',
    headline: 'UK energy cap jumps 26% to £2,166; nuclear test inquiry',
    summary: 'Gas shock lifts Jan–Mar bills from £1,723; PM Burnham orders 1952–67 atomic veteran probe.',
    graphicKey: 'ofgem',
  },
  {
    num: 8,
    region: 'EA',
    epistemic: 'CONFIRMED',
    utc: '06:30 UTC',
    source: 'JoongAng · Reuters',
    headline: 'Asian chip rout: Kospi plunges 6.16%; Nikkei -2.78%',
    summary: 'Samsung & SK hynix drag Seoul below 5,000 (4,698) on AI spending & financing jitters.',
    graphicKey: 'kospi',
  },
  {
    num: 9,
    region: 'SA',
    epistemic: 'CONFIRMED',
    utc: '05:30 UTC',
    source: 'AP · Al Jazeera',
    headline: 'Flooded West Java gold mine leaves 9 dead, 17 trapped',
    summary: 'Overflowing Ciseureuh River floods 100m illegal Bogor shaft; 11 escape as rescue stalls.',
    graphicKey: 'westjava',
  },
  {
    num: 10,
    region: 'NA',
    epistemic: 'OFFICIAL',
    utc: '13:30 UTC',
    source: 'Commerce · WashPost',
    headline: 'US Q3 GDP revised up to 4.3%; Oct PCE hits 3.8%',
    summary: 'AI capex lifts growth while sticky inflation spurs Fed hike bets; Dow 50,183, Gold -$175.',
    graphicKey: 'usmacro',
  },
  {
    num: 11,
    region: 'OC',
    epistemic: 'OFFICIAL',
    utc: '03:30 UTC',
    source: 'CNN · Guardian · PM.gov.au',
    headline: 'Australia & Solomons sign A$740M security treaty',
    summary: 'PMs Albanese & Wale bar foreign bases in Canberra pact as 2022 China security deal lapses.',
    graphicKey: 'solomons',
  },
  {
    num: 12,
    region: 'SA',
    epistemic: 'CONFIRMED',
    utc: '08:20 UTC',
    source: 'CNA · AP · Al Jazeera',
    headline: 'Bangladesh garment wage hiked to ৳17K; 140+ shut',
    summary: '4–2 board vote (+36%) rejected by unions seeking ৳18K+; Dhaka highways blocked in clashes.',
    graphicKey: 'bangladesh',
  },
  {
    num: 13,
    region: 'AF',
    epistemic: 'OFFICIAL',
    utc: '10:40 UTC',
    source: 'Daily Maverick · AP · WHO',
    headline: 'SA court voids Ramaphosa panel; DRC Ebola medics flee',
    summary: 'Phala Phala report ruled unlawful; eastern Congo fighting halts 11.7K-case Ebola response.',
    graphicKey: 'africa',
  },
];

// 34 ultra-crisp single-line briefs (17 left + 17 right), each engineered to fit on ONE clean line with ZERO wrapping or clipping.
export const DIGEST_LEFT: DigestStory[] = [
  { num: 14, region: 'EU', epistemic: 'OFF', lead: 'EU/UK €570M+ fine:', detail: 'Scent cartel hit (Givaudan, IFF, Firmenich)', source: 'EC' },
  { num: 15, region: 'EU', epistemic: 'OFF', lead: 'EU Quantum Act:', detail: '27-state binding law & €50B tech fund', source: 'EC' },
  { num: 16, region: 'EU', epistemic: 'OFF', lead: 'EU hybrid quotas:', detail: 'Statutory caps on Chinese hybrids Dec 1', source: 'Rtrs' },
  { num: 17, region: 'EU', epistemic: 'CONF', lead: 'Greece general strike:', detail: '~15K in Athens; air, rail & ferries halt', source: 'AP' },
  { num: 18, region: 'EU', epistemic: 'OFF', lead: 'Puigdemont return:', detail: 'Sets Dec 12 after Spain amnesty ruling', source: 'AJ' },
  { num: 19, region: 'EU', epistemic: 'CONF', lead: 'Canaries record:', detail: '1,990 migrants arrive on 15 boats in 24h', source: 'AP' },
  { num: 20, region: 'EU', epistemic: 'OFF', lead: 'EU defense & MI5:', detail: 'EUMAM extended to 2028; RU arson alert', source: 'EEAS' },
  { num: 21, region: 'EU', epistemic: 'RPT', lead: 'Franco-German budget:', detail: 'Moves to shield 7-yr EU plan vs Le Pen', source: 'FT' },
  { num: 22, region: 'EU', epistemic: 'CONF', lead: 'UCL Wed results:', detail: 'Lille 2–1 Bayern; PSG 2–2 Roma; Liv 3–0', source: 'UEFA' },
  { num: 23, region: 'EU', epistemic: 'CONF', lead: 'Davis Cup Final 8:', detail: 'Defending champ Italy beat S.Korea 2–1', source: 'DC' },
  { num: 24, region: 'EU', epistemic: 'OFF', lead: 'BBC Top Gear & appeal:', detail: 'Ramsay hosts 2028; seeks Trump suit end', source: 'BBC' },
  { num: 25, region: 'ME', epistemic: 'CONF', lead: 'Gaza hospital crisis:', detail: 'Al-Rantisi generator fails; al-Shati hit', source: 'AP' },
  { num: 26, region: 'ME', epistemic: 'OFF', lead: 'Israel +$5B defense:', detail: 'NIS 17.3B hike lifts 2026 near $55B', source: 'BD' },
  { num: 27, region: 'ME', epistemic: 'CONF', lead: 'Syria Hasakah blast:', detail: 'ISIS bike suicide bomber kills 2, hurts 5', source: 'AFP' },
  { num: 28, region: 'ME', epistemic: 'OFF', lead: 'UN rights chief warns:', detail: 'Türk cites atrocity risk in Gaza/W.Bank', source: 'UN' },
  { num: 29, region: 'EA', epistemic: 'OFF', lead: 'N.Korea expels envoy:', detail: 'Swiss chief Astier given 48h to leave', source: 'CNA' },
  { num: 30, region: 'EA', epistemic: 'OFF', lead: 'ASEAN+3 Kyoto deal:', detail: 'CN, JP, KR & ASEAN link digital pay', source: 'Kyodo' },
];

export const DIGEST_RIGHT: DigestStory[] = [
  { num: 31, region: 'EA', epistemic: 'RPT', lead: 'Kim nuclear tour:', detail: 'Inspects uranium sites; urges expansion', source: 'AP' },
  { num: 32, region: 'SA', epistemic: 'OFF', lead: 'World Bank India:', detail: '$500M + $1B MIGA backs bonds & energy', source: 'WB' },
  { num: 33, region: 'AF', epistemic: 'RPT', lead: 'Libya warship row:', detail: 'Italy rebukes Kyiv; 2 Libyan officers die', source: 'Rtrs' },
  { num: 34, region: 'AF', epistemic: 'OFF', lead: 'Sudan snubs talks:', detail: 'Rejects Ethiopia summit over RSF drones', source: 'ST' },
  { num: 35, region: 'AF', epistemic: 'CONF', lead: 'Centurion Test sweep:', detail: 'S.Africa win by inn. & 219; Mulder 7w', source: 'ANI' },
  { num: 36, region: 'AF', epistemic: 'OFF', lead: 'Nigeria border push:', detail: 'Tinubu vows security drive on borders', source: 'AJ' },
  { num: 37, region: 'LA', epistemic: 'CONF', lead: 'Cartagena siege ends:', detail: '70+ freed in 17-hr Éxito store rescue', source: 'AP' },
  { num: 38, region: 'LA', epistemic: 'OFF', lead: 'Mexico protests US:', detail: 'Sheinbaum blasts Gómez Mont → Spain', source: 'WP' },
  { num: 39, region: 'LA', epistemic: 'OFF', lead: 'Brazil–Argentina rift:', detail: 'Recalls envoy Bitelli; snubs Milei', source: 'EP' },
  { num: 40, region: 'LA', epistemic: 'OFF', lead: 'Tether invests $14.5M:', detail: 'Backs Argentine app Lemon (USDT/gold)', source: 'CR' },
  { num: 41, region: 'NA', epistemic: 'CONF', lead: 'Iowa 5-ton explosives:', detail: 'US Army blows up lead azide; EPA clear', source: 'CNN' },
  { num: 42, region: 'NA', epistemic: 'CONF', lead: 'CA king tides damage:', detail: 'High surf wrecks Pacifica Pier; floods', source: 'AP' },
  { num: 43, region: 'NA', epistemic: 'RPT', lead: 'AP DEA fentanyl sting:', detail: '1.4M fake pills left unseized in SW', source: 'AP' },
  { num: 44, region: 'NA', epistemic: 'OFF', lead: 'Canada & Philly NPS:', detail: 'Carney rejects Pentagon; slavery suit', source: 'WP' },
  { num: 45, region: 'GL', epistemic: 'RPT', lead: 'Microsoft ‘Code Red’:', detail: '1-hr M365 fix; OpenAI ω=9/4 claim', source: 'Rtrs' },
  { num: 46, region: 'GL', epistemic: 'OFF', lead: 'IOM 16 Days & gold:', detail: 'Aid cuts shut clinics; Gold -$175, BTC 59K', source: 'IOM' },
  { num: 47, region: 'OC', epistemic: 'OFF', lead: 'Australia CPI 4.9%:', detail: 'Oct inflation jumps from 4.3% on housing', source: 'ABS' },
];

// 30 cleanly spaced geo pins in 336x184 map viewport (zero overlaps!)
export const MAP_PINS: MapPin[] = [
  { num: 42, region: 'NA', x: 50, y: 63, place: 'California' },
  { num: 41, region: 'NA', x: 68, y: 55, place: 'Iowa' },
  { num: 1, region: 'NA', x: 84, y: 63, place: 'Washington' },
  { num: 10, region: 'NA', x: 101, y: 55, place: 'New York' },
  { num: 44, region: 'NA', x: 85, y: 41, place: 'Ottawa' },
  { num: 38, region: 'LA', x: 67, y: 82, place: 'Mexico City' },
  { num: 37, region: 'LA', x: 89, y: 97, place: 'Cartagena' },
  { num: 39, region: 'LA', x: 122, y: 125, place: 'Brasília' },
  { num: 40, region: 'LA', x: 106, y: 146, place: 'Buenos Aires' },
  { num: 7, region: 'EU', x: 153, y: 40, place: 'London' },
  { num: 22, region: 'EU', x: 169, y: 49, place: 'Lille/Paris' },
  { num: 18, region: 'EU', x: 152, y: 61, place: 'Madrid' },
  { num: 19, region: 'EU', x: 137, y: 76, place: 'Canaries' },
  { num: 17, region: 'EU', x: 188, y: 60, place: 'Athens' },
  { num: 3, region: 'EU', x: 205, y: 39, place: 'Moscow/Kyiv' },
  { num: 33, region: 'AF', x: 171, y: 71, place: 'Libya' },
  { num: 6, region: 'AF', x: 189, y: 79, place: 'Cairo/Giza' },
  { num: 25, region: 'ME', x: 206, y: 71, place: 'Gaza/Israel' },
  { num: 27, region: 'ME', x: 217, y: 59, place: 'Hasakah' },
  { num: 2, region: 'ME', x: 226, y: 81, place: 'Ras Tanura/Hormuz' },
  { num: 36, region: 'AF', x: 167, y: 97, place: 'Abuja' },
  { num: 34, region: 'AF', x: 199, y: 96, place: 'Khartoum' },
  { num: 13, region: 'AF', x: 184, y: 115, place: 'DRC' },
  { num: 35, region: 'AF', x: 191, y: 142, place: 'Cape Town/Centurion' },
  { num: 32, region: 'SA', x: 244, y: 81, place: 'New Delhi' },
  { num: 12, region: 'SA', x: 261, y: 82, place: 'Dhaka' },
  { num: 9, region: 'SA', x: 274, y: 117, place: 'West Java' },
  { num: 4, region: 'EA', x: 263, y: 58, place: 'Jiuquan' },
  { num: 8, region: 'EA', x: 289, y: 58, place: 'Seoul' },
  { num: 30, region: 'EA', x: 307, y: 62, place: 'Kyoto' },
  { num: 47, region: 'OC', x: 297, y: 140, place: 'Canberra' },
  { num: 11, region: 'OC', x: 320, y: 120, place: 'Honiara' },
];

export const EXCLUDED_TUE_24 =
  'Huawei 10/12 · Dow 50K · Sanofi $41B · Chen Jining · 4th Hormuz tanker · Riyadh PIF Tower · Sarkozy 2027 · Senegal AFCON · UK 5,258 heat deaths · Euclid quasar · Venezuela $237.5B · Real Madrid 5–1 · Sooryavanshi 204*';

export const EXCLUDED_THU_26 =
  'UN Nairobi housing summit · BBC–Met Office deal · USTR Greer CNBC · Brazil Embraer warning · US Thanksgiving';
