import { portfolioData } from "@/data/portfolio";

export default function Hero() {
  return (
    <section className="py-20 flex flex-col items-center text-center px-6">
      <div className="w-32 h-32 bg-gradient-to-br from-cyan-400 to-purple-500 rounded-full mb-8 shadow-lg shadow-cyan-500/20 flex items-center justify-center text-4xl font-bold text-white">
        {portfolioData.name[0]}
      </div>
      <h1 className="text-5xl md:text-7xl font-extrabold mb-4 tracking-tight">
        Hi, I'm <span className="gradient-text">{portfolioData.name}</span>
      </h1>
      <p className="text-xl md:text-2xl text-slate-400 max-w-2xl mb-8">
        {portfolioData.role}
      </p>
      <p className="text-lg text-slate-300 max-w-xl leading-relaxed">
        {portfolioData.bio}
      </p>
      <div className="mt-10 flex gap-4">
        <a href="#projects" className="px-8 py-3 bg-cyan-500 hover:bg-cyan-600 transition-colors rounded-full font-semibold text-slate-950">
          View Projects
        </a>
        <a href="#contact" className="px-8 py-3 border border-slate-700 hover:border-cyan-500 transition-colors rounded-full font-semibold">
          Get in Touch
        </a>
      </div>
    </section>
  );
}
