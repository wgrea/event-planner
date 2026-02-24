<!-- src/routes/clubs/[slug]/+page.svelte -->
<script lang="ts">
  import { page } from '$app/stores';
  import clubTypes from '$lib/data/club-types.json';
  import drinkToClub from '$lib/data/mappings/drink-to-club.json';
  
  // Import all drink files
  import beerData from '$lib/data/drinks/beer.json';
  import wineData from '$lib/data/drinks/wine.json';
  import spiritsData from '$lib/data/drinks/spirits.json';
  import cocktailsData from '$lib/data/drinks/cocktails.json';
  import fermentedData from '$lib/data/drinks/fermented-traditional.json';
  import nonAlcoholicData from '$lib/data/drinks/non-alcoholic.json';
  
  import Breadcrumb from '$lib/components/safety/Breadcrumb.svelte';
  import SafetyCard from '$lib/components/safety/SafetyCard.svelte';

  const slug = $page.params.slug!;

  type ClubType = {
    id: string;
    name: string;
    slug: string;
    pressure_level: string;
    vibe: string[];
    music_identity: string[];
    social_expectations: string;
    typical_drinks: string[];
    cultural_notes?: string;
  };

  type Drink = {
    id: string;
    name: string;
    category: string;
    origin?: string;
  };

  const clubs = clubTypes as ClubType[];
  const club = clubs.find(c => c.slug === slug);

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
  const drinkMap = drinkToClub as unknown as Record<string, string[]>;
  const relatedDrinkIds = drinkMap[club?.id || ''] ?? [];
  const relatedDrinks = allDrinks.filter(d => relatedDrinkIds.includes(d.id));

  function formatPressure(pressure: string): string {
    const levels: Record<string, string> = {
      'low': '😌 Low - Easy going',
      'low-moderate': '🙂 Low-Moderate - Relaxed',
      'moderate': '😐 Moderate - Balanced',
      'moderate-high': '😬 Moderate-High - Energetic',
      'high': '😰 High - Intense'
    };
    return levels[pressure] || pressure;
  }
</script>

{#if !club}
  <div class="text-center py-12">
    <p class="text-gray-500 text-lg">Club type not found.</p>
    <a href="/clubs" class="mt-4 inline-block text-blue-600 hover:text-blue-800">
      ← Back to all clubs
    </a>
  </div>
{:else}
  <Breadcrumb current={club.name} />

  <div class="mb-6">
    <h1 class="text-3xl font-bold mb-2">{club.name}</h1>
    <span class="inline-block bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm">
      {club.pressure_level} pressure
    </span>
  </div>

  <div class="space-y-4">
    <!-- Vibe -->
    <SafetyCard title="Vibe">
      {#if club.vibe && club.vibe.length > 0}
        <div class="flex flex-wrap gap-2">
          {#each club.vibe as v}
            <span class="bg-gray-100 px-3 py-1 rounded-full text-sm">{v}</span>
          {/each}
        </div>
      {:else}
        <p class="text-gray-500">No vibe data available</p>
      {/if}
    </SafetyCard>

    <!-- Music Identity -->
    <SafetyCard title="Music Identity">
      {#if club.music_identity && club.music_identity.length > 0}
        <div class="flex flex-wrap gap-2">
          {#each club.music_identity as music}
            <span class="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">{music}</span>
          {/each}
        </div>
      {:else}
        <p class="text-gray-500">No music data available</p>
      {/if}
    </SafetyCard>

    <!-- Pressure Level -->
    <SafetyCard title="Social Pressure">
      <p>{formatPressure(club.pressure_level)}</p>
    </SafetyCard>

    <!-- Social Expectations -->
    <SafetyCard title="Social Expectations">
      <p>{club.social_expectations || 'No social expectations data available'}</p>
    </SafetyCard>

    <!-- Typical Drinks -->
    <SafetyCard title="Typical Drinks">
      {#if relatedDrinks.length > 0}
        <div class="flex flex-wrap gap-2">
          {#each relatedDrinks as drink}
            <a href={`/drinks/${drink.id}`} class="bg-purple-50 text-purple-700 px-3 py-1 rounded-full text-sm hover:bg-purple-100">
              {drink.name}
            </a>
          {/each}
        </div>
      {:else}
        <p class="text-gray-500">No typical drinks data available</p>
      {/if}
    </SafetyCard>

    <!-- Cultural Notes -->
    {#if club.cultural_notes}
      <SafetyCard title="Cultural Notes">
        <p>{club.cultural_notes}</p>
      </SafetyCard>
    {/if}
  </div>

  <div class="mt-8 flex gap-4">
    <a
      href={`/clubs/${slug}/assess`}
      class="bg-orange-500 text-white px-6 py-2 rounded-lg hover:bg-orange-600 transition"
    >
      View Safety Assessment
    </a>
    <a
      href="/clubs"
      class="bg-gray-200 text-gray-700 px-6 py-2 rounded-lg hover:bg-gray-300 transition"
    >
      ← Back to all clubs
    </a>
  </div>
{/if}