<!-- src/lib/components/drinks/FilterBar.svelte -->
<script lang="ts">
  import { CATEGORIES, REGIONS, STRENGTH_LEVELS } from '$lib/types';

  // These should be bindable from the parent
  export let selectedCategory: string | null;
  export let selectedRegion: string | null;
  export let selectedStrength: string | null;
  export let searchQuery: string;
  export let onFilterChange: () => void;
  export let onClearFilters: () => void;
</script>

<div class="bg-orange-50 border-b border-orange-100 py-8 px-6 mb-8">
  <div class="max-w-4xl mx-auto">
    <h1 class="text-3xl font-bold mb-2">Global Drinks Database</h1>

    <!-- CATEGORY FILTERS -->
    <div class="flex flex-wrap gap-2 mb-6">
      {#each CATEGORIES as cat}
        <button
          class={`px-4 py-2 rounded-full border transition
            ${selectedCategory === cat
              ? 'bg-orange-500 text-white border-orange-600'
              : 'bg-white border-gray-300 text-gray-700 hover:bg-gray-50'}
          `}
          on:click={() => { 
            console.log('Category clicked:', cat, 'Current:', selectedCategory);
            selectedCategory = selectedCategory === cat ? null : cat; 
            console.log('New selectedCategory:', selectedCategory);
            onFilterChange(); 
          }}
        >
          {cat}
        </button>
      {/each}
    </div>

    <!-- REGION + STRENGTH FILTERS -->
    <div class="flex flex-col md:flex-row gap-4 mb-6">
      <select
        class="px-4 py-2 border rounded-lg bg-white"
        bind:value={selectedRegion}
        on:change={() => {
          console.log('Region changed to:', selectedRegion);
          onFilterChange();
        }}
      >
        <option value="">Region (optional)</option>
        {#each REGIONS as region}
          <option value={region}>{region}</option>
        {/each}
      </select>

      <select
        class="px-4 py-2 border rounded-lg bg-white"
        bind:value={selectedStrength}
        on:change={() => {
          console.log('Strength changed to:', selectedStrength);
          onFilterChange();
        }}
      >
        <option value="">Strength (optional)</option>
        {#each STRENGTH_LEVELS as s}
          <option value={s.label}>{s.label}</option>
        {/each}
      </select>
    </div>

    <!-- SEARCH BAR -->
    <input
      type="text"
      placeholder="Search by name, category, or origin..."
      class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-400"
      bind:value={searchQuery}
      on:input={() => {
        console.log('Search query:', searchQuery);
        onFilterChange();
      }}
    />

    <!-- CLEAR FILTERS -->
    {#if selectedCategory || selectedRegion || selectedStrength || searchQuery}
      <button
        class="mt-4 text-sm text-orange-700 hover:text-orange-900 underline"
        on:click={() => {
          console.log('Clear filters clicked');
          onClearFilters();
        }}
      >
        Clear all filters
      </button>
    {/if}
  </div>
</div>