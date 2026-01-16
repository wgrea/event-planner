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
    ],
    // In special-interest.ts:
    touchDetails: {
      howPeopleTouch: [
        'Back-to-back leaning exercises',
        'Platonic spooning with pillows between',
        'Hand-holding during introductions',
        'Shoulder massages with explicit consent'
      ],
      proximityLevel: 4,
      initiation: 'Structured exercises with verbal consent check-ins'
    }
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
  },
  {
    id: 'munch',
    name: 'Munch',
    category: 'special-interest',
    properties: ['vanilla-attire', 'educational', 'public-venue', 'low-pressure'],
    alsoKnownAs: ['Kink Social', 'Meet & Greet'],
    // ADD THESE MISSING PROPERTIES:
    overlapsWith: [], // Add event IDs if they exist
    keyDifferences: [], // Add comparisons if needed
    idealFor: ['Beginners', 'Solo seekers', 'Introverts wanting to vet a community'],
    pressureProfile: {
      level: 'low',
      source: 'Conversation-based; the pressure is to "not be a creep" rather than to perform',
      mitigationTips: [
        'Wear normal "vanilla" street clothes',
        'Focus on asking about people\'s hobbies outside of kink first',
        'It is okay to just listen to the group conversation'
      ]
    },
    socialStructure: {
      soloFriendliness: 'high', // Changed from 'very-high' to 'high'
      whySoloFriendly: 'Designed specifically for newcomers to meet the community in a safe, public space',
      groupDynamics: 'Circular table talk; very inclusive of the "person sitting next to you"', // ADD THIS
      conversationFocus: 'Community safety, upcoming events, and "how I got started"'
    },
    // ADD THESE MISSING PROPERTIES:
    touchProfile: {
      level: 'none',
      type: 'social',
      consentCulture: 'Professional and respectful',
      boundaries: ['Maintain appropriate personal space']
    },
    tips: [
      'Do not bring kink toys or wear gear to a munch',
      'Ask for a person\'s "site name" (FetLife) rather than their real name if you want to stay in touch',
      'Always ask before joining a pre-existing group at a table'
    ],
    commonMyths: [ // ADD THIS
      'Only for experienced kinksters',
      'Pressure to participate in activities',
      'Inappropriate behavior tolerated'
    ],
    redFlags: [
      'Anyone pressuring you to go to a private location after',
      'People ignoring the "no kink in public" rule'
    ]
  },
  {
    id: 'leather-party',
    name: 'Leather / Gear Party',
    category: 'special-interest',
    properties: ['structured-dress', 'high-protocol', 'intense', 'visual'],
    alsoKnownAs: ['BLUF Night', 'Gear Night'],
    pressureProfile: {
      level: 'high',
      source: 'Aesthetic-based; the "pressure" is to look the part and follow bar etiquette',
      mitigationTips: [
        'If you don\'t have leather, wear "all black" as a respectful default',
        'Observe the room for 15 minutes before trying to strike up a chat',
        'The bar counter is your safe zone'
      ]
    },
    socialStructure: {
      soloFriendliness: 'moderate',
      whySoloFriendly: 'The "Gear" acts as a uniform that makes you part of the group automatically',
      groupDynamics: 'Hierarchical with experienced members often mentoring; formal interactions', // ADD THIS
      conversationFocus: 'Gear maintenance, history of the subculture, and cigar/whiskey talk'
    },
    touchProfile: {
      level: 'low',
      type: 'protocol',
      consentCulture: 'Very high; touch is often more formal (handshakes, shoulder pats) until "play" is agreed upon',
      boundaries: ['Do not touch someone\'s leather or gear without asking']
    },
    // Also add other missing required properties:
    overlapsWith: [], // ADD
    keyDifferences: [], // ADD
    idealFor: ['Leather enthusiasts', 'Kink community members', 'Those interested in protocol-based socializing'], // ADD
    tips: [
      'Research dress code beforehand',
      'Understand basic leather community protocols',
      'Arrive with a respectful attitude'
    ], // ADD
    commonMyths: [], // ADD
    redFlags: [] // ADD
  },
  {
    id: 'play-party',
    name: 'Play Party / Dungeon Night',
    category: 'special-interest',
    properties: ['high-protocol', 'vetting-required', 'dress-code', 'active'],
    alsoKnownAs: ['Dungeon Party', 'TPE (Themed Play Event)'],
    // ADD THESE MISSING PROPERTIES:
    overlapsWith: [], // Add event IDs if they exist
    keyDifferences: [], // Add comparisons if needed
    idealFor: ['Experienced community members', 'Curious voyeurs', 'Couples'],
    pressureProfile: {
      level: 'high',
      source: 'Atmospheric pressure and strict social etiquette regarding consent.',
      mitigationTips: [
        'Attend the mandatory "Newcomer Orientation" (usually 30 mins before the party).',
        'It is 100% acceptable to spend the whole night just watching.',
        'The "Dungeon Monitors" (DMs) are there to help; ask them if you are unsure of a rule.'
      ]
    },
    socialStructure: {
      soloFriendliness: 'moderate',
      whySoloFriendly: 'Voyeurism is a respected role; you can observe without needing to interact.',
      groupDynamics: 'Mixed; people playing in pairs/groups while others socialize in "vanilla" zones.',
      conversationFocus: 'Scene safety, equipment, and community news.'
    },
    touchProfile: {
      level: 'varies',
      type: 'consensual',
      consentCulture: 'Extreme; "Ask culture" is the law. No touch without explicit verbal consent.',
      boundaries: ['Never interrupt a "scene" in progress', 'Do not touch equipment/furniture without permission']
    },
    // ADD THESE MISSING PROPERTIES:
    tips: [
      'Arrive early for orientation',
      'Observe first before participating',
      'Respect all safety protocols'
    ],
    commonMyths: [
      'Only for experienced practitioners',
      'Pressure to participate',
      'Unsafe environment'
    ],
    redFlags: [
      'Poorly enforced consent rules',
      'Inadequate dungeon monitors',
      'Unsanitary equipment'
    ]
  },
  {
    id: 'kink-workshop',
    name: 'Kink Workshop / Skill-Share',
    category: 'special-interest',
    properties: ['educational', 'structured', 'low-pressure', 'skill-based'],
    alsoKnownAs: ['Demo Bondage', 'Impact 101'],
    // ADD THESE MISSING PROPERTIES:
    overlapsWith: [], // Add event IDs if they exist
    keyDifferences: [], // Add comparisons if needed
    idealFor: ['Beginners', 'Solo learners', 'Analytical thinkers'],
    pressureProfile: {
      level: 'low',
      source: 'Task-focused learning environment.',
      mitigationTips: [
        'Bring a notebook; it gives you something to do with your hands.',
        'Focus on the technical aspects of the demo to ease social nerves.',
        'Ask the instructor questions during the Q&A.'
      ]
    },
    socialStructure: {
      soloFriendliness: 'high',
      whySoloFriendly: 'Learning a skill is an individual activity; many people attend alone to take notes.',
      groupDynamics: 'Classroom style; focus is on the presenter.',
      conversationFocus: 'Technique, safety, and equipment recommendations.'
    },
    // ADD THESE MISSING PROPERTIES:
    touchProfile: {
      level: 'none',
      type: 'educational',
      consentCulture: 'Professional and instructional; touch only for demonstration with consent',
      boundaries: ['Ask before touching demonstration materials', 'Respect personal learning space']
    },
    tips: [
      'Take notes during demonstrations',
      'Ask questions during designated Q&A times',
      'Practice techniques with provided materials'
    ],
    commonMyths: [
      'Requires prior experience',
      'Inappropriate for public learning',
      'Only for specific interests'
    ],
    redFlags: [
      'Instructor not certified or experienced',
      'Unsafe demonstration practices',
      'Pressure to participate beyond comfort'
    ]
  }
];