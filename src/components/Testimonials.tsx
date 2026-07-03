import { useState } from 'react';
import { Quote, ChevronLeft, ChevronRight } from 'lucide-react';

interface Testimonial {
  name: string;
  role: string;
  company: string;
  text: string;
  avatar: string;
}

export default function Testimonials() {
  const testimonials: Testimonial[] = [
    {
      name: "Ledevina A.",
      role: "Owner",
      company: "Kawayan Cocoa",
      text: "RA built a fully automated Facebook Messenger solution that manages customer inquiries, qualifies leads, and accepts orders without manual intervention. It has significantly improved our response time while allowing us to serve customers 24/7.",
      avatar: "/kawayan-cocoa-logo.jpg"
    },
    {
      name: "C. Daarol",
      role: "Owner",
      company: "Salt and Snow Bistro",
      text: "RA built our Online Automated Ordering System and it completely changed the way we handle bistro orders. Customers can order easily, and it sends the details straight to the staff. No more ordering mistakes.",
      avatar: "/salt-snow-logo.jpg"
    },
    {
      name: "Victor G.",
      role: "CEO",
      company: "Pure Air Repair and Maintenance",
      text: "The automation RA built for our HVAC business completely changed how we operate. Leads come in from multiple channels and are instantly qualified, scored, and dispatched to the right technician — without anyone manually lifting a finger. Our response times dropped dramatically, follow-ups run on their own, and the whole sales-to-service pipeline just flows. It's like having a full operations team working 24/7.",
      avatar: "/pureair-logo.jpg"
    },
    {
      name: "Ric",
      role: "COO",
      company: "Axis Land Solutions",
      text: "Working with RA transformed how we handle incoming inquiries. Every lead is automatically captured, organized, and assigned to the appropriate field engineer almost instantly. The system has improved operational efficiency and eliminated a large portion of our manual back-office tasks.",
      avatar: "/axis-logo.jpg"
    },
    {
      name: "Rivin F.",
      role: "Owner",
      company: "Tim Construction and Equipments",
      text: "We wanted to simplify our internal processes without changing how our team worked, and RA delivered exactly that. Our automation now handles repetitive tasks in the background, allowing us to focus on serving our customers instead of managing spreadsheets and manual updates. The entire implementation was smooth, professional, and exceeded our expectations.",
      avatar: "RF"
    }
  ];

  const [current, setCurrent] = useState(0);

  const prev = () => setCurrent((c) => (c === 0 ? testimonials.length - 1 : c - 1));
  const next = () => setCurrent((c) => (c === testimonials.length - 1 ? 0 : c + 1));

  const t = testimonials[current];

  return (
    <section id="testimonials" className="py-24 relative z-10 border-t border-slate-900 bg-[#030712]/10">
      <div className="max-w-4xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-semibold text-primary tracking-widest font-space uppercase bg-primary/10 px-3.5 py-1.5 rounded-full border border-primary/20">
            TESTIMONIALS
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-display tracking-tight mt-6">
            Client Success Reviews
          </h2>
          <p className="text-slate-400 mt-4 text-base md:text-lg">
            See how operations managers and business owners scale their output after integrating our custom systems.
          </p>
        </div>

        {/* Carousel */}
        <div className="relative flex items-center gap-4">

          {/* Left Arrow */}
          <button
            onClick={prev}
            className="flex-shrink-0 w-11 h-11 rounded-full border border-slate-700 bg-slate-900/60 hover:bg-primary/10 hover:border-primary/50 text-slate-400 hover:text-primary transition-all duration-200 flex items-center justify-center shadow-lg"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          {/* Card */}
          <div
            key={current}
            className="flex-1 glass-panel rounded-2xl p-8 md:p-10 border border-slate-800/80 relative group overflow-hidden"
            style={{ animation: 'fadeIn 0.35s ease' }}
          >
            {/* Quote decoration */}
            <Quote className="absolute top-6 right-8 text-slate-800/40 w-12 h-12 group-hover:text-primary/10 transition-colors duration-300" />

            {/* Text */}
            <p className="text-slate-300 text-base md:text-lg leading-relaxed mb-8 relative z-10">
              "{t.text}"
            </p>

            {/* Author */}
            <div className="flex items-center gap-4 border-t border-slate-800/50 pt-6">
              {t.avatar.startsWith('/') ? (
                <img
                  src={t.avatar}
                  alt={t.name}
                  className="w-12 h-12 rounded-full object-cover border border-slate-700 shadow-glow-primary bg-white select-none flex-shrink-0"
                />
              ) : (
                <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-primary to-secondary text-[#030712] font-space font-bold text-sm flex items-center justify-center shadow-glow-primary flex-shrink-0">
                  {t.avatar}
                </div>
              )}
              <div>
                <h4 className="text-sm font-bold text-white leading-tight">{t.name}</h4>
                <span className="text-xs text-slate-500 font-medium">{t.role}, {t.company}</span>
              </div>
            </div>
          </div>

          {/* Right Arrow */}
          <button
            onClick={next}
            className="flex-shrink-0 w-11 h-11 rounded-full border border-slate-700 bg-slate-900/60 hover:bg-primary/10 hover:border-primary/50 text-slate-400 hover:text-primary transition-all duration-200 flex items-center justify-center shadow-lg"
            aria-label="Next testimonial"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

        {/* Dot Indicators */}
        <div className="flex justify-center gap-2 mt-8">
          {testimonials.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrent(idx)}
              className={`h-2 rounded-full transition-all duration-300 ${
                idx === current
                  ? 'w-6 bg-primary shadow-glow-primary'
                  : 'w-2 bg-slate-700 hover:bg-slate-500'
              }`}
              aria-label={`Go to testimonial ${idx + 1}`}
            />
          ))}
        </div>
      </div>

      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateX(18px); }
          to   { opacity: 1; transform: translateX(0); }
        }
      `}</style>
    </section>
  );
}
