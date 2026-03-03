<!-- src/routes/drinks/[id]/assess/+page.svelte -->
<script lang="ts">
  import { page } from '$app/stores';

  import SafetyCard from '$lib/components/safety/SafetyCard.svelte';
  import { goto } from '$app/navigation';
  
  // Import all drink files
  import beerData from '$lib/data/drinks/beer.json';
  import wineData from '$lib/data/drinks/wine.json';
  import spiritsData from '$lib/data/drinks/spirits.json';
  import cocktailsData from '$lib/data/drinks/cocktails.json';
  import fermentedData from '$lib/data/drinks/fermented-traditional.json';
  import nonAlcoholicData from '$lib/data/drinks/non-alcoholic.json';

  const id = $page.params.id!;
  
  // Combine all drinks
  const allDrinks = [
    ...(beerData as any[]),
    ...(wineData as any[]),
    ...(spiritsData as any[]),
    ...(cocktailsData as any[]),
    ...(fermentedData as any[]),
    ...(nonAlcoholicData as any[])
  ];

  // Find the drink
  const drink = allDrinks.find(d => d.id === id);
  
  // Determine risk based on ABV
  $: riskLevel = (() => {
    if (!drink) return 'Moderate';
    const abv = drink.alcohol_percentage || 0;
    if (abv === 0) return 'Low';
    if (abv < 10) return 'Low';
    if (abv < 20) return 'Moderate';
    if (abv < 30) return 'Moderate-High';
    return 'High';
  })();

  function goHome() {
    goto('/');
  }

  function goToSafetyFlow() {
    goto('/safety/inspect');
  }

  function goBack() {
    goto(`/drinks/${id}`);
  }
</script>

<div class="min-h-screen bg-[#CDE7F6]/30 p-6">
  <div class="max-w-2xl mx-auto bg-white rounded-xl shadow-md p-6 space-y-6">


    <div class="flex justify-between text-sm text-gray-500">
      <button on:click={goBack} class="hover:text-softOrange">Back to Drink</button>
    </div>

    <h1 class="text-2xl font-semibold">Safety Assessment — {drink?.name || id}</h1>

    {#if drink}
      <SafetyCard title="Overall Risk Level">
        <p class="text-lg font-medium">
          <span class:bg-red-100:text-red-800={riskLevel === 'High' || riskLevel === 'Moderate-High'}
                 class:bg-yellow-100:text-yellow-800={riskLevel === 'Moderate'}
                 class:bg-green-100:text-green-800={riskLevel === 'Low'}
                 class="px-3 py-1 rounded-full">
            {riskLevel}
          </span>
        </p>
      </SafetyCard>

      <SafetyCard title="Alcohol Percentage">
        <p class="text-lg">
          {drink.alcohol_percentage ? `${drink.alcohol_percentage}% ABV` : 'Varies / Non-alcoholic'}
        </p>
      </SafetyCard>

      <SafetyCard title="Key Safety Notes">
        <ul class="list-disc ml-5 space-y-1">
          {#if drink.risk_factors && drink.risk_factors.length > 0}
            {#each drink.risk_factors as factor}
              <li>{factor}</li>
            {/each}
          {/if}
          
          {#if drink.alcohol_percentage && drink.alcohol_percentage > 20}
            <li>High alcohol content - pace yourself</li>
          {/if}
          
          {#if drink.alcohol_percentage && drink.alcohol_percentage > 30}
            <li>Very high proof - consider diluting or sipping slowly</li>
          {/if}
          
          {#if drink.category === 'Cocktails'}
            <li>Mixed drinks can mask alcohol strength - drink slowly</li>
          {/if}
          
          {#if drink.legal_notes}
            <li class="text-orange-700">{drink.legal_notes}</li>
          {/if}
          
          {#if (!drink.risk_factors || drink.risk_factors.length === 0) && !drink.legal_notes && drink.alcohol_percentage && drink.alcohol_percentage < 10}
            <li class="text-gray-500">Standard drinking precautions apply</li>
          {/if}
        </ul>
      </SafetyCard>

      <SafetyCard title="Recommended Actions">
        <ul class="list-disc ml-5 space-y-1">
          {#if drink.recommendations && drink.recommendations.length > 0}
            {#each drink.recommendations as rec}
              <li>{rec}</li>
            {/each}
          {:else}
            <li>Check alcohol percentage before consuming</li>
            <li>Alternate alcoholic drinks with water</li>
            <li>Eat food while drinking to slow absorption</li>
            {#if drink.alcohol_percentage && drink.alcohol_percentage > 20}
              <li>Consider sharing or diluting</li>
            {/if}
          {/if}
        </ul>
      </SafetyCard>

      {#if drink.consumption_patterns && drink.consumption_patterns.length > 0}
        <SafetyCard title="Typical Consumption Patterns">
          <ul class="list-disc ml-5 space-y-1">
            {#each drink.consumption_patterns as pattern}
              <li>{pattern}</li>
            {/each}
          </ul>
        </SafetyCard>
      {/if}
    {:else}
      <p class="text-gray-500">Drink not found</p>
    {/if}

  </div>
</div>