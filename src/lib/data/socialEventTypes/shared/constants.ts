// src/lib/data/socialEventTypes/shared/constants.ts
// show this before adding more data

export const PRESSURE_LEVELS = ['low', 'medium', 'high'] as const;
export const SOLO_FRIENDLINESS_LEVELS = ['high', 'moderate', 'low'] as const;
export const TOUCH_LEVELS = ['none', 'low', 'moderate', 'high', 'varies'] as const; // Added 'varies'

export const CATEGORIES = [
  'hobby',
  'dance',
  'music',
  'movement',
  'educational',
  'special-interest',
  'professional',
  'entertainment',
  'volunteer',
  'gaming',
  'sports',
  'animal',
  'creative',
  'dating',
  'food-drink',
  'outdoors',
  'technology',
  'wellness',
  'social',
  'cultural',
  'nightlife',
  'bar-events',
  'conventions', // ADD THIS
] as const;