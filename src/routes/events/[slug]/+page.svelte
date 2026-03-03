<!-- src/routes/events/[slug]/+page.svelte -->
<script lang="ts">
  import { page } from '$app/stores';
  import type { Drink } from '$lib/types';  // Import from types
  import eventTypes from '$lib/data/event-types.json';
  
  // Import all drink files
  import beerData from '$lib/data/drinks/beer.json';
  import wineData from '$lib/data/drinks/wine.json';
  import spiritsData from '$lib/data/drinks/spirits.json';
  import cocktailsData from '$lib/data/drinks/cocktails.json';
  import fermentedData from '$lib/data/drinks/fermented-traditional.json';
  import nonAlcoholicData from '$lib/data/drinks/non-alcoholic.json';
  
  import SafetyCard from '$lib/components/safety/SafetyCard.svelte';

  const slug = $page.params.slug!;

  type EventType = {
    id: string;
    name: string;
    slug: string;
    touch_level: string;
    social_dynamics: string;
    plan_night_around: boolean;
    typical_drinks: string[];
    cultural_notes?: string;
  };

  const events = eventTypes as EventType[];
  const ev = events.find(e => e.slug === slug);

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
          (cat === 'traditional-drinks' && (drink.category === 'Fermented Traditional' || drink.category === 'Non-Alcoholic Ritual')) ||
          (cat === 'beer' && drink.category === 'Beer') ||
          (cat === 'wine' && drink.category === 'Wine') ||
          (cat === 'cocktails' && drink.category === 'Cocktails')
        );
      });
    });
  }

  $: relatedDrinks = ev ? findDrinksByCategories(ev.typical_drinks) : [];

  function formatTouchLevel(level: string): string {
    const levels: Record<string, string> = {
      'low': '🤝 Low - Minimal interaction required',
      'medium': '🤝 Medium - Moderate social engagement',
      'high': '🤝 High - Active participation expected',
      'variable': '🤝 Variable - Depends on the situation'
    };
    return levels[level] || level;
  }
</script>

  <div class="mt-8 flex gap-4">
    <a
      href="/events"
      class="bg-gray-200 text-gray-700 px-6 py-2 rounded-lg hover:bg-gray-300 transition"
    >
      ← Back to all events
    </a>
  </div>

{#if !ev}
  <div class="text-center py-12">
    <p class="text-gray-500 text-lg">Event type not found.</p>
    <a href="/events" class="mt-4 inline-block text-blue-600 hover:text-blue-800">
      ← Back to all events
    </a>
  </div>
{:else}

  <div class="mb-6">
    <h1 class="text-3xl font-bold mb-2">{ev.name}</h1>
    {#if ev.plan_night_around}
      <span class="inline-block bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-sm">
        ⭐ Plan your night around this
      </span>
    {/if}
  </div>

  <div class="space-y-4">
    <!-- Touch Level -->
    <SafetyCard title="Touch Level">
      <p>{formatTouchLevel(ev.touch_level)}</p>
    </SafetyCard>

    <!-- Social Dynamics -->
    <SafetyCard title="Social Dynamics">
      <p>{ev.social_dynamics || 'No social dynamics data available'}</p>
    </SafetyCard>

    <!-- Cultural Notes -->
    {#if ev.cultural_notes}
      <SafetyCard title="Cultural Notes">
        <p>{ev.cultural_notes}</p>
      </SafetyCard>
    {/if}
  </div>

{/if}