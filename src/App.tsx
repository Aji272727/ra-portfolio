import Header from './components/Header';
import Hero from './components/Hero';
import Stats from './components/Stats';
import Solutions from './components/Solutions';
import Portfolio from './components/Portfolio';
import CaseStudies from './components/CaseStudies';
import WorkflowShowcase from './components/WorkflowShowcase';
import Technologies from './components/Technologies';
import Process from './components/Process';
import Testimonials from './components/Testimonials';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import InteractiveBackground from './components/InteractiveBackground';
import CustomCursor from './components/CustomCursor';

export default function App() {
  return (
    <div className="relative min-h-screen">
      {/* Dynamic Cursor tracking and trail */}
      <CustomCursor />

      {/* Interactive global background nodes and grids */}
      <InteractiveBackground />
      
      {/* Navigation */}
      <Header />
      
      {/* Main Content Layout */}
      <main>
        <Hero />
        <Stats />
        <Solutions />
        <Portfolio />
        <CaseStudies />
        <WorkflowShowcase />
        <Technologies />
        <Process />
        <Testimonials />
        <About />
        <Contact />
      </main>
      
      {/* Footer */}
      <Footer />
    </div>
  );
}
