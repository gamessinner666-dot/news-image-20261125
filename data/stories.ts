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
    | 'spacex'
    | 'shenzhou'
    | 'solomons'
    | 'usmacro'
    | 'uk_eu'
    | 'bangladesh'
    | 'kospi'
    | 'africa'
    | 'latam'
    | 'sports';
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
  'US proposes Section 301 tariffs on 14 partners  ·  Ras Tanura refinery burns & IRGC claims Hormuz mines  ·  Leaked Rosstat files count 490,334 Russian war dead';

export const REGIONS: RegionMeta[] = [
  { id: 'EU', name: 'Europe', shortLabel: 'Europe', color: '#1D4ED8', tint: '#EFF6FF', count: 8 },
  { id: 'ME', name: 'Middle East', shortLabel: 'Mid East', color: '#B91C1C', tint: '#FEF2F2', count: 5 },
  { id: 'NA', name: 'North America', shortLabel: 'N. America', color: '#0F766E', tint: '#F0FDFA', count: 5 },
  { id: 'EA', name: 'East Asia', shortLabel: 'E. Asia', color: '#B45309', tint: '#FFFBEB', count: 4 },
  { id: 'AF', name: 'Africa', shortLabel: 'Africa', color: '#15803D', tint: '#F0FDF4', count: 4 },
  { id: 'SA', name: 'South & SE Asia', shortLabel: 'S/SE Asia', color: '#C2410C', tint: '#FFF7ED', count: 3 },
  { id: 'LA', name: 'Latin America', shortLabel: 'LatAm', color: '#7E22CE', tint: '#FAF5FF', count: 3 },
  { id: 'GL', name: 'World & Space', shortLabel: 'World/Space', color: '#334155', tint: '#F1F5F9', count: 3 },
  { id: 'OC', name: 'Oceania', shortLabel: 'Oceania', color: '#0369A1', tint: '#F0F9FF', count: 2 },
];

export const REGION_MAP: Record<RegionId, RegionMeta> = Object.fromEntries(
  REGIONS.map((r) => [r.id, r])
) as Record<RegionId, RegionMeta>;

export const KEY_METRICS: KeyMetric[] = [
  { value: '14', label: 'USTR 301 Partners', sub: 'Up to 40% CN · 35% VN', color: '#0F766E' },
  { value: '$94.61', label: 'Brent Crude (+3.5%)', sub: 'Ras Tanura & Hormuz', color: '#B91C1C' },
  { value: '490,334', label: 'Leaked RU War Dead', sub: 'Rosstat / BBC-Mediazona', color: '#1D4ED8' },
  { value: '1,000,000', label: 'SpaceX AI Sats OK’d', sub: 'FCC Starmind 2033–40', color: '#334155' },
  { value: '4.3% / 3.8%', label: 'US Q3 GDP / Oct PCE', sub: 'Dow 50,183 · Gold -$175', color: '#0F766E' },
  { value: '-6.16%', label: 'Seoul Kospi Plunge', sub: '4,698 on AI chip sell-off', color: '#B45309' },
];

export const TIMELINE_EVENTS: TimelineEvent[] = [
  { utc: '00:18', label: 'Shenzhou-24', region: 'EA' },
  { utc: '03:30', label: 'AU–Solomons', region: 'OC' },
  { utc: '06:30', label: 'Kospi -6.2%', region: 'EA' },
  { utc: '07:00', label: 'Rosstat 490K', region: 'EU' },
  { utc: '08:20', label: 'Dhaka ৳17K', region: 'SA' },
  { utc: '09:30', label: 'Ras Tanura', region: 'ME' },
  { utc: '12:15', label: 'UK Nuke / €570M', region: 'EU' },
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
      'USTR Jamieson Greer cites structural overcapacity: proposed duties up to 20% China (40% alt), 35% Vietnam, 25% India, 18–20% ASEAN, 15% EU/Japan/S.Korea/Taiwan; hearings Jan 25, 2027.',
    graphicKey: 'ustr',
  },
  {
    num: 2,
    region: 'ME',
    epistemic: 'CLAIM/CONF.',
    utc: '09:30 UTC',
    source: 'NASA FIRMS · Reuters · AP',
    headline: 'Ras Tanura refinery burns; IRGC claims 2 Hormuz ships mined',
    summary:
      'NASA FIRMS & Planet Labs confirm smoke plume over Saudi Arabia’s top refinery after Houthi drone claim; IRGC claims 2 unnamed tankers hit mines in Hormuz; Brent jumps 3.5% to $94.61.',
    graphicKey: 'hormuz',
  },
  {
    num: 3,
    region: 'EU',
    epistemic: 'REPORTED',
    utc: '07:00 UTC',
    source: 'BBC · Mediazona · Reuters',
    headline: 'Leaked Rosstat files show 490,334 Russian war dead',
    summary:
      'Cyber Partisans & Silent Crow breach Russia’s stats agency (through Sept 2026); BBC & Mediazona verify 490,334 deaths (~700K est. incl. missing). Merz warns: “Russia wants more than Ukraine.”',
    graphicKey: 'rosstat',
  },
];

