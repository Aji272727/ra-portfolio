import { useState, useEffect } from 'react';
import { Menu, X, ArrowRight } from 'lucide-react';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  const navLinks = [
    { name: 'Solutions', href: '#solutions' },
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'Case Studies', href: '#case-studies' },
    { name: 'Process', href: '#process' },
    { name: 'Testimonials', href: '#testimonials' },
    { name: 'About', href: '#about' },
    { name: 'Contact', href: '#contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // IntersectionObserver to highlight active navigation link on scroll
  useEffect(() => {
    const sections = navLinks.map(link => document.querySelector(link.href));
    
    const observerOptions = {
      root: null,
      rootMargin: '-30% 0px -50% 0px',
      threshold: 0,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, observerOptions);

    sections.forEach(section => {
      if (section) observer.observe(section);
    });

    return () => {
      sections.forEach(section => {
        if (section) observer.unobserve(section);
      });
    };
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-350 ${
        isScrolled 
          ? 'bg-[#030712]/85 backdrop-blur-md border-b border-slate-800/80 py-4.5 shadow-lg' 
          : 'bg-transparent py-6.5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
        {/* Logo */}
        <a 
          href="#" 
          data-cursor-text="GO_HOME"
          className="flex items-center gap-2.5 group focus-visible:ring-2 focus-visible:ring-primary focus-visible:outline-none rounded-xl"
          aria-label="ABIL Portfolio Home"
        >
          <span className="h-9.5 w-9.5 rounded-xl bg-gradient-to-tr from-primary to-secondary flex items-center justify-center font-display font-extrabold text-[#030712] text-xl tracking-tighter shadow-glow-primary group-hover:scale-[1.03] active:scale-95 transition-all duration-300">
            RA
          </span>
          <span className="font-display font-bold text-lg text-white group-hover:text-primary transition-colors duration-300">
            ABIL
          </span>
        </a>

        {/* Desktop Nav Links */}
        <nav className="hidden md:flex items-center gap-8" aria-label="Main Navigation">
          {navLinks.map((link) => {
            const isActive = activeSection === link.href.slice(1);
            return (
              <a
                key={link.name}
                href={link.href}
                data-cursor-text="NAVIGATE"
                className={`text-sm font-semibold transition-colors duration-200 focus-visible:ring-2 focus-visible:ring-primary focus-visible:outline-none px-2.5 py-1.5 rounded-md ${
                  isActive 
                    ? 'text-primary' 
                    : 'text-slate-400 hover:text-white'
                }`}
                aria-current={isActive ? 'page' : undefined}
              >
                {link.name}
              </a>
            );
          })}
        </nav>

        {/* CTA Button */}
        <div className="hidden md:flex items-center">
          <a
            href="#contact"
            data-cursor-text="BOOK_CALL"
            className="flex items-center gap-2 bg-gradient-to-r from-primary to-secondary hover:from-primary/95 hover:to-secondary/95 text-[#030712] font-semibold text-sm px-6 py-3 rounded-full shadow-glow-primary transition-all duration-300 hover:scale-[1.02] active:scale-95 focus-visible:ring-2 focus-visible:ring-primary focus-visible:outline-none"
          >
            Automation Strategy Call
            <ArrowRight size={15} />
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden p-3.5 text-slate-400 hover:text-white transition-colors duration-200 focus-visible:ring-2 focus-visible:ring-primary focus-visible:outline-none min-h-[44px] min-w-[44px] flex items-center justify-center rounded-xl"
          aria-label="Toggle Navigation Menu"
          aria-expanded={isMobileMenuOpen}
          aria-controls="mobile-menu"
          data-cursor-text="TOGGLE_MENU"
        >
          {isMobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile Dropdown Nav */}
      {isMobileMenuOpen && (
        <div 
          id="mobile-menu"
          className="md:hidden absolute top-full left-0 w-full bg-[#030712]/95 backdrop-blur-lg border-b border-slate-800 px-6 py-8 flex flex-col gap-5.5 shadow-2xl animate-in fade-in slide-in-from-top-4 duration-200"
          role="region"
          aria-label="Mobile Navigation Menu"
        >
          {navLinks.map((link) => {
            const isActive = activeSection === link.href.slice(1);
            return (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`text-lg font-bold transition-colors py-2 px-3 rounded-xl min-h-[44px] flex items-center ${
                  isActive ? 'text-primary bg-slate-900/40' : 'text-slate-300 hover:text-white'
                }`}
              >
                {link.name}
              </a>
            );
          })}
          <a
            href="#contact"
            onClick={() => setIsMobileMenuOpen(false)}
            className="flex items-center justify-center gap-2 bg-gradient-to-r from-primary to-secondary text-[#030712] font-semibold py-4.5 rounded-full shadow-glow-primary hover:scale-[1.01] transition-all mt-3 min-h-[44px]"
          >
            Automation Strategy Call
            <ArrowRight size={15} />
          </a>
        </div>
      )}
    </header>
  );
}
