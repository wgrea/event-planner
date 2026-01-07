// src/lib/data/socialEventType/indexes/byPressureLevel.ts
import type { SocialEventType } from '$lib/types/event';
import { socialEventTypes } from '../index';  // This should work if index.ts exists

export const lowPressureEvents = socialEventTypes.filter(
  (event: SocialEventType) => event.pressureProfile.level === 'low'
);

export const mediumPressureEvents = socialEventTypes.filter(
  (event: SocialEventType) => event.pressureProfile.level === 'medium'
);

export const highPressureEvents = socialEventTypes.filter(
  (event: SocialEventType) => event.pressureProfile.level === 'high'
);