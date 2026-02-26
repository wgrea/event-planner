<!-- src/routes/drinks/+page.svelte -->
<script lang="ts">
  import type { Drink, FilterState } from '$lib/types';
  import { filterDrinks, normalizeOriginToRegion } from '$lib/utils/drink-filters';
  import FilterBar from '$lib/components/drinks/FilterBar.svelte';
  import DrinkGrid from '$lib/components/drinks/DrinkGrid.svelte';

  export let data;

  console.log('Data received:', data);
  console.log('Number of drinks:', data.drinks?.length);
  
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

<!-- Remove the comments and use proper bind: syntax -->
<FilterBar
  bind:selectedCategory
  bind:selectedRegion
  bind:selectedStrength
  bind:searchQuery
  onFilterChange={applyFilters}
  onClearFilters={clearFilters}
/>

<!-- RESULTS COUNT -->
<div class="max-w-4xl mx-auto px-6 mb-4 text-gray-600 text-sm">
  Showing {filteredDrinks.length} of {allDrinks.length} drinks
</div>

<DrinkGrid drinks={filteredDrinks} />