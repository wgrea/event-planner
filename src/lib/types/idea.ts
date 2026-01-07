// src/lib/types/idea.ts
export interface EventIdea {
  id: string;
  userId: string;
  
  // Core idea
  eventTypeId: string;
  whyAppealing: string[];
  
  // Exploration state
  explorationLevel: 'discovered' | 'researched' | 'tested';
  researchNotes: string[];
  questions: string[]; // Things to find out
  
  // Fit assessment
  fitScores: {
    comfort: number; // 1-10
    interest: number; // 1-10
    practicality: number; // 1-10
  };
  pros: string[];
  cons: string[];
  
  // Categorization
  tags: string[];
  priority: 'low' | 'medium' | 'high' | 'bucket-list';
  moodFit: string[]; // Which moods this event fits
  
  metadata: {
    discoveredAt: Date;
    source?: string; // How discovered
    inspiration?: string;
  };
}