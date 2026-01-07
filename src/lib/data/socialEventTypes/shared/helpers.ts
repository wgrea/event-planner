// src/lib/data/socialEventTypes/shared/helpers.ts
import type { SocialEventType, EventCategory, PressureLevel, SoloFriendliness, TouchLevel } from '$lib/types/event';
import { socialEventTypes } from '../index'; // Import the main events array

export function getEventsByCategory(events: SocialEventType[], category: string): SocialEventType[] {
  return events.filter(event => event.category === category);
}

export function findEventById(events: SocialEventType[], id: string): SocialEventType | undefined {
  return events.find(event => event.id === id);
}

export function getSimilarEvents(event: SocialEventType, allEvents: SocialEventType[]): SocialEventType[] {
  return allEvents.filter(e => 
    e.id !== event.id && 
    (e.category === event.category || 
     e.overlapsWith.includes(event.id) ||
     event.overlapsWith.includes(e.id))
  );
}

export function filterByPressureLevel(events: SocialEventType[], level: string): SocialEventType[] {
  return events.filter(event => event.pressureProfile.level === level);
}

export function filterBySoloFriendliness(events: SocialEventType[], level: string): SocialEventType[] {
  return events.filter(event => event.socialStructure.soloFriendliness === level);
}

export function getFilterCounts() {
  // Initialize counts
  const categoryCounts: Record<string, number> = {};
  const pressureCounts: Record<string, number> = {};
  const soloCounts: Record<string, number> = {};
  const touchCounts: Record<string, number> = {};
  
  // Count all events
  socialEventTypes.forEach(event => {
    // Category counts
    const category = event.category;
    categoryCounts[category] = (categoryCounts[category] || 0) + 1;
    
    // Pressure level counts
    const pressureLevel = event.pressureProfile.level;
    pressureCounts[pressureLevel] = (pressureCounts[pressureLevel] || 0) + 1;
    
    // Solo friendliness counts
    const soloLevel = event.socialStructure.soloFriendliness;
    soloCounts[soloLevel] = (soloCounts[soloLevel] || 0) + 1;
    
    // Touch level counts
    const touchLevel = event.touchProfile.level;
    touchCounts[touchLevel] = (touchCounts[touchLevel] || 0) + 1;
  });
  
  return {
    categoryCounts,
    pressureCounts,
    soloCounts,
    touchCounts
  };
}