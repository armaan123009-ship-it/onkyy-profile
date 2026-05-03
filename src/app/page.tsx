import { HeroBlock } from "@/components/ui/hero-block-shadcnui";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";
import ByteXLSection from "@/components/ByteXL";
import * as motion from "framer-motion/client";

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Navigation */}
      <motion.nav 
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="fixed top-0 w-full z-50 glass-card rounded-none border-t-0 border-x-0 bg-slate-950/50"
      >
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <span className="text-xl font-bold gradient-text font-mono">Ankit.dev</span>
          <div className="hidden md:flex gap-8 text-sm font-medium text-slate-300">
            <a href="#about" className="hover:text-cyan-400 transition-colors">About</a>
            <a href="#bytexl" className="hover:text-cyan-400 transition-colors">ByteXL</a>
            <a href="#projects" className="hover:text-cyan-400 transition-colors">Projects</a>
            <a href="#contact" className="hover:text-cyan-400 transition-colors">Contact</a>
          </div>
        </div>
      </motion.nav>

      {/* Sections */}
      <div>
        <HeroBlock />
        <About />
        <ByteXLSection />
        <Skills />
        <Projects />
        <Contact />
      </div>
    </main>
  );
}
