import type { SocialEventType } from '$lib/types/event';

export const movementEvents: SocialEventType[] = [
  {
    id: 'ecstatic-dance',
    name: 'Ecstatic Dance / Movement Jam',
    category: 'movement',
    properties: ['free-movement', 'non-verbal', 'sober-space', 'inclusive'],
    alsoKnownAs: ['Movement Meditation', 'Free Dance', 'Somatic Dance'],
    overlapsWith: ['music-rave', 'dance-salsa-social'],
    keyDifferences: [
        {
        comparedTo: 'music-rave',
        differences: [
            'Sober environment (often no alcohol/drugs)',
            'Emphasis on personal expression over socializing',
            'Usually in bright, open spaces'
        ]
        },
        {
        comparedTo: 'dance-salsa-social',
        differences: [
            'No partner required or expected',
            'No structured steps to learn',
            'Talking often discouraged'
        ]
        }
    ],
    idealFor: [
        'People who want to move without judgment',
        'Those seeking non-verbal connection',
        'Individuals who prefer sober environments',
        'People who want to explore personal expression'
    ],
    pressureProfile: {
        level: 'low',
        source: 'Minimal - focus is on individual movement, no performance expectations',
        mitigationTips: [
        'Remember: everyone is focused on their own movement',
        'Start by moving in place until comfortable',
        'Close your eyes if you feel self-conscious'
        ]
    },
    socialStructure: {
        soloFriendliness: 'high',
        whySoloFriendly: 'Designed for individual experience; attending alone is the norm',
        groupDynamics: 'Individual movement in shared space; subtle non-verbal connections',
        conversationFocus: 'Movement experience, music, personal insights (usually after the dance)'
    },
    touchProfile: {
        level: 'moderate',
        type: 'consensual',
        consentCulture: 'Very clear consent culture; touch only with explicit permission',
        boundaries: ['Ask before touching', 'Respect "no thank you"', 'Non-sexual touch only']
    },
    tips: [
        'Wear comfortable clothes you can move in',
        'Hydrate well before and after',
        'Arrive early to settle into the space',
        'Focus on your own experience, not others'
    ],
    commonMyths: [
        'You need to be a "good" dancer (no such thing here)',
        'It\'s a dating scene (it\'s a personal practice space)',
        'Only for spiritual people (all backgrounds welcome)'
    ],
    redFlags: [
        'Poorly facilitated spaces',
        'People not respecting boundaries',
        'Overly commercialized or cult-like vibe'
    ]
    },
];