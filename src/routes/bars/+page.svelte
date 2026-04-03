<!-- src/routes/bars/+page.svelte -->
<script lang="ts">
  import barTypes from '$lib/data/bar-types.json';
  import type { BarType } from '$lib/types';

  const bars = barTypes as BarType[];

  let showCultural = false;
  let showDance = false;
  let showFluid = false;
  let showLounge = false;

  let availabilityFilter: 'all' | 'widespread' | 'regional' | 'rare' = 'all';

  $: filteredBars = bars
    .filter(b => (showCultural ? b.is_cultural === true : true))
    .filter(b => (showDance ? b.is_dance === true : true))
    .filter(b => (showFluid ? b.is_fluid === true : true))
    .filter(b => (showLounge ? b.is_lounge === true : true))
    .filter(b => {
      if (availabilityFilter === 'all') return true;
      return b.global_availability === availabilityFilter;
    })
    .sort((a, b) => a.name.localeCompare(b.name));
</script>

<div class="min-h-screen bg-green-50">
  <div class="sticky top-0 z-30 bg-green-50/95 backdrop-blur-sm px-4 pt-4 pb-3 shadow-sm border-b border-green-200">
    <div class="max-w-4xl mx-auto flex flex-col gap-2">
      <a href="/" class="text-vibe-brown/60 hover:text-vibe-brown text-sm font-medium transition-colors">← Back to Home</a>

      <div class="flex items-center gap-3">
        <span class="text-3xl" aria-hidden="true">🍸</span>
        <h1 class="text-2xl font-bold text-vibe-brown">Bar Types</h1>
      </div>

      <p class="text-sm text-vibe-brown/70 italic max-w-2xl">
        Explore curated atmospheres and social comfort levels. Many spaces shift identities from day to night.
      </p>

      <div class="flex flex-wrap gap-2 mt-2">
        <button
          class="px-4 py-1.5 rounded-full text-sm font-bold border transition-all hover:scale-[1.02] active:scale-95
            {showCultural ? 'bg-green-200 border-green-400 text-vibe-brown' : 'bg-white border-green-200 text-vibe-brown/70'}"
          on:click={() => showCultural = !showCultural}
        >
          Cultural
        </button>

        <button
          class="px-4 py-1.5 rounded-full text-sm font-bold border transition-all hover:scale-[1.02] active:scale-95
            {showDance ? 'bg-pink-100 border-pink-300 text-vibe-brown' : 'bg-white border-green-200 text-vibe-brown/70'}"
          on:click={() => showDance = !showDance}
        >
          Dance
        </button>

        <button
          class="px-4 py-1.5 rounded-full text-sm font-bold border transition-all hover:scale-[1.02] active:scale-95
            {showLounge ? 'bg-orange-100 border-orange-300 text-orange-800' : 'bg-white border-green-200 text-vibe-brown/70'}"
          on:click={() => showLounge = !showLounge}
        >
          Lounge
        </button>

                <button
          class="px-4 py-1.5 rounded-full text-sm font-bold border transition-all hover:scale-[1.02] active:scale-95
            {showFluid ? 'bg-blue-100 border-blue-300 text-blue-800' : 'bg-white border-green-200 text-vibe-brown/70'}"
          on:click={() => showFluid = !showFluid}
        >
          Fluid
        </button>
      </div>

      <div class="relative mt-2">
        <select 
          bind:value={availabilityFilter}
          class="px-4 py-1.5 rounded-full text-sm font-bold border transition-all appearance-none cursor-pointer pr-8
            {availabilityFilter === 'all' 
              ? 'bg-white border-green-200 text-vibe-brown/70' 
              : availabilityFilter === 'widespread'
              ? 'bg-blue-50 border-blue-300 text-blue-700'
              : availabilityFilter === 'regional'
              ? 'bg-amber-50 border-amber-300 text-amber-700'
              : 'bg-purple-50 border-purple-300 text-purple-700'}"
        >
          <option value="all">All Availability</option>
          <option value="widespread">🌎 Common (Worldwide)</option>
          <option value="regional">🗺️ Regional</option>
          <option value="rare">✨ Rare / Niche</option>
        </select>
        <span class="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none opacity-50">▼</span>
      </div>
    </div>
  </div>

  <main class="px-4 py-8">
    <div class="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl mx-auto">
      {#each filteredBars as bar}
        <a
          href={`/bars/${bar.slug}`}
          class="bg-white border border-green-200 rounded-xl p-5 shadow-sm hover:shadow-md hover:scale-[1.02] transition-all group"
        >
          <div class="flex justify-between items-center">
            <h2 class="text-xl font-bold text-vibe-brown">{bar.name}</h2>
            <span class="text-green-300 group-hover:translate-x-1 transition-transform">→</span>
          </div>

          <div class="mt-2 flex flex-wrap gap-2">
            {#if bar.is_cultural}
              <span class="text-[10px] font-bold uppercase tracking-wider bg-green-100 text-green-800 px-2 py-0.5 rounded-full border border-green-200">
                Cultural
              </span>
            {/if}
            
            {#if bar.is_dance}
              <span class="text-[10px] font-bold uppercase tracking-wider bg-pink-100 text-pink-700 px-2 py-0.5 rounded-full border border-pink-200">
                Dance
              </span>
            {/if}

            {#if bar.is_fluid}
              <span class="text-[10px] font-bold uppercase tracking-wider bg-blue-100 text-blue-700 px-2 py-0.5 rounded-full border border-blue-200">
                Fluid
              </span>
            {/if}

            {#if bar.is_lounge}
              <span class="text-[10px] font-bold uppercase tracking-wider bg-orange-100 text-orange-700 px-2 py-0.5 rounded-full border border-orange-200">
                Lounge
              </span>
            {/if}

            {#if bar.global_availability}
              <span 
                class="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full border
                  {bar.global_availability === 'widespread' 
                    ? 'bg-blue-50 text-blue-600 border-blue-200' 
                    : bar.global_availability === 'regional'
                    ? 'bg-amber-50 text-amber-600 border-amber-200'
                    : 'bg-purple-50 text-purple-600 border-purple-200'}"
              >
                {bar.global_availability === 'widespread' ? '🌎 Common' : bar.global_availability === 'regional' ? '🗺️ Regional' : '✨ Rare'}
              </span>
            {/if}
          </div>
        </a>
      {/each}
    </div>
  </main>
</div>