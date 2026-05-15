<script lang="ts">
  import { PROJECTS } from '../constants/portfolio';
  import { ExternalLink, Code } from 'lucide-svelte';
  import { cn } from '../lib/utils';
</script>

<section id="projects" class="py-32 px-4 md:px-8">
  <div class="max-w-7xl mx-auto">
    <div class="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-6">
      <div>
        <span class="text-nebula text-sm font-mono mb-2 block uppercase tracking-widest">01 / Selected Works</span>
        <h2 class="text-5xl md:text-7xl font-bold">Projects</h2>
      </div>
      <p class="max-w-md text-stardust/60 text-lg">
        A collection of mission-critical systems and creative experiments, 
        blending robust engineering with refined aesthetics.
      </p>
    </div>

    <div class="space-y-40">
      {#each PROJECTS as project, i}
        {@const isEven = i % 2 === 0}
        <div class="flex flex-col lg:flex-row gap-12 items-center {isEven ? '' : 'lg:flex-row-reverse'}">
          <!-- Visual -->
          <div class="flex-1 w-full relative group">
            <div 
              class="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" 
              style="background-color: {project.color}11"
            ></div>
            <div class="relative overflow-hidden rounded-2xl glass border-white/5 aspect-video bg-white/5 flex items-center justify-center transform group-hover:scale-[1.02] transition-transform duration-500">
              <div class="text-[120px] opacity-10 group-hover:opacity-20 transition-opacity duration-500 transform group-hover:rotate-12 group-hover:scale-110">
                <svelte:component this={project.icon} size={120} color={project.color} />
              </div>
              <div class="absolute inset-0 bg-gradient-to-t from-midnight/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-8">
                <p class="text-sm font-mono uppercase tracking-tighter text-stardust/60">
                  View Case Study &rarr;
                </p>
              </div>
            </div>
          </div>

          <!-- Content -->
          <div class="flex-1 w-full space-y-6">
            <div class="space-y-4">
              <div class="flex items-center gap-2">
                <svelte:component this={project.icon} class="text-white/40" size={18} />
                <h3 class="text-3xl md:text-5xl font-bold">{project.title}</h3>
              </div>
              <p class="text-xl text-stardust/70 font-light leading-relaxed">
                {project.description}
              </p>
            </div>

            <div class="flex flex-wrap gap-2">
              {#each project.tech as t}
                <span class="px-3 py-1 text-xs font-mono bg-white/5 rounded-full border border-white/5 uppercase">
                  {t}
                </span>
              {/each}
            </div>

            <div class="flex gap-4 pt-4">
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                class="flex items-center gap-2 px-6 py-3 bg-white text-midnight rounded-full font-medium hover:translate-y-[-2px] transition-transform"
              >
                Live Demo <ExternalLink size={16} />
              </a>
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                class="flex items-center gap-2 px-4 py-3 glass rounded-full font-medium hover:bg-white/10 transition-colors"
              >
                <Code size={20} />
              </a>
            </div>
          </div>
        </div>
      {/each}
    </div>
  </div>
</section>
