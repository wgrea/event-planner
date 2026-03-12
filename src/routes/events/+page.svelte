<!-- src/routes/events/+page.svelte -->
<script lang="ts">
  import eventTypes from '$lib/data/event-types.json';
  import type { EventType } from '$lib/types';

  const events = eventTypes as EventType[];

  let showCultural = false;
  let showTypicalDrinks = false;
  let showDance = false;

  $: filteredEvents = events
    .filter(e => showCultural ? e.is_cultural === true : true)
    .filter(e => showTypicalDrinks ? e.typical_drinks?.length > 0 : true)
    .filter(e => showDance ? e.is_dance === true : true)
    .sort((a, b) => a.name.localeCompare(b.name));
</script>

<div class="min-h-screen bg-yellow-50">
  <div class="sticky top-0 z-30 bg-yellow-50/95 backdrop-blur-sm px-4 pt-4 pb-3 shadow-sm border-b border-yellow-200">
    <div class="max-w-4xl mx-auto flex flex-col gap-2">
      <a href="/" class="text-vibe-brown/60 hover:text-vibe-brown text-sm font-medium transition-colors">← Back to Home</a>
      
      <div class="flex items-center gap-3">
        <span class="text-3xl" aria-hidden="true">📅</span>
        <h1 class="text-2xl font-bold text-vibe-brown">Event Types</h1>
      </div>
      
      <p class="text-sm text-vibe-brown/70 italic">Explore social experiences and group dynamics.</p>

      <div class="flex flex-wrap gap-2 mt-2">
        <button
          class="px-4 py-1.5 rounded-full text-sm font-bold border transition-all hover:scale-[1.02] active:scale-95
            {showCultural ? 'bg-yellow-200 border-yellow-400 text-vibe-brown' : 'bg-white border-yellow-100 text-vibe-brown/70'}"
          on:click={() => showCultural = !showCultural}
        >
          Cultural
        </button>

        <button
          class="px-4 py-1.5 rounded-full text-sm font-bold border transition-all hover:scale-[1.02] active:scale-95
            {showTypicalDrinks ? 'bg-purple-100 border-purple-300 text-purple-900' : 'bg-white border-yellow-100 text-vibe-brown/70'}"
          on:click={() => showTypicalDrinks = !showTypicalDrinks}
        >
          Has Drinks
        </button>

        <button
          class="px-4 py-1.5 rounded-full text-sm font-bold border transition-all hover:scale-[1.02] active:scale-95
            {showDance ? 'bg-pink-100 border-pink-300 text-pink-900' : 'bg-white border-yellow-100 text-vibe-brown/70'}"
          on:click={() => showDance = !showDance}
        >
          Dance
        </button>
      </div>
    </div>
  </div>

  <main class="px-4 py-8">
    <div class="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl mx-auto">
      {#each filteredEvents as ev}
        <a
          href={`/events/${ev.slug}`}
          class="bg-white border border-yellow-200 rounded-xl p-5 shadow-sm hover:shadow-md hover:scale-[1.02] transition-all group"
        >
          <div class="flex justify-between items-center">
            <h2 class="text-xl font-bold text-vibe-brown">{ev.name}</h2>
            <span class="text-yellow-400 group-hover:translate-x-1 transition-transform">→</span>
          </div>

          <div class="mt-2 flex flex-wrap gap-2 items-center">
            {#if ev.is_cultural}
              <span class="text-[10px] font-bold uppercase tracking-wider bg-orange-50 text-orange-700 px-2 py-0.5 rounded-full border border-orange-100">
                Cultural
              </span>
            {/if}

            {#if ev.typical_drinks?.length > 0}
              <span class="text-[10px] font-bold uppercase tracking-wider bg-purple-50 text-purple-700 px-2 py-0.5 rounded-full border border-purple-100">
                Drinks
              </span>
            {/if}

            {#if ev.is_dance}
              <span class="text-xs bg-pink-100 text-pink-700 px-2 py-0.5 rounded-full">
                Dance
              </span>
            {/if}

            {#if ev.global_availability}
              <span class="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full border
                {ev.global_availability === 'widespread' ? 'bg-blue-50 text-blue-600 border-blue-100' : 'bg-gray-50 text-gray-500 border-gray-100'}">
                {ev.global_availability === 'widespread' ? 'Common' : 'Regional'}
              </span>
            {/if}
          </div>
        </a>
      {/each}
    </div>
  </main>
</div>
