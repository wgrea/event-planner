// src/lib/data/socialEventTypes/categories/specialty-bars.ts
import type { SocialEventType } from '$lib/types/event';

export const cigarLounge: SocialEventType = {
    id: 'cigar-lounge',
    name: 'Cigar Lounge',
    category: 'nightlife',
    properties: ['quiet', 'upscale', 'passive-social', 'relaxed'],
    alsoKnownAs: ['Humidor Lounge', 'Smoke Shop'],
    overlapsWith: ['professional-networking', 'nightlife-hifi-bar'],
    keyDifferences: [
      {
        comparedTo: 'professional-networking',
        differences: [
          'Socializing is slower and completely optional',
          'Atmosphere is built for relaxation, not "hustle"',
          'Heavy focus on the sensory experience of the tobacco'
        ]
      }
    ],
    idealFor: [
      'Solo introverts',
      'People who enjoy slow-paced environments',
      'Business people seeking a quiet "third place"',
      'Sensory enthusiasts'
    ],
    pressureProfile: {
      level: 'none',
      source: 'Zero - sitting in silence is the intended experience',
      mitigationTips: [
        'Bring a book, tablet, or newspaper',
        'Ask the tobacconist for a recommendation to start a low-key chat',
        'Sit in a corner if you want absolute privacy'
      ]
    },
    socialStructure: {
      soloFriendliness: 'high',
      whySoloFriendly: 'The culture is built around individual reflection and slow enjoyment',
      groupDynamics: 'Whispered conversations in plush leather chairs; very respectful of privacy',
      conversationFocus: 'Cigar notes, whiskey pairings, and current events'
    },
    touchProfile: {
      level: 'none',
      type: 'social',
      consentCulture: 'High respect for personal space',
      boundaries: ['Don\'t blow smoke toward others', 'Don\'t handle someone else\'s cigar']
    },
    tips: [
      'Dress slightly up (business casual is standard)',
      'Don\'t "ash" your cigar too frequently; let it fall naturally',
      'Support the house by buying a cigar from their humidor'
    ],
    commonMyths: [
      'It’s an "old boys club" (modern lounges are becoming much more inclusive)',
      'You have to be a cigar expert (staff love to teach beginners)'
    ],
    redFlags: [
      'Poor ventilation leading to an unbreathable room',
      'Elitist attitudes toward beginners',
      'Unclean ash trays or seating'
    ]
};

export const hifiListeningBar: SocialEventType = {
    id: 'hifi-listening-bar',
    name: 'Hi-Fi Listening Bar',
    category: 'nightlife',
    properties: ['audiophile', 'minimal-talking', 'intimate', 'refined'],
    alsoKnownAs: ['Jazz Kissa', 'Vinyl Bar'],
    overlapsWith: ['music-performance', 'nightlife-cigar-lounge'],
    keyDifferences: [
      {
        comparedTo: 'music-performance',
        differences: [
          'Focus is on the recorded audio quality and vinyl selection',
          'Talking is actively discouraged or kept to a whisper',
          'The DJ is a curator, not necessarily an entertainer'
        ]
      }
    ],
    idealFor: [
      'Solo music lovers',
      'Introverts who want to be "out" but not "on"',
      'Audiophiles',
      'Deep thinkers'
    ],
    pressureProfile: {
      level: 'very low',
      source: 'The "no talking" rule removes all social performance pressure',
      mitigationTips: [
        'Close your eyes and listen; it’s encouraged',
        'Look at the album art if it’s displayed near the booth',
        'Order a drink that takes time to sip (old fashioned, neat spirit)'
      ]
    },
    socialStructure: {
      soloFriendliness: 'high',
      whySoloFriendly: 'Being alone is the best way to experience the high-fidelity sound',
      groupDynamics: 'Individual units sharing a synchronized auditory experience',
      conversationFocus: 'None during the music; whispering during transitions'
    },
    touchProfile: {
      level: 'none',
      type: 'social',
      consentCulture: 'Intimate but strictly non-physical',
      boundaries: ['Do not touch the audio equipment or records', 'Keep your voice extremely low']
    },
    tips: [
      'Don\'t go with a group that wants to chat loudly',
      'Research the "vibe" of the music they play before going',
      'Put your phone away to fully immerse in the sound'
    ],
    commonMyths: [
      'It’s pretentious (it’s actually just about the love of sound)',
      'It’s only for jazz fans (many play soul, disco, or ambient)'
    ],
    redFlags: [
      'Poorly maintained sound system (distortion or clipping)',
      'Staff not enforcing the "quiet" atmosphere'
    ]
};

export const barcade: SocialEventType = {
    id: 'barcade',
    name: 'Barcade',
    category: 'nightlife',
    properties: ['gaming', 'retro', 'activity-based', 'nostalgic'],
    alsoKnownAs: ['Arcade Bar', 'Retro Lounge'],
    overlapsWith: ['gaming-tournament', 'nightlife-dive-bar'],
    keyDifferences: [
      {
        comparedTo: 'nightlife-dive-bar',
        differences: [
          'The primary draw is vintage arcade cabinets and pinball',
          'Socializing happens around games rather than just sitting',
          'Bright, neon-lit aesthetic compared to dim taverns'
        ]
      }
    ],
    idealFor: [
      'Solo gamers',
      'People who need a "task" to feel comfortable in public',
      'Nostalgia seekers',
      'Low-pressure socializers'
    ],
    pressureProfile: {
      level: 'low',
      source: 'Minimal - your focus is on the game, not the people',
      mitigationTips: [
        'Bring plenty of quarters or check if it’s "free play" day',
        'Use high scores as a conversation starter',
        'Play single-player games if you aren\'t feeling social'
      ]
    },
    socialStructure: {
      soloFriendliness: 'high',
      whySoloFriendly: 'Gaming is a self-contained solo activity that looks natural in this setting',
      groupDynamics: 'Clusters around popular cabinets; casual "challenger" culture',
      conversationFocus: 'Game mechanics, high scores, and retro pop culture'
    },
    touchProfile: {
      level: 'low',
      type: 'social',
      consentCulture: 'Incidental shoulder-brushing in tight arcade aisles',
      boundaries: ['Don\'t hover too closely while someone is mid-game', 'Ask before joining a multi-player game']
    },
    tips: [
      'Look for the "drink holders" on the machines to avoid spills',
      'Check for tournament nights if you want more structure',
      'Visit on weeknights for easier access to popular games'
    ],
    commonMyths: [
      'You have to be a "gamer" (many people just enjoy the lights and music)',
      'It\'s for kids (most barcades are strictly 21+)'
    ],
    redFlags: [
      'Broken joysticks or buttons on multiple machines',
      '"Screen-peeking" or aggressive "quarter-hanging" (claiming machines)'
    ]
};