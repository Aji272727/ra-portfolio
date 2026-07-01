import { useEffect, useState, useRef } from 'react';
import { useMotionValue, useSpring, motion } from 'framer-motion';

export default function CustomCursor() {
  const [hoverText, setHoverText] = useState<string | null>(null);
  const [isClicking, setIsClicking] = useState(false);
  const [particles, setParticles] = useState<{ id: number; x: number; y: number; color: string }[]>([]);
  const nextParticleId = useRef(0);
  const lastPos = useRef({ x: 0, y: 0 });

  // Framer Motion smooth tracking variables
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  
  const springConfig = { damping: 25, stiffness: 250, mass: 0.5 };
  const smoothX = useSpring(cursorX, springConfig);
  const smoothY = useSpring(cursorY, springConfig);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);

      // Calculate distance moved to spawn particles
      const dx = e.clientX - lastPos.current.x;
      const dy = e.clientY - lastPos.current.y;
      const dist = Math.sqrt(dx * dx + dy * dy);

      if (dist > 15) {
        const colors = ['#10B981', '#3B82F6', '#8B5CF6'];
        const randomColor = colors[Math.floor(Math.random() * colors.length)];
        
        setParticles((prev) => [
          ...prev.slice(-15), // keep last 15 particles
          {
            id: nextParticleId.current++,
            x: e.clientX,
            y: e.clientY,
            color: randomColor,
          },
        ]);
        lastPos.current = { x: e.clientX, y: e.clientY };
      }

      // Check if hovering over element with data-cursor-text
      const target = e.target as HTMLElement;
      const hoverEl = target.closest('[data-cursor-text]');
      if (hoverEl) {
        setHoverText(hoverEl.getAttribute('data-cursor-text'));
      } else {
        setHoverText(null);
      }
    };

    const handleMouseDown = () => setIsClicking(true);
    const handleMouseUp = () => setIsClicking(false);

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
    };
  }, [cursorX, cursorY]);

  // Clean up particles
  useEffect(() => {
    const timer = setInterval(() => {
      setParticles((prev) => prev.slice(1));
    }, 150);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-[9999] hidden md:block">
      {/* Particles trail representing flowing data packets */}
      {particles.map((p) => (
        <motion.div
          key={p.id}
          initial={{ opacity: 0.8, scale: 1 }}
          animate={{ opacity: 0, scale: 0.2, y: 15 }}
          transition={{ duration: 0.6 }}
          className="absolute w-1.5 h-1.5 rounded-full"
          style={{
            left: p.x - 3,
            top: p.y - 3,
            backgroundColor: p.color,
            boxShadow: `0 0 8px ${p.color}`,
          }}
        />
      ))}

      {/* Main Cursor Core */}
      <motion.div
        style={{
          x: smoothX,
          y: smoothY,
          translateX: '-50%',
          translateY: '-50%',
        }}
        className="absolute w-5 h-5 rounded-full flex items-center justify-center pointer-events-none"
      >
        {/* Glowing aura */}
        <div 
          className={`absolute inset-0 rounded-full transition-all duration-300 ${
            hoverText ? 'bg-primary/20 scale-[2.2] border border-primary/45' : 'bg-secondary/15 scale-100 border border-secondary/30'
          } ${isClicking ? 'scale-[0.8] bg-accent/35 border-accent' : ''}`} 
        />
        
        {/* Center dot */}
        <div 
          className={`w-1.5 h-1.5 rounded-full transition-colors duration-300 ${
            hoverText ? 'bg-primary shadow-[0_0_8px_#10B981]' : 'bg-secondary shadow-[0_0_8px_#3B82F6]'
          }`} 
        />

        {/* Dynamic Automation Status Tag */}
        {hoverText && (
          <motion.div
            initial={{ opacity: 0, x: 12, scale: 0.8 }}
            animate={{ opacity: 1, x: 18, scale: 1 }}
            className="absolute left-0 top-1/2 -translate-y-1/2 bg-slate-950/95 border border-primary/40 rounded px-2.5 py-1 flex items-center gap-1.5 font-mono text-[9px] text-primary whitespace-nowrap shadow-2xl"
          >
            <span className="w-1 h-1 rounded-full bg-primary animate-ping" />
            {hoverText}
          </motion.div>
        )}
      </motion.div>
    </div>
  );
}
