import type { SocialEventType } from '$lib/types/event';

export const entertainmentEvents: SocialEventType[] = [
  {
    id: 'escape-room',
    name: 'Escape Room',
    category: 'entertainment',
    properties: ['puzzle-focused', 'time-limited', 'team-dependent', 'immersive'],
    alsoKnownAs: ['Escape Game', 'Puzzle Room', 'Adventure Room'],
    overlapsWith: ['gaming-board-night', 'trivia-night'],
    keyDifferences: [
      {
        comparedTo: 'gaming-board-night',
        differences: [
          'Physical movement around room required',
          'Time pressure element',
          'More immersive environment'
        ]
      }
    ],
    idealFor: [
      'Puzzle enthusiasts',
      'People who enjoy immersive experiences',
      'Those who like collaborative problem-solving',
      'Groups looking for shared challenge'
    ],
    pressureProfile: {
      level: 'low',
      source: 'Low - focus is on puzzles, not social interaction',
      mitigationTips: [
        'Focus on the puzzles, not social dynamics',
        'Communicate clearly about puzzle ideas',
        'Remember it\'s just a game'
      ]
    },
    socialStructure: {
      soloFriendliness: 'low',
      whySoloFriendly: 'Designed for groups; attending alone means being placed with strangers',
      groupDynamics: 'Team problem-solving under time pressure; requires coordination',
      conversationFocus: 'Puzzle clues, time management, strategy, discoveries'
    },
    touchProfile: {
      level: 'none',
      type: 'task-related',
      consentCulture: 'Minimal touch; occasional hand-offs of objects',
      boundaries: ['Task-focused contact only', 'Respect personal working space']
    },
    tips: [
      'Communicate clearly with your team',
      'Divide and conquer different puzzle areas',
      'Don\'t be afraid to ask for hints',
      'Focus on fun rather than "winning"'
    ],
    commonMyths: [
      'You need to be super smart (teamwork solves most puzzles)',
      'It\'s scary or intense (many are family-friendly)',
      'Only for large groups (many work well with 2-4 people)'
    ],
    redFlags: [
      'Poorly maintained puzzles',
      'Unsafe physical environments',
      'Overly competitive team members'
    ]
  },
  {
    id: 'trivia-night',
    name: 'Trivia Night (Team-Based)',
    category: 'entertainment',
    properties: ['team-based', 'knowledge-focused', 'pub-setting', 'competitive'],
    alsoKnownAs: ['Quiz Night', 'Pub Quiz', 'Team Trivia'],
    overlapsWith: ['gaming-board-night', 'casual-pub-hang'],
    keyDifferences: [
      {
        comparedTo: 'gaming-board-night',
        differences: [
          'Requires forming or joining a team on the spot',
          'Held in public venues (pubs, bars, restaurants)',
          'More public/visible than private board game settings'
        ]
      }
    ],
    idealFor: [
      'Knowledge enthusiasts',
      'People who enjoy friendly competition',
      'Those comfortable with team dynamics',
      'Pub/bar atmosphere enjoyers'
    ],
    pressureProfile: {
      level: 'medium',
      source: 'Medium - requires team formation and public participation',
      mitigationTips: [
        'Call ahead to ask about "free agent" teams',
        'Arrive early to find a team needing players',
        'Focus on the questions, not social performance',
        'Remember most people are there for fun, not to judge'
      ]
    },
    socialStructure: {
      soloFriendliness: 'low',
      whySoloFriendly: 'Requires team formation; attending alone means joining strangers or forming a new team',
      groupDynamics: 'Team-focused with individual contribution; trivia host provides structure',
      conversationFocus: 'Trivia answers, strategy, team coordination, light banter between rounds'
    },
    touchProfile: {
      level: 'none',
      type: 'task-related',
      consentCulture: 'Minimal touch; occasional high-fives for correct answers',
      boundaries: ['Table-focused interaction', 'Respect personal space at table']
    },
    tips: [
      'Look for venues that explicitly welcome solo players',
      'Bring a pen and paper for notes',
      'Offer to keep score (gives you a defined role)',
      'Focus on categories you know well to contribute confidently',
      'It\'s okay to say "I don\'t know" for some questions'
    ],
    commonMyths: [
      'You need to be a trivia expert (teams need diverse knowledge)',
      'Only serious competitors attend (many go for casual fun)',
      'Teams are closed to newcomers (most welcome extra players)'
    ],
    redFlags: [
      'Overly competitive/aggressive teams',
      'Teams that exclude quieter members',
      'Poorly organized trivia with ambiguous questions'
    ]
  },
  {
    id: 'amusement-park',
    name: 'Amusement Park / Theme Park',
    category: 'entertainment',
    properties: ['crowded', 'thrill-focused', 'family-oriented', 'all-day'],
    alsoKnownAs: ['Theme Park', 'Adventure Park', 'Fun Park'],
    overlapsWith: ['concert-festival', 'outdoor-hiking-group'],
    keyDifferences: [
      {
        comparedTo: 'concert-festival',
        differences: [
          'More varied activities (rides, shows, games)',
          'Family-focused rather than music-focused',
          'Daytime activity with less party atmosphere'
        ]
      }
    ],
    idealFor: [
      'Thrill-seekers',
      'People who enjoy people-watching',
      'Those comfortable in crowded environments',
      'Theme/atmosphere enthusiasts'
    ],
    pressureProfile: {
      level: 'medium',
      source: 'Medium - crowded, expensive, often group-focused; solo can feel conspicuous',
      mitigationTips: [
        'Research single-rider lines (common at major parks)',
        'Bring headphones for waiting in lines',
        'Focus on rides/attractions rather than social aspect',
        'Remember: most people are focused on their own group'
      ]
    },
    socialStructure: {
      soloFriendliness: 'low',
      whySoloFriendly: 'Strongly associated with groups/families; solo can feel awkward in queues and on rides',
      groupDynamics: 'Group-focused with individual enjoyment; natural interactions in queues',
      conversationFocus: 'Ride experiences, park tips, shared excitement, brief queue conversations'
    },
    touchProfile: {
      level: 'low',
      type: 'incidental',
      consentCulture: 'Crowd contact common; ride safety restraints are mandatory',
      boundaries: ['Respect personal space in queues', 'Ride-required contact only']
    },
    tips: [
      'Utilize single-rider lines (much shorter wait times)',
      'Download park app for maps and wait times',
      'Bring essentials (sunscreen, water, comfortable shoes)',
      'Schedule breaks in less crowded areas',
      'Consider visiting on weekdays for smaller crowds'
    ],
    commonMyths: [
      'Solo visitors can\'t enjoy parks (many enthusiasts go alone for efficiency)',
      'Only for children/families (all ages enjoy theme parks)',
      'You need to ride everything (pick your favorites and enjoy at your pace)'
    ],
    redFlags: [
      'Extremely crowded unsafe conditions',
      'Poorly maintained rides',
      'Aggressive crowd behavior'
    ]
  }
];