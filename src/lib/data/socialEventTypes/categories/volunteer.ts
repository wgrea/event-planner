import type { SocialEventType } from '$lib/types/event';

export const volunteerEvents: SocialEventType[] = [
  {
    id: 'volunteer-community',
    name: 'Community Volunteer Event',
    category: 'volunteer',
    properties: ['mission-focused', 'shoulder-to-shoulder', 'tangible-impact', 'structured'],
    alsoKnownAs: ['Volunteering', 'Service Project', 'Community Service'],
    overlapsWith: ['hobby-knitting-circle', 'casual-picnic'],
    keyDifferences: [
        {
        comparedTo: 'hobby-knitting-circle',
        differences: [
            'Focus is on external mission/task rather than personal skill',
            'More physical activity involved',
            'Often outdoors or in community spaces'
        ]
        }
    ],
    idealFor: [
        'People who want purpose-driven social interaction',
        'Those who prefer working side-by-side over face-to-face conversation',
        'Individuals who want to contribute to community'
    ],
    pressureProfile: {
        level: 'low',
        source: 'Minimal - focus is on the task, not social performance',
        mitigationTips: [
        'Ask the organizer for a specific task assignment',
        'Bring work gloves or appropriate attire',
        'Focus on the work when conversation lulls'
        ]
    },
    socialStructure: {
        soloFriendliness: 'high',
        whySoloFriendly: 'Everyone is assigned tasks; showing up alone is expected',
        groupDynamics: 'Team-oriented but with individual tasks; natural breaks for conversation',
        conversationFocus: 'The work, community impact, practical matters'
    },
    touchProfile: {
        level: 'none',
        type: 'context-initiated',
        consentCulture: 'Minimal touch; occasional high-fives or helping hands',
        boundaries: ['Work-focused contact only', 'Respect personal work space']
    },
    tips: [
        'Wear clothes you don\'t mind getting dirty',
        'Bring water and snacks',
        'Ask for a task that matches your physical ability',
        'It\'s okay to work quietly if you prefer'
    ],
    commonMyths: [
        'You need to be super strong or skilled (all ability levels welcome)',
        'You must be extroverted (many volunteers are quiet workers)',
        'Only long-term commitments (one-time events available)'
    ],
    redFlags: [
        'Disorganized leadership',
        'Unsafe working conditions',
        'Pressure to donate money beyond volunteering time'
    ]
    },
];