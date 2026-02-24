<!-- src/routes/clubs/+page.svelte -->
<script lang="ts">
  import clubTypes from '$lib/data/club-types.json';

  type ClubType = {
    slug: string;
    name: string;
    pressure?: string;
    solo?: string;
    vibe?: string[];
    description?: string;
  };

  const clubs = clubTypes as ClubType[];
</script>

<h1 class="text-2xl font-semibold mb-4">Club Types</h1>
<p class="text-gray-600 mb-6">Explore nightlife scenes and energy levels.</p>

<div class="grid grid-cols-1 md:grid-cols-2 gap-4">
  {#each clubs as club}
    <a
      href={`/clubs/${club.slug}`}
      class="border rounded-lg p-4 hover:bg-gray-50 transition"
    >
      <h2 class="text-lg font-medium">{club.name}</h2>

      {#if club.pressure}
        <p class="text-sm text-gray-500 mt-1">Pressure: {club.pressure}</p>
      {/if}

      {#if club.solo}
        <p class="text-sm text-gray-500">Solo-Friendly: {club.solo}</p>
      {/if}

      {#if club.vibe}
        <p class="text-sm mt-2">{club.vibe.join(', ')}</p>
      {/if}
    </a>
  {/each}
</div>
