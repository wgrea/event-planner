<!-- src/lib/components/EventFilters.svelte - FIXED Svelte 5 syntax -->
<script lang="ts">
  import type { EventCategory, PressureLevel, SoloFriendliness, TouchLevel } from '$lib/types/event';
  import {
    CATEGORIES,
    PRESSURE_LEVELS,
    SOLO_FRIENDLINESS_LEVELS,
    TOUCH_LEVELS
  } from '$lib/data/socialEventTypes';

  const { 
    selectedCategories = [],
    selectedPressureLevels = [],
    selectedSoloFriendliness = [],
    selectedTouchLevels = [],
    searchTerm = ''
  } = $props<{
    selectedCategories?: EventCategory[],
    selectedPressureLevels?: PressureLevel[],
    selectedSoloFriendliness?: SoloFriendliness[],
    selectedTouchLevels?: TouchLevel[],
    searchTerm?: string
  }>();

  // Create reactive stores for the filter values
  let categories = $state(selectedCategories);
  let pressureLevels = $state(selectedPressureLevels);
  let soloFriendliness = $state(selectedSoloFriendliness);
  let touchLevels = $state(selectedTouchLevels);
  let search = $state(searchTerm);

  // Format display names
  function formatCategory(category: string): string {
    return category.split('-').map(word => 
      word.charAt(0).toUpperCase() + word.slice(1)
    ).join(' ');
  }

  function formatLevel(level: string): string {
    if (level === 'none') return 'No Touch';
    if (level === 'varies') return 'Touch Level Varies';
    return level.charAt(0).toUpperCase() + level.slice(1) + ' Touch';
  }

  function formatPressure(level: string): string {
    return level.charAt(0).toUpperCase() + level.slice(1) + ' Pressure';
  }

  function formatSolo(level: string): string {
    const levelMap: Record<string, string> = {
      'high': 'Highly Solo-Friendly',
      'moderate': 'Moderately Solo-Friendly',
      'low': 'Low Solo-Friendly'
    };
    return levelMap[level] || level.charAt(0).toUpperCase() + level.slice(1) + ' Solo-Friendly';
  }

  // Toggle functions that properly update the reactive state
  function toggleCategory(category: EventCategory) {
    const currentCategories = categories;
    if (currentCategories.includes(category)) {
      categories = currentCategories.filter((c: EventCategory) => c !== category);
    } else {
      categories = [...currentCategories, category];
    }
  }

  function togglePressure(level: PressureLevel) {
    const currentPressureLevels = pressureLevels;
    if (currentPressureLevels.includes(level)) {
      pressureLevels = currentPressureLevels.filter((l: PressureLevel) => l !== level);
    } else {
      pressureLevels = [...currentPressureLevels, level];
    }
  }

  function toggleSolo(level: SoloFriendliness) {
    const currentSoloFriendliness = soloFriendliness;
    if (currentSoloFriendliness.includes(level)) {
      soloFriendliness = currentSoloFriendliness.filter((l: SoloFriendliness) => l !== level);
    } else {
      soloFriendliness = [...currentSoloFriendliness, level];
    }
  }

  function toggleTouch(level: TouchLevel) {
    const currentTouchLevels = touchLevels;
    if (currentTouchLevels.includes(level)) {
      touchLevels = currentTouchLevels.filter((l: TouchLevel) => l !== level);
    } else {
      touchLevels = [...currentTouchLevels, level];
    }
  }

  function clearAllFilters() {
    categories = [];
    pressureLevels = [];
    soloFriendliness = [];
    touchLevels = [];
    search = '';
  }
</script>

<div class="space-y-6">
  <!-- Search -->
  <div>
    <label for="search" class="block text-sm font-medium text-gray-700 mb-2">Search Events</label>
    <input
      type="text"
      id="search"
      bind:value={search}
      placeholder="Search event types..."
      class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
    />
  </div>

  <!-- Categories Filter -->
  <div>
    <h3 class="font-medium text-gray-700 mb-3">Filter by Category:</h3>
    <div class="flex flex-wrap gap-2">
      {#each CATEGORIES as category}
        <button
          onclick={() => toggleCategory(category as EventCategory)}
          class="px-3 py-1.5 rounded-full text-sm font-medium transition-all
            {categories.includes(category as EventCategory)
              ? 'bg-blue-600 text-white shadow-sm border border-blue-700'
              : 'bg-gray-100 text-gray-700 hover:bg-gray-200 border border-gray-300'}"
        >
          {formatCategory(category)}
        </button>
      {/each}
    </div>
  </div>

  <!-- Pressure Level Filter -->
  <div>
    <h3 class="font-medium text-gray-700 mb-3">Filter by Pressure Level:</h3>
    <div class="flex flex-wrap gap-2">
      {#each PRESSURE_LEVELS as level}
        <button
          onclick={() => togglePressure(level as PressureLevel)}
          class="px-3 py-1.5 rounded-full text-sm font-medium transition-all
            {pressureLevels.includes(level as PressureLevel)
              ? 'bg-green-600 text-white shadow-sm border border-green-700'
              : 'bg-gray-100 text-gray-700 hover:bg-gray-200 border border-gray-300'}"
        >
          {formatPressure(level)}
        </button>
      {/each}
    </div>
  </div>

  <!-- Solo Friendliness Filter -->
  <div>
    <h3 class="font-medium text-gray-700 mb-3">Filter by Solo Friendliness:</h3>
    <div class="flex flex-wrap gap-2">
      {#each SOLO_FRIENDLINESS_LEVELS as level}
        <button
          onclick={() => toggleSolo(level as SoloFriendliness)}
          class="px-3 py-1.5 rounded-full text-sm font-medium transition-all
            {soloFriendliness.includes(level as SoloFriendliness)
              ? 'bg-purple-600 text-white shadow-sm border border-purple-700'
              : 'bg-gray-100 text-gray-700 hover:bg-gray-200 border border-gray-300'}"
        >
          {formatSolo(level)}
        </button>
      {/each}
    </div>
  </div>

  <!-- Touch Level Filter -->
  <div>
    <h3 class="font-medium text-gray-700 mb-3">Filter by Touch Level:</h3>
    <div class="flex flex-wrap gap-2">
      {#each TOUCH_LEVELS as level}
        <button
          onclick={() => toggleTouch(level as TouchLevel)}
          class="px-3 py-1.5 rounded-full text-sm font-medium transition-all
            {touchLevels.includes(level as TouchLevel)
              ? 'bg-red-600 text-white shadow-sm border border-red-700'
              : 'bg-gray-100 text-gray-700 hover:bg-gray-200 border border-gray-300'}"
        >
          {formatLevel(level)}
        </button>
      {/each}
    </div>
  </div>

  <!-- Clear Filters -->
  <button
    onclick={clearAllFilters}
    class="w-full px-4 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition-colors font-medium"
  >
    Clear All Filters
  </button>
</div>