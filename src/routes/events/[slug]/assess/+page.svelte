<!-- src/routes/events/[slug]/assess+page.svelte -->
<script lang="ts">
  import { page } from '$app/stores';
  import Breadcrumb from '$lib/components/safety/Breadcrumb.svelte';
  import SafetyCard from '$lib/components/safety/SafetyCard.svelte';
  import barTypes from '$lib/data/bar-types.json';

  const slug = $page.params.slug!;

  const name = slug.replace(/-/g, ' ').replace(/\b\w/g, c => c.toUpperCase());

  // Placeholder matching logic
  const bars = barTypes as any[];

  const recommended = bars.slice(0, 3).map(b => ({
    ...b,
    match: '80%',
    reason: 'Shared vibe and compatible solo comfort'
  }));
</script>

<Breadcrumb current="Assess" />

<h1 class="text-2xl font-semibold mb-4">Plan Your Night</h1>
<p class="text-gray-600 mb-6">Based on: {name}</p>

<SafetyCard title="Event Profile">
  <p>Solo Comfort: 3/5</p>
  <p>Touch Level: Moderate</p>
</SafetyCard>

<SafetyCard title="Recommended Bars">
  <ul class="space-y-4">
    {#each recommended as bar}
      <li class="border rounded p-3">
        <h3 class="font-medium">{bar.name}</h3>
        <p class="text-sm text-gray-500">Match: {bar.match}</p>
        <p class="text-sm mt-1">{bar.reason}</p>
      </li>
    {/each}
  </ul>
</SafetyCard>

<p class="text-sm text-gray-500 mt-6">
  Placeholder recommendations • Real matching logic will use your database
</p>