export const MEDIUM_STORIES: MediumStory[] = [
  {
    num: 4,
    region: 'GL',
    epistemic: 'OFFICIAL',
    utc: '18:45 UTC',
    source: 'FCC · Guardian · Reuters',
    headline: 'FCC clears SpaceX for 1M orbital AI data centers',
    summary: '“Starmind” license sets 2033–40 milestones; Amazon, Viasat & astronomers warn of debris.',
    graphicKey: 'spacex',
  },
  {
    num: 5,
    region: 'EA',
    epistemic: 'CONFIRMED',
    utc: '00:18 UTC',
    source: 'AP · Guardian · Xinhua',
    headline: 'Shenzhou-24 takes first foreign astronaut to Tiangong',
    summary: 'Pakistani pilot Muhammad Zeeshan Ali launches from Jiuquan with Tang Hongbo & Wu Yi.',
    graphicKey: 'shenzhou',
  },
  {
    num: 6,
    region: 'OC',
    epistemic: 'OFFICIAL',
    utc: '03:30 UTC',
    source: 'CNN · Guardian · PM.gov.au',
    headline: 'Australia & Solomons sign A$740M security treaty',
    summary: 'PMs Albanese & Wale bar foreign bases in Canberra pact as 2022 China deal lapses.',
    graphicKey: 'solomons',
  },
  {
    num: 7,
    region: 'NA',
    epistemic: 'OFFICIAL',
    utc: '13:30 UTC',
    source: 'Commerce · WashPost · CNN',
    headline: 'US Q3 GDP revised to 4.3%; Oct PCE hits 3.8%',
    summary: 'AI capex drives growth while inflation spurs Fed hike bets; Dow +0.3% (50,183), S&P -0.3%.',
    graphicKey: 'usmacro',
  },
  {
    num: 8,
    region: 'EU',
    epistemic: 'OFFICIAL',
    utc: '12:15 UTC',
    source: 'Guardian · AP · EC',
    headline: 'UK nuclear test inquiry; EU fines scent cartel €570M',
    summary: 'PM Burnham orders 1952–67 atomic veteran probe; EU/UK fine Givaudan, Firmenich & IFF.',
    graphicKey: 'uk_eu',
  },
  {
    num: 9,
    region: 'SA',
    epistemic: 'CONFIRMED',
    utc: '08:20 UTC',
    source: 'CNA · AP · Al Jazeera',
    headline: 'Bangladesh garment wage hiked to ৳17K; 140 shut',
    summary: '4–2 wage board vote rejected by unions demanding ৳18K+; Dhaka highways blocked in clashes.',
    graphicKey: 'bangladesh',
  },
  {
    num: 10,
    region: 'EA',
    epistemic: 'CONFIRMED',
    utc: '06:30 UTC',
    source: 'JoongAng · Reuters',
    headline: 'Kospi plunges 6.16% on chips; Nikkei down 2.78%',
    summary: 'Samsung & SK hynix drag Seoul below 5,000 (4,698) on AI spending jitters.',
    graphicKey: 'kospi',
  },
  {
    num: 11,
    region: 'AF',
    epistemic: 'OFFICIAL',
    utc: '10:40 UTC',
    source: 'Daily Maverick · AP · WHO',
    headline: 'SA court voids Ramaphosa panel; DRC Ebola flee',
    summary: 'Phala Phala report ruled unlawful; eastern Congo clashes force medics out (11.7K+ cases).',
    graphicKey: 'africa',
  },
  {
    num: 12,
    region: 'LA',
    epistemic: 'CONFIRMED',
    utc: '07:15 UTC',
    source: 'AP · WashPost · El País',
    headline: 'Cartagena 17-hr siege ends; Mexico protests US',
    summary: '70+ rescued at Éxito store after heist; Sheinbaum protests Gómez Mont deportation to Spain.',
    graphicKey: 'latam',
  },
  {
    num: 13,
    region: 'EU',
    epistemic: 'CONFIRMED',
    utc: '21:55 UTC',
    source: 'UEFA · Guardian · Davis Cup',
    headline: 'UCL Wed: Lille stun Bayern 2–1; PSG 2–2 Roma',
    summary: 'Liverpool win 3–0 at Brugge; Sporting 2–2 Man Utd; Italy beat S.Korea 2–1 in Davis Cup.',
    graphicKey: 'sports',
  },
];

