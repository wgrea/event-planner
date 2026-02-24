<!-- src/routes/bars/[slug]/+page.svelte -->
<script lang="ts">
  import { page } from '$app/stores';
  import barTypes from '$lib/data/bar-types.json';
  import drinkToBar from '$lib/data/mappings/drink-to-bar.json';
  
  // Import all drink files
  import beerData from '$lib/data/drinks/beer.json';
  import wineData from '$lib/data/drinks/wine.json';
  import spiritsData from '$lib/data/drinks/spirits.json';
  import cocktailsData from '$lib/data/drinks/cocktails.json';
  import fermentedData from '$lib/data/drinks/fermented-traditional.json';
  import nonAlcoholicData from '$lib/data/drinks/non-alcoholic.json';
  
  import SafetyCard from '$lib/components/safety/SafetyCard.svelte';
  import Breadcrumb from '$lib/components/safety/Breadcrumb.svelte';

  const slug = $page.params.slug!;

  // Define types based on actual data structure
  type BarType = {
    id: string;
    name: string;
    slug: string;
    pressure_level: string;
    vibe: string[];
    social_dynamics: string;
    typical_drinks: string[];
    cultural_notes?: string;
  };

  type Drink = {
    id: string;
    name: string;
    category: string;
    origin?: string;
  };

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

  // Get related drinks from mapping
  const drinkMap = drinkToBar as unknown as Record<string, string[]>;
  const relatedDrinkIds = drinkMap[bar?.id || ''] ?? [];
  const relatedDrinks = allDrinks.filter(d => relatedDrinkIds.includes(d.id));

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
</script>

{#if !bar}
  <div class="text-center py-12">
    <p class="text-gray-500 text-lg">Bar type not found.</p>
    <a href="/bars" class="mt-4 inline-block text-blue-600 hover:text-blue-800">
      ← Back to all bars
    </a>
  </div>
{:else}
  <Breadcrumb current={bar.name} />

  <div class="mb-6">
    <h1 class="text-3xl font-bold mb-2">{bar.name}</h1>
    <span class="inline-block bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
      {bar.pressure_level} pressure
    </span>
  </div>

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

    <!-- Typical Drinks -->
    <SafetyCard title="Typical Drinks">
      {#if relatedDrinks.length > 0}
        <div class="space-y-2">
          <div class="flex flex-wrap gap-2">
            {#each relatedDrinks.slice(0, 5) as drink}
              <a href={`/drinks/${drink.id}`} class="bg-orange-50 text-orange-700 px-3 py-1 rounded-full text-sm hover:bg-orange-100">
                {drink.name}
              </a>
            {/each}
          </div>
          {#if relatedDrinks.length > 5}
            <details class="text-sm">
              <summary class="text-blue-600 cursor-pointer">+{relatedDrinks.length - 5} more drinks</summary>
              <div class="flex flex-wrap gap-2 mt-2">
                {#each relatedDrinks.slice(5) as drink}
                  <a href={`/drinks/${drink.id}`} class="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm hover:bg-gray-200">
                    {drink.name}
                  </a>
                {/each}
              </div>
            </details>
          {/if}
        </div>
      {:else}
        <p class="text-gray-500">No typical drinks data available</p>
      {/if}
    </SafetyCard>

    <!-- Cultural Notes -->
    {#if bar.cultural_notes}
      <SafetyCard title="Cultural Notes">
        <p>{bar.cultural_notes}</p>
      </SafetyCard>
    {/if}
  </div>

  <div class="mt-8 flex gap-4">
    <a
      href={`/bars/${slug}/assess`}
      class="bg-orange-500 text-white px-6 py-2 rounded-lg hover:bg-orange-600 transition"
    >
      View Safety Assessment
    </a>
    <a
      href="/bars"
      class="bg-gray-200 text-gray-700 px-6 py-2 rounded-lg hover:bg-gray-300 transition"
    >
      ← Back to all bars
    </a>
  </div>
{/if}