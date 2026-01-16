// src/lib/data/socialEventTypes/categories/dating/speed-dating.ts
import type { SocialEventType } from '$lib/types/event';

export const speedDating: SocialEventType = {
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
  ],
  touchDetails: {
    howPeopleTouch: [],
    proximityLevel: 2,
    initiation: 'N/A - seated across tables',
    whyNoTouch: 'Structured professional dating environment prioritizes conversation over physical connection'
  },
  soloTips: {
    howToGoSolo: [
      'Have 3-4 conversation starters ready',
      'Focus on listening more than talking',
      'Take notes between rounds (gives you purpose)',
      'Remember everyone is nervous'
    ],
    bestPosition: 'Arrive early to get comfortable seat',
    escapePlan: 'Bathroom breaks between rounds',
    icebreaker: 'What made you decide to try speed dating?'
  },
  logistics: {
    ticketSources: ['Eventbrite', 'Meetup.com', 'Pre-dating.com', 'ivy.dating'],
    parking: {
      type: 'mixed',
      details: 'Often in restaurants/bars with varying parking'
    },
    alcohol: {
      likelihood: 'medium',
      priceLevel: 3,
      byoAllowed: false
    }
  },
  seasonalPricing: {
    cheaperMonths: ['Jan', 'Feb', 'Sep'],
    expensiveMonths: ['Feb (Valentines)', 'Dec'],
    priceNotes: 'Higher prices around holidays'
  },
  nicheWorld: {
    unwrittenRules: [
      'No exchanging numbers during event',
      'Keep conversation light (avoid heavy topics)',
      'Be honest on connection cards',
      'Don\'t ask someone out during the event'
    ],
    socialCurrency: ['Good listener', 'Positive energy', 'Respectful', 'Interesting questions'],
    entryBarriers: ['Overcoming stigma', 'Cost', 'Anxiety about rejection'],
    tabooTopics: ['Exes', 'Politics', 'Salary', 'Marriage pressure'],
    initiationRituals: ['First event attendance', 'First match']
  }
};