"use client"

import { portfolioData } from "@/data/portfolio";
import { ExternalLink, Terminal } from "lucide-react";
import { motion } from "framer-motion";

export default function ByteXLSection() {
  return (
    <motion.section 
      id="bytexl" 
      className="py-24 px-6 max-w-5xl mx-auto"
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <div className="relative group overflow-hidden rounded-3xl">
        {/* Decorative Background */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20 opacity-50 group-hover:opacity-100 transition-opacity duration-500"></div>
        <div className="absolute -top-24 -right-24 w-64 h-64 bg-primary/10 rounded-full blur-3xl group-hover:bg-primary/20 transition-all duration-500"></div>
        
        <div className="relative glass-card border-primary/20 p-10 md:p-16 flex flex-col md:flex-row items-center gap-12 text-center md:text-left">
          <motion.div 
            className="flex-1 space-y-6"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold tracking-widest uppercase">
              <Terminal className="w-3 h-3" />
              Coding Profile
            </div>
            
            <h2 className="text-4xl md:text-5xl font-black tracking-tight text-white leading-tight">
              Track My <span className="gradient-text">ByteXL</span> Progress
            </h2>
            
            <p className="text-slate-400 text-lg leading-relaxed max-w-xl">
              I actively solve problems and participate in skill-building tracks on ByteXL. 
              View my live learning path, completed challenges, and technical achievements on my official platform profile.
            </p>
            
            <div className="pt-4">
              <motion.a 
                href={portfolioData.socials.bytexl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="group/btn relative inline-flex items-center gap-3 px-8 py-4 bg-primary text-slate-950 font-bold rounded-2xl hover:bg-white transition-all duration-300 shadow-[0_0_20px_rgba(56,189,248,0.3)] hover:shadow-[0_0_40px_rgba(56,189,248,0.6)] hover:-translate-y-1 active:scale-95"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="absolute inset-0 rounded-2xl bg-white opacity-0 group-hover/btn:opacity-20 transition-opacity"></span>
                Visit My Profile
                <ExternalLink className="w-5 h-5 group-hover/btn:rotate-12 transition-transform" />
              </motion.a>
            </div>
          </motion.div>
          
          <motion.div 
            className="flex-shrink-0 w-full md:w-1/3"
            initial={{ opacity: 0, x: 30, rotate: 10 }}
            whileInView={{ opacity: 1, x: 0, rotate: 3 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="glass-card bg-slate-950/50 p-6 rounded-2xl border-white/5 hover:rotate-0 transition-transform duration-500 shadow-2xl">
              <div className="flex items-center gap-2 mb-4 border-b border-white/5 pb-4">
                <div className="w-3 h-3 rounded-full bg-red-500/50"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500/50"></div>
                <div className="w-3 h-3 rounded-full bg-green-500/50"></div>
                <div className="ml-auto text-[10px] text-slate-600 font-mono">bytexl.sh</div>
              </div>
              <div className="space-y-3">
                <div className="h-2 w-full bg-slate-800 rounded-full animate-pulse"></div>
                <div className="h-2 w-3/4 bg-slate-800 rounded-full animate-pulse delay-75"></div>
                <div className="h-2 w-5/6 bg-slate-800 rounded-full animate-pulse delay-150"></div>
                <div className="pt-4 flex items-center justify-between">
                  <div className="h-8 w-8 rounded-lg bg-primary/20"></div>
                  <div className="h-4 w-20 bg-primary/10 rounded-full"></div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}
