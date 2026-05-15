<script lang="ts">
  import { Menu, X } from 'lucide-svelte';
  import { onMount } from 'svelte';
  import { INFO } from '../constants/portfolio';

  let isScrolled = $state(false);
  let isMobileMenuOpen = $state(false);

  onMount(() => {
    const handleScroll = () => {
      isScrolled = window.scrollY > 50;
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  });

  const navLinks = [
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];
</script>

<header class="fixed top-0 left-0 w-full z-50 px-4 py-6 flex justify-center pointer-events-none">
  <nav class="flex items-center gap-8 px-6 py-3 rounded-full pointer-events-auto transition-all duration-500 {isScrolled ? 'glass-dark drop-shadow-2xl shadow-black/50' : 'bg-transparent'}">
    <div class="flex items-center gap-3">
      <div class="w-8 h-8 rounded-full bg-gradient-to-tr from-blue-500 to-purple-500 animate-pulse"></div>
      <span class="font-display font-medium tracking-tight text-white hidden sm:block">
        {INFO.name}
      </span>
    </div>

    <div class="hidden md:flex items-center gap-8 border-l border-white/10 pl-8">
      {#each navLinks as link}
        <a
          href={link.href}
          class="text-sm font-medium text-stardust/60 hover:text-white transition-colors"
        >
          {link.name}
        </a>
      {/each}
      <a
        href={INFO.socials.github}
        target="_blank"
        rel="noopener noreferrer"
        class="text-xs px-4 py-2 glass border-white/20 rounded-full hover:bg-white/10 transition-all font-mono"
      >
        V.2.0.26
      </a>
    </div>

    <button 
      class="md:hidden text-white p-1"
      onclick={() => (isMobileMenuOpen = !isMobileMenuOpen)}
    >
      {#if isMobileMenuOpen}
        <X size={24} />
      {:else}
        <Menu size={24} />
      {/if}
    </button>
  </nav>

  {#if isMobileMenuOpen}
    <div
      class="absolute top-24 left-4 right-4 glass rounded-[32px] p-8 flex flex-col items-center gap-6 pointer-events-auto md:hidden"
    >
      {#each navLinks as link}
        <a
          href={link.href}
          onclick={() => (isMobileMenuOpen = false)}
          class="text-2xl font-bold text-white"
        >
          {link.name}
        </a>
      {/each}
      <a
        href={INFO.socials.github}
        target="_blank"
        rel="noopener noreferrer"
        class="w-full py-4 glass text-center rounded-2xl font-mono text-sm"
      >
        Github / Simby1
      </a>
    </div>
  {/if}
</header>
