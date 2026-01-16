<!-- src/routes/+page.svelte -->

<!--
Analyze:
- Meetup
- Eventbrite's discovery side
- Atlas Obscura
- Pinterest
-->

<script lang="ts">
  import EventTypeSelector from '$lib/components/EventTypeSelector.svelte';
  import EventTypeCard from '$lib/components/event-types/EventTypeCard.svelte';
  import { socialEventTypes } from '$lib/data/socialEventTypes';
  
  // Get a mix of event types for the showcase
  const showcaseEvents = [
    socialEventTypes.find(e => e.id === 'hobby-knitting-circle'),
    socialEventTypes.find(e => e.id === 'dance-salsa-social'),
    socialEventTypes.find(e => e.id === 'music-rave')
  ].filter(Boolean);
</script>

<svelte:head>
  <title>Social Event Explorer - Find Your Perfect Social Activity</title>
</svelte:head>

<div class="min-h-screen bg-linear-to-br from-gray-50 to-white">
  <!-- Hero Section -->
  <div class="container mx-auto px-4 py-12 md:py-20">
    <div class="text-center max-w-3xl mx-auto">
      <h1 class="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
        Find Social Events That <span class="text-blue-600">Actually Feel Good</span>
      </h1>
      <p class="text-xl text-gray-600 mb-8">
        Discover low-pressure activities based on your comfort with touch, social pressure, and solo attendance.
      </p>
      <div class="flex flex-col sm:flex-row gap-4 justify-center">
        <a 
          href="/event-types" 
          class="px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 font-semibold text-lg transition-colors"
        >
          Explore Event Types
        </a>
      </div>
    </div>
  </div>

</div>