import { useState, useEffect, useRef } from 'react';

interface CounterProps {
  value: number;
  suffix?: string;
  duration?: number;
}

function Counter({ value, suffix = '', duration = 1500 }: CounterProps) {
  const [count, setCount] = useState(0);
  const elementRef = useRef<HTMLSpanElement>(null);
  const [hasStarted, setHasStarted] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setHasStarted(true);
        }
      },
      { threshold: 0.1 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!hasStarted) return;

    let startTime: number | null = null;
    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      
      // Decelerating progress (ease-out quad)
      const easeProgress = progress * (2 - progress);
      setCount(Math.floor(easeProgress * value));

      if (progress < 1) {
        window.requestAnimationFrame(step);
      } else {
        setCount(value);
      }
    };

    window.requestAnimationFrame(step);
  }, [hasStarted, value, duration]);

  return (
    <span 
      ref={elementRef} 
      className="font-display font-extrabold text-4xl md:text-5xl lg:text-6xl bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent"
    >
      {count}{suffix}
    </span>
  );
}

export default function Stats() {
  const stats = [
    { value: 120, suffix: '+', label: 'Automations Built' },
    { value: 25, suffix: '+', label: 'Platforms Integrated' },
    { value: 2500, suffix: '+', label: 'Hours Saved' },
    { value: 45, suffix: '+', label: 'Active Workflows' },
  ];

  return (
    <section className="py-14 border-y border-slate-900 bg-[#030712]/40 backdrop-blur-sm relative z-10">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {stats.map((stat, i) => (
            <div key={i} className="flex flex-col items-center text-center">
              <Counter value={stat.value} suffix={stat.suffix} />
              <span className="text-xs md:text-sm font-semibold text-slate-400 font-space tracking-wider mt-3 uppercase">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
