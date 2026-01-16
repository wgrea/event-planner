// src/lib/data/socialEventTypes/categories/nightlife/sports-bars.ts
import type { SocialEventType } from '$lib/types/event';

// First event: Regular Sports Bar
export const sportsBar: SocialEventType = {
  id: 'sports-bar',
  name: 'Sports Bar',
  category: 'nightlife',
  properties: ['active', 'loud', 'screen-heavy', 'food-focused'],
  alsoKnownAs: ['Sports Grill', 'Pub & Grub'],
  overlapsWith: ['social-bar-hang', 'casual-dining'],
  keyDifferences: [
    {
      comparedTo: 'social-bar-hang',
      differences: [
        'Primary focus is on TV screens and live broadcasts',
        'Higher energy and noise levels during big plays',
        'More robust food menu (wings, burgers, appetizers)'
      ]
    }
  ],
  idealFor: [
    'Solo fans',
    'People who want a distraction while they eat/drink',
    'Casual socializers',
    'High-energy environments'
  ],
  pressureProfile: {
    level: 'low',
    source: 'Shared focus on screens reduces the need for constant conversation',
    mitigationTips: [
      'Wear team apparel to invite low-stakes comments',
      'Use half-time or commercials as the "social window"',
      'Sit at the bar to be closer to the action and the bartender'
    ]
  },
  socialStructure: {
    soloFriendliness: 'high',
    whySoloFriendly: 'The TV acts as a constant social "prop" or companion',
    groupDynamics: 'Tribal but welcoming; fans of the same team share an instant bond',
    conversationFocus: 'Player stats, game events, and referee calls'
  },
  touchProfile: {
    level: 'low',
    type: 'social',
    consentCulture: 'High-fives are common during scoring events',
    boundaries: ['Respect personal space when cheering', 'Avoid physical contact with opposing fans']
  },
  tips: [
    'Check which "team" the bar supports before wearing rival gear',
    'Arrive early for major games to secure a seat',
    'Order food; it makes staying for a 3-hour game more comfortable'
  ],
  commonMyths: [
    'You have to be a sports expert (it\'s okay to just enjoy the vibes)',
    'It\'s only for "bros" (modern sports bars have very diverse crowds)'
  ],
  redFlags: [
    'Fans becoming aggressive or belligerent',
    'Inadequate TV coverage or sound for the main event',
    'Over-serving of alcohol leading to an unsafe atmosphere'
  ],
  // ADD THE MISSING DETAILED FIELDS:
  touchDetails: {
    howPeopleTouch: [
      'High-fives during scoring plays',
      'Shoulder pats for great plays',
      'Occasional celebratory hugs with strangers (during big moments)'
    ],
    proximityLevel: 3,
    initiation: 'Spontaneous during exciting game moments'
  },
  soloTips: {
    howToGoSolo: [
      'Wear neutral clothing if unsure of team allegiance',
      'Sit at the bar for easiest TV viewing',
      'Order food to claim your spot for longer'
    ],
    bestPosition: 'Bar seating with good TV sightlines',
    escapePlan: 'Natural game breaks (halftime, quarter breaks)',
    icebreaker: 'Ask score or what just happened if you missed it'
  },
  logistics: {
    ticketSources: ['At the door'],
    parking: {
      type: 'mixed',
      details: 'Often in shopping centers with shared parking'
    },
    alcohol: {
      likelihood: 'high',
      priceLevel: 3,
      byoAllowed: false
    }
  },
  seasonalPricing: {
    cheaperMonths: ['Off-season months for major sports'],
    expensiveMonths: ['Playoff seasons', 'Super Bowl weekend'],
    priceNotes: 'Cover charges during major events'
  },
  nicheWorld: {
    unwrittenRules: [
      'Don\'t block TV views',
      'Cheer for your team, don\'t heckle opponents',
      'Know when to engage and when to watch',
      'Tip extra during busy games'
    ],
    socialCurrency: ['Team knowledge', 'Regular attendance', 'Good sportsmanship'],
    entryBarriers: ['Finding your team\'s bar', 'Learning sports culture'],
    tabooTopics: ['Insulting local teams', 'Excessive complaining about refs']
  }
};

// Second event: Telugu Sports Bar (SEPARATE EXPORT)
export const teluguSportsBar: SocialEventType = {
  id: 'telugu-sports-bar',
  name: 'Indian / Telugu Sports Bar',
  category: 'nightlife',
  properties: ['cultural', 'cricket-focused', 'vibrant', 'spicy-food'],
  alsoKnownAs: ['Desi Lounge', 'Bollywood Sports Bar'],
  overlapsWith: ['sports-bar', 'cultural-restaurant'],
  keyDifferences: [
    {
      comparedTo: 'sports-bar',
      differences: [
        'Focuses on Cricket, Kabaddi, and F1 alongside US sports',
        'Menu features regional Desi cuisine (Biryani, Chicken 65)',
        'Late-night transitions often involve Bollywood/Tollywood DJs'
      ]
    }
  ],
  idealFor: [
    'Cricket fans',
    'People wanting cultural fusion',
    'Solo diners who enjoy spicy food and sports',
    'Late-night socializers'
  ],
  pressureProfile: {
    level: 'medium',
    source: 'Can be very loud and crowded during major matches (India vs Pakistan)',
    mitigationTips: [
      'Focus on the food if the social energy is too high',
      'Join the communal cheering to feel part of the group',
      'Visit during weekday lunch for a quieter experience'
    ]
  },
  socialStructure: {
    soloFriendliness: 'high',
    whySoloFriendly: 'Similar to sports bars, the focus is on the screens and the meal',
    groupDynamics: 'Large family and friend groups are common, but bar seating is solo-friendly',
    conversationFocus: 'Match scores, player performance, and spice levels'
  },
  touchProfile: {
    level: 'none',
    type: 'cultural',
    consentCulture: 'Traditional personal space norms',
    boundaries: ['Respect communal dining areas']
  },
  tips: [
    'Ask the bartender to put on a specific cricket match if it isn\'t on',
    'Be prepared for high noise levels during big matches',
    'Try the fusion cocktails (e.g., Masala Margarita)'
  ],
  commonMyths: [
    'It\'s only for people of Indian descent (all are welcome and encouraged)',
    'It\'s just a restaurant (many are full-fledged social lounges)'
  ],
  redFlags: [
    'Unlabeled spice levels that lead to unpleasant surprises',
    'Discriminatory door policies or "cliquish" atmosphere'
  ],
  // ADD THE MISSING DETAILED FIELDS:
  touchDetails: {
    howPeopleTouch: [],
    proximityLevel: 2,
    initiation: 'N/A - minimal touch culture',
    whyNoTouch: 'Cultural norms emphasize respectful distance in public settings'
  },
  soloTips: {
    howToGoSolo: [
      'Ask about cricket matches being shown',
      'Try the lunch specials for lower prices',
      'Sit at bar for easiest interaction'
    ],
    bestPosition: 'Bar seating or small table',
    escapePlan: 'Finish meal and leave naturally',
    forTravelers: 'Ask for recommendations on local Indian restaurants'
  },
  logistics: {
    ticketSources: ['At the door'],
    parking: {
      type: 'mixed',
      details: 'Often in ethnic enclaves with busy parking'
    },
    alcohol: {
      likelihood: 'medium',
      priceLevel: 3,
      byoAllowed: false
    }
  },
  seasonalPricing: {
    cheaperMonths: ['Weekday lunches'],
    expensiveMonths: ['Weekend nights', 'During cricket world cup'],
    priceNotes: 'Weekend buffet pricing may be higher'
  },
  nicheWorld: {
    unwrittenRules: [
      'Be open to trying new foods',
      'Respect cultural celebrations during matches',
      'Ask before joining celebrations if unfamiliar'
    ],
    socialCurrency: ['Cricket knowledge', 'Spice tolerance', 'Cultural awareness'],
    entryBarriers: ['Cultural familiarity', 'Spice preferences'],
    tabooTopics: ['Political discussions about India/Pakistan']
  }
};