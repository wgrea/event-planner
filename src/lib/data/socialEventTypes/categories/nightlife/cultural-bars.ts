// src/lib/data/socialEventTypes/categories/nightlife/cultural-bars.ts
import type { SocialEventType } from '$lib/types/event';

export const latinBar: SocialEventType = {
  id: 'latin-social-bar',
  name: 'Latin Bar & Kitchen',
  category: 'nightlife',
  properties: ['vibrant', 'cultural', 'hybrid-venue', 'dance-focused'],
  alsoKnownAs: ['Cantina', 'Tequila Bar', 'Salsa Club'],
  overlapsWith: ['dance-salsa-class', 'cultural-festival'],
  keyDifferences: [
    {
      comparedTo: 'dance-salsa-class',
      differences: [
        'Transition from dining to dancing occurs mid-evening',
        'Less instruction-focused, more about social application',
        'Higher focus on premium spirits and specialized cuisine'
      ]
    }
  ],
  idealFor: [
    'People who enjoy high-energy environments',
    'Solo visitors who want to "disappear" in a crowd',
    'Couples and groups',
    'Latin culture enthusiasts'
  ],
  pressureProfile: {
    level: 'high',
    source: 'Energy-based - high volume, dancing, and social "performance" expectations',
    mitigationTips: [
      'Visit during dinner hours for a low-pressure bar experience',
      'Use the patio for a "reset" if the music becomes too intense',
      'Stand near the bar if you aren\'t ready to dance'
    ]
  },
  socialStructure: {
    soloFriendliness: 'moderate',
    whySoloFriendly: 'High energy allows for social invisibility; bar seating provides a safe spectator spot',
    groupDynamics: 'Heavy on groups/pairs, but the dance floor acts as a communal melting pot',
    conversationFocus: 'The music, the drinks (tequila/whiskey), and dance requests'
  },
  touchProfile: {
    level: 'high',
    type: 'cultural',
    consentCulture: 'High incidental touch on dance floors; ask before dancing with a stranger',
    boundaries: ['Ask for a dance verbally or with a clear hand gesture', 'Respect a "no" without hesitation']
  },
  tips: [
    'Check the dress code; these venues are often dressier than dive bars',
    'Arrive early to secure a bar stool before the dance floor expands',
    'Try the signature tequila flights if you want to engage the bartender'
  ],
  commonMyths: [
    'You have to be a pro dancer to join in (most people are there for fun)',
    'Solo visitors will stand out (the room is usually too dark/loud for that)'
  ],
  redFlags: [
    'Over-aggressive "promoters" or bouncers',
    'A dance floor that feels unsafe or overcrowded',
    'Drink prices not clearly listed'
  ]
};

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
  ]
};

export const irishPub: SocialEventType = {
  id: 'irish-pub',
  name: 'Irish Pub',
  category: 'nightlife',
  properties: ['communal', 'traditional', 'warm', 'wood-centric'],
  alsoKnownAs: ['Public House', 'Tavern'],
  overlapsWith: ['nightlife-dive-bar', 'social-bar-hang'],
  keyDifferences: [
    {
      comparedTo: 'nightlife-dive-bar',
      differences: [
        'More emphasis on "the craic" (social conversation)',
        'Heavier focus on traditional Irish spirits and stouts',
        'Warmer, more "living room" feel with wood and brass'
      ]
    }
  ],
  idealFor: [
    'Solo travelers',
    'People who enjoy storytelling',
    'Fans of live acoustic music',
    'Community seekers'
  ],
  pressureProfile: {
    level: 'low',
    source: 'The "public house" philosophy encourages casual, low-pressure chatting',
    mitigationTips: [
      'Sit at the bar; it\'s the most social spot',
      'Ask about the history of the pub or the decor',
      'Order a Guinness and take your time; it\'s a slow-pour culture'
    ]
  },
  socialStructure: {
    soloFriendliness: 'high',
    whySoloFriendly: 'Historically built as a "living room" for the public; solo guests are standard',
    groupDynamics: 'Fluid and communal; tables are often shared in busy times',
    conversationFocus: 'Storytelling, humor, music, and the neighborhood'
  },
  touchProfile: {
    level: 'low',
    type: 'social',
    consentCulture: 'Friendly, warm environment with occasional handshakes',
    boundaries: ['Respect personal space in crowded "snugs"']
  },
  tips: [
    'Look for the "Snug"—a small, semi-private area—if you want more privacy',
    'Check for "Session" nights where musicians sit in a circle and play',
    'Don\'t rush the bartender during a Guinness pour'
  ],
  commonMyths: [
    'It\'s just for St. Patrick\'s Day (these are year-round community anchors)',
    'You have to drink beer (Irish whiskey and tea are equally valid)'
  ],
  redFlags: [
    'Corporate "theme park" versions that lack local character',
    'Unfriendly staff who don\'t acknowledge solo guests'
  ]
};

export const bollywoodClub: SocialEventType = {
  id: 'bollywood-club-night',
  name: 'Bollywood Club Night',
  category: 'nightlife',
  properties: ['high-energy', 'dance-focused', 'loud', 'vibrant'],
  alsoKnownAs: ['Desi Night', 'Bhangra Night', 'Tamasha'],
  overlapsWith: ['latin-social-bar', 'music-performance'],
  keyDifferences: [
    {
      comparedTo: 'latin-social-bar',
      differences: [
        'Music is centered on South Asian pop and film soundtracks',
        'Dancing often involves more "group-sing-along" energy than partner work',
        'Often features specific "Tollywood" or "Bhangra" sets'
      ]
    }
  ],
  idealFor: [
    'High-energy dancers',
    'Solo visitors who want to "disappear" in a crowd',
    'Fans of South Asian pop culture',
    'Late-night party seekers'
  ],
  pressureProfile: {
    level: 'medium',
    source: 'Energy-based - very loud and fast-paced environment',
    mitigationTips: [
      'Use the bar or lounge area as a "base" to watch the energy first',
      'Wear comfortable shoes; these events often last until 3:00 AM',
      'If you don\'t know the choreography, just move to the beat—enthusiasm is more important than skill'
    ]
  },
  socialStructure: {
    soloFriendliness: 'high',
    whySoloFriendly: 'Massive, dark, loud dance floors provide excellent "social invisibility"',
    groupDynamics: 'Large friend groups celebrating, but the dance floor acts as a unified mass',
    conversationFocus: 'None (too loud); limited to shouting about the track being played'
  },
  touchProfile: {
    level: 'moderate',
    type: 'social',
    consentCulture: 'High-energy crowded floor; incidental contact is common',
    boundaries: ['Respect personal space when performing large dance moves', 'Standard club consent applies']
  },
  tips: [
    'Check the dress code; Chicago Bollywood nights are often "dress to impress"',
    'Look for "Early Bird" tickets on Eventbrite to save money',
    'Arrive after 11:00 PM for the peak "invisible crowd" experience'
  ],
  commonMyths: [
    'You need to know how to dance like a movie star (everyone is just there to vibe)',
    'You have to be South Asian to attend (these events are very inclusive of all music lovers)'
  ],
  redFlags: [
    'Venues that don\'t have a clear "quiet" zone or patio to escape the volume',
    'Lack of security at a high-capacity event'
  ]
};