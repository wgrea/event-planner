<!-- src/lib/components/analyze/DrinkDetails.svelte -->
<script lang="ts">
  import SafetyCard from '$lib/components/safety/Card.svelte';
  export let drink: any;

  // Helper to handle both string origins and object origins
  $: originDisplay = typeof drink.origin === 'object' ? drink.origin.region : drink.origin;
  
  // Helper to handle both singular and plural key names for settings
  $: settings = drink.typical_settings || drink.typical_setting || [];
</script>

<SafetyCard title="Origin">
  {#if originDisplay || drink.regional_identity}
    <p><span class="font-medium">Region:</span> {originDisplay}</p>
    {#if drink.regional_identity}
      <p><span class="font-medium">Identity:</span> {drink.regional_identity}</p>
    {/if}
  {:else}
    <p class="text-gray-500">Unknown origin</p>
  {/if}
</SafetyCard>

{#if drink.flavor_profile?.length}
  <SafetyCard title="Flavor Profile">
    <div class="flex flex-wrap gap-2">
      {#each drink.flavor_profile as f}
        <span class="bg-orange-50 text-orange-700 px-3 py-1 rounded-full text-sm">{f}</span>
      {/each}
    </div>
  </SafetyCard>
{/if}

{#if settings.length}
  <SafetyCard title="Typical Settings">
    <ul class="list-disc ml-5 space-y-1">
      {#each settings as s}
        <li>{s}</li>
      {/each}
    </ul>
  </SafetyCard>
{/if}

{#if drink.cultural_notes}
  <SafetyCard title="Cultural Notes">
    <p>{drink.cultural_notes}</p>
  </SafetyCard>
{/if}