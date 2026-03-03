<!-- src/routes/clubs/[slug]/assess/+page.svelte -->
<script lang="ts">
  import { page } from '$app/stores';
  import SafetyCard from '$lib/components/safety/SafetyCard.svelte';
  import { goto } from '$app/navigation';
  
  import clubTypes from '$lib/data/club-types.json';

  const slug = $page.params.slug!;
  const club = (clubTypes as any[]).find(c => c.slug === slug);
  
  $: soloComfort = club?.solo_comfort ? Math.round(club.solo_comfort / 2) : 3;
  
  $: riskLevel = (() => {
    if (!club) return 'Moderate';
    
    const pressureScores: Record<string, number> = {
      'low': 1,
      'low-moderate': 2,
      'moderate': 3,
      'moderate-high': 4,
      'high': 5
    };
    
    const pressureScore = pressureScores[club.pressure_level] || 3;
    // Clubs get +1 for higher energy environment
    const totalScore = (pressureScore + 1) + (5 - soloComfort);
    
    if (totalScore <= 4) return 'Low';
    if (totalScore >= 7) return 'High';
    return 'Moderate';
  })();

  function goHome() { goto('/'); }
  function goToSafetyFlow() { goto('/safety/inspect'); }
  function goBack() { goto(`/clubs/${slug}`); }
</script>

<div class="min-h-screen bg-[#CDE7F6]/30 p-6">
  <div class="max-w-2xl mx-auto bg-white rounded-xl shadow-md p-6 space-y-6">

    <div class="flex justify-between text-sm text-gray-500">
      <button on:click={goBack} class="hover:text-softOrange">Back to Club</button>
    </div>

    <h1 class="text-2xl font-semibold">Safety Assessment — {club?.name || slug}</h1>

    {#if club}
      <SafetyCard title="Overall Risk Level">
        <p class="text-lg font-medium">
          <span class:bg-red-100:text-red-800={riskLevel === 'High'}
                 class:bg-yellow-100:text-yellow-800={riskLevel === 'Moderate'}
                 class:bg-green-100:text-green-800={riskLevel === 'Low'}
                 class="px-3 py-1 rounded-full">
            {riskLevel}
          </span>
        </p>
      </SafetyCard>

      <SafetyCard title="Solo Comfort">
        <div class="flex items-center gap-2">
          <div class="flex">
            {#each [1,2,3,4,5] as i}
              <span class="text-xl {i <= soloComfort ? 'text-yellow-400' : 'text-gray-300'}">
                ★
              </span>
            {/each}
          </div>
          <span class="text-gray-600">({soloComfort} / 5)</span>
        </div>
        {#if club.solo_comfort}
          <p class="text-sm text-gray-500 mt-1">
            Based on traveler feedback: {club.solo_comfort}/10
          </p>
        {/if}
      </SafetyCard>

      <SafetyCard title="Pressure Level">
        <p class="capitalize">{club.pressure_level.replace('-', ' ')}</p>
      </SafetyCard>

      <SafetyCard title="Key Safety Notes">
        <ul class="list-disc ml-5 space-y-1">
          {#if club.peak_hours}
            <li>Peak hours: {club.peak_hours}</li>
          {/if}
          {#if club.safety_notes && club.safety_notes.length > 0}
            {#each club.safety_notes as note}
              <li>{note}</li>
            {/each}
          {/if}
          {#if club.sensory_intensity === 'high'}
            <li>High sensory stimulation - loud music and intense lighting</li>
          {/if}
          {#if club.sensory_intensity === 'medium'}
            <li>Moderate sensory environment</li>
          {/if}
          {#if soloComfort < 3}
            <li>Can be intense for solo travelers</li>
          {/if}
          {#if club.music_identity && club.music_identity.includes('techno')}
            <li>Techno/house music often means extended sessions</li>
          {/if}
        </ul>
      </SafetyCard>

      <SafetyCard title="Recommended Actions">
        <ul class="list-disc ml-5 space-y-1">
          {#if club.recommendations && club.recommendations.length > 0}
            {#each club.recommendations as rec}
              <li>{rec}</li>
            {/each}
          {:else}
            <li>Take breaks outside to cool down</li>
            <li>Stay aware of exits and crowd movement</li>
            <li>Hydrate regularly - alternate drinks with water</li>
            {#if soloComfort < 3}
              <li>Consider going with a friend for better experience</li>
            {/if}
          {/if}
        </ul>
      </SafetyCard>
    {:else}
      <p class="text-gray-500">Club not found</p>
    {/if}

  </div>
</div>