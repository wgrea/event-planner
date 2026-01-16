<script lang="ts">
  import type { SocialEventType } from '$lib/types/event';
  
  export let event: SocialEventType;
</script>

{#if event.soloTips}
  <div class="mb-6">
    <h3 class="text-lg font-semibold mb-2">Going Solo? Try This:</h3>
    <ul class="list-disc pl-5 space-y-1">
      {#each event.soloTips.howToGoSolo as tip}
        <li class="text-gray-700">{tip}</li>
      {/each}
    </ul>
  </div>
{/if}