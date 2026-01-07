// src/lib/utils/planning.ts
import type { SocialEventType } from '$lib/types/event';
import type { UserComfortProfile } from '$lib/types/filter';
import type { PreparationStep } from '$lib/types/plan';

export function generatePreparationChecklist(
  event: SocialEventType,
  user: UserComfortProfile
): PreparationStep[] {
  const steps: PreparationStep[] = [
    {
      id: 'research',
      description: `Research "${event.name}" expectations`,
      completed: false,
      dueBefore: 'week-before',
      category: 'research'
    },
    {
      id: 'accommodations',
      description: `Plan personal accommodations for ${event.pressureProfile.level} pressure`,
      completed: false,
      dueBefore: 'day-before',
      category: 'self-care'
    }
  ];
  
  if (event.socialStructure.soloFriendliness === 'low') {
    steps.push({
      id: 'companion',
      description: 'Arrange companion or check-in buddy',
      completed: false,
      dueBefore: 'day-before',
      category: 'social'
    });
  }
  
  return steps;
}

export function calculateConfidenceScore(
  event: SocialEventType,
  user: UserComfortProfile,
  preparationLevel: number
): number {
  // Implementation based on event-user match and preparation
  let score = 5; // Base score
  
  // Pressure compatibility
  const pressureMatch = {
    'none': 2, 'very low': 1.5, 'low': 1, 'medium': 0, 'high': -1
  };
  
  // Add scoring logic here
  return Math.max(1, Math.min(10, score));
}