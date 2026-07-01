import { Quote } from 'lucide-react';

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
      name: "Sarah Jenkins",
      role: "Operations Director",
      company: "Vanguard Realty Group",
      text: "RA's n8n workflows completely transformed our sales operations. The 45-second lead response time helped us secure bookings that would have previously slipped away. Simply outstanding engineering.",
      avatar: "SJ"
    },
    {
      name: "Dr. Alex Mercer",
      role: "Founder",
      company: "Davao Dental & Aesthetic",
      text: "Implementing the AI voice assistant was a game-changer. It books appointments directly into our CRM flawlessly, freeing up our clinic receptionist to focus entirely on patients inside the building.",
      avatar: "AM"
    },
    {
      name: "Raymond Miller",
      role: "Technology Director",
      company: "CreatorScale Media",
      text: "We needed a robust partner capable of scaling short-form media output. RA delivered an automated content queue that handles scripts, audio, and YouTube API distribution without failing.",
      avatar: "RM"
    }
  ];

  return (
    <section id="testimonials" className="py-24 relative z-10 border-t border-slate-900 bg-[#030712]/10">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
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

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((t, idx) => (
            <div 
              key={idx} 
              className="glass-panel rounded-2xl p-8 border border-slate-800/80 hover:border-slate-700/80 hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between relative group"
            >
              {/* Quote Mark overlay */}
              <Quote className="absolute top-6 right-8 text-slate-800/40 w-10 h-10 group-hover:text-primary/10 transition-colors duration-300" />
              
              <div>
                <p className="text-slate-300 text-sm md:text-base leading-relaxed mb-8 relative z-10">
                  "{t.text}"
                </p>
              </div>

              {/* Author Section */}
              <div className="flex items-center gap-4 mt-auto border-t border-slate-800/50 pt-6">
                <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-primary to-secondary text-[#030712] font-space font-bold text-xs flex items-center justify-center shadow-glow-primary">
                  {t.avatar}
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white leading-tight">
                    {t.name}
                  </h4>
                  <span className="text-xs text-slate-500 font-medium">
                    {t.role}, {t.company}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
