export default function InteractiveBackground() {
  return (
    <div className="absolute inset-0 -z-50 overflow-hidden bg-[#030712] pointer-events-none">
      {/* Vercel-style ambient glow spheres */}
      <div className="absolute -top-[10%] left-[5%] w-[350px] md:w-[600px] h-[350px] md:h-[600px] rounded-full bg-primary/5 blur-[120px] animate-pulse-slow" />
      <div className="absolute top-[30%] -right-[10%] w-[400px] md:w-[700px] h-[400px] md:h-[700px] rounded-full bg-secondary/5 blur-[140px] animate-pulse-slow" style={{ animationDelay: '2s' }} />
      <div className="absolute -bottom-[10%] left-[10%] w-[350px] md:w-[650px] h-[350px] md:h-[650px] rounded-full bg-accent/5 blur-[130px] animate-pulse-slow" style={{ animationDelay: '4s' }} />
      
      {/* Radial overlay to dim grids on the edges */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#030712]/50 to-[#030712]" />

      {/* Dotted grid layout */}
      <div className="absolute inset-0 bg-dot-grid opacity-60" />

      {/* Thin line grid pattern for technical appearance */}
      <div className="absolute inset-0 bg-lines-grid opacity-30" />
    </div>
  );
}
