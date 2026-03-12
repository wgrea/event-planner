<!-- src/routes/bars/[slug]/+page.svelte -->
<script lang="ts">
  import AnalyzeLayout from '$lib/components/analyze/Layout.svelte';
  import AnalyzeCTA from '$lib/components/analyze/CTA.svelte';
  import BarAnalyzeDetails from '$lib/components/analyze/BarDetails.svelte';
  import Toggle from '$lib/components/Toggle.svelte';
  import { findRelatedDrinks } from '$lib/utils/drinks';

  export let data;
  const bar = data.bar;

  const relatedDrinks = findRelatedDrinks(bar.typical_drinks);
</script>

<AnalyzeLayout theme="green" title={bar.name} backHref="/bars">
  <BarAnalyzeDetails {bar} />

  {#if relatedDrinks.length}
    <div class="space-y-2 mt-6">
      <Toggle title="Typical Drinks" theme="green">
        <ul class="list-disc ml-5 space-y-1 text-vibe-brown">
          {#each relatedDrinks as drink}
            <li class="hover:text-green-700 transition-colors cursor-default font-medium">
              {drink.name}
            </li>
          {/each}
        </ul>
      </Toggle>
    </div>
  {/if}

  <AnalyzeCTA href={`/bars/${bar.slug}/assess`} />
</AnalyzeLayout>
