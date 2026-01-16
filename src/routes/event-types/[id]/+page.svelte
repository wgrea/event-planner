<!-- src/routes/event-types/[id]/+page.svelte -->
<script lang="ts">
  import { page } from '$app/stores';
  import { socialEventTypes } from '$lib/data/socialEventTypes';
  
  // Import only the components you actually have
  import TouchDetails from '$lib/components/event-details/TouchDetails.svelte';
  import SoloTips from '$lib/components/event-details/SoloTips.svelte';
  import LogisticsInfo from '$lib/components/event-details/LogisticsInfo.svelte';
  
  // Get the event ID from the route
  $: eventId = $page.params.id;
  $: event = socialEventTypes.find(e => e.id === eventId);
  
  // Find similar events
  $: similarEvents = event && eventId
    ? socialEventTypes.filter(e => 
        e.id !== eventId && 
        (e.category === event.category || 
         e.overlapsWith.includes(eventId) ||
         event.overlapsWith.includes(e.id))
      ).slice(0, 3)
    : [];
</script>

<svelte:head>
  <title>{event ? `${event.name} - Social Event Type` : 'Event Type Not Found'}</title>
</svelte:head>

{#if event}
  <div class="container mx-auto px-4 py-8">
    <!-- Back button -->
    <a href="/event-types" class="inline-flex items-center text-blue-600 hover:text-blue-800 mb-6">
      <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
      </svg>
      Back to All Event Types
    </a>
    
    <!-- Main event info - KEEP EXISTING CODE HERE -->
    <div class="bg-white rounded-lg border border-gray-200 p-6 md:p-8 mb-8">
      <!-- Header with metrics - KEEP EXISTING -->
      <div class="flex flex-col lg:flex-row lg:items-start justify-between mb-8 gap-6">
        <div class="flex-1">
          <div class="flex flex-wrap items-center gap-2 mb-3">
            <span class="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm capitalize">
              {event.category}
            </span>
            {#each event.alsoKnownAs.slice(0, 2) as alias}
              <span class="text-sm text-gray-500">(also: {alias})</span>
            {/each}
          </div>
          <h1 class="text-3xl font-bold text-gray-900 mb-4">{event.name}</h1>
          <p class="text-gray-700 text-lg">{event.properties.join(' • ')}</p>
        </div>
        
        <!-- Metrics - KEEP EXISTING -->
        <div class="flex lg:flex-col gap-3">
          <div class="text-center">
            <span class="badge pressure-{event.pressureProfile.level} mb-1">
              {event.pressureProfile.level}
            </span>
            <div class="text-xs text-gray-500">Pressure</div>
          </div>
          <!-- ... rest of existing metrics ... -->
        </div>
      </div>
      
      <!-- Key sections - KEEP EXISTING -->
      <div class="grid lg:grid-cols-2 gap-8">
        <!-- Left column - KEEP EXISTING -->
        <div class="space-y-8">
          <!-- Ideal For - KEEP EXISTING -->
          <div>
            <h3 class="text-xl font-bold text-gray-900 mb-4 flex items-center">
              <span class="mr-2">🎯</span> Ideal For
            </h3>
            <ul class="space-y-2">
              {#each event.idealFor as group}
                <li class="flex items-start">
                  <svg class="w-5 h-5 text-green-500 mr-2 shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                  </svg>
                  <span class="text-gray-700">{group}</span>
                </li>
              {/each}
            </ul>
          </div>
          
          <!-- ... KEEP ALL OTHER EXISTING SECTIONS ... -->
        </div>
        
        <!-- Right column - KEEP EXISTING -->
        <div class="space-y-8">
          <!-- ... KEEP EXISTING ... -->
        </div>
      </div>
      
      <!-- Pressure Profile - KEEP EXISTING -->
      <div class="mt-8 p-6 bg-gray-50 rounded-lg border border-gray-200">
        <!-- ... KEEP EXISTING ... -->
      </div>
    </div>
    
    <!-- ADD YOUR NEW COMPONENTS HERE -->
    <div class="bg-white rounded-lg border border-gray-200 p-6 md:p-8 mb-8">
      <h2 class="text-2xl font-bold text-gray-900 mb-6">Enhanced Details</h2>
      
      <div class="grid lg:grid-cols-2 gap-8">
        <div class="space-y-8">
          <TouchDetails {event} />
          <SoloTips {event} />
        </div>
        <div class="space-y-8">
          <LogisticsInfo {event} />
          
          <!-- Seasonal Pricing (inline since no component yet) -->
          {#if event.seasonalPricing}
            <div class="mb-6">
              <h3 class="text-lg font-semibold mb-2">📅 Seasonal Pricing:</h3>
              <div class="bg-yellow-50 p-4 rounded-lg">
                {#if event.seasonalPricing.cheaperMonths.length > 0}
                  <p class="text-sm mb-2">
                    <span class="font-medium">Cheaper:</span> {event.seasonalPricing.cheaperMonths.join(', ')}
                  </p>
                {/if}
                {#if event.seasonalPricing.expensiveMonths.length > 0}
                  <p class="text-sm">
                    <span class="font-medium">More expensive:</span> {event.seasonalPricing.expensiveMonths.join(', ')}
                  </p>
                {/if}
              </div>
            </div>
          {/if}
        </div>
      </div>
    </div>
    
    <!-- Key Differences - KEEP EXISTING -->
    {#if event.keyDifferences.length > 0}
      <!-- ... KEEP EXISTING ... -->
    {/if}
    
    <!-- Similar Events - KEEP EXISTING -->
    {#if similarEvents.length > 0}
      <!-- ... KEEP EXISTING ... -->
    {/if}
    
  </div>
{:else}
  <!-- Error/not found state - KEEP EXISTING -->
  <div class="container mx-auto px-4 py-16 text-center">
    <!-- ... KEEP EXISTING ... -->
  </div>
{/if}

<style>
  .badge {
    padding-left: 0.75rem;    /* px-3 */
    padding-right: 0.75rem;   /* px-3 */
    padding-top: 0.375rem;    /* py-1.5 */
    padding-bottom: 0.375rem; /* py-1.5 */
    border-radius: 9999px;    /* rounded-full */
    font-size: 0.875rem;      /* text-sm */
    font-weight: 600;         /* font-semibold */
    display: inline-block;
  }
  
  .pressure-low {
    background-color: rgb(220 252 231); /* bg-green-100 */
    color: rgb(22 101 52);              /* text-green-800 */
  }
  
  .pressure-medium {
    background-color: rgb(254 249 195); /* bg-yellow-100 */
    color: rgb(113 63 18);              /* text-yellow-800 */
  }
  
  .pressure-high {
    background-color: rgb(254 226 226); /* bg-red-100 */
    color: rgb(153 27 27);              /* text-red-800 */
  }
  
  .solo-high {
    background-color: rgb(220 252 231); /* bg-green-100 */
    color: rgb(22 101 52);              /* text-green-800 */
  }
  
  .solo-moderate {
    background-color: rgb(254 249 195); /* bg-yellow-100 */
    color: rgb(113 63 18);              /* text-yellow-800 */
  }
  
  .solo-low {
    background-color: rgb(254 226 226); /* bg-red-100 */
    color: rgb(153 27 27);              /* text-red-800 */
  }
  
  .touch-none {
    background-color: rgb(243 244 246); /* bg-gray-100 */
    color: rgb(31 41 55);               /* text-gray-800 */
  }
  
  .touch-low {
    background-color: rgb(219 234 254); /* bg-blue-100 */
    color: rgb(30 64 175);              /* text-blue-800 */
  }
  
  .touch-moderate {
    background-color: rgb(224 231 255); /* bg-indigo-100 */
    color: rgb(55 48 163);              /* text-indigo-800 */
  }
  
  .touch-high {
    background-color: rgb(243 232 255); /* bg-purple-100 */
    color: rgb(107 33 168);             /* text-purple-800 */
  }
</style>