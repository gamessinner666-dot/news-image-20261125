export type RegionId =
  | 'EU'
  | 'ME'
  | 'AF'
  | 'EA'
  | 'SA'
  | 'NA'
  | 'LA'
  | 'OC'
  | 'GL';

export type EpistemicTag = 'CONFIRMED' | 'OFFICIAL' | 'REPORTED' | 'CLAIM';

export type NewsField =
  | 'War'
  | 'Diplomacy'
  | 'Economy'
  | 'Justice'
  | 'Disaster'
  | 'Markets'
  | 'Tech'
  | 'Security'
  | 'Rights'
  | 'Trade'
  | 'Space'
  | 'Labour'
  | 'Sport'
  | 'Energy'
  | 'Transport'
  | 'Health'
  | 'Climate'
  | 'Culture';

export interface RegionMeta {
  id: RegionId;
  name: string;
  shortLabel: string;
  color: string;
}

export interface HeroStory {
  num: number;
  region: RegionId;
  field: NewsField;
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
  field: NewsField;
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
  field: NewsField;
  place: string;
  text: string;
  tag?: 'CLAIM' | 'REPORTED';
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
  'US proposes 15%–35% tariffs on 14 economies  ·  AI doubts sink Asian chip stocks  ·  Pakistan’s first astronaut docks at Tiangong';

export const REGIONS: RegionMeta[] = [
  { id: 'EU', name: 'Europe', shortLabel: 'Europe', color: '#1D4ED8' },
  { id: 'ME', name: 'Middle East', shortLabel: 'Mid East', color: '#B91C1C' },
  { id: 'AF', name: 'Africa', shortLabel: 'Africa', color: '#15803D' },
  { id: 'EA', name: 'East Asia', shortLabel: 'E. Asia', color: '#B45309' },
  { id: 'SA', name: 'South & SE Asia', shortLabel: 'S/SE Asia', color: '#C2410C' },
  { id: 'NA', name: 'North America', shortLabel: 'N. America', color: '#0F766E' },
  { id: 'LA', name: 'Latin America', shortLabel: 'LatAm', color: '#7E22CE' },
  { id: 'OC', name: 'Oceania', shortLabel: 'Oceania', color: '#0369A1' },
  { id: 'GL', name: 'World & Space', shortLabel: 'World', color: '#334155' },
];

export const REGION_MAP: Record<RegionId, RegionMeta> = Object.fromEntries(
  REGIONS.map((r) => [r.id, r])
) as Record<RegionId, RegionMeta>;

export const KEY_METRICS: KeyMetric[] = [
  { value: '14', line1: 'economies targeted by', line2: '15%–35% US tariffs', color: '#0F766E' },
  { value: '–6.2%', line1: 'Seoul Kospi close on', line2: 'AI spending doubts', color: '#B91C1C' },
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
    field: 'Trade',
    locationBeat: 'WASHINGTON · TRADE',
    epistemic: 'OFFICIAL',
    headline: 'US proposes 15%–35% tariffs on 14 trading partners',
    summary:
      'USTR cites excess industrial capacity: 35% Vietnam, 25% India, 20% China base, 18–20% ASEAN, 15% EU, Japan, S.Korea & Taiwan; hearings Jan 25, 2027.',
    whyItMatters: 'Broadest US Section 301 tariff sweep across 14 economies',
    graphicKey: 'tariffs',
  },
  {
    num: 2,
    region: 'EA',
    field: 'Markets',
    locationBeat: 'SEOUL · TAIPEI · TOKYO · MARKETS',
    epistemic: 'CONFIRMED',
    headline: 'AI doubts sink Asian chip stocks: Kospi plunges 6.2%',
    summary:
      'Kospi closes below 5,000 at 4,697.51 as SK hynix falls 11.1% and Samsung drops 9.9%; Taiwan’s Taiex slides 4.8% and Tokyo’s Nikkei 225 loses 2.8%.',
    whyItMatters: 'Investors doubt massive AI infrastructure spend will pay off',
    graphicKey: 'chiprout',
  },
  {
    num: 3,
    region: 'EA',
    field: 'Space',
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
    field: 'Disaster',
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
    field: 'Energy',
    locationBeat: 'LONDON · ENERGY',
    epistemic: 'OFFICIAL',
    badgeText: '+26% CAP',
    headline: 'UK energy price cap to rise 26% in January',
    summary: 'Ofgem lifts typical household bill from £1,723 to £2,166 on gas surge, effective Jan 1.',
    graphicKey: 'ofgem',
  },
  {
    num: 6,
    region: 'SA',
    field: 'Disaster',
    locationBeat: 'WEST JAVA · DISASTER',
    epistemic: 'CONFIRMED',
    badgeText: '9 DEAD',
    headline: '9 dead, 17 trapped in flooded Java gold pit',
    summary: 'Overflowing river inundates 100m illegal Bogor shaft; 11 escape as rain slows rescue.',
    graphicKey: 'westjava',
  },
  {
    num: 7,
    region: 'ME',
    field: 'War',
    locationBeat: 'GULF & YEMEN · WAR',
    epistemic: 'CONFIRMED',
    badgeText: '4 DRONES',
    headline: 'Saudis down 4 drones after Hodeidah strikes',
    summary: 'Coalition hits Yemeni port; air defenses intercept Ras Tanura drones as Brent hits $94.61.',
    graphicKey: 'gulfwar',
  },
  {
    num: 8,
    region: 'EU',
    field: 'War',
    locationBeat: 'UKRAINE · WAR',
    epistemic: 'CONFIRMED',
    badgeText: '5 REGIONS',
    headline: 'Russian strikes cut power in 5 Ukrainian regions',
    summary: 'Zaporizhzhia nuclear plant switches to diesel backups after 330 kV grid line is severed.',
    graphicKey: 'ukrainegrid',
  },
  {
    num: 9,
    region: 'OC',
    field: 'Diplomacy',
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
    field: 'Labour',
    locationBeat: 'DHAKA · LABOUR',
    epistemic: 'OFFICIAL',
    badgeText: '৳17,000',
    headline: 'Garment wage raised 36% as 140+ factories shut',
    summary: '4–2 board vote lifts floor from ৳12,500 to ৳17,000; unions demand ৳18,000+ in clashes.',
    graphicKey: 'bangladesh',
  },
  {
    num: 11,
    region: 'AF',
    field: 'Justice',
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
    field: 'War',
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
    field: 'Justice',
    locationBeat: 'JERUSALEM · JUSTICE',
    epistemic: 'OFFICIAL',
    badgeText: 'CASE 4000',
    headline: 'Judges urge rethink of Netanyahu bribery count',
    summary: 'District court panel warns bribery charge faces steep hurdles; urges resolving Cases 1000–4000.',
    graphicKey: 'netanyahu',
  },
];

