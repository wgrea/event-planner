// src/lib/types.ts
// Core types based on your existing JSON structure

export type AlcoholRestrictionLevel = 'none' | 'moderate' | 'high' | 'prohibited';
export type PressureLevel = 'low' | 'low-moderate' | 'moderate' | 'moderate-high' | 'high';

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

// Add these constants (they could also go in a separate constants file)
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
  'Middle East'
] as const;

export const STRENGTH_LEVELS = [
  { label: 'Non-Alcoholic', range: [0, 0] },
  { label: 'Low', range: [1, 10] },           // Changed from "Low (1–10%)"
  { label: 'Medium', range: [11, 25] },        // Changed from "Medium (11–25%)"
  { label: 'High', range: [26, 100] }          // Changed from "High (26%+)"
] as const;

export interface BarType {
  id: string;
  name: string;
  slug: string;
  pressure_level: PressureLevel;
  vibe: string[];
  social_dynamics: string;
  typical_drinks: string[];
  cultural_notes?: string;
}

export interface ClubType {
  id: string;
  name: string;
  slug: string;
  pressure_level: PressureLevel;
  vibe: string[];
  music_identity: string[];
  social_expectations: string;
  typical_drinks: string[];
  cultural_notes?: string;
}

export interface EventType {
  id: string;
  name: string;
  slug: string;
  touch_level: string;
  social_dynamics: string;
  plan_night_around: boolean;
  typical_drinks: string[];
  cultural_notes?: string;
}

// Drink from your drinks.json
export interface Drink {
  id: string;
  name: string;
  category: string; // Beer, Wine, Spirits, Cocktails, etc.
  subcategory?: string;
  alcohol_percentage?: number;
  origin?: string;
  flavor_profile?: string[];
  typical_setting?: string[];
  cultural_notes?: string;
  global_availability?: 'widespread' | 'regional' | 'local';
  manufacturing_notes?: string;
  consumption_patterns?: string[];
  regional_identity?: string;
  legal_notes?: string;
}

// Drink category from your drink-categories.json
export interface DrinkCategory {
  id: string;
  name: string; // "Beer", "Wine", "Spirits", etc.
  subcategories: string[];
}

// Country from your countries.json
export interface Country {
  id: string;
  name: string;
  alcohol_restriction_level: AlcoholRestrictionLevel;
  cultural_notes?: string;
  legal_notes?: string;
}

// Mapping types for drink-to-venue relationships
export interface DrinkToBarMapping {
  [drinkId: string]: string[]; // bar IDs
}

export interface DrinkToClubMapping {
  [drinkId: string]: string[]; // club IDs
}

export interface DrinkToEventMapping {
  [drinkId: string]: string[]; // event IDs
}

// Mock data types
export interface CountryConsumption {
  country: string;
  consumption_patterns: string[];
  popular_drinks: string[];
}

export interface CountryDetails {
  country: string;
  nightlife_notes: string;
  cultural_considerations: string;
}