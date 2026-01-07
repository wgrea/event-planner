// src/lib/types/collection.ts
export interface EventCollection {
  id: string;
  userId: string;
  name: string;
  description?: string;
  type: 'playlist' | 'wishlist' | 'saved-for-later' | 'tried-and-true' | 'avoid';
  
  items: CollectionItem[];
  order: 'custom' | 'confidence' | 'comfort' | 'alphabetical';
  
  metadata: {
    createdAt: Date;
    isPublic: boolean;
    coverImage?: string;
  };
}

export type CollectionItem = {
  id: string;
  addedAt: Date;
  notes?: string;
} & (
  | { type: 'event-type'; eventTypeId: string }
  | { type: 'plan'; planId: string }
  | { type: 'idea'; ideaId: string }
);