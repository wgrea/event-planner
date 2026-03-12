<!-- src/lib/components/analyze/BarDetails.svelte -->
<script lang="ts">
  import SafetyCard from '$lib/components/safety/Card.svelte';
  export let bar: any;
</script>


<SafetyCard title="Atmosphere & Vibe">
  {#if bar.vibe?.length}
    <div class="flex flex-wrap gap-2">
      {#each bar.vibe as v}
        <span class="bg-green-100 border border-green-200 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
          {v}
        </span>
      {/each}
    </div>
  {:else}
    <p class="text-gray-500">No vibe data available</p>
  {/if}
</SafetyCard>

<SafetyCard title="Interaction Intensity">
  <p class="capitalize">{bar.interaction_intensity.label}</p>
  <p class="text-xs text-vibe-brown italic mt-1">
    {bar.interaction_intensity.description}
  </p>
</SafetyCard>

<SafetyCard title="Social Dynamics">
  <p>{bar.social_dynamics}</p>
</SafetyCard>

{#if bar.cultural_notes}
  <SafetyCard title="Cultural Notes">
    <p>{bar.cultural_notes}</p>
  </SafetyCard>
{/if}
