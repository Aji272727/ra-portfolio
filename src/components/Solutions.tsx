import { 
  UserCheck, 
  Workflow, 
  Volume2, 
  Boxes, 
  TrendingUp, 
  Code,
  Terminal
} from 'lucide-react';

export default function Solutions() {
  const solutions = [
    {
      title: "Lead Generation Automation",
      description: "Set up automated lead capture, qualification, and routing pipelines to respond to prospects in under 60 seconds.",
      outcome: "Increases lead response rates by 80% and filters unqualified leads automatically.",
      icon: <UserCheck className="w-4 h-4 text-emerald-400" />,
      cursorText: "INGEST_LEADS",
      terminalTag: "[SYS_ROUTING]",
      status: "RUNNING",
      statusColor: "text-emerald-400 bg-emerald-500/10 border-emerald-500/20",
      params: "INBOUND_WEBHOOK → Gemini_GPT4 → CRM_Sync"
    },
    {
      title: "CRM Automation",
      description: "Sync custom data pipelines across platforms like HubSpot, GoHighLevel, and custom databases with zero lag.",
      outcome: "Eliminates manual entry errors and keeps your sales pipeline updated in real-time.",
      icon: <Workflow className="w-4 h-4 text-blue-400" />,
      cursorText: "SYNC_CRM",
      terminalTag: "[SYS_PIPELINES]",
      status: "ACTIVE",
      statusColor: "text-blue-400 bg-blue-500/10 border-blue-500/20",
      params: "WEBHOOK_LISTENERS ⇄ OAUTH2_TOKEN_REFRESH"
    },
    {
      title: "Conversational AI & Voice Agents",
      description: "Deploy custom voice assistants (Vapi, ElevenLabs) and text chatbots equipped with RAG vector knowledge bases to resolve queries and manage calendar bookings.",
      outcome: "Resolves 75%+ of customer queries and calls 24/7, routing qualified leads directly to sales calendars.",
      icon: <Volume2 className="w-4 h-4 text-pink-400" />,
      cursorText: "CONNECT_VOIP",
      terminalTag: "[SYS_VOIP_DAEMON]",
      status: "LISTENING",
      statusColor: "text-pink-400 bg-pink-500/10 border-pink-500/20",
      params: "CALL/CHAT_STREAM ⇄ Pinecone_RAG_Inference ⇄ CRM_Calendars"
    },
    {
      title: "Business Process Automation",
      description: "Design automated document pipelines, content operations, and back-office administrative tasks using n8n and Zapier.",
      outcome: "Saves up to 20 hours per employee weekly by replacing manual copying and formatting.",
      icon: <Boxes className="w-4 h-4 text-amber-400" />,
      cursorText: "RUN_WORKFLOW",
      terminalTag: "[SYS_N8N_ENGINE]",
      status: "IDLE",
      statusColor: "text-amber-400 bg-amber-500/10 border-amber-500/20",
      params: "CRON_TRIGGER ⇄ Document_Parser ⇄ Drive_Archive"
    },
    {
      title: "Reporting & Dashboard Automation",
      description: "Automatically compile operational data into analytics dashboards and trigger executive reports to Slack or email.",
      outcome: "Provides instant visibility into daily metrics without manual spreadsheet building.",
      icon: <TrendingUp className="w-4 h-4 text-indigo-400" />,
      cursorText: "PARSE_METRICS",
      terminalTag: "[SYS_METRICS]",
      status: "COMPLETE",
      statusColor: "text-indigo-400 bg-indigo-500/10 border-indigo-500/20",
      params: "DB_QUERIES → JSON_Compiler → Slack_Webhooks"
    },
    {
      title: "Custom API & SaaS Integrations",
      description: "Bridge proprietary systems and custom SaaS applications through custom OAuth2 credentials, webhooks, and REST middleware.",
      outcome: "Integrates legacy platforms and scales your custom software capability.",
      icon: <Code className="w-4 h-4 text-cyan-400" />,
      cursorText: "CONNECT_API",
      terminalTag: "[SYS_REST_GATEWAY]",
      status: "SECURED",
      statusColor: "text-cyan-400 bg-cyan-500/10 border-cyan-500/20",
      params: "CLIENT_API ⇄ Token_Auth ⇄ Endpoint_Listener"
    },
  ];

  return (
    <section id="solutions" className="py-24 relative z-10 border-t border-slate-900 bg-[#030712]/10 overflow-hidden">
      {/* Background matrix mesh grid details */}
      <div className="absolute inset-0 bg-dot-grid opacity-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="text-xs font-semibold text-primary tracking-widest font-space uppercase bg-primary/10 px-3.5 py-1.5 rounded-full border border-primary/20 flex items-center gap-1.5 w-fit mx-auto">
            <Terminal size={12} className="text-primary animate-pulse" />
            OPERATIONS_ENGINE
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-display tracking-tight mt-6">
            Intelligent Automation Services
          </h2>
          <p className="text-slate-400 mt-4 text-base md:text-lg">
            I build custom, outcome-focused integration nodes that eliminate manual workflows across your technical stack.
          </p>
        </div>

        {/* Solutions Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
          {solutions.map((sol, i) => (
            <div
              key={i}
              data-cursor-text={sol.cursorText}
              className="glass-panel border-slate-855 rounded-2xl overflow-hidden hover:border-slate-700/80 transition-all duration-300 flex flex-col justify-between group cursor-pointer relative shadow-xl"
            >
              {/* Terminal Title Bar */}
              <div className="bg-slate-950/90 border-b border-slate-900 px-5 py-3.5 flex items-center justify-between text-[10px] font-mono text-slate-500 select-none">
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-slate-800" />
                  <span>{sol.terminalTag}</span>
                </div>
                <span className={`px-2 py-0.5 rounded border text-[9px] font-bold ${sol.statusColor} font-space`}>
                  {sol.status}
                </span>
              </div>

              {/* Main Card Content */}
              <div className="p-6 md:p-8 space-y-5">
                <div className="flex items-center gap-3">
                  <span className="p-2 rounded-lg bg-slate-950 border border-slate-900 flex items-center justify-center group-hover:scale-105 transition-all">
                    {sol.icon}
                  </span>
                  <h3 className="text-lg font-bold font-display text-white group-hover:text-primary transition-colors">
                    {sol.title}
                  </h3>
                </div>

                <p className="text-slate-400 text-xs md:text-sm leading-relaxed">
                  {sol.description}
                </p>

                {/* Pipeline Flow Parameters Visual */}
                <div className="bg-slate-950 border border-slate-900 p-3 rounded-xl font-mono text-[9px] text-slate-500 truncate w-full select-all">
                  <span className="text-[8px] text-slate-600 block mb-1 uppercase font-space">Pipeline Variables:</span>
                  {sol.params}
                </div>
              </div>

              {/* Outcome block */}
              <div className="px-6 pb-6 md:px-8 md:pb-8 pt-4 border-t border-slate-900/60 mt-auto bg-slate-950/20">
                <span className="text-[10px] font-bold text-slate-500 font-space tracking-wide uppercase block">
                  Expected Outcome:
                </span>
                <p className="text-slate-350 text-xs mt-1 leading-relaxed">
                  {sol.outcome}
                </p>
              </div>

              {/* Corner Cyberpunk brackets decorations */}
              <div className="absolute top-0 left-0 w-2 h-2 border-t-2 border-l-2 border-slate-800 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="absolute top-0 right-0 w-2 h-2 border-t-2 border-r-2 border-slate-800 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="absolute bottom-0 left-0 w-2 h-2 border-b-2 border-l-2 border-slate-800 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="absolute bottom-0 right-0 w-2 h-2 border-b-2 border-r-2 border-slate-800 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
