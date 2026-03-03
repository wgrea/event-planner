<!-- src/routes/bars/[slug]/+page.svelte -->
<script lang="ts">
  import { page } from '$app/stores';
  import barTypes from '$lib/data/bar-types.json';
  import type { BarType, Drink } from '$lib/types';
  
  // Import all drink files
  import beerData from '$lib/data/drinks/beer.json';
  import wineData from '$lib/data/drinks/wine.json';
  import spiritsData from '$lib/data/drinks/spirits.json';
  import cocktailsData from '$lib/data/drinks/cocktails.json';
  import fermentedData from '$lib/data/drinks/fermented-traditional.json';
  import nonAlcoholicData from '$lib/data/drinks/non-alcoholic.json';
  
  import SafetyCard from '$lib/components/safety/SafetyCard.svelte';

  const slug = $page.params.slug!;

  // Type the imported JSON data
  const bars = barTypes as BarType[];
  const bar = bars.find(b => b.slug === slug);

  // Combine all drinks
  const allDrinks: Drink[] = [
    ...(beerData as Drink[]),
    ...(wineData as Drink[]),
    ...(spiritsData as Drink[]),
    ...(cocktailsData as Drink[]),
    ...(fermentedData as Drink[]),
    ...(nonAlcoholicData as Drink[])
  ];

  // Helper function to find drinks by category
  function findDrinksByCategories(categories: string[]): Drink[] {
    if (!categories.length) return [];
    
    return allDrinks.filter(drink => {
      return categories.some(category => {
        const cat = category.toLowerCase();
        return (
          drink.category?.toLowerCase().includes(cat) ||
          drink.subcategory?.toLowerCase().includes(cat) ||
          drink.name?.toLowerCase().includes(cat) ||
          (cat === 'whiskey' && drink.category === 'Spirits' && drink.name.toLowerCase().includes('whiskey')) ||
          (cat === 'beer' && drink.category === 'Beer') ||
          (cat === 'cocktails' && drink.category === 'Cocktails') ||
          (cat === 'wine' && drink.category === 'Wine') ||
          (cat === 'natural-wine' && drink.category === 'Wine' && drink.subcategory?.toLowerCase().includes('natural'))
        );
      });
    });
  }

  // Use the helper to get related drinks
  $: relatedDrinks = bar ? findDrinksByCategories(bar.typical_drinks) : [];

  // Helper to format pressure level display
  function formatPressure(pressure: string): string {
    const levels: Record<string, string> = {
      'low': '😌 Low - Easy going, minimal social expectations',
      'low-moderate': '🙂 Low-Moderate - Relaxed but with some energy',
      'moderate': '😐 Moderate - Balanced social atmosphere',
      'moderate-high': '😬 Moderate-High - Noticeable social energy',
      'high': '😰 High - Intense, high-energy environment'
    };
    return levels[pressure] || pressure;
  }

  // FIX: Properly type the activeTab variable
  let activeTab: 'overview' | 'insights' | 'plan' = 'overview';

  $: vibeLevel = (() => {
    if (!bar) return 'Moderate';
    const pressureScores: Record<string, number> = {
      'low': 1, 'low-moderate': 2, 'moderate': 3, 
      'moderate-high': 4, 'high': 5
    };
    const score = pressureScores[bar.pressure_level] || 3;
    if (score <= 2) return 'Chill';
    if (score <= 3) return 'Balanced';
    return 'High Energy';
  })();
</script>

  <!-- Back button only -->
  <div class="mt-8">
    <a
      href="/bars"
      class="inline-block bg-gray-200 text-gray-700 px-6 py-2 rounded-lg hover:bg-gray-300 transition"
    >
      ← Back to all bars
    </a>
  </div>

<!-- Template starts here -->
{#if !bar}
  <div class="text-center py-12">
    <p class="text-gray-500 text-lg">Bar type not found.</p>
    <a href="/bars" class="mt-4 inline-block text-blue-600 hover:text-blue-800">
      ← Back to all bars
    </a>
  </div>
{:else}


  <div class="mb-6">
    <h1 class="text-3xl font-bold mb-2">{bar.name}</h1>
    <span class="inline-block bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
      {bar.pressure_level} pressure
    </span>
  </div>

  <!-- Show different content based on tab -->
  {#if activeTab === 'overview'}
    <div class="space-y-4">
      <!-- Vibe / Atmosphere -->
      <SafetyCard title="Atmosphere & Vibe">
        {#if bar.vibe && bar.vibe.length > 0}
          <div class="flex flex-wrap gap-2">
            {#each bar.vibe as v}
              <span class="bg-gray-100 px-3 py-1 rounded-full text-sm">{v}</span>
            {/each}
          </div>
        {:else}
          <p class="text-gray-500">No vibe data available</p>
        {/if}
      </SafetyCard>

      <!-- Pressure Level (detailed) -->
      <SafetyCard title="Social Pressure">
        <p>{formatPressure(bar.pressure_level)}</p>
      </SafetyCard>

      <!-- Social Dynamics -->
      <SafetyCard title="Social Dynamics">
        <p>{bar.social_dynamics || 'No social dynamics data available'}</p>
      </SafetyCard>

      <!-- Cultural Notes -->
      {#if bar.cultural_notes}
        <SafetyCard title="Cultural Notes">
          <p>{bar.cultural_notes}</p>
        </SafetyCard>
      {/if}
    </div>
  {/if}


{/if}