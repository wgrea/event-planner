// src/lib/data/socialEventTypes/categories/conventions/fan-convention.ts
import type { SocialEventType } from '$lib/types/event';

export const fanConvention: SocialEventType = {
  id: 'fan-convention',
  name: 'Fan Convention (Comic-Con/Anime)',
  category: 'conventions',
  properties: ['high-energy', 'costume-friendly', 'spectacle', 'expensive', 'community-focused'],
  alsoKnownAs: ['Comic Con', 'Fan Expo', 'Pop Culture Convention'],
  overlapsWith: ['creative-workshops', 'gaming-tournament', 'entertainment-expos'],
  keyDifferences: [
    {
      comparedTo: 'creative-workshops',
      differences: [
        'Spectator/consumer focus vs participatory',
        'Large scale vs small group',
        'Commercial vs educational',
        'Entertainment vs skill-building'
      ]
    }
  ],
  idealFor: [
    'Cosplayers',
    'Collectors',
    'Solo hobbyists',
    'Fans wanting immersion',
    'People who enjoy spectacle'
  ],
  pressureProfile: {
    level: 'medium',
    source: 'Crowds, cost, FOMO, cosplay expectations, schedule decisions',
    mitigationTips: [
      'Plan only 2-3 must-do activities per day',
      'Schedule quiet breaks',
      'Set budget beforehand',
      'Wear comfortable shoes',
      'Hydrate regularly'
    ]
  },
  socialStructure: {
    soloFriendliness: 'high',
    whySoloFriendly: 'Being a "fan" is the only credential needed; queuing for panels is a natural place to meet people',
    groupDynamics: 'Massive crowds with small "fandom" clusters; temporary communities form',
    conversationFocus: 'Lore, upcoming releases, cosplay techniques, "Where did you get that?", artist discoveries'
  },
  touchProfile: {
    level: 'low',
    type: 'consensual',
    consentCulture: 'Always ask before touching cosplay or taking photos; cosplay is not consent',
    boundaries: ['Ask before hugging cosplayers', 'Respect personal space in crowded areas', 'No unsolicited touch']
  },
  tips: [
    'Use the "Artist Alley" for low-pressure 1-on-1 chats with creators',
    'Attend "Fan Meetups" for your specific interest',
    'Bring portable charger',
    'Wear comfortable shoes',
    'Plan must-see panels in advance',
    'Budget for vendor hall purchases'
  ],
  commonMyths: [
    'Only for hardcore fans',
    'Too expensive for casual attendees',
    'Unfriendly to newcomers',
    'All about buying merchandise'
  ],
  redFlags: [
    'Poor crowd management',
    'Inadequate facilities for size',
    'Harassment not addressed by staff',
    'Price gouging'
  ],
  touchDetails: {
    howPeopleTouch: [
      'Consensual hugs between friends meeting up',
      'High-fives over shared fandom excitement',
      'Shoulder touches in crowded lines',
      'Handshakes when meeting creators'
    ],
    proximityLevel: 4,
    initiation: 'Always ask first, especially with cosplayers; read social cues'
  },
  soloTips: {
    howToGoSolo: [
      'Join line conversations (everyone is waiting)',
      'Attend fan meetups for specific interests',
      'Offer to take photos for groups/couples',
      'Sit in panel front rows to avoid group seating pressure',
      'Volunteer (gives structure and purpose)'
    ],
    bestPosition: 'Lines for popular events (built-in conversation)',
    escapePlan: 'Quiet rooms, outside areas, or hotel lobby if connected',
    icebreaker: 'What panel are you most excited for?',
    forTravelers: 'Ask about local comic shops or fan hangouts'
  },
  logistics: {
    ticketSources: ['Official convention website', 'Eventbrite', 'Local comic shops'],
    parking: {
      type: 'difficult',
      details: 'Convention center parking expensive and limited; public transit recommended'
    },
    transit: 'Highly recommended; shuttles often available from hotels',
    alcohol: {
      likelihood: 'low',
      priceLevel: 4,
      byoAllowed: false
    }
  },
  seasonalPricing: {
    cheaperMonths: [],
    expensiveMonths: ['Convention months (varies by event)'],
    priceNotes: 'Early bird tickets 30-50% cheaper; hotel packages available'
  },
  nicheWorld: {
    unwrittenRules: [
      'Cosplay is not consent',
      'Ask before taking photos',
      'Respect others\' fandoms',
      'Don\'t block aisles or doorways',
      'Shower and use deodorant (con funk is real)'
    ],
    socialCurrency: ['Impressive cosplay', 'Rare merchandise', 'Creator knowledge', 'Panel attendance', 'Volunteer history'],
    entryBarriers: ['Ticket cost', 'Travel expenses', 'Social anxiety in crowds', 'Planning complexity'],
    tabooTopics: ['Gatekeeping', 'Fandom purity tests', 'Costume criticism', '"Fake fan" accusations'],
    initiationRituals: ['First cosplay', 'First celebrity photo/autograph', 'First overnight in line', 'First convention volunteer shift']
  }
};