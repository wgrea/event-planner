// src/lib/types.ts
// Core types based on your existing JSON structure

export type AlcoholRestrictionLevel = 'none' | 'moderate' | 'high' | 'prohibited';
// Updated to match your JSON data values
export type PressureLevel = 'low' | 'low-moderate' | 'moderate' | 'moderate-high' | 'high' | 'very-high' | 'low-verbal';
export type SensoryIntensity = 'low' | 'medium' | 'high';
export type GlobalAvailability = 'widespread' | 'regional' | 'local' | 'rare' | 'emerging';

// NEW: Economic & Value Types
export type EconomicVibe = 'inclusive' | 'standard' | 'premium' | 'exclusive';
export type SpendingRhythm = 'nursing' | 'steady' | 'high-velocity' | 'sporadic';
export type SeasonalVolatility = 'stable' | 'seasonal-peak' | 'event-driven';

export interface SeasonalContext {
  peak_note: string;         // e.g., "High-energy/pricier in summer"
  off_peak_note: string;     // e.g., "Intimate/stable in winter"
  volatility: SeasonalVolatility;
}

// Add these to your existing types.ts file
export type StrengthLevel = {
  label: string;
  range: [number, number];
};

export type FilterState = {
  searchQuery: string;
  selectedCategory: string | null;
  selectedRegion: string | null;
  selectedStrength: string | null;
};

// Add these constants
export const CATEGORIES = [
  'Beer',
  'Wine',
  'Spirits',
  'Cocktails',
  'Fermented Traditional',
  'Non-Alcoholic Ritual'
] as const;

export const REGIONS = [
  'Africa',
  'Asia',
  'Europe',
  'North America',
  'South America',
  'Oceania',
  'Middle East',
  'Caribbean',
  'Central Asia'
] as const;

export const STRENGTH_LEVELS = [
  { label: 'Non-Alcoholic', range: [0, 0] },
  { label: 'Low', range: [1, 10] },
  { label: 'Medium', range: [11, 25] },
  { label: 'High', range: [26, 100] }
] as const;

// ============= DRINK TYPES =============
export type Drink = {
  // This is what is showing on the page right now
  id: string;
  name: string;
  category: string;
  subcategory?: string;
  alcohol_percentage?: number;
  origin?: string;
  flavor_profile?: string[];
  typical_setting?: string[];
  cultural_notes?: string;
  global_availability?: GlobalAvailability;
  manufacturing_notes?: string;
  consumption_patterns?: string[];

  // For Assess Page
  risk_factors?: string[];
  recommendations?: string[];
  overall_risk?: 'low' | 'moderate' | 'moderate-high' | 'high';
  safety_notes?: string[];
};

// ============= VENUE TYPES =============

export interface InteractionIntensity {
  level: PressureLevel;
  label: string;
  description: string;
  boundary_note?: string; // New: Replaces "Safety Factors" prose
}

export interface BaseVenue {
  id: string;
  name: string;
  slug: string;
  type: 'bar' | 'club' | 'event';
// CORE FILTERS (Kept for logic)
  is_cultural?: boolean;
  is_dance?: boolean;
  is_fluid?: boolean;
  is_lounge?: boolean;

  // ANALYZE: High-Impact Social Context
  social_dynamics: string;
  interaction_intensity: InteractionIntensity; // Updated
  
  // VALUE: Spending Rhythm (Your priority)
  economic_vibe: EconomicVibe;
  pacing_cost_factor: number;
  spending_rhythm: SpendingRhythm;
  budget_tips?: string[]; // Moved here for context

  // SOLO & PROXIMITY
  solo_comfort: number;
  solo_tips: string[];
  physical_proximity: string;

  // LOGISTICS
  recommendations: string[]; // Technical/Logistical only
  cultural_notes?: string;
  variants?: any[];
}

export type BarType = BaseVenue & { type: 'bar' };
export type ClubType = BaseVenue & { type: 'club'; social_expectations: string };
export type EventType = BaseVenue & { type: 'event'; plan_night_around: boolean };

export type Venue = BarType | ClubType | EventType;

// Type guards
export function isBar(venue: Venue): venue is BarType {
  return venue.type === 'bar';
}

export function isClub(venue: Venue): venue is ClubType {
  return venue.type === 'club';
}

export function isEvent(venue: Venue): venue is EventType {
  return venue.type === 'event';
}

// ============= HELPER FUNCTIONS =============

export function getVenuePressureLevel(venue: Venue): PressureLevel {
  return venue.interaction_intensity?.level || 'low-moderate';
}

// Helper to determine dynamics based on type
export function getVenueDynamics(venue: Venue): string {
  if (isClub(venue)) {
    return venue.social_expectations || venue.social_dynamics;
  }
  return venue.social_dynamics || "Individual-focused environment.";
}

// ============= COUNTRY TYPES =============
export interface Country {
  id: string;
  name: string;
  alcohol_restriction_level: AlcoholRestrictionLevel;
  cities?: string[];
  cultural_notes?: string;
  legal_notes?: string;
  consumption_data?: {
    annual_liters?: number;
    global_rank?: number;
    peak_hour?: string;
  };
}

// ============= MAPPING TYPES =============
export interface DrinkToBarMapping {
  [drinkId: string]: string[];
}

export interface DrinkToClubMapping {
  [drinkId: string]: string[];
}

export interface DrinkToEventMapping {
  [drinkId: string]: string[];
}

// ============= FILTER TYPES =============
export interface DrinkFilterOptions {
  categories: string[];
  subcategories?: string[];
  regions: string[];
  alcohol_ranges: {
    min?: number;
    max?: number;
  };
  availability: GlobalAvailability[];
  settings: string[];
  flavor_notes: string[];
}

export interface VenueFilterCriteria {
  pressureLevels?: PressureLevel[];
  minSoloComfort?: number;
  sensoryIntensities?: SensoryIntensity[];
  drinkAvailable?: string;
  searchTerm?: string;
}

// ============= CONSUMPTION DATA TYPES =============
export interface CountryConsumptionData {
  [countryCode: string]: {
    country: string;
    region: string;
    annual: number;
    change: number;
    peakHour: string;
    regionalAverage: number;
    globalRank: number;
    updated: string;
    source: string;
  };
}

export interface ConsumptionRanking {
  code: string;
  liters: number;
}

export interface CountryDetails {
  country: string;
  nightlife_notes: string;
  cultural_considerations: string;
}

// ============= SAFETY TYPES =============
export interface SafetyAnalysis {
  country: string;
  restriction_level: AlcoholRestrictionLevel;
  cultural_context: string;
  popular_venues: {
    bars: BarType[];
    clubs: ClubType[];
    events: EventType[];
  };
  popular_drinks: Drink[];
  safety_tips: string[];
  recommended_experiences: string[];
  risk_factors: string[];
}

export interface SafetyAssessment {
  overallRisk: 'Low' | 'Moderate' | 'High';
  soloComfort: number;
  pressureLevel: string;
  keyNotes: string[];
  recommendations: string[];
}