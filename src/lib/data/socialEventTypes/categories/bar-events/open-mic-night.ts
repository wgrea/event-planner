// src/lib/data/socialEventTypes/categories/bar-events/pub-trivia.ts
import type { SocialEventType } from '$lib/types/event';

export const openMicNight: SocialEventType = {
    id: 'open-mic-night',
    name: 'Open Mic Night',
    category: 'bar-events',
    properties: ['artistic', 'vulnerable', 'spectator-friendly', 'creative'],
    alsoKnownAs: ['Acoustic Night', 'Comedy Open Mic', 'Poetry Slam'],
    overlapsWith: ['entertainment-comedy', 'music-performance'],
    keyDifferences: [
      {
        comparedTo: 'music-performance',
        differences: [
          'Unpolished and experimental; performers are often testing new material',
          'Short sets with many different performers',
          'Lower barrier to entry for the performer'
        ]
      }
    ],
    idealFor: [
      'Creatives and artists',
      'Solo spectators who enjoy people-watching',
      'Introverts who want to be in a "room of people" without speaking'
    ],
    pressureProfile: {
      level: 'very low',
      source: 'Minimal for spectators; focus is entirely on the stage',
      mitigationTips: [
        'Sit near the stage if you want to be engaged, or in the back to remain invisible',
        'Provide supportive applause; it makes the room feel safer',
        'Bring a notebook to "look the part" of a creative'
      ]
    },
    socialStructure: {
      soloFriendliness: 'high',
      whySoloFriendly: 'The "theatre" setup makes it completely normal to sit alone and watch',
      groupDynamics: 'A community of "creatives" who often talk shop between sets',
      conversationFocus: 'Lyrics, jokes, stage presence, and "finding your voice"'
    },
    touchProfile: {
      level: 'none',
      type: 'social',
      consentCulture: 'Standard theater-style space norms',
      boundaries: ['Do not heckle performers', 'Wait for a set break to move around the room']
    },
    tips: [
      'If you\'re performing, arrive early to get on the signup sheet',
      'Respect the time limit given by the host',
      'Stick around after your set to support the other performers'
    ],
    commonMyths: [
      'It’s only for "failed" artists (many pros use open mics to practice)',
      'It’s going to be "cringe" (there is usually a mix of surprising talent and raw effort)'
    ],
    redFlags: [
      'A host who makes fun of the performers',
      'A crowd that talks loudly during performances',
      'No one paying attention to the stage'
    ]
};