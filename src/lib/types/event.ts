// src/lib/types/event.ts
// Share this before adding more data

export interface NicheWorld {
  unwrittenRules: string[];
  socialCurrency: string[];
  entryBarriers: string[];
  tabooTopics?: string[];
  initiationRituals?: string[];
}

export interface SocialEventType {
  id: string;
  name: string;
  category: EventCategory;
  properties: string[];
  alsoKnownAs: string[];
  overlapsWith: string[];
  keyDifferences: EventComparison[];
  idealFor: string[];
  pressureProfile: PressureProfile;
  socialStructure: SocialStructure;
  touchProfile: TouchProfile;
  tips: string[];
  commonMyths: string[];
  redFlags: string[];
  socialRules?: SocialRules;
  touchDetails?: TouchDetails;
  soloTips?: SoloTips;
  logistics?: EventLogistics;
  seasonalPricing?: SeasonalPricing;
  nicheWorld?: NicheWorld;
}

export interface EventComparison {
  comparedTo: string; // event type ID
  differences: string[];
}

export type EventCategory = 
  | 'hobby' | 'dance' | 'volunteer' | 'music' 
  | 'movement' | 'gaming' | 'professional'
  | 'sports' | 'entertainment' | 'educational' | 'food-drink'
  | 'outdoors' | 'creative' | 'special-interest'
  | 'animal' | 'dating' | 'social' | 'technology' | 'wellness'
  | 'cultural'| 'nightlife'| 'bar-events'| 'conventions' // ADD THIS;

export interface PressureProfile {
  level: PressureLevel;
  source: string;
  mitigationTips: string[];
}

export type PressureLevel = 'none' | 'very low' | 'low' | 'medium' | 'high'; // Added 'none' and 'very low'

export interface SocialStructure {
  soloFriendliness: SoloFriendliness;
  whySoloFriendly: string;
  groupDynamics: string;
  conversationFocus: string;
}

export type SoloFriendliness = 'high' | 'moderate' | 'low';

export interface TouchProfile {
  level: TouchLevel;
  type: TouchType;
  consentCulture: string;
  boundaries: string[];
}

export interface SeasonalPricing {
  cheaperMonths: string[]; // ['Jan', 'Feb', 'Sep']
  expensiveMonths: string[];
  priceNotes?: string;
}

export interface SocialRules {
  unwrittenRules: string[];
  entryBarriers: string[];
  socialCurrency: string[];
  tabooTopics: string[];
  insideJokes?: string;
}

export interface TouchDetails {
  howPeopleTouch: string[];
  proximityLevel: 1 | 2 | 3 | 4;
  initiation: string; // How touch is initiated
  whyNoTouch?: string; // Optional for non-touch events
}

export interface SoloTips {
  howToGoSolo: string[];
  bestPosition: string; // 'Near hosts', 'At the bar', 'Observation corner'
  escapePlan: string;
  forLocals?: string;    // "Mention your neighborhood..."
  forTravelers?: string; // "Ask for recommendations..."
  icebreaker?: string;   // Specific conversation starter
}

export interface EventLogistics {
  ticketSources: string[];
  parking: ParkingInfo;
  transit?: string;
  alcohol?: AlcoholInfo;
}

export interface ParkingInfo {
  type: 'free' | 'paid' | 'mixed' | 'difficult';
  details?: string;
}

export interface AlcoholInfo {
  likelihood: 'none' | 'low' | 'medium' | 'high';
  priceLevel: 1 | 2 | 3 | 4 | 5; // $ to $$$$$
  byoAllowed?: boolean;
}

export interface NicheWorld {
  unwrittenRules: string[];
  socialCurrency: string[];
  entryBarriers: string[];
  tabooTopics?: string[];
  initiationRituals?: string[];
}

export type TouchLevel = 'none' | 'low' | 'moderate' | 'high' | 'varies'; // Added 'varies'

// Updated TouchType definition:
export type TouchType = 
  | 'context-initiated' 
  | 'self-initiated' 
  | 'structured' 
  | 'spontaneous'
  | 'consensual'
  | 'professional' 
  | 'task-related'
  | 'animal-mediated' 
  | 'animal-focused' 
  | 'cultural' 
  | 'social' 
  | 'activity-dependent' 
  | 'incidental' 
  | 'task-focused' 
  | 'assistance-based' 
  | 'observational' 
  | 'familiar'
  | 'therapeutic' 
  | 'creative' 
  | 'respectful' 
  | 'protocol' 
  | 'educational'; 