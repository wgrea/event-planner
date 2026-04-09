<!-- src/lib/components/analyze/Details.svelte -->
<script lang="ts">
  import SafetyCard from '$lib/components/safety/Card.svelte';
  export let item: any; 
</script>

<SafetyCard title="Spending Rhythm & Value">
  <p class="text-xs text-vibe-brown/70 mb-3">
    <span class="font-bold">Pacing:</span> Transaction speed and re-order frequency.
  </p>

  <div class="flex items-center justify-between mb-2">
    <span class="text-xs font-bold px-2 py-0.5 rounded bg-blue-100 text-blue-800 border border-blue-200 capitalize">
      {item.economic_vibe || 'Standard'}
    </span>
    <span class="text-[10px] font-bold text-vibe-brown/50 uppercase">
      {item.spending_rhythm || 'Steady'}
    </span>
  </div>

  <div class="flex gap-1 mb-3">
    {#each Array(5) as _, i}
      <div class="h-1.5 w-6 rounded-full {i < (item.pacing_cost_factor || 1) ? 'bg-blue-500' : 'bg-gray-200'}"></div>
    {/each}
  </div>

  <p class="text-xs text-vibe-brown italic leading-snug mb-2">
    {#if item.spending_rhythm === 'nursing'}
      Focus is on the activity; low pressure to purchase.
    {:else if item.spending_rhythm === 'high-velocity'}
      Fast-paced; high expectation of continuous spend.
    {:else if item.spending_rhythm === 'sporadic'}
      Purchases are punctuated by breaks or long lines.
    {:else}
      Standard pacing for this social environment.
    {/if}
  </p>

  {#if item.budget_notes}
    <p class="text-[11px] text-vibe-brown/70 mt-2">{item.budget_notes}</p>
  {/if}
</SafetyCard>


<SafetyCard title="Social Environment">
  <div class="flex items-center justify-between mb-2">
    <p class="font-bold capitalize">{item.interaction_intensity?.label || 'Moderate'}</p>

    {#if item.plan_night_around !== undefined}
      <span class="text-[10px] font-bold px-2 py-1 bg-yellow-50 border border-yellow-200 rounded text-vibe-brown uppercase">
        {item.plan_night_around ? '📍 Destination' : '👋 Drop-in'}
      </span>
    {/if}
  </div>

  <p class="text-xs text-vibe-brown italic mb-3">
    {item.interaction_intensity?.description}
  </p>

  {#if item.physical_proximity}
    <p class="text-[11px] text-vibe-brown/80 mb-2">
      <strong>Proximity:</strong> {item.physical_proximity}
    </p>
  {/if}

  {#if item.seasonal_expectations}
    <p class="text-[11px] text-vibe-brown/80 italic mb-2">
      {item.seasonal_expectations}
    </p>
  {/if}

  {#if item.social_expectations || item.social_dynamics}
    <p class="text-sm text-vibe-brown leading-relaxed mt-2 pt-2 border-t border-gray-100">
      {item.social_expectations || item.social_dynamics}
    </p>
  {/if}
</SafetyCard>


{#if item.cultural_notes}
  <SafetyCard title="Cultural Context">
    <p class="text-vibe-brown italic text-sm leading-relaxed">{item.cultural_notes}</p>
  </SafetyCard>
{/if}