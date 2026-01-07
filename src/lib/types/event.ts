// src/lib/types/event.ts

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
}

export interface EventComparison {
  comparedTo: string; // event type ID
  differences: string[];
}

export type EventCategory = 
  | 'hobby' | 'dance' | 'volunteer' | 'music' 
  | 'movement' | 'gaming' | 'casual' | 'professional'
  | 'sports' | 'entertainment' | 'educational' | 'food-drink'
  | 'outdoors' | 'creative' | 'fitness' | 'special-interest'
  | 'animal' | 'dating' | 'social' | 'technology' | 'wellness'
  | 'cultural';

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
  | 'animal-mediated' // NEW
  | 'animal-focused' // NEW
  | 'cultural' // NEW
  | 'social' // NEW
  | 'activity-dependent' // NEW
  | 'incidental' // NEW
  | 'task-focused' // NEW (alias for task-related)
  | 'assistance-based' // NEW
  | 'observational' // NEW
  | 'familiar' // NEW
  | 'therapeutic' // NEW
  | 'creative' // NEW
  | 'respectful'; // NEW