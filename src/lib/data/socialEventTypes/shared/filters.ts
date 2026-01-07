import type { SocialEventType, EventCategory, PressureLevel, SoloFriendliness, TouchLevel } from '$lib/types/event';
import { socialEventTypes } from '../index';

export interface FilterOptions {
  categories?: EventCategory[];
  pressureLevels?: PressureLevel[];
  soloFriendliness?: SoloFriendliness[];
  touchLevels?: TouchLevel[];
  searchTerm?: string;
}

export function filterEvents(options: FilterOptions): SocialEventType[] {
  let filtered = [...socialEventTypes];

  // Filter by categories
  if (options.categories && options.categories.length > 0) {
    filtered = filtered.filter(event => 
      options.categories!.includes(event.category)
    );
  }

  // Filter by pressure levels
  if (options.pressureLevels && options.pressureLevels.length > 0) {
    filtered = filtered.filter(event => 
      options.pressureLevels!.includes(event.pressureProfile.level)
    );
  }

  // Filter by solo friendliness
  if (options.soloFriendliness && options.soloFriendliness.length > 0) {
    filtered = filtered.filter(event => 
      options.soloFriendliness!.includes(event.socialStructure.soloFriendliness)
    );
  }

  // Filter by touch levels
  if (options.touchLevels && options.touchLevels.length > 0) {
    filtered = filtered.filter(event => 
      options.touchLevels!.includes(event.touchProfile.level)
    );
  }

  // Filter by search term
  if (options.searchTerm && options.searchTerm.trim() !== '') {
    const term = options.searchTerm.toLowerCase().trim();
    filtered = filtered.filter(event => 
      event.name.toLowerCase().includes(term) ||
      event.category.toLowerCase().includes(term) ||
      event.properties.some(prop => prop.toLowerCase().includes(term)) ||
      event.idealFor.some(ideal => ideal.toLowerCase().includes(term)) ||
      event.tips.some(tip => tip.toLowerCase().includes(term))
    );
  }

  return filtered;
}

// Get all unique values for filters
export const allCategories = Array.from(
  new Set(socialEventTypes.map(event => event.category))
).sort();

export const allPressureLevels = Array.from(
  new Set(socialEventTypes.map(event => event.pressureProfile.level))
).sort();

export const allSoloFriendlinessLevels = Array.from(
  new Set(socialEventTypes.map(event => event.socialStructure.soloFriendliness))
).sort();

export const allTouchLevels = Array.from(
  new Set(socialEventTypes.map(event => event.touchProfile.level))
).sort();

// Get counts for each filter option
export function getFilterCounts() {
  return {
    categories: allCategories.map(category => ({
      value: category,
      count: socialEventTypes.filter(e => e.category === category).length
    })),
    pressureLevels: allPressureLevels.map(level => ({
      value: level,
      count: socialEventTypes.filter(e => e.pressureProfile.level === level).length
    })),
    soloFriendliness: allSoloFriendlinessLevels.map(level => ({
      value: level,
      count: socialEventTypes.filter(e => e.socialStructure.soloFriendliness === level).length
    })),
    touchLevels: allTouchLevels.map(level => ({
      value: level,
      count: socialEventTypes.filter(e => e.touchProfile.level === level).length
    }))
  };
}