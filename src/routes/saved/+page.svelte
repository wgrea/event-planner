<!-- src/routes/saved/+page.svelte -->
<script lang="ts">
  import SavedPlansList from '$lib/components/SavedPlansList.svelte';
  import { goto } from '$app/navigation';
    import { page } from '$app/state';
</script>

<svelte:head>
  <title>Saved Plans - Social Event Explorer</title>
</svelte:head>

<div class="min-h-screen bg-gray-50 py-8">
  <div class="container mx-auto px-4">
    <!-- Header -->
    <div class="mb-8">
      <div class="flex items-center gap-4 mb-4">
        <button
          onclick={() => goto('/')}
          class="text-gray-600 hover:text-gray-900 transition-colors"
          title="Back to home"
        >
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
        </button>
        <h1 class="text-3xl font-bold text-gray-900">Your Saved Plans</h1>
      </div>
      <p class="text-gray-600">View and manage all your saved event plans in one place.</p>
    </div>
    
    <!-- Saved Plans Section -->
    <div class="bg-white rounded-xl shadow-sm p-6">
      <SavedPlansList />
    </div>
    
    <!-- Quick Actions -->
    <div class="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
      <a
        href="/event-types"
        class="bg-blue-50 hover:bg-blue-100 rounded-lg p-4 transition-colors border border-blue-200"
      >
        <div class="font-medium text-blue-900 mb-1">Browse More Events</div>
        <div class="text-sm text-blue-700">Discover new event types to save</div>
      </a>
      
      <a
        href="/low-pressure"
        class="bg-green-50 hover:bg-green-100 rounded-lg p-4 transition-colors border border-green-200"
      >
        <div class="font-medium text-green-900 mb-1">Low Pressure Events</div>
        <div class="text-sm text-green-700">Find events with minimal social pressure</div>
      </a>
      
      <a
        href="/ideas"
        class="bg-purple-50 hover:bg-purple-100 rounded-lg p-4 transition-colors border border-purple-200"
      >
        <div class="font-medium text-purple-900 mb-1">Get Event Ideas</div>
        <div class="text-sm text-purple-700">Find inspiration for your next outing</div>
      </a>
    </div>
  </div>
</div>