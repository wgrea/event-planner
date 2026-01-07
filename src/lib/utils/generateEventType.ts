// src/lib/utils/generateEventType.ts
import type { SocialEventType } from '$lib/types/event';

export function createEventType(template: Partial<SocialEventType> & { id: string; name: string; category: string }): SocialEventType {
  const defaults: Omit<SocialEventType, 'id' | 'name' | 'category'> = {
    properties: [],
    alsoKnownAs: [],
    overlapsWith: [],
    keyDifferences: [],
    idealFor: [],
    pressureProfile: {
      level: 'medium',
      source: '',
      mitigationTips: []
    },
    socialStructure: {
      soloFriendliness: 'moderate',
      whySoloFriendly: '',
      groupDynamics: '',
      conversationFocus: ''
    },
    touchProfile: {
      level: 'none',
      type: 'structured',
      consentCulture: '',
      boundaries: []
    },
    tips: [],
    commonMyths: [],
    redFlags: []
  };

  return {
    ...defaults,
    ...template
  } as SocialEventType;
}

// Example usage for quick additions:
/*
const newEvent = createEventType({
  id: 'museum-visit',
  name: 'Museum Visit',
  category: 'educational',
  properties: ['quiet', 'self-paced', 'educational', 'contemplative'],
  idealFor: ['Solo explorers', 'Art lovers', 'History enthusiasts'],
  pressureProfile: {
    level: 'low',
    source: 'Minimal - focus is on exhibits, not social interaction',
    mitigationTips: ['Use audio guide for structured experience', 'Take breaks in cafe areas']
  },
  socialStructure: {
    soloFriendliness: 'high',
    whySoloFriendly: 'Common to visit museums alone; no social expectations',
    groupDynamics: 'Individual exploration with occasional shared observations',
    conversationFocus: 'Exhibits, art interpretation, historical context'
  },
  // ... fill in remaining fields
});
*/