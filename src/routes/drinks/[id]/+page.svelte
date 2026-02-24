<!-- src/routes/drinks/[id]/+page.svelte -->
<script lang="ts">
  import { page } from '$app/stores';
  
  // Import all drink category files
  import beerData from '$lib/data/drinks/beer.json';
  import wineData from '$lib/data/drinks/wine.json';
  import spiritsData from '$lib/data/drinks/spirits.json';
  import cocktailsData from '$lib/data/drinks/cocktails.json';
  import fermentedData from '$lib/data/drinks/fermented-traditional.json';
  import nonAlcoholicData from '$lib/data/drinks/non-alcoholic.json';
  
  import Breadcrumb from '$lib/components/safety/Breadcrumb.svelte';
  import SafetyCard from '$lib/components/safety/SafetyCard.svelte';

  const id = $page.params.id!;

  // Define the full Drink type based on your actual data structure
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
    manufacturing_notes?: string;
    consumption_patterns?: string[];
    regional_identity?: string;
    legal_notes?: string;
  };

  // Combine all drinks
  const allDrinks: Drink[] = [
    ...(beerData as Drink[]),
    ...(wineData as Drink[]),
    ...(spiritsData as Drink[]),
    ...(cocktailsData as Drink[]),
    ...(fermentedData as Drink[]),
    ...(nonAlcoholicData as Drink[])
  ];

  const drink = allDrinks.find(d => d.id === id);

  // Helper function to get availability emoji
  function getAvailabilityEmoji(availability?: string): string {
    switch(availability) {
      case 'widespread': return '🌎';
      case 'regional': return '🌍';
      case 'local': return '🌏';
      default: return '🌐';
    }
  }
</script>

{#if !drink}
  <div class="text-center py-12">
    <p class="text-gray-500 text-lg">Drink not found.</p>
    <a href="/drinks" class="mt-4 inline-block text-blue-600 hover:text-blue-800">
      ← Back to all drinks
    </a>
  </div>
{:else}
  <Breadcrumb current={drink.name} />

  <!-- Header with basic info -->
  <div class="mb-6">
    <h1 class="text-3xl font-bold mb-2">{drink.name}</h1>
    <div class="flex flex-wrap gap-3 text-gray-600">
      {#if drink.category}
        <span class="bg-gray-100 px-3 py-1 rounded-full text-sm">{drink.category}</span>
      {/if}
      {#if drink.subcategory}
        <span class="bg-gray-100 px-3 py-1 rounded-full text-sm">{drink.subcategory}</span>
      {/if}
      {#if drink.alcohol_percentage}
        <span class="bg-gray-100 px-3 py-1 rounded-full text-sm">{drink.alcohol_percentage}% ABV</span>
      {/if}
    </div>
  </div>

  <div class="space-y-4">
    <!-- Origin & Regional Identity -->
    <SafetyCard title="Origin">
      <div class="space-y-2">
        {#if drink.origin}
          <p><span class="font-medium">Country/Region:</span> {drink.origin}</p>
        {/if}
        {#if drink.regional_identity}
          <p><span class="font-medium">Cultural Identity:</span> {drink.regional_identity}</p>
        {/if}
        {#if !drink.origin && !drink.regional_identity}
          <p class="text-gray-500">Unknown origin</p>
        {/if}
      </div>
    </SafetyCard>

    <!-- Flavor Profile -->
    {#if drink.flavor_profile && drink.flavor_profile.length > 0}
      <SafetyCard title="Flavor Profile">
        <div class="flex flex-wrap gap-2">
          {#each drink.flavor_profile as flavor}
            <span class="bg-orange-50 text-orange-700 px-3 py-1 rounded-full text-sm">
              {flavor}
            </span>
          {/each}
        </div>
      </SafetyCard>
    {/if}

    <!-- Typical Settings / Serving Notes -->
    {#if drink.typical_setting && drink.typical_setting.length > 0}
      <SafetyCard title="Typical Settings">
        <ul class="list-disc ml-5 space-y-1">
          {#each drink.typical_setting as setting}
            <li>{setting}</li>
          {/each}
        </ul>
      </SafetyCard>
    {/if}

    <!-- Cultural Notes -->
    {#if drink.cultural_notes}
      <SafetyCard title="Cultural Notes">
        <p class="whitespace-pre-line">{drink.cultural_notes}</p>
      </SafetyCard>
    {/if}

    <!-- Consumption Patterns -->
    {#if drink.consumption_patterns && drink.consumption_patterns.length > 0}
      <SafetyCard title="How It's Consumed">
        <ul class="list-disc ml-5 space-y-1">
          {#each drink.consumption_patterns as pattern}
            <li>{pattern}</li>
          {/each}
        </ul>
      </SafetyCard>
    {/if}

    <!-- Manufacturing Notes -->
    {#if drink.manufacturing_notes}
      <SafetyCard title="Production Notes">
        <p>{drink.manufacturing_notes}</p>
      </SafetyCard>
    {/if}

    <!-- Global Availability -->
    {#if drink.global_availability}
      <SafetyCard title="Global Availability">
        <div class="flex items-center gap-2">
          <span class="text-2xl">{getAvailabilityEmoji(drink.global_availability)}</span>
          <span class="capitalize">{drink.global_availability}</span>
        </div>
      </SafetyCard>
    {/if}

    <!-- Legal Notes (for restricted countries) -->
    {#if drink.legal_notes}
      <SafetyCard title="Legal Notes">
        <p class="text-orange-700">{drink.legal_notes}</p>
      </SafetyCard>
    {/if}
  </div>

  <!-- Action Buttons -->
  <div class="mt-8 flex gap-4">
    <a
      href={`/drinks/${id}/assess`}
      class="bg-orange-500 text-white px-6 py-2 rounded-lg hover:bg-orange-600 transition"
    >
      View Safety Assessment
    </a>
    <a
      href="/drinks"
      class="bg-gray-200 text-gray-700 px-6 py-2 rounded-lg hover:bg-gray-300 transition"
    >
      ← Back to all drinks
    </a>
  </div>
{/if}