import type { SocialEventType } from '$lib/types/event';

export const musicEvents: SocialEventType[] = [
  {
    id: 'music-rave',
    name: 'Rave / Electronic Music Event',
    category: 'music',
    properties: ['music-centric', 'high-energy', 'solo-friendly', 'PLUR-culture'],
    alsoKnownAs: ['EDM Festival', 'Warehouse Party', 'DJ Night'],
    overlapsWith: ['music-concert', 'club-night'],
    keyDifferences: [
      {
        comparedTo: 'club-night',
        differences: [
          'Raves focus on music appreciation, clubs on socializing',
          'Rave culture emphasizes PLUR (Peace, Love, Unity, Respect)',
          'Clubs often have dress codes, raves prioritize comfort'
        ]
      }
    ],
    idealFor: ['People who want to be social without talking', 'Music enthusiasts', 'Those wanting collective euphoric experience', 'Solo adventurers'],
    pressureProfile: {
      level: 'low',
      source: 'Minimal - music is the main event, no performance expectations',
      mitigationTips: [
        'Earplugs reduce sensory overload',
        'Find a spot where you can see the DJ (gives you a focus point)',
        'Remember: everyone is focused on their own experience'
      ]
    },
    socialStructure: {
      soloFriendliness: 'high',
      whySoloFriendly: 'You can dance alone all night; "adoption" by groups is common',
      groupDynamics: 'Fluid - people flow through space, brief connections form and dissolve',
      conversationFocus: 'Music, DJs, light shows, festivals (shouted compliments)'
    },
    touchProfile: {
      level: 'low',
      type: 'spontaneous',
      consentCulture: 'Brief, celebratory touch (high-fives, shoulder touches); respectful of personal space',
      boundaries: ['Hugs often initiated with eye contact first', 'Massage trains are consensual']
    },
    tips: [
      'Hydrate pack is your best friend',
      'Comfortable shoes you can stand/dance in for hours',
      'Kandi bracelets to trade (instant icebreaker)',
      'Arrive early to explore venue before crowds'
    ],
    commonMyths: [
      'Everyone is on drugs (false - many attend sober)',
      'It\'s only for young people (all ages attend)',
      'You must dance expertly (no one is watching you)'
    ],
    redFlags: [
      'Pushy people invading personal space',
      'Overly aggressive dancing',
      'Venue with poor sightlines/exits'
    ]
  },
  {
    id: 'concert-festival',
    name: 'Concert or Music Festival',
    category: 'music',
    properties: ['performance-focused', 'crowd-energy', 'shared-experience', 'atmospheric'],
    alsoKnownAs: ['Live Music', 'Show', 'Gig', 'Fest'],
    overlapsWith: ['music-rave', 'entertainment-cinema'],
    keyDifferences: [
        {
        comparedTo: 'music-rave',
        differences: [
            'More varied music genres',
            'Often daytime/outdoor events',
            'Less emphasis on dance culture, more on appreciation'
        ]
        }
    ],
    idealFor: [
        'Music enthusiasts',
        'People who enjoy crowd energy',
        'Those who want shared experiences without conversation pressure',
        'Solo attendees who don\'t want to stand out'
    ],
    pressureProfile: {
        level: 'low',
        source: 'Minimal - music is the main event, no social expectations',
        mitigationTips: [
        'Research the venue layout beforehand',
        'Find a spot where you can see the stage comfortably',
        'Use ear protection to reduce sensory overload'
        ]
    },
    socialStructure: {
        soloFriendliness: 'high',
        whySoloFriendly: 'You can stand alone enjoying the music; no one questions it',
        groupDynamics: 'Crowd mentality with individual enjoyment; brief connections form',
        conversationFocus: 'The music, performers, sound quality, light shows (shouted compliments)'
    },
    touchProfile: {
        level: 'low',
        type: 'spontaneous',
        consentCulture: 'Crowd contact is common; celebratory touches accepted',
        boundaries: ['Respect personal space in crowd', 'Brief celebratory contact only']
    },
    tips: [
        'Check if single-day tickets are available for festivals',
        'Arrive early to explore and get comfortable',
        'Bring essentials (water, phone charger, cash)',
        'Don\'t be afraid to move around if your spot isn\'t working'
    ],
    commonMyths: [
        'You need to know all the songs (many go just for the experience)',
        'It\'s only for extroverts (perfect for introverts who love music)',
        'Expensive (many free or low-cost concerts available)'
    ],
    redFlags: [
        'Overly crowded unsafe conditions',
        'Poor security presence',
        'Excessive pushing in crowds'
    ]
    },
];