// src/lib/data/socialEventTypes/categories/dance/kizomba.ts
import type { SocialEventType } from '$lib/types/event';

export const kizomba: SocialEventType = {
  id: 'kizomba',
  name: 'Kizomba',
  category: 'dance',
  properties: ['smooth', 'connected', 'slow-paced', 'intimate', 'sensual'],
  alsoKnownAs: ['African Tango', 'Slow Semba', 'Connection Dance'],
  overlapsWith: ['dance-bachata', 'dance-tango', 'dance-zouk'],
  keyDifferences: [
    {
      comparedTo: 'dance-bachata',
      differences: [
        'Even closer body connection',
        'Different hip movement (smoother)',
        'Different music origin (Angolan vs Dominican)',
        'More continuous flow'
      ]
    }
  ],
  idealFor: [
    'People who enjoy deep physical connection',
    'Those who prefer slow, meditative dancing',
    'Individuals comfortable with intimacy',
    'Music lovers of African/Lusophone sounds'
  ],
  pressureProfile: {
    level: 'medium',
    source: 'Very close physical proximity can feel intense',
    mitigationTips: [
      'Take beginner workshops seriously',
      'Find partners at similar experience level',
      'Focus on connection rather than steps'
    ]
  },
  socialStructure: {
    soloFriendliness: 'moderate',
    whySoloFriendly: 'Smaller communities can be intimidating but usually welcoming',
    groupDynamics: 'Intimate, close-knit communities',
    conversationFocus: 'Connection quality, music interpretation, travel to festivals'
  },
  touchProfile: {
    level: 'high',
    type: 'structured',
    consentCulture: 'Extreme closeness requires clear communication; respect is paramount',
    boundaries: ['Chest connection expected', 'Clear communication about comfort level']
  },
  tips: [
    'Wear layers (close contact means warmth)',
    'Practice connection exercises',
    'Be patient with learning curve',
    'Respect different cultural interpretations'
  ],
  commonMyths: [
    'It\'s just slow dancing (complex connection technique)',
    'Only for romantic partners (mostly social)',
    'Easy because it\'s slow (connection is challenging)'
  ],
  redFlags: [
    'Partners who pull too close too fast',
    'Lack of respect for personal boundaries',
    'Elitist attitude about "pure" style'
  ],
  touchDetails: {
    howPeopleTouch: [
      'Chest-to-chest connection',
      'Smooth weight transfers through body contact',
      'Gentle hand/arm guidance',
      'Head contact in some styles',
      'Continuous subtle body communication'
    ],
    proximityLevel: 4,
    initiation: 'Very close embrace from start with mutual consent'
  },
  soloTips: {
    howToGoSolo: [
      'Attend multiple beginner lessons first',
      'Find a practice partner at similar level',
      'Start with socials at larger events',
      'Be clear about your experience level'
    ],
    bestPosition: 'Near instructors or experienced dancers',
    escapePlan: 'Needed frequently due to intensity; "breather" excuse works'
  },
  logistics: {
    ticketSources: ['Kizomba festival websites', 'Specialized dance event pages'],
    parking: {
      type: 'mixed',
      details: 'Often in urban areas with parking challenges'
    },
    transit: 'Public transport recommended',
    alcohol: {
      likelihood: 'low',
      priceLevel: 3,
      byoAllowed: false
    }
  },
  nicheWorld: {
    unwrittenRules: [
      'Connection is everything',
      'No talking during dance',
      'Thank partner with hug/handshake',
      'Different styles have different norms'
    ],
    socialCurrency: ['Connection quality', 'Musicality', 'Smoothness', 'Festival attendance'],
    entryBarriers: ['Finding local scene', 'Initial intimacy discomfort', 'Learning connection'],
    tabooTopics: ['Comparing different style "purity"'],
    initiationRituals: ['First fluid dance', 'First festival experience']
  }
};