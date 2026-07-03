import { useState } from 'react';
import { 
  PhoneCall, 
  Database, 
  Youtube, 
  Search, 
  MessageSquare,
  ArrowUpRight, 
  CheckCircle2, 
  X,
  Clock,
  Briefcase,
  ChevronLeft,
  ChevronRight,
  Maximize2
} from 'lucide-react';

interface Project {
  id: number;
  title: string;
  category: string;
  problem: string;
  solution: string;
  impact: string;
  timeSaved: string;
  technologies: string[];
  features: string[];
  icon: React.ReactNode;
  screenshots: string[];
}

export default function Portfolio() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [lightboxImage, setLightboxImage] = useState<string | null>(null);

  const projects: Project[] = [
    {
      id: 1,
      title: "AI Voice Receptionist & Appointment System",
      category: "Voice AI & Scheduling",
      problem: "Missed phone inquiries outside operational hours and manual front-desk scheduling backlogs resulted in lost bookings and administrative overhead.",
      solution: "Developed an automated AI voice receptionist using Vapi and ElevenLabs connected to an n8n core that checks real-time calendar availability and updates databases naturally.",
      impact: "Saves up to 35 hours weekly by automating receptionist bookings and 24/7 call vetting.",
      timeSaved: "35 Hours/Week",
      technologies: ["n8n", "Vapi", "OpenAI", "ElevenLabs", "Airtable", "Google Calendar"],
      features: [
        "Human-like real-time voice call handling and query answering",
        "Verification of caller information and slot availability",
        "Direct scheduling, reschedules, and cancellations",
        "Airtable database synchronization and client SMS/Email confirmation flow"
      ],
      icon: <PhoneCall className="w-5 h-5 text-emerald-400" />,
      screenshots: [
        "/AI Voice Receptionist & Appointment Sheduling System/ChatGPT Image Jun 29, 2026, 03_14_52 PM.png",
        "/AI Voice Receptionist & Appointment Sheduling System/Screenshot 2026-06-29 135844.png",
        "/AI Voice Receptionist & Appointment Sheduling System/Screenshot 2026-06-29 135915.png",
        "/AI Voice Receptionist & Appointment Sheduling System/Screenshot 2026-06-29 135932.png",
        "/AI Voice Receptionist & Appointment Sheduling System/Screenshot 2026-06-29 140007.png",
        "/AI Voice Receptionist & Appointment Sheduling System/3JQ2PiQpra.png"
      ]
    },
    {
      id: 2,
      title: "AI Job Scraper & Resume Optimizer",
      category: "Data Scraping & AI Content",
      problem: "Manual search across scattered job boards and the repetitive task of tailoring resumes to specific descriptions consumed hours every day.",
      solution: "Engineered an n8n pipeline that automatically scrapes job listings, parses key skills, uses OpenRouter AI to optimize resume content, and delivers ready-to-use application drafts to Slack.",
      impact: "Accelerated application velocity by 3x and automated daily tracking metrics.",
      timeSaved: "15 Hours/Week",
      technologies: ["n8n", "OpenRouter", "Google Docs API", "Slack API", "Webhooks"],
      features: [
        "Automated scraper for targeted job listing feeds",
        "AI parsing of job descriptions to extract required skills and keywords",
        "Dynamic resume content customization via OpenRouter",
        "Slack notification system delivering custom-tailored drafts and matching metrics"
      ],
      icon: <Search className="w-5 h-5 text-blue-400" />,
      screenshots: [
        "/AI Job Scraper & Resume Optimizer/ChatGPT Image Jun 29, 2026, 02_35_09 PM.png",
        "/AI Job Scraper & Resume Optimizer/Screenshot 2026-06-19 180931.png",
        "/AI Job Scraper & Resume Optimizer/Screenshot 2026-06-19 181252.png",
        "/AI Job Scraper & Resume Optimizer/Screenshot 2026-06-19 181411.png"
      ]
    },
    {
      id: 3,
      title: "AI Research Assistant & Newsletter System",
      category: "AI Agents & Newsletters",
      problem: "Aggregating news, weather forecasts, Wikipedia knowledge, and trends for daily reports took valuable manual compilation and formatting effort.",
      solution: "Built a scheduled n8n workflow leveraging a Google Gemini AI Agent with active web search tools to compile briefs, format them in markdown, and email briefs via Gmail.",
      impact: "Reduced newsletter compilation effort by 95%, saving over 22 hours per month.",
      timeSaved: "5 Hours/Week",
      technologies: ["n8n", "Google Gemini", "SerpAPI", "OpenWeatherMap", "Gmail API", "Google Sheets"],
      features: [
        "Scheduled morning triggers prompting Gemini AI Agents",
        "Live web searches via Wikipedia and Google Search APIs",
        "Automated HTML newsletter construction and content review",
        "Google Sheets archiving of daily records and generated updates"
      ],
      icon: <Database className="w-5 h-5 text-purple-400" />,
      screenshots: [
        "/AI-Powered Daily Research & Newsletter Automation/ChatGPT Image Jun 29, 2026, 02_38_27 PM.png",
        "/AI-Powered Daily Research & Newsletter Automation/Screenshot 2026-06-13 230953.png",
        "/AI-Powered Daily Research & Newsletter Automation/Screenshot 2026-06-19 182106.png",
        "/AI-Powered Daily Research & Newsletter Automation/Screenshot 2026-06-19 182201.png"
      ]
    },
    {
      id: 4,
      title: "AI YouTube Shorts Generation System",
      category: "Content Operations & Media",
      problem: "Scaling short-form media assets required full-time editors, scriptwriting, voice narrators, and manual rendering and scheduling.",
      solution: "Created an automated n8n media pipeline that drafts trending scripts with Gemini, converts audio voiceovers, creates media panels, and schedules uploads directly to YouTube.",
      impact: "Maintains a constant content publishing flow (3 videos daily) driving organic views.",
      timeSaved: "28 Hours/Week",
      technologies: ["n8n", "Google Gemini", "Vertex AI", "OAuth2", "YouTube Data API"],
      features: [
        "Script generation based on social trend indicators",
        "Automated voice synthesizing and visual asset collection",
        "Auto-generation of descriptions and SEO tags",
        "Direct scheduling and publishing via secure YouTube API integrations"
      ],
      icon: <Youtube className="w-5 h-5 text-pink-400" />,
      screenshots: [
        "/AI-Powered YouTube Shorts Generation & Publishing System/ChatGPT Image Jun 29, 2026, 02_42_33 PM.png",
        "/AI-Powered YouTube Shorts Generation & Publishing System/yt.png",
        "/AI-Powered YouTube Shorts Generation & Publishing System/yt2.png",
        "/AI-Powered YouTube Shorts Generation & Publishing System/n8n.png"
      ]
    },
    {
      id: 5,
      title: "Customer Support Chatbot Automation",
      category: "AI Chatbots & CRM Pipelines",
      problem: "Handling customer inquiries, product questions, and orders manually on Facebook Messenger delayed responses and led to missed leads after hours, while manual lead logging in CRM caused administrative bottlenecks.",
      solution: "Built a Zapier-powered automated answering chatbot using OpenAI (ChatGPT) that qualifies leads, handles product questions, collects order information, and logs contacts directly to HubSpot CRM and Google Sheets.",
      impact: "Drives instant support responses, auto-qualifies 24/7 lead inquiries, and syncs contacts to CRM instantly.",
      timeSaved: "25 Hours/Week",
      technologies: ["Zapier", "OpenAI (ChatGPT)", "Facebook Messenger", "Slack", "Google Sheets", "HubSpot"],
      features: [
        "AI Decision Engine routing conversation based on client intent",
        "Automated lead tracking & HubSpot CRM contact creation",
        "Slack alerts for human agent escalation when custom assistance is needed",
        "Google Sheets logging for direct conversational archiving"
      ],
      icon: <MessageSquare className="w-5 h-5 text-indigo-400" />,
      screenshots: [
        "/kawayan-chat-preview.jpg",
        "/kawayan-infographic.png",
        "/kawayan-zapier-flow.png"
      ]
    },
    {
      id: 6,
      title: "CRM & Pipeline Automation Management",
      category: "CRM & Workflow Pipelines",
      problem: "Manual follow-ups, slow lead mapping, and scattered customer communication channels caused admin delays in assigning survey engineers to property sites.",
      solution: "Built a fully automated Zapier-powered CRM and pipeline management system using HubSpot. Leads are captured from web forms, Facebook Ads, and phone calls, validated, enriched, added to the correct pipeline stage, and followed up automatically via Gmail and Slack.",
      impact: "Speeds up field deployment times by 5x, reduces manual work by 80%, and keeps customer records 100% synchronized in real time.",
      timeSaved: "20 Hours/Week",
      technologies: ["Zapier", "HubSpot CRM", "Google Sheets", "Gmail", "Slack", "Calendly"],
      features: [
        "Multi-source lead capture from web forms, Facebook Ads, and phone calls",
        "Automated lead validation, enrichment, and HubSpot CRM contact creation",
        "AI-powered lead qualification and scoring with OpenAI (ChatGPT)",
        "Automated follow-up emails, task creation, and Slack team notifications",
        "Real-time Google Sheets reporting and weekly pipeline performance reports"
      ],
      icon: <Briefcase className="w-5 h-5 text-amber-400" />,
      screenshots: [
        "/axis-zapier-flow.jpg",
        "/axis-crm-infographic.jpg",
        "/axis-banner.png"
      ]
    }
  ];

  const handleOpenProject = (proj: Project) => {
    setSelectedProject(proj);
    setCurrentSlide(0);
  };

  const handlePrevSlide = () => {
    if (!selectedProject) return;
    setCurrentSlide((prev) => 
      prev === 0 ? selectedProject.screenshots.length - 1 : prev - 1
    );
  };

  const handleNextSlide = () => {
    if (!selectedProject) return;
    setCurrentSlide((prev) => 
      prev === selectedProject.screenshots.length - 1 ? 0 : prev + 1
    );
  };

  return (
    <section id="portfolio" className="py-24 relative z-10">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="text-xs font-semibold text-secondary tracking-widest font-space uppercase bg-secondary/10 px-3.5 py-1.5 rounded-full border border-secondary/20">
            CASE PORTFOLIO
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-display tracking-tight mt-6">
            Featured Systems & Deployments
          </h2>
          <p className="text-slate-400 mt-4 text-base md:text-lg">
            A showcase of custom SaaS modules, intelligent AI systems, and business automation suites delivered for high-efficiency operations.
          </p>
        </div>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {projects.map((project) => (
            <div
              key={project.id}
              data-cursor-text="VIEW_FLOW_BLUEPRINT"
              onClick={() => handleOpenProject(project)}
              className="glass-panel rounded-2xl overflow-hidden hover:border-slate-700/80 transition-all duration-300 flex flex-col group cursor-pointer"
            >
              {/* Graphic Thumbnail Area */}
              <div className="h-64 w-full bg-slate-950/40 border-b border-slate-850/80 relative overflow-hidden flex items-center justify-center">
                <img 
                  src={encodeURI(project.screenshots[0])} 
                  alt={project.title} 
                  className="w-full h-full object-cover object-top opacity-50 group-hover:opacity-85 group-hover:scale-[1.02] transition-all duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0b0f19] via-[#0b0f19]/25 to-transparent" />
                <span className="absolute bottom-4 left-4 bg-slate-900/90 border border-slate-800 px-3 py-1 rounded-md text-[10px] font-mono text-primary font-bold shadow-lg">
                  {project.technologies[0]} Canvas / Pipeline
                </span>
                <span className="absolute top-4 right-4 bg-[#030712]/80 border border-slate-800/85 px-2.5 py-1 rounded text-[9px] font-mono text-slate-400 flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                  <Maximize2 size={10} /> Click to Open
                </span>
              </div>

              {/* Text Info */}
              <div className="p-8 flex flex-col flex-grow justify-between">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-bold text-slate-500 font-space tracking-wider uppercase">
                      {project.category}
                    </span>
                    <span className="p-1.5 rounded-lg bg-slate-900 border border-slate-800 text-slate-400 flex items-center justify-center">
                      {project.icon}
                    </span>
                  </div>

                  <h3 className="text-xl md:text-2xl font-bold font-display text-white mb-4 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>

                  <div className="space-y-4 mb-6">
                    <div>
                      <span className="text-xs font-bold font-space uppercase text-slate-500 block">Problem</span>
                      <p className="text-slate-400 text-sm mt-1 leading-relaxed line-clamp-3">
                        {project.problem}
                      </p>
                    </div>
                    <div>
                      <span className="text-xs font-bold font-space uppercase text-slate-500 block">Solution</span>
                      <p className="text-slate-300 text-sm mt-1 leading-relaxed line-clamp-3">
                        {project.solution}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Key Metrics & Button */}
                <div>
                  <div className="grid grid-cols-2 gap-4 border-t border-b border-slate-800/80 py-4 mb-6">
                    <div className="flex items-center gap-2">
                      <Clock size={16} className="text-primary animate-pulse" />
                      <div>
                        <span className="text-[10px] text-slate-500 uppercase block font-space">Time Saved</span>
                        <span className="text-sm font-bold text-slate-200">{project.timeSaved}</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <Briefcase size={16} className="text-secondary" />
                      <div>
                        <span className="text-[10px] text-slate-500 uppercase block font-space">Business Impact</span>
                        <span className="text-sm font-bold text-slate-200 truncate block max-w-[150px]">{project.impact}</span>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex flex-wrap gap-1.5 max-w-[70%]">
                      {project.technologies.slice(0, 3).map((tech, i) => (
                        <span key={i} className="text-[10px] font-mono text-slate-400 bg-slate-900 border border-slate-800 px-2.5 py-1 rounded-md">
                          {tech}
                        </span>
                      ))}
                      {project.technologies.length > 3 && (
                        <span className="text-[10px] font-mono text-slate-500 bg-slate-900 border border-slate-850 px-2 py-1 rounded-md">
                          +{project.technologies.length - 3} more
                        </span>
                      )}
                    </div>
                    <span
                      className="flex items-center gap-1.5 text-xs font-bold text-white group-hover:text-primary transition-colors font-space group/btn"
                    >
                      Case details
                      <ArrowUpRight size={14} className="group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Expanded Project Details Overlay Modal */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#030712]/90 backdrop-blur-md animate-in fade-in duration-300">
          <div className="glass-panel w-full max-w-3xl rounded-3xl overflow-hidden shadow-2xl relative max-h-[90vh] flex flex-col animate-in zoom-in-95 duration-200">
            {/* Modal Header */}
            <div className="p-6 md:p-8 border-b border-slate-800/80 flex items-center justify-between bg-slate-950/60">
              <div>
                <span className="text-xs font-bold text-primary font-space uppercase tracking-wider">
                  {selectedProject.category}
                </span>
                <h3 className="text-xl md:text-2xl font-bold font-display text-white mt-1">
                  {selectedProject.title}
                </h3>
              </div>
              <button
                onClick={() => setSelectedProject(null)}
                className="p-2 rounded-full bg-slate-900 border border-slate-800 text-slate-400 hover:text-white transition-colors hover:border-slate-700"
              >
                <X size={18} />
              </button>
            </div>

            {/* Modal Scroll Content */}
            <div className="p-6 md:p-8 overflow-y-auto space-y-6 flex-grow no-scrollbar">
              
              {/* Carousel Section */}
              <div className="relative bg-slate-950 p-2 rounded-2xl border border-slate-850 group/carousel">
                {/* Images slide */}
                <div 
                  data-cursor-text="PREVIEW_CANVAS"
                  onClick={() => setLightboxImage(selectedProject.screenshots[currentSlide])}
                  className="h-72 sm:h-96 w-full relative rounded-xl overflow-hidden flex items-center justify-center cursor-zoom-in"
                >
                  <img 
                    src={encodeURI(selectedProject.screenshots[currentSlide])} 
                    alt={`${selectedProject.title} workflow ${currentSlide + 1}`} 
                    className="w-full h-full object-contain"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 to-transparent pointer-events-none" />
                  
                  {/* Floating count indicator */}
                  <span className="absolute bottom-4 right-4 bg-slate-900/90 border border-slate-800/80 px-2.5 py-1 rounded text-xs font-mono text-slate-350">
                    {currentSlide + 1} / {selectedProject.screenshots.length}
                  </span>
                </div>

                {/* Left/Right Buttons */}
                {selectedProject.screenshots.length > 1 && (
                  <>
                    <button
                      onClick={handlePrevSlide}
                      className="absolute left-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-slate-900/80 hover:bg-slate-900 border border-slate-800 text-slate-400 hover:text-white transition-all shadow-xl hover:scale-105"
                      aria-label="Previous screenshot"
                    >
                      <ChevronLeft size={20} />
                    </button>
                    <button
                      onClick={handleNextSlide}
                      className="absolute right-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-slate-900/80 hover:bg-slate-900 border border-slate-800 text-slate-400 hover:text-white transition-all shadow-xl hover:scale-105"
                      aria-label="Next screenshot"
                    >
                      <ChevronRight size={20} />
                    </button>
                  </>
                )}
              </div>

              {/* Core Details */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="text-sm font-bold font-space uppercase text-slate-400">The Problem</h4>
                  <p className="text-slate-300 text-sm mt-2 leading-relaxed">
                    {selectedProject.problem}
                  </p>
                </div>
                <div>
                  <h4 className="text-sm font-bold font-space uppercase text-slate-400">The Solution</h4>
                  <p className="text-slate-300 text-sm mt-2 leading-relaxed">
                    {selectedProject.solution}
                  </p>
                </div>
              </div>

              {/* Business Stats Grid */}
              <div className="grid grid-cols-2 gap-4 bg-slate-900/40 border border-slate-850 p-4 rounded-xl">
                <div>
                  <span className="text-[10px] text-slate-500 uppercase font-space block">Operational Impact</span>
                  <span className="text-sm font-bold text-white mt-0.5 block">{selectedProject.impact}</span>
                </div>
                <div>
                  <span className="text-[10px] text-slate-500 uppercase font-space block">Time Saved Weekly</span>
                  <span className="text-sm font-bold text-primary mt-0.5 block">{selectedProject.timeSaved}</span>
                </div>
              </div>

              {/* Tech Stack Used */}
              <div>
                <h4 className="text-sm font-bold font-space uppercase text-slate-400 mb-3">Technologies Leveraged</h4>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.technologies.map((tech, i) => (
                    <span key={i} className="text-xs font-mono text-slate-300 bg-slate-900 border border-slate-800 px-3.5 py-1.5 rounded-lg">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Implemented Features */}
              <div>
                <h4 className="text-sm font-bold font-space uppercase text-slate-400 mb-3">Key Systems Engineered</h4>
                <ul className="space-y-2.5">
                  {selectedProject.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-slate-300 text-sm">
                      <CheckCircle2 size={16} className="text-primary mt-0.5 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Modal Footer CTA */}
            <div className="p-6 md:px-8 bg-slate-950/60 border-t border-slate-800/80 flex items-center justify-between">
              <span className="text-xs text-slate-400">Ready to build something similar?</span>
              <a
                href="#contact"
                onClick={() => setSelectedProject(null)}
                className="bg-gradient-to-r from-primary to-secondary text-[#030712] font-semibold text-xs px-5 py-2.5 rounded-full shadow-glow-primary hover:scale-[1.02] active:scale-95 transition-all animate-pulse"
              >
                Schedule Consultation
              </a>
            </div>
          </div>
        </div>
      )}

      {/* Fullscreen Lightbox Overlay */}
      {lightboxImage && (
        <div 
          onClick={() => setLightboxImage(null)}
          className="fixed inset-0 z-[100] bg-[#030712]/95 flex flex-col items-center justify-center p-4 cursor-zoom-out animate-in fade-in duration-200"
        >
          {/* Close Lightbox */}
          <button
            onClick={() => setLightboxImage(null)}
            className="absolute top-6 right-6 p-3 rounded-full bg-slate-900 border border-slate-850 text-slate-400 hover:text-white transition-colors"
          >
            <X size={20} />
          </button>
          
          <img 
            src={encodeURI(lightboxImage)} 
            alt="Fullscreen n8n workflow details" 
            className="max-w-full max-h-[85vh] object-contain rounded-xl border border-slate-800 shadow-2xl"
          />
          <p className="text-slate-500 font-mono text-[10px] mt-4">
            Click anywhere or press Esc to close lightbox view
          </p>
        </div>
      )}
    </section>
  );
}
