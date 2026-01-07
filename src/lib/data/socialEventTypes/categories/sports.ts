import type { SocialEventType } from '$lib/types/event';

export const sportsEvents: SocialEventType[] = [
  {
    id: 'coed-sports-league',
    name: 'Co-ed Social Sports League',
    category: 'sports',
    properties: ['team-based', 'physical-activity', 'structured-play', 'social-after'],
    alsoKnownAs: ['Recreational Sports', 'Social League', 'Pickup Sports'],
    overlapsWith: ['volunteer-community', 'gaming-board-night'],
    keyDifferences: [
        {
        comparedTo: 'volunteer-community',
        differences: [
            'More physical exertion required',
            'Competitive element present',
            'Post-game socializing is more common'
        ]
        },
        {
        comparedTo: 'gaming-board-night',
        differences: [
            'Physical activity vs mental activity',
            'Team coordination required',
            'More energetic environment'
        ]
        }
    ],
    idealFor: [
        'People who enjoy physical activity',
        'Those who prefer team environments',
        'Individuals who like structured social interaction',
        'People wanting built-in conversation topics (the game)'
    ],
    pressureProfile: {
        level: 'low',
        source: 'Minimal - focus is on the game, not social performance',
        mitigationTips: [
        'Join as a "free agent" (most leagues have this option)',
        'Focus on learning the sport rather than performance',
        'Attend the post-game social - conversation flows naturally'
        ]
    },
    socialStructure: {
        soloFriendliness: 'moderate',
        whySoloFriendly: 'Many leagues have free agent registration, but joining an existing team can be awkward',
        groupDynamics: 'Team-oriented with natural breaks for conversation during play',
        conversationFocus: 'Game strategy, sports talk, casual banter, post-game plans'
    },
    touchProfile: {
        level: 'low',
        type: 'context-initiated',
        consentCulture: 'Sports-appropriate touch (high-fives, team huddles)',
        boundaries: ['Game-related contact only', 'Respect personal space off-field']
    },
    tips: [
        'Choose a recreational (not competitive) league',
        'Arrive early to meet teammates before the game',
        'Bring water and appropriate gear',
        'Focus on having fun rather than winning'
    ],
    commonMyths: [
        'You need to be athletic (recreational leagues welcome all skill levels)',
        'It\'s overly competitive (many leagues are just for fun)',
        'Only young people participate (all ages welcome)'
    ],
    redFlags: [
        'Overly aggressive players',
        'Teams that exclude less-skilled players',
        'Poor sportsmanship culture'
    ]
    },
];