export const DIGEST_LEFT: DigestStory[] = [
  { num: 14, region: 'EU', epistemic: 'OFF', lead: 'EU Quantum Act:', detail: 'Brussels unveils binding 27-state quantum law & €50B tech fund', source: 'EC' },
  { num: 15, region: 'EU', epistemic: 'CONF', lead: 'Greece general strike:', detail: '~15,000 march in Athens; 24h walkout halts flights, ferries & metro', source: 'AP' },
  { num: 16, region: 'EU', epistemic: 'OFF', lead: 'Puigdemont return:', detail: 'Exiled Catalan leader sets Dec 12 return after Spain’s amnesty', source: 'AJ' },
  { num: 17, region: 'EU', epistemic: 'CONF', lead: 'Canaries migrant record:', detail: '1,990 reach El Hierro & islands on 15 boats in 24h Atlantic high', source: 'AP' },
  { num: 18, region: 'EU', epistemic: 'OFF', lead: 'EU defense & MI5 alert:', detail: 'EU extends Ukraine EUMAM to 2028; MI5 warns of Russian arson', source: 'EEAS' },
  { num: 19, region: 'GL', epistemic: 'RPT', lead: 'Microsoft ‘Code Red’:', detail: '1-hr outage target after M365 crash; OpenAI claims ω=9/4 proof', source: 'Rtrs' },
  { num: 20, region: 'GL', epistemic: 'OFF', lead: 'IOM 16 Days & markets:', detail: 'Aid cuts shut women’s shelters; Gold -$175 ($3,460), BTC ~$59K', source: 'IOM' },
  { num: 21, region: 'ME', epistemic: 'CONF', lead: 'Gaza hospital blackout:', detail: 'Al-Rantisi Children’s generator fails in blockade; al-Shati strike', source: 'AP' },
  { num: 22, region: 'ME', epistemic: 'OFF', lead: 'Israel +$5B defense:', detail: 'Joint committee passes NIS 17.3B hike, lifting 2026 near $55B', source: 'BD' },
  { num: 23, region: 'ME', epistemic: 'CONF', lead: 'Syria Hasakah blast:', detail: 'ISIS motorcycle suicide bomber hits checkpoint, killing 2, injuring 5', source: 'AFP' },
  { num: 24, region: 'ME', epistemic: 'OFF', lead: 'UN rights chief warns:', detail: 'Volker Türk cites widening atrocity crime risk in Gaza & West Bank', source: 'UN' },
  { num: 25, region: 'EA', epistemic: 'OFF', lead: 'N. Korea expels envoy:', detail: 'Pyongyang orders Swiss chief Sylvain Astier out in 48h over sanctions', source: 'CNA' },
];

export const DIGEST_RIGHT: DigestStory[] = [
  { num: 26, region: 'EA', epistemic: 'OFF', lead: 'ASEAN+3 Kyoto deal:', detail: 'China, Japan, S.Korea & ASEAN launch digital payments group', source: 'Kyodo' },
  { num: 27, region: 'SA', epistemic: 'CONF', lead: 'West Java mine flood:', detail: 'River floods 100m illegal gold shaft in Bogor; 9+ dead, 13+ trapped', source: 'AP' },
  { num: 28, region: 'SA', epistemic: 'OFF', lead: 'World Bank India aid:', detail: '$500M loan/guarantee + $1B MIGA backs bond & clean energy', source: 'WB' },
  { num: 29, region: 'AF', epistemic: 'OFF', lead: 'Sudan snubs talks:', detail: 'Khartoum rejects Ethiopia peace summit over alleged RSF drones', source: 'ST' },
  { num: 30, region: 'AF', epistemic: 'CONF', lead: 'Centurion Test sweep:', detail: 'South Africa crush Bangladesh by innings & 219; Mulder 7 wkts', source: 'ANI' },
  { num: 31, region: 'AF', epistemic: 'OFF', lead: 'Nigeria border push:', detail: 'President Tinubu pledges renewed security drive on rebel borders', source: 'AJ' },
  { num: 32, region: 'NA', epistemic: 'CONF', lead: 'Iowa 5-ton explosives:', detail: 'US Army detonates unstable lead azide in Middletown; EPA all-clear', source: 'CNN' },
  { num: 33, region: 'NA', epistemic: 'RPT', lead: 'AP: DEA fentanyl sting:', detail: 'Probe reveals DEA left 1.4M fake pills unseized in Southwest ring', source: 'AP' },
  { num: 34, region: 'NA', epistemic: 'OFF', lead: 'Canada vs Pentagon:', detail: 'PM Carney rejects US defense critique as Ottawa backs Bill C-39', source: 'WP' },
  { num: 35, region: 'LA', epistemic: 'OFF', lead: 'Brazil–Argentina rift:', detail: 'Brasília recalls envoy Julio Bitelli & snubs Milei over election jab', source: 'EP' },
  { num: 36, region: 'LA', epistemic: 'OFF', lead: 'Tether invests $14.5M:', detail: 'Stablecoin issuer backs Argentine app Lemon for USDT & gold', source: 'CR' },
  { num: 37, region: 'OC', epistemic: 'OFF', lead: 'Australia CPI 4.9%:', detail: 'ABS Oct inflation jumps from 4.3% on 6.4% housing surge', source: 'ABS' },
];

