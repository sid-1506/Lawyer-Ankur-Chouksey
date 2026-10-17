import { useEffect } from 'react';

let globalObserver = null;

/**
 * Re-scans and observes newly mounted animated elements.
 * Safe to call whenever dynamic data (like blog posts) finishes rendering.
 */
export function refreshScrollReveal() {
  if (typeof window === 'undefined') return;

  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  // Add gentle stagger delays to grid elements
  document.querySelectorAll('.pillars-grid .pillar-card').forEach((el, index) => {
    el.classList.add(`stagger-${(index % 4) + 1}`);
  });

  document.querySelectorAll('.about-capabilities .capability-item').forEach((el, index) => {
    el.classList.add(`stagger-${(index % 4) + 1}`);
  });

  document.querySelectorAll('.blog-grid .blog-card').forEach((el, index) => {
    el.classList.add(`stagger-${(index % 3) + 1}`);
  });

  if (prefersReducedMotion || !('IntersectionObserver' in window)) {
    document.querySelectorAll(
      '.animate-item, .animate-mv-left, .animate-mv-right, .animate-photo'
    ).forEach((el) => {
      el.classList.add('is-revealed');
    });
    return;
  }

  if (!globalObserver) {
    const animationObserverOptions = {
      root: null,
      threshold: 0.1,
      rootMargin: '0px 0px -30px 0px',
    };

    globalObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-revealed');
          observer.unobserve(entry.target);
        }
      });
    }, animationObserverOptions);
  }

  const unrevealedElements = document.querySelectorAll(
    '.animate-item:not(.is-revealed), .animate-mv-left:not(.is-revealed), .animate-mv-right:not(.is-revealed), .animate-photo:not(.is-revealed)'
  );

  unrevealedElements.forEach((el) => globalObserver.observe(el));
}

export function useScrollReveal() {
  useEffect(() => {
    // Mark document as JS-enabled for animations
    document.documentElement.classList.add('js-loaded');
    refreshScrollReveal();

    return () => {
      if (globalObserver) {
        globalObserver.disconnect();
        globalObserver = null;
      }
    };
  }, []);
}
