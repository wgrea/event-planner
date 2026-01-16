// src/lib/data/socialEventTypes/categories/bar-events/pub-trivia.ts
import type { SocialEventType } from '$lib/types/event';

export const pubTrivia: SocialEventType = {
  id: 'pub-trivia',
  name: 'Pub Trivia',
  category: 'bar-events',
  properties: ['intellectual', 'team-based', 'structured', 'low-movement'],
  alsoKnownAs: ['Quiz Night', 'Bar Trivia', 'Trivia Tuesday'],
  overlapsWith: ['board-game-night', 'educational-workshop'],
  keyDifferences: [
    {
      comparedTo: 'board-game-night',
      differences: [
        'Focus is on general knowledge rather than game mechanics',
        'Larger group synchronization (entire bar plays at once)',
        'Usually hosted by a professional MC'
      ]
    }
  ],
  idealFor: [
    'Fact-lovers and nerds',
    'Solo people wanting to join a team',
    'Small groups of friends',
    'People who prefer structured social interaction'
  ],
  pressureProfile: {
    level: 'medium',
    source: 'Performance-based - pressure to contribute correct answers to a team',
    mitigationTips: [
      'Tell the team your "specialty" early (e.g., "I know 80s movies")',
      'Offer to be the "scribe" (writer) if you are nervous about shouting answers',
      'Focus on the fun rather than the prizes'
    ]
  },
  socialStructure: {
    soloFriendliness: 'high',
    whySoloFriendly: 'Hosts often facilitate "merging" solo players into existing teams',
    groupDynamics: 'Small competitive units interacting with a central host',
    conversationFocus: 'Deducing answers, debating facts, and celebrating wins'
  },
  touchProfile: {
    level: 'none',
    type: 'social',
    consentCulture: 'Minimal physical contact; mostly table-based interaction',
    boundaries: ['Do not look at other teams\' phones or papers', 'Respect the host\'s final ruling']
  },
  tips: [
    'Arrive 30 minutes early to find a team or a spot at the bar',
    'Support the venue by ordering food or drinks',
    'Stay until the end; the final round is often the most social'
  ],
  commonMyths: [
    'You have to be a genius to play (it\'s mostly about common knowledge)',
    'Solo players aren\'t welcome (many teams love a "free agent" expert)'
  ],
  redFlags: [
    'Teams clearly using phones to cheat',
    'An audio system so bad you can\'t hear the questions',
    'Host that is insulting or unwelcoming to newcomers'
  ],
  // Add the missing detailed fields
  touchDetails: {
    howPeopleTouch: [],
    proximityLevel: 2,
    initiation: 'N/A - primarily seated team activity',
    whyNoTouch: 'Focused intellectual activity with minimal physical interaction'
  },
  soloTips: {
    howToGoSolo: [
      'Ask host if there are teams looking for extra players',
      'Sit at the bar and mention you\'re looking for a team',
      'Bring a notebook to look prepared'
    ],
    bestPosition: 'Near the host or scoreboard',
    escapePlan: 'Bathroom break between rounds'
  },
  logistics: {
    ticketSources: ['Eventbrite', 'At the door', 'Venue website'],
    parking: {
      type: 'mixed',
      details: 'Bar parking typically mixed free/paid'
    },
    alcohol: {
      likelihood: 'medium',
      priceLevel: 3,
      byoAllowed: false
    }
  },
  seasonalPricing: {
    cheaperMonths: ['Jan', 'Feb', 'Sep'],
    expensiveMonths: ['Jun', 'Jul', 'Dec'],
    priceNotes: 'Weekday trivia often free or low cover charge'
  },
  nicheWorld: {
    unwrittenRules: [
      'No cheating with phones',
      'Respect the host\'s rulings',
      'Don\'t shout answers during other teams\' turns',
      'Tip your server well during the event'
    ],
    socialCurrency: ['Obscure knowledge', 'Quick recall', 'Team leadership', 'Good sportsmanship'],
    entryBarriers: ['Finding regular trivia nights', 'Initial social anxiety'],
    tabooTopics: ['Arguing excessively with host', 'Making others feel stupid']
  }
};