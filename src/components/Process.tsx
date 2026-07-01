import { 
  Search, 
  Map, 
  Terminal, 
  ShieldCheck, 
  Rocket, 
  HeartHandshake,
  CheckCircle2
} from 'lucide-react';

export default function Process() {
  const steps = [
    {
      id: "node-1",
      step: "01",
      nodeType: "Trigger Node",
      title: "Discovery Audit",
      description: "We audit your manual bottlenecks, data structure, and task queues to formulate an automation roadmap.",
      icon: <Search className="w-4 h-4 text-emerald-400" />,
      status: "Triggered",
      statusColor: "text-emerald-400 bg-emerald-500/10 border-emerald-500/20"
    },
    {
      id: "node-2",
      step: "02",
      nodeType: "Action Node",
      title: "Workflow Design",
      description: "We map out high-level technical blueprints, matching trigger webhooks, data fields, and model prompts.",
      icon: <Map className="w-4 h-4 text-blue-400" />,
      status: "Configured",
      statusColor: "text-blue-400 bg-blue-500/10 border-blue-500/20"
    },
    {
      id: "node-3",
      step: "03",
      nodeType: "Action Node",
      title: "Development",
      description: "We build custom n8n pipelines, code middleware, configure API endpoints, and program AI agents.",
      icon: <Terminal className="w-4 h-4 text-purple-400" />,
      status: "Active",
      statusColor: "text-purple-400 bg-purple-500/10 border-purple-500/20"
    },
    {
      id: "node-4",
      step: "04",
      nodeType: "Verify Node",
      title: "Testing & QA",
      description: "We verify payload fail-safes, authenticate API retries, and check security credential configurations.",
      icon: <ShieldCheck className="w-4 h-4 text-pink-400" />,
      status: "Pending",
      statusColor: "text-pink-400 bg-pink-500/10 border-pink-500/20"
    },
    {
      id: "node-5",
      step: "05",
      nodeType: "Release Node",
      title: "Deployment",
      description: "We push pipelines live, sync live customer data keys via OAuth2, and conduct training.",
      icon: <Rocket className="w-4 h-4 text-indigo-400" />,
      status: "Waiting",
      statusColor: "text-indigo-400 bg-indigo-500/10 border-indigo-500/20"
    },
    {
      id: "node-6",
      step: "06",
      nodeType: "Support Node",
      title: "Ongoing Support",
      description: "We monitor execution logs, optimize node paths, and upgrade tools to handle API changes.",
      icon: <HeartHandshake className="w-4 h-4 text-amber-400" />,
      status: "Waiting",
      statusColor: "text-amber-400 bg-amber-500/10 border-amber-500/20"
    }
  ];

  return (
    <section id="process" className="py-24 relative z-10 border-t border-slate-900 bg-[#030712]/60 overflow-hidden">
      {/* n8n Dotted Grid Canvas Background */}
      <div className="absolute inset-0 bg-dot-grid opacity-30 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="text-xs font-semibold text-secondary tracking-widest font-space uppercase bg-secondary/10 px-3.5 py-1.5 rounded-full border border-secondary/20">
            DELIVERY PIPELINE
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-display tracking-tight mt-6">
            Execution Canvas
          </h2>
          <p className="text-slate-400 mt-4 text-base md:text-lg">
            Our structured six-step workflow shown as modular n8n execution nodes connected along a production pipeline.
          </p>
        </div>

        {/* Desktop n8n Serpentine Flow Layout (lg and up) */}
        <div className="hidden lg:block relative min-h-[500px]">
          {/* Animated SVG connecting lines */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none z-0" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="n8n-grad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#10B981" />
                <stop offset="50%" stopColor="#3B82F6" />
                <stop offset="100%" stopColor="#8B5CF6" />
              </linearGradient>
            </defs>
            {/* Discovery (Col 0, Row 0) -> Design (Col 1, Row 0) */}
            <path d="M 330 110 L 460 110" fill="none" stroke="url(#n8n-grad)" strokeWidth="2" strokeDasharray="6 4" />
            {/* Design (Col 1, Row 0) -> Dev (Col 2, Row 0) */}
            <path d="M 770 110 L 900 110" fill="none" stroke="url(#n8n-grad)" strokeWidth="2" strokeDasharray="6 4" />
            {/* Dev (Col 2, Row 0) -> Testing (Col 2, Row 1) */}
            <path d="M 1060 160 C 1060 250, 1060 250, 1060 360" fill="none" stroke="url(#n8n-grad)" strokeWidth="2" strokeDasharray="6 4" />
            {/* Testing (Col 2, Row 1) -> Deployment (Col 1, Row 1) */}
            <path d="M 900 410 L 770 410" fill="none" stroke="url(#n8n-grad)" strokeWidth="2" strokeDasharray="6 4" />
            {/* Deployment (Col 1, Row 1) -> Support (Col 0, Row 1) */}
            <path d="M 460 410 L 330 410" fill="none" stroke="url(#n8n-grad)" strokeWidth="2" strokeDasharray="6 4" />
          </svg>

          {/* Serpentine grid positioning: 3 cols, 2 rows */}
          <div className="grid grid-cols-3 gap-y-36 gap-x-12 relative z-10">
            {/* Col 1, Row 1: Discovery */}
            <ProcessNode node={steps[0]} />
            {/* Col 2, Row 1: Design */}
            <ProcessNode node={steps[1]} />
            {/* Col 3, Row 1: Development */}
            <ProcessNode node={steps[2]} />
            
            {/* Col 3, Row 2: Testing (serpentine flows right-to-left) */}
            <ProcessNode node={steps[3]} />
            {/* Col 2, Row 2: Deployment */}
            <ProcessNode node={steps[4]} />
            {/* Col 1, Row 2: Ongoing Support */}
            <ProcessNode node={steps[5]} />
          </div>
        </div>

        {/* Mobile & Tablet Vertical Flow (stacks nicely with lines) */}
        <div className="lg:hidden relative space-y-12">
          {/* Vertical connecting line */}
          <div className="absolute left-6 top-8 bottom-8 w-0.5 bg-slate-800 pointer-events-none z-0" />
          {steps.map((node) => (
            <div key={node.id} className="relative pl-12">
              {/* Connector dot for mobile */}
              <div className="absolute left-6 -translate-x-1/2 top-8 w-4 h-4 rounded-full bg-slate-950 border-2 border-primary flex items-center justify-center z-10">
                <span className="w-1.5 h-1.5 rounded-full bg-primary animate-ping" />
              </div>
              <ProcessNode node={node} isMobile />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

// Inner Component representing n8n node layout
function ProcessNode({ node, isMobile = false }: { node: any; isMobile?: boolean }) {
  return (
    <div 
      data-cursor-text={`EXECUTE_${node.title.toUpperCase().replace(/\s/g, '_')}`}
      className="bg-[#0b0f19] border border-slate-800 rounded-xl relative shadow-xl hover:border-primary/50 transition-all duration-300 w-full max-w-sm group"
    >
      {/* Node Input Port (Left side) */}
      {!isMobile && (
        <div className="absolute left-0 top-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 rounded-full border border-slate-700 bg-slate-950 flex items-center justify-center z-10 group-hover:border-primary transition-colors">
          <div className="w-1 h-1 rounded-full bg-slate-600 group-hover:bg-primary" />
        </div>
      )}

      {/* Node Output Port (Right side) */}
      {!isMobile && (
        <div className="absolute right-0 top-1/2 translate-x-1/2 -translate-y-1/2 w-2 h-2 rounded-full border border-slate-700 bg-slate-950 flex items-center justify-center z-10 group-hover:border-primary transition-colors">
          <div className="w-1 h-1 rounded-full bg-slate-600 group-hover:bg-primary" />
        </div>
      )}

      {/* Node Header */}
      <div className="px-5 py-3.5 border-b border-slate-900 bg-slate-950/80 rounded-t-xl flex items-center justify-between gap-4">
        <div className="flex items-center gap-2.5">
          <span className="p-1.5 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center">
            {node.icon}
          </span>
          <div>
            <h4 className="text-xs font-semibold text-slate-500 uppercase tracking-wider font-space leading-none">
              {node.nodeType}
            </h4>
            <h3 className="text-sm font-bold text-white mt-1 leading-none font-display">
              {node.title}
            </h3>
          </div>
        </div>
        <span className={`text-[9px] font-mono font-bold px-2 py-0.5 rounded border ${node.statusColor}`}>
          {node.status}
        </span>
      </div>

      {/* Node Content */}
      <div className="p-5">
        <p className="text-slate-400 text-xs md:text-sm leading-relaxed">
          {node.description}
        </p>
      </div>

      {/* Node Footer Execution Details */}
      <div className="px-5 py-2.5 border-t border-slate-900/60 bg-slate-950/20 rounded-b-xl flex items-center justify-between text-[9px] font-mono text-slate-500">
        <span>ID: {node.step}</span>
        <span className="flex items-center gap-1">
          <CheckCircle2 size={10} className="text-primary" /> Success (200 OK)
        </span>
      </div>
    </div>
  );
}
