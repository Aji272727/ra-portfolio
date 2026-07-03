import { ArrowRight, Calendar } from 'lucide-react';

export default function FinalCTA() {
  return (
    <section className="py-24 relative z-10 overflow-hidden border-t border-slate-900 bg-[#030712]">
      {/* Decorative background glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-gradient-to-r from-primary/10 via-secondary/10 to-accent/10 blur-[120px] rounded-full pointer-events-none" />
      
      <div className="max-w-5xl mx-auto px-6 md:px-12 text-center relative z-10">
        <h2 className="text-3xl md:text-5xl font-extrabold font-display tracking-tight text-white mb-6">
          Ready to Automate Your Business?
        </h2>
        
        <p className="text-slate-400 text-base md:text-xl leading-relaxed max-w-2xl mx-auto mb-10">
          Let's build intelligent systems that save time, reduce manual work, and help your business scale automatically.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="https://calendar.app.google/s8aw7EnS9FAKXbrj6"
            target="_blank"
            rel="noopener noreferrer"
            data-cursor-text="BOOK_CALL"
            className="w-full sm:w-auto flex items-center justify-center gap-2 bg-gradient-to-r from-primary to-secondary text-[#030712] font-semibold text-sm px-8 py-4 rounded-full shadow-glow-primary hover:scale-[1.02] active:scale-95 transition-all duration-300 cursor-pointer"
          >
            <Calendar size={15} />
            Automation Strategy Call
          </a>
          <a
            href="#portfolio"
            className="w-full sm:w-auto flex items-center justify-center gap-2 bg-slate-900 hover:bg-slate-850 text-white border border-slate-800 hover:border-slate-700 font-semibold text-sm px-8 py-4 rounded-full transition-all duration-300"
          >
            View Portfolio
            <ArrowRight size={15} className="text-slate-500" />
          </a>
        </div>
      </div>
    </section>
  );
}
