import type { SocialEventType } from '$lib/types/event';

export const hobbyEvents: SocialEventType[] = [
  {
    id: 'hobby-knitting-circle',
    name: 'Knitting/Craft Circle',
    category: 'hobby',
    properties: ['skill-focused', 'quiet', 'tangible-output', 'repeatable'],
    alsoKnownAs: ['Stitch & Bitch', 'Craft Night', 'Yarn Club'],
    overlapsWith: ['hobby-book-club', 'casual-cafe-hang'],
    keyDifferences: [
      {
        comparedTo: 'hobby-book-club',
        differences: [
          'Hands are occupied (reduces pressure to maintain eye contact)',
          'Can participate silently while others chat',
          'Natural breaks in conversation when focusing on complex stitches'
        ]
      }
    ],
    idealFor: ['Introverts', 'People with social anxiety', 'Craft enthusiasts', 'Those who prefer parallel play'],
    pressureProfile: {
      level: 'low',
      source: 'Minimal - focus is on the craft, not social performance',
      mitigationTips: [
        'Bring an "easy" project you can do without thinking',
        'Sit at the edge of the circle if you need space',
        'It\'s acceptable to only listen, not contribute to conversation'
      ]
    },
    socialStructure: {
      soloFriendliness: 'high',
      whySoloFriendly: 'Everyone is focused on their own project; no one questions why you\'re alone',
      groupDynamics: 'Loosely organized, people come and go, conversation ebbs and flows naturally',
      conversationFocus: 'Projects, techniques, materials, occasionally personal updates'
    },
    touchProfile: {
      level: 'none',
      type: 'structured',
      consentCulture: 'Touch is rare; may include showing fabrics or admiring work',
      boundaries: ['Personal space respected', 'No expectation of physical contact']
    },
    tips: [
      'Arrive 10 minutes early to set up before others arrive',
      'Bring extra supplies to share (breaks the ice)',
      'If overwhelmed, focus intently on counting stitches',
      'It\'s okay to say "I\'m in a quiet mood tonight"'
    ],
    commonMyths: [
      'You need to be an expert knitter (beginners welcome!)',
      'You must socialize the entire time (silence is acceptable)',
      'Only older women attend (diverse age groups common)'
    ],
    redFlags: [
      'Members criticize others\' skill levels',
      'Pressure to buy expensive materials',
      'Cliquish behavior excluding newcomers'
    ]
  }
];