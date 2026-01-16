// src/lib/data/socialEventTypes/categories/music/rave.ts
import type { SocialEventType } from '$lib/types/event';

export const rave: SocialEventType = {
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
  idealFor: [
    'People who want to be social without talking',
    'Music enthusiasts',
    'Those wanting collective euphoric experience',
    'Solo adventurers'
  ],
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
  ],
  touchDetails: {
    howPeopleTouch: [
      'High-fives during drops',
      'Shoulder taps for passing',
      'Group hugs during emotional songs',
      'Hand-holding in chill-out areas'
    ],
    proximityLevel: 4,
    initiation: 'Spontaneous celebratory touch during peak moments',
    whyNoTouch: 'N/A - celebratory touch expected'
  },
  soloTips: {
    howToGoSolo: [
      'Make kandi bracelets to trade (instant connection)',
      'Find a spot with good view of DJ to focus on music',
      'Use hydration breaks to meet people at water stations',
      'Join group dances like "shuffle circles"'
    ],
    bestPosition: 'Near the back or sides for personal space',
    escapePlan: 'Chill-out room or outside smoking area'
  },
  logistics: {
    ticketSources: ['RA Guide', 'Eventbrite', 'Resident Advisor'],
    parking: {
      type: 'difficult',
      details: 'Warehouse districts often lack parking'
    },
    transit: 'Ride-share recommended',
    alcohol: {
      likelihood: 'medium',
      priceLevel: 4,
      byoAllowed: false
    }
  },
  nicheWorld: {
    unwrittenRules: [
      'PLUR: Peace, Love, Unity, Respect',
      'Ask before taking photos of people',
      'Share water with strangers',
      'Don\'t push through crowds'
    ],
    socialCurrency: ['Good vibes', 'Unique outfits', 'Dance skills', 'Kandi creations'],
    entryBarriers: ['Ticket price', 'Location knowledge', 'Late hours'],
    tabooTopics: ['Asking about drugs', 'Negative energy']
  }
};