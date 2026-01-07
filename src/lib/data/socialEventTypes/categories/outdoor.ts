import type { SocialEventType } from '$lib/types/event';

export const outdoorEvents: SocialEventType[] = [
  {
    id: 'outdoor-hiking-group',
    name: 'Group Hiking / Nature Walk',
    category: 'outdoors',
    properties: ['nature-focused', 'physical-activity', 'shoulder-to-shoulder', 'scenic'],
    alsoKnownAs: ['Trail Walking', 'Nature Hike', 'Outdoor Exploration'],
    overlapsWith: ['horseback-riding', 'volunteer-community'],
    keyDifferences: [
      {
        comparedTo: 'volunteer-community',
        differences: [
          'Recreational rather than task-oriented',
          'More focus on personal enjoyment',
          'Less structured conversation'
        ]
      }
    ],
    idealFor: [
      'Nature lovers',
      'People who prefer moving conversations',
      'Those who enjoy parallel activity',
      'Fitness enthusiasts'
    ],
    pressureProfile: {
      level: 'low',
      source: 'Low - physical activity and natural setting reduce social pressure',
      mitigationTips: [
        'Choose hikes matching your fitness level',
        'Focus on the scenery when conversation lulls',
        'Walk at your own pace; don\'t feel pressured to keep up'
      ]
    },
    socialStructure: {
      soloFriendliness: 'high',
      whySoloFriendly: 'Common to join group hikes alone; nature provides natural focus',
      groupDynamics: 'Walking in loose groups or pairs; conversation ebbs with terrain',
      conversationFocus: 'Nature observations, hiking experiences, local trails, wildlife sightings'
    },
    touchProfile: {
      level: 'low',
      type: 'assistance-based',
      consentCulture: 'Occasional helping hand on difficult terrain; otherwise minimal',
      boundaries: ['Ask before offering physical assistance', 'Respect personal space on trail']
    },
    tips: [
      'Check difficulty level before joining',
      'Bring essentials (water, snacks, layers)',
      'Wear appropriate footwear',
      'Leave no trace (pack out trash)',
      'Inform someone of your plans'
    ],
    commonMyths: [
      'You need expensive gear (basic equipment suffices for most hikes)',
      'Only super fit people hike (all fitness levels can find suitable trails)',
      'It\'s dangerous (most group hikes are on well-maintained trails)'
    ],
    redFlags: [
      'Poorly marked or maintained trails',
      'Leader pushing beyond advertised difficulty',
      'Inadequate safety precautions',
      'Large groups damaging environment'
    ]
  },
  {
    id: 'bird-watching',
    name: 'Bird Watching Group',
    category: 'outdoors',
    properties: ['quiet', 'observational', 'educational', 'patient'],
    alsoKnownAs: ['Birding', 'Avian Observation', 'Ornithology Group'],
    overlapsWith: ['outdoor-hiking-group', 'astronomy-club'],
    keyDifferences: [
      {
        comparedTo: 'outdoor-hiking-group',
        differences: [
          'More stationary observation',
          'Quieter atmosphere required',
          'Specialized knowledge often shared'
        ]
      }
    ],
    idealFor: [
      'Nature enthusiasts',
      'Introverts',
      'Photography hobbyists',
      'Patient observers',
      'Science and wildlife lovers'
    ],
    pressureProfile: {
      level: 'very low',
      source: 'Minimal - quiet observation expected; minimal conversation pressure',
      mitigationTips: [
        'Focus on watching/listening for birds',
        'Use binoculars or camera as focus point',
        'Ask questions during designated discussion times'
      ]
    },
    socialStructure: {
      soloFriendliness: 'high',
      whySoloFriendly: 'Common hobby to pursue alone; groups often form organically',
      groupDynamics: 'Quiet observation with whispered exchanges; more discussion afterward',
      conversationFocus: 'Bird identification, habitats, migration patterns, equipment tips'
    },
    touchProfile: {
      level: 'none',
      type: 'observational',
      consentCulture: 'No physical contact expected; quiet observation environment',
      boundaries: ['Maintain quiet for observation', 'Respect others\' viewing angles']
    },
    tips: [
      'Bring binoculars if you have them (some groups loan them)',
      'Wear muted colors to blend in',
      'Download bird identification apps',
      'Keep movement slow and deliberate',
      'Take notes or photos for later identification'
    ],
    commonMyths: [
      'You need expensive equipment (naked eye birding is valid)',
      'Only older people bird watch (all ages enjoy it)',
      'You must know all the species (learning is part of the fun)'
    ],
    redFlags: [
      'Groups disturbing wildlife or habitats',
      'Elitist attitudes about equipment or knowledge',
      'Unsafe locations or conditions',
      'Lack of respect for private property'
    ]
  }
];