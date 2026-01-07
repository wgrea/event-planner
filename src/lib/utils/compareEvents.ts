// src/lib/utils/compareEvents.ts
import type { SocialEventType } from '$lib/types/event';

export interface ComparisonResult {
  sharedProperties: string[];
  keyDifferences: ComparisonDifference[];
  bestFor: {
    eventA: string[];
    eventB: string[];
  };
  sharedTips: string[];
}

export interface ComparisonDifference {
  category: string;
  a: string;
  b: string;
  implication: string;
}

export function compareEventTypes(eventA: SocialEventType, eventB: SocialEventType): ComparisonResult {
  return {
    sharedProperties: eventA.properties.filter(p => eventB.properties.includes(p)),
    keyDifferences: [
      {
        category: 'Pressure Level',
        a: eventA.pressureProfile.level,
        b: eventB.pressureProfile.level,
        implication: getPressureImplication(eventA.pressureProfile.level, eventB.pressureProfile.level)
      },
      {
        category: 'Solo Friendliness',
        a: eventA.socialStructure.soloFriendliness,
        b: eventB.socialStructure.soloFriendliness,
        implication: getSoloImplication(eventA.socialStructure.soloFriendliness, eventB.socialStructure.soloFriendliness)
      },
      {
        category: 'Touch Level',
        a: eventA.touchProfile.level,
        b: eventB.touchProfile.level,
        implication: getTouchImplication(eventA.touchProfile.level, eventB.touchProfile.level)
      }
    ],
    bestFor: {
      eventA: eventA.idealFor.filter(group => !eventB.idealFor.includes(group)),
      eventB: eventB.idealFor.filter(group => !eventA.idealFor.includes(group))
    },
    sharedTips: eventA.tips.filter(tip => eventB.tips.includes(tip))
  };
}

function getPressureImplication(a: string, b: string): string {
  if (a === b) return 'Similar pressure levels';
  if (a === 'low' && b === 'high') return 'Event A is much less stressful';
  if (a === 'high' && b === 'low') return 'Event B is much less stressful';
  return 'Different pressure environments';
}

function getSoloImplication(a: string, b: string): string {
  if (a === b) return 'Equally solo-friendly';
  if (a === 'high' && b === 'low') return 'Event A is much better for attending alone';
  if (a === 'low' && b === 'high') return 'Event B is much better for attending alone';
  return 'Different solo comfort levels';
}

function getTouchImplication(a: string, b: string): string {
  if (a === b) return 'Similar touch levels';
  if (a === 'none' && b === 'high') return 'Event A avoids touch, Event B embraces it';
  if (a === 'high' && b === 'none') return 'Event B avoids touch, Event A embraces it';
  return 'Different physical interaction expectations';
}