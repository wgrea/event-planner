<!-- src/lib/components/safety/AssessLayout.svelte -->
<script lang="ts">
  type AssessTheme = 'green' | 'purple' | 'blue' | 'yellow' | 'orange';

  export let theme: AssessTheme = 'green';
  export let title: string;
  export let backHref: string;

  const borderClasses: Record<AssessTheme, string> = {
    green: 'border-green-400',
    purple: 'border-purple-400',
    blue: 'border-blue-400',
    yellow: 'border-yellow-400',
    orange: 'border-orange-400'
  };

  const textClasses: Record<AssessTheme, string> = {
    green: 'text-green-800',
    purple: 'text-purple-800',
    blue: 'text-blue-800',
    yellow: 'text-yellow-800',
    orange: 'text-orange-800'
  };
</script>

<div class="min-h-screen bg-[#fcdab7] p-4 md:p-8">
  <div class="max-w-2xl mx-auto bg-white rounded-xl shadow-lg p-6 space-y-6 border-t-4 {borderClasses[theme]}">
    <nav class="flex items-center gap-4 border-b border-gray-100 pb-4">
      <a href={backHref} class="text-sm font-medium hover:text-orange-500 text-vibe-brown/70 transition-colors">
        ← Back
      </a>
      <a href="/" class="text-sm font-medium hover:text-orange-500 text-vibe-brown/70 transition-colors">
        ⌂ Home
      </a>
    </nav>

    <h1 class="text-2xl font-bold tracking-tight {textClasses[theme]}">{title}</h1>

    <div class="space-y-4">
      <slot />
    </div>
  </div>
</div>