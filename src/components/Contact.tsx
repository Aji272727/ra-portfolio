import { useState } from 'react';
import { 
  Mail, 
  Linkedin, 
  Github, 
  ExternalLink, 
  Calendar,
  Send,
  Loader2,
  Terminal,
  Phone,
  MapPin
} from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', company: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'submitting' | 'simulating' | 'success'>('idle');
  const [logMessages, setLogMessages] = useState<string[]>([]);

  const addLog = (msg: string, delay: number) => {
    return new Promise<void>((resolve) => {
      setTimeout(() => {
        setLogMessages((prev) => [...prev, msg]);
        resolve();
      }, delay);
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email) return;

    setStatus('submitting');
    // Simulate typical API response time
    await new Promise((resolve) => setTimeout(resolve, 800));
    
    setStatus('simulating');
    setLogMessages([]);
    
    await addLog("⚡ INBOUND_WEBHOOK: Trigger received from portfolio_form", 200);
    await addLog(`📡 PAYLOAD: { name: "${formData.name}", company: "${formData.company || 'Unknown'}" }`, 400);
    await addLog("🤖 GPT_AGENT: Summarizing inquiry and classifying urgency...", 600);
    await addLog("📂 HUBSPOT_CRM: Creating lead record & scheduling tasks...", 500);
    await addLog("📨 MAILGUN_API: Dispatching automated confirmation to sender...", 500);
    await addLog("🔔 SLACK_NOTIFY: Rep alerted (Vibration triggered)", 400);
    await addLog("✨ SYSTEM_STATUS: Complete (Status 200 OK)", 300);

    setTimeout(() => {
      setStatus('success');
    }, 600);
  };

  const socialLinks = [
    { name: 'Email', value: 'raabiltechva@gmail.com', href: 'mailto:raabiltechva@gmail.com', icon: <Mail size={16} /> },
    { name: 'Phone', value: '+63 909 2859 510', href: 'tel:+639092859510', icon: <Phone size={16} /> },
    { name: 'Location', value: 'Cebu City, Philippines', href: 'https://maps.google.com/?q=Cebu+City', icon: <MapPin size={16} /> },
    { name: 'LinkedIn', value: 'reale-abil-5924783a5', href: 'https://www.linkedin.com/in/reale-abil-5924783a5/', icon: <Linkedin size={16} /> },
    { name: 'GitHub', value: 'Aji272727', href: 'https://github.com/Aji272727', icon: <Github size={16} /> },
    { name: 'Upwork', value: 'Reale Abil', href: 'https://www.upwork.com/freelancers/~0126bcb44ce0f7bee9', icon: <ExternalLink size={16} /> },
  ];

  return (
    <section id="contact" className="py-24 relative z-10 border-t border-slate-900 bg-[#030712]/40">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex flex-col lg:flex-row gap-16 items-stretch">
          {/* Left Side: Contact details */}
          <div className="w-full lg:w-1/2 flex flex-col justify-between space-y-8">
            <div className="space-y-6">
              <span className="text-xs font-semibold text-primary tracking-widest font-space uppercase bg-primary/10 px-3.5 py-1.5 rounded-full border border-primary/20">
                GET IN TOUCH
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-display tracking-tight mt-6">
                Let's Automate Your Business Processes
              </h2>
              <p className="text-slate-400 text-base md:text-lg leading-relaxed">
                Ready to build intelligent systems, scale lead qualification, and eliminate manual work? Let's discuss your workflows and design a custom tech strategy.
              </p>
            </div>

            {/* Social channels */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-6">
              {socialLinks.map((link, i) => (
                <a
                  key={i}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 bg-slate-900/50 hover:bg-slate-900 border border-slate-850 hover:border-slate-700 px-5 py-4 rounded-xl transition-all duration-200"
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

            {/* Google Calendar Book Meeting */}
            <div className="bg-[#0b0f19]/30 border border-slate-850 p-6 rounded-2xl flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div>
                <h4 className="text-sm font-bold text-white font-display">Schedule a discovery call</h4>
                <p className="text-xs text-slate-400 mt-1">Book a free 15-minute scoping call on Google Calendar.</p>
              </div>
              <a
                href="https://calendar.app.google/dLk41uZgw5eZjSfo9"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-slate-900 border border-slate-800 text-white hover:text-primary hover:border-slate-700 px-5 py-2.5 rounded-full text-xs font-semibold font-space transition-colors whitespace-nowrap"
              >
                <Calendar size={14} className="text-primary" />
                Open Scheduler
              </a>
            </div>
          </div>

          {/* Right Side: Interactive Form panel */}
          <div className="w-full lg:w-1/2">
            <div className="glass-panel border-slate-800/80 p-8 rounded-3xl h-full flex flex-col justify-between shadow-2xl relative overflow-hidden">
              
              {status !== 'simulating' && status !== 'success' ? (
                /* Contact Form view */
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-xs font-bold font-space text-slate-400 uppercase">Your Name</label>
                      <input 
                        type="text" 
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="John Doe"
                        className="w-full bg-slate-950/80 border border-slate-800/80 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-primary/80 transition-colors"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs font-bold font-space text-slate-400 uppercase">Work Email</label>
                      <input 
                        type="email" 
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="john@company.com"
                        className="w-full bg-slate-950/80 border border-slate-800/80 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-primary/80 transition-colors"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs font-bold font-space text-slate-400 uppercase">Company Name</label>
                    <input 
                      type="text" 
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      placeholder="Acme Corp"
                      className="w-full bg-slate-950/80 border border-slate-800/80 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-primary/80 transition-colors"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs font-bold font-space text-slate-400 uppercase">How can we automate your business?</label>
                    <textarea 
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Briefly describe the tasks or platforms you want to automate..."
                      className="w-full bg-slate-950/80 border border-slate-800/80 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-primary/80 transition-colors resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={status === 'submitting'}
                    className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-primary to-secondary text-[#030712] font-semibold py-3.5 rounded-full shadow-glow-primary hover:scale-[1.01] active:scale-95 transition-all disabled:opacity-50"
                  >
                    {status === 'submitting' ? (
                      <>
                        <Loader2 size={16} className="animate-spin" />
                        Connecting to API...
                      </>
                    ) : (
                      <>
                        <Send size={16} />
                        Submit Request
                      </>
                    )}
                  </button>
                </form>
              ) : status === 'simulating' ? (
                /* Interactive Webhook logs simulation */
                <div className="flex-grow flex flex-col justify-between h-full bg-slate-950 p-6 rounded-2xl border border-slate-850 font-mono text-[11px] text-slate-300">
                  <div className="space-y-3.5">
                    <div className="flex items-center gap-2 border-b border-slate-850 pb-2 mb-3">
                      <Terminal size={14} className="text-primary animate-pulse" />
                      <span className="text-slate-400 font-bold">PORTFOLIO_DISPATCHER_LOG</span>
                    </div>
                    {logMessages.map((log, idx) => (
                      <div key={idx} className="animate-in fade-in slide-in-from-left-2 duration-200">
                        {log}
                      </div>
                    ))}
                  </div>
                  <div className="mt-6 flex items-center gap-2 justify-center text-slate-500 animate-pulse text-[10px]">
                    <Loader2 size={12} className="animate-spin" />
                    Executing live pipeline mock...
                  </div>
                </div>
              ) : (
                /* Success view */
                <div className="flex-grow flex flex-col items-center justify-center text-center p-8 space-y-6">
                  <div className="w-16 h-16 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center shadow-glow-primary">
                    <Send className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold font-display text-white">Pipeline Triggered Successfully!</h3>
                    <p className="text-slate-400 text-sm mt-3 leading-relaxed max-w-sm mx-auto">
                      Thank you for submitting! The automated routing script has sent your message to Reale Abil. You should receive an email confirmation shortly.
                    </p>
                  </div>
                  <button
                    onClick={() => {
                      setStatus('idle');
                      setFormData({ name: '', email: '', company: '', message: '' });
                    }}
                    className="text-xs font-bold text-slate-400 hover:text-white border border-slate-800 hover:border-slate-700 px-6 py-2.5 rounded-full transition-colors font-space"
                  >
                    Send Another Message
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
