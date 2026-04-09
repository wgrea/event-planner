<!-- src/lib/components/safety/Details.svelte -->
<script lang="ts">
  import SafetyCard from '$lib/components/safety/Card.svelte';
  export let item: any;

  $: soloStars = item?.solo_comfort ? Math.round(item.solo_comfort / 2) : 0;
</script>

<!-- 1. Budget Strategy + Seasonal Timing (merged if both exist) -->
{#if item.budget_tips?.length && item.seasonal_context}
<SafetyCard title="Budget Strategy & Seasonal Timing">
  <p class="text-[10px] font-bold uppercase tracking-widest text-blue-600 mb-2">
    Wallet Protection
  </p>

  <ul class="space-y-2 mb-4">
    {#each item.budget_tips as tip}
      <li class="text-sm text-vibe-brown flex gap-2">
        <span class="text-blue-400">💰</span> {tip}
      </li>
    {/each}
  </ul>

  <div class="space-y-2">
    <p class="text-[10px] uppercase tracking-widest text-amber-700/60 font-bold">
      {item.seasonal_context.volatility?.replace('-', ' ') || 'Variable'}
    </p>

    {#if item.seasonal_context.off_peak_note}
      <p class="text-[11px] text-vibe-brown/70 leading-snug italic">
        {item.seasonal_context.off_peak_note}
      </p>
    {/if}

    {#if item.seasonal_context.peak_note}
      <p class="text-xs text-vibe-brown/90 italic leading-snug">
        {item.seasonal_context.peak_note}
      </p>
    {/if}

    {#if item.seasonal_context.behavior}
      <p class="text-[11px] text-vibe-brown/80 leading-snug">
        {item.seasonal_context.behavior}
      </p>
    {/if}

    {#if item.seasonal_context.risk_note}
      <p class="text-[10px] text-red-600/70 italic leading-snug">
        {item.seasonal_context.risk_note}
      </p>
    {/if}
  </div>
</SafetyCard>
{/if}

<!-- 2. Budget Strategy only -->
{#if item.budget_tips?.length && !item.seasonal_context}
<SafetyCard title="Budget Strategy">
  <p class="text-[10px] font-bold uppercase tracking-widest text-blue-600 mb-2">
    Wallet Protection
  </p>
  <ul class="space-y-2">
    {#each item.budget_tips as tip}
      <li class="text-sm text-vibe-brown flex gap-2">
        <span class="text-blue-400">💰</span> {tip}
      </li>
    {/each}
  </ul>
</SafetyCard>
{/if}

<!-- 3. Seasonal Timing only -->
{#if item.seasonal_context && !item.budget_tips?.length}
<SafetyCard title="Seasonal Timing">
  <div class="space-y-2">
    <p class="text-[10px] uppercase tracking-widest text-amber-700/60 font-bold">
      {item.seasonal_context.volatility?.replace('-', ' ') || 'Variable'}
    </p>

    {#if item.seasonal_context.off_peak_note}
      <p class="text-[11px] text-vibe-brown/70 leading-snug italic">
        {item.seasonal_context.off_peak_note}
      </p>
    {/if}

    {#if item.seasonal_context.peak_note}
      <p class="text-xs text-vibe-brown/90 italic leading-snug">
        {item.seasonal_context.peak_note}
      </p>
    {/if}

    {#if item.seasonal_context.behavior}
      <p class="text-[11px] text-vibe-brown/80 leading-snug">
        {item.seasonal_context.behavior}
      </p>
    {/if}

    {#if item.seasonal_context.risk_note}
      <p class="text-[10px] text-red-600/70 italic leading-snug">
        {item.seasonal_context.risk_note}
      </p>
    {/if}
  </div>
</SafetyCard>
{/if}

<!-- 4. Safety Factors -->
<SafetyCard title="Safety Factors">
  <div class="space-y-4">
    {#if item.safety_factors}
      <span class="px-2 py-0.5 rounded text-[10px] font-bold uppercase border
        {item.safety_factors.level === 'high' ? 'bg-red-50 text-red-700 border-red-200' : 
         item.safety_factors.level?.includes('moderate') ? 'bg-orange-50 text-orange-700 border-orange-200' : 
         'bg-blue-50 text-blue-700 border-blue-200'}">
        {item.safety_factors.label}
      </span>
    {/if}

    <p class="text-sm text-vibe-brown leading-relaxed">
      {item.safety_factors?.description || item.safety_notes?.[0] || 'Standard precautions apply.'}
    </p>

    {#if item.safety_notes?.length > 1}
      <ul class="list-disc ml-5 space-y-1 text-xs text-gray-500">
        {#each item.safety_notes.slice(1) as note}
          <li>{note}</li>
        {/each}
      </ul>
    {/if}
  </div>
</SafetyCard>

<!-- 5. Recommended Actions -->
<SafetyCard title="Recommended Actions">
  <ul class="list-disc ml-5 space-y-1 text-sm text-vibe-brown">
    {#each item.recommendations ?? [] as rec}
      <li>{rec}</li>
    {:else}
      {#if item.music_identity}
        <li>Identify exits early and stay hydrated</li>
      {:else}
        <li>Identify a comfortable seat with a view of the room</li>
      {/if}
      <li>Keep phone charged for transport</li>
    {/each}
  </ul>
</SafetyCard>

<!-- 6. Solo Comfort & Situational Factors -->
<SafetyCard title="Solo Comfort & Situational Factors">
  <div class="flex items-center gap-2 mb-4">
    <div class="flex">
      {#each [1, 2, 3, 4, 5] as i}
        <span class="text-xl {i <= soloStars ? 'text-yellow-400' : 'text-gray-300'}">★</span>
      {/each}
    </div>
    <span class="text-sm text-gray-500 font-medium">({soloStars}/5)</span>
  </div>

  {#if item.solo_tips?.length}
    <ul class="list-disc ml-5 space-y-2 text-sm text-vibe-brown mb-4">
      {#each item.solo_tips as tip}
        <li>{tip}</li>
      {/each}
    </ul>
  {/if}

  <div class="grid grid-cols-1 md:grid-cols-2 gap-3">
    {#if item.physical_proximity}
      <div class="px-3 py-2 bg-[#fcdab7]/20 rounded border border-[#fcdab7]/40">
        <p class="text-[9px] uppercase tracking-tighter text-vibe-brown/60 font-bold">Proximity</p>
        <p class="text-xs text-vibe-brown/80 font-medium">{item.physical_proximity}</p>
      </div>
    {/if}

    {#if item.availability_ambiguity}
      <div class="px-3 py-2 bg-purple-50 rounded border border-purple-100">
        <p class="text-[9px] uppercase tracking-tighter text-purple-600 font-bold">Ambiguity</p>
        <p class="text-xs text-purple-800 font-medium capitalize">
          {item.availability_ambiguity.replace('-', ' ')}
        </p>
      </div>
    {/if}
  </div>
</SafetyCard>

<!-- 7. Known Variations -->
{#if item.variants?.length}
<SafetyCard title="Known Variations">
  <div class="space-y-2">
    {#each item.variants as variant}
      <div class="flex items-center justify-between p-3 bg-white rounded-lg border border-gray-100 shadow-sm">
        <div>
          <p class="text-sm font-bold text-vibe-brown">{variant.name}</p>
          <p class="text-[10px] text-gray-500">{variant.occurrence_note}</p>
        </div>
        <span class="px-2 py-0.5 rounded text-[10px] font-bold uppercase bg-purple-100 text-purple-700">
          {variant.ambiguity} Ambiguity
        </span>
      </div>
    {/each}
  </div>
</SafetyCard>
{/if}
