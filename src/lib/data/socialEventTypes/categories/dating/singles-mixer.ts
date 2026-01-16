// src/lib/data/socialEventTypes/categories/dating/singles-mixer.ts
import type { SocialEventType } from '$lib/types/event';

export const singlesMixer: SocialEventType = {
  id: 'singles-mixer',
  name: 'Singles Mixer',
  category: 'dating',
  properties: ['romantic-focused', 'open-mingling', 'evaluative', 'approach-anxiety'],
  alsoKnownAs: ['Singles Event', 'Mingling Night', 'Dating Social', 'Singles Party'],
  overlapsWith: ['professional-networking', 'speed-dating', 'bar-events'],
  keyDifferences: [
    {
      comparedTo: 'professional-networking',
      differences: [
        'Explicit romantic intent rather than professional',
        'Different conversation topics and goals',
        'Often includes icebreaker games or activities',
        'More focus on personal vs professional attributes'
      ]
    },
    {
      comparedTo: 'speed-dating',
      differences: [
        'Free-flowing mingling vs timed rotations',
        'Less structured, more organic interactions',
        'No guaranteed one-on-one time with everyone',
        'More pressure to approach others'
      ]
    }
  ],
  idealFor: [
    'People who prefer organic meeting over apps',
    'Those comfortable with open mingling',
    'Individuals who want to assess chemistry in person',
    'Social butterflies looking to meet many people',
    'Those who find structured dating too artificial'
  ],
  pressureProfile: {
    level: 'high',
    source: 'High - constant approach anxiety and romantic evaluation pressure',
    mitigationTips: [
      'Set a goal (e.g., talk to 5 new people)',
      'Remember most people feel similarly nervous',
      'Use the event\'s activities as conversation starters',
      'Take breaks if feeling overwhelmed',
      'Focus on making connections, not finding "the one"'
    ]
  },
  socialStructure: {
    soloFriendliness: 'high',
    whySoloFriendly: 'Designed for singles to meet; attending alone is expected',
    groupDynamics: 'Open mingling with possible structured activities; fluid movement',
    conversationFocus: 'Romantic interests, lifestyle, values, hobbies, dating goals, personal stories'
  },
  touchProfile: {
    level: 'low',
    type: 'social',
    consentCulture: 'Light social touch acceptable; read cues carefully',
    boundaries: ['Respect personal space', 'Appropriate social touch only', 'Handshakes over hugs']
  },
  tips: [
    'Research the event demographic beforehand',
    'Have a few conversation topics prepared',
    'Circulate rather than staying with one person',
    'Be honest about your intentions',
    'Know your exit strategy',
    'Arrive early when crowd is smaller',
    'Wear something conversation-worthy (unique accessory)'
  ],
  commonMyths: [
    'Only young people attend (mixers exist for all ages)',
    'It\'s a meat market (many are respectful, well-organized events)',
    'You must find someone (can be valuable just for practice)',
    'Everyone is desperate (most are normal people wanting connection)'
  ],
  redFlags: [
    'Overly aggressive attendees',
    'Poor gender balance',
    'High pressure to buy drinks',
    'Disorganized with no icebreakers',
    'Predatory organizers',
    'Unsafe venue'
  ],
  touchDetails: {
    howPeopleTouch: [
      'Handshakes upon introduction',
      'Light touch on arm during conversation',
      'Occasional hugs between conversations (varies by culture)',
      'Cheers with glasses (clinking)'
    ],
    proximityLevel: 3,
    initiation: 'Context-dependent social touching; always read cues',
    whyNoTouch: 'N/A - social touch appropriate but should be minimal and consensual'
  },
  soloTips: {
    howToGoSolo: [
      'Stand near entrance to greet newcomers',
      'Join group conversations rather than trying one-on-one immediately',
      'Use icebreaker games as natural conversation starters',
      'Offer to help organizer (creates purpose)',
      'Have a "I\'m checking out different events" story ready'
    ],
    bestPosition: 'Near food/drink table (natural traffic area)',
    escapePlan: 'Phone call excuse or bathroom break',
    icebreaker: 'What brought you to this event?',
    forLocals: 'Ask about favorite local spots',
    forTravelers: 'Ask for recommendations in the area'
  },
  logistics: {
    ticketSources: ['Eventbrite', 'Meetup.com', 'Local dating companies', 'Facebook events'],
    parking: {
      type: 'mixed',
      details: 'Often in bars/restaurants with typical urban parking challenges'
    },
    transit: 'Recommended for bar venues',
    alcohol: {
      likelihood: 'high',
      priceLevel: 4,
      byoAllowed: false
    }
  },
  seasonalPricing: {
    cheaperMonths: ['Jan', 'Feb', 'Sep'],
    expensiveMonths: ['Feb (around Valentine\'s)', 'Jun', 'Dec'],
    priceNotes: 'Higher prices for holiday-themed mixers'
  },
  nicheWorld: {
    unwrittenRules: [
      'Don\'t ask for numbers too early',
      'Keep first conversations light',
      'Circulate - don\'t monopolize one person',
      'Thank organizers before leaving',
      'Be honest about relationship goals'
    ],
    socialCurrency: ['Good listener', 'Positive attitude', 'Interesting stories', 'Respectful behavior'],
    entryBarriers: ['Overcoming approach anxiety', 'Cost of tickets/drinks', 'Finding age-appropriate events'],
    tabooTopics: ['Ex relationships', 'Marriage pressure on first meeting', 'Salary details', 'Negative dating stories'],
    initiationRituals: ['First event attendance', 'First successful connection', 'First follow-up date']
  }
};