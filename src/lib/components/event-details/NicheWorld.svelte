<!-- src/lib/components/event-details/NicheWorld.svelte -->
<script lang="ts">
  import type { SocialEventType } from '$lib/types/event';
  export let event: SocialEventType;
</script>

{#if event.nicheWorld}
  <div class="mb-6 p-4 bg-purple-50 rounded-lg border border-purple-100">
    <h3 class="text-lg font-semibold mb-2 flex items-center">
      <span class="mr-2">🔍</span> How This World Works
    </h3>
    
    <div class="space-y-4">
      {#if event.nicheWorld.unwrittenRules?.length > 0}
        <div>
          <h4 class="font-medium text-gray-900 mb-1">Unwritten Rules:</h4>
          <ul class="list-disc pl-5 space-y-1">
            {#each event.nicheWorld.unwrittenRules as rule}
              <li class="text-sm text-gray-700">{rule}</li>
            {/each}
          </ul>
        </div>
      {/if}
      
      {#if event.nicheWorld.socialCurrency?.length > 0}
        <div>
          <h4 class="font-medium text-gray-900 mb-1">Social Currency:</h4>
          <p class="text-sm text-gray-700">
            What earns respect here: {event.nicheWorld.socialCurrency.join(', ')}
          </p>
        </div>
      {/if}
      
      {#if event.nicheWorld.entryBarriers?.length > 0}
        <div>
          <h4 class="font-medium text-gray-900 mb-1">Entry Barriers:</h4>
          <p class="text-sm text-gray-700">
            {event.nicheWorld.entryBarriers.join(', ')}
          </p>
        </div>
      {/if}
    </div>
  </div>
{/if}