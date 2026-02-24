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

<h1 class="text-2xl font-semibold mb-4">Event Types</h1>
<p class="text-gray-600 mb-6">Explore social experiences and group dynamics.</p>

<div class="grid grid-cols-1 md:grid-cols-2 gap-4">
  {#each events as ev}
    <a
      href={`/events/${ev.slug}`}
      class="border rounded-lg p-4 hover:bg-gray-50 transition"
    >
      <h2 class="text-lg font-medium">{ev.name}</h2>

      {#if ev.touch}
        <p class="text-sm text-gray-500 mt-1">Touch Level: {ev.touch}</p>
      {/if}

      {#if ev.solo}
        <p class="text-sm text-gray-500">Solo Comfort: {ev.solo}</p>
      {/if}

      {#if ev.vibe}
        <p class="text-sm mt-2">{ev.vibe.join(', ')}</p>
      {/if}
    </a>
  {/each}
</div>
