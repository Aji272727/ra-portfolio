import { ArrowRight, Calendar, Download, FileText } from 'lucide-react';

export default function Hero() {
  const floatingNodes = [
    { label: "n8n Expert", top: "12%", left: "15%", color: "text-emerald-400 border-emerald-500/20" },
    { label: "Zapier Developer", top: "75%", left: "10%", color: "text-orange-400 border-orange-500/20" },
    { label: "Google Gemini", top: "22%", right: "12%", color: "text-blue-400 border-blue-500/20" },
    { label: "CRM Sync", top: "80%", right: "15%", color: "text-purple-400 border-purple-500/20" },
    { label: "REST APIs", top: "48%", left: "80%", color: "text-pink-400 border-pink-500/20" },
  ];

  return (
    <section className="relative min-h-[92vh] flex items-center justify-center pt-32 pb-20 overflow-hidden">
      {/* Subtle automation connection lines */}
      <div className="absolute inset-0 pointer-events-none opacity-20 z-0">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <path d="M -100 200 C 300 200, 400 600, 1000 300 S 1200 800, 2000 600" fill="none" stroke="url(#gradient-line)" strokeWidth="1.5" className="animate-pulse" />
          <path d="M -100 400 C 500 100, 300 700, 1100 400 S 1400 900, 2000 800" fill="none" stroke="url(#gradient-line-2)" strokeWidth="1" />
          <defs>
            <linearGradient id="gradient-line" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#10B981" stopOpacity="0.8" />
              <stop offset="50%" stopColor="#3B82F6" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#8B5CF6" stopOpacity="0.8" />
            </linearGradient>
            <linearGradient id="gradient-line-2" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#8B5CF6" stopOpacity="0.5" />
              <stop offset="100%" stopColor="#3B82F6" stopOpacity="0.5" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* Floating Automation Node Badges */}
      <div className="absolute inset-0 pointer-events-none z-10 hidden lg:block">
        {floatingNodes.map((node, i) => (
          <div
            key={i}
            className={`absolute px-4 py-2 bg-slate-950/80 border rounded-full font-mono text-[10px] tracking-wide font-bold shadow-2xl animate-float-slow ${node.color}`}
            style={{
              top: node.top,
              left: node.left,
              right: node.right,
              animationDelay: `${i * 1.5}s`,
            }}
          >
            <span className="w-1.5 h-1.5 rounded-full bg-current inline-block mr-2 animate-pulse" />
            {node.label}
          </div>
        ))}
      </div>

      {/* Hero Content */}
      <div className="max-w-5xl mx-auto px-6 md:px-12 text-center relative z-20">
        {/* Availability Badge */}
        <div className="inline-flex items-center gap-2 bg-slate-900 border border-slate-800 px-3.5 py-1.5 rounded-full shadow-lg mb-8 animate-in fade-in slide-in-from-top-4 duration-500">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
          <span className="text-[10px] font-bold font-space text-slate-355 uppercase tracking-widest">
            Available for Q3 Projects
          </span>
        </div>

        {/* Main Headline */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold font-display tracking-tight text-white mb-8 leading-[1.1] animate-in fade-in slide-in-from-bottom-4 duration-700">
          AI Automation That Saves Businesses{" "}
          <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
            Time & Reduces Costs
          </span>
        </h1>

        {/* Subheadline */}
        <p className="text-slate-400 text-base sm:text-lg md:text-xl leading-relaxed max-w-3xl mx-auto mb-12 animate-in fade-in slide-in-from-bottom-6 duration-700">
          I build intelligent automation systems using AI Agents, n8n, Zapier, APIs, CRM integrations, and custom SaaS platforms that eliminate repetitive manual workflows.
        </p>

        {/* Call to Actions */}
        <div className="flex flex-wrap items-center justify-center gap-4 animate-in fade-in slide-in-from-bottom-8 duration-700">
          <a
            href="#portfolio"
            className="w-full sm:w-auto flex items-center justify-center gap-2 bg-gradient-to-r from-primary to-secondary text-[#030712] font-semibold text-sm px-8 py-4 rounded-full shadow-glow-primary hover:scale-[1.02] active:scale-95 transition-all duration-300"
          >
            View Portfolio
            <ArrowRight size={15} />
          </a>
          <a
            href="/Reale_Abil_CV.pdf"
            download="Reale_Abil_CV.pdf"
            data-cursor-text="DOWNLOAD_CV"
            className="w-full sm:w-auto flex items-center justify-center gap-2 bg-slate-900 hover:bg-slate-850 text-white border border-slate-800 hover:border-slate-700 font-semibold text-sm px-8 py-4 rounded-full transition-all duration-300 cursor-pointer"
          >
            <Download size={15} className="text-secondary" />
            Download CV
          </a>
          <a
            href="/Reale_Abil_ATS_CV.pdf"
            download="Reale_Abil_ATS_CV.pdf"
            data-cursor-text="DOWNLOAD_ATS"
            className="w-full sm:w-auto flex items-center justify-center gap-2 bg-slate-900 hover:bg-slate-850 text-white border border-slate-800 hover:border-slate-700 font-semibold text-sm px-8 py-4 rounded-full transition-all duration-300 cursor-pointer"
          >
            <FileText size={15} className="text-accent" />
            ATS-Friendly CV
          </a>
          <a
            href="https://calendar.app.google/s8aw7EnS9FAKXbrj6"
            target="_blank"
            rel="noopener noreferrer"
            data-cursor-text="BOOK_CALL"
            className="w-full sm:w-auto flex items-center justify-center gap-2 bg-slate-900 hover:bg-slate-850 text-white border border-slate-800 hover:border-slate-700 font-semibold text-sm px-8 py-4 rounded-full transition-all duration-300 cursor-pointer"
          >
            <Calendar size={15} className="text-primary" />
            Automation Strategy Call
          </a>
        </div>
      </div>

      {/* Subtle bottom scroll indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 text-slate-500 hover:text-white transition-colors cursor-pointer pointer-events-none hidden md:flex">
        <span className="text-[10px] font-space tracking-widest uppercase">Scroll</span>
        <div className="w-1.5 h-6 bg-slate-900 border border-slate-800 rounded-full flex justify-center">
          <span className="w-0.5 h-1.5 bg-primary rounded-full animate-bounce mt-1" />
        </div>
      </div>
    </section>
  );
}
