<script lang="ts">
  import { page } from '$app/stores';
  import { socialEventTypes } from '$lib/data/socialEventTypes';
  import { compareEventTypes } from '$lib/utils/compareEvents';
  
  $: eventAId = $page.params.typeA;
  $: eventBId = $page.params.typeB;
  
  $: eventA = socialEventTypes.find(e => e.id === eventAId);
  $: eventB = socialEventTypes.find(e => e.id === eventBId);
  
  $: comparison = eventA && eventB ? compareEventTypes(eventA, eventB) : null;
</script>

<svelte:head>
  <title>
    {eventA && eventB 
      ? `Compare: ${eventA.name} vs ${eventB.name}` 
      : 'Event Type Comparison'}
  </title>
</svelte:head>

{#if eventA && eventB && comparison}
  <div class="container mx-auto px-4 py-8">
    <!-- Header -->
    <div class="mb-8">
      <a href="/event-types" class="inline-flex items-center text-blue-600 hover:text-blue-800 mb-4">
        <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
        </svg>
        Back to Event Types
      </a>
      <h1 class="text-3xl font-bold text-gray-900">
        Compare: <span class="text-blue-600">{eventA.name}</span> vs <span class="text-purple-600">{eventB.name}</span>
      </h1>
    </div>
    
    <!-- Comparison Grid -->
    <div class="grid lg:grid-cols-2 gap-8">
      <!-- Event A -->
      <div class="bg-white rounded-lg border border-gray-200 p-6">
        <div class="flex items-center justify-between mb-4">
          <h2 class="text-2xl font-bold text-blue-600">{eventA.name}</h2>
          <span class="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">
            {eventA.category}
          </span>
        </div>
        
        <div class="grid grid-cols-3 gap-3 mb-6">
          <div class="text-center">
            <div class="badge pressure-{eventA.pressureProfile.level} mb-1">
              {eventA.pressureProfile.level}
            </div>
            <div class="text-xs text-gray-500">Pressure</div>
          </div>
          <div class="text-center">
            <div class="badge solo-{eventA.socialStructure.soloFriendliness} mb-1">
              {eventA.socialStructure.soloFriendliness}
            </div>
            <div class="text-xs text-gray-500">Solo</div>
          </div>
          <div class="text-center">
            <div class="badge touch-{eventA.touchProfile.level} mb-1">
              {eventA.touchProfile.level}
            </div>
            <div class="text-xs text-gray-500">Touch</div>
          </div>
        </div>
        
        <div class="space-y-4">
          <div>
            <h3 class="font-semibold text-gray-900 mb-2">Best For:</h3>
            <ul class="list-disc list-inside ml-2 space-y-1">
              {#each comparison.bestFor.eventA as group}
                <li class="text-gray-700">{group}</li>
              {/each}
            </ul>
          </div>
          
          <div>
            <h3 class="font-semibold text-gray-900 mb-2">Properties:</h3>
            <div class="flex flex-wrap gap-2">
              {#each eventA.properties as property}
                <span class="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">
                  {property}
                </span>
              {/each}
            </div>
          </div>
        </div>
        
        <a href="/event-types/{eventA.id}" class="inline-block mt-6 text-blue-600 hover:text-blue-800 font-medium">
          View full details →
        </a>
      </div>
      
      <!-- Event B -->
      <div class="bg-white rounded-lg border border-gray-200 p-6">
        <div class="flex items-center justify-between mb-4">
          <h2 class="text-2xl font-bold text-purple-600">{eventB.name}</h2>
          <span class="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">
            {eventB.category}
          </span>
        </div>
        
        <div class="grid grid-cols-3 gap-3 mb-6">
          <div class="text-center">
            <div class="badge pressure-{eventB.pressureProfile.level} mb-1">
              {eventB.pressureProfile.level}
            </div>
            <div class="text-xs text-gray-500">Pressure</div>
          </div>
          <div class="text-center">
            <div class="badge solo-{eventB.socialStructure.soloFriendliness} mb-1">
              {eventB.socialStructure.soloFriendliness}
            </div>
            <div class="text-xs text-gray-500">Solo</div>
          </div>
          <div class="text-center">
            <div class="badge touch-{eventB.touchProfile.level} mb-1">
              {eventB.touchProfile.level}
            </div>
            <div class="text-xs text-gray-500">Touch</div>
          </div>
        </div>
        
        <div class="space-y-4">
          <div>
            <h3 class="font-semibold text-gray-900 mb-2">Best For:</h3>
            <ul class="list-disc list-inside ml-2 space-y-1">
              {#each comparison.bestFor.eventB as group}
                <li class="text-gray-700">{group}</li>
              {/each}
            </ul>
          </div>
          
          <div>
            <h3 class="font-semibold text-gray-900 mb-2">Properties:</h3>
            <div class="flex flex-wrap gap-2">
              {#each eventB.properties as property}
                <span class="px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-sm">
                  {property}
                </span>
              {/each}
            </div>
          </div>
        </div>
        
        <a href="/event-types/{eventB.id}" class="inline-block mt-6 text-purple-600 hover:text-purple-800 font-medium">
          View full details →
        </a>
      </div>
    </div>
    
    <!-- Comparison Results -->
    <div class="mt-8 bg-white rounded-lg border border-gray-200 p-6">
      <h2 class="text-2xl font-bold text-gray-900 mb-6">Comparison Results</h2>
      
      <!-- Key Differences -->
      <div class="mb-8">
        <h3 class="text-xl font-semibold text-gray-900 mb-4">Key Differences</h3>
        <div class="space-y-4">
          {#each comparison.keyDifferences as diff}
            <div class="p-4 bg-gray-50 rounded-lg">
              <div class="font-medium text-gray-900 mb-2">{diff.category}</div>
              <div class="grid grid-cols-3 gap-4">
                <div class="text-center">
                  <div class="font-bold text-blue-600">{diff.a}</div>
                  <div class="text-sm text-gray-500">{eventA.name}</div>
                </div>
                <div class="text-center">
                  <div class="font-bold text-gray-900">vs</div>
                </div>
                <div class="text-center">
                  <div class="font-bold text-purple-600">{diff.b}</div>
                  <div class="text-sm text-gray-500">{eventB.name}</div>
                </div>
              </div>
              <div class="mt-3 text-gray-700">
                <span class="font-medium">Implication:</span> {diff.implication}
              </div>
            </div>
          {/each}
        </div>
      </div>
      
      <!-- Shared Properties -->
      {#if comparison.sharedProperties.length > 0}
        <div class="mb-8">
          <h3 class="text-xl font-semibold text-gray-900 mb-4">Shared Properties</h3>
          <div class="flex flex-wrap gap-2">
            {#each comparison.sharedProperties as property}
              <span class="px-3 py-1 bg-green-100 text-green-800 rounded-full">
                {property}
              </span>
            {/each}
          </div>
        </div>
      {/if}
      
      <!-- Shared Tips -->
      {#if comparison.sharedTips.length > 0}
        <div>
          <h3 class="text-xl font-semibold text-gray-900 mb-4">Tips That Apply to Both</h3>
          <ul class="space-y-2">
            {#each comparison.sharedTips as tip}
              <li class="flex items-start">
                <svg class="w-5 h-5 text-green-500 mr-2 shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                </svg>
                <span class="text-gray-700">{tip}</span>
              </li>
            {/each}
          </ul>
        </div>
      {/if}
    </div>
    
    <!-- Compare Another -->
    <div class="mt-8 text-center">
      <a 
        href="/event-types" 
        class="inline-flex items-center px-6 py-3 bg-gray-900 text-white rounded-lg hover:bg-gray-800 font-semibold"
      >
        <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
        </svg>
        Compare Other Event Types
      </a>
    </div>
  </div>
  
  <style>
    @reference "tailwindcss";
    
    .badge {
      padding: 0.25rem 0.75rem;
      border-radius: 9999px;
      font-size: 0.875rem;
      font-weight: 600;
      display: inline-block;
    }
    
    .pressure-low { background-color: rgb(220 252 231); color: rgb(6 95 70); }
    .pressure-medium { background-color: rgb(254 243 199); color: rgb(146 64 14); }
    .pressure-high { background-color: rgb(254 226 226); color: rgb(153 27 27); }
    
    .solo-high { background-color: rgb(220 252 231); color: rgb(6 95 70); }
    .solo-moderate { background-color: rgb(254 243 199); color: rgb(146 64 14); }
    .solo-low { background-color: rgb(254 226 226); color: rgb(153 27 27); }
    
    .touch-none { background-color: rgb(241 245 249); color: rgb(71 85 105); }
    .touch-low { background-color: rgb(219 234 254); color: rgb(30 64 175); }
    .touch-moderate { background-color: rgb(224 231 255); color: rgb(55 48 163); }
    .touch-high { background-color: rgb(237 233 254); color: rgb(91 33 182); }
  </style>
{:else}
  <div class="container mx-auto px-4 py-16 text-center">
    <h1 class="text-3xl font-bold text-gray-900 mb-4">Comparison Not Found</h1>
    <p class="text-gray-600 mb-8">One or both event types could not be found.</p>
    <a href="/event-types" class="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 font-semibold">
      Browse Event Types to Compare
    </a>
  </div>
{/if}