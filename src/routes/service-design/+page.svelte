<!-- src/routes/service-design/+page.svelte -->
<script>
  import { fade } from 'svelte/transition';
  import ReviewerFAQ from '$lib/components/docs/ReviewerFAQ.svelte';
  import ServiceLogic from '$lib/components/docs/ServiceLogic.svelte';
  import DataArchitecture from '$lib/components/docs/DataArchitecture.svelte';
  import UXPrinciples from '$lib/components/docs/UXPrinciples.svelte';
  import ProcessInsights from '$lib/components/docs/ProcessInsights.svelte';

  let activeTab = 'blueprint';

  const tabs = [
    { id: 'blueprint', label: 'Service Blueprint', icon: '🗺️' },
    { id: 'ux', label: 'UX Principles', icon: '🧠' },
    { id: 'process', label: 'Process Insights', icon: '⚡' },
    { id: 'data', label: 'System Architecture', icon: '🏗️' },
    { id: 'faq', label: 'Reviewer Q&A', icon: '❓' }
  ];
</script>

<div class="min-h-screen bg-[#FFF7ED] text-[#5B3E31] p-4 md:p-8">
  <div class="max-w-4xl mx-auto">
    
    <!-- Purpose Statement -->
    <div class="mb-8 p-6 bg-white rounded-2xl border-l-4 border-orange-400 shadow-sm">
      <p class="text-sm leading-relaxed text-[#5B3E31]">
        <span class="font-bold text-[#F97316]">Vespera</span> is a UX‑first prototype designed to map cultural drinking environments, safety context, and social dynamics around the world. It is not a nightlife directory or a party app — it is a cultural atlas and decision‑support tool that helps users understand vibe, context, and comfort before entering a social space. This project bridges my retail experience with high‑order UX principles, focusing on clarity, trust, and context rather than monetization or business modeling.
      </p>
    </div>
    
    <header class="mb-8 border-b border-orange-200 pb-6 flex justify-between items-end">
      <div>
        <!-- Changed to orange -->
        <h1 class="text-3xl font-bold text-[#F97316]">Project Documentation</h1>
        <p class="text-sm opacity-70 mt-1">Service Design & Technical Architecture • v1.0</p>
      </div>
      <!-- Changed to orange -->
      <a href="/" class="text-sm font-bold text-[#F97316] hover:underline hover:text-[#F97316]/80 transition-colors">← Back Home</a>
    </header>

    <nav class="flex gap-2 mb-8 bg-orange-100/30 p-1 rounded-2xl w-fit overflow-x-auto max-w-full scrollbar-hide">
      {#each tabs as tab}
        <button 
          on:click={() => activeTab = tab.id}
          class="px-5 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-2 whitespace-nowrap
          {activeTab === tab.id ? 'bg-white shadow-sm text-[#F97316]' : 'opacity-60 hover:opacity-100'}">
          <span>{tab.icon}</span> {tab.label}
        </button>
      {/each}
    </nav>

    <main class="bg-white rounded-3xl p-6 md:p-10 shadow-sm border border-orange-100 min-h-125">
      {#if activeTab === 'blueprint'}
        <div in:fade><ServiceLogic /></div>
      {:else if activeTab === 'ux'}
        <div in:fade><UXPrinciples /></div>
      {:else if activeTab === 'process'}
        <div in:fade><ProcessInsights /></div>
      {:else if activeTab === 'data'}
        <div in:fade><DataArchitecture /></div>
      {:else if activeTab === 'faq'}
        <div in:fade><ReviewerFAQ /></div>
      {/if}
    </main>

    <footer class="mt-12 text-center border-t border-orange-100 pt-6">
      <p class="text-xs opacity-40">Documentation as Living Code.</p>
    </footer>
  </div>
</div>