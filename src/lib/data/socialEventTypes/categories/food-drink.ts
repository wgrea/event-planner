import type { SocialEventType } from '$lib/types/event';

export const foodDrinkEvents: SocialEventType[] = [
  {
    id: 'wine-tasting',
    name: 'Wine Tasting / Brewery Tour',
    category: 'food-drink',
    properties: ['taste-focused', 'educational', 'sensory', 'structured-tasting'],
    alsoKnownAs: ['Wine Class', 'Vineyard Tour', 'Brewery Visit', 'Distillery Tour'],
    overlapsWith: ['cooking-class', 'educational-events'],
    keyDifferences: [
      {
        comparedTo: 'cooking-class',
        differences: [
          'More passive participation (tasting vs creating)',
          'Often includes alcohol which can affect social dynamics',
          'Typically shorter duration'
        ]
      }
    ],
    idealFor: [
      'Food and drink enthusiasts',
      'People who prefer structured tasting over free mingling',
      'Those wanting to learn in a social setting',
      'Couples or friends looking for date activities'
    ],
    pressureProfile: {
      level: 'low',
      source: 'Low - structured format with guided tasting; focus is on the products',
      mitigationTips: [
        'Take notes if provided (gives you something to do)',
        'Ask questions about the tasting process',
        'Pace yourself with alcohol consumption',
        'Focus on the sensory experience'
      ]
    },
    socialStructure: {
      soloFriendliness: 'moderate',
      whySoloFriendly: 'Can attend alone but often couples/groups; structured format helps',
      groupDynamics: 'Guided tasting with group discussion; mingling possible afterward',
      conversationFocus: 'Flavor profiles, production methods, pairing suggestions, regional differences'
    },
    touchProfile: {
      level: 'none',
      type: 'professional',
      consentCulture: 'Professional setting; minimal physical contact',
      boundaries: ['Respect personal space at tasting bars', 'No sharing glasses without permission']
    },
    tips: [
      'Eat beforehand (never taste on empty stomach)',
      'Ask about designated driver options if driving',
      'Purchase bottles of favorites (supports venue)',
      'Take advantage of spit buckets if available',
      'Ask staff for recommendations'
    ],
    commonMyths: [
      'You need to be a connoisseur (beginners welcome and often targeted)',
      'It\'s expensive (many affordable options exist)',
      'Only for older people (all ages enjoy tasting events)'
    ],
    redFlags: [
      'Pressure to buy expensive bottles',
      'Over-serving alcohol',
      'Poor hygiene practices',
      'Rushed, impersonal service'
    ]
  },
  {
    id: 'cooking-class',
    name: 'Cooking Class',
    category: 'food-drink',
    properties: ['hands-on', 'skill-learning', 'tangible-output', 'shared-meal'],
    alsoKnownAs: ['Culinary Workshop', 'Cooking Workshop', 'Kitchen Class'],
    overlapsWith: ['fixed-partner-lessons', 'hobby-knitting-circle'],
    keyDifferences: [
      {
        comparedTo: 'fixed-partner-lessons',
        differences: [
          'Often individual work stations',
          'Focus on edible results',
          'Usually includes eating the results'
        ]
      }
    ],
    idealFor: [
      'Food enthusiasts',
      'People who like learning practical skills',
      'Those who enjoy hands-on activities',
      'Individuals wanting to expand culinary knowledge'
    ],
    pressureProfile: {
      level: 'low',
      source: 'Low - focus is on cooking techniques; instructor provides structure',
      mitigationTips: [
        'Arrive early to get comfortable with workspace',
        'Ask questions if unsure about techniques',
        'Focus on learning, not perfection',
        'Enjoy the process, not just the result'
      ]
    },
    socialStructure: {
      soloFriendliness: 'high',
      whySoloFriendly: 'Common to attend alone; individual work stations reduce social pressure',
      groupDynamics: 'Individual work with group instruction; shared meal at end',
      conversationFocus: 'Cooking techniques, recipe variations, ingredient sourcing, food experiences'
    },
    touchProfile: {
      level: 'none',
      type: 'task-focused',
      consentCulture: 'Minimal touch; focus on food preparation',
      boundaries: ['Respect others\' workspace', 'Share equipment appropriately']
    },
    tips: [
      'Wear comfortable, appropriate clothing',
      'Bring containers for leftovers',
      'Take notes if allowed',
      'Ask about dietary restrictions when booking',
      'Tip the instructor if service was excellent'
    ],
    commonMyths: [
      'You need cooking experience (beginner classes widely available)',
      'It\'s too expensive (many affordable community classes)',
      'Only for fancy cuisine (classes cover all types of food)'
    ],
    redFlags: [
      'Unclean or unsafe kitchen conditions',
      'Poor instructor-to-student ratio',
      'Rushed pace without individual attention',
      'Low-quality ingredients'
    ]
  }
];