// src/lib/data/socialEventTypes/categories/conventions/anime-convention.ts
import type { SocialEventType } from '$lib/types/event';

export const animeConvention: SocialEventType = {
  id: 'anime-convention',
  name: 'Anime/Comic Convention',
  category: 'conventions',
  properties: ['nerd-culture', 'cosplay', 'vendor-halls', 'panels', 'artist-alley'],
  alsoKnownAs: ['Anime Expo', 'Comic Con', 'Fan Convention', 'Nerd Fest'],
  overlapsWith: ['gaming-tournament', 'creative-workshop', 'fan-convention'],
  keyDifferences: [
    {
      comparedTo: 'gaming-tournament',
      differences: [
        'More diverse activities beyond gaming',
        'Focus on fandom vs competition',
        'Cosplay central to experience',
        'Artist/vendor focus stronger'
      ]
    }
  ],
  idealFor: [
    'Cosplayers',
    'Collectors',
    'Artist Alley browsers',
    'Panel attendees',
    'Japanese culture enthusiasts',
    'Fan artists'
  ],
  pressureProfile: {
    level: 'medium',
    source: 'Crowds, cost, planning complexity, cosplay perfection pressure, FOMO',
    mitigationTips: [
      'Plan schedule in advance but be flexible',
      'Bring water and snacks',
      'Take breaks in quiet areas',
      'Set realistic cosplay expectations',
      'Budget strictly for purchases'
    ]
  },
  socialStructure: {
    soloFriendliness: 'high',
    whySoloFriendly: 'Many attendees go alone; easy to blend into crowds or join interest groups',
    groupDynamics: 'Mix of solo attendees and friend groups; fluid movement between activities',
    conversationFocus: 'Favorite series, cosplay techniques, artist discoveries, voice actor stories, Japan travel'
  },
  touchProfile: {
    level: 'low',
    type: 'consensual',
    consentCulture: 'Always ask before touching cosplays; photos require explicit permission',
    boundaries: ['Ask before hugging cosplayers', 'Respect personal space in crowded areas', 'No unsolicited advice']
  },
  tips: [
    'Bring a portable charger',
    'Wear comfortable shoes',
    'Plan must-see panels in advance',
    'Budget for vendor hall purchases',
    'Research artists beforehand',
    'Hydrate constantly'
  ],
  commonMyths: [
    'Only for hardcore fans',
    'Too expensive for casual attendees',
    'Unfriendly to newcomers',
    'All about buying merchandise',
    'Only young people attend'
  ],
  redFlags: [
    'Poor crowd management',
    'Inadequate facilities for size',
    'Harassment not addressed by staff',
    'Overpriced basic necessities'
  ],
  touchDetails: {
    howPeopleTouch: [
      'Consensual hugs between friends/fandom acquaintances',
      'High-fives for great cosplays',
      'Gentle posing guidance for photos (with permission)',
      'Shoulder touches in crowded spaces'
    ],
    proximityLevel: 4,
    initiation: 'Always verbal ask first; "Can I get a photo?" or "Great cosplay!"'
  },
  soloTips: {
    howToGoSolo: [
      'Join cosplay gatherings for your series',
      'Attend smaller, niche panels',
      'Browse Artist Alley slowly (artists love to chat)',
      'Participate in gaming areas (if offered)',
      'Use social media to find meetups beforehand'
    ],
    bestPosition: 'Artist Alley or gaming areas',
    escapePlan: 'Hotel room if staying on-site, otherwise quiet seating areas',
    icebreaker: 'Who are you cosplaying as?',
    forTravelers: 'Ask about best local anime shops'
  },
  logistics: {
    ticketSources: ['Official convention website', 'Local anime shops', 'Eventbrite'],
    parking: {
      type: 'difficult',
      details: 'Urban convention centers have limited expensive parking'
    },
    transit: 'Highly recommended; many attendees use public transport',
    alcohol: {
      likelihood: 'low',
      priceLevel: 4,
      byoAllowed: false
    }
  },
  seasonalPricing: {
    cheaperMonths: ['Early bird periods'],
    expensiveMonths: ['At-door prices', 'Last minute'],
    priceNotes: 'Multi-day passes offer best value; volunteer for free entry'
  },
  nicheWorld: {
    unwrittenRules: [
      'Cosplay is not consent',
      'Ask before photos',
      'Don\'t block aisles with large props',
      'Respect artists\' work (no photography without permission in Artist Alley)',
      'Shower daily (con funk prevention)'
    ],
    socialCurrency: ['Quality cosplay', 'Rare merchandise', 'Artist connections', 'Voice actor encounters', 'Japan travel experience'],
    entryBarriers: ['Cost', 'Social anxiety', 'Cosplay pressure', 'Travel for major cons'],
    tabooTopics: ['Piracy', 'Gatekeeping', 'Cosplay criticism', '"Fake fan" accusations'],
    initiationRituals: ['First cosplay', 'First voice actor photo', 'First all-nighter', 'First convention volunteer experience']
  }
};