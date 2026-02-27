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

<!-- Sticky header -->
<div class="sticky top-0 z-30 bg-purple-50 px-4 pt-3 pb-2 shadow-md border-b border-purple-100 space-y-1">
  <a href="/" class="text-blue-700 font-semibold">← Back to Home</a>

  <h1 class="text-xl font-semibold text-blue-700">Club Types</h1>

  <p class="text-sm text-gray-700">Explore nightlife scenes and energy levels.</p>
</div>

<!-- Page background -->
<div class="min-h-screen bg-purple-50/50 px-4 py-6">

  <div class="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl mx-auto">
    {#each clubs as club}
      <a
        href={`/clubs/${club.slug}`}
        class="bg-white border border-purple-100 rounded-lg p-4 shadow-sm hover:shadow-md transition"
      >
        <h2 class="text-lg font-medium text-gray-900">{club.name}</h2>

        {#if club.pressure}
          <p class="text-sm text-gray-500 mt-1">Pressure: {club.pressure}</p>
        {/if}

        {#if club.solo}
          <p class="text-sm text-gray-500">Solo-Friendly: {club.solo}</p>
        {/if}

        {#if club.vibe}
          <p class="text-sm mt-2 text-gray-700">{club.vibe.join(', ')}</p>
        {/if}
      </a>
    {/each}
  </div>

</div>
