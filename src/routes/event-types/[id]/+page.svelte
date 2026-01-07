<!-- src/routes/event-types/[id]/+page.svelte -->
<script lang="ts">
  import { page } from '$app/stores';
  import { socialEventTypes } from '$lib/data/socialEventTypes';
  
  // Get the event ID from the route
  $: eventId = $page.params.id;
  $: event = socialEventTypes.find(e => e.id === eventId);
  
  // Find similar events - with proper type checking
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
    
    <!-- Main event info -->
    <div class="bg-white rounded-lg border border-gray-200 p-6 md:p-8 mb-8">
      <!-- Header with metrics -->
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
        
        <!-- Metrics -->
        <div class="flex lg:flex-col gap-3">
          <div class="text-center">
            <span class="badge pressure-{event.pressureProfile.level} mb-1">
              {event.pressureProfile.level}
            </span>
            <div class="text-xs text-gray-500">Pressure</div>
          </div>
          <div class="text-center">
            <span class="badge solo-{event.socialStructure.soloFriendliness} mb-1">
              {event.socialStructure.soloFriendliness}
            </span>
            <div class="text-xs text-gray-500">Solo</div>
          </div>
          <div class="text-center">
            <span class="badge touch-{event.touchProfile.level} mb-1">
              {event.touchProfile.level}
            </span>
            <div class="text-xs text-gray-500">Touch</div>
          </div>
        </div>
      </div>
      
      <!-- Key sections -->
      <div class="grid lg:grid-cols-2 gap-8">
        <!-- Left column -->
        <div class="space-y-8">
          <!-- Ideal For -->
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
          
          <!-- Social Structure -->
          <div>
            <h3 class="text-xl font-bold text-gray-900 mb-4 flex items-center">
              <span class="mr-2">🤝</span> Social Structure
            </h3>
            <div class="space-y-3">
              <div>
                <div class="font-medium text-gray-900 mb-1">Solo-Friendly:</div>
                <p class="text-gray-700">{event.socialStructure.whySoloFriendly}</p>
              </div>
              <div>
                <div class="font-medium text-gray-900 mb-1">Group Dynamics:</div>
                <p class="text-gray-700">{event.socialStructure.groupDynamics}</p>
              </div>
              <div>
                <div class="font-medium text-gray-900 mb-1">Conversation Focus:</div>
                <p class="text-gray-700">{event.socialStructure.conversationFocus}</p>
              </div>
            </div>
          </div>
          
          <!-- Touch Profile -->
          <div>
            <h3 class="text-xl font-bold text-gray-900 mb-4 flex items-center">
              <span class="mr-2">👐</span> Touch Profile
            </h3>
            <div class="space-y-3">
              <div>
                <div class="font-medium text-gray-900 mb-1">Touch Type:</div>
                <p class="text-gray-700">{event.touchProfile.type}</p>
              </div>
              <div>
                <div class="font-medium text-gray-900 mb-1">Consent Culture:</div>
                <p class="text-gray-700">{event.touchProfile.consentCulture}</p>
              </div>
              <div>
                <div class="font-medium text-gray-900 mb-1">Typical Boundaries:</div>
                <ul class="list-disc list-inside ml-4 space-y-1">
                  {#each event.touchProfile.boundaries as boundary}
                    <li class="text-gray-700">{boundary}</li>
                  {/each}
                </ul>
              </div>
            </div>
          </div>
        </div>
        
        <!-- Right column -->
        <div class="space-y-8">
          <!-- Pro Tips -->
          <div>
            <h3 class="text-xl font-bold text-gray-900 mb-4 flex items-center">
              <span class="mr-2">💡</span> Pro Tips
            </h3>
            <ul class="space-y-3">
              {#each event.tips as tip}
                <li class="bg-blue-50 p-4 rounded-lg border border-blue-100">
                  <div class="flex items-start">
                    <svg class="w-5 h-5 text-blue-500 mr-3 shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd" />
                    </svg>
                    <span class="text-gray-700">{tip}</span>
                  </div>
                </li>
              {/each}
            </ul>
          </div>
          
          <!-- Red Flags -->
          <div>
            <h3 class="text-xl font-bold text-gray-900 mb-4 flex items-center">
              <span class="mr-2">⚠️</span> Red Flags to Watch For
            </h3>
            <ul class="space-y-2">
              {#each event.redFlags as flag}
                <li class="flex items-start">
                  <svg class="w-5 h-5 text-red-500 mr-2 shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clip-rule="evenodd" />
                  </svg>
                  <span class="text-gray-700">{flag}</span>
                </li>
              {/each}
            </ul>
          </div>
          
          <!-- Common Myths -->
          <div>
            <h3 class="text-xl font-bold text-gray-900 mb-4 flex items-center">
              <span class="mr-2">📢</span> Common Myths
            </h3>
            <ul class="space-y-2">
              {#each event.commonMyths as myth}
                <li class="flex items-start">
                  <svg class="w-5 h-5 text-yellow-500 mr-2 shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clip-rule="evenodd" />
                  </svg>
                  <span class="text-gray-700">{myth}</span>
                </li>
              {/each}
            </ul>
          </div>
        </div>
      </div>
      
      <!-- Pressure Profile -->
      <div class="mt-8 p-6 bg-gray-50 rounded-lg border border-gray-200">
        <h3 class="text-xl font-bold text-gray-900 mb-4 flex items-center">
          <span class="mr-2">🎭</span> Pressure Profile
        </h3>
        <div class="mb-3">
          <div class="font-medium text-gray-900 mb-1">Source of Pressure:</div>
          <p class="text-gray-700">{event.pressureProfile.source}</p>
        </div>
        <div>
          <div class="font-medium text-gray-900 mb-2">Pressure Mitigation Tips:</div>
          <ul class="list-disc list-inside ml-4 space-y-1">
            {#each event.pressureProfile.mitigationTips as tip}
              <li class="text-gray-700">{tip}</li>
            {/each}
          </ul>
        </div>
      </div>
    </div>
    
    <!-- Key Differences -->
    {#if event.keyDifferences.length > 0}
      <div class="mb-8">
        <h2 class="text-2xl font-bold text-gray-900 mb-6">Key Differences</h2>
        <div class="space-y-4">
          {#each event.keyDifferences as diff}
            <div class="bg-white p-5 rounded-lg border border-gray-200">
              <h3 class="font-bold text-gray-900 mb-3">Compared to: <span class="text-blue-600">{diff.comparedTo}</span></h3>
              <ul class="space-y-2">
                {#each diff.differences as difference}
                  <li class="flex items-start">
                    <svg class="w-5 h-5 text-gray-400 mr-2 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                    </svg>
                    <span class="text-gray-700">{difference}</span>
                  </li>
                {/each}
              </ul>
            </div>
          {/each}
        </div>
      </div>
    {/if}
    
    <!-- Similar Events -->
    {#if similarEvents.length > 0}
      <div class="mb-8">
        <div class="flex justify-between items-center mb-6">
          <h2 class="text-2xl font-bold text-gray-900">Similar Event Types</h2>
          <a href="/event-types" class="text-blue-600 hover:text-blue-800 font-medium">
            View All →
          </a>
        </div>
        <div class="grid md:grid-cols-3 gap-6">
          {#each similarEvents as similarEvent}
            <a href="/event-types/{similarEvent.id}" 
               class="group block bg-white p-5 rounded-lg border border-gray-200 hover:border-blue-300 hover:shadow-md transition-all">
              <h3 class="font-bold text-gray-900 group-hover:text-blue-600 mb-3">{similarEvent.name}</h3>
              <div class="flex flex-wrap gap-2 mb-3">
                <span class="badge pressure-{similarEvent.pressureProfile.level} text-xs">
                  {similarEvent.pressureProfile.level} Pressure
                </span>
                <span class="badge solo-{similarEvent.socialStructure.soloFriendliness} text-xs">
                  {similarEvent.socialStructure.soloFriendliness} Solo
                </span>
              </div>
              <p class="text-sm text-gray-600">{similarEvent.properties.slice(0, 2).join(' • ')}</p>
            </a>
          {/each}
        </div>
      </div>
    {/if}
    
    <!-- Compare CTA -->
    <div class="text-center mt-12">
      <div class="bg-blue-50 rounded-lg p-8 border border-blue-100">
        <h3 class="text-xl font-bold text-gray-900 mb-3">Want to compare this with another event type?</h3>
        <p class="text-gray-600 mb-6">Find the perfect match for your comfort level and preferences.</p>
        <a 
          href="/event-types" 
          class="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 font-semibold"
        >
          Browse All Events to Compare
          <svg class="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
          </svg>
        </a>
      </div>
    </div>
  </div>
  
  <style>
    .badge {
      @apply px-3 py-1.5 rounded-full text-sm font-semibold inline-block;
    }
    
    .pressure-low { @apply bg-green-100 text-green-800; }
    .pressure-medium { @apply bg-yellow-100 text-yellow-800; }
    .pressure-high { @apply bg-red-100 text-red-800; }
    
    .solo-high { @apply bg-green-100 text-green-800; }
    .solo-moderate { @apply bg-yellow-100 text-yellow-800; }
    .solo-low { @apply bg-red-100 text-red-800; }
    
    .touch-none { @apply bg-gray-100 text-gray-800; }
    .touch-low { @apply bg-blue-100 text-blue-800; }
    .touch-moderate { @apply bg-indigo-100 text-indigo-800; }
    .touch-high { @apply bg-purple-100 text-purple-800; }
  </style>
{:else}
  <div class="container mx-auto px-4 py-16 text-center">
    <div class="max-w-md mx-auto">
      <div class="w-20 h-20 mx-auto mb-6 text-gray-300">
        <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" 
                d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      </div>
      <h1 class="text-3xl font-bold text-gray-900 mb-4">Event Type Not Found</h1>
      <p class="text-gray-600 mb-8">The event type you're looking for doesn't exist or may have been moved.</p>
      <a href="/event-types" 
         class="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 font-semibold">
        Browse All Event Types
        <svg class="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
        </svg>
      </a>
    </div>

    <!-- Add this section before the closing </div> -->
<div class="mt-8 bg-gray-50 p-6 rounded-lg">
  <h3 class="text-xl font-bold text-gray-900 mb-3">Compare with Other Events</h3>
  <p class="text-gray-600 mb-4">See how this compares to other event types to find your perfect match.</p>
  <div class="flex flex-wrap gap-3">
    {#each similarEvents as similarEvent}
      <a 
        href="/compare/event-types/{event!.id}/{similarEvent.id}"
        class="px-4 py-2 bg-white border border-gray-300 rounded-lg hover:border-blue-300 hover:bg-blue-50 text-gray-700"
      >
        Compare with {similarEvent.name}
      </a>
    {/each}
    <a 
      href="/event-types"
      class="px-4 py-2 bg-blue-100 text-blue-700 rounded-lg hover:bg-blue-200 font-medium"
    >
      Browse All to Compare
    </a>
  </div>
</div>

  </div>
{/if}