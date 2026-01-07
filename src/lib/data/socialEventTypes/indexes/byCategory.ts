// src/lib/data/socialEventType/indexes/byCategory.ts
import { socialEventTypes } from '../index';

export const eventsByCategory = socialEventTypes.reduce((acc, event) => {
  if (!acc[event.category]) {
    acc[event.category] = [];
  }
  acc[event.category].push(event);
  return acc;
}, {} as Record<string, typeof socialEventTypes>);

// Also create a typed version for better TypeScript support
export type CategorizedEvents = Record<string, typeof socialEventTypes>;

export function getEventsByCategory(category: string) {
  return socialEventTypes.filter(event => event.category === category);
}

export const allCategories = Array.from(
  new Set(socialEventTypes.map(event => event.category))
);