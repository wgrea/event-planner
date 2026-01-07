import type { SocialEventType } from '$lib/types/event';

export const educationalEvents: SocialEventType[] = [
  {
    id: 'book-club',
    name: 'Book Club',
    category: 'educational',
    properties: ['discussion-based', 'intellectual', 'structured-conversation', 'topic-focused'],
    alsoKnownAs: ['Reading Group', 'Literary Circle', 'Book Discussion'],
    overlapsWith: ['hobby-knitting-circle', 'gaming-board-night'],
    keyDifferences: [
        {
        comparedTo: 'hobby-knitting-circle',
        differences: [
            'More verbal participation required',
            'Focus on analysis rather than hands-on activity',
            'More structured discussion format'
        ]
        }
    ],
    idealFor: [
        'Avid readers',
        'People who enjoy deep discussions',
        'Those who prefer structured conversation topics',
        'Individuals who want intellectual stimulation'
    ],
    pressureProfile: {
        level: 'low',
        source: 'Minimal - book provides conversation structure, participation level is flexible',
        mitigationTips: [
        'Read the book (or even just part of it)',
        'Prepare a few thoughts or questions',
        'It\'s okay to just listen if you\'re not ready to speak'
        ]
    },
    socialStructure: {
        soloFriendliness: 'high',
        whySoloFriendly: 'People join book clubs specifically to meet others with similar interests',
        groupDynamics: 'Discussion-focused with facilitator; natural turn-taking',
        conversationFocus: 'Book themes, characters, writing style, personal interpretations'
    },
    touchProfile: {
        level: 'none',
        type: 'consensual',
        consentCulture: 'Academic/social setting; minimal physical contact',
        boundaries: ['Professional/social distance maintained', 'Handshakes optional']
    },
    tips: [
        'Check if the club has a theme or genre focus',
        'Come with an open mind about different interpretations',
        'It\'s okay to disagree respectfully',
        'Bring the book for reference'
    ],
    commonMyths: [
        'You need to be a literary expert (all perspectives valued)',
        'You must finish the book (participate at your comfort level)',
        'Only serious literature (many clubs read popular fiction)'
    ],
    redFlags: [
        'Dominant members who monopolize discussion',
        'Judgmental attitudes about reading preferences',
        'Cliquish behavior'
    ]
    },
    {
        id: 'fixed-partner-lessons',
        name: 'Fixed-Partner Group Lessons',
        category: 'educational',
        properties: ['paired-activity', 'skill-learning', 'date-night-vibe', 'structured'],
        alsoKnownAs: ['Couples Classes', 'Date Night Workshops', 'Partnered Lessons'],
        overlapsWith: ['cooking-class', 'dance-salsa-social'],
        keyDifferences: [
        {
            comparedTo: 'dance-salsa-social',
            differences: [
            'Fixed partner for entire session (no rotation)',
            'Often marketed as "date night" activities',
            'Smaller class sizes with more instructor attention'
            ]
        }
        ],
        idealFor: [
        'People attending with a partner/friend',
        'Those wanting focused skill-building',
        'Couples looking for shared activities'
        ],
        pressureProfile: {
        level: 'medium',
        source: 'Medium - requires bringing or being paired with a partner; can feel awkward if solo',
        mitigationTips: [
            'Call ahead to ask about solo participation policies',
            'Consider bringing a friend if possible',
            'If paired with stranger, focus on the activity, not the partnership',
            'Arrive early to meet your assigned partner before class starts'
        ]
        },
        socialStructure: {
        soloFriendliness: 'low',
        whySoloFriendly: 'Designed for pairs; solo attendees are often paired with strangers or staff',
        groupDynamics: 'Partner-focused with some group interaction; instructor-led',
        conversationFocus: 'Skill techniques, project progress, light partner coordination'
        },
        touchProfile: {
        level: 'varies',
        type: 'activity-dependent',
        consentCulture: 'Activity-appropriate touch; clearer in structured activities like dance',
        boundaries: ['Activity-required contact only', 'Respect partner\'s comfort level']
        },
        tips: [
        'Research class structure before signing up',
        'Communicate comfort level with your partner at the start',
        'Focus on learning the skill rather than social dynamics',
        'Consider introductory classes where everyone is new',
        'It\'s okay to request a different partner if uncomfortable (approach instructor privately)'
        ],
        commonMyths: [
        'All partnered classes are for couples (many welcome friends or solo attendees)',
        'You need prior experience (most are beginner-friendly)',
        'Partners are permanent (often just for that session)'
        ],
        redFlags: [
        'No option for solo attendees',
        'Poor instructor oversight of partner dynamics',
        'Overly romanticized "date night" marketing excluding others'
        ]
    },
  {
    id: 'fixed-partner-lessons',
    name: 'Fixed-Partner Group Lessons',
    category: 'educational',
    properties: ['paired-activity', 'skill-learning', 'date-night-vibe', 'structured'],
    alsoKnownAs: ['Couples Classes', 'Date Night Workshops', 'Partnered Lessons'],
    overlapsWith: ['cooking-class', 'dance-salsa-social'],
    keyDifferences: [
      {
        comparedTo: 'dance-salsa-social',
        differences: [
          'Fixed partner for entire session (no rotation)',
          'Often marketed as "date night" activities',
          'Smaller class sizes with more instructor attention'
        ]
      }
    ],
    idealFor: [
      'People attending with a partner/friend',
      'Those wanting focused skill-building',
      'Couples looking for shared activities'
    ],
    pressureProfile: {
      level: 'medium',
      source: 'Medium - requires bringing or being paired with a partner; can feel awkward if solo',
      mitigationTips: [
        'Call ahead to ask about solo participation policies',
        'Consider bringing a friend if possible',
        'If paired with stranger, focus on the activity, not the partnership',
        'Arrive early to meet your assigned partner before class starts'
      ]
    },
    socialStructure: {
      soloFriendliness: 'low',
      whySoloFriendly: 'Designed for pairs; solo attendees are often paired with strangers or staff',
      groupDynamics: 'Partner-focused with some group interaction; instructor-led',
      conversationFocus: 'Skill techniques, project progress, light partner coordination'
    },
    touchProfile: {
      level: 'varies',
      type: 'activity-dependent',
      consentCulture: 'Activity-appropriate touch; clearer in structured activities like dance',
      boundaries: ['Activity-required contact only', 'Respect partner\'s comfort level']
    },
    tips: [
      'Research class structure before signing up',
      'Communicate comfort level with your partner at the start',
      'Focus on learning the skill rather than social dynamics',
      'Consider introductory classes where everyone is new',
      'It\'s okay to request a different partner if uncomfortable (approach instructor privately)'
    ],
    commonMyths: [
      'All partnered classes are for couples (many welcome friends or solo attendees)',
      'You need prior experience (most are beginner-friendly)',
      'Partners are permanent (often just for that session)'
    ],
    redFlags: [
      'No option for solo attendees',
      'Poor instructor oversight of partner dynamics',
      'Overly romanticized "date night" marketing excluding others'
    ]
  },
  {
  id: 'amusement-park',
  name: 'Amusement Park / Theme Park',
  category: 'entertainment',
  properties: ['crowded', 'thrill-focused', 'family-oriented', 'all-day'],
  alsoKnownAs: ['Theme Park', 'Adventure Park', 'Fun Park'],
  overlapsWith: ['concert-festival', 'outdoor-hiking'],
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