import type { SocialEventType } from '$lib/types/event';

export const wellnessEvents: SocialEventType[] = [
  {
    id: 'silent-retreat',
    name: 'Silent Meditation Retreat',
    category: 'wellness',
    properties: ['silent', 'introspective', 'structured-silence', 'mindfulness'],
    alsoKnownAs: ['Meditation Retreat', 'Silent Practice', 'Contemplative Retreat'],
    overlapsWith: ['ecstatic-dance', 'book-club'],
    keyDifferences: [
      {
        comparedTo: 'ecstatic-dance',
        differences: [
          'Complete silence vs movement expression',
          'Inward focus vs outward expression',
          'Structured meditation vs free movement'
        ]
      }
    ],
    idealFor: [
      'People who need social breaks',
      'Mindfulness practitioners',
      'Introverts',
      'Those seeking deep relaxation',
      'Individuals wanting self-reflection space'
    ],
    pressureProfile: {
      level: 'none',
      source: 'None - silence eliminates social pressure entirely',
      mitigationTips: [
        'Embrace the silence rather than fighting it',
        'Focus on your own experience',
        'Use provided guidance if available',
        'Be patient with yourself'
      ]
    },
    socialStructure: {
      soloFriendliness: 'high',
      whySoloFriendly: 'Designed for individual practice; attending alone is ideal',
      groupDynamics: 'Individual practice in shared space; non-verbal community feeling',
      conversationFocus: 'None during retreat; optional sharing afterward'
    },
    touchProfile: {
      level: 'none',
      type: 'respectful',
      consentCulture: 'No touch expected; mindful personal space',
      boundaries: ['Respect others\' meditation space', 'Minimal eye contact during silence']
    },
    tips: [
      'Research retreat style before committing',
      'Pack comfortable clothing',
      'Inform family/friends about communication blackout',
      'Start with shorter retreats if new',
      'Follow retreat guidelines carefully'
    ],
    commonMyths: [
      'Only for spiritual/religious people (secular retreats available)',
      'You must sit perfectly still (movement and breaks allowed)',
      'It\'s boring or painful (can be deeply restorative)'
    ],
    redFlags: [
      'Cult-like atmosphere',
      'Poor living conditions',
      'Unqualified facilitators',
      'Pressure to participate beyond comfort level'
    ]
  },
  {
    id: 'sound-bath',
    name: 'Sound Bath / Gong Bath',
    category: 'wellness',
    properties: ['receptive', 'immersive', 'sensory', 'passive-participation'],
    alsoKnownAs: ['Sound Healing', 'Sound Meditation', 'Vibrational Therapy'],
    overlapsWith: ['silent-retreat', 'concert-festival'],
    keyDifferences: [
      {
        comparedTo: 'concert-festival',
        differences: [
          'Therapeutic intent vs entertainment',
          'Passive reception vs active participation',
          'Quiet, lying down vs standing/dancing'
        ]
      }
    ],
    idealFor: [
      'People who want social connection without talking',
      'Sensory seekers',
      'Those with stress or anxiety',
      'Individuals interested in alternative therapies',
      'People who enjoy meditation but struggle with silence'
    ],
    pressureProfile: {
      level: 'none',
      source: 'None - completely passive participation; no social expectations',
      mitigationTips: [
        'Arrive early to settle in comfortably',
        'Bring anything needed for comfort (blanket, pillow)',
        'Focus on the sounds and sensations',
        'Let go of expectations'
      ]
    },
    socialStructure: {
      soloFriendliness: 'high',
      whySoloFriendly: 'Individual experience in group setting; no interaction required',
      groupDynamics: 'Parallel individual experiences; collective energy',
      conversationFocus: 'Minimal before/after; sound experiences, relaxation effects'
    },
    touchProfile: {
      level: 'none',
      type: 'therapeutic',
      consentCulture: 'No touch during session; practitioner may use instruments near you',
      boundaries: ['Personal space respected', 'No physical contact from others']
    },
    tips: [
      'Wear comfortable clothing',
      'Use provided mats/blankets or bring your own',
      'Stay hydrated afterward',
      'Allow time to integrate before driving',
      'Try different instruments to find preferences'
    ],
    commonMyths: [
      'Only for "woo-woo" spiritual people (all can benefit from relaxation)',
      'You must have special experiences (simply relaxing is enough)',
      'It\'s just weird noises (scientifically shown to reduce stress)'
    ],
    redFlags: [
      'Practitioner making medical claims',
      'Unsafe volume levels',
      'Pressure to purchase expensive sessions',
      'Poorly ventilated or uncomfortable space'
    ]
  }
];