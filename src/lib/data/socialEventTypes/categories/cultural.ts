import type { SocialEventType } from '$lib/types/event';

export const culturalEvents: SocialEventType[] = [
  {
    id: 'cultural-events',
    name: 'Cultural Events & Festivals',
    category: 'cultural',
    properties: ['educational', 'artistic', 'community-focused', 'diverse', 'tradition-based', 'multigenerational'],
    alsoKnownAs: ['Cultural Festivals', 'Heritage Events', 'Ethnic Celebrations', 'Multicultural Gatherings'],
    overlapsWith: [], // Leave empty or add existing event IDs you have
    keyDifferences: [],
    idealFor: [
      'People interested in learning about different cultures',
      'Those who enjoy traditional arts, music, and food',
      'Families looking for educational experiences',
      'Travelers wanting local cultural immersion',
      'Individuals celebrating their own heritage'
    ],
    pressureProfile: {
      level: 'low',
      source: 'Low - Focus is on observation and learning; participation often optional',
      mitigationTips: [
        'Research the culture/event beforehand for context',
        'Start as observer before participating in activities',
        'Ask respectful questions about traditions',
        'Follow cultural norms and dress codes when applicable'
      ]
    },
    socialStructure: {
      soloFriendliness: 'high',
      whySoloFriendly: 'Can enjoy as spectator; many activities are individual or observation-based',
      groupDynamics: 'Mix of family groups, cultural communities, and individual attendees; often welcoming',
      conversationFocus: 'Cultural traditions, history, art forms, food, personal connections to culture'
    },
    touchProfile: {
      level: 'varies',
      type: 'cultural',
      consentCulture: 'Varies by culture; observe and ask when uncertain',
      boundaries: [
        'Respect cultural norms around personal space',
        'Ask before participating in physical rituals',
        'Be aware of gender-based touch restrictions in some cultures'
      ]
    },
    tips: [
      'Research cultural norms and appropriate dress beforehand',
      'Try traditional foods respectfully (ask about ingredients if dietary restrictions)',
      'Ask questions to learn rather than make assumptions',
      'Participate in activities but follow community leaders\' cues',
      'Consider bringing children for educational experience (check age appropriateness)'
    ],
    commonMyths: [
      'You need to be from that culture to attend (most are open to all)',
      'Cultural events are always serious/formal (many are celebratory and fun)',
      'You must participate in everything (observation is usually welcome)'
    ],
    redFlags: [
      'Cultural appropriation rather than appreciation',
      'Lack of respect for sacred/religious elements',
      'Commercialization overshadowing cultural significance'
    ]
  }
];