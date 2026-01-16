<script lang="ts">
  import type { SocialEventType } from '$lib/types/event';
  
  export let event: SocialEventType;
  
  $: parkingEmoji = {
    'free': '🅿️✅',
    'paid': '🅿️💰',
    'mixed': '🅿️📊',
    'difficult': '🅿️⚠️'
  }[event.logistics?.parking?.type || 'mixed'];
</script>

{#if event.logistics}
  <div class="mb-6">
    <h3 class="text-lg font-semibold mb-2">Practical Info:</h3>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
      {#if event.logistics.ticketSources}
        <div class="bg-gray-50 p-4 rounded-lg">
          <h4 class="font-medium mb-2">🎫 Tickets:</h4>
          <p class="text-sm text-gray-700">
            {event.logistics.ticketSources.join(', ')}
          </p>
        </div>
      {/if}
      
      {#if event.logistics.parking}
        <div class="bg-gray-50 p-4 rounded-lg">
          <h4 class="font-medium mb-2">{parkingEmoji} Parking:</h4>
          <p class="text-sm text-gray-700 capitalize">
            {event.logistics.parking.type}
            {#if event.logistics.parking.details}
              <br><span class="text-xs text-gray-500">{event.logistics.parking.details}</span>
            {/if}
          </p>
        </div>
      {/if}
      
      {#if event.logistics.alcohol}
        <div class="bg-gray-50 p-4 rounded-lg">
          <h4 class="font-medium mb-2">🍸 Drinks:</h4>
          <p class="text-sm text-gray-700 capitalize">
            {event.logistics.alcohol.likelihood} alcohol likelihood
            {#if event.logistics.alcohol.byoAllowed !== undefined}
              <br><span class="text-xs {event.logistics.alcohol.byoAllowed ? 'text-green-600' : 'text-gray-500'}">
                {event.logistics.alcohol.byoAllowed ? 'BYO allowed' : 'No BYO'}
              </span>
            {/if}
          </p>
        </div>
      {/if}
      
      {#if event.logistics.transit}
        <div class="bg-gray-50 p-4 rounded-lg">
          <h4 class="font-medium mb-2">🚌 Transit:</h4>
          <p class="text-sm text-gray-700">{event.logistics.transit}</p>
        </div>
      {/if}
    </div>
  </div>
{/if}