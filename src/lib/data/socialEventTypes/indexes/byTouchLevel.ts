// src/lib/data/socialEventType/indexes/byTouchLevel.ts
import type { SocialEventType } from '$lib/types/event';
import { socialEventTypes } from '../index';

// Filter events by touch level
export const noTouchEvents = socialEventTypes.filter(
  (event: SocialEventType) => event.touchProfile.level === 'none'
);

export const lowTouchEvents = socialEventTypes.filter(
  (event: SocialEventType) => event.touchProfile.level === 'low'
);

export const moderateTouchEvents = socialEventTypes.filter(
  (event: SocialEventType) => event.touchProfile.level === 'moderate'
);

export const highTouchEvents = socialEventTypes.filter(
  (event: SocialEventType) => event.touchProfile.level === 'high'
);

export const variesTouchEvents = socialEventTypes.filter(
  (event: SocialEventType) => event.touchProfile.level === 'varies'
);

// Utility function to get events by touch level
export function getEventsByTouchLevel(level: string): SocialEventType[] {
  return socialEventTypes.filter(event => event.touchProfile.level === level);
}

// Get all unique touch levels from events
export const allTouchLevels = Array.from(
  new Set(socialEventTypes.map(event => event.touchProfile.level))
).sort();