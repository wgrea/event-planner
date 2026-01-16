// src/lib/data/socialEventTypes/categories/bar-events/viewing-party.ts
import type { SocialEventType } from '$lib/types/event';

export const viewingParty: SocialEventType = {
  id: 'viewing-party',
  name: 'Sports Viewing Party',
  category: 'bar-events',
  properties: ['communal', 'passive-social', 'sports-focused', 'loud'],
  alsoKnownAs: ['Watch Party', 'Game Day', 'Championship Sunday'],
  overlapsWith: ['sports-attendance', 'social-bar-hang'],
  keyDifferences: [
    {
      comparedTo: 'sports-attendance',
      differences: [
        'Cheaper than stadium tickets',
        'Better views of the action via TV screens',
        'Easier access to food and varied drinks'
      ]
    }
  ],
  idealFor: [
    'Solo fans who want to feel like part of a team',
    'Passionate sports enthusiasts',
    'People who enjoy communal cheering/groaning'
  ],
  pressureProfile: {
    level: 'low',
    source: 'Minimal - shared focus on the screen removes pressure to talk',
    mitigationTips: [
      'Wear team colors to signal your "tribe"',
      'React naturally to the game; it acts as a conversation bridge',
      'Sit at the bar for easy access to the TV and the bartender'
    ]
  },
  socialStructure: {
    soloFriendliness: 'high',
    whySoloFriendly: 'The game provides a constant focus; you are never "doing nothing"',
    groupDynamics: 'Temporary "tribal" groups based on team loyalty',
    conversationFocus: 'Player stats, referees, game strategy, and "the big play"'
  },
  touchProfile: {
    level: 'low',
    type: 'social',
    consentCulture: 'Spontaneous high-fives or "victory hugs" can occur during big moments',
    boundaries: ['Respect personal space of opposing fans', 'Keep physical celebration within your immediate area']
  },
  tips: [
    'Arrive early for big games to get a seat with a good sightline',
    'Check if the bar is a specific "team bar" before wearing the rival jersey',
    'Keep your reactions respectful if sitting near opposing fans'
  ],
  commonMyths: [
    'You need to know every stat (you can just enjoy the energy)',
    'It\'s only for "bros" (sports bars have become increasingly diverse)'
  ],
  redFlags: [
    'Overly aggressive fans starting verbal or physical fights',
    'TVs without sound for major games',
    'Bar staff that doesn\'t manage "seat saving" fairly'
  ],
  // ADD THE MISSING DETAILED FIELDS:
  touchDetails: {
    howPeopleTouch: [
      'High-fives during scoring plays',
      'Shoulder pats for great plays',
      'Occasional celebratory hugs with strangers (big moments only)',
      'Handshakes when meeting fellow fans'
    ],
    proximityLevel: 3,
    initiation: 'Spontaneous during exciting game moments; read cues carefully'
  },
  soloTips: {
    howToGoSolo: [
      'Wear team gear to signal your allegiance',
      'Sit at the bar for easiest social interaction',
      'Order food to claim your spot longer',
      'React to game naturally - others will join in'
    ],
    bestPosition: 'Bar seating with good TV view',
    escapePlan: 'Natural breaks (halftime, quarter breaks)',
    icebreaker: 'What do you think of [player name]\'s performance?',
    forLocals: 'Ask about local fan traditions',
    forTravelers: 'Ask about the local team\'s history'
  },
  logistics: {
    ticketSources: ['At the door', 'No ticket usually required'],
    parking: {
      type: 'mixed',
      details: 'Sports bars often in commercial areas with shared parking'
    },
    transit: 'Check for shuttle services for major games',
    alcohol: {
      likelihood: 'high',
      priceLevel: 3,
      byoAllowed: false
    }
  },
  seasonalPricing: {
    cheaperMonths: ['Off-season months (depends on sport)'],
    expensiveMonths: ['Playoff seasons', 'Championship weekends'],
    priceNotes: 'Drink specials often during games, cover charges for major events'
  },
  nicheWorld: {
    unwrittenRules: [
      'Don\'t block TV views',
      'Cheer for your team, don\'t heckle opponents excessively',
      'Know when to talk (commercials) vs watch (game action)',
      'Tip well during busy games'
    ],
    socialCurrency: ['Team knowledge', 'Regular attendance', 'Good sportsmanship', 'Knowing team history'],
    entryBarriers: ['Finding your team\'s bar', 'Learning sport-specific traditions'],
    tabooTopics: ['Insulting local heroes', 'Excessive complaining about refs', 'Bringing up past losses'],
    initiationRituals: ['First time wearing full gear to bar', 'First high-five with stranger', 'First playoff watch party']
  }
};