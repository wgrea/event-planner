import type { SocialEventType } from '$lib/types/event';

export const gamingEvents: SocialEventType[] = [
{
  id: 'gaming-board-night',
  name: 'Board Game Night',
  category: 'gaming',
  properties: ['rule-based', 'structured-interaction', 'mental-engagement', 'table-focused'],
  alsoKnownAs: ['Tabletop Gaming', 'Game Night', 'Board Game Cafe'],
  overlapsWith: ['hobby-knitting-circle', 'casual-trivia'],
  keyDifferences: [
    {
      comparedTo: 'hobby-knitting-circle',
      differences: [
        'More direct interaction through game mechanics',
        'Clear rules structure interaction',
        'Competitive or cooperative gameplay focus'
      ]
    }
  ],
  idealFor: [
    'People who prefer structured social interaction',
    'Strategy and puzzle enthusiasts',
    'Those who want conversation topics provided by the game'
  ],
  pressureProfile: {
    level: 'low',
    source: 'Minimal - rules provide structure, focus is on the game',
    mitigationTips: [
      'Choose cooperative games over competitive ones',
      'Let others teach the rules',
      'Focus on understanding the game mechanics'
    ]
  },
  socialStructure: {
    soloFriendliness: 'high',
    whySoloFriendly: 'Game groups often need extra players; showing up alone is common',
    groupDynamics: 'Focused on game play with natural conversation breaks',
    conversationFocus: 'Game strategy, rules, light banter'
  },
  touchProfile: {
    level: 'none',
    type: 'structured',
    consentCulture: 'Minimal touch; occasional high-fives for good moves',
    boundaries: ['Personal space at table', 'No physical contact during gameplay']
  },
  tips: [
    'Arrive early to learn rules',
    'Bring snacks to share',
    'Don\'t worry about winning - focus on learning',
    'Ask about game complexity level before joining'
  ],
  commonMyths: [
    'You need to be a "gamer" (beginners welcome at most events)',
    'Only complex strategy games (many light, social games available)',
    'Competitive atmosphere (many groups are casual and friendly)'
  ],
  redFlags: [
    'Players who take games too seriously',
    'Poor sportsmanship',
    'Exclusionary behavior toward newcomers'
  ]
 },
];