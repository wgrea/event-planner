// src/lib/data/socialEventTypes/categories/bar-events/dance-lessons-bar.ts
import type { SocialEventType } from '$lib/types/event';

export const danceLessonsBar: SocialEventType = {
  id: 'dance-lessons-bar',
  name: 'Structured Dance Lessons',
  category: 'bar-events',  // ✅ CORRECT - provide value
  properties: ['active', 'skill-based', 'structured', 'partner-rotation'],  // ✅ CORRECT - provide array
  alsoKnownAs: ['Salsa Night Lessons', 'Swing Class', 'Bachata Workshop'],  // ✅ CORRECT - provide array
  overlapsWith: ['dance-salsa-class', 'movement-fitness'],  // ✅ CORRECT - provide array
  keyDifferences: [  // ✅ CORRECT - provide array of objects
    {
      comparedTo: 'dance-salsa-class',
      differences: [
        'Takes place in a social venue rather than a sterile studio',
        'Transition into a real social dance party immediately follows',
        'More casual atmosphere with drinks available'
      ]
    }
  ],
  idealFor: [  // ✅ CORRECT - provide array
    'Solo visitors',
    'People wanting to meet others physically and socially',
    'Beginners with no rhythm',
    'Those who enjoy structure before a party'
  ],
  pressureProfile: {  // ✅ CORRECT - provide object
    level: 'medium',
    source: 'Physical coordination and rotating to new partners frequently',
    mitigationTips: [
      'Remember that everyone else is also learning',
      'Focus on your own footwork before worrying about the partner',
      'Laugh off mistakes; they are the best icebreakers'
    ]
  },
  socialStructure: {  // ✅ CORRECT - provide object
    soloFriendliness: 'high',
    whySoloFriendly: 'Instructor-led partner rotation means you meet everyone without needing to "approach" them',
    groupDynamics: 'Highly interactive and rotating; everyone is in the same "student" boat',
    conversationFocus: 'Dance steps, rhythm, and lighthearted self-deprecation'
  },
  touchProfile: {  // ✅ CORRECT - provide object
    level: 'high',
    type: 'structured',
    consentCulture: 'Contact is part of the lesson, but instructor sets boundaries',
    boundaries: ['Keep hands in designated "lead/follow" positions', 'Respect personal space immediately after the song ends']
  },
  tips: [  // ✅ CORRECT - provide array
    'Wear shoes with smooth soles (no heavy tread)',
    'Bring breath mints since you will be in close proximity to others',
    'Arrive exactly when the lesson starts—the rotation is the best part'
  ],
  commonMyths: [  // ✅ CORRECT - provide array
    'You need a partner to go (most people go solo)',
    'You will be the only one who can\'t dance (everyone is there to learn)'
  ],
  redFlags: [  // ✅ CORRECT - provide array
    'Instructor doesn\'t rotate partners',
    'A "cliquey" vibe where experienced dancers refuse to dance with beginners'
  ],
  // ADD THE MISSING DETAILED FIELDS (like pub-trivia.ts):
  touchDetails: {
    howPeopleTouch: [
      'Hand holds for leading/following',
      'Hand on back/shoulder for frame',
      'Gentle pressure for direction cues'
    ],
    proximityLevel: 3,
    initiation: 'Instructor-directed partner rotation'
  },
  soloTips: {
    howToGoSolo: [
      'Arrive early to introduce yourself to instructor',
      'Position yourself near front for better visibility',
      'Ask instructor for feedback between rotations'
    ],
    bestPosition: 'Near the instructor for easier pairing',
    escapePlan: 'Bathroom break between songs',
    icebreaker: 'Is this your first time taking lessons here?'
  },
  logistics: {
    ticketSources: ['Eventbrite', 'At the door', 'Venue website'],
    parking: {
      type: 'mixed',
      details: 'Bar/venue parking typically available'
    },
    alcohol: {
      likelihood: 'low',
      priceLevel: 3,
      byoAllowed: false
    }
  },
  seasonalPricing: {
    cheaperMonths: ['Jan', 'Feb', 'Sep'],
    expensiveMonths: ['Jun', 'Jul', 'Dec'],
    priceNotes: 'Weeknight lessons often cheaper than weekends'
  },
  nicheWorld: {
    unwrittenRules: [
      'Rotate partners when instructor says',
      'Thank each partner after dancing',
      'No teaching other students during lesson',
      'Stay for social dancing if you can'
    ],
    socialCurrency: ['Good rhythm', 'Positive attitude', 'Willingness to learn', 'Following instructions'],
    entryBarriers: ['Initial coordination anxiety', 'Finding right skill level class'],
    tabooTopics: ['Criticizing other dancers', 'Refusing to rotate partners'],
    initiationRituals: ['First successful dance with a stranger', 'First time staying for social dance']
  }
};