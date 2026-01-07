<!-- src/lib/components/SavedPlansList.svelte - UPDATED IMPORT -->
<script lang="ts">
  import { onMount } from 'svelte';
  import { goto } from '$app/navigation';
  import { getPlans, toggleEventAsPlan } from '$lib/utils/planStorage';
  import type { EventPlan } from '$lib/types/plan';
  import type { SocialEventType } from '$lib/types/event';
  import { 
    getEventName, 
    getEventDescription, 
    getEventCategory 
  } from '$lib/utils/eventHelpers';
  
  let savedPlans = $state<EventPlan[]>([]);
  
  onMount(() => {
    loadSavedPlans();
  });
  
  function loadSavedPlans() {
    const plans = getPlans('current_user');
    // Make sure it's always an array
    savedPlans = Array.isArray(plans) ? plans : [];
  }
  
  async function removePlan(eventTypeId: string) {
    if (confirm('Are you sure you want to remove this from your saved plans?')) {
      await toggleEventAsPlan(eventTypeId, 'current_user');
      loadSavedPlans(); // Reload the list
      
      // Dispatch event to notify other components
      const event = new CustomEvent('planremoved', {
        detail: { eventTypeId }
      });
      dispatchEvent(event);
    }
  }
  
  function viewEventDetails(eventTypeId: string) {
    goto(`/event-types/${eventTypeId}`);
  }
  
  function clearAll() {
    if (savedPlans.length === 0) return;
    
    if (confirm('Are you sure you want to remove all saved plans?')) {
      // Clear from plans storage
      localStorage.removeItem('user_event_plans');
      loadSavedPlans();
    }
  }
  
  function formatDate(date: Date | string): string {
    if (!date) return 'Unknown date';
    const d = new Date(date);
    if (isNaN(d.getTime())) return 'Invalid date';
    return d.toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric'
    });
  }
</script>

<div class="space-y-6">
  {#if savedPlans && savedPlans.length > 0}
    <div class="flex justify-between items-center mb-6">
      <h2 class="text-xl font-bold text-gray-900">
        Saved Plans ({savedPlans.length})
      </h2>
      <button
        onclick={clearAll}
        class="px-4 py-2 text-sm font-medium text-red-600 bg-red-50 hover:bg-red-100 rounded-lg transition-colors border border-red-200"
      >
        Clear All
      </button>
    </div>
    
    <div class="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
      {#each savedPlans as plan (plan.id || plan.eventType?.id)}
        <div class="bg-white border border-gray-200 rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow">
          <div class="flex justify-between items-start mb-3">
            <h3 class="font-bold text-gray-900">{getEventName(plan.eventType)}</h3>
            <button
              onclick={() => removePlan(plan.eventType?.id || '')}
              class="text-gray-400 hover:text-red-500 transition-colors p-1"
              title="Remove from saved"
            >
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          
          <div class="mb-3">
            <p class="text-sm text-gray-600 line-clamp-2">
              {getEventDescription(plan.eventType)}
            </p>
          </div>
          
          <div class="flex flex-wrap gap-2 mb-4">
            {#if plan.eventType?.category}
              <span class="text-xs px-2 py-1 rounded-full bg-blue-50 text-blue-700 border border-blue-200">
                {getEventCategory(plan.eventType)}
              </span>
            {/if}
            {#if plan.eventType?.pressureProfile?.level}
              <span class="text-xs px-2 py-1 rounded-full bg-green-50 text-green-700 border border-green-200">
                {plan.eventType.pressureProfile.level} Pressure
              </span>
            {/if}
            {#if plan.eventType?.socialStructure?.soloFriendliness}
              <span class="text-xs px-2 py-1 rounded-full bg-purple-50 text-purple-700 border border-purple-200">
                {plan.eventType.socialStructure.soloFriendliness} Solo
              </span>
            {/if}
            {#if plan.eventType?.touchProfile?.level}
              <span class="text-xs px-2 py-1 rounded-full bg-red-50 text-red-700 border border-red-200">
                {plan.eventType.touchProfile.level} Touch
              </span>
            {/if}
          </div>
          
          <div class="text-xs text-gray-500 mb-4">
            Saved on {formatDate(plan.metadata?.createdAt || new Date())}
          </div>
          
          <div class="flex gap-2">
            {#if plan.eventType?.id}
              <button
                onclick={() => viewEventDetails(plan.eventType.id)}
                class="flex-1 px-3 py-2 text-sm font-medium text-blue-600 bg-blue-50 hover:bg-blue-100 rounded-lg transition-colors border border-blue-200"
              >
                View Details
              </button>
            {/if}
            <button
              onclick={() => removePlan(plan.eventType?.id || '')}
              class="px-3 py-2 text-sm font-medium text-red-600 bg-red-50 hover:bg-red-100 rounded-lg transition-colors border border-red-200"
            >
              Remove
            </button>
          </div>
        </div>
      {/each}
    </div>
  {:else}
    <div class="text-center py-12 bg-white rounded-lg border border-gray-200">
      <div class="w-16 h-16 mx-auto mb-4 text-gray-400">
        <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
        </svg>
      </div>
      <h3 class="text-lg font-medium text-gray-900 mb-2">No saved plans yet</h3>
      <p class="text-gray-500 mb-6">Start saving events you're interested in attending.</p>
      <button
        onclick={() => goto('/event-types')}
        class="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 font-medium transition-colors"
      >
        Browse Events
      </button>
    </div>
  {/if}
</div>