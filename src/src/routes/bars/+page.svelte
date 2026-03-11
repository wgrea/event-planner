<!-- src/routes/bars/+page.svelte -->
<script lang="ts">
  import barTypes from '$lib/data/bar-types.json';
  import type { BarType } from '$lib/types';

  const bars = barTypes as BarType[];

  let showCultural = false;
  let showTypicalDrinks = false;
  let showDance = false;

  $: filteredBars = bars
    .filter(b => showCultural ? b.is_cultural === true : true)
    .filter(b => showTypicalDrinks ? b.typical_drinks?.length > 0 : true)
      .filter(b => showDance ? b.is_dance === true : true)
    .sort((a, b) => a.name.localeCompare(b.name));

</script>

<div class="sticky top-0 z-30 bg-green-50 px-4 pt-4 pb-3 shadow-sm border-b border-green-100">
  <div class="max-w-4xl mx-auto flex flex-col gap-2">
    <a href="/" class="text-vibe-blue text-sm">← Back to Home</a>

    <h1 class="text-2xl font-bold text-vibe-brown">Bar Types</h1>

    <p class="text-sm text-vibe-brown/70 italic">
      Explore curated atmospheres and social comfort levels.
    </p>
  </div>

  <div class="flex gap-2 mt-4">
    <button
      class="px-3 py-1 rounded-full text-sm border transition
            {showCultural ? 'bg-green-200 border-green-400' : 'bg-white border-green-200'}"
      on:click={() => showCultural = !showCultural}
    >
      Cultural
    </button>

    <button
      class="px-3 py-1 rounded-full text-sm border transition
            {showTypicalDrinks ? 'bg-green-200 border-green-400' : 'bg-white border-green-200'}"
      on:click={() => showTypicalDrinks = !showTypicalDrinks}
    >
      Has Typical Drinks
    </button>

    <button
      class="px-3 py-1 rounded-full text-sm border transition
            {showDance ? 'bg-pink-200 border-pink-400' : 'bg-white border-pink-200'}"
      on:click={() => showDance = !showDance}
    >
      Dance
    </button>
  </div>

</div>

<div class="min-h-screen bg-green-50/50 px-4 py-8">
  <div class="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl mx-auto">
    {#each filteredBars as bar}
      <a
        href={`/bars/${bar.slug}`}
        class="bg-white border border-green-100 rounded-xl p-5 shadow-sm hover:shadow-md transition-all hover:border-green-300"
      >
        <h2 class="text-xl font-bold text-vibe-brown">{bar.name}</h2>

        <!-- Vibe Tags -->
        {#if bar.vibe?.length}
          <div class="flex flex-wrap gap-1 mt-3">
            {#each bar.vibe as v}
              <span class="text-xs bg-green-50 text-vibe-brown/80 border border-green-100 px-2 py-0.5 rounded-full">
                {v}
              </span>
            {/each}
          </div>
        {/if}

        <!-- Cultural + Typical Drinks Badges -->
        <div class="mt-1 flex gap-2">
          {#if bar.is_cultural}
            <span class="text-xs bg-orange-100 text-orange-700 px-2 py-0.5 rounded-full">
              Cultural
            </span>
          {/if}

          {#if bar.typical_drinks?.length > 0}
            <span class="text-xs bg-purple-100 text-purple-700 px-2 py-0.5 rounded-full">
              Has Typical Drinks
            </span>
          {/if}

          {#if bar.is_dance}
            <span class="text-xs bg-pink-100 text-pink-700 px-2 py-0.5 rounded-full">
              Dance
            </span>
          {/if}
        </div>

        <!-- Social Dynamics Preview has been removed since that is already in the analyze page -->
      </a>
    {/each}
  </div>
</div>
