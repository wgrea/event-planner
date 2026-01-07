<!-- src/routes/+layout.svelte - UPDATED -->
<script lang="ts">
  import favicon from '$lib/assets/favicon.svg';
  import '../app.css';

  let { children } = $props();
</script>

<svelte:head>
  <link rel="icon" href={favicon} />
</svelte:head>

<!-- Navigation -->
<nav class="bg-white border-b border-gray-200 shadow-sm">
  <div class="container mx-auto px-4">
    <div class="flex justify-between items-center h-16">
      <div class="flex items-center">
        <a href="/" class="text-xl font-bold text-gray-900">
          Social Explorer
        </a>
      </div>
      
      <div class="flex items-center space-x-6">
        <a 
          href="/event-types" 
          class="text-gray-700 hover:text-blue-600 font-medium transition-colors"
        >
          Events
        </a>
        <a 
          href="/saved" 
          class="text-gray-700 hover:text-blue-600 font-medium transition-colors"
        >
          Saved Plans
        </a>
        <a 
          href="/low-pressure" 
          class="text-gray-700 hover:text-blue-600 font-medium transition-colors"
        >
          Low Pressure
        </a>
        <a 
          href="/ideas" 
          class="text-gray-700 hover:text-blue-600 font-medium transition-colors"
        >
          Ideas
        </a>
      </div>
    </div>
  </div>
</nav>

<!-- Main Content -->
<main class="min-h-screen bg-gray-50">
  {@render children()}
</main>

<!-- Footer -->
<footer class="bg-white border-t border-gray-200 py-8">
  <div class="container mx-auto px-4 text-center text-gray-600">
    <p>Social Event Explorer • Find activities that match your comfort level</p>
    <p class="text-sm mt-2">Built with SvelteKit & Tailwind CSS</p>
  </div>
</footer>