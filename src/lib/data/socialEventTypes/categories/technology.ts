import type { SocialEventType } from '$lib/types/event';

export const technologyEvents: SocialEventType[] = [
  {
    id: 'hackathon',
    name: 'Hackathon / Code Jam',
    category: 'technology',
    properties: ['project-focused', 'collaborative', 'time-limited', 'skill-based'],
    alsoKnownAs: ['Codeathon', 'Programming Marathon', 'Dev Sprint'],
    overlapsWith: ['gaming-board-night', 'professional-networking'],
    keyDifferences: [
      {
        comparedTo: 'gaming-board-night',
        differences: [
          'Creative output rather than game playing',
          'More intense time pressure',
          'Professional skill demonstration'
        ]
      }
    ],
    idealFor: [
      'Programmers and developers',
      'Problem-solvers',
      'People who prefer working over socializing',
      'Those wanting portfolio projects',
      'Students and professionals building skills'
    ],
    pressureProfile: {
      level: 'low',
      source: 'Low - focus is on building and problem-solving; social interaction secondary',
      mitigationTips: [
        'Form or join a team early',
        'Set realistic project goals',
        'Take regular breaks',
        'Remember it\'s about learning, not just winning'
      ]
    },
    socialStructure: {
      soloFriendliness: 'moderate',
      whySoloFriendly: 'Can participate solo but teams often form; skill matching can be social',
      groupDynamics: 'Team collaboration with individual coding; mentor availability',
      conversationFocus: 'Technology stacks, problem-solving approaches, APIs, development tools'
    },
    touchProfile: {
      level: 'none',
      type: 'professional',
      consentCulture: 'Professional tech environment; minimal physical contact',
      boundaries: ['Respect others\' workspace', 'Ask before using others\' equipment']
    },
    tips: [
      'Bring your own laptop and chargers',
      'Research the theme/topic beforehand',
      'Network during breaks and meals',
      'Focus on completing a Minimum Viable Product',
      'Get feedback from mentors'
    ],
    commonMyths: [
      'You need to be an expert coder (all skill levels can contribute)',
      'It\'s only for young people (all ages participate)',
      'You must code the entire time (planning and breaks are important)'
    ],
    redFlags: [
      'Poorly organized with unclear rules',
      'Unsafe or uncomfortable venue',
      'Pressure to work unreasonable hours',
      'Lack of diversity and inclusion'
    ]
  },
  {
    id: 'game-jam',
    name: 'Game Development Jam',
    category: 'technology',
    properties: ['creative', 'collaborative', 'project-based', 'skill-diverse'],
    alsoKnownAs: ['Game Hackathon', 'Indie Game Jam', 'Ludum Dare'],
    overlapsWith: ['hackathon', 'creative-events'],
    keyDifferences: [
      {
        comparedTo: 'hackathon',
        differences: [
          'Focus on game creation rather than general software',
          'More emphasis on creative/artistic elements',
          'Often includes non-programmers (artists, designers, musicians)'
        ]
      }
    ],
    idealFor: [
      'Game developers',
      'Artists and musicians',
      'Writers and designers',
      'Creative technologists',
      'Those interested in interactive media'
    ],
    pressureProfile: {
      level: 'low',
      source: 'Low - creative collaboration with shared goals; often very supportive atmosphere',
      mitigationTips: [
        'Form balanced teams (programmers, artists, designers)',
        'Scope project to time available',
        'Embrace imperfection (games can be simple)',
        'Focus on fun and learning'
      ]
    },
    socialStructure: {
      soloFriendliness: 'moderate',
      whySoloFriendly: 'Can work solo but teams form naturally; skill-matching events common',
      groupDynamics: 'Creative collaboration with role specialization; show-and-tell at end',
      conversationFocus: 'Game mechanics, art styles, story elements, technical challenges'
    },
    touchProfile: {
      level: 'none',
      type: 'creative',
      consentCulture: 'Creative collaborative environment; minimal physical contact',
      boundaries: ['Respect creative contributions', 'Collaborative decision-making']
    },
    tips: [
      'Bring necessary equipment (laptop, tablet, headphones)',
      'Consider your strengths when forming teams',
      'Playtest frequently',
      'Document your process',
      'Prepare for final presentation'
    ],
    commonMyths: [
      'You need to be a programmer (artists, writers, musicians needed)',
      'Games must be polished (rough prototypes are celebrated)',
      'Only video games (board games and physical games also welcome)'
    ],
    redFlags: [
      'Toxic competitive atmosphere',
      'Poor time management by organizers',
      'Lack of basic facilities (power, wifi, space)',
      'Exclusionary behavior toward certain roles'
    ]
  }
];