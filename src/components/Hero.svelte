<script lang="ts">
  import { MousePointer2 } from 'lucide-svelte';
  import { INFO } from '../constants/portfolio';
</script>

<section class="relative h-screen flex flex-col items-center justify-center px-4 overflow-hidden">
  <div class="text-center z-10">
    <span class="text-sm uppercase tracking-[0.3em] font-medium mb-4 block opacity-60">
      {INFO.title}
    </span>
    
    <h1 class="text-6xl md:text-8xl lg:text-9xl font-display font-bold mb-6 tracking-tighter leading-none">
      <span class="text-gradient inline-block">
        {INFO.name}
      </span>
    </h1>

    <p class="max-w-2xl mx-auto text-lg md:text-xl text-stardust/70 font-light leading-relaxed mb-10 text-balance">
      {INFO.hook}
    </p>

    <div class="flex flex-wrap items-center justify-center gap-4">
      <a
        href="#projects"
        class="px-8 py-4 bg-white text-midnight rounded-full font-medium hover:scale-105 transition-transform duration-300"
      >
        Explore Projects
      </a>
      <a
        href={INFO.socials.github}
        target="_blank"
        rel="noopener noreferrer"
        class="px-8 py-4 glass border-white/20 rounded-full font-medium hover:bg-white/10 transition-all duration-300"
      >
        GitHub
      </a>
    </div>
  </div>

  <!-- Decorative Glows -->
  <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl aspect-square bg-nebula/10 blur-[120px] rounded-full -z-10 animate-pulse"></div>
  <div class="absolute bottom-[-10%] right-[-10%] w-[40%] aspect-square bg-vortex/10 blur-[100px] rounded-full -z-10"></div>

  <div class="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-30 animate-bounce">
    <span class="text-xs uppercase tracking-widest">Scroll</span>
    <MousePointer2 size={20} />
  </div>
</section>
