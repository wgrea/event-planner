<!-- src/routes/low-pressure/+page.svelte -->
<script lang="ts">
  import EventTypeCard from '$lib/components/event-types/EventTypeCard.svelte';
  import { socialEventTypes } from '$lib/data/socialEventTypes';
  
  // Filter for low-pressure, high solo-friendly events
  const lowPressureEvents = socialEventTypes.filter(event => 
    event.pressureProfile.level === 'low' && 
    event.socialStructure.soloFriendliness === 'high'
  );
</script>

<svelte:head>
  <title>Low Pressure & Solo-Friendly Events</title>
</svelte:head>

<div class="container mx-auto px-4 py-8">
  <div class="mb-8">
    <h1 class="text-3xl font-bold text-gray-900 mb-2">Low Pressure & Solo-Friendly Events</h1>
    <p class="text-gray-600">
      Perfect for introverts, socially anxious individuals, or anyone who prefers activities where the focus is on the experience, not social performance.
    </p>
  </div>
  
  <!-- Stats -->
  <div class="grid md:grid-cols-3 gap-6 mb-8">
    <div class="bg-blue-50 p-6 rounded-lg">
      <div class="text-3xl font-bold text-blue-600 mb-2">{lowPressureEvents.length}</div>
      <div class="font-medium text-gray-900">Event Types</div>
      <div class="text-sm text-gray-600">Low pressure, high solo-friendly</div>
    </div>
    <div class="bg-green-50 p-6 rounded-lg">
      <div class="text-3xl font-bold text-green-600 mb-2">🎯</div>
      <div class="font-medium text-gray-900">Activity-Focused</div>
      <div class="text-sm text-gray-600">Focus on the task, not socializing</div>
    </div>
    <div class="bg-purple-50 p-6 rounded-lg">
      <div class="text-3xl font-bold text-purple-600 mb-2">🤝</div>
      <div class="font-medium text-gray-900">Built-in Structure</div>
      <div class="text-sm text-gray-600">Clear expectations reduce anxiety</div>
    </div>
  </div>
  
  <!-- Event Grid -->
  {#if lowPressureEvents.length > 0}
    <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
      {#each lowPressureEvents as event}
        <EventTypeCard {event} />
      {/each}
    </div>
  {:else}
    <div class="text-center py-12">
      <p class="text-gray-500">No events match these criteria.</p>
    </div>
  {/if}
  
  <!-- Tips Section -->
  <div class="mt-12 bg-gray-50 rounded-lg p-8">
    <h2 class="text-2xl font-bold text-gray-900 mb-4">Tips for Low-Pressure Socializing</h2>
    <div class="grid md:grid-cols-2 gap-6">
      <div>
        <h3 class="font-semibold text-gray-900 mb-2">🎭 Choose Activity-Focused Events</h3>
        <p class="text-gray-700">Events with a clear activity (crafting, games, volunteering) give you something to focus on besides conversation.</p>
      </div>
      <div>
        <h3 class="font-semibold text-gray-900 mb-2">⏱️ Set Time Boundaries</h3>
        <p class="text-gray-700">Plan to stay for a specific duration. Knowing you can leave reduces pressure.</p>
      </div>
      <div>
        <h3 class="font-semibold text-gray-900 mb-2">🎯 Have an "Escape Plan"</h3>
        <p class="text-gray-700">Know where quiet spaces or exits are. Having a plan reduces anxiety.</p>
      </div>
      <div>
        <h3 class="font-semibold text-gray-900 mb-2">📝 Prepare Conversation Starters</h3>
        <p class="text-gray-700">Have a few questions about the activity ready. Takes pressure off small talk.</p>
      </div>
    </div>
  </div>
</div>