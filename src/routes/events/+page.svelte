<!-- src/routes/events/+page.svelte -->
<script lang="ts">
  import eventTypes from '$lib/data/event-types.json';

  type EventType = {
    slug: string;
    name: string;
    touch?: string;
    solo?: string;
    vibe?: string[];
    description?: string;
  };

  const events = eventTypes as EventType[];
</script>

<!-- Sticky header -->
<div class="sticky top-0 z-30 bg-yellow-50 px-4 pt-3 pb-2 shadow-md border-b border-yellow-100 space-y-1">
  <a href="/" class="text-blue-700 font-semibold">← Back to Home</a>

  <h1 class="text-xl font-semibold text-blue-700">Event Types</h1>

  <p class="text-sm text-gray-700">Explore social experiences and group dynamics.</p>
</div>

<!-- Page background -->
<div class="min-h-screen bg-yellow-50/50 px-4 py-6">

  <div class="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl mx-auto">
    {#each events as ev}
      <a
        href={`/events/${ev.slug}`}
        class="bg-white border border-yellow-100 rounded-lg p-4 shadow-sm hover:shadow-md transition"
      >
        <h2 class="text-lg font-medium text-gray-900">{ev.name}</h2>

        {#if ev.touch}
          <p class="text-sm text-gray-500 mt-1">Touch Level: {ev.touch}</p>
        {/if}

        {#if ev.solo}
          <p class="text-sm text-gray-500">Solo Comfort: {ev.solo}</p>
        {/if}

        {#if ev.vibe}
          <p class="text-sm mt-2 text-gray-700">{ev.vibe.join(', ')}</p>
        {/if}
      </a>
    {/each}
  </div>

</div>
