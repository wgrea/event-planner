// src/lib/data/socialEventTypes/categories/dating.ts
import type { SocialEventType } from '$lib/types/event';

export const datingEvents: SocialEventType[] = [
  {
    id: 'speed-dating',
    name: 'Speed Dating',
    category: 'dating',
    properties: ['evaluative', 'time-limited', 'romantic-focused', 'high-stakes'],
    alsoKnownAs: ['Fast Dating', 'Quick Dates', 'Rotation Dating'],
    overlapsWith: ['singles-mixer', 'professional-networking'],
    keyDifferences: [
      {
        comparedTo: 'singles-mixer',
        differences: [
          'Highly structured with timed interactions',
          'Equal opportunity to meet everyone',
          'Clear "match" system for follow-up'
        ]
      }
    ],
    idealFor: [
      'People looking for efficient dating',
      'Those who prefer structured social interaction',
      'Individuals who want to meet many potential partners quickly',
      'People tired of dating apps'
    ],
    pressureProfile: {
      level: 'high',
      source: 'High - explicit evaluation and romantic pressure in timed format',
      mitigationTips: [
        'Prepare a few conversation starters',
        'Remember everyone is equally nervous',
        'Focus on having interesting conversations, not just "winning"',
        'View it as practice even if no matches'
      ]
    },
    socialStructure: {
      soloFriendliness: 'high',
      whySoloFriendly: 'Designed specifically for singles attending alone',
      groupDynamics: 'Rotating one-on-one conversations with bell signaling changes',
      conversationFocus: 'Basic get-to-know-you questions, interests, values, lifestyle'
    },
    touchProfile: {
      level: 'none',
      type: 'professional',
      consentCulture: 'Typically no touch; handshakes optional',
      boundaries: ['Professional dating environment', 'Respect personal space at tables']
    },
    tips: [
      'Dress appropriately but comfortably',
      'Arrive early to settle nerves',
      'Be honest on your match card',
      'Follow up with matches promptly if interested',
      'Don\'t take rejection personally'
    ],
    commonMyths: [
      'Only desperate people attend (many successful, busy professionals use it)',
      'You need to be super attractive (chemistry is about connection, not just looks)',
      'It\'s awkward and painful (can be fun with right attitude)'
    ],
    redFlags: [
      'Poorly organized with timing issues',
      'Significant gender imbalance',
      'Pressure to match with everyone',
      'Unprofessional organizers'
    ]
  },
  {
    id: 'singles-mixer',
    name: 'Singles Mixer',
    category: 'dating',
    properties: ['romantic-focused', 'open-mingling', 'evaluative', 'approach-anxiety'],
    alsoKnownAs: ['Singles Event', 'Mingling Night', 'Dating Social'],
    overlapsWith: ['professional-networking', 'speed-dating'],
    keyDifferences: [
      {
        comparedTo: 'professional-networking',
        differences: [
          'Explicit romantic intent rather than professional',
          'Different conversation topics and goals',
          'Often includes icebreaker games or activities'
        ]
      }
    ],
    idealFor: [
      'People who prefer organic meeting over apps',
      'Those comfortable with open mingling',
      'Individuals who want to assess chemistry in person',
      'Social butterflies looking to meet many people'
    ],
    pressureProfile: {
      level: 'high',
      source: 'High - constant approach anxiety and romantic evaluation pressure',
      mitigationTips: [
        'Set a goal (e.g., talk to 5 new people)',
        'Remember most people feel similarly nervous',
        'Use the event\'s activities as conversation starters',
        'Take breaks if feeling overwhelmed'
      ]
    },
    socialStructure: {
      soloFriendliness: 'high',
      whySoloFriendly: 'Designed for singles to meet; attending alone is expected',
      groupDynamics: 'Open mingling with possible structured activities',
      conversationFocus: 'Romantic interests, lifestyle, values, hobbies, dating goals'
    },
    touchProfile: {
      level: 'low',
      type: 'social',
      consentCulture: 'Light social touch acceptable; read cues carefully',
      boundaries: ['Respect personal space', 'Appropriate social touch only']
    },
    tips: [
      'Research the event demographic beforehand',
      'Have a few conversation topics prepared',
      'Circulate rather than staying with one person',
      'Be honest about your intentions',
      'Know your exit strategy'
    ],
    commonMyths: [
      'Only young people attend (mixers exist for all ages)',
      'It\'s a meat market (many are respectful, well-organized events)',
      'You must find someone (can be valuable just for practice)'
    ],
    redFlags: [
      'Overly aggressive attendees',
      'Poor gender balance',
      'High pressure to buy drinks',
      'Disorganized with no icebreakers'
    ]
  }
];