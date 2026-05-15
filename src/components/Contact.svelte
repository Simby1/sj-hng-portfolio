<script lang="ts">
  import { Send, Mail, MapPin, Code, Globe } from 'lucide-svelte';
  import { INFO } from '../constants/portfolio';

  let formState = $state<'idle' | 'sending' | 'success'>('idle');

  function handleSubmit(e: Event) {
    e.preventDefault();
    formState = 'sending';
    setTimeout(() => {
      formState = 'success';
    }, 1500);
  }
</script>

<section id="contact" class="py-32 px-4">
  <div class="max-w-7xl mx-auto glass p-8 md:p-16 rounded-[40px] border-white/10 relative overflow-hidden">
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 relative z-10">
      <div class="space-y-8">
        <div>
          <span class="text-blue-400 text-sm font-mono mb-2 block uppercase tracking-widest">03 / Human Connection</span>
          <h2 class="text-5xl md:text-7xl font-bold mb-6">Let's build the future together</h2>
          <p class="text-xl text-stardust/60 font-light max-w-md leading-relaxed">
            Whether you have a groundbreaking idea or just want to chat about engineering, 
            my inbox is always open.
          </p>
        </div>

        <div class="space-y-6 pt-8">
          <a href="mailto:simbiatjinadu01@gmail.com" class="flex items-center gap-4 group">
            <div class="w-12 h-12 glass rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
              <Mail size={20} class="text-blue-400" />
            </div>
            <div>
              <p class="text-xs uppercase tracking-widest text-stardust/40">Email</p>
              <p class="text-lg">simbiatjinadu01@gmail.com</p>
            </div>
          </a>
          <div class="flex items-center gap-4 cursor-default">
            <div class="w-12 h-12 glass rounded-full flex items-center justify-center">
              <MapPin size={20} class="text-purple-400" />
            </div>
            <div>
              <p class="text-xs uppercase tracking-widest text-stardust/40">Location</p>
              <p class="text-lg">Earth, Space-Time</p>
            </div>
          </div>
        </div>

        <div class="flex gap-4 pt-12">
          <a 
            href={INFO.socials.github} 
            target="_blank" 
            rel="noopener noreferrer"
            class="w-14 h-14 glass rounded-2xl flex items-center justify-center hover:bg-white/10 hover:translate-y-[-5px] transition-all"
          >
            <Code size={24} />
          </a>
          <a 
            href={INFO.socials.linkedin || '#'} 
            class="w-14 h-14 glass rounded-2xl flex items-center justify-center hover:bg-white/10 hover:translate-y-[-5px] transition-all"
          >
            <Globe size={24} />
          </a>
        </div>
      </div>

      <form 
        onsubmit={handleSubmit}
        class="space-y-6 bg-white/5 p-8 rounded-3xl border border-white/5"
      >
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div class="space-y-2">
            <label for="name" class="text-xs uppercase tracking-widest text-stardust/60 ml-1">Name</label>
            <input 
              id="name"
              type="text" 
              required
              placeholder="John Doe"
              class="w-full px-6 py-4 rounded-2xl bg-white/5 border border-white/10 focus:border-blue-400/50 outline-none transition-all placeholder:text-stardust/20"
            />
          </div>
          <div class="space-y-2">
            <label for="email" class="text-xs uppercase tracking-widest text-stardust/60 ml-1">Email</label>
            <input 
              id="email"
              type="email" 
              required
              placeholder="john@example.com"
              class="w-full px-6 py-4 rounded-2xl bg-white/5 border border-white/10 focus:border-blue-400/50 outline-none transition-all placeholder:text-stardust/20"
            />
          </div>
        </div>
        <div class="space-y-2">
          <label for="message" class="text-xs uppercase tracking-widest text-stardust/60 ml-1">Message</label>
          <textarea 
            id="message"
            rows="5"
            required
            placeholder="Tell me about your vision..."
            class="w-full px-6 py-4 rounded-2xl bg-white/5 border border-white/10 focus:border-blue-400/50 outline-none transition-all resize-none placeholder:text-stardust/20"
          ></textarea>
        </div>
        <button
          disabled={formState !== 'idle'}
          class="w-full py-5 bg-white text-midnight rounded-2xl font-bold flex items-center justify-center gap-2 hover:scale-[1.02] active:scale-[0.98] transition-all disabled:opacity-50 disabled:scale-100"
        >
          {#if formState === 'idle'}
            Send Message <Send size={18} />
          {:else}
            {#if formState === 'sending'}
              <div class="w-6 h-6 border-2 border-midnight/20 border-t-midnight rounded-full animate-spin"></div>
            {:else}
              <span class="text-green-600">Message Received! ✨</span>
            {/if}
          {/if}
        </button>
      </form>
    </div>

    <!-- Decorative elements -->
    <div class="absolute top-[-50%] left-[-20%] w-[60%] aspect-square bg-blue-500/10 blur-[150px] rounded-full -z-10"></div>
    <div class="absolute bottom-[-50%] right-[-20%] w-[60%] aspect-square bg-purple-500/10 blur-[150px] rounded-full -z-10"></div>
  </div>
</section>
