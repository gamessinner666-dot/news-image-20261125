export type RegionId =
  | 'EU'
  | 'ME'
  | 'AF'
  | 'EA'
  | 'NA'
  | 'SA'
  | 'LA'
  | 'OC'
  | 'GL';

export type EpistemicTag = 'CONFIRMED' | 'OFFICIAL' | 'REPORTED' | 'CLAIM';

export interface RegionMeta {
  id: RegionId;
  name: string;
  shortLabel: string;
  color: string;
  count: number;
}

export interface HeroStory {
  num: number;
  region: RegionId;
  locationBeat: string;
  epistemic: EpistemicTag;
  headline: string;
  summary: string;
  whyItMatters: string;
  graphicKey: 'tariffs' | 'chiprout' | 'tiangong';
}

export interface MediumStory {
  num: number;
  region: RegionId;
  locationBeat: string;
  epistemic: EpistemicTag;
  badgeText: string;
  headline: string;
  summary: string;
  graphicKey:
    | 'cairo'
    | 'ofgem'
    | 'westjava'
    | 'gulfwar'
    | 'ukrainegrid'
    | 'solomons'
    | 'bangladesh'
    | 'ramaphosa'
    | 'gaza'
    | 'netanyahu';
}

export interface DigestStory {
  num: number;
  region: RegionId;
  place: string;
  text: string;
  claim?: boolean;
}

export interface KeyMetric {
  value: string;
  line1: string;
  line2: string;
  color: string;
}

export interface TimelineEvent {
  utc: string;
  label: string;
}

export interface MapPin {
  num: number;
  region: RegionId;
  x: number;
  y: number;
}

export const EDITION_DATE = 'Wednesday 25 November 2026';
export const EDITION_DECK =
  'US proposes tariffs on 14 economies  ·  AI doubts sink Asian chip stocks  ·  Pakistan’s first astronaut docks at Tiangong';

export const REGIONS: RegionMeta[] = [
  { id: 'EU', name: 'Europe', shortLabel: 'Europe', color: '#1D4ED8', count: 13 },
  { id: 'ME', name: 'Middle East', shortLabel: 'Mid East', color: '#B91C1C', count: 7 },
  { id: 'AF', name: 'Africa', shortLabel: 'Africa', color: '#15803D', count: 7 },
  { id: 'EA', name: 'East Asia', shortLabel: 'E. Asia', color: '#B45309', count: 6 },
  { id: 'NA', name: 'North America', shortLabel: 'N. America', color: '#0F766E', count: 5 },
  { id: 'SA', name: 'South & SE Asia', shortLabel: 'S/SE Asia', color: '#C2410C', count: 4 },
  { id: 'LA', name: 'Latin America', shortLabel: 'LatAm', color: '#7E22CE', count: 3 },
  { id: 'OC', name: 'Oceania', shortLabel: 'Oceania', color: '#0369A1', count: 2 },
  { id: 'GL', name: 'World & Space', shortLabel: 'World', color: '#334155', count: 2 },
];

export const REGION_MAP: Record<RegionId, RegionMeta> = Object.fromEntries(
  REGIONS.map((r) => [r.id, r])
) as Record<RegionId, RegionMeta>;

export const FIELDS_SUMMARY =
  '18 FIELDS · War 8 · Justice 6 · Economy 5 · Disaster 5 · Diplomacy 5 · Markets 4 · Energy 3 · Tech 3 · Space 2 · Labour 2 · Rights 2 · Sport 2 · Trade · Health · Climate · Transport · Security · Culture';

export const KEY_METRICS: KeyMetric[] = [
  { value: '20%', line1: 'top US tariff rate', line2: 'on China (+13 more)', color: '#0F766E' },
  { value: '–6.2%', line1: 'Seoul Kospi close,', line2: 'worst AI chip rout', color: '#B91C1C' },
  { value: '+26%', line1: 'UK energy cap hike', line2: 'to £2,166 from Jan 1', color: '#1D4ED8' },
  { value: '31+', line1: 'killed in Cairo', line2: 'Ring Road tanker fire', color: '#15803D' },
  { value: '9', line1: 'dead, 17 trapped in', line2: 'Java flooded gold pit', color: '#C2410C' },
];

export const TIMELINE_EVENTS: TimelineEvent[] = [
  { utc: '00:18', label: 'Shenzhou-24 lifts off' },
  { utc: '03:30', label: 'AU–Solomons pact' },
  { utc: '03:56', label: 'Tiangong docking' },
  { utc: '05:30', label: 'Taiex –4.8%' },
  { utc: '06:30', label: 'Kospi –6.2%' },
  { utc: '07:00', label: 'Ofgem +26%' },
  { utc: '09:00', label: 'Cairo fire 31+' },
  { utc: '13:30', label: 'US GDP 4.3%' },
  { utc: '15:00', label: 'USTR 301' },
];

export const HERO_STORIES: HeroStory[] = [
  {
    num: 1,
    region: 'NA',
    locationBeat: 'WASHINGTON · TRADE',
    epistemic: 'OFFICIAL',
    headline: 'US proposes tariffs of up to 20% on China, EU and 12 more',
    summary:
      'USTR cites excess industrial capacity across 14 economies: up to 20% China (40% alt), 35% Vietnam, 25% India, 15% EU, Japan, S.Korea & Taiwan; hearings Jan 25, 2027.',
    whyItMatters: 'Widest US Section 301 push since earlier global duties fell',
    graphicKey: 'tariffs',
  },
  {
    num: 2,
    region: 'EA',
    locationBeat: 'SEOUL · TAIPEI · TOKYO · MARKETS',
    epistemic: 'REPORTED',
    headline: 'AI doubts sink Asian chip stocks: Kospi plunges 6.2%',
    summary:
      'Kospi closes below 5,000 at 4,697.51 as SK hynix falls 11.1% and Samsung drops 9.9%; Taiwan’s Taiex slides 4.8% and Tokyo’s Nikkei 225 loses 2.8%.',
    whyItMatters: 'Investors doubt massive AI infrastructure spend will pay off',
    graphicKey: 'chiprout',
  },
  {
    num: 3,
    region: 'EA',
    locationBeat: 'JIUQUAN, CHINA · SPACE',
    epistemic: 'OFFICIAL',
    headline: 'Pakistan’s first astronaut docks at China’s Tiangong station',
    summary:
      'Air Force pilot Muhammad Zeeshan Ali launches aboard Shenzhou-24 with Tang Hongbo and Wu Yi, becoming the first foreign crewmember to board Tiangong.',
    whyItMatters: 'China opens its orbital station to its first international crew',
    graphicKey: 'tiangong',
  },
];

export const MEDIUM_STORIES: MediumStory[] = [
  {
    num: 4,
    region: 'AF',
    locationBeat: 'GIZA, EGYPT · DISASTER',
    epistemic: 'CONFIRMED',
    badgeText: '31+ DEAD',
    headline: 'Fuel tanker inferno kills at least 31 near Cairo',
    summary: 'Overturned tanker explodes on Al-Warraq Ring Road, burning dozens of cars; 20+ injured.',
    graphicKey: 'cairo',
  },
  {
    num: 5,
    region: 'EU',
    locationBeat: 'LONDON · ENERGY',
    epistemic: 'OFFICIAL',
    badgeText: '+26% CAP',
    headline: 'UK energy price cap to rise 26% in January',
    summary: 'Ofgem lifts typical bill from £1,723 to £2,166 on gas surge; Cold War nuclear-test inquiry set.',
    graphicKey: 'ofgem',
  },
  {
    num: 6,
    region: 'SA',
    locationBeat: 'BOGOR, INDONESIA · DISASTER',
    epistemic: 'CONFIRMED',
    badgeText: '9 DEAD',
    headline: '9 dead, 17 trapped in flooded Java gold pit',
    summary: 'Overflowing river inundates 100m illegal mining shaft; 11 escape as rain slows rescue.',
    graphicKey: 'westjava',
  },
  {
    num: 7,
    region: 'ME',
    locationBeat: 'RAS TANURA & HODEIDAH · WAR',
    epistemic: 'CONFIRMED',
    badgeText: '4 DRONES',
    headline: 'Saudis down 4 drones after Hodeidah strikes',
    summary: 'Coalition hits Yemeni port; air defenses intercept Ras Tanura drones as Brent hits $94.61.',
    graphicKey: 'gulfwar',
  },
  {
    num: 8,
    region: 'EU',
    locationBeat: 'UKRAINE · WAR',
    epistemic: 'REPORTED',
    badgeText: '5 REGIONS',
    headline: 'Russian strikes cut power in 5 Ukrainian regions',
    summary: 'Zaporizhzhia nuclear plant switches to diesel backups after 330 kV grid line is severed.',
    graphicKey: 'ukrainegrid',
  },
  {
    num: 9,
    region: 'OC',
    locationBeat: 'CANBERRA · DIPLOMACY',
    epistemic: 'OFFICIAL',
    badgeText: 'A$740M PACT',
    headline: 'Solomon Islands signs security pact with Australia',
    summary: '10-year treaty names Australia primary partner and bars foreign bases as China deal lapses.',
    graphicKey: 'solomons',
  },
  {
    num: 10,
    region: 'SA',
    locationBeat: 'DHAKA · LABOUR',
    epistemic: 'CONFIRMED',
    badgeText: '৳17,000',
    headline: 'Garment wage raised 36% as 140+ factories shut',
    summary: '4–2 board vote lifts floor from ৳12,500 to ৳17,000; unions demand ৳18,000+ in clashes.',
    graphicKey: 'bangladesh',
  },
  {
    num: 11,
    region: 'AF',
    locationBeat: 'CAPE TOWN · JUSTICE',
    epistemic: 'OFFICIAL',
    badgeText: 'VOIDED',
    headline: 'Court lifts ‘Farmgate’ threat to Ramaphosa',
    summary: 'Western Cape High Court sets aside 2022 Phala Phala panel report and impeachment bid.',
    graphicKey: 'ramaphosa',
  },
  {
    num: 12,
    region: 'ME',
    locationBeat: 'GAZA CITY · WAR',
    epistemic: 'REPORTED',
    badgeText: 'SHATI CAMP',
    headline: 'Israeli strike kills Hamas security chief & family',
    summary: 'Strike hits Al-Shati camp as Al-Rantisi Children’s Hospital main generator fails in blockade.',
    graphicKey: 'gaza',
  },
  {
    num: 13,
    region: 'ME',
    locationBeat: 'JERUSALEM · JUSTICE',
    epistemic: 'OFFICIAL',
    badgeText: 'CASE 4000',
    headline: 'Judges urge rethink of Netanyahu bribery count',
    summary: 'District court panel warns bribery charge faces steep hurdles; urges resolving Cases 1000–4000.',
    graphicKey: 'netanyahu',
  },
];

// 36 razor-sharp single-line dateline briefs (18 left + 18 right = 49 verified stories total)
export const DIGEST_LEFT: DigestStory[] = [
  { num: 14, region: 'EU', place: 'Samara', text: 'Ukrainian drones strike Syzran & Kuibyshev Rosneft refineries' },
  { num: 15, region: 'EU', place: 'Savasleyka', text: 'Ukraine says strike hit 3 MiG-31s & 2 Su-34s at Russian base', claim: true },
  { num: 16, region: 'EU', place: 'Moscow', text: 'Leaked Rosstat files count 490,334 war dead; Merz warns Europe' },
  { num: 17, region: 'EU', place: 'Warsaw', text: 'Poland plans Ukraine-border no-fly zone after Russian incursions' },
  { num: 18, region: 'EU', place: 'London', text: 'Poundland enters administration, putting 10,000+ UK jobs at risk' },
  { num: 19, region: 'EU', place: 'London', text: 'Fairfield review finds Met Police still institutionally racist; MI5 alert' },
  { num: 20, region: 'EU', place: 'Paris', text: 'Unannounced Eurostar staff strike cancels London–Paris trains' },
  { num: 21, region: 'EU', place: 'Athens', text: '~15,000 march in 24-hour Greek general strike; flights & ferries halt' },
  { num: 22, region: 'EU', place: 'Brussels', text: 'EU proposes €50bn Quantum Act & fines scent cartel €570m+ with UK' },
  { num: 23, region: 'EU', place: 'Luxembourg', text: 'EU court orders Commission to set new cage-free farming timeline' },
  { num: 24, region: 'EU', place: 'Madrid', text: 'Puigdemont sets Dec 12 return after amnesty; Canaries hit 1,990 record' },
  { num: 25, region: 'EU', place: 'Europe Sport', text: 'UCL Wed: Lille 2–1 Bayern, PSG 2–2 Roma, Liv 3–0; Italy win Davis Cup' },
  { num: 26, region: 'ME', place: 'Hormuz', text: 'IRGC says two unnamed tankers hit mines and caught fire', claim: true },
  { num: 27, region: 'ME', place: 'Jerusalem', text: 'Israel panel approves $5bn defense hike (NIS 17.3bn) for 2026' },
  { num: 28, region: 'ME', place: 'Hasakah', text: 'ISIS motorcycle suicide bomber kills 2 Syrian officers, wounds 5' },
  { num: 29, region: 'ME', place: 'Geneva', text: 'UN rights chief Volker Türk warns of atrocity risk in Gaza & West Bank' },
  { num: 30, region: 'EA', place: 'Pyongyang', text: 'North Korea gives Swiss envoy Sylvain Astier 48 hours to leave' },
  { num: 31, region: 'EA', place: 'Kyoto', text: 'China, Japan, S.Korea & ASEAN launch digital payments working group' },
];

export const DIGEST_RIGHT: DigestStory[] = [
  { num: 32, region: 'EA', place: 'Hong Kong', text: 'URBTIX ticketing breach exposes personal data of 1.3m users' },
  { num: 33, region: 'EA', place: 'Beijing/EU', text: 'EU prepares statutory Chinese hybrid vehicle import quotas for Dec 1' },
  { num: 34, region: 'SA', place: 'Kuala Lumpur', text: 'Malaysia sues Google for RM600m over harmful YouTube content' },
  { num: 35, region: 'SA', place: 'Karachi', text: 'Building collapse kills 3, injures 14; World Bank approves $1.5bn India' },
  { num: 36, region: 'AF', place: 'Ed Damazin', text: 'RSF suicide drones hit Sudan’s Blue Nile, killing up to 19 civilians' },
  { num: 37, region: 'AF', place: 'Benghazi', text: 'Italy rebukes Kyiv after Ukraine drone raid kills 2 Libyan naval officers' },
  { num: 38, region: 'AF', place: 'Eastern DRC', text: 'Clashes force Ebola medics to evacuate amid 11,700+ case outbreak' },
  { num: 39, region: 'AF', place: 'Enugu/Harare', text: 'Nollywood icon Pete Edochie dies at 79; warrant for Mugabe’s son' },
  { num: 40, region: 'AF', place: 'Centurion', text: 'South Africa sweep Bangladesh by inn. & 219; Khartoum snubs talks' },
  { num: 41, region: 'NA', place: 'Washington', text: 'US Q3 GDP revised up to 4.3%; Oct PCE hits 3.8%; Dow holds 50,183' },
  { num: 42, region: 'NA', place: 'Washington', text: 'FCC clears SpaceX orbital data-centre plan; BBC appeals Trump suit' },
  { num: 43, region: 'NA', place: 'Iowa/Calif.', text: 'US Army detonates 5 tons of lead azide; king tides wreck Pacifica Pier' },
  { num: 44, region: 'NA', place: 'Ottawa/US', text: 'Carney rejects Pentagon defense critique; AP probe on 1.4m DEA pills' },
  { num: 45, region: 'LA', place: 'Cartagena', text: 'Police storm Éxito supermarket after 17-hour siege, freeing 70+ hostages' },
  { num: 46, region: 'LA', place: 'Mexico City', text: 'Sheinbaum protests US deporting Inés Gómez Mont to Spain instead' },
  { num: 47, region: 'LA', place: 'Brasília', text: 'Brazil recalls envoy to Argentina; Tether puts $14.5m in Lemon app' },
  { num: 48, region: 'OC', place: 'Sydney', text: 'Australia Oct CPI jumps to 4.9% on housing; Big Tech duty-of-care bill' },
  { num: 49, region: 'GL', place: 'Space & UN', text: 'ESA Hera finds DART crater; UN counts 47K femicides; OPCW CS-gas plea' },
];

// Cleanly spaced numbered pins ONLY for the 13 illustrated stories (zero clutter, crisp readability!)
export const MAP_PINS: MapPin[] = [
  { num: 1, region: 'NA', x: 76, y: 55 },    // Washington
  { num: 5, region: 'EU', x: 147, y: 39 },   // London
  { num: 8, region: 'EU', x: 185, y: 42 },   // Ukraine
  { num: 12, region: 'ME', x: 189, y: 63 },  // Gaza
  { num: 13, region: 'ME', x: 202, y: 59 },  // Jerusalem
  { num: 4, region: 'AF', x: 179, y: 74 },   // Cairo/Giza
  { num: 7, region: 'ME', x: 211, y: 76 },   // Ras Tanura / Hodeidah
  { num: 11, region: 'AF', x: 179, y: 129 }, // Cape Town
  { num: 10, region: 'SA', x: 243, y: 73 },  // Dhaka
  { num: 6, region: 'SA', x: 257, y: 104 },  // Bogor, West Java
  { num: 3, region: 'EA', x: 248, y: 53 },   // Jiuquan
  { num: 2, region: 'EA', x: 277, y: 55 },   // Seoul / Tokyo
  { num: 9, region: 'OC', x: 299, y: 113 },  // Canberra / Solomons
];

// Subtle small colored dots for the 36 digest stories across all regions
export const MAP_SECONDARY_DOTS: { region: RegionId; x: number; y: number }[] = [
  { region: 'NA', x: 46, y: 57 }, { region: 'NA', x: 63, y: 50 }, { region: 'NA', x: 76, y: 38 },
  { region: 'LA', x: 62, y: 76 }, { region: 'LA', x: 82, y: 89 }, { region: 'LA', x: 112, y: 114 }, { region: 'LA', x: 98, y: 132 },
  { region: 'EU', x: 156, y: 47 }, { region: 'EU', x: 145, y: 56 }, { region: 'EU', x: 132, y: 68 }, { region: 'EU', x: 175, y: 56 }, { region: 'EU', x: 199, y: 35 }, { region: 'EU', x: 170, y: 39 },
  { region: 'AF', x: 162, y: 66 }, { region: 'AF', x: 158, y: 89 }, { region: 'AF', x: 185, y: 88 }, { region: 'AF', x: 175, y: 105 }, { region: 'AF', x: 186, y: 117 },
  { region: 'ME', x: 215, y: 65 }, { region: 'ME', x: 201, y: 50 },
  { region: 'SA', x: 229, y: 72 }, { region: 'SA', x: 254, y: 89 },
  { region: 'EA', x: 264, y: 72 }, { region: 'EA', x: 291, y: 56 }, { region: 'EA', x: 271, y: 49 },
  { region: 'OC', x: 280, y: 129 },
];

export const EXCLUDED_TUE_24 =
  'Huawei 10/12 verdict · Dow 50K milestone · Riyadh PIF Tower strike · Senegal AFCON CAS · Sanofi $41B · Chen Jining · Sarkozy 2027 · Real Madrid 5–1 · Sooryavanshi 204* · Nvidia surge (Mon 23)';

export const EXCLUDED_THU_26 =
  'US Thanksgiving Day · UN Nairobi housing summit · BBC–Met Office deal · Brazil Embraer warning';
