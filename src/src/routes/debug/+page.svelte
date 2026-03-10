<!-- src/routes/debug/+page.svelte -->
<script lang="ts">
  import barTypes from '$lib/data/bar-types.json';
  import clubTypes from '$lib/data/club-types.json';
  import eventTypes from '$lib/data/event-types.json';
  
  // Import all drink files
  import beerData from '$lib/data/drinks/beer.json';
  import wineData from '$lib/data/drinks/wine.json';
  import spiritsData from '$lib/data/drinks/spirits.json';
  import cocktailsData from '$lib/data/drinks/cocktails.json';
  import fermentedData from '$lib/data/drinks/fermented-traditional.json';
  import nonAlcoholicData from '$lib/data/drinks/non-alcoholic.json';

  const allDrinks = [
    ...beerData, ...wineData, ...spiritsData, 
    ...cocktailsData, ...fermentedData, ...nonAlcoholicData
  ];

  let selectedDataType = 'bars';
  let searchTerm = '';
  
  $: data = {
    bars: barTypes,
    clubs: clubTypes,
    events: eventTypes,
    drinks: allDrinks
  }[selectedDataType];
  
  $: filtered = data?.filter((item: any) => 
    JSON.stringify(item).toLowerCase().includes(searchTerm.toLowerCase())
  );
</script>

<div class="p-6">
  <h1 class="text-2xl font-bold mb-4">Data Inspector</h1>
  
  <div class="flex gap-4 mb-4">
    <select bind:value={selectedDataType} class="border p-2 rounded">
      <option value="bars">Bars ({barTypes.length})</option>
      <option value="clubs">Clubs ({clubTypes.length})</option>
      <option value="events">Events ({eventTypes.length})</option>
      <option value="drinks">Drinks ({allDrinks.length})</option>
    </select>
    
    <input 
      type="text" 
      bind:value={searchTerm}
      placeholder="Search..." 
      class="border p-2 rounded flex-1"
    />
  </div>
  
  <div class="bg-gray-100 p-4 rounded overflow-auto max-h-96">
    <pre class="text-sm">{JSON.stringify(filtered, null, 2)}</pre>
  </div>
</div>