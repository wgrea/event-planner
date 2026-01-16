import type { SocialEventType } from '$lib/types/event';

export const karaokeNight: SocialEventType = {
    id: 'karaoke-night',
    name: 'Karaoke Night',
    category: 'bar-events',
    properties: ['performance', 'vocal', 'loud', 'high-energy'],
    alsoKnownAs: ['Sing-along', 'KJ Night'],
    overlapsWith: ['music-performance', 'entertainment-comedy'],
    keyDifferences: [
      {
        comparedTo: 'music-performance',
        differences: [
          'The audience is the performer',
          'Low barrier to entry; bad singing is often celebrated',
          'Highly interactive through cheering and sing-alongs'
        ]
      }
    ],
    idealFor: [
      'Extroverts',
      'People who want "social invisibility" (being in a dark, loud crowd)',
      'Groups of friends',
      'Soloists with a "go-to" song'
    ],
    pressureProfile: {
      level: 'high',
      source: 'Public performance and potential stage fright',
      mitigationTips: [
        'Pick a "crowd-pleaser" song that people will sing along to',
        'Drink plenty of water (or a "liquid courage" drink)',
        'Remember that karaoke crowds are usually the most supportive'
      ]
    },
    socialStructure: {
      soloFriendliness: 'moderate',
      whySoloFriendly: 'You can watch the show solo comfortably; performing is a high-risk/high-reward social icebreaker',
      groupDynamics: 'Vocal, rowdy, and communal; strangers often high-five after a song',
      conversationFocus: 'Song choices, vocal talent (or lack thereof), and music nostalgia'
    },
    touchProfile: {
      level: 'low',
      type: 'social',
      consentCulture: 'Incidental high-fives or shoulder pats in crowded singing areas',
      boundaries: ['Don\'t grab the mic from someone else', 'Stay out of the "stage" area if you aren\'t performing']
    },
    tips: [
      'Get your song slip in early; the waitlist gets long',
      'Tip the Karaoke Jockey (KJ) if you want a better spot in the rotation',
      'Pick a song in your vocal range'
    ],
    commonMyths: [
      'You have to be a good singer (the best karaoke singers are often the ones having the most fun)',
      'People will judge you (most people are just waiting for their turn)'
    ],
    redFlags: [
      'A KJ who only lets their friends sing',
      'A crowd that boos performers',
      'Technical issues like broken mics or unreadable screens'
    ]
};