// src/lib/data/eventCategories.ts
import type { EventCategory } from '$lib/types/event';

export interface EventCategoryData {
  id: EventCategory;
  name: string;
  description: string;
  icon: string;
  color: string;
}

export const eventCategories: EventCategoryData[] = [
  {
    id: 'hobby',
    name: 'Hobbies',
    description: 'Crafting, collecting, and skill-based activities',
    icon: '🎨',
    color: 'purple'
  },
  {
    id: 'dance',
    name: 'Dance',
    description: 'Social dancing, classes, and dance parties',
    icon: '💃',
    color: 'pink'
  },
  {
    id: 'music',
    name: 'Music',
    description: 'Concerts, jam sessions, and music-related events',
    icon: '🎵',
    color: 'blue'
  },
  {
    id: 'movement',
    name: 'Movement',
    description: 'Yoga, fitness, and body awareness activities',
    icon: '🧘',
    color: 'green'
  },
  {
    id: 'educational',
    name: 'Educational',
    description: 'Workshops, lectures, and learning events',
    icon: '📚',
    color: 'orange'
  },
  {
    id: 'special-interest',
    name: 'Special Interest',
    description: 'Niche hobbies and unique communities',
    icon: '🎯',
    color: 'red'
  },
  {
    id: 'professional',
    name: 'Professional',
    description: 'Networking, career development, and business events',
    icon: '💼',
    color: 'indigo'
  },
  {
    id: 'entertainment',
    name: 'Entertainment',
    description: 'Movies, theater, comedy, and shows',
    icon: '🎭',
    color: 'yellow'
  },
  {
    id: 'volunteer',
    name: 'Volunteer',
    description: 'Community service and charitable activities',
    icon: '🤝',
    color: 'teal'
  },
  {
    id: 'gaming',
    name: 'Gaming',
    description: 'Video games, board games, and tabletop RPGs',
    icon: '🎮',
    color: 'purple'
  },
  {
    id: 'sports',
    name: 'Sports',
    description: 'Team sports, recreational leagues, and sporting events',
    icon: '⚽',
    color: 'green'
  },
  {
    id: 'animal',
    name: 'Animal',
    description: 'Pet-related events and animal activities',
    icon: '🐾',
    color: 'brown'
  },
  {
    id: 'creative',
    name: 'Creative',
    description: 'Art, writing, and creative expression events',
    icon: '✏️',
    color: 'blue'
  },
  {
    id: 'dating',
    name: 'Dating',
    description: 'Social events for meeting romantic partners',
    icon: '💘',
    color: 'red'
  },
  {
    id: 'food-drink',
    name: 'Food & Drink',
    description: 'Cooking classes, food tours, and dining events',
    icon: '🍽️',
    color: 'orange'
  },
  {
    id: 'outdoors',
    name: 'Outdoors',
    description: 'Hiking, camping, and nature activities',
    icon: '🌲',
    color: 'green'
  },
  {
    id: 'technology',
    name: 'Technology',
    description: 'Tech meetups, hackathons, and digital events',
    icon: '💻',
    color: 'blue'
  },
  {
    id: 'wellness',
    name: 'Wellness',
    description: 'Health, meditation, and self-care events',
    icon: '🌿',
    color: 'teal'
  },
  {
    id: 'social',
    name: 'Social',
    description: 'Parties, meetups, and casual gatherings',
    icon: '👥',
    color: 'blue'
  },
  {
    id: 'cultural', // NEW
    name: 'Cultural',
    description: 'Festivals, heritage events, and multicultural gatherings',
    icon: '🎎',
    color: 'yellow'
  }
];

// Helper function to get category by ID
export function getCategoryById(id: EventCategory): EventCategoryData | undefined {
  return eventCategories.find(category => category.id === id);
}

// Helper function to get all category IDs
export function getAllCategoryIds(): EventCategory[] {
  return eventCategories.map(category => category.id);
}