"use client"

import { portfolioData } from "@/data/portfolio";
import { motion } from "framer-motion";

export default function Contact() {
  const containerVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1 }
  };

  return (
    <motion.section 
      id="contact" 
      className="py-24 px-6 text-center max-w-4xl mx-auto"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={containerVariants}
    >
      <div className="flex flex-col items-center mb-16">
        <motion.h2 variants={itemVariants} className="text-4xl font-bold mb-4">Let's Connect</motion.h2>
        <motion.div variants={itemVariants} className="h-1 w-20 bg-primary rounded-full"></motion.div>
      </div>
      
      <motion.p variants={itemVariants} className="text-slate-400 mb-12 text-lg leading-relaxed">
        I'm always open to new opportunities, collaborations, or just a chat about AI/ML.
        Feel free to reach out through any of the platforms below!
      </motion.p>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
        {[
          { label: "GITHUB", detail: "@ankitsingh0311", href: portfolioData.socials.github },
          { label: "LINKEDIN", detail: "Ankit Kumar", href: portfolioData.socials.linkedin },
          { label: "EMAIL", detail: "ankitsingh341229", href: `mailto:${portfolioData.socials.email}` },
          { label: "PHONE", detail: portfolioData.socials.phone, href: null }
        ].map((social, index) => (
          <motion.a 
            key={index}
            href={social.href || undefined}
            target={social.href ? "_blank" : undefined}
            rel={social.href ? "noopener noreferrer" : undefined}
            variants={itemVariants}
            whileHover={{ y: -5, borderColor: "rgba(56, 189, 248, 0.5)" }}
            className={`glass-card p-6 rounded-2xl transition-all group ${!social.href ? 'cursor-default' : ''}`}
          >
            <div className="text-primary mb-3 text-sm font-mono tracking-tighter group-hover:scale-110 transition-transform font-bold underline">{social.label}</div>
            <div className="text-xs text-slate-500 font-medium truncate">{social.detail}</div>
          </motion.a>
        ))}
      </div>

      <motion.div variants={itemVariants} className="text-slate-500 text-sm font-mono">
        <p className="mb-2 italic">{portfolioData.socials.address}</p>
        <div className="mt-20 pt-8 border-t border-white/5">
          © {new Date().getFullYear()} {portfolioData.name}. Created for AI/ML Exploration.
        </div>
      </motion.div>
    </motion.section>
  );
}
