// src/lib/data/socialEventTypes/categories/bar-events.ts
export const barEvents = [
  {
    id: 'pub-trivia',
    name: 'Pub Trivia',
    description: 'Structured team competition. Solo players can often join existing teams easily.',
    soloFriendliness: 4,
    pressureLevel: 3,
    tags: ['competitive', 'intellectual', 'teamwork', 'structured']
  },
  {
    id: 'dance-lessons',
    name: 'Structured Dance Lessons',
    description: 'Salsa, Swing, or Bachata classes where partners rotate every few minutes.',
    soloFriendliness: 5, 
    pressureLevel: 3,
    tags: ['learning', 'active', 'partner-rotation', 'icebreaker']
  },
  {
    id: 'karaoke-night',
    name: 'Karaoke Night',
    description: 'High-energy performance night. Great for "social invisibility" or brave soloists.',
    soloFriendliness: 3,
    pressureLevel: 5,
    tags: ['performance', 'vocal', 'fun', 'loud']
  },
  {
    id: 'viewing-party',
    name: 'Sports Viewing Party',
    description: 'Communal watching of a major event (Super Bowl, World Cup, Cricket Finals).',
    soloFriendliness: 5,
    pressureLevel: 2,
    tags: ['communal-cheering', 'passive-social', 'high-energy']
  },
  {
    id: 'bar-olympics',
    name: 'Bar Games (Pool/Darts)',
    description: 'Casual "winner stays" or tournament-style play for arcade/pub games.',
    soloFriendliness: 4,
    pressureLevel: 3,
    tags: ['active', 'competition', 'low-stakes-talk']
  },
  {
    id: 'open-mic',
    name: 'Open Mic / Acoustic Set',
    description: 'Passive entertainment focusing on a stage; very easy to watch solo from the bar.',
    soloFriendliness: 5,
    pressureLevel: 1,
    tags: ['music', 'artsy', 'spectator', 'chill']
  }
];