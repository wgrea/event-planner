<!-- src/lib/components/SaveButton.svelte - Svelte 5 syntax -->
<script lang="ts">
  import { isEventSaved, toggleEventAsPlan } from '$lib/utils/planStorage';
  import { goto } from '$app/navigation';
  
  const { eventTypeId, userId = 'current_user', size = 'md', showViewButton = true } = $props<{
    eventTypeId: string;
    userId?: string;
    size?: 'sm' | 'md' | 'lg';
    showViewButton?: boolean;
  }>();
  
  let isSaved = $state(false);
  
  import { onMount } from 'svelte';
  onMount(() => {
    isSaved = isEventSaved(eventTypeId, userId);
  });
  
  const sizeClasses: Record<'sm' | 'md' | 'lg', string> = {
    sm: 'px-2 py-1 text-xs',
    md: 'px-4 py-2 text-sm',
    lg: 'px-5 py-2.5 text-base'
  };
  
  const buttonClass = $derived(() => {
    const base = `flex items-center justify-center gap-2 rounded-lg font-medium transition-colors ${sizeClasses[size as 'sm' | 'md' | 'lg']}`;
    if (isSaved) {
      return `${base} bg-red-100 text-red-700 hover:bg-red-200 border border-red-300 shadow-sm`;
    } else {
      return `${base} bg-blue-100 text-blue-700 hover:bg-blue-200 border border-blue-300`;
    }
  });
  
  const viewButtonClass = $derived(`px-4 py-2 bg-purple-600 text-white rounded-lg font-medium hover:bg-purple-700 transition-colors shadow-sm ${sizeClasses[size as 'sm' | 'md' | 'lg']}`);
  
  async function handleSave() {
    try {
      const result = await toggleEventAsPlan(eventTypeId, userId);
      isSaved = result.action === 'added';
      
      // Dispatch custom event for parent components
      const event = new CustomEvent('savechange', {
        detail: { 
          eventTypeId, 
          isSaved: result.action === 'added',
          action: result.action 
        }
      });
      dispatchEvent(event);
      
    } catch (error) {
      console.error('Error saving event:', error);
    }
  }
  
  function goToSaved() {
    goto('/saved');
  }
</script>

<div class="flex gap-2">
  <button
    onclick={handleSave}
    class={buttonClass}
    title={isSaved ? 'Remove from saved plans' : 'Save to my plans'}
  >
    {#if isSaved}
      <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
        <path fill-rule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clip-rule="evenodd" />
      </svg>
      Unsave
    {:else}
      <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" />
      </svg>
      Save
    {/if}
  </button>
  
  {#if isSaved && showViewButton}
    <button
      onclick={goToSaved}
      class={viewButtonClass}
      title="View saved plans"
    >
      View Saved
    </button>
  {/if}
</div>