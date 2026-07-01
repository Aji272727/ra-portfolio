import { CheckCircle2, Clock, Zap, Cpu } from 'lucide-react';

interface CaseStudyItem {
  id: number;
  title: string;
  client: string;
  challenge: string;
  solution: string;
  timeSaved: string;
  results: string[];
  tools: string[];
  architecture: string[];
  diagram: React.ReactNode;
}

export default function CaseStudies() {
  const cases: CaseStudyItem[] = [
    {
      id: 1,
      title: "Real Estate Operations: Lead Ingestion & Automated CRM Agent",
      client: "Vanguard Realty Group",
      challenge: "Vanguard agents were losing up to 30% of incoming leads because of a 4-hour delay in manual data entry from Facebook forms into their GoHighLevel CRM, leading to lost client bookings.",
      solution: "Engineered an instantaneous n8n ingestion system that captures leads via webhook, uses Google Gemini to enrich information and determine intent, assigns the deal inside the CRM, and dispatches a Slack trigger with a quick-call link to agents.",
      timeSaved: "24 Hours / Week",
      results: [
        "Reduced average response time from 4 hours to 45 seconds.",
        "Increased lead-to-booking conversion rate by 22% inside 30 days.",
        "Eliminated manual copy-pasting entirely for 12 sales agents."
      ],
      tools: ["n8n", "GoHighLevel CRM", "Google Gemini AI", "Slack Webhooks"],
      architecture: [
        "Facebook Leads Ad (Webhook)",
        "n8n AI Routing Agent",
        "GoHighLevel (CRM Sync)",
        "Slack Dispatch (Agent Notification)"
      ],
      diagram: (
        <div className="flex flex-col gap-4 bg-slate-950/60 p-6 rounded-2xl border border-slate-850 w-full font-mono text-xs">
          <div className="flex items-center gap-2 border-b border-slate-800 pb-3 mb-1">
            <span className="w-2 h-2 rounded-full bg-primary" />
            <span className="text-slate-400 font-space font-semibold">CRM_ENRICHMENT_FLOW</span>
          </div>
          <div className="space-y-4">
            {/* Step 1 */}
            <div className="flex items-center justify-between bg-slate-900 border border-slate-850 p-2.5 rounded-lg">
              <span className="text-slate-500">1. Webhook</span>
              <span className="text-white font-medium">Lead Inbound</span>
              <span className="text-[10px] text-primary bg-primary/10 border border-primary/20 px-1.5 py-0.5 rounded">Triggered</span>
            </div>
            {/* Arrow */}
            <div className="flex justify-center -my-2 text-slate-600">↓</div>
            {/* Step 2 */}
            <div className="flex items-center justify-between bg-slate-900 border border-slate-850 p-2.5 rounded-lg">
              <span className="text-slate-500">2. Claude/Gemini</span>
              <span className="text-white font-medium">Analyze Intent & Score</span>
              <span className="text-[10px] text-secondary bg-secondary/10 border border-secondary/20 px-1.5 py-0.5 rounded">AI Scored</span>
            </div>
            {/* Arrow */}
            <div className="flex justify-center -my-2 text-slate-600">↓</div>
            {/* Step 3 */}
            <div className="flex items-center justify-between bg-slate-900 border border-slate-850 p-2.5 rounded-lg">
              <span className="text-slate-500">3. GHL API</span>
              <span className="text-white font-medium">Update Pipeline Card</span>
              <span className="text-[10px] text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-1.5 py-0.5 rounded">Synced</span>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 2,
      title: "Voice AI System: Clinic Receptionist & Auto-Scheduler",
      client: "Davao Dental & Aesthetic Clinic",
      challenge: "The clinic missed dozens of after-hours bookings and emergency queries, and administrative staff spent half their workdays answering routine call inquiries.",
      solution: "Deployed an interactive voice bot using Vapi and OpenAI, configured with clinic-specific knowledge, connected to the clinic's calendar database using n8n and Supabase API middleware.",
      timeSaved: "35 Hours / Week",
      results: [
        "Handled 100% of incoming peak and after-hours calls without delays.",
        "Booked 85 monthly check-ups automatically, without human oversight.",
        "Reduced receptionist routine answering workload by 45%."
      ],
      tools: ["Vapi Voice AI", "OpenAI API", "n8n Core", "ElevenLabs Voice", "Supabase DB"],
      architecture: [
        "Caller Inbound Connection",
        "Vapi Real-time Speech API",
        "n8n API Middleware",
        "Google Calendar & Supabase Integration"
      ],
      diagram: (
        <div className="flex flex-col gap-4 bg-slate-950/60 p-6 rounded-2xl border border-slate-850 w-full font-mono text-xs">
          <div className="flex items-center gap-2 border-b border-slate-800 pb-3 mb-1">
            <span className="w-2 h-2 rounded-full bg-secondary" />
            <span className="text-slate-400 font-space font-semibold">VOICE_SCHEDULING_FLOW</span>
          </div>
          <div className="space-y-4">
            {/* Step 1 */}
            <div className="flex items-center justify-between bg-slate-900 border border-slate-850 p-2.5 rounded-lg">
              <span className="text-slate-500">1. Inbound</span>
              <span className="text-white font-medium">Customer Voice Call</span>
              <span className="text-[10px] text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-1.5 py-0.5 rounded">Connected</span>
            </div>
            {/* Arrow */}
            <div className="flex justify-center -my-2 text-slate-600">↓</div>
            {/* Step 2 */}
            <div className="flex items-center justify-between bg-slate-900 border border-slate-850 p-2.5 rounded-lg">
              <span className="text-slate-500">2. Vapi Speech</span>
              <span className="text-white font-medium">ElevenLabs Audio Out</span>
              <span className="text-[10px] text-blue-400 bg-blue-500/10 border border-blue-500/20 px-1.5 py-0.5 rounded">Streamed</span>
            </div>
            {/* Arrow */}
            <div className="flex justify-center -my-2 text-slate-600">↓</div>
            {/* Step 3 */}
            <div className="flex items-center justify-between bg-slate-900 border border-slate-850 p-2.5 rounded-lg">
              <span className="text-slate-500">3. Calendar DB</span>
              <span className="text-white font-medium">Verify Slot & Book</span>
              <span className="text-[10px] text-purple-400 bg-purple-500/10 border border-purple-500/20 px-1.5 py-0.5 rounded">Scheduled</span>
            </div>
          </div>
        </div>
      )
    }
  ];

  return (
    <section id="case-studies" className="py-24 relative z-10 border-t border-slate-900 bg-[#030712]/40">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="max-w-3xl mb-20">
          <span className="text-xs font-semibold text-accent tracking-widest font-space uppercase bg-accent/10 px-3.5 py-1.5 rounded-full border border-accent/20">
            BUSINESS CASES
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-display tracking-tight mt-6">
            Operational Transformations
          </h2>
          <p className="text-slate-400 mt-4 text-base md:text-lg">
            Read details about how custom-designed AI systems and integrations optimize daily processes to cut costs and scale throughput.
          </p>
        </div>

        {/* Case Studies Layout */}
        <div className="space-y-24">
          {cases.map((cs, idx) => {
            const isEven = idx % 2 === 0;
            return (
              <div 
                key={cs.id}
                className={`flex flex-col lg:flex-row gap-12 lg:gap-16 items-center ${
                  isEven ? '' : 'lg:flex-row-reverse'
                }`}
              >
                {/* Left: Text Details */}
                <div className="w-full lg:w-1/2 space-y-6">
                  <div className="flex items-center gap-3">
                    <span className="text-xs font-bold text-slate-500 font-mono">CLIENT: {cs.client}</span>
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold font-display text-white">
                    {cs.title}
                  </h3>

                  {/* Challenge vs Solution */}
                  <div className="space-y-4">
                    <div className="bg-[#0b0f19]/30 border border-slate-850 p-5 rounded-2xl">
                      <h4 className="text-xs font-bold font-space uppercase text-slate-500 flex items-center gap-1.5">
                        <Zap size={14} className="text-amber-500" /> The Challenge
                      </h4>
                      <p className="text-slate-400 text-sm mt-2 leading-relaxed">
                        {cs.challenge}
                      </p>
                    </div>

                    <div className="bg-[#0b0f19]/50 border border-slate-800 p-5 rounded-2xl">
                      <h4 className="text-xs font-bold font-space uppercase text-primary flex items-center gap-1.5">
                        <Cpu size={14} /> The Automation Solution
                      </h4>
                      <p className="text-slate-300 text-sm mt-2 leading-relaxed">
                        {cs.solution}
                      </p>
                    </div>
                  </div>

                  {/* Time Saved & Metrics */}
                  <div className="flex items-center gap-3 bg-slate-900/50 border border-slate-850/80 px-4 py-3 rounded-xl w-fit">
                    <Clock size={16} className="text-primary" />
                    <span className="text-xs text-slate-400">
                      Measured Impact: <strong className="text-white">{cs.timeSaved}</strong> Saved Weekly
                    </span>
                  </div>

                  {/* List of Outcomes */}
                  <div className="space-y-2.5">
                    <h4 className="text-xs font-bold font-space uppercase text-slate-500">Business Results</h4>
                    {cs.results.map((res, i) => (
                      <div key={i} className="flex items-start gap-2 text-sm text-slate-300">
                        <CheckCircle2 size={16} className="text-primary mt-0.5 flex-shrink-0" />
                        <span>{res}</span>
                      </div>
                    ))}
                  </div>

                  {/* Tools Badges */}
                  <div className="flex flex-wrap gap-2 pt-2">
                    {cs.tools.map((tool, i) => (
                      <span key={i} className="text-xs font-mono text-slate-400 bg-slate-950 border border-slate-900 px-3 py-1 rounded-lg">
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Right: Technical Architecture Visual */}
                <div className="w-full lg:w-1/2 flex flex-col items-center">
                  <div className="w-full max-w-md space-y-4">
                    <div className="glass-panel p-6 rounded-3xl relative hover:border-slate-700/60 transition-all duration-300 shadow-xl">
                      <span className="text-xs font-bold font-space text-slate-500 uppercase block mb-4">
                        Workflow Architecture
                      </span>
                      {cs.diagram}
                      
                      {/* Flow steps bullets */}
                      <div className="mt-5 space-y-2">
                        {cs.architecture.map((step, stepIdx) => (
                          <div key={stepIdx} className="flex items-center gap-2.5 text-xs text-slate-400">
                            <span className="w-4 h-4 rounded-full bg-slate-900 border border-slate-850 flex items-center justify-center font-mono text-[9px] text-slate-300">
                              {stepIdx + 1}
                            </span>
                            <span>{step}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
