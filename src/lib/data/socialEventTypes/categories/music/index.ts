// src/lib/data/socialEventTypes/categories/music/index.ts
import type { SocialEventType } from '$lib/types/event';

import { rave } from './rave';
import { concertFestival } from './concert-festival';

export const musicEvents: SocialEventType[] = [
  rave,
  concertFestival
];

export { rave, concertFestival };