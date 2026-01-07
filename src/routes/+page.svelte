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
  
  <!-- How it Works -->
  <div class="bg-white py-12">
    <div class="container mx-auto px-4">
      <h2 class="text-3xl font-bold text-center text-gray-900 mb-12">How It Works</h2>
      <div class="grid md:grid-cols-3 gap-8">
        <div class="text-center p-6">
          <div class="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <span class="text-2xl">🎯</span>
          </div>
          <h3 class="text-xl font-semibold mb-3">1. Set Your Comfort Level</h3>
          <p class="text-gray-600">Filter by pressure, solo-friendliness, and touch comfort to match your preferences.</p>
        </div>
        <div class="text-center p-6">
          <div class="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <span class="text-2xl">🔍</span>
          </div>
          <h3 class="text-xl font-semibold mb-3">2. Discover Event Types</h3>
          <p class="text-gray-600">Browse different social activities with transparent expectations and tips.</p>
        </div>
        <div class="text-center p-6">
          <div class="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <span class="text-2xl">💡</span>
          </div>
          <h3 class="text-xl font-semibold mb-3">3. Get Practical Guidance</h3>
          <p class="text-gray-600">Learn how to navigate each event type successfully with pro tips and red flags.</p>
        </div>
      </div>
    </div>
  </div>
</div>