// Carefully spaced coordinates in a 336x182 Robinson-style SVG map viewport (zero overlaps)
export const MAP_PINS: MapPin[] = [
  { num: 1, region: 'NA', x: 84, y: 63, place: 'Washington' },
  { num: 7, region: 'NA', x: 100, y: 56, place: 'New York' },
  { num: 32, region: 'NA', x: 68, y: 56, place: 'Iowa' },
  { num: 34, region: 'NA', x: 85, y: 42, place: 'Ottawa' },
  { num: 12, region: 'LA', x: 89, y: 98, place: 'Cartagena' },
  { num: 35, region: 'LA', x: 122, y: 125, place: 'Brasília' },
  { num: 36, region: 'LA', x: 106, y: 146, place: 'Buenos Aires' },
  { num: 8, region: 'EU', x: 154, y: 42, place: 'London' },
  { num: 13, region: 'EU', x: 171, y: 51, place: 'Lille/Paris' },
  { num: 16, region: 'EU', x: 152, y: 62, place: 'Madrid' },
  { num: 17, region: 'EU', x: 138, y: 76, place: 'Canaries' },
  { num: 15, region: 'EU', x: 189, y: 61, place: 'Athens' },
  { num: 3, region: 'EU', x: 205, y: 40, place: 'Moscow/Kyiv' },
  { num: 21, region: 'ME', x: 194, y: 77, place: 'Gaza/Israel' },
  { num: 23, region: 'ME', x: 211, y: 64, place: 'Hasakah' },
  { num: 2, region: 'ME', x: 224, y: 80, place: 'Hormuz/Ras Tanura' },
  { num: 31, region: 'AF', x: 168, y: 96, place: 'Abuja' },
  { num: 29, region: 'AF', x: 199, y: 93, place: 'Khartoum' },
  { num: 11, region: 'AF', x: 185, y: 113, place: 'DRC' },
  { num: 30, region: 'AF', x: 191, y: 141, place: 'Cape Town/Centurion' },
  { num: 28, region: 'SA', x: 243, y: 81, place: 'New Delhi' },
  { num: 9, region: 'SA', x: 261, y: 82, place: 'Dhaka' },
  { num: 27, region: 'SA', x: 274, y: 116, place: 'West Java' },
  { num: 5, region: 'EA', x: 263, y: 59, place: 'Jiuquan' },
  { num: 10, region: 'EA', x: 289, y: 59, place: 'Seoul' },
  { num: 26, region: 'EA', x: 306, y: 63, place: 'Kyoto' },
  { num: 37, region: 'OC', x: 297, y: 140, place: 'Canberra' },
  { num: 6, region: 'OC', x: 320, y: 120, place: 'Honiara' },
];

export const EXCLUDED_TUE_24 =
  'Huawei 10/12 · Dow 50K · Sanofi $41B · Chen Jining · 4th Hormuz tanker · Riyadh PIF Tower · Sarkozy 2027 · Senegal AFCON · UK 5,258 heat deaths · Euclid quasar · Venezuela $237.5B · Real Madrid 5–1 · Sooryavanshi 204*';

export const EXCLUDED_THU_26 =
  'UN Nairobi housing summit · BBC–Met Office deal · USTR Greer CNBC · Brazil Embraer warning · US Thanksgiving';
