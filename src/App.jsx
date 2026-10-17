import { useState, useEffect } from 'react';
import DisclaimerModal from './components/ui/DisclaimerModal';
import Navbar from './components/layout/Navbar';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Services from './components/sections/Services';
import MissionVision from './components/sections/MissionVision';
import Team from './components/sections/Team';
import WhyUs from './components/sections/WhyUs';
import Contact from './components/sections/Contact';
import Blog from './components/sections/Blog';
import Footer from './components/layout/Footer';
import FloatingContact from './components/ui/FloatingContact';
import { useScrollReveal } from './hooks/useScrollReveal';

export default function App() {
  const [isDisclaimerOpen, setIsDisclaimerOpen] = useState(false);
  const [allowCloseDirectly, setAllowCloseDirectly] = useState(false);

  // Initialize scroll reveal animations & JS class
  useScrollReveal();

  // Disclaimer initial check on mount
  useEffect(() => {
    const isAccepted = sessionStorage.getItem('aca_disclaimer_accepted') === 'true';
    if (!isAccepted) {
      setIsDisclaimerOpen(true);
      setAllowCloseDirectly(false);
    }
  }, []);

  const handleOpenDisclaimer = (e) => {
    if (e) e.preventDefault();
    setAllowCloseDirectly(true);
    setIsDisclaimerOpen(true);
  };

  return (
    <>
      {/* Accessibility Skip Link */}
      <a href="#main-content" className="skip-to-content">
        Skip to main content
      </a>

      {/* Mandatory Disclaimer Modal */}
      <DisclaimerModal
        isOpen={isDisclaimerOpen}
        allowCloseDirectly={allowCloseDirectly}
        onClose={() => setIsDisclaimerOpen(false)}
      />

      {/* Sticky Navigation */}
      <Navbar />

      {/* Main Content Container */}
      <main id="main-content">
        <Hero />
        <About />
        <Services />
        <MissionVision />
        <Team />
        <WhyUs />
        <Contact />
        <Blog />
      </main>

      {/* Footer */}
      <Footer onOpenDisclaimer={handleOpenDisclaimer} />

      {/* Floating Action (Mobile Only) */}
      <FloatingContact />
    </>
  );
}
