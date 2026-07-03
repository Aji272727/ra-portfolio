import { 
  Mail, 
  Linkedin, 
  Github, 
  ExternalLink, 
  Calendar,
  Phone,
  MapPin,
  ArrowRight
} from 'lucide-react';

export default function Contact() {
  const socialLinks = [
    { name: 'Email', value: 'raabiltechva@gmail.com', href: 'mailto:raabiltechva@gmail.com', icon: <Mail size={16} /> },
    { name: 'Phone', value: '+63 909 2859 510', href: 'tel:+639092859510', icon: <Phone size={16} /> },
    { name: 'Location', value: 'Cebu City, Philippines', href: 'https://maps.google.com/?q=Cebu+City', icon: <MapPin size={16} /> },
    { name: 'LinkedIn', value: 'reale-abil-5924783a5', href: 'https://www.linkedin.com/in/reale-abil-5924783a5/', icon: <Linkedin size={16} /> },
    { name: 'GitHub', value: 'Aji272727', href: 'https://github.com/Aji272727', icon: <Github size={16} /> },
    { name: 'Upwork', value: 'Reale Abil', href: 'https://www.upwork.com/freelancers/~0126bcb44ce0f7bee9', icon: <ExternalLink size={16} /> },
  ];

  return (
    <section id="contact" className="py-24 relative z-10 border-t border-slate-900 bg-[#030712]/40 overflow-hidden">
      {/* Background glow highlights */}
      <div className="absolute top-1/2 right-0 w-[400px] h-[300px] bg-primary/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          
          {/* Left Side: Contact details, Title & Social Cards */}
          <div className="w-full lg:w-1/2 flex flex-col space-y-8">
            <div className="space-y-6">
              <span className="text-xs font-semibold text-primary tracking-widest font-space uppercase bg-primary/10 px-3.5 py-1.5 rounded-full border border-primary/20">
                GET IN TOUCH
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-display tracking-tight mt-6">
                Start Automating Your Workflows
              </h2>
              <p className="text-slate-400 text-sm md:text-base leading-relaxed">
                Have processes you want to automate? Connect with me directly on any of the channels below, or book a strategy session using the scheduling panel.
              </p>
            </div>

            {/* Social channels grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {socialLinks.map((link, i) => (
                <a
                  key={i}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 bg-slate-900/50 hover:bg-slate-900 border border-slate-855 hover:border-slate-700 px-5 py-4 rounded-xl transition-all duration-200"
                >
                  <span className="p-2 rounded-lg bg-slate-950 text-slate-400 border border-slate-900">
                    {link.icon}
                  </span>
                  <div>
                    <span className="text-[10px] text-slate-500 uppercase block font-space">{link.name}</span>
                    <span className="text-sm font-semibold text-white truncate max-w-[170px] block">{link.value}</span>
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Right Side: High-End CTA Panel "Ready to Automate Your Business?" */}
          <div className="w-full lg:w-1/2 self-stretch flex items-center justify-center">
            <div className="glass-panel border-slate-800/80 p-8 md:p-12 rounded-3xl w-full flex flex-col justify-between shadow-2xl relative overflow-hidden bg-[#0b0f19]/35 group min-h-[400px]">
              
              {/* Subtle background details inside card */}
              <div className="absolute inset-0 bg-dot-grid opacity-5 pointer-events-none" />
              <div className="absolute -top-20 -right-20 w-52 h-52 bg-gradient-to-br from-primary/10 to-secondary/10 blur-3xl rounded-full pointer-events-none" />

              {/* Status Header Bar */}
              <div className="flex items-center justify-between text-[9px] font-mono text-slate-500 uppercase tracking-widest select-none pb-4 border-b border-slate-900/60 mb-6">
                <div className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
                  <span>[SYS_ROUTING_DIRECT]</span>
                </div>
                <span className="text-[8px] bg-slate-950 px-2 py-0.5 rounded border border-slate-850">ACTIVE_ROUTE</span>
              </div>

              <div className="space-y-6 flex-grow flex flex-col justify-center">
                <h3 className="text-3xl md:text-4xl font-extrabold font-display text-white leading-[1.2] tracking-tight">
                  Ready to Automate <br className="hidden md:inline" />
                  Your Business?
                </h3>
                
                <p className="text-slate-400 text-sm md:text-base leading-relaxed max-w-md">
                  Let's build systems that save hours of manual operations, sync custom databases, and scale operations automatically.
                </p>
              </div>

              {/* Button group */}
              <div className="flex flex-col sm:flex-row gap-4 pt-8 border-t border-slate-900/50 mt-8">
                <a
                  href="https://calendar.app.google/s8aw7EnS9FAKXbrj6"
                  target="_blank"
                  rel="noopener noreferrer"
                  data-cursor-text="BOOK_CALL"
                  className="flex items-center justify-center gap-2 bg-gradient-to-r from-primary to-secondary text-[#030712] font-semibold text-sm py-3.5 px-5 rounded-full shadow-glow-primary hover:scale-[1.01] active:scale-95 transition-all duration-300 cursor-pointer flex-[1.6] whitespace-nowrap font-space tracking-wide text-center"
                >
                  <Calendar size={14} />
                  Automation Strategy Call
                </a>
                <a
                  href="#portfolio"
                  className="flex items-center justify-center gap-2 bg-slate-950 hover:bg-slate-900 text-white border border-slate-850 hover:border-slate-700 font-semibold text-sm py-3.5 px-5 rounded-full hover:scale-[1.01] active:scale-95 transition-all duration-300 flex-1 whitespace-nowrap font-space tracking-wide text-center"
                >
                  View Portfolio
                  <ArrowRight size={14} className="text-slate-500" />
                </a>
              </div>

              {/* Corner Cyberpunk brackets decorations */}
              <div className="absolute top-0 left-0 w-2.5 h-2.5 border-t-2 border-l-2 border-slate-800 pointer-events-none opacity-40 group-hover:opacity-100 transition-opacity" />
              <div className="absolute top-0 right-0 w-2.5 h-2.5 border-t-2 border-r-2 border-slate-800 pointer-events-none opacity-40 group-hover:opacity-100 transition-opacity" />
              <div className="absolute bottom-0 left-0 w-2.5 h-2.5 border-b-2 border-l-2 border-slate-800 pointer-events-none opacity-40 group-hover:opacity-100 transition-opacity" />
              <div className="absolute bottom-0 right-0 w-2.5 h-2.5 border-b-2 border-r-2 border-slate-800 pointer-events-none opacity-40 group-hover:opacity-100 transition-opacity" />
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
