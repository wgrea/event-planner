// src/lib/data/socialEventTypes/categories/bar-events/index.ts
import type { SocialEventType } from '$lib/types/event';

// Import individual event files
import { pubTrivia } from './pub-trivia';
import { danceLessonsBar } from './dance-lessons-bar';
import { karaokeNight } from './karaoke-night';
import { viewingParty } from './viewing-party';
import { barGamesTournament } from './bar-games-tournament';
import { openMicNight } from './open-mic-night';

// Combine all bar events
export const barEvents: SocialEventType[] = [
  pubTrivia,
  danceLessonsBar,
  karaokeNight,
  viewingParty,
  barGamesTournament,
  openMicNight
];

// Export individual events (optional, for direct imports)
export { 
  pubTrivia, 
  danceLessonsBar, 
  karaokeNight, 
  viewingParty, 
  barGamesTournament, 
  openMicNight 
};

// Helper functions specific to bar events
export const getBarEventsByProperty = (property: string): SocialEventType[] =>
  barEvents.filter(event => event.properties.includes(property));

export const getBarEventsByPressureLevel = (level: string): SocialEventType[] =>
  barEvents.filter(event => event.pressureProfile.level === level);

// Get events suitable for solo attendees
export const getSoloFriendlyBarEvents = (): SocialEventType[] =>
  barEvents.filter(event => event.socialStructure.soloFriendliness === 'high');

// Find bar event by ID
export const getBarEventById = (id: string): SocialEventType | undefined =>
  barEvents.find(event => event.id === id);