// 36 clean single-story dateline briefs (strictly 1 line = 1 story = 1 dateline; 18 left + 18 right = 49 total)
export const DIGEST_LEFT: DigestStory[] = [
  { num: 14, region: 'EU', field: 'War', place: 'Samara', text: 'Ukrainian drones strike Syzran & Kuibyshev Rosneft refineries' },
  { num: 15, region: 'EU', field: 'War', place: 'Savasleyka', text: 'Ukraine says raid hit 3 MiG-31s & 2 Su-34s at Russian base', tag: 'CLAIM' },
  { num: 16, region: 'EU', field: 'War', place: 'Moscow', text: 'Leaked Rosstat files count 490,334 war dead (BBC/Mediazona)', tag: 'REPORTED' },
  { num: 17, region: 'EU', field: 'Security', place: 'Warsaw', text: 'Poland plans Ukraine-border no-fly zone after Russian drones' },
  { num: 18, region: 'EU', field: 'Economy', place: 'London', text: 'Poundland enters administration, putting 10,000+ UK jobs at risk' },
  { num: 19, region: 'EU', field: 'Justice', place: 'London', text: 'Fairfield review finds Met Police still institutionally racist' },
  { num: 20, region: 'EU', field: 'Transport', place: 'Paris', text: 'Unannounced Eurostar staff strike cancels London–Paris trains' },
  { num: 21, region: 'EU', field: 'Labour', place: 'Athens', text: '~15,000 march in 24-hour Greek strike; flights & ferries halt' },
  { num: 22, region: 'EU', field: 'Tech', place: 'Brussels', text: 'EU proposes €50bn Quantum Act to scale European computing' },
  { num: 23, region: 'EU', field: 'Rights', place: 'Canary Is.', text: 'Record 1,990 migrants land on 15 boats in a single day' },
  { num: 24, region: 'EU', field: 'Sport', place: 'Europe', text: 'UCL Wed: Lille 2–1 Bayern, PSG 2–2 Roma, Liverpool 3–0 Brugge' },
  { num: 25, region: 'ME', field: 'War', place: 'Hormuz', text: 'IRGC says two unnamed tankers hit mines and caught fire', tag: 'CLAIM' },
  { num: 26, region: 'ME', field: 'Economy', place: 'Jerusalem', text: 'Israel panel approves $5bn (NIS 17.3bn) extra defense hike' },
  { num: 27, region: 'ME', field: 'Security', place: 'Hasakah', text: 'ISIS motorcycle suicide blast kills 2 Syrian officers, wounds 5' },
  { num: 28, region: 'ME', field: 'Rights', place: 'Geneva', text: 'UN rights chief Volker Türk warns of Gaza & West Bank atrocities' },
  { num: 29, region: 'EA', field: 'Diplomacy', place: 'Pyongyang', text: 'North Korea gives Swiss envoy Sylvain Astier 48 hours to leave' },
  { num: 30, region: 'EA', field: 'Markets', place: 'Kyoto', text: 'China, Japan, S.Korea & ASEAN launch digital payments group' },
  { num: 31, region: 'EA', field: 'Tech', place: 'Hong Kong', text: 'URBTIX ticketing breach exposes personal data of 1.3m users' },
];

export const DIGEST_RIGHT: DigestStory[] = [
  { num: 32, region: 'EA', field: 'Trade', place: 'Beijing', text: 'EU prepares statutory Chinese hybrid car import quotas for Dec 1' },
  { num: 33, region: 'SA', field: 'Tech', place: 'Kuala Lumpur', text: 'Malaysia sues Google for RM600m over harmful YouTube content' },
  { num: 34, region: 'SA', field: 'Economy', place: 'New Delhi', text: 'World Bank clears $1.5bn package for Indian growth reforms' },
  { num: 35, region: 'SA', field: 'Disaster', place: 'Karachi', text: 'Residential building collapse kills 3 and injures 14 in rescue' },
  { num: 36, region: 'AF', field: 'War', place: 'Ed Damazin', text: 'RSF suicide drones hit Sudan’s Blue Nile, killing up to 19' },
  { num: 37, region: 'AF', field: 'Diplomacy', place: 'Benghazi', text: 'Italy rebukes Kyiv after Ukraine drone raid kills 2 Libyan officers' },
  { num: 38, region: 'AF', field: 'Health', place: 'Eastern DRC', text: 'UN peacekeepers evacuate WHO Ebola medics in Ituri amid clashes' },
  { num: 39, region: 'AF', field: 'Sport', place: 'Centurion', text: 'South Africa sweep Bangladesh by an innings and 219 runs' },
  { num: 40, region: 'AF', field: 'Culture', place: 'Enugu', text: 'Veteran Nollywood actor Pete Edochie dies aged 79' },
  { num: 41, region: 'NA', field: 'Markets', place: 'Washington', text: 'US Q3 GDP revised up to 4.3%; Oct PCE inflation climbs to 3.8%' },
  { num: 42, region: 'NA', field: 'Climate', place: 'California', text: 'King tides wreck Pacifica Pier as coastal flood alerts hit coast' },
  { num: 43, region: 'NA', field: 'Diplomacy', place: 'Ottawa', text: 'PM Mark Carney rejects Pentagon defense-spending critique' },
  { num: 44, region: 'LA', field: 'Security', place: 'Cartagena', text: 'Police end 17-hour Éxito siege, freeing 70+ supermarket hostages' },
  { num: 45, region: 'LA', field: 'Diplomacy', place: 'Mexico City', text: 'Sheinbaum protests US deporting Inés Gómez Mont to Spain' },
  { num: 46, region: 'LA', field: 'Diplomacy', place: 'Brasília', text: 'Brazil recalls envoy Julio Bitelli from Argentina amid spat' },
  { num: 47, region: 'OC', field: 'Economy', place: 'Sydney', text: 'Australia Oct CPI jumps to 4.9% on surging housing costs' },
  { num: 48, region: 'GL', field: 'Space', place: 'Space · ESA', text: 'Hera spacecraft images stadium-sized DART asteroid crater' },
  { num: 49, region: 'GL', field: 'Rights', place: 'UN · Global', text: 'UN Women & UNODC report 47,000 femicides in 2025 (5/hr)' },
];

// Coordinates in raw map landmass space (transformed cleanly in world-map.ts).
// 13 non-overlapping numbered pins for Heroes (#1-#3) & Medium cards (#4-#13).
export const MAP_PINS: MapPin[] = [
  { num: 1, region: 'NA', x: 92, y: 50 },    // Washington
  { num: 5, region: 'EU', x: 157, y: 41 },   // London
  { num: 8, region: 'EU', x: 196, y: 41 },   // Ukraine
  { num: 12, region: 'ME', x: 196, y: 63 },  // Gaza
  { num: 13, region: 'ME', x: 211, y: 53 },  // Jerusalem
  { num: 4, region: 'AF', x: 181, y: 76 },   // Cairo / Giza
  { num: 7, region: 'ME', x: 222, y: 73 },   // Ras Tanura / Hodeidah
  { num: 11, region: 'AF', x: 186, y: 132 }, // Cape Town
  { num: 10, region: 'SA', x: 255, y: 73 },  // Dhaka
  { num: 6, region: 'SA', x: 269, y: 105 },  // Bogor, West Java
  { num: 3, region: 'EA', x: 263, y: 51 },   // Jiuquan
  { num: 2, region: 'EA', x: 294, y: 54 },   // Seoul / Taipei / Tokyo
  { num: 9, region: 'OC', x: 312, y: 117 },  // Canberra / Solomons
];

// 34 geographic digest dots (#14-#47; #48-#49 are Space/Global chips below map) => 13 + 34 + 2 = 49 exact!
export const MAP_SECONDARY_DOTS: { region: RegionId; x: number; y: number }[] = [
  // EU (11)
  { region: 'EU', x: 213, y: 34 }, // #14 Samara
  { region: 'EU', x: 205, y: 31 }, // #15 Savasleyka
  { region: 'EU', x: 199, y: 29 }, // #16 Moscow
  { region: 'EU', x: 183, y: 37 }, // #17 Warsaw
  { region: 'EU', x: 154, y: 45 }, // #18 London (Poundland)
  { region: 'EU', x: 161, y: 36 }, // #19 London (Met Police)
  { region: 'EU', x: 163, y: 47 }, // #20 Paris
  { region: 'EU', x: 184, y: 57 }, // #21 Athens
  { region: 'EU', x: 168, y: 42 }, // #22 Brussels
  { region: 'EU', x: 143, y: 67 }, // #23 Canary Is.
  { region: 'EU', x: 174, y: 49 }, // #24 Europe UCL
  // ME (4)
  { region: 'ME', x: 229, y: 66 }, // #25 Hormuz
  { region: 'ME', x: 206, y: 64 }, // #26 Jerusalem defense
  { region: 'ME', x: 213, y: 59 }, // #27 Hasakah
  { region: 'ME', x: 170, y: 52 }, // #28 Geneva UN
  // EA (4)
  { region: 'EA', x: 288, y: 46 }, // #29 Pyongyang
  { region: 'EA', x: 306, y: 57 }, // #30 Kyoto
  { region: 'EA', x: 277, y: 73 }, // #31 Hong Kong
  { region: 'EA', x: 279, y: 45 }, // #32 Beijing
  // SA (3)
  { region: 'SA', x: 262, y: 92 }, // #33 Kuala Lumpur
  { region: 'SA', x: 243, y: 72 }, // #34 New Delhi
  { region: 'SA', x: 233, y: 72 }, // #35 Karachi
  // AF (5)
  { region: 'AF', x: 198, y: 86 }, // #36 Ed Damazin
  { region: 'AF', x: 175, y: 68 }, // #37 Benghazi
  { region: 'AF', x: 192, y: 102 }, // #38 Eastern DRC
  { region: 'AF', x: 193, y: 123 }, // #39 Centurion
  { region: 'AF', x: 165, y: 91 }, // #40 Enugu
  // NA (3)
  { region: 'NA', x: 82, y: 54 },  // #41 Washington GDP
  { region: 'NA', x: 43, y: 52 },  // #42 California
  { region: 'NA', x: 96, y: 36 },  // #43 Ottawa
  // LA (3)
  { region: 'LA', x: 92, y: 93 },  // #44 Cartagena
  { region: 'LA', x: 68, y: 73 },  // #45 Mexico City
  { region: 'LA', x: 116, y: 120 }, // #46 Brasília
  // OC (1)
  { region: 'OC', x: 302, y: 136 }, // #47 Sydney
];

export const EXCLUDED_TUE_24 =
  'Huawei 10/12 verdict · Dow 50K milestone · Riyadh PIF Tower strike · Senegal AFCON CAS · Sanofi $41B · Chen Jining · Sarkozy 2027 · Real Madrid 5–1 · Sooryavanshi 204* · Nvidia surge (Mon 23)';

export const EXCLUDED_THU_26 =
  'US Thanksgiving Day · UN Nairobi housing summit · BBC–Met Office deal · Brazil Embraer warning';
