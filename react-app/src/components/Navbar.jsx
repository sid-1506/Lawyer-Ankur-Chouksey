import { useState, useEffect, useRef } from 'react';

const NAV_ITEMS = [
  { href: '#home', label: 'Home', id: 'home' },
  { href: '#about', label: 'About', id: 'about' },
  { href: '#services', label: 'Services', id: 'services' },
  { href: '#mission-vision', label: 'Mission & Vision', id: 'mission-vision' },
  { href: '#team', label: 'Team', id: 'team' },
  { href: '#why-us', label: 'Why Us', id: 'why-us' },
  { href: '#contact', label: 'Contact', id: 'contact' },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const siteNavRef = useRef(null);
  const toggleBtnRef = useRef(null);

  // Handle header scroll
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Active section indicator using IntersectionObserver
  useEffect(() => {
    if (!('IntersectionObserver' in window)) return;

    const sections = document.querySelectorAll('section[id]');
    if (sections.length === 0) return;

    const navObserverOptions = {
      root: null,
      rootMargin: '-20% 0px -60% 0px',
      threshold: 0,
    };

    const navObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const currentId = entry.target.getAttribute('id');
          if (currentId) {
            setActiveSection(currentId);
          }
        }
      });
    }, navObserverOptions);

    sections.forEach((section) => navObserver.observe(section));

    return () => navObserver.disconnect();
  }, []);

  // Close menu on click outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (
        isMobileMenuOpen &&
        siteNavRef.current &&
        !siteNavRef.current.contains(e.target) &&
        toggleBtnRef.current &&
        !toggleBtnRef.current.contains(e.target)
      ) {
        setIsMobileMenuOpen(false);
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, [isMobileMenuOpen]);

  const handleLinkClick = () => {
    if (window.innerWidth <= 768) {
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <header id="site-header" className={`site-header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container nav-container">
        <a href="#home" className="brand-link" aria-label="Ankur Chouksey & Associates - Home">
          <img
            src="img/Logo.jpeg"
            alt="Ankur Chouksey & Associates, Company Secretaries"
            className="brand-logo"
            width="200"
            height="50"
          />
        </a>

        {/* Desktop & Mobile Navigation Links */}
        <nav
          id="site-nav"
          ref={siteNavRef}
          className={`main-nav ${isMobileMenuOpen ? 'is-open' : ''}`}
          aria-label="Primary Navigation"
        >
          <ul className="nav-list">
            {NAV_ITEMS.map((item) => (
              <li key={item.id} className="nav-item">
                <a
                  href={item.href}
                  className={`nav-link ${activeSection === item.id ? 'active' : ''}`}
                  onClick={handleLinkClick}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
          <div className="nav-cta-wrapper">
            <a href="#contact" className="btn btn-primary nav-cta" onClick={handleLinkClick}>
              Schedule a Consultation
            </a>
          </div>
        </nav>

        {/* Mobile Hamburger Toggle */}
        <button
          type="button"
          id="mobile-menu-toggle"
          ref={toggleBtnRef}
          className="mobile-menu-btn"
          aria-label="Toggle navigation menu"
          aria-expanded={isMobileMenuOpen}
          aria-controls="site-nav"
          onClick={() => setIsMobileMenuOpen((prev) => !prev)}
        >
          <span className="hamburger-box">
            <span className="hamburger-inner"></span>
          </span>
        </button>
      </div>
    </header>
  );
}
