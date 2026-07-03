import { CheckCircle } from 'lucide-react';

export default function About() {
  const points = [
    {
      title: "Who I Help",
      desc: "Startups, agencies, and enterprise operators looking to eliminate manual task queues, connect disparate SaaS apps, and scale lead conversions."
    },
    {
      title: "My Specialization",
      desc: "Architecting n8n/Zapier pipelines, custom AI agents (Gemini/Claude), Vapi voice assistants, and custom software database dashboards."
    },
    {
      title: "My Mission",
      desc: "To deliver reliable, production-grade automated systems that save hundreds of human hours, reduce costs, and operate seamlessly."
    }
  ];

  return (
    <section id="about" className="py-24 relative z-10 border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          {/* Left: Professional Portrait */}
          <div className="w-full lg:w-2/5 flex justify-center">
            <div className="relative group">
              {/* Outer decorative gradient border */}
              <div className="absolute -inset-1 rounded-3xl bg-gradient-to-tr from-primary via-secondary to-accent opacity-30 blur-sm group-hover:opacity-60 transition duration-500" />
              {/* Image Frame */}
              <div className="relative bg-slate-950 p-2.5 rounded-3xl border border-slate-800/80 shadow-2xl">
                <img 
                  src="/portrait.jpg" 
                  alt="RA - AI Automation Specialist" 
                  className="w-72 h-72 md:w-80 md:h-80 object-cover rounded-2xl grayscale hover:grayscale-0 transition-all duration-500"
                />
                
                {/* Floating active indicator badge */}
                <div className="absolute -bottom-3 -right-3 bg-slate-900 border border-slate-800 px-3 py-1.5 rounded-full flex items-center gap-1.5 shadow-lg">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                  <span className="text-[10px] font-bold font-space text-slate-200 uppercase">Available for Q3</span>
                </div>
              </div>
            </div>
          </div>
 
          {/* Right: Copy details */}
          <div className="w-full lg:w-3/5 space-y-8">
            <div>
              <span className="text-xs font-semibold text-secondary tracking-widest font-space uppercase bg-secondary/10 px-3.5 py-1.5 rounded-full border border-secondary/20">
                ABOUT ME
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-display tracking-tight mt-6">
                RA
              </h2>
              <p className="text-slate-400 mt-2 font-space text-sm md:text-base">
                AI Automation Engineer & Custom SaaS Developer | Cebu City, Philippines
              </p>
            </div>

            <p className="text-slate-300 text-base md:text-lg leading-relaxed">
              I specialize in designing and engineering high-impact digital solutions that streamline corporate workflows. By combining custom-trained AI intelligence, automated pipeline tools, and API middleware, I build digital assets that run your operations automatically.
            </p>

            {/* List of features */}
            <div className="space-y-6 border-t border-slate-900 pt-8">
              {points.map((point, idx) => (
                <div key={idx} className="flex gap-4">
                  <span className="p-2 rounded-xl bg-slate-900 border border-slate-850 h-fit flex items-center justify-center text-primary mt-1">
                    <CheckCircle className="w-4 h-4" />
                  </span>
                  <div>
                    <h3 className="text-base font-bold text-white mb-1 font-display">
                      {point.title}
                    </h3>
                    <p className="text-slate-400 text-sm leading-relaxed">
                      {point.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
