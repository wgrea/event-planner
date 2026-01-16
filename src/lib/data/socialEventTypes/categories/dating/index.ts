// src/lib/data/socialEventTypes/categories/dating/index.ts
import type { SocialEventType } from '$lib/types/event';

import { speedDating } from './speed-dating';
import { singlesMixer } from './singles-mixer';

export const datingEvents: SocialEventType[] = [
  speedDating,
  singlesMixer
];

export { speedDating, singlesMixer };