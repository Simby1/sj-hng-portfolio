<script lang="ts">
  import { SKILLS } from '../constants/portfolio';
</script>

<section class="py-32 px-4 relative overflow-hidden">
  <div class="max-w-7xl mx-auto relative z-10">
    <div class="text-center mb-24">
      <span class="text-vortex text-sm font-mono mb-2 block uppercase tracking-widest">02 / Technical Stack</span>
      <h2 class="text-5xl md:text-7xl font-bold mb-6">Engineered Excellence</h2>
      <p class="max-w-xl mx-auto text-stardust/60">
        A diverse toolkit built on the foundation of modern architecture and clean code principles.
      </p>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
      {#each SKILLS as group}
        <div class="glass p-8 rounded-3xl group hover:border-white/20 transition-colors">
          <h3 class="text-2xl font-bold mb-8 text-white/90 group-hover:text-white transition-colors">
            {group.category}
          </h3>
          <div class="flex flex-wrap gap-3">
            {#each group.items as skill}
              <span
                class="px-4 py-2 bg-white/5 rounded-xl text-sm font-mono border border-white/5 hover:bg-white/10 transition-colors cursor-default"
              >
                {skill}
              </span>
            {/each}
          </div>
        </div>
      {/each}
    </div>
  </div>

  <!-- Background decoration -->
  <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[600px] bg-nebula/5 blur-[120px] rounded-full -z-0"></div>
</section>
