// src/lib/utils/eventHelpers.ts

import type { SocialEventType } from '$lib/types/event';

export function getEventName(eventType: SocialEventType | any): string {
  if (!eventType) return 'Untitled Event';
  
  // Try different possible name properties
  return eventType.name || 
         eventType.title || 
         eventType.displayName ||
         eventType.id?.split('-').map((word: string) => 
           word.charAt(0).toUpperCase() + word.slice(1)
         ).join(' ') ||
         'Untitled Event';
}

export function getEventDescription(eventType: SocialEventType | any): string {
  if (!eventType) return 'No description available';
  
  // Try different possible description properties
  // SocialEventType might not have a direct description property
  // We can create one from other properties
  const category = eventType.category || '';
  const formattedCategory = category.split('-').map((word: string) => 
    word.charAt(0).toUpperCase() + word.slice(1)
  ).join(' ');
  
  const pressure = eventType.pressureProfile?.level || '';
  const solo = eventType.socialStructure?.soloFriendliness || '';
  const touch = eventType.touchProfile?.level || '';
  
  const parts = [];
  if (formattedCategory) parts.push(formattedCategory);
  if (pressure) parts.push(`${pressure} pressure`);
  if (solo) parts.push(`${solo} solo-friendly`);
  if (touch && touch !== 'none') parts.push(`${touch} touch level`);
  
  if (parts.length > 0) {
    return `A ${parts.join(', ')} event.`;
  }
  
  return 'No description available';
}

export function getEventCategory(eventType: SocialEventType | any): string {
  if (!eventType) return 'Unknown';
  
  // Format category from kebab-case to Title Case
  const category = eventType.category || '';
  return category.split('-').map((word: string) => 
    word.charAt(0).toUpperCase() + word.slice(1)
  ).join(' ');
}

export function getEventTips(eventType: SocialEventType): string[] {
  if (!eventType) return [];
  return eventType.tips || [];
}

export function getEventRedFlags(eventType: SocialEventType): string[] {
  if (!eventType) return [];
  return eventType.redFlags || [];
}