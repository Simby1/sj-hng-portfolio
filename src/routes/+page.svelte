<script lang="ts">
  import Hero from "../components/Hero.svelte";
  import Projects from "../components/Projects.svelte";
  import Skills from "../components/Skills.svelte";
  import Contact from "../components/Contact.svelte";
  import Navbar from "../components/Navbar.svelte";
  import StarField from "../components/StarField.svelte";
  import { onMount } from "svelte";
  import gsap from "gsap";
  import { ScrollTrigger } from "gsap/ScrollTrigger";

  let scrollY = $state(0);
  let innerHeight = $state(0);
  let scrollHeight = $state(0);


  onMount(() => {
    gsap.registerPlugin(ScrollTrigger);

    // Cinematic scroll reveal for the background stardust
    gsap.to(".stardust-glow", {
      scrollTrigger: {
        trigger: "body",
        start: "top top",
        end: "bottom bottom",
        scrub: 1.5,
      },
      y: -200,
      opacity: 0.5,
      ease: "none",
    });

    const updateScroll = () => {
      scrollY = window.scrollY;
      scrollHeight = document.documentElement.scrollHeight;
      innerHeight = window.innerHeight;
    };

    window.addEventListener("scroll", updateScroll);
    updateScroll();

    return () => window.removeEventListener("scroll", updateScroll);
  });

  let progress = $derived((scrollY / (scrollHeight - innerHeight)) * 100);
</script>

<svelte:window bind:scrollY bind:innerHeight />

<main class="relative min-h-screen">
  <!-- Progress Bar -->
  <div
    class="fixed top-0 left-0 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 z-[100] transition-transform duration-100 ease-out"
    style="width: {progress}%;"
  ></div>

  <StarField />
  <Navbar />

  <div class="relative z-10">
    <Hero />

    <div class="space-y-32 pb-32">
      <Projects />
      <Skills />
      <Contact />
    </div>

    <footer
      class="py-20 px-4 border-t border-white/5 text-center text-stardust/40 text-sm font-mono tracking-widest uppercase"
    >
      <div class="mb-4">Crafted with stardust & code</div>
      <div>© 2026 Simbiat Jinadu — All rights reserved</div>
    </footer>
  </div>

  <!-- Persistent cinematic glows -->
  <div
    class="stardust-glow fixed top-[20%] left-[-10%] w-[50%] aspect-square bg-blue-600/5 blur-[150px] rounded-full -z-0 pointer-events-none"
  ></div>
  <div
    class="stardust-glow fixed bottom-[10%] right-[-10%] w-[40%] aspect-square bg-purple-600/5 blur-[150px] rounded-full -z-0 pointer-events-none"
  ></div>
</main>
