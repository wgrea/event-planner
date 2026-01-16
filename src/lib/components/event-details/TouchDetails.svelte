<script lang="ts">
  import type { SocialEventType } from '$lib/types/event';
  
  export let event: SocialEventType;
</script>

{#if event.touchDetails}
  <div class="mb-6">
    <h3 class="text-lg font-semibold mb-2">How Touch Works Here:</h3>
    <ul class="list-disc pl-5 space-y-1">
      {#each event.touchDetails.howPeopleTouch as tip}
        <li class="text-gray-700">{tip}</li>
      {/each}
    </ul>
    <p class="mt-2 text-sm text-gray-600">Proximity Level: {event.touchDetails.proximityLevel}/4</p>
  </div>
{/if}