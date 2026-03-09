<!-- src/routes/events/[slug]/+page.svelte -->
<script lang="ts">
  import AnalyzeLayout from '$lib/components/analyze/Layout.svelte';
  import AnalyzeCTA from '$lib/components/analyze/CTA.svelte';
  import EventAnalyzeDetails from '$lib/components/analyze/EventDetails.svelte';
  import Toggle from '$lib/components/Toggle.svelte';
  import { findRelatedDrinks } from '$lib/utils/drinks';

  export let data;
  const event = data.event;

  const relatedDrinks = findRelatedDrinks(event.typical_drinks);
</script>

<AnalyzeLayout theme="yellow" title={event.name} backHref="/events">
  <EventAnalyzeDetails {event} />

  {#if relatedDrinks.length}
    <div class="space-y-2 mt-6">
      <Toggle title="Typical Drinks" theme="yellow">
        <ul class="list-disc ml-5 space-y-1 text-vibe-brown">
          {#each relatedDrinks as drink}
            <li class="hover:text-vibe-blue transition-colors cursor-default">{drink.name}</li>
          {/each}
        </ul>
      </Toggle>
    </div>
  {/if}

  <AnalyzeCTA href={`/events/${event.slug}/assess`} />
</AnalyzeLayout>
