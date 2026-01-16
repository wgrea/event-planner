// src/lib/data/socialEventTypes/index.ts

// Import all categories
import { hobbyEvents } from './categories/hobby';
import { danceEvents } from './categories/dance/index';
import { musicEvents } from './categories/music/index';
import { movementEvents } from './categories/movement';
import { educationalEvents } from './categories/educational';
import { specialInterestEvents } from './categories/special-interest';
import { professionalEvents } from './categories/professional';
import { entertainmentEvents } from './categories/entertainment';
import { volunteerEvents } from './categories/volunteer';
import { gamingEvents } from './categories/gaming';
import { sportsEvents } from './categories/sports';
import { animalEvents } from './categories/animal'; // NEW
import { creativeEvents } from './categories/creative'; // NEW
import { datingEvents } from './categories/dating/index'; // NEW
import { foodDrinkEvents } from './categories/food-drink'; // NEW
import { outdoorEvents } from './categories/outdoor'; // NEW
import { technologyEvents } from './categories/technology'; // NEW
import { wellnessEvents } from './categories/wellness'; // NEW
import { socialEvents } from './categories/social'; // Already exists
import { culturalEvents } from './categories/cultural'; // NEW
// src/lib/data/socialEventTypes/index.ts

// Add these imports at the top with the others:
import { nightlifeEvents } from './categories/nightlife/index';
import { barEvents } from './categories/bar-events/index';

// In the combined array, add them:
export const socialEventTypes = [
  ...hobbyEvents,
  ...danceEvents,
  ...musicEvents,
  ...movementEvents,
  ...educationalEvents,
  ...specialInterestEvents,
  ...professionalEvents,
  ...entertainmentEvents,
  ...volunteerEvents,
  ...gamingEvents,
  ...sportsEvents,
  ...animalEvents,
  ...creativeEvents,
  ...datingEvents,
  ...foodDrinkEvents,
  ...outdoorEvents,
  ...technologyEvents,
  ...wellnessEvents,
  ...socialEvents,
  ...culturalEvents,
  ...nightlifeEvents, // ADD THIS LINE
  ...barEvents,       // ADD THIS LINE
];

// In the re-exports section, add them:
export {
  hobbyEvents,
  danceEvents,
  musicEvents,
  movementEvents,
  educationalEvents,
  specialInterestEvents,
  professionalEvents,
  entertainmentEvents,
  volunteerEvents,
  gamingEvents,
  sportsEvents,
  animalEvents,
  creativeEvents,
  datingEvents,
  foodDrinkEvents,
  outdoorEvents,
  technologyEvents,
  wellnessEvents,
  socialEvents,
  culturalEvents,
  nightlifeEvents, // ADD THIS LINE
  barEvents,       // ADD THIS LINE
};

// Re-export utility functions and constants
export { 
  getEventsByCategory, 
  findEventById, 
  getSimilarEvents,
  getFilterCounts, // Add this
  filterByPressureLevel,
  filterBySoloFriendliness
} from './shared/helpers';
export { 
  CATEGORIES, 
  PRESSURE_LEVELS, 
  SOLO_FRIENDLINESS_LEVELS, 
  TOUCH_LEVELS 
} from './shared/constants';

