// src/lib/data/socialEventTypes/categories/dance/swing.ts
import type { SocialEventType } from '$lib/types/event';

export const swingDance: SocialEventType = {
  id: 'swing-dance',
  name: 'Swing Dance (Lindy Hop/Charleston)',
  category: 'dance',
  properties: ['partnered', 'high-energy', 'historical', 'acrobatic', 'joyful'],
  alsoKnownAs: ['Lindy Hop', 'Charleston Night', 'Swing Social', 'Jitterbug'],
  overlapsWith: ['dance-salsa', 'dance-tango', 'dance-balboa'],
  keyDifferences: [
    {
      comparedTo: 'dance-salsa',
      differences: [
        'Swing uses bounce/pulse rhythm vs salsa\'s Cuban motion',
        'More aerials and playful moves',
        'Different music era (1920s-40s vs modern Latin)'
      ]
    }
  ],
  idealFor: [
    'People who love vintage/historical culture',
    'High-energy individuals',
    'Those who enjoy playful, improvised dance',
    'Fans of jazz music'
  ],
  pressureProfile: {
    level: 'low',
    source: 'Minimal - focus on having fun and improvisation',
    mitigationTips: [
      'Start with beginner East Coast Swing (simpler than Lindy)',
      'Focus on rhythm rather than fancy moves',
      'Remember swing is about joy, not perfection'
    ]
  },
  socialStructure: {
    soloFriendliness: 'high',
    whySoloFriendly: 'Extensive partner rotation; welcoming to newcomers',
    groupDynamics: 'Very social with frequent breaks between dances',
    conversationFocus: 'Vintage fashion, jazz history, upcoming events, travel stories'
  },
  touchProfile: {
    level: 'moderate',
    type: 'structured',
    consentCulture: 'Clear frame positions; enthusiastic consent for aerials',
    boundaries: ['Traditional closed position optional', 'Aerials only with trusted partners']
  },
  tips: [
    'Wear comfortable clothing that allows movement',
    'Practice basic steps before attending social',
    'Bring extra shirt (gets very sweaty)',
    'Don\'t be afraid to laugh at mistakes'
  ],
  commonMyths: [
    'You need to know complex aerials (most social dancing is basic steps)',
    'Only for older generations (young swing revival is huge)',
    'Requires special shoes (any comfortable shoes work)'
  ],
  redFlags: [
    'Partners who criticize instead of encourage',
    'Unsolicited teaching on social floor',
    'Exclusionary cliques'
  ],
  touchDetails: {
    howPeopleTouch: [
      'Closed position with hand on back',
      'Open position with connected hands',
      'Aerials require full body coordination',
      'High-fives between songs',
      'Gentle hand-on-back for leading'
    ],
    proximityLevel: 3,
    initiation: 'Leader offers hand, follower responds'
  },
  soloTips: {
    howToGoSolo: [
      'Attend beginner lesson beforehand',
      'Sit near the DJ/band for conversation starters',
      'Ask "Is this your first time?" to fellow newbies',
      'Compliment people\'s vintage outfits'
    ],
    bestPosition: 'Near the lesson area or refreshments',
    escapePlan: 'Water break or "need to fix my shoes"',
    icebreaker: 'What got you into swing dance?'
  },
  logistics: {
    ticketSources: ['Local swing dance society websites', 'Eventbrite', 'Facebook events'],
    parking: {
      type: 'mixed',
      details: 'Community centers often have free parking'
    },
    transit: 'Often in accessible community venues',
    alcohol: {
      likelihood: 'low',
      priceLevel: 2,
      byoAllowed: false
    }
  },
  seasonalPricing: {
    cheaperMonths: ['Sep', 'Jan', 'Feb'],
    expensiveMonths: ['Jun', 'Dec'],
    priceNotes: 'Special workshop weekends more expensive'
  },
  nicheWorld: {
    unwrittenRules: [
      'Don\'t dip someone without asking first',
      'Rotate partners frequently',
      'Thank your partner after each dance',
      'No teaching on social floor unless asked'
    ],
    socialCurrency: ['Vintage style', 'Musicality', 'Positive energy', 'Historical knowledge'],
    entryBarriers: ['Finding local scene', 'Initial coordination learning curve'],
    tabooTopics: ['Modern pop music at vintage events'],
    initiationRituals: ['First successful Charleston', 'First exchange with experienced dancer']
  }
};