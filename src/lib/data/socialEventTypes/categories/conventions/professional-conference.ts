// src/lib/data/socialEventTypes/categories/conventions/professional-conference.ts
import type { SocialEventType } from '$lib/types/event';

export const professionalConference: SocialEventType = {
  id: 'professional-conference',
  name: 'Professional / Trade Convention',
  category: 'conventions',
  properties: ['networking-heavy', 'career-focused', 'formal', 'structured', 'educational'],
  alsoKnownAs: ['Industry Conference', 'Trade Show', 'Business Expo', 'Professional Summit'],
  overlapsWith: ['educational-workshop', 'professional-networking'],
  keyDifferences: [
    {
      comparedTo: 'professional-networking',
      differences: [
        'Larger scale with structured sessions',
        'More diverse activities (keynotes, workshops, exhibits)',
        'Often multi-day with travel required',
        'Higher cost and commitment'
      ]
    }
  ],
  idealFor: [
    'Professionals advancing careers',
    'Job seekers',
    'Industry enthusiasts',
    'Entrepreneurs',
    'Students entering field'
  ],
  pressureProfile: {
    level: 'high',
    source: 'Performance-based; pressure to "network," "sell yourself," learn efficiently, justify cost',
    mitigationTips: [
      'Set a goal of meeting only 3 meaningful people',
      'Hang out near coffee stations - natural "pause" areas',
      'Have a "one-sentence bio" ready',
      'Schedule downtime between sessions',
      'Focus on quality over quantity of connections'
    ]
  },
  socialStructure: {
    soloFriendliness: 'moderate',
    whySoloFriendly: 'Business cards serve as conversation starters; many attend solo for career development',
    groupDynamics: 'Hierarchical by industry status; mix of structured sessions and open networking',
    conversationFocus: 'Industry trends, career opportunities, professional development, business challenges'
  },
  touchProfile: {
    level: 'none',
    type: 'professional',
    consentCulture: 'Professional handshakes only; very conservative touch culture',
    boundaries: ['Maintain professional distance', 'Handshakes appropriate, hugs inappropriate']
  },
  tips: [
    'Bring plenty of business cards',
    'Research attendees and speakers beforehand',
    'Follow up with contacts within 24 hours',
    'Take notes during sessions',
    'Dress appropriately for your industry',
    'Have elevator pitch ready'
  ],
  commonMyths: [
    'Only for extroverts',
    'Too expensive to be worth it',
    'Just for salespeople',
    'All about partying'
  ],
  redFlags: [
    'Poorly organized sessions',
    'Overly sales-focused',
    'Lack of diversity',
    'Unprofessional behavior tolerated'
  ],
  touchDetails: {
    howPeopleTouch: [
      'Handshakes upon introduction',
      'Occasional shoulder pat in familiar relationships',
      'Business card exchange (hand-to-hand)'
    ],
    proximityLevel: 2,
    initiation: 'Professional handshake standard; other touch inappropriate',
    whyNoTouch: 'Professional environment prioritizes business decorum over social touching'
  },
  soloTips: {
    howToGoSolo: [
      'Arrive early to sessions for seat selection',
      'Use LinkedIn to connect with fellow attendees beforehand',
      'Attend "first-timer" sessions if offered',
      'Sit at occupied tables during meals',
      'Volunteer to help with something small'
    ],
    bestPosition: 'Near coffee/food areas between sessions',
    escapePlan: 'Check phone or step out for "important call"',
    icebreaker: 'What brought you to this conference?',
    forTravelers: 'Ask for local dining recommendations from locals'
  },
  logistics: {
    ticketSources: ['Conference website', 'Professional associations', 'Employer sponsorships'],
    parking: {
      type: 'difficult',
      details: 'Convention center parking available but expensive; business expense common'
    },
    transit: 'Recommended for urban conferences',
    alcohol: {
      likelihood: 'medium',
      priceLevel: 4,
      byoAllowed: false
    }
  },
  seasonalPricing: {
    cheaperMonths: ['Early bird periods (6+ months ahead)'],
    expensiveMonths: ['Last minute registration', 'Peak industry seasons'],
    priceNotes: 'Association member discounts significant; group rates available'
  },
  nicheWorld: {
    unwrittenRules: [
      'Don\'t sell during casual conversations',
      'Respect hierarchy in Q&A sessions',
      'Exchange business cards appropriately',
      'Follow up promptly',
      'Dress for the job you want'
    ],
    socialCurrency: ['Industry knowledge', 'Company prestige', 'Speaker status', 'Connection quality', 'Innovation insights'],
    entryBarriers: ['Cost', 'Industry credentials', 'Networking anxiety', 'Travel requirements'],
    tabooTopics: ['Company proprietary information', 'Salary details', 'Negative gossip about colleagues', 'Political opinions']
  }
};