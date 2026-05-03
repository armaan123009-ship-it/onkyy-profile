"use client"

import { portfolioData } from "@/data/portfolio";
import { motion } from "framer-motion";

export default function Skills() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const skillVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <motion.section 
      className="py-24 bg-slate-900/30 border-y border-white/5 px-6"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={containerVariants}
    >
      <div className="max-w-5xl mx-auto">
        <div className="flex flex-col items-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Technical Stack</h2>
          <div className="h-1 w-20 bg-primary rounded-full"></div>
        </div>
        
        <div className="grid sm:grid-cols-2 gap-x-16 gap-y-10">
          {portfolioData.skills.map((skill) => (
            <motion.div key={skill.name} className="group" variants={skillVariants}>
              <div className="flex justify-between items-center mb-3">
                <span className="font-bold tracking-wide group-hover:text-primary transition-colors">{skill.name}</span>
                <span className="text-xs font-mono text-slate-500 bg-secondary px-2 py-1 rounded">{skill.level}%</span>
              </div>
              <div className="relative w-full h-3 bg-slate-800/50 rounded-full overflow-hidden border border-white/5">
                <motion.div 
                  className="absolute inset-y-0 left-0 bg-gradient-to-r from-primary to-blue-600 shadow-[0_0_10px_rgba(56,189,248,0.4)]"
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  transition={{ duration: 1.5, ease: "easeOut" }}
                ></motion.div>
                <div className="absolute inset-0 bg-[linear-gradient(45deg,rgba(255,255,255,0.05)_25%,transparent_25%,transparent_50%,rgba(255,255,255,0.05)_50%,rgba(255,255,255,0.05)_75%,transparent_75%,transparent)] bg-[size:1rem_1rem]"></div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div 
          className="mt-20 flex flex-wrap justify-center gap-4"
          variants={containerVariants}
        >
          {["React", "Next.js", "TypeScript", "Tailwind", "Node.js", "PostgreSQL", "Docker", "AWS"].map((tech) => (
            <motion.span 
              key={tech} 
              variants={skillVariants}
              whileHover={{ scale: 1.1, backgroundColor: "rgba(56, 189, 248, 0.1)", borderColor: "rgba(56, 189, 248, 0.3)" }}
              className="px-4 py-2 bg-secondary/50 border border-white/5 rounded-lg text-xs font-mono text-slate-400 transition-all cursor-default"
            >
              {tech}
            </motion.span>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
}
