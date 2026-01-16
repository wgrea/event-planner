import type { SocialEventType } from '$lib/types/event';

export const diveBar: SocialEventType = {
    id: 'dive-bar',
    name: 'Dive Bar',
    category: 'nightlife',
    properties: ['casual', 'low-cost', 'local', 'bar-counter-centric'],
    alsoKnownAs: ['Neighborhood Tavern', 'Local Hole-in-the-Wall'],
    overlapsWith: ['social-pub-hang', 'casual-dining'],
    keyDifferences: [
      {
        comparedTo: 'social-pub-hang',
        differences: [
          'More emphasis on "regulars" and local history',
          'Dimmer lighting and minimal decor/aesthetic effort',
          'Often cash-only or very limited cocktail menus'
        ]
      }
    ],
    idealFor: [
      'Solo drinkers',
      'Introverts seeking a "third place"',
      'People who hate dress codes',
      'Those seeking high social invisibility'
    ],
    pressureProfile: {
      level: 'very low',
      source: 'Minimal - zero expectation of networking or "performance"',
      mitigationTips: [
        'Sit at the bar counter to blend in with regulars',
        'Bring a book or use your phone; it is socially acceptable here',
        'Order simple drinks (beer/well shots) to match the vibe'
      ]
    },
    socialStructure: {
      soloFriendliness: 'high',
      whySoloFriendly: 'The bar counter is designed for individuals; reading or staring at the TV is standard behavior',
      groupDynamics: 'Informal clusters of regulars; very easy to be near others without interacting',
      conversationFocus: 'Local news, sports on TV, casual complaints, or silence'
    },
    touchProfile: {
      level: 'none',
      type: 'social',
      consentCulture: 'Standard personal space norms apply',
      boundaries: ['Respect the "regular\'s chair" if someone is known to sit there', 'Avoid unwanted physical contact in tight spaces']
    },
    tips: [
      'Bring cash just in case',
      'Be polite to the bartender—they are the gatekeeper of the vibe',
      'Don\'t expect a fancy food menu; usually just chips or frozen pizza'
    ],
    commonMyths: [
      'Dive bars are dangerous (most are very safe neighborhood anchors)',
      'You have to be a heavy drinker (many people go just for the atmosphere/soda)'
    ],
    redFlags: [
      'Unwelcoming "stare-downs" from regulars when you enter',
      'Bartenders who ignore new customers entirely',
      'Poorly maintained facilities that cross from "gritty" to "unsanitary"'
    ]
};