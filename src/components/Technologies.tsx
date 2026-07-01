import { 
  Bot, 
  Cpu, 
  Cloud, 
  Link2, 
  BarChart3, 
  Rocket 
} from 'lucide-react';

export default function Technologies() {
  const bentoCards = [
    {
      title: 'AI Agents',
      icon: <Bot className="w-5 h-5 text-emerald-400" />,
      glowColor: 'hover:shadow-glow-primary/5',
      cursorText: "DEPLOY_AI_AGENTS",
      colSpan: "md:col-span-3",
      items: ['AI Chatbots', 'Voice AI Agents', 'AI Customer Support', 'AI Sales Assistants', 'Internal Knowledge Assistants (RAG)'],
      desc: "Architecting autonomous decision-making agents equipped with memory buffers and API tools to perform complex tasks.",
      image: "/FB Agent/Screenshot 2026-06-19 164828.png"
    },
    {
      title: 'Workflow Automation',
      icon: <Cpu className="w-5 h-5 text-blue-400" />,
      glowColor: 'hover:shadow-glow-secondary/5',
      cursorText: "RUN_PIPELINES",
      colSpan: "md:col-span-3",
      items: ['n8n Workflows', 'Zapier Automations', 'CRM Automation', 'Lead Generation Automation', 'Email & Marketing Automation', 'Approval Workflows', 'Data Synchronization'],
      desc: "Connecting isolated software tools and eliminating manual administrative work by constructing robust, high-volume database pipelines.",
      image: "/AI-Powered Daily Research & Newsletter Automation/Screenshot 2026-06-19 182106.png"
    },
    {
      title: 'SaaS Development',
      icon: <Cloud className="w-5 h-5 text-purple-400" />,
      glowColor: 'hover:shadow-glow-accent/5',
      cursorText: "BUILD_SOFTWARE",
      colSpan: "md:col-span-4",
      items: ['Custom SaaS Platforms', 'Client Portals', 'Admin Dashboards', 'Internal Business Tools', 'Multi-tenant SaaS Applications', 'Subscription & Billing Systems', 'AI-powered SaaS Features'],
      desc: "Designing and coding custom, multi-tenant software platforms, administrative dashboards, subscription billing models, and proprietary business applications from scratch.",
      image: "/AI-Powered YouTube Shorts Generation & Publishing System/yt.png"
    },
    {
      title: 'Integrations',
      icon: <Link2 className="w-5 h-5 text-pink-400" />,
      glowColor: 'hover:shadow-glow-primary/5',
      cursorText: "LINK_APIS",
      colSpan: "md:col-span-2",
      items: ['REST APIs', 'Webhooks', 'Databases', 'Google Workspace', 'Microsoft 365', 'HubSpot', 'GoHighLevel', 'Stripe', 'Slack', 'Discord'],
      desc: "Bridging data channels between Google, Microsoft, Stripe, GHL, HubSpot, and custom REST endpoints safely.",
      image: "/AI Job Scraper & Resume Optimizer/Screenshot 2026-06-19 181411.png"
    },
    {
      title: 'Business Intelligence',
      icon: <BarChart3 className="w-5 h-5 text-amber-400" />,
      glowColor: 'hover:shadow-glow-secondary/5',
      cursorText: "KPI_METRICS",
      colSpan: "md:col-span-2",
      items: ['KPI Dashboards', 'Automated Reporting', 'Analytics Dashboards', 'Database Design', 'Data Pipelines'],
      desc: "Structuring database design, writing queries, and piping key records into dashboards.",
      image: "/AI-Powered Daily Research & Newsletter Automation/Screenshot 2026-06-19 182201.png"
    },
    {
      title: 'AI Implementation',
      icon: <Rocket className="w-5 h-5 text-indigo-400" />,
      glowColor: 'hover:shadow-glow-accent/5',
      cursorText: "ENGINEER_PROMPTS",
      colSpan: "md:col-span-4",
      items: ['Prompt Engineering', 'AI Workflow Design', 'LLM Integration', 'Retrieval-Augmented Generation (RAG)', 'AI Document Processing', 'AI Email Generation'],
      desc: "Integrating LLMs (Claude/Gemini) through advanced prompt structures, Retrieval-Augmented Generation (RAG) vector stores, and automated document parsers.",
      image: "/blog-agent.png"
    }
  ];

  return (
    <section id="technologies" className="py-24 relative z-10 border-t border-slate-900 bg-[#030712]/40">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-semibold text-primary tracking-widest font-space uppercase bg-primary/10 px-3.5 py-1.5 rounded-full border border-primary/20">
            CAPABILITIES
          </span>
          <h2 className="text-3xl md:text-4xl font-bold font-display tracking-tight mt-6">
            Core Expertise & Solutions Grid
          </h2>
          <p className="text-slate-400 mt-4 text-base md:text-lg">
            I deliver secure digital systems, enterprise integrations, and data pipelines optimized for performance.
          </p>
        </div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-6 gap-6 items-stretch">
          {bentoCards.map((card, idx) => (
            <div
              key={idx}
              data-cursor-text={card.cursorText}
              className={`glass-panel border-slate-800/80 rounded-3xl p-8 ${card.colSpan} ${card.glowColor} hover:border-slate-700/80 transition-all duration-300 flex flex-col justify-between group shadow-xl cursor-default`}
            >
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <span className="p-2.5 rounded-xl bg-slate-950 border border-slate-900 flex items-center justify-center">
                    {card.icon}
                  </span>
                  <h3 className="text-lg font-bold font-display text-white group-hover:text-primary transition-colors">
                    {card.title}
                  </h3>
                </div>
                <p className="text-slate-400 text-xs md:text-sm leading-relaxed mb-6">
                  {card.desc}
                </p>
                <div className="flex flex-wrap gap-2 mb-8">
                  {card.items.map((item, itemIdx) => (
                    <span 
                      key={itemIdx}
                      data-cursor-text={`DEPLOY_${item.toUpperCase().replace(/\s|\(|\)|&|-/g, '_')}`}
                      className="text-[10px] font-medium text-slate-400 bg-slate-950/80 border border-slate-900 px-3 py-1.5 rounded-lg cursor-pointer hover:text-white hover:border-slate-700 transition-colors"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
              
              {/* Visual Element: Real Screenshot Image */}
              <div className="h-40 w-full bg-slate-950/80 border border-slate-850 rounded-2xl overflow-hidden relative flex items-center justify-center">
                <img 
                  src={encodeURI(card.image)} 
                  alt={card.title} 
                  className="w-full h-full object-cover object-top opacity-50 group-hover:opacity-75 group-hover:scale-[1.01] transition-all duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />
                <span className="absolute bottom-3 left-3 bg-slate-900/90 border border-slate-850 px-2 py-0.5 rounded text-[8px] font-mono text-slate-400 uppercase">
                  Production Screenshot
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
