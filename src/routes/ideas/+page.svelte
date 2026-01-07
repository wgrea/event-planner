<!-- src/routes/ideas/+page.svelte - FIXED TypeScript -->
<script lang="ts">
  import { onMount } from 'svelte';
  import SavedPlansList from '$lib/components/SavedPlansList.svelte';
  import { getPlans } from '$lib/utils/planStorage';
  import type { EventPlan } from '$lib/types/plan';
  
  let plans = $state<EventPlan[]>([]);
  
  onMount(() => {
    loadPlans();
  });
  
  function loadPlans() {
    const userPlans = getPlans('current_user');
    // Ensure it's always an array
    plans = Array.isArray(userPlans) ? userPlans : [];
  }
</script>

<svelte:head>
  <title>Event Ideas - Social Event Explorer</title>
</svelte:head>

<div class="min-h-screen bg-gray-50 py-8">
  <div class="container mx-auto px-4">
    <!-- Header -->
    <div class="mb-8">
      <h1 class="text-3xl font-bold text-gray-900 mb-4">Event Ideas & Plans</h1>
      <p class="text-gray-600">
        View and manage your saved event ideas. Start planning your next social adventure!
      </p>
    </div>
    
    <!-- Saved Plans Section -->
    <div class="bg-white rounded-xl shadow-sm p-6 mb-8">
      <SavedPlansList />
    </div>
    
    <!-- Quick Stats -->
    <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
      <div class="bg-blue-50 rounded-lg p-6 border border-blue-200">
        <div class="text-3xl font-bold text-blue-900 mb-2">{plans.length}</div>
        <div class="text-blue-700 font-medium">Total Ideas Saved</div>
      </div>
      <div class="bg-green-50 rounded-lg p-6 border border-green-200">
        <div class="text-3xl font-bold text-green-900 mb-2">
          {plans.filter((p: EventPlan) => p.status === 'planned' || p.status === 'attended').length}
        </div>
        <div class="text-green-700 font-medium">Active Plans</div>
      </div>
      <div class="bg-purple-50 rounded-lg p-6 border border-purple-200">
        <div class="text-3xl font-bold text-purple-900 mb-2">
          {[...new Set(plans.map((p: EventPlan) => p.eventType?.category))].filter(Boolean).length}
        </div>
        <div class="text-purple-700 font-medium">Categories Explored</div>
      </div>
    </div>
    
    <!-- Quick Actions -->
    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
      <a
        href="/event-types"
        class="bg-white border border-gray-300 rounded-lg p-6 hover:border-blue-500 hover:shadow-md transition-all"
      >
        <div class="flex items-center gap-4">
          <div class="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
            <svg class="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>
          <div>
            <div class="font-bold text-gray-900">Explore More Events</div>
            <div class="text-sm text-gray-600">Find new event types to add to your ideas</div>
          </div>
        </div>
      </a>
      
      <a
        href="/low-pressure"
        class="bg-white border border-gray-300 rounded-lg p-6 hover:border-green-500 hover:shadow-md transition-all"
      >
        <div class="flex items-center gap-4">
          <div class="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
            <svg class="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905a3.61 3.61 0 01-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5" />
            </svg>
          </div>
          <div>
            <div class="font-bold text-gray-900">Low Pressure Events</div>
            <div class="text-sm text-gray-600">Perfect for easing into social situations</div>
          </div>
        </div>
      </a>
    </div>
  </div>
</div>