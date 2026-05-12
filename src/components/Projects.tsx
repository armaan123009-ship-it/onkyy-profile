"use client"

import { portfolioData } from "@/data/portfolio";
import { motion } from "framer-motion";

export default function Projects() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 40, scale: 0.95 },
    visible: { 
      opacity: 1, 
      y: 0, 
      scale: 1,
      transition: { duration: 0.6, ease: "easeOut" as const }
    }
  };

  return (
    <motion.section 
      id="projects" 
      className="py-24 px-6 max-w-7xl mx-auto"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      variants={containerVariants}
    >
      <div className="flex flex-col items-center mb-16">
        <motion.h2 variants={cardVariants} className="text-4xl font-bold mb-4">Featured Work</motion.h2>
        <motion.div variants={cardVariants} className="h-1 w-20 bg-primary rounded-full"></motion.div>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
        {portfolioData.projects.map((project) => (
          <motion.div 
            key={project.title} 
            variants={cardVariants}
            className="group relative flex flex-col h-full"
          >
            <div className="absolute -inset-0.5 bg-gradient-to-b from-primary/20 to-transparent rounded-2xl blur opacity-0 group-hover:opacity-100 transition duration-500"></div>
            <div className="relative glass-card p-6 flex flex-col h-full rounded-2xl transition-all duration-300 group-hover:bg-slate-900/80 group-hover:-translate-y-2">
              <div className="relative h-48 w-full bg-slate-800/50 rounded-xl mb-6 overflow-hidden flex items-center justify-center border border-white/5">
                <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <span className="text-slate-600 font-mono text-sm tracking-widest uppercase">Project Preview</span>
              </div>
              
              <h3 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors">{project.title}</h3>
              <p className="text-slate-400 mb-8 flex-grow leading-relaxed">{project.description}</p>
              
              <div className="flex flex-wrap gap-2 mb-8">
                {project.tags.map((tag) => (
                  <span key={tag} className="text-[10px] uppercase tracking-wider px-3 py-1 bg-primary/5 text-primary border border-primary/20 rounded-full font-bold">
                    {tag}
                  </span>
                ))}
              </div>
              
              <motion.a 
                href={project.link} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="inline-flex items-center gap-2 text-sm font-bold text-white group/btn"
                whileHover={{ x: 5 }}
              >
                Explore Case Study 
                <span className="group-hover/btn:translate-x-1 transition-transform">→</span>
              </motion.a>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}
