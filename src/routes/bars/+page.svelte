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

<!-- Sticky header using the Bars identity color -->
<div class="sticky top-0 z-30 bg-green-50 px-4 pt-3 pb-2 shadow-md space-y-1 border-b border-green-100">
  <a href="/" class="text-blue-700 font-semibold">← Back to Home</a>

  <h1 class="text-xl font-semibold text-blue-700">
    Bar Types
  </h1>

  <p class="text-sm text-gray-700">
    Explore curated atmospheres and social comfort levels.
  </p>
</div>

<!-- Page background using a soft Bars tint -->
<div class="min-h-screen bg-green-50/50 px-4 py-6">

  <div class="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl mx-auto">
    {#each bars as bar}
      <a
        href={`/bars/${bar.slug}`}
        class="bg-white border border-green-100 rounded-lg p-4 shadow-sm hover:shadow-md transition"
      >
        <h2 class="text-lg font-medium text-gray-900">{bar.name}</h2>

        {#if bar.pressure}
          <p class="text-sm text-gray-500 mt-1">Pressure: {bar.pressure}</p>
        {/if}

        {#if bar.solo}
          <p class="text-sm text-gray-500">Solo-Friendly: {bar.solo}</p>
        {/if}

        {#if bar.description}
          <p class="text-sm mt-2 text-gray-700">{bar.description}</p>
        {/if}
      </a>
    {/each}
  </div>

</div>
