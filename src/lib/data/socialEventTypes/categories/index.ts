// src/lib/data/socialEventTypes/categories/index.ts
import type { SocialEventType } from '$lib/types/event';

// Import from modular categories
import { barEvents } from './bar-events/index';
import { nightlifeEvents } from './nightlife/index';

// Import from flat files (to be converted later)
import { datingEvents } from './dating';
import { danceEvents } from './dance';
import { musicEvents } from './music';
import { conventionEvents } from './conventions';
// ... import other categories as they exist

// Combine ALL events from all categories
export const allEvents: SocialEventType[] = [
  ...barEvents,
  ...nightlifeEvents,
  ...datingEvents,
  ...danceEvents,
  ...musicEvents,
  ...conventionEvents,
  // ... add other categories
];

// Group events by category for easy access
export const eventsByCategory: Record<string, SocialEventType[]> = {
  'bar-events': barEvents,
  'nightlife': nightlifeEvents,
  'dating': datingEvents,
  'dance': danceEvents,
  'music': musicEvents,
  'conventions': conventionEvents,
  // ... add other categories
};

// Export individual categories for direct imports
export { barEvents, nightlifeEvents, datingEvents, danceEvents, musicEvents, conventionEvents };

// Helper functions
export const getEventsByCategory = (category: string): SocialEventType[] => 
  eventsByCategory[category] || [];

export const findEventById = (id: string): SocialEventType | undefined =>
  allEvents.find(event => event.id === id);

export const getEventCategories = (): string[] => 
  Object.keys(eventsByCategory).sort();