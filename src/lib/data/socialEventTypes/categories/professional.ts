import type { SocialEventType } from '$lib/types/event';

export const professionalEvents: SocialEventType[] = [
  {
    id: 'professional-networking',
    name: 'Professional Networking Event',
    category: 'professional',
    properties: ['goal-oriented', 'career-focused', 'evaluative', 'self-promotion'],
    alsoKnownAs: ['Networking Mixer', 'Industry Event', 'Career Networking'],
    overlapsWith: ['book-club', 'casual-coffee'],
    keyDifferences: [
        {
        comparedTo: 'book-club',
        differences: [
            'Explicit goal of professional advancement',
            'More pressure to perform and impress',
            'Less structured conversation flow'
        ]
        }
    ],
    idealFor: [
        'Career-focused individuals',
        'Job seekers',
        'Professionals building industry connections',
        'Entrepreneurs and business owners'
    ],
    pressureProfile: {
        level: 'high',
        source: 'High - explicit goal of making impressions and advancing career',
        mitigationTips: [
        'Set a realistic goal (e.g., "talk to 3 new people")',
        'Prepare an elevator pitch',
        'Remember most people feel similarly nervous'
        ]
    },
    socialStructure: {
        soloFriendliness: 'high',
        whySoloFriendly: 'Professionals typically attend alone to represent themselves',
        groupDynamics: 'Mingling with purpose; conversations are brief and goal-oriented',
        conversationFocus: 'Professional background, industry trends, career goals, business opportunities'
    },
    touchProfile: {
        level: 'low',
        type: 'professional',
        consentCulture: 'Professional handshakes standard; other touch minimal',
        boundaries: ['Professional handshakes only', 'Respect personal space', 'Avoid prolonged contact']
    },
    tips: [
        'Bring business cards',
        'Research attendees or companies beforehand',
        'Have conversation starters ready',
        'Follow up with connections afterward'
    ],
    commonMyths: [
        'You need to be an extrovert (many successful networkers are introverts)',
        'It\'s all about selling yourself (it\'s about building relationships)',
        'Only for executives (all career levels benefit)'
    ],
    redFlags: [
        'Overly aggressive sales pitches',
        'Lack of genuine interest in others',
        'Unprofessional behavior'
    ]
    },
];