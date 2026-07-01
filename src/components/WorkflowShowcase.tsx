import { 
  FileText, 
  Brain, 
  Users, 
  Mail, 
  MessageSquare, 
  Database, 
  BarChart3
} from 'lucide-react';

export default function WorkflowShowcase() {
  const mobileNodes = [
    { title: "Lead Form", badge: "Inbound", desc: "User submits enquiry form.", icon: <FileText className="text-emerald-400" size={16} />, borderColor: "border-emerald-500/10", glow: "border-emerald-500/40", image: "/FB Agent/Screenshot 2026-06-19 180331.png" },
    { title: "AI Qualification", badge: "Gemini AI", desc: "AI scores intent and budget.", icon: <Brain className="text-primary" size={16} />, borderColor: "border-primary/15", glow: "border-primary/45", image: "/AI Voice Receptionist & Appointment Sheduling System/Screenshot 2026-06-29 135932.png" },
    { title: "CRM Sync", badge: "Sales Ops", desc: "Deal updated inside HubSpot/GHL.", icon: <Users className="text-blue-400" size={16} />, borderColor: "border-blue-500/10", glow: "border-blue-500/40", image: "/AI Voice Receptionist & Appointment Sheduling System/Screenshot 2026-06-29 135844.png" },
    { title: "Email Automation", badge: "Nurture", desc: "Tailored AI email response sent.", icon: <Mail className="text-purple-400" size={16} />, borderColor: "border-purple-500/10", glow: "border-purple-500/40", image: "/AI-Powered Daily Research & Newsletter Automation/Screenshot 2026-06-13 230953.png" },
    { title: "Slack Notification", badge: "Alerts", desc: "Sales rep alerted with lead details.", icon: <MessageSquare className="text-pink-400" size={16} />, borderColor: "border-pink-500/10", glow: "border-pink-500/40", image: "/AI Job Scraper & Resume Optimizer/Screenshot 2026-06-19 181411.png" },
    { title: "Database Log", badge: "Archive", desc: "Details logged inside PostgreSQL.", icon: <Database className="text-pink-400" size={16} />, borderColor: "border-pink-500/10", glow: "border-pink-500/40", image: "/AI-Powered Daily Research & Newsletter Automation/Screenshot 2026-06-19 182201.png" },
    { title: "Analytics", badge: "BI Dashboard", desc: "Updates live conversion rates.", icon: <BarChart3 className="text-blue-400" size={16} />, borderColor: "border-blue-500/10", glow: "border-blue-500/40", image: "/AI-Powered YouTube Shorts Generation & Publishing System/yt.png" }
  ];

  return (
    <section id="workflow" className="py-24 relative z-10 border-t border-slate-900 bg-[#030712]/10 overflow-hidden">
      {/* Grid Overlay */}
      <div className="absolute inset-0 bg-dot-grid opacity-20 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="text-xs font-semibold text-primary tracking-widest font-space uppercase bg-primary/10 px-3.5 py-1.5 rounded-full border border-primary/20">
            DOCK DIAGRAM
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-display tracking-tight mt-6">
            Anatomy of an Automation Pipeline
          </h2>
          <p className="text-slate-400 mt-4 text-base md:text-lg">
            See how data splits, processes, and triggers parallel automation paths in real-time across your operations stack.
          </p>
        </div>

        {/* Desktop Branched Workflow Canvas (lg and up) */}
        <div className="hidden lg:block relative min-h-[660px] w-full max-w-5xl mx-auto bg-slate-950/40 border border-slate-900 rounded-3xl p-12">
          
          {/* SVG Connection Paths with animated data pulses */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none z-0" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="n8n-grad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#10B981" />
                <stop offset="50%" stopColor="#3B82F6" />
                <stop offset="100%" stopColor="#8B5CF6" />
              </linearGradient>
            </defs>
            {/* Port 1 (Lead Form) -> Port 2 (AI Qualification) */}
            <path d="M 180 330 H 280" fill="none" stroke="#1e293b" strokeWidth="2" />
            <circle cx="180" cy="330" r="3" fill="#10B981" />
            <circle cx="280" cy="330" r="3" fill="#10B981" />
            <circle r="4" fill="#10B981" className="animate-pulse">
              <animateMotion dur="2.5s" repeatCount="indefinite" path="M 180 330 H 280" />
            </circle>

            {/* Split from AI Qualification to Col 3 Nodes */}
            {/* Branch A: Up to CRM */}
            <path d="M 440 330 C 500 330, 500 130, 540 130" fill="none" stroke="#1e293b" strokeWidth="2" />
            <circle cx="540" cy="130" r="3" fill="#3B82F6" />
            <circle r="3" fill="#3B82F6">
              <animateMotion dur="3.5s" repeatCount="indefinite" path="M 440 330 C 500 330, 500 130, 540 130" />
            </circle>

            {/* Branch B: Straight to Email */}
            <path d="M 440 330 H 540" fill="none" stroke="#1e293b" strokeWidth="2" />
            <circle cx="540" cy="330" r="3" fill="#8B5CF6" />
            <circle r="3" fill="#8B5CF6">
              <animateMotion dur="3s" repeatCount="indefinite" path="M 440 330 H 540" />
            </circle>

            {/* Branch C: Down to Slack */}
            <path d="M 440 330 C 500 330, 500 530, 540 530" fill="none" stroke="#1e293b" strokeWidth="2" />
            <circle cx="540" cy="530" r="3" fill="#EC4899" />
            <circle r="3" fill="#EC4899">
              <animateMotion dur="3.5s" repeatCount="indefinite" path="M 440 330 C 500 330, 500 530, 540 530" />
            </circle>

            {/* Col 3 -> Col 4 Nodes */}
            {/* CRM -> Analytics Dashboard */}
            <path d="M 700 130 H 800" fill="none" stroke="#1e293b" strokeWidth="2" />
            <circle cx="800" cy="130" r="3" fill="#3B82F6" />
            <circle r="3.5" fill="#3B82F6">
              <animateMotion dur="2.5s" repeatCount="indefinite" path="M 700 130 H 800" />
            </circle>

            {/* Slack -> Database Log */}
            <path d="M 700 530 H 800" fill="none" stroke="#1e293b" strokeWidth="2" />
            <circle cx="800" cy="530" r="3" fill="#EC4899" />
            <circle r="3.5" fill="#EC4899">
              <animateMotion dur="2.5s" repeatCount="indefinite" path="M 700 530 H 800" />
            </circle>
          </svg>

          {/* Grid Layout placing nodes dynamically */}
          <div className="absolute inset-0 p-12 flex items-center justify-between z-10 pointer-events-none">
            
            {/* Col 1: Trigger Node */}
            <div className="w-44 pointer-events-auto">
              <ShowcaseNode 
                title="Lead Form" 
                badge="Inbound" 
                desc="User submits enquiry form." 
                icon={<FileText className="text-emerald-400" size={16} />}
                borderColor="border-emerald-500/10"
                glow="group-hover:border-emerald-500/40"
                cursorText="TRIGGER_WEBHOOK"
                image="/FB Agent/Screenshot 2026-06-19 180331.png"
              />
            </div>

            {/* Col 2: Processor AI Node */}
            <div className="w-44 pointer-events-auto">
              <ShowcaseNode 
                title="AI Qualification" 
                badge="Gemini AI" 
                desc="AI scores intent and budget." 
                icon={<Brain className="text-primary" size={16} />}
                borderColor="border-primary/15"
                glow="group-hover:border-primary/45"
                cursorText="RUN_MODEL_INFERENCE"
                image="/AI Voice Receptionist & Appointment Sheduling System/Screenshot 2026-06-29 135932.png"
              />
            </div>

            {/* Col 3: Actions split */}
            <div className="flex flex-col justify-between h-full w-44 pointer-events-auto py-2">
              {/* Branch 1: CRM */}
              <ShowcaseNode 
                title="CRM Sync" 
                badge="Sales Ops" 
                desc="Deal updated inside HubSpot/GHL." 
                icon={<Users className="text-blue-400" size={16} />}
                borderColor="border-blue-500/10"
                glow="group-hover:border-blue-500/40"
                cursorText="UPDATE_PIPELINE"
                image="/AI Voice Receptionist & Appointment Sheduling System/Screenshot 2026-06-29 135844.png"
              />

              {/* Branch 2: Email */}
              <ShowcaseNode 
                title="Email Automation" 
                badge="Nurture" 
                desc="Tailored AI email response sent." 
                icon={<Mail className="text-purple-400" size={16} />}
                borderColor="border-purple-500/10"
                glow="group-hover:border-purple-500/40"
                cursorText="SEND_MAILGUN"
                image="/AI-Powered Daily Research & Newsletter Automation/Screenshot 2026-06-13 230953.png"
              />

              {/* Branch 3: Slack */}
              <ShowcaseNode 
                title="Slack Notification" 
                badge="Alerts" 
                desc="Sales rep alerted with lead details." 
                icon={<MessageSquare className="text-pink-400" size={16} />}
                borderColor="border-pink-500/10"
                glow="group-hover:border-pink-500/40"
                cursorText="DISPATCH_SLACK"
                image="/AI Job Scraper & Resume Optimizer/Screenshot 2026-06-19 181411.png"
              />
            </div>

            {/* Col 4: Final DB/Analytics */}
            <div className="flex flex-col justify-between h-full w-44 pointer-events-auto py-2">
              {/* Analytics dashboard connected to CRM */}
              <ShowcaseNode 
                title="Analytics" 
                badge="BI Dashboard" 
                desc="Updates live conversion rates." 
                icon={<BarChart3 className="text-blue-400" size={16} />}
                borderColor="border-blue-500/10"
                glow="group-hover:border-blue-500/40"
                cursorText="PARSE_METRICS"
                image="/AI-Powered YouTube Shorts Generation & Publishing System/yt.png"
              />
              
              {/* Placeholder spacer */}
              <div className="h-28 opacity-0 pointer-events-none" />

              {/* Database logs connected to Slack */}
              <ShowcaseNode 
                title="Database Log" 
                badge="Archive" 
                desc="Details logged inside PostgreSQL." 
                icon={<Database className="text-pink-400" size={16} />}
                borderColor="border-pink-500/10"
                glow="group-hover:border-pink-500/40"
                cursorText="WRITE_POSTGRES"
                image="/AI-Powered Daily Research & Newsletter Automation/Screenshot 2026-06-19 182201.png"
              />
            </div>

          </div>
        </div>

        {/* Mobile & Tablet Vertical Flow (stacks nicely with lines) */}
        <div className="lg:hidden relative space-y-12">
          {/* Vertical connecting line */}
          <div className="absolute left-6 top-8 bottom-8 w-0.5 bg-slate-800 pointer-events-none z-0" />
          
          {mobileNodes.map((node, idx) => (
            <div key={idx} className="relative pl-12">
              <div className="absolute left-6 -translate-x-1/2 top-8 w-4 h-4 rounded-full bg-slate-950 border-2 border-primary flex items-center justify-center z-10">
                <span className="w-1.5 h-1.5 rounded-full bg-primary animate-ping" />
              </div>
              <div className={`glass-panel border p-5 rounded-2xl ${node.borderColor} shadow-lg hover:border-slate-700/80 transition-all`}>
                <div className="flex items-center justify-between gap-3 mb-3">
                  <div className="flex items-center gap-2">
                    <span className="p-1 rounded-lg bg-slate-950 border border-slate-900 flex items-center justify-center">
                      {node.icon}
                    </span>
                    <h3 className="text-sm font-bold text-white font-display">
                      {node.title}
                    </h3>
                  </div>
                  <span className="text-[8px] font-bold font-mono uppercase bg-slate-900 border border-slate-850 px-2 py-0.5 rounded text-slate-500">
                    {node.badge}
                  </span>
                </div>
                <p className="text-slate-400 text-xs leading-relaxed mb-4">
                  {node.desc}
                </p>
                {/* Mobile screenshot rendering */}
                <div className="h-28 w-full bg-slate-950 border border-slate-905 rounded-xl overflow-hidden relative">
                  <img 
                    src={encodeURI(node.image)} 
                    alt={node.title} 
                    className="w-full h-full object-cover object-top opacity-60"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

// Inner Component representing n8n-style nodes with image support
function ShowcaseNode({ title, badge, desc, icon, borderColor, glow, cursorText, image }: {
  title: string;
  badge: string;
  desc: string;
  icon: React.ReactNode;
  borderColor: string;
  glow: string;
  cursorText: string;
  image: string;
}) {
  return (
    <div 
      data-cursor-text={cursorText}
      className={`bg-slate-950/95 border ${borderColor} rounded-2xl p-4.5 shadow-xl hover:shadow-2xl transition-all duration-300 group flex flex-col justify-between h-[210px] select-none ${glow}`}
    >
      <div>
        <div className="flex items-center justify-between gap-2.5 pb-2 border-b border-slate-900 mb-2">
          <div className="flex items-center gap-2">
            <span className="p-1 rounded-lg bg-slate-900 border border-slate-850 flex items-center justify-center">
              {icon}
            </span>
            <h4 className="text-[11px] font-bold text-white font-display truncate max-w-[80px]">
              {title}
            </h4>
          </div>
          <span className="text-[7px] font-bold font-space uppercase px-1.5 py-0.5 rounded bg-slate-900 border border-slate-850 text-slate-500 shrink-0">
            {badge}
          </span>
        </div>
        <p className="text-slate-400 text-[10px] leading-relaxed line-clamp-2 mb-3">
          {desc}
        </p>
      </div>
      
      {/* Node Mini-Screenshot Visual */}
      <div className="h-20 w-full bg-slate-900 border border-slate-850 rounded-xl overflow-hidden relative">
        <img 
          src={encodeURI(image)} 
          alt={title} 
          className="w-full h-full object-cover object-top opacity-50 group-hover:opacity-75 group-hover:scale-[1.01] transition-all duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent" />
      </div>
    </div>
  );
}
