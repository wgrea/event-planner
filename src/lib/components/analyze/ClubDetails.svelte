<!-- src/lib/components/analyze/ClubDetails.svelte -->
<script lang="ts">
  import SafetyCard from '$lib/components/safety/Card.svelte';
  export let club: any;
</script>

<SafetyCard title="Vibe">
  {#if club.vibe?.length}
    <div class="flex flex-wrap gap-2">
      {#each club.vibe as v}
        <span class="bg-purple-100 border border-purple-200 text-purple-800 px-3 py-1 rounded-full text-sm font-medium">
          {v}
        </span>
      {/each}
    </div>
  {:else}
    <p class="text-gray-500">No vibe data available</p>
  {/if}
</SafetyCard>

<SafetyCard title="Music Identity">
  {#if club.music_identity?.length}
    <div class="flex flex-wrap gap-2">
      {#each club.music_identity as m}
        <span class="bg-indigo-100 border border-indigo-200 text-indigo-800 px-3 py-1 rounded-full text-sm font-medium">
          {m}
        </span>
      {/each}
    </div>
  {:else}
    <p class="text-gray-500">No music data available</p>
  {/if}
</SafetyCard>

<SafetyCard title="Interaction Intensity">
  <p class="capitalize">{club.interaction_intensity.label}</p>
  <p class="text-xs text-vibe-brown italic mt-1">
    {club.interaction_intensity.description}
  </p>
</SafetyCard>

<SafetyCard title="Social Expectations">
  <p>{club.social_expectations}</p>
</SafetyCard>

{#if club.cultural_notes}
  <SafetyCard title="Cultural Notes">
    <p>{club.cultural_notes}</p>
  </SafetyCard>
{/if}