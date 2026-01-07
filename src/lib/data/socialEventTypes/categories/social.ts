import type { SocialEventType } from '$lib/types/event';

export const socialEvents: SocialEventType[] = [
  {
    id: 'potluck-dinner',
    name: 'Potluck / Private Dinner Party',
    category: 'social',
    properties: ['home-setting', 'food-focused', 'invitation-based', 'intimate'],
    alsoKnownAs: ['Dinner Party', 'Food Gathering', 'Home Social'],
    overlapsWith: ['casual-coffee', 'book-club'],
    keyDifferences: [
      {
        comparedTo: 'book-club',
        differences: [
          'More social than activity-focused',
          'Typically in private homes rather than public spaces',
          'Less structured conversation flow'
        ]
      }
    ],
    idealFor: [
      'People comfortable in intimate settings',
      'Food enthusiasts',
      'Those with established social connections to host',
      'People who enjoy home gatherings'
    ],
    pressureProfile: {
      level: 'medium',
      source: 'Medium - intimate setting with established social groups; can feel like "crashing" if solo',
      mitigationTips: [
        'Ask host about other guests beforehand',
        'Bring a dish to share (gives you purpose and conversation topic)',
        'Offer to help with setup/cleanup',
        'Arrive slightly early to connect with host before crowd arrives'
      ]
    },
    socialStructure: {
      soloFriendliness: 'low',
      whySoloFriendly: 'Often based on existing friend groups; solo attendance requires host introduction/integration',
      groupDynamics: 'Intimate, conversational; may involve established inside jokes/references',
      conversationFocus: 'Food, recipes, personal updates, shared interests, light topics'
    },
    touchProfile: {
      level: 'low',
      type: 'familiar',
      consentCulture: 'Friendly hugs common among acquaintances; handshakes for new connections',
      boundaries: ['Follow host/group norms', 'Respect personal space in crowded settings']
    },
    tips: [
      'Ask host what to bring (specific dish or category)',
      'Prepare a brief self-introduction for new people',
      'Circulate rather than clinging to one person',
      'Offer to help in kitchen (natural way to connect)',
      'Have an exit strategy if feeling overwhelmed'
    ],
    commonMyths: [
      'You need to be an excellent cook (store-bought items are fine)',
      'Only extroverts enjoy dinner parties (many introverts prefer small gatherings)',
      'You must stay the entire time (leaving early with thanks is acceptable)'
    ],
    redFlags: [
      'Host doesn\'t introduce you to others',
      'Cliquish behavior excluding newcomers',
      'Uncomfortable pressure to drink/eat more than desired'
    ]
  },
  // Bar Crawls
  {
    id: 'bar-crawls',
    name: 'Bar Crawls / Pub Crawls',
    category: 'social',
    properties: ['alcohol-focused', 'nightlife', 'group-oriented', 'itinerary-based', 'drinking-games'],
    alsoKnownAs: ['Pub Crawls', 'Bar Hopping', 'Drinking Tours'],
    overlapsWith: [], // Add existing social event IDs
    keyDifferences: [],
    idealFor: [
      'People who enjoy nightlife and drinking culture',
      'Those comfortable in loud, crowded environments',
      'Social drinkers looking to meet new people',
      'Tourists wanting to explore local bar scene'
    ],
    pressureProfile: {
      level: 'medium',
      source: 'Medium - Alcohol lowers inhibitions but creates social pressure to drink; large groups can be overwhelming',
      mitigationTips: [
        'Set drinking limits beforehand',
        'Pace yourself with water between drinks',
        'Have an exit strategy if uncomfortable',
        'Consider attending with a sober or moderate-drinking friend'
      ]
    },
    socialStructure: {
      soloFriendliness: 'moderate',
      whySoloFriendly: 'Can join organized crawls alone but may feel pressure to keep up with group drinking',
      groupDynamics: 'Often loud and boisterous; subgroups form naturally; conversation flows with alcohol',
      conversationFocus: 'Drinks, music, bar atmosphere, travel stories, light social topics'
    },
    touchProfile: {
      level: 'moderate',
      type: 'social',
      consentCulture: 'Varies with alcohol consumption; boundaries may blur as night progresses',
      boundaries: [
        'Be aware of alcohol affecting consent perception',
        'Respect personal space in crowded bars',
        'Clear verbal consent for any intimate contact'
      ]
    },
    tips: [
      'Eat a substantial meal before starting',
      'Bring cash for easier transactions at multiple bars',
      'Wear comfortable shoes for walking between venues',
      'Stay with the group for safety',
      'Know your limits and don\'t feel pressured to match others\' drinking pace'
    ],
    commonMyths: [
      'You have to drink alcohol (many welcome non-drinkers)',
      'It\'s only for young people (all ages participate)',
      'You must visit every bar on the crawl (people drop in/out)'
    ],
    redFlags: [
      'Organizers encouraging excessive drinking',
      'Unsafe neighborhoods on the route',
      'Lack of safety measures for intoxicated participants'
    ]
  },

  // Expat/Nomad Meetups
  {
    id: 'expat-nomad-meetups',
    name: 'Expat & Digital Nomad Meetups',
    category: 'social',
    properties: ['travel-focused', 'international', 'networking', 'supportive', 'location-independent'],
    alsoKnownAs: ['Digital Nomad Gatherings', 'Expatriate Socials', 'Location Independent Meetups'],
    overlapsWith: [], // Add existing social or professional event IDs
    keyDifferences: [],
    idealFor: [
      'Expats living in new countries',
      'Digital nomads and remote workers',
      'Travelers staying in locations medium-to-long term',
      'People interested in international living',
      'Those seeking community while away from home'
    ],
    pressureProfile: {
      level: 'low',
      source: 'Low - Shared expat/nomad experience creates instant common ground; typically welcoming to newcomers',
      mitigationTips: [
        'Lead with your travel/living abroad story',
        'Ask others about their journey and experiences',
        'Attend regular meetups to build familiarity'
      ]
    },
    socialStructure: {
      soloFriendliness: 'high',
      whySoloFriendly: 'Designed for people who are often alone in new places; very welcoming to solo attendees',
      groupDynamics: 'Open and inclusive; people share experiences and advice; often includes newcomers each time',
      conversationFocus: 'Travel experiences, visa issues, cultural differences, remote work, housing, local tips'
    },
    touchProfile: {
      level: 'low',
      type: 'cultural',
      consentCulture: 'International mix means varying norms; observe and follow local/group customs',
      boundaries: [
        'Be aware of cultural differences in touch',
        'Follow lead of regular attendees',
        'Respect international diversity of comfort levels'
      ]
    },
    tips: [
      'Bring business cards or contact info (digital nomads network professionally too)',
      'Share your best local discoveries',
      'Ask about others\' favorite travel destinations',
      'Be open about challenges of living abroad',
      'Follow up with people you connect with (important in transient communities)'
    ],
    commonMyths: [
      'Only for wealthy travelers (wide range of budgets represented)',
      'You need to be fully location-independent (expats with local jobs welcome)',
      'It\'s all about complaining about the host country (usually positive sharing)'
    ],
    redFlags: [
      'Cliquish behavior excluding newcomers',
      'Predatory business pitches targeting nomads',
      'Lack of diversity in nationalities/backgrounds'
    ]
  }
];