// src/lib/types/plan.ts
import type { SocialEventType } from './event';
import type { UserComfortProfile } from './filter';

export interface EventPlan {
  id: string;
  userId: string;
  title: string;
  description?: string;
  
  // The actual event to attend
  eventType: SocialEventType; // Could also be just eventTypeId
  
  // Personalization
  personalNotes: string;
  customizations: {
    arrivalStrategy: string;
    exitStrategy: string;
    safetyNets: string[];
    accommodations: string[]; // Personal accommodations needed
  };
  
  // Logistics
  dateTime?: Date;
  location?: LocationDetails;
  companions: 'solo' | 'with-friend' | 'group' | 'tbd';
  companionDetails?: string[];
  
  // State & Progress
  status: 'idea' | 'planned' | 'attended' | 'postponed' | 'cancelled';
  confidenceLevel: number; // 1-10
  preparationSteps: PreparationStep[];
  reflection?: EventReflection;
  
  metadata: {
    createdAt: Date;
    updatedAt: Date;
    version: number;
    tags: string[];
  };
}

export interface PreparationStep {
  id: string;
  description: string;
  completed: boolean;
  dueBefore: 'week-before' | 'day-before' | 'hour-before' | 'at-event';
  category: 'research' | 'logistics' | 'social' | 'self-care';
}

export interface EventReflection {
  attendedDate: Date;
  rating: number; // 1-5
  whatWentWell: string[];
  challenges: string[];
  lessonsLearned: string[];
  wouldRepeat: boolean;
  notes: string;
}

export interface LocationDetails {
  name: string;
  address?: string;
  knownEnvironment: boolean;
  accessibilityNotes: string[];
  quietSpacesAvailable: boolean;
}