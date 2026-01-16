// src/lib/data/socialEventTypes/categories/dance/bachata.ts
import type { SocialEventType } from '$lib/types/event';

export const bachata: SocialEventType = {
  id: 'bachata',
  name: 'Bachata (Sensual/Traditional)',
  category: 'dance',
  properties: ['sensual', 'close-embrace', 'hip-movement', 'romantic', 'intimate'],
  alsoKnownAs: ['Dominican Dance', 'Latin Romantic Dance', 'Sensual Bachata'],
  overlapsWith: ['dance-salsa', 'dance-kizomba', 'dance-zouk'],
  keyDifferences: [
    {
      comparedTo: 'dance-salsa',
      differences: [
        'Much closer partner connection',
        'More body isolation and hip movement',
        'Slower, more romantic music',
        'Different basic step timing'
      ]
    }
  ],
  idealFor: [
    'People comfortable with close physical connection',
    'Romantic music lovers',
    'Those who enjoy fluid, sensual movement',
    'Individuals seeking deeper partner connection'
  ],
  pressureProfile: {
    level: 'medium',
    source: 'Intimacy of close hold can feel vulnerable',
    mitigationTips: [
      'Start with traditional style before sensual',
      'Communicate comfort level with partners',
      'Focus on connection rather than performance'
    ]
  },
  socialStructure: {
    soloFriendliness: 'moderate',
    whySoloFriendly: 'Partner rotation expected, but intimacy level may intimidate some',
    groupDynamics: 'Close-knit communities, often with regulars',
    conversationFocus: 'Music interpretation, body connection, travel to Latin countries'
  },
  touchProfile: {
    level: 'high',
    type: 'structured',
    consentCulture: 'Close embrace requires mutual comfort; verbal check-ins common',
    boundaries: ['Traditional vs sensual hold discussed', 'Respect for personal comfort zone']
  },
  tips: [
    'Wear clothes that allow hip movement',
    'Bring towel (close contact means shared sweat)',
    'Respect different comfort levels with intimacy',
    'Learn basic steps before social dancing'
  ],
  commonMyths: [
    'It\'s inherently sexual (it\'s romantic/expressive)',
    'Only for couples (most attend solo)',
    'You need perfect body type (all body types dance bachata)'
  ],
  redFlags: [
    'Partners who ignore comfort cues',
    'Overly intimate holds without consent',
    'Cliquey behavior excluding newcomers'
  ],
  touchDetails: {
    howPeopleTouch: [
      'Close body contact in sensual style',
      'Hand on lower back in traditional',
      'Head-to-head connection in close hold',
      'Chest-to-chest connection',
      'Hip guidance through gentle pressure'
    ],
    proximityLevel: 4,
    initiation: 'Leader initiates close hold with eye contact/verbal check'
  },
  soloTips: {
    howToGoSolo: [
      'Take several lessons before first social',
      'Start with traditional style partners',
      'Watch first to understand community norms',
      'State your experience level when asked to dance'
    ],
    bestPosition: 'Observation area first, then near experienced dancers',
    escapePlan: 'Bathroom break or "need water"',
    forTravelers: 'Many international bachata festivals exist'
  },
  logistics: {
    ticketSources: ['Latin dance studio websites', 'Bachata-specific event pages'],
    parking: {
      type: 'mixed',
      details: 'Often in dance studios with limited parking'
    },
    alcohol: {
      likelihood: 'medium',
      priceLevel: 3,
      byoAllowed: false
    }
  },
  seasonalPricing: {
    cheaperMonths: ['Jan', 'Feb', 'Sep'],
    expensiveMonths: ['May', 'Jun', 'Jul'],
    priceNotes: 'Sensual bachata festivals can be expensive'
  }
};