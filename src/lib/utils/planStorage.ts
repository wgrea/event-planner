// src/lib/utils/planStorage.ts
import type { EventPlan } from '$lib/types/plan';
import { createPlanFromEventType } from '$lib/data/samplePlans';

const STORAGE_KEY = 'user_event_plans';

// Initialize with sample plans if none exist
function initializeStorage() {
  if (!localStorage.getItem(STORAGE_KEY)) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify([]));
  }
}

export function savePlan(plan: EventPlan): void {
  initializeStorage();
  const plans = getPlans();
  plans.push(plan);
  localStorage.setItem(STORAGE_KEY, JSON.stringify(plans));
}

export function getPlans(userId?: string): EventPlan[] {
  initializeStorage();
  const plansJson = localStorage.getItem(STORAGE_KEY) || '[]';
  let plans = JSON.parse(plansJson) as EventPlan[];
  
  // Convert date strings back to Date objects
  plans = plans.map(plan => ({
    ...plan,
    metadata: {
      ...plan.metadata,
      createdAt: new Date(plan.metadata.createdAt),
      updatedAt: new Date(plan.metadata.updatedAt)
    }
  }));
  
  if (userId) {
    return plans.filter(plan => plan.userId === userId);
  }
  
  return plans;
}

export async function toggleEventAsPlan(eventTypeId: string, userId: string = 'current_user'): Promise<{ action: 'added' | 'removed'; plan?: EventPlan }> {
  const plans = getPlans();
  const existingPlanIndex = plans.findIndex(p => p.eventType.id === eventTypeId && p.userId === userId);
  
  if (existingPlanIndex !== -1) {
    // Remove if already saved
    plans.splice(existingPlanIndex, 1);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(plans));
    return { action: 'removed' };
  } else {
    // Add new plan - dynamically import the event types
    const { socialEventTypes } = await import('$lib/data/socialEventTypes/index');
    const eventType = socialEventTypes.find(e => e.id === eventTypeId);
    
    if (!eventType) {
      throw new Error(`Event type ${eventTypeId} not found`);
    }
    
    const newPlan = createPlanFromEventType(eventType, userId);
    savePlan(newPlan);
    return { action: 'added', plan: newPlan };
  }
}

export function isEventSaved(eventTypeId: string, userId: string = 'current_user'): boolean {
  const plans = getPlans(userId);
  return plans.some(p => p.eventType.id === eventTypeId);
}