import type { SocialEventType } from '$lib/types/event';

export const animalEvents: SocialEventType[] = [
  {
    id: 'dog-park-social',
    name: 'Dog Park Meetup',
    category: 'animal',
    properties: ['pet-focused', 'outdoor', 'casual', 'animal-mediated'],
    alsoKnownAs: ['Puppy Playdate', 'Dog Social', 'Canine Meetup'],
    overlapsWith: ['outdoor-hiking-group', 'casual-park-hang'],
    keyDifferences: [
      {
        comparedTo: 'outdoor-hiking-group',
        differences: [
          'Dogs serve as natural icebreakers and conversation starters',
          'Less structured than organized hikes',
          'Focus is on pets rather than destination/route'
        ]
      }
    ],
    idealFor: [
      'Dog owners',
      'Animal lovers',
      'People who prefer pet-focused conversation',
      'Those who find animals reduce social anxiety'
    ],
    pressureProfile: {
      level: 'very low',
      source: 'Minimal - dogs provide constant distraction and natural conversation topics',
      mitigationTips: [
        'Focus on your dog if conversation feels forced',
        'Ask about other people\'s dogs (safe, easy topic)',
        'Bring dog treats to share (icebreaker)'
      ]
    },
    socialStructure: {
      soloFriendliness: 'high',
      whySoloFriendly: 'Dog owners frequently visit parks alone; dogs facilitate interaction naturally',
      groupDynamics: 'Fluid and informal; people come and go, conversations form around dogs playing',
      conversationFocus: 'Dog breeds, training tips, local vet recommendations, pet stories'
    },
    touchProfile: {
      level: 'low',
      type: 'animal-mediated',
      consentCulture: 'Ask before petting others\' dogs; human touch minimal',
      boundaries: ['Always ask before touching someone\'s pet', 'Respect if dogs or owners need space']
    },
    tips: [
      'Visit at consistent times to see familiar faces',
      'Bring poop bags and water for your dog',
      'Start with dog-related questions if initiating conversation',
      'It\'s okay to just watch the dogs if you\'re not feeling social'
    ],
    commonMyths: [
      'Only extroverts go to dog parks (many introverts enjoy them)',
      'You need a purebred or "cute" dog (all dogs welcome)',
      'People judge your dog training (most are just happy dogs are playing)'
    ],
    redFlags: [
      'Aggressive dogs not properly controlled',
      'Owners not supervising their pets',
      'Cliquish regulars excluding newcomers'
    ]
  },
  {
    id: 'horseback-riding',
    name: 'Group Horseback Riding',
    category: 'animal',
    properties: ['animal-focused', 'outdoor', 'skill-based', 'nature-connected'],
    alsoKnownAs: ['Trail Riding', 'Group Riding Lesson', 'Equestrian Outing'],
    overlapsWith: ['outdoor-hiking-group', 'coed-sports-league'],
    keyDifferences: [
      {
        comparedTo: 'outdoor-hiking-group',
        differences: [
          'Animal partnership adds layer of responsibility',
          'More expensive and equipment-focused',
          'Requires some level of trust in animal handling'
        ]
      }
    ],
    idealFor: [
      'Animal lovers',
      'Outdoor enthusiasts',
      'People who enjoy non-verbal connection with animals',
      'Those seeking unique experiences'
    ],
    pressureProfile: {
      level: 'low',
      source: 'Low - focus is on riding and horse handling; conversation secondary',
      mitigationTips: [
        'Take a beginner lesson first to build confidence',
        'Focus on your horse and the trail',
        'Ask questions about horse care to guides/instructors'
      ]
    },
    socialStructure: {
      soloFriendliness: 'moderate',
      whySoloFriendly: 'Many stables accommodate solo riders, but groups are common',
      groupDynamics: 'Line formation while riding with conversation before/after',
      conversationFocus: 'Horse breeds, riding techniques, trail experiences, animal care'
    },
    touchProfile: {
      level: 'moderate',
      type: 'animal-focused',
      consentCulture: 'Horse handling requires touch; guides show proper techniques',
      boundaries: ['Follow stable rules for handling horses', 'Respect horses\' personal space']
    },
    tips: [
      'Wear appropriate clothing (long pants, closed-toe shoes)',
      'Listen carefully to safety instructions',
      'Communicate any fears or concerns to the guide',
      'Tip your guide if service was good'
    ],
    commonMyths: [
      'You need to be an experienced rider (beginner-friendly rides available)',
      'Only wealthy people ride horses (many affordable options exist)',
      'Horses are dangerous (well-trained trail horses are generally calm)'
    ],
    redFlags: [
      'Poorly maintained equipment',
      'Inadequate safety briefings',
      'Overcrowded trails',
      'Horses appearing malnourished or mistreated'
    ]
  }
];