import type { SocialEventType } from '$lib/types/event';

export const specialInterestEvents: SocialEventType[] = [
  {
    id: 'cuddle-party',
    name: 'Cuddle Party / Consent Workshop',
    category: 'special-interest',
    properties: ['touch-focused', 'consent-based', 'boundary-setting', 'non-sexual'],
    alsoKnownAs: ['Cuddle Workshop', 'Consent Event', 'Platonic Touch Social'],
    overlapsWith: ['ecstatic-dance', 'dance-salsa-social'],
    keyDifferences: [
      {
        comparedTo: 'ecstatic-dance',
        differences: [
          'Explicit focus on platonic touch',
          'More structured consent education',
          'Less movement, more stillness'
        ]
      }
    ],
    idealFor: [
      'People seeking safe, platonic touch',
      'Those wanting to practice boundary-setting',
      'Individuals exploring consent culture',
      'People who miss non-sexual physical connection'
    ],
    pressureProfile: {
      level: 'medium',
      source: 'Moderate - involves intimate activity but with strong structure and consent focus',
      mitigationTips: [
        'Remember "no" is a complete sentence',
        'Start with simple touch requests',
        'Use the structured exercises as guides'
      ]
    },
    socialStructure: {
      soloFriendliness: 'high',
      whySoloFriendly: 'Designed for individuals to explore touch in safe environment',
      groupDynamics: 'Highly structured with facilitator; clear rules and exercises',
      conversationFocus: 'Consent, boundaries, comfort levels, personal experiences'
    },
    touchProfile: {
      level: 'high',
      type: 'consensual',
      consentCulture: 'Extremely clear consent culture; verbal consent required for everything',
      boundaries: ['Explicit verbal consent for all touch', 'Can change mind at any time', 'Non-sexual only']
    },
    tips: [
      'Wear comfortable clothes (often pajama-like)',
      'Arrive on time for the rules orientation (mandatory)',
      'Start small - a hand hold or shoulder touch',
      'Remember you can participate at any level, including just observing'
    ],
    commonMyths: [
      'It\'s sexual or a dating scene (explicitly non-sexual)',
      'You have to cuddle strangers (participation is always optional)',
      'Only for touch-deprived people (all can benefit from consent practice)'
    ],
    redFlags: [
      'Poor facilitation or rule enforcement',
      'Participants not respecting "no"',
      'Sexualized atmosphere'
    ]
  },
  {
    id: 'astronomy-club',
    name: 'Astronomy Club / Star Party',
    category: 'special-interest',
    properties: ['observational', 'scientific', 'night-time', 'equipment-focused'],
    alsoKnownAs: ['Star Gazing', 'Astronomy Night', 'Telescope Viewing'],
    overlapsWith: ['outdoor-hiking-group', 'bird-watching'],
    keyDifferences: [
      {
        comparedTo: 'bird-watching',
        differences: [
          'Nighttime activity vs daytime',
          'Focus on celestial objects vs birds',
          'More specialized equipment required'
        ]
      }
    ],
    idealFor: [
      'Space enthusiasts',
      'People who enjoy quiet observation',
      'Night owls',
      'Science and astronomy lovers'
    ],
    pressureProfile: {
      level: 'low',
      source: 'Low - focus is on observation and learning; minimal social expectations',
      mitigationTips: [
        'Focus on the telescopes and stars',
        'Ask questions about what you\'re seeing',
        'Bring a notebook for observations'
      ]
    },
    socialStructure: {
      soloFriendliness: 'high',
      whySoloFriendly: 'Common hobby to pursue alone; groups form around shared equipment',
      groupDynamics: 'Quiet observation with educational discussions; expert-led',
      conversationFocus: 'Celestial objects, equipment, astronomical events, science topics'
    },
    touchProfile: {
      level: 'none',
      type: 'observational',
      consentCulture: 'Minimal touch; ask before using others\' equipment',
      boundaries: ['No touching telescopes without permission', 'Respect observation quiet']
    },
    tips: [
      'Dress warmly (nights can be cold)',
      'Bring red-light flashlight to preserve night vision',
      'Start with naked-eye observation before using telescopes',
      'Download astronomy apps for reference'
    ],
    commonMyths: [
      'You need expensive equipment (many clubs have loaner telescopes)',
      'Only for science experts (beginners welcome)',
      'Only clear nights (club meetings happen regardless of weather)'
    ],
    redFlags: [
      'Unsafe locations (poor lighting, unsafe areas)',
      'Elitist attitudes about equipment',
      'Disrespectful behavior during observation'
    ]
  },
  {
    id: 'historical-reenactment',
    name: 'Historical Reenactment',
    category: 'special-interest',
    properties: ['role-playing', 'educational', 'costumed', 'period-focused'],
    alsoKnownAs: ['Living History', 'Historical Recreation', 'Period Reenactment'],
    overlapsWith: ['creative-events', 'educational-events'],
    keyDifferences: [
      {
        comparedTo: 'creative-events',
        differences: [
          'Historical accuracy focus vs creative expression',
          'Group performance vs individual creation',
          'Educational mission vs artistic mission'
        ]
      }
    ],
    idealFor: [
      'History buffs',
      'People who enjoy role-playing',
      'Costume enthusiasts',
      'Those interested in hands-on history'
    ],
    pressureProfile: {
      level: 'low',
      source: 'Low - structured roles and historical focus reduce social pressure',
      mitigationTips: [
        'Start with spectator role before participating',
        'Ask questions about the historical period',
        'Focus on learning the historical context'
      ]
    },
    socialStructure: {
      soloFriendliness: 'moderate',
      whySoloFriendly: 'Can attend as spectator alone; participating often requires joining a group',
      groupDynamics: 'Role-based with historical accuracy; educational interactions with public',
      conversationFocus: 'Historical facts, period accuracy, costume details, event logistics'
    },
    touchProfile: {
      level: 'low',
      type: 'context-initiated',
      consentCulture: 'Period-appropriate touch in character; modern boundaries out of character',
      boundaries: ['Stay in character when touching', 'Respect modern boundaries when not performing']
    },
    tips: [
      'Research the historical period before attending',
      'Start as a spectator to understand expectations',
      'Ask about participant requirements before joining',
      'Respect the historical accuracy focus'
    ],
    commonMyths: [
      'You need to be an actor (many participants are history enthusiasts)',
      'It\'s only for specific time periods (many eras represented)',
      'You must have perfect costumes (many groups help newcomers)'
    ],
    redFlags: [
      'Historical inaccuracies being promoted',
      'Exclusionary attitudes toward newcomers',
      'Unsafe conditions or equipment'
    ]
  },
  {
    id: 'foot-fetish-socials',
    name: 'Foot Fetish Socials',
    category: 'special-interest',
    properties: ['kink-friendly', 'consent-focused', 'adults-only', 'niche-interest', 'boundary-conscious'],
    alsoKnownAs: ['Foot Appreciation Events', 'Podophilia Socials', 'Kink-Friendly Foot Parties'],
    overlapsWith: [], // Add existing special-interest event IDs like 'cuddle-party' if you have it
    keyDifferences: [],
    idealFor: [
      'Individuals with foot fetishes seeking community',
      'People interested in kink-friendly social spaces',
      'Those wanting to explore foot appreciation in safe environment',
      'Consent and boundary-focused individuals'
    ],
    pressureProfile: {
      level: 'high',
      source: 'High - Social stigma around fetishes; potential for discomfort in intimate focus',
      mitigationTips: [
        'Attend with clear personal boundaries',
        'Remember participation is always optional',
        'Start with socializing before any physical interaction',
        'Have an exit plan if feeling uncomfortable'
      ]
    },
    socialStructure: {
      soloFriendliness: 'moderate',
      whySoloFriendly: 'Can attend alone but may feel vulnerable due to intimate nature',
      groupDynamics: 'Niche community; often includes experienced members mentoring newcomers',
      conversationFocus: 'Boundaries, consent, foot care/appreciation, kink community topics'
    },
    touchProfile: {
      level: 'varies',
      type: 'consensual',
      consentCulture: 'Extremely explicit consent required; often structured with clear rules',
      boundaries: [
        'Explicit verbal consent for all touch',
        'No expectations of reciprocity',
        'Can revoke consent at any time',
        'Often specific rules about hygiene and foot care'
      ]
    },
    tips: [
      'Research event rules and consent culture beforehand',
      'Practice clear communication about boundaries',
      'Consider attending with a trusted friend for first time',
      'Focus on social aspect before physical interactions',
      'Respect others\' comfort levels and fetish variations'
    ],
    commonMyths: [
      'All attendees are looking for sexual encounters (many seek community and acceptance)',
      'You must participate physically (observation and socializing are valid)',
      'Only people with extreme fetishes attend (spectrum of interest levels)'
    ],
    redFlags: [
      'Poorly defined consent rules',
      'Pressure to participate beyond comfort level',
      'Lack of clear event facilitation',
      'Unsafe or unclean environment'
    ]
  }
];