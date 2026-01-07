<!-- src/routes/event-types/+page.svelte -->
<script lang="ts">
  import EventTypeCard from '$lib/components/event-types/EventTypeCard.svelte';
  import { socialEventTypes } from '$lib/data/socialEventTypes';
  
  let searchQuery = '';
  let selectedCategories: string[] = [];
  let selectedPressureLevels: string[] = [];  // Add this
  let selectedSoloLevels: string[] = [];      // Add this
  
  // Get unique categories
  const allCategories = [...new Set(socialEventTypes.map(event => event.category))];
  
  // Filter events based on all criteria
  $: filteredEvents = socialEventTypes.filter(event => {
    const matchesSearch = searchQuery === '' || 
      event.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      event.properties.some(p => p.toLowerCase().includes(searchQuery.toLowerCase()));
    
    const matchesCategory = selectedCategories.length === 0 || 
      selectedCategories.includes(event.category);
    
    // Add pressure level filtering
    const matchesPressure = selectedPressureLevels.length === 0 ||
      selectedPressureLevels.includes(event.pressureProfile.level);
    
    // Add solo level filtering  
    const matchesSolo = selectedSoloLevels.length === 0 ||
      selectedSoloLevels.includes(event.socialStructure.soloFriendliness);
    
    return matchesSearch && matchesCategory && matchesPressure && matchesSolo;
  });
  
  function toggleCategory(category: string) {
    if (selectedCategories.includes(category)) {
      selectedCategories = selectedCategories.filter(c => c !== category);
    } else {
      selectedCategories = [...selectedCategories, category];
    }
  }
  
  // Add these functions:
  function togglePressureLevel(level: string) {
    if (selectedPressureLevels.includes(level)) {
      selectedPressureLevels = selectedPressureLevels.filter(l => l !== level);
    } else {
      selectedPressureLevels = [...selectedPressureLevels, level];
    }
  }
  
  function toggleSoloLevel(level: string) {
    if (selectedSoloLevels.includes(level)) {
      selectedSoloLevels = selectedSoloLevels.filter(l => l !== level);
    } else {
      selectedSoloLevels = [...selectedSoloLevels, level];
    }
  }
  
  function clearFilters() {
    searchQuery = '';
    selectedCategories = [];
    selectedPressureLevels = [];  // Clear this too
    selectedSoloLevels = [];      // Clear this too
  }
</script>

<svelte:head>
  <title>Social Event Types - Event Explorer</title>
</svelte:head>

<div class="container mx-auto px-4 py-8">
  <!-- Header -->
  <div class="mb-8">
    <h1 class="text-3xl font-bold text-gray-900 mb-2">Social Event Types</h1>
    <p class="text-gray-600">
      Browse different types of social activities. Filter by your comfort level and preferences.
    </p>
  </div>
  
  <!-- Search and Filters -->
  <div class="bg-white p-6 rounded-lg border border-gray-200 mb-8 shadow-sm">
    <!-- Search -->
    <div class="mb-6">
      <div class="relative">
        <svg class="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" 
             fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" 
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
        <input
          type="text"
          placeholder="Search event types (e.g., 'dance', 'low pressure', 'solo')..."
          bind:value={searchQuery}
          class="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
        />
      </div>
    </div>
    
    <!-- Category Filters -->
    <div>
      <h3 class="font-bold mb-3 text-gray-900">Filter by Category:</h3>
      <div class="flex flex-wrap gap-2">
        {#each allCategories as category}
          <button
            on:click={() => toggleCategory(category)}
            class="px-4 py-2 rounded-full border transition-colors {selectedCategories.includes(category) 
              ? 'bg-blue-600 text-white border-blue-600' 
              : 'bg-white text-gray-700 border-gray-300 hover:bg-gray-50'}"
          >
            {category}
          </button>
        {/each}
      </div>
    </div>

    <!-- Add to your existing filtering section -->
<div class="mb-6">
  <h3 class="font-bold mb-3 text-gray-900">Filter by Pressure Level:</h3>
  <div class="flex flex-wrap gap-2">
    {#each ['low', 'medium', 'high'] as level}
      <button
        on:click={() => togglePressureLevel(level)}
        class:selected={selectedPressureLevels.includes(level)}
        class="px-4 py-2 rounded-full border transition-colors"
      >
        {level} Pressure
      </button>
    {/each}
  </div>
</div>

<div class="mb-6">
  <h3 class="font-bold mb-3 text-gray-900">Filter by Solo Friendliness:</h3>
  <div class="flex flex-wrap gap-2">
    {#each ['high', 'moderate', 'low'] as level}
      <button
        on:click={() => toggleSoloLevel(level)}
        class:selected={selectedSoloLevels.includes(level)}
        class="px-4 py-2 rounded-full border transition-colors"
      >
        {level} Solo-Friendly
      </button>
    {/each}
  </div>
</div>
  </div>
  
  <!-- Results count and clear filters -->
  <div class="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-4">
    <p class="text-gray-600">
      Showing <span class="font-semibold">{filteredEvents.length}</span> of {socialEventTypes.length} event types
      {#if searchQuery}
        for "<span class="font-semibold">{searchQuery}</span>"
      {/if}
    </p>
    
    {#if searchQuery || selectedCategories.length > 0}
      <button 
        on:click={clearFilters}
        class="px-4 py-2 text-sm bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 font-medium"
      >
        Clear Filters
      </button>
    {/if}
  </div>
  
  <!-- Event Grid -->
  {#if filteredEvents.length > 0}
    <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
      {#each filteredEvents as event}
        <EventTypeCard {event} />
      {/each}
    </div>
  {:else}
    <div class="text-center py-12">
      <div class="w-16 h-16 mx-auto mb-4 text-gray-300">
        <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" 
                d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      </div>
      <p class="text-xl text-gray-500 mb-2">No event types match your filters.</p>
      <p class="text-gray-400 mb-6">Try adjusting your search or clearing filters</p>
      <button 
        on:click={clearFilters}
        class="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 font-semibold"
      >
        Clear Filters
      </button>
    </div>
  {/if}
</div>