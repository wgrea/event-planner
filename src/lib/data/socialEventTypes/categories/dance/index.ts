// src/lib/data/socialEventTypes/categories/dance/index.ts
import type { SocialEventType } from '$lib/types/event';

// Import individual dances
import { bachata } from './bachata';
import { kizomba } from './kizomba';
import { salsaSocial } from './salsa';
import { swingDance } from './swing';

// Combine into an array
export const danceEvents: SocialEventType[] = [
  bachata,
  kizomba,
  salsaSocial,
  swingDance
];

// Also export individual dances for granular imports
export { bachata, kizomba, salsaSocial, swingDance };