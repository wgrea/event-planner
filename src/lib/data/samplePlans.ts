// src/lib/data/samplePlans.ts - UPDATED IMPORTS
import type { SocialEventType } from '$lib/types/event';
import type { UserComfortProfile } from '$lib/types/filter';
import type { EventPlan, PreparationStep } from '$lib/types/plan';
import { socialEventTypes } from './socialEventTypes/index';
import { generatePreparationChecklist } from '$lib/utils/planning';

// Find the specific event types from your catalog
const salsaEvent = socialEventTypes.find(e => 
  e.name.toLowerCase().includes('salsa') || 
  e.id.includes('salsa')
);

const raveEvent = socialEventTypes.find(e => 
  e.name.toLowerCase().includes('rave') || 
  e.name.toLowerCase().includes('electronic')
);

// If not found in your catalog, create temporary ones
const defaultSalsaEvent = salsaEvent || {
  id: 'salsa-social-dance',
  name: 'Salsa Social Dance',
  category: 'dance',
  properties: ['partnered', 'structured', 'music-focused'],
  idealFor: ['People who want safe, structured touch', 'Those who enjoy learning physical skills'],
  pressureProfile: { level: 'low', source: '', mitigationTips: [] },
  socialStructure: { soloFriendliness: 'high', whySoloFriendly: '', groupDynamics: '', conversationFocus: '' },
  touchProfile: { level: 'moderate', type: 'structured', consentCulture: '', boundaries: [] },
  tips: ['Wear shoes that pivot easily'],
  alsoKnownAs: [],
  overlapsWith: [],
  keyDifferences: [],
  commonMyths: [],
  redFlags: []
};

const defaultRaveEvent = raveEvent || {
  id: 'rave-electronic-event',
  name: 'Rave / Electronic Music Event',
  category: 'music',
  properties: ['music-centric', 'high-energy', 'solo-friendly'],
  idealFor: ['People who want to be social without talking', 'Music enthusiasts'],
  pressureProfile: { level: 'low', source: '', mitigationTips: [] },
  socialStructure: { soloFriendliness: 'high', whySoloFriendly: '', groupDynamics: '', conversationFocus: '' },
  touchProfile: { level: 'low', type: 'spontaneous', consentCulture: '', boundaries: [] },
  tips: ['Hydration pack is your best friend'],
  alsoKnownAs: [],
  overlapsWith: [],
  keyDifferences: [],
  commonMyths: [],
  redFlags: []
};

export const samplePlans: EventPlan[] = [
  {
    id: 'plan_salsa_1',
    userId: 'sample_user',
    title: 'Try Friday Night Salsa Social',
    description: 'Beginner-friendly salsa social at Dance Studio Downtown',
    
    eventType: defaultSalsaEvent,
    
    personalNotes: 'Want to try structured social dancing. Like that I can go alone and there are clear roles.',
    customizations: {
      arrivalStrategy: 'Arrive 30 minutes early to watch first',
      exitStrategy: 'Plan to leave after 5-6 dances or if overwhelmed',
      safetyNets: [
        'Wear my most comfortable pivoting shoes',
        'Have headphones in bag in case I need auditory break',
        'Pre-plan "I need a break" phrase'
      ],
      accommodations: ['Will take breaks every 3 dances']
    },
    
    companions: 'solo',
    confidenceLevel: 7,
    
    preparationSteps: [
      {
        id: 'step1',
        description: 'Watch basic salsa step tutorial on YouTube',
        completed: true,
        dueBefore: 'week-before',
        category: 'research'
      },
      {
        id: 'step2',
        description: 'Practice basic step at home',
        completed: true,
        dueBefore: 'day-before',
        category: 'self-care'
      },
      {
        id: 'step3',
        description: 'Pack water bottle and comfortable shoes',
        completed: false,
        dueBefore: 'hour-before',
        category: 'logistics'
      }
    ],
    
    status: 'planned',
    metadata: {
      createdAt: new Date('2024-01-15'),
      updatedAt: new Date('2024-01-18'),
      version: 1,
      tags: ['dance', 'social', 'first-time']
    }
  },
  {
    id: 'plan_rave_1',
    userId: 'sample_user',
    title: 'Saturday Night Techno Event',
    description: 'Local DJ night at The Warehouse',
    
    eventType: defaultRaveEvent,
    
    personalNotes: 'Love electronic music but usually avoid crowds. Want to try with good preparation.',
    customizations: {
      arrivalStrategy: 'Get there right as doors open to claim good spot',
      exitStrategy: 'Leave before peak crowd time (around midnight)',
      safetyNets: [
        'Bring earplugs and backup pair',
        'Hydration backpack with 2L water',
        'Have ride share app ready',
        'Wear identifiable item so friends can find me'
      ],
      accommodations: ['Will take breaks every 45 minutes in chill zone']
    },
    
    companions: 'with-friend',
    companionDetails: ['Alex - experienced raver, knows the venue'],
    confidenceLevel: 6,
    
    preparationSteps: [
      {
        id: 'step1',
        description: 'Listen to DJ\'s recent sets to know what to expect',
        completed: true,
        dueBefore: 'week-before',
        category: 'research'
      },
      {
        id: 'step2',
        description: 'Test hydration pack for leaks',
        completed: true,
        dueBefore: 'day-before',
        category: 'logistics'
      },
      {
        id: 'step3',
        description: 'Coordinate meeting spot with Alex',
        completed: false,
        dueBefore: 'hour-before',
        category: 'social'
      }
    ],
    
    status: 'idea',
    metadata: {
      createdAt: new Date('2024-01-10'),
      updatedAt: new Date('2024-01-12'),
      version: 1,
      tags: ['music', 'electronic', 'crowd-test']
    }
  }
];

// Helper function to create a plan from an event type
export function createPlanFromEventType(
  eventType: SocialEventType,
  userId: string,
  title?: string
): EventPlan {
  const defaultUserProfile: UserComfortProfile = {
    preferredPressure: 'low',
    soloComfort: 'high',
    touchComfort: 'moderate',
    touchTypePreference: ['structured', 'context-initiated'],
    dealBreakers: [],
    goals: ['socialize', 'escape']
  };
  
  return {
    id: `plan_${eventType.id}_${Date.now()}`,
    userId,
    title: title || `Try ${eventType.name}`,
    description: `Planning to attend a ${eventType.name} event`,
    eventType,
    personalNotes: '',
    customizations: {
      arrivalStrategy: '',
      exitStrategy: '',
      safetyNets: [],
      accommodations: []
    },
    companions: 'solo',
    confidenceLevel: 5,
    preparationSteps: generatePreparationChecklist(eventType, defaultUserProfile),
    status: 'idea',
    metadata: {
      createdAt: new Date(),
      updatedAt: new Date(),
      version: 1,
      tags: [eventType.category, 'new']
    }
  };
}