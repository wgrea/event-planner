<!-- src/routes/drinks/+page.svelte -->
<script lang="ts">

  import { onMount } from 'svelte';
  
  // Import all drink category files
  import beerData from '$lib/data/drinks/beer.json';
  import wineData from '$lib/data/drinks/wine.json';
  import spiritsData from '$lib/data/drinks/spirits.json';
  import cocktailsData from '$lib/data/drinks/cocktails.json';
  import fermentedData from '$lib/data/drinks/fermented-traditional.json';
  import nonAlcoholicData from '$lib/data/drinks/non-alcoholic.json';

  type Drink = {
    id: string;
    name: string;
    category: string;
    subcategory?: string;
    alcohol_percentage?: number;
    origin?: string;
    flavor_profile?: string[];
    typical_setting?: string[];
    cultural_notes?: string;
    global_availability?: string;
    regional_identity?: string;
  };

  // Combine all drinks
  let allDrinks: Drink[] = [];
  let filteredDrinks: Drink[] = [];
  let searchQuery = '';

  // Load all drinks on mount
  onMount(() => {
    allDrinks = [
      ...(beerData as Drink[]),
      ...(wineData as Drink[]),
      ...(spiritsData as Drink[]),
      ...(cocktailsData as Drink[]),
      ...(fermentedData as Drink[]),
      ...(nonAlcoholicData as Drink[])
    ];
    
    // Sort alphabetically
    allDrinks.sort((a, b) => a.name.localeCompare(b.name));
    filteredDrinks = allDrinks;
  });

  // Search function
  function handleSearch(event: Event) {
    const query = (event.target as HTMLInputElement).value.toLowerCase();
    searchQuery = query;
    
    if (!query) {
      filteredDrinks = allDrinks;
      return;
    }
    
    filteredDrinks = allDrinks.filter(drink => 
      drink.name.toLowerCase().includes(query) ||
      drink.category?.toLowerCase().includes(query) ||
      drink.origin?.toLowerCase().includes(query) ||
      drink.regional_identity?.toLowerCase().includes(query) ||
      drink.flavor_profile?.some(flavor => flavor.toLowerCase().includes(query))
    );
  }

  // Get a badge color based on category
  function getCategoryColor(category: string): string {
    const colors: Record<string, string> = {
      'Beer': 'bg-yellow-100 text-yellow-800',
      'Wine': 'bg-purple-100 text-purple-800',
      'Spirits': 'bg-blue-100 text-blue-800',
      'Cocktails': 'bg-green-100 text-green-800',
      'Fermented Traditional': 'bg-orange-100 text-orange-800',
      'Non-Alcoholic Ritual': 'bg-gray-100 text-gray-800'
    };
    return colors[category] || 'bg-gray-100 text-gray-800';
  }

  // Format alcohol percentage
  function formatAlcohol(percentage?: number): string {
    if (!percentage) return '';
    return `${percentage}% ABV`;
  }
</script>

<div class="max-w-4xl mx-auto p-6">
  <h1 class="text-3xl font-bold mb-2">Global Drinks Database</h1>
  <p class="text-gray-600 mb-6">Manufactured & consumed worldwide • {allDrinks.length} drinks</p>

  <!-- Search Bar -->
  <div class="mb-8">
    <input
      type="text"
      placeholder="Search by name, category, origin, or flavor..."
      class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
      on:input={handleSearch}
      bind:value={searchQuery}
    />
  </div>

  <!-- Results count -->
  <p class="text-sm text-gray-500 mb-4">
    Showing {filteredDrinks.length} of {allDrinks.length} drinks
  </p>

  <!-- Drinks Grid -->
  <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
    {#each filteredDrinks as drink (drink.id)}
      <a
        href={`/drinks/${drink.id}`}
        class="block border rounded-lg p-5 hover:shadow-lg transition-shadow hover:border-blue-200 bg-white"
      >
        <div class="flex justify-between items-start mb-2">
          <h3 class="text-xl font-semibold">{drink.name}</h3>
          <span class={`text-xs px-2 py-1 rounded-full ${getCategoryColor(drink.category)}`}>
            {drink.category}
          </span>
        </div>

        <div class="flex flex-wrap gap-2 text-sm text-gray-600 mb-3">
          {#if drink.origin}
            <span class="flex items-center">
              <span class="mr-1">🌍</span> {drink.origin}
            </span>
          {/if}
          
          {#if drink.alcohol_percentage}
            <span class="flex items-center">
              <span class="mr-1">🍷</span> {formatAlcohol(drink.alcohol_percentage)}
            </span>
          {/if}
          
          {#if drink.regional_identity}
            <span class="flex items-center">
              <span class="mr-1">📍</span> {drink.regional_identity}
            </span>
          {/if}
        </div>

        {#if drink.flavor_profile && drink.flavor_profile.length > 0}
          <div class="flex flex-wrap gap-1 mb-3">
            {#each drink.flavor_profile.slice(0, 4) as flavor}
              <span class="text-xs bg-gray-100 px-2 py-1 rounded-full">
                {flavor}
              </span>
            {/each}
            {#if drink.flavor_profile.length > 4}
              <span class="text-xs text-gray-500">+{drink.flavor_profile.length - 4}</span>
            {/if}
          </div>
        {/if}

        {#if drink.typical_setting && drink.typical_setting.length > 0}
          <p class="text-sm text-gray-500 line-clamp-2">
            {drink.typical_setting.slice(0, 3).join(' • ')}
          </p>
        {/if}

        {#if drink.cultural_notes}
          <p class="text-sm text-gray-600 mt-2 line-clamp-2">
            {drink.cultural_notes}
          </p>
        {/if}

        {#if drink.global_availability}
          <div class="mt-3 text-xs">
            <span class="inline-flex items-center px-2 py-1 bg-blue-50 text-blue-700 rounded">
              {drink.global_availability === 'widespread' ? '🌎 Global' : 
               drink.global_availability === 'regional' ? '🌍 Regional' : '🌏 Local'}
            </span>
          </div>
        {/if}
      </a>
    {/each}
  </div>

  <!-- Empty state -->
  {#if filteredDrinks.length === 0}
    <div class="text-center py-12">
      <p class="text-gray-500 text-lg">No drinks found matching "{searchQuery}"</p>
      <button 
        class="mt-4 text-blue-600 hover:text-blue-800"
        on:click={() => {
          searchQuery = '';
          filteredDrinks = allDrinks;
        }}
      >
        Clear search
      </button>
    </div>
  {/if}
</div>

