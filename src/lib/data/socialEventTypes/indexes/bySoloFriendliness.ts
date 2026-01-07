// src/lib/data/socialEventType/indexes/bySoloFriendliness.ts
import type { SocialEventType } from '$lib/types/event';
import { socialEventTypes } from '../index';  // Changed from '../index' to '../index'

export const soloFriendlyEvents = socialEventTypes.filter(
  (event: SocialEventType) => event.socialStructure.soloFriendliness === 'high'
);

export const moderateSoloEvents = socialEventTypes.filter(
  (event: SocialEventType) => event.socialStructure.soloFriendliness === 'moderate'
);

export const groupFocusedEvents = socialEventTypes.filter(
  (event: SocialEventType) => event.socialStructure.soloFriendliness === 'low'
);