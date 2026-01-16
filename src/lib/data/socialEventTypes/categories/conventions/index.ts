// src/lib/data/socialEventTypes/categories/conventions/index.ts
import type { SocialEventType } from '$lib/types/event';

import { fanConvention } from './fan-convention';
import { professionalConference } from './professional-conference';
import { animeConvention } from './anime-convention';

export const conventionEvents: SocialEventType[] = [
  fanConvention,
  professionalConference,
  animeConvention
];

export { fanConvention, professionalConference, animeConvention };