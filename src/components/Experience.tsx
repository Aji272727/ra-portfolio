import { Calendar, Briefcase, CheckCircle2 } from 'lucide-react';

export default function Experience() {
  const experiences = [
    {
      role: "AI Automation Engineer & SaaS Architect",
      company: "Freelance",
      period: "2025 – Present",
      isPrimary: true,
      points: [
        "Built complex multi-stage n8n workflows that process structured document pipelines and data routing.",
        "Developed custom AI agents utilizing Google Gemini and OpenAI for lead scoring and data parsing.",
        "Integrated custom APIs, webhook dispatch channels, and secure JWT / OAuth2 auth flows.",
        "Engineered business operation suites that connect Airtable, GHL CRM, Google APIs, and Slack channels.",
        "Designed reusable micro-workflow templates for quick deployment across client sectors."
      ]
    },
    {
      role: "WordPress Manager & Elementor Layout Designer",
      company: "Supporting Role",
      period: "Supporting Skillset",
      isPrimary: false,
      points: [
        "Constructed custom landing pages and front-end interface layouts to support automation data capture.",
        "Maintained content management platforms, linking forms to backend automation hooks."
      ]
    }
  ];

  return (
    <section id="experience" className="py-24 relative z-10 border-t border-slate-900 bg-[#030712]/10">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="text-xs font-semibold text-accent tracking-widest font-space uppercase bg-accent/10 px-3.5 py-1.5 rounded-full border border-accent/20">
            TIMELINE
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-display tracking-tight mt-6">
            Professional Experience
          </h2>
          <p className="text-slate-400 mt-4 text-base md:text-lg">
            A history of deploying digital architectures, workflow systems, and supporting visual layouts.
          </p>
        </div>

        {/* Timeline Layout */}
        <div className="max-w-4xl mx-auto relative">
          {/* Vertical central divider */}
          <div className="absolute left-6 md:left-1/2 top-4 bottom-4 w-0.5 bg-slate-800 -translate-x-1/2" />

          <div className="space-y-12">
            {experiences.map((exp, idx) => {
              const isEven = idx % 2 === 0;
              return (
                <div 
                  key={idx}
                  className={`flex flex-col md:flex-row items-start relative ${
                    isEven ? 'md:flex-row-reverse' : ''
                  }`}
                >
                  {/* Left or Right Spacer */}
                  <div className="hidden md:block w-1/2 px-8" />

                  {/* Circle Indicator */}
                  <div className="absolute left-6 md:left-1/2 w-8 h-8 rounded-full bg-slate-950 border-2 border-slate-800 flex items-center justify-center -translate-x-1/2 z-10 shadow-lg">
                    <Briefcase size={12} className={exp.isPrimary ? "text-primary" : "text-slate-500"} />
                  </div>

                  {/* Card Container */}
                  <div className="w-full md:w-1/2 pl-12 md:pl-0 md:px-8">
                    <div 
                      className={`glass-panel border p-8 rounded-2xl transition-all duration-300 ${
                        exp.isPrimary 
                          ? 'border-primary/20 shadow-glow-primary/5 hover:border-slate-700/85' 
                          : 'border-slate-800/80 hover:border-slate-700/80'
                      }`}
                    >
                      <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
                        <span className="text-xs font-bold font-mono text-slate-500 flex items-center gap-1.5">
                          <Calendar size={12} />
                          {exp.period}
                        </span>
                        
                        {!exp.isPrimary && (
                          <span className="text-[9px] font-bold font-space uppercase text-slate-500 bg-slate-900 border border-slate-800/80 px-2.5 py-0.5 rounded">
                            Supporting Skill
                          </span>
                        )}
                      </div>

                      <h3 className="text-lg md:text-xl font-bold font-display text-white mb-1">
                        {exp.role}
                      </h3>
                      <h4 className="text-xs font-semibold text-slate-400 font-space mb-6">
                        {exp.company}
                      </h4>

                      <ul className="space-y-3">
                        {exp.points.map((pt, pIdx) => (
                          <li key={pIdx} className="flex items-start gap-2.5 text-slate-300 text-sm leading-relaxed">
                            <CheckCircle2 
                              size={14} 
                              className={`mt-0.5 flex-shrink-0 ${exp.isPrimary ? "text-primary" : "text-slate-500"}`} 
                            />
                            <span>{pt}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
