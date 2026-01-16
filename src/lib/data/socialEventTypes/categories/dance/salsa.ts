// src/lib/data/socialEventTypes/categories/dance/salsa.ts
import type { SocialEventType } from '$lib/types/event';

export const salsaSocial: SocialEventType = {
  id: 'dance-salsa-social',
  name: 'Salsa Social Dance',
  category: 'dance',
  properties: ['partnered', 'structured', 'music-focused', 'rotation-based'],
  alsoKnownAs: ['Latin Dance Social', 'Salsa Night', 'Bailongo'],
  overlapsWith: ['dance-bachata', 'dance-swing', 'dance-tango'],
  keyDifferences: [
    {
      comparedTo: 'dance-bachata',
      differences: [
        'Salsa has more complex footwork, Bachata is more sensual',
        'Salsa typically involves more spinning',
        'Bachata has closer partner hold in some styles'
      ]
    }
  ],
  idealFor: [
    'People who want safe, structured touch',
    'Those who enjoy learning physical skills',
    'Music lovers',
    'People who want social interaction without dating pressure'
  ],
  pressureProfile: {
    level: 'low',
    source: 'Minimal - focus is on steps, not conversation or dating',
    mitigationTips: [
      'Take a beginner lesson beforehand',
      'Rotate partners frequently (built into culture)',
      'Remember: everyone was a beginner once'
    ]
  },
  socialStructure: {
    soloFriendliness: 'high',
    whySoloFriendly: 'Partner rotation is expected; everyone dances with everyone',
    groupDynamics: 'Hierarchical by skill level but inclusive; experienced dancers help beginners',
    conversationFocus: 'Dance technique, music, events, travel (minimal personal talk)'
  },
  touchProfile: {
    level: 'moderate',
    type: 'structured',
    consentCulture: 'Clear hand positions established; "no thank you" is respected',
    boundaries: ['Frame hold (not embrace)', 'Hands stay on back/shoulders', 'Eye contact optional']
  },
  tips: [
    'Wear shoes that pivot easily',
    'Bring a small towel (you will sweat)',
    'It\'s okay to sit out dances to rest',
    'Say "I\'m just learning" to set expectations'
  ],
  commonMyths: [
    'You need a partner to attend (false - most come alone)',
    'It\'s a dating scene (false - it\'s a dance scene)',
    'You need to be young/fit/coordinated (all ages welcome)'
  ],
  redFlags: [
    'Partners who won\'t let you rotate away',
    'Overly critical "teachers" on social floor',
    'Creepers who only dance with attractive people'
  ],
  touchDetails: {
    howPeopleTouch: [
      'Hand-hold in open position',
      'Leader\'s right hand on follower\'s back',
      'Follower\'s left hand on leader\'s shoulder',
      'Gentle pressure for leading'
    ],
    proximityLevel: 3,
    initiation: 'Leader offers hand, follower accepts'
  },
  soloTips: {
    howToGoSolo: [
      'Take the beginner lesson first',
      'Stand near instructor during social dancing',
      'Smile and nod when asked to dance',
      'Say "I\'m just learning" to set expectations'
    ],
    bestPosition: 'Near the lesson area',
    escapePlan: 'Bathroom break or "need water"'
  },
  logistics: {
    ticketSources: ['Eventbrite', 'At the door'],
    parking: {
      type: 'mixed',
      details: 'Street parking free after 6pm'
    },
    transit: 'Near subway station',
    alcohol: {
      likelihood: 'low',
      priceLevel: 3,
      byoAllowed: false
    }
  }
};