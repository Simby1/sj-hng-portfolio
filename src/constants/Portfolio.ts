import { Code, Globe, MessageSquare, Utensils, Users, Monitor } from 'lucide-svelte';

export const INFO = {
  name: "Simbiat Jinadu",
  title: "FullStack Web Developer",
  hook: "Crafting stardust into systems, one line of code at a time, until the vision finally blinks into existence",
  socials: {
    github: "https://github.com/Simby1",
    linkedin: "https://linkedin.com/in/simbiat-jinadu",
  }
};

export const PROJECTS = [
  {
    id: "krypt",
    title: "Krypt Messaging",
    description: "An end-to-end encrypted messaging application built with modern architecture. Focuses on privacy and seamless user experience.",
    tech: ["Next.js", "TypeScript", "Tailwind CSS"],
    link: "https://krypt-messaging.vercel.app/",
    github: "https://github.com/Simby1",
    icon: MessageSquare,
    color: "#6366f1"
  },
  {
    id: "naija-bites",
    title: "Naija Bites",
    description: "A modern Nigerian recipe discovery app. Search and explore authentic Nigerian dishes powered by a curated local dataset.",
    tech: ["React", "Vite", "Tailwind CSS v4"],
    link: "https://naija-bites-alpha.vercel.app/",
    github: "https://github.com/Simby1",
    icon: Utensils,
    color: "#10b981"
  },
  {
    id: "muslimah-tech",
    title: "MuslimahInTech",
    description: "Collaborated to build the official website for MuslimahInTech, an organization empowering women in technology.",
    tech: ["Next.js", "TypeScript", "Tailwind CSS"],
    link: "https://www.muslimahintech.org/",
    github: "https://github.com/Simby1",
    icon: Users,
    color: "#ec4899"
  },
  {
    id: "ares-os",
    title: "Ares-OS",
    description: "A virtual mission-critical biometric telemetry dashboard for Mars crew monitoring. Features live biometric streaming and system logs.",
    tech: ["Vue 3", "TypeScript", "Pinia"],
    link: "https://ares-os.vercel.app/",
    github: "https://github.com/Simby1",
    icon: Monitor,
    color: "#f59e0b"
  }
];

export const SKILLS = [
  { category: "Frontend", items: ["HTML5", "CSS3", "JavaScript", "React.js", "Vue.js", "Next.js", "Tailwind CSS"] },
  { category: "Backend", items: ["Node.js", "Python", "Express.js", "MongoDB", "SQL Fundamentals"] },
  { category: "Tools", items: ["Git", "GitHub", "Bash", "Linux", "NPM", "TypeScript", "Pinia"] }
];
