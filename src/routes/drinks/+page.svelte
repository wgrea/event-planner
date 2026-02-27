<!-- src/routes/drinks/+page.svelte -->
<script lang="ts">
  import type { Drink, FilterState } from '$lib/types';
  import { filterDrinks, normalizeOriginToRegion } from '$lib/utils/drink-filters';
  import FilterBar from '$lib/components/drinks/FilterBar.svelte';
  import DrinkGrid from '$lib/components/drinks/DrinkGrid.svelte';

  export let data;

  console.log('Data received:', data);
  console.log('Number of drinks:', data.drinks?.length);
  
  let filtersOpen = false;
  let allDrinks: Drink[] = data.drinks || [];
  let filteredDrinks: Drink[] = allDrinks;

  // Filter state
  let searchQuery = '';
  let selectedCategory: string | null = null;
  let selectedRegion: string | null = null;
  let selectedStrength: string | null = null;

  // Apply filters whenever any filter changes
  function applyFilters() {
    console.log('Applying filters with:', { 
      searchQuery, 
      selectedCategory, 
      selectedRegion, 
      selectedStrength 
    });
    
    const filters: FilterState = {
      searchQuery,
      selectedCategory,
      selectedRegion,
      selectedStrength
    };
    filteredDrinks = filterDrinks(allDrinks, filters);
    console.log('Filtered drinks count:', filteredDrinks.length);
  }

  // Debug mapping
  $: {
    if (allDrinks.length > 0) {
      console.log('Sample drink mapping:', allDrinks[0]?.name, 
        'origin:', allDrinks[0]?.origin,
        'maps to:', normalizeOriginToRegion(allDrinks[0]?.origin));
    }
  }

  function clearFilters() {
    selectedCategory = null;
    selectedRegion = null;
    selectedStrength = null;
    searchQuery = '';
    filteredDrinks = allDrinks;
  }

  // Watch for filter changes
  $: {
    console.log('Filter state changed:', {
      searchQuery,
      selectedCategory,
      selectedRegion,
      selectedStrength
    });
  }
</script>

<!-- Sticky header -->
<div class="sticky top-0 z-30 bg-[#FFF7ED] px-4 pt-3 pb-2 shadow-md space-y-2">

  <!-- Back + Title -->
  <a href="/" class="text-blue-700 font-semibold">← Back to Home</a>

  <h1 class="text-xl font-semibold text-blue-700">
    Global Drinks Database
  </h1>

  <!-- Toggle -->
  <button
    class="px-3 py-1.5 rounded-full bg-blue-50 text-blue-700 border border-blue-200 text-sm font-medium shadow-sm"
    on:click={() => filtersOpen = !filtersOpen}
  >
    {filtersOpen ? 'Close Filters ▲' : 'Open Filters ▼'}
  </button>

  <!-- Filter panel (NOW inside sticky container) -->
  {#if filtersOpen}
    <div class="pt-2 space-y-3">
      <FilterBar
        bind:selectedCategory
        bind:selectedRegion
        bind:selectedStrength
        bind:searchQuery
        onFilterChange={applyFilters}
        onClearFilters={clearFilters}
      />
    </div>
  {/if}

</div>

<!-- Results count -->
<div class="max-w-4xl mx-auto px-6 mb-4 text-gray-600 text-sm">
  Showing {filteredDrinks.length} of {allDrinks.length} drinks
</div>

<DrinkGrid drinks={filteredDrinks} />
