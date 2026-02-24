<!-- src/routes/bars/+page.svelte -->
<script lang="ts">
  import barTypes from '$lib/data/bar-types.json';

  type BarType = {
    slug: string;
    name: string;
    pressure?: string;
    solo?: string;
    description?: string;
  };
  
  const bars = barTypes as BarType[];
</script>

<h1 class="text-2xl font-semibold mb-4">Bar Types</h1>
<p class="text-gray-600 mb-6">Explore curated atmospheres and social comfort levels.</p>

<div class="grid grid-cols-1 md:grid-cols-2 gap-4">
  {#each bars as bar}
    <a
      href={`/bars/${bar.slug}`}
      class="border rounded-lg p-4 hover:bg-gray-50 transition"
    >
      <h2 class="text-lg font-medium">{bar.name}</h2>
      {#if bar.pressure}
        <p class="text-sm text-gray-500 mt-1">Pressure: {bar.pressure}</p>
      {/if}
      {#if bar.solo}
        <p class="text-sm text-gray-500">Solo-Friendly: {bar.solo}</p>
      {/if}
      {#if bar.description}
        <p class="text-sm mt-2">{bar.description}</p>
      {/if}
    </a>
  {/each}
</div>
