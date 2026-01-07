import type { SocialEventType } from '$lib/types/event';

export const creativeEvents: SocialEventType[] = [
  {
    id: 'life-drawing-session',
    name: 'Life Drawing / Figure Drawing',
    category: 'creative',
    properties: ['silent', 'focused', 'artistic', 'observational'],
    alsoKnownAs: ['Figure Drawing', 'Life Sketching', 'Art Studio Session'],
    overlapsWith: ['hobby-knitting-circle', 'book-club'],
    keyDifferences: [
      {
        comparedTo: 'hobby-knitting-circle',
        differences: [
          'Almost completely silent environment',
          'Focus on observation rather than conversation',
          'More formal structure with timed poses'
        ]
      }
    ],
    idealFor: [
      'Artists of all levels',
      'People who prefer silent companionship',
      'Observational learners',
      'Those who want social presence without social pressure'
    ],
    pressureProfile: {
      level: 'very low',
      source: 'Minimal - silence is expected; focus is entirely on drawing',
      mitigationTips: [
        'Remember: everyone is looking at the model, not at you',
        'Focus on your own paper and progress',
        'Arrive early to set up comfortably'
      ]
    },
    socialStructure: {
      soloFriendliness: 'high',
      whySoloFriendly: 'Artists typically attend alone to focus; socializing happens during breaks',
      groupDynamics: 'Parallel creative work with optional conversation during breaks',
      conversationFocus: 'Art techniques, materials, local art shows, creative process (during breaks only)'
    },
    touchProfile: {
      level: 'none',
      type: 'professional',
      consentCulture: 'No touch expected; professional art studio environment',
      boundaries: ['Respect others\' workspace', 'No touching others\' artwork without permission']
    },
    tips: [
      'Bring your own materials (check if provided)',
      'Start with shorter pose sessions if available',
      'It\'s okay to just sketch, not create masterpieces',
      'Clean your area thoroughly afterward'
    ],
    commonMyths: [
      'You need to be a professional artist (all skill levels welcome)',
      'It\'s intimidating with nude models (many sessions offer clothed options)',
      'Only serious artists attend (many go for relaxation and focus)'
    ],
    redFlags: [
      'Poorly ventilated or unsafe studio space',
      'Disrespectful behavior toward models',
      'Cliquish regulars excluding newcomers'
    ]
  },
  {
    id: 'poetry-reading',
    name: 'Poetry Reading / Open Mic',
    category: 'creative',
    properties: ['performance-focused', 'listener-oriented', 'expressive', 'atmospheric'],
    alsoKnownAs: ['Open Mic Night', 'Spoken Word Event', 'Literary Reading'],
    overlapsWith: ['book-club', 'concert-festival'],
    keyDifferences: [
      {
        comparedTo: 'book-club',
        differences: [
          'Performance-oriented rather than discussion-based',
          'More varied content (original work, classics, experimental)',
          'Atmosphere can range from formal to casual'
        ]
      }
    ],
    idealFor: [
      'Writers and poets',
      'Listeners who enjoy spoken word',
      'People who appreciate vulnerability and expression',
      'Those who want cultural experiences'
    ],
    pressureProfile: {
      level: 'low',
      source: 'Low - you can just listen; performing is optional',
      mitigationTips: [
        'Arrive early to get comfortable with the space',
        'Bring a notebook if you want to write',
        'Remember applause is supportive, not evaluative'
      ]
    },
    socialStructure: {
      soloFriendliness: 'high',
      whySoloFriendly: 'Common to attend alone; focus is on the performances',
      groupDynamics: 'Audience listening with optional mingling before/after',
      conversationFocus: 'Poetry, writing process, favorite poets, event atmosphere'
    },
    touchProfile: {
      level: 'none',
      type: 'cultural',
      consentCulture: 'Minimal touch; occasional handshakes or light hugs among regulars',
      boundaries: ['Respect personal space in audience', 'Appropriate applause only']
    },
    tips: [
      'Check if it\'s open mic or featured readers only',
      'Bring cash for donations if it\'s a free event',
      'Consider performing if you feel comfortable (often supportive crowds)',
      'Stay for the whole event if possible (respect for all performers)'
    ],
    commonMyths: [
      'Only serious poets attend (all lovers of words welcome)',
      'You need to perform (listening is equally valued)',
      'It\'s all depressing or pretentious (wide variety of styles and moods)'
    ],
    redFlags: [
      'Host favoring certain cliques or styles',
      'Disrespectful audience behavior',
      'Poor sound quality making performances hard to hear'
    ]
  }
];