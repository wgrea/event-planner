<!-- src/lib/components/event-types/EventTypeCard.svelte - FIXED -->
<script lang="ts">
  import type { SocialEventType } from '$lib/types/event';
  import SaveButton from '$lib/components/SaveButton.svelte';
  import Tooltip from '$lib/components/Tooltip.svelte'; // ADD THIS IMPORT
  
  
  // Use $props() for Svelte 5
  const { event, showSaveButton = true } = $props<{
    event: SocialEventType;
    showSaveButton?: boolean;
  }>();
  
  // Add helper functions that return the full class strings
  function getPressureClass(level: string): string {
    const classes: Record<string, string> = {
      'none': 'bg-green-100 text-green-800',
      'very low': 'bg-green-100 text-green-800',
      'low': 'bg-green-100 text-green-800',
      'medium': 'bg-yellow-100 text-yellow-800',
      'high': 'bg-red-100 text-red-800'
    };
    return `px-2 py-1 rounded-full text-xs font-semibold ${classes[level] || 'bg-gray-100 text-gray-800'}`;
  }
  
  function getSoloClass(level: string): string {
    const classes: Record<string, string> = {
      'high': 'bg-green-100 text-green-800',
      'moderate': 'bg-yellow-100 text-yellow-800',
      'low': 'bg-red-100 text-red-800'
    };
    return `px-2 py-1 rounded-full text-xs font-semibold ${classes[level] || 'bg-gray-100 text-gray-800'}`;
  }
  
  function getTouchClass(level: string): string {
    const classes: Record<string, string> = {
      'none': 'bg-blue-100 text-blue-800',
      'low': 'bg-blue-100 text-blue-800',
      'moderate': 'bg-purple-100 text-purple-800',
      'high': 'bg-pink-100 text-pink-800',
      'varies': 'bg-gray-100 text-gray-800'
    };
    return `px-2 py-1 rounded-full text-xs font-semibold ${classes[level] || 'bg-gray-100 text-gray-800'}`;
  }
</script>

<div class="border border-gray-200 rounded-lg p-4 bg-white hover:shadow-md transition-shadow h-full flex flex-col">
  <!-- Header -->
  <div class="flex justify-between items-start mb-3">
    <h3 class="text-lg font-semibold text-gray-900">{event.name}</h3>
    <span class="bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded capitalize">
      {event.category}
    </span>
  </div>
  
  <!-- Metrics Section - ADD TOOLTIPS HERE -->
  <div class="flex gap-2 mb-3">
    <Tooltip 
      text="Pressure: How much social effort is expected. Low = casual, High = more engagement needed."
      position="top"
    >
      <span class={getPressureClass(event.pressureProfile.level)}>
        {event.pressureProfile.level} Pressure
      </span>
    </Tooltip>
    
    <Tooltip 
      text="Solo-Friendly: How welcoming this event is for people attending alone."
      position="top"
    >
      <span class={getSoloClass(event.socialStructure.soloFriendliness)}>
        {event.socialStructure.soloFriendliness} Solo
      </span>
    </Tooltip>
    
    <Tooltip 
      text="Touch Level: Expected physical contact. None = no touch, High = frequent/close contact."
      position="top"
    >
      <span class={getTouchClass(event.touchProfile.level)}>
        {event.touchProfile.level} Touch
      </span>
    </Tooltip>
  </div>
  
  <!-- Description -->
  <p class="text-gray-600 text-sm mb-3 flex-1">
    {event.properties.slice(0, 3).join(' • ')}
  </p>
  
  <!-- Ideal For -->
  <div class="text-gray-700 text-sm mb-2">
    <span class="font-medium">Ideal for:</span> {event.idealFor.slice(0, 2).join(', ')}
  </div>
  
  <!-- Tips Preview -->
  <div class="text-gray-700 text-sm mb-4">
    <span class="font-medium">Tip:</span> {event.tips[0]}
  </div>
  
  <!-- Action Buttons -->
  <div class="flex justify-between items-center mt-auto pt-3 border-t border-gray-100">
    <a 
      href="/event-types/{event.id}" 
      class="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium text-sm"
    >
      Explore details
      <svg class="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
      </svg>
    </a>
    
    {#if showSaveButton}
      <!-- Simple SaveButton without custom event handler -->
      <SaveButton eventTypeId={event.id} size="sm" />
    {/if}

    <!-- Add to metrics section, after touch badge: -->
    {#if event.logistics?.alcohol}
      <span class="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-xs font-semibold">
        {event.logistics.alcohol.likelihood === 'none' ? 'Sober' : 'Drinks'}
      </span>
    {/if}

    {#if event.logistics?.parking?.type === 'free'}
      <span class="bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs font-semibold">
        Free Parking
      </span>
    {/if}
  </div>
</div>