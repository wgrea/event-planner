// src/lib/types/filter.ts
import type { 
  PressureLevel, 
  SoloFriendliness, 
  TouchLevel, 
  EventCategory 
} from './event';

export interface EventTypeFilters {
  pressureLevels: PressureLevel[];
  soloFriendliness: SoloFriendliness[];
  touchLevels: TouchLevel[];
  categories: EventCategory[];
  idealFor: string[];
  searchQuery: string;
}

export interface UserComfortProfile {
  preferredPressure: PressureLevel;
  soloComfort: SoloFriendliness;
  touchComfort: TouchLevel;
  touchTypePreference: ('context-initiated' | 'self-initiated' | 'structured' | 'spontaneous')[];
  dealBreakers: string[];
  goals: ('socialize' | 'learn' | 'relax' | 'exercise' | 'connect' | 'escape')[];
}