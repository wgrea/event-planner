// src/lib/data/socialEventTypes/categories/music/concert-festival.ts
import type { SocialEventType } from '$lib/types/event';

export const concertFestival: SocialEventType = {
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
  ],
  logistics: {
    ticketSources: ['Ticketmaster', 'Eventbrite', 'Venue website'],
    parking: {
      type: 'mixed',
      details: 'Venue parking $20-40, street parking difficult'
    },
    transit: 'Check venue for shuttle services',
    alcohol: {
      likelihood: 'medium',
      priceLevel: 4,
      byoAllowed: false
    }
  }
};