import type { SocialEventType } from '$lib/types/event';

export const barGamesTournament: SocialEventType = {
    id: 'bar-games-tournament',
    name: 'Bar Game Tournament',
    category: 'bar-events',
    properties: ['competitive', 'active', 'skill-based', 'structured'],
    alsoKnownAs: ['Pool League', 'Darts Tournament', 'Ping Pong Night'],
    overlapsWith: ['gaming-tournament', 'sports-league'],
    keyDifferences: [
      {
        comparedTo: 'gaming-tournament',
        differences: [
          'Physical/analog games rather than digital',
          'Heavier focus on pub culture and "bar manners"',
          'Casual environment where "hustling" is part of the lore'
        ]
      }
    ],
    idealFor: [
      'Competitive soloists',
      'People who like to do something with their hands while socializing',
      'Kinesthetic learners'
    ],
    pressureProfile: {
      level: 'medium',
      source: 'Competency-based - being watched while you take your turn',
      mitigationTips: [
        'Focus on the game mechanics to quiet social nerves',
        'Acknowledge a "good shot" from your opponent',
        'Practice on off-peak hours before entering a tournament'
      ]
    },
    socialStructure: {
      soloFriendliness: 'high',
      whySoloFriendly: 'The game creates a natural turn-taking structure; you have a reason to be there solo',
      groupDynamics: 'Circular social flow around the game table/board',
      conversationFocus: 'Technique, the "physics" of the game, and playful trash talk'
    },
    touchProfile: {
      level: 'none',
      type: 'social',
      consentCulture: 'Handshakes before/after games are standard',
      boundaries: ['Don\'t touch someone\'s equipment (cues/darts) without asking', 'Give the player at the table plenty of space']
    },
    tips: [
      'Learn the "house rules" before the tournament starts',
      'Don\'t be a "sore loser" or an arrogant winner',
      'Offer to buy the winner a drink (if casual)'
    ],
    commonMyths: [
      'You have to be a shark (tournaments often have beginner brackets)',
      'It\'s a smoky, dark environment (most modern venues are bright and clean)'
    ],
    redFlags: [
      'Equipment in poor repair (wobbly tables, bent darts)',
      'Players taking the "trash talk" into personal or offensive territory',
      'Inconsistent refereeing or scorekeeping'
    ]
};