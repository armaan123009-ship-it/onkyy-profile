"use client"

import { portfolioData } from "@/data/portfolio";
import { motion } from "framer-motion";

export default function About() {
  const containerVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0 }
  };

  return (
    <motion.section 
      id="about" 
      className="py-24 px-6 max-w-5xl mx-auto"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={containerVariants}
    >
      <div className="flex flex-col items-center mb-16">
        <motion.h2 variants={itemVariants} className="text-4xl font-bold mb-4">Professional Profile</motion.h2>
        <motion.div variants={itemVariants} className="h-1 w-20 bg-primary rounded-full"></motion.div>
      </div>
      
      <div className="grid lg:grid-cols-2 gap-16 items-start">
        <motion.div className="space-y-8 text-slate-300 text-lg leading-relaxed" variants={itemVariants}>
          <p className="first-letter:text-5xl first-letter:font-bold first-letter:text-primary first-letter:mr-3 first-letter:float-left">
            {portfolioData.about}
          </p>
          
          <div className="pt-6">
            <h3 className="text-white font-bold text-xl mb-6 flex items-center gap-3">
              <span className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center text-primary text-sm">🎓</span>
              Education
            </h3>
            <div className="space-y-6">
              {portfolioData.education.map((edu, index) => (
                <motion.div 
                  key={index} 
                  variants={itemVariants}
                  className="relative pl-6 border-l-2 border-primary/20 hover:border-primary/50 transition-colors py-1"
                >
                  <div className="absolute w-3 h-3 bg-primary rounded-full -left-[7px] top-2 shadow-[0_0_8px_#38bdf8]"></div>
                  <h4 className="text-white font-bold leading-none mb-1">{edu.degree}</h4>
                  <p className="text-sm text-primary/80 font-medium mb-1">{edu.institution}</p>
                  <p className="text-xs text-slate-500 font-mono">{edu.period} | {edu.location}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        <div className="space-y-10">
          <motion.div variants={itemVariants} className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-primary to-purple-500 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
            <div className="relative glass-card p-8 space-y-6 rounded-2xl border-white/10">
              <h3 className="text-white font-bold text-xl flex items-center gap-3">
                <span className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center text-primary text-sm">🏆</span>
                Certifications
              </h3>
              <ul className="space-y-3">
                {portfolioData.certifications.map((cert, index) => (
                  <motion.li 
                    key={index} 
                    variants={itemVariants}
                    className="flex items-start gap-3 group/item"
                  >
                    <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary/50 group-hover/item:bg-primary transition-colors"></div>
                    <span className="text-sm text-slate-400 group-hover/item:text-slate-200 transition-colors leading-snug">{cert}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>

          <motion.div variants={itemVariants} className="glass-card p-8 rounded-2xl border-white/10">
            <h3 className="text-white font-bold text-xl mb-6 flex items-center gap-3">
              <span className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center text-primary text-sm">✨</span>
              Hobbies & Interests
            </h3>
            <div className="grid grid-cols-2 gap-4">
              {portfolioData.hobbies.map((hobby) => (
                <motion.div 
                  key={hobby} 
                  whileHover={{ scale: 1.05 }}
                  className="flex items-center gap-3 bg-secondary/30 p-3 rounded-xl border border-white/5 hover:border-primary/30 transition-colors"
                >
                  <div className="w-2 h-2 bg-primary rounded-full shadow-[0_0_8px_#38bdf8]"></div>
                  <span className="text-sm font-medium">{hobby}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}
