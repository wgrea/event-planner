<!-- src/routes/clubs/[slug]/+page.svelte -->
<script lang="ts">
  import AnalyzeLayout from '$lib/components/analyze/Layout.svelte';
  import AnalyzeCTA from '$lib/components/analyze/CTA.svelte';
  import ClubAnalyzeDetails from '$lib/components/analyze/ClubDetails.svelte';
  import Toggle from '$lib/components/Toggle.svelte';
  import { findRelatedDrinks } from '$lib/utils/drinks';

  export let data;
  const club = data.club;

  const relatedDrinks = findRelatedDrinks(club.typical_drinks);
</script>

<AnalyzeLayout theme="purple" title={club.name} backHref="/clubs">
  <ClubAnalyzeDetails {club} />

  {#if relatedDrinks.length}
    <div class="space-y-2 mt-6">
      <Toggle title="Typical Drinks" theme="purple">
        <ul class="list-disc ml-5 space-y-1 text-vibe-brown">
          {#each relatedDrinks as drink}
            <li class="hover:text-purple-800 transition-colors cursor-default font-medium">
              {drink.name}
            </li>
          {/each}
        </ul>
      </Toggle>
    </div>
  {/if}

  <AnalyzeCTA href={`/clubs/${club.slug}/assess`} />
</AnalyzeLayout>

