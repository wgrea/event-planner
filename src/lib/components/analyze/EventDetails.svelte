<!-- src/lib/components/analyze/EventDetails.svelte -->
<script lang="ts">
  import SafetyCard from '$lib/components/safety/Card.svelte';
  export let event: any;
</script>

<SafetyCard title="Social Dynamics">
  <p class="text-vibe-brown leading-relaxed">{event.social_dynamics}</p>
</SafetyCard>

<SafetyCard title="Interaction Intensity">
  <p class="capitalize">{event.interaction_intensity.label}</p>
  <p class="text-xs text-vibe-brown italic mt-1">
    {event.interaction_intensity.description}
  </p>
</SafetyCard>

<SafetyCard title="Commitment Level">
  <p class="text-vibe-brown font-medium px-3 py-2 bg-yellow-50 border border-yellow-200 rounded-lg inline-block">
    {event.plan_night_around ? '📍 Plan your night around this' : '👋 Drop-in friendly'}
  </p>
</SafetyCard>

{#if event.cultural_notes}
  <SafetyCard title="Cultural Notes">
    <p class="text-vibe-brown italic text-sm leading-relaxed">{event.cultural_notes}</p>
  </SafetyCard>
{/if}