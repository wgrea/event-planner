<!-- src/routes/clubs/+page.svelte -->
<script lang="ts">
  import clubTypes from '$lib/data/club-types.json';
  import type { ClubType } from '$lib/types';

  const clubs = clubTypes as ClubType[];

  let showCultural = false;
  let showTypicalDrinks = false;

  $: filteredClubs = clubs
    .filter(c => showCultural ? c.is_cultural === true : true)
    .filter(c => showTypicalDrinks ? c.typical_drinks?.length > 0 : true)
    .sort((a, b) => a.name.localeCompare(b.name));
</script>

<div class="sticky top-0 z-30 bg-purple-50 px-4 pt-4 pb-3 shadow-sm border-b border-purple-100">
  <div class="max-w-4xl mx-auto flex flex-col gap-2">
    <a href="/" class="text-vibe-blue text-sm">← Back to Home</a>
    <h1 class="text-2xl font-bold text-vibe-brown">Club Types</h1>
    <p class="text-sm text-vibe-brown/70 italic">Explore nightlife scenes, energy levels, and <strong>dance</strong>-forward environments.</p>
  </div>

  <div class="flex gap-2 mt-4">
    <button
      class="px-3 py-1 rounded-full text-sm border transition
             {showCultural ? 'bg-purple-200 border-purple-400' : 'bg-white border-purple-200'}"
      on:click={() => showCultural = !showCultural}
    >
      Cultural
    </button>

    <button
      class="px-3 py-1 rounded-full text-sm border transition
             {showTypicalDrinks ? 'bg-purple-200 border-purple-400' : 'bg-white border-purple-200'}"
      on:click={() => showTypicalDrinks = !showTypicalDrinks}
    >
      Has Typical Drinks
    </button>
  </div>
</div>

<div class="min-h-screen bg-purple-50/50 px-4 py-8">
  <div class="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl mx-auto">
    {#each filteredClubs as club}
      <a
        href={`/clubs/${club.slug}`}
        class="bg-white border border-purple-100 rounded-xl p-5 shadow-sm hover:shadow-md transition-all hover:border-purple-300"
      >
        <h2 class="text-xl font-bold text-vibe-brown">{club.name}</h2>

        <!-- Cultural + Typical Drinks Badges -->
        <div class="mt-1 flex gap-2">
          {#if club.is_cultural}
            <span class="text-xs bg-orange-100 text-orange-700 px-2 py-0.5 rounded-full">
              Cultural
            </span>
          {/if}

          {#if club.typical_drinks?.length > 0}
            <span class="text-xs bg-purple-100 text-purple-700 px-2 py-0.5 rounded-full">
              Typical Drinks
            </span>
          {/if}

            {#if club.global_availability}
            <span
              class="text-xs px-2 py-0.5 rounded-full
              {club.global_availability === 'widespread' ? 'bg-blue-100 text-blue-700' :
              club.global_availability === 'regional' ? 'bg-yellow-100 text-yellow-700' :
              'bg-gray-100 text-gray-700'}"
            >
              {club.global_availability === 'widespread' ? 'Common' :
              club.global_availability === 'regional' ? 'Regional' :
              'Rare'}
            </span>
          {/if}
        </div>

        <!-- Social Expectations Preview has been removed since that is already in the analyze page -->
      </a>
    {/each}
  </div>
</div>
