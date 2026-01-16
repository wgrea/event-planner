// src/lib/data/socialEventTypes/categories/nightlife/index.ts
import type { SocialEventType } from '$lib/types/event';

// Import from subcategories
import { diveBar } from './dive-bars';
import { sportsBar, teluguSportsBar } from './sports-bars';
import { latinBar, irishPub, bollywoodClub } from './cultural-bars';
import { cigarLounge, hifiListeningBar, barcade } from './specialty-bars';

// Combine all nightlife events
export const nightlifeEvents: SocialEventType[] = [
  diveBar,
  sportsBar,
  teluguSportsBar,
  latinBar,
  irishPub,
  bollywoodClub,
  cigarLounge,
  hifiListeningBar,
  barcade
];

// Export individual events
export { 
  diveBar, 
  sportsBar, 
  teluguSportsBar, 
  latinBar, 
  irishPub, 
  bollywoodClub, 
  cigarLounge, 
  hifiListeningBar, 
  barcade 
};

// Helper functions for nightlife
export type NightlifeVibe = 'quiet' | 'loud' | 'active' | 'social' | 'cultural';

export const getNightlifeByVibe = (vibe: NightlifeVibe): SocialEventType[] => {
  const vibeMap: Record<NightlifeVibe, string[]> = {
    quiet: ['dive-bar', 'cigar-lounge', 'hifi-listening-bar', 'irish-pub'],
    loud: ['sports-bar', 'telugu-sports-bar', 'latin-bar', 'bollywood-club-night'],
    active: ['barcade', 'sports-bar', 'telugu-sports-bar'],
    social: ['irish-pub', 'sports-bar', 'latin-bar'],
    cultural: ['telugu-sports-bar', 'latin-bar', 'bollywood-club-night', 'irish-pub']
  };
  
  return nightlifeEvents.filter(event => 
    vibeMap[vibe].includes(event.id)
  );
};

export const getNightlifeByAlcoholLevel = (level: string): SocialEventType[] =>
  nightlifeEvents.filter(event => 
    event.logistics?.alcohol?.likelihood === level
  );

export const getAffordableNightlife = (maxPriceLevel: number = 3): SocialEventType[] =>
  nightlifeEvents.filter(event => 
    (event.logistics?.alcohol?.priceLevel || 5) <= maxPriceLevel
  );

// Group by venue type
export const getVenueTypes = () => {
  const types = {
    'Dive Bars': ['dive-bar'],
    'Sports Bars': ['sports-bar', 'telugu-sports-bar'],
    'Cultural Venues': ['latin-bar', 'irish-pub', 'bollywood-club-night'],
    'Specialty Lounges': ['cigar-lounge', 'hifi-listening-bar', 'barcade']
  };
  
  return Object.entries(types).map(([name, ids]) => ({
    name,
    events: nightlifeEvents.filter(event => ids.includes(event.id))
  }));
};