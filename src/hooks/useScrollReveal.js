import { useEffect } from 'react';

export function useScrollReveal() {
  useEffect(() => {
    // Mark document as JS-enabled for animations
    document.documentElement.classList.add('js-loaded');

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (!prefersReducedMotion && 'IntersectionObserver' in window) {
      // Add gentle stagger delays to grid elements automatically
      document.querySelectorAll('.pillars-grid .pillar-card').forEach((el, index) => {
        el.classList.add(`stagger-${(index % 4) + 1}`);
      });

      document.querySelectorAll('.about-capabilities .capability-item').forEach((el, index) => {
        el.classList.add(`stagger-${(index % 4) + 1}`);
      });

      const animationObserverOptions = {
        root: null,
        threshold: 0.1,
        rootMargin: '0px 0px -30px 0px'
      };

      const animationObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-revealed');
            observer.unobserve(entry.target); // Animate each element only once
          }
        });
      }, animationObserverOptions);

      const animatedElements = document.querySelectorAll(
        '.animate-item, .animate-mv-left, .animate-mv-right, .animate-photo'
      );

      animatedElements.forEach((el) => animationObserver.observe(el));

      return () => {
        animationObserver.disconnect();
      };
    } else {
      // If reduced motion or IntersectionObserver unsupported, reveal immediately
      document.querySelectorAll(
        '.animate-item, .animate-mv-left, .animate-mv-right, .animate-photo'
      ).forEach((el) => {
        el.classList.add('is-revealed');
      });
    }
  }, []);
}
