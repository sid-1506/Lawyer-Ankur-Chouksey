/**
 * ANKUR CHOUKSEY & ASSOCIATES
 * Company Secretaries in Practice | Bhopal, Madhya Pradesh
 * Core Website Scripts - Modular, Accessible, Framework-free
 */

document.addEventListener('DOMContentLoaded', () => {
  'use strict';

  // Mark document as JS-enabled for animations
  document.documentElement.classList.add('js-loaded');

  /* ==========================================================================
     1. DISCLAIMER MODAL MANAGEMENT
     ========================================================================== */
  const disclaimerModal = document.getElementById('disclaimer-modal');
  const disclaimerCheckbox = document.getElementById('disclaimer-checkbox');
  const disclaimerAgreeBtn = document.getElementById('disclaimer-agree-btn');
  const disclaimerCloseBtn = document.getElementById('disclaimer-close-btn');
  const footerDisclaimerBtn = document.getElementById('footer-disclaimer-btn');
  const disclaimerContent = document.getElementById('disclaimer-content');

  const DISCLAIMER_STORAGE_KEY = 'aca_disclaimer_accepted';

  // Check if disclaimer was accepted in current browser session
  const isAccepted = sessionStorage.getItem(DISCLAIMER_STORAGE_KEY) === 'true';

  const openDisclaimerModal = (allowCloseDirectly = false) => {
    if (!disclaimerModal) return;
    disclaimerModal.classList.add('is-visible');
    document.body.classList.add('modal-open');

    if (allowCloseDirectly || isAccepted) {
      if (disclaimerCloseBtn) disclaimerCloseBtn.style.display = 'inline-flex';
      if (disclaimerCheckbox) disclaimerCheckbox.checked = true;
      if (disclaimerAgreeBtn) disclaimerAgreeBtn.disabled = false;
    } else {
      if (disclaimerCloseBtn) disclaimerCloseBtn.style.display = 'none';
      if (disclaimerCheckbox) disclaimerCheckbox.checked = false;
      if (disclaimerAgreeBtn) disclaimerAgreeBtn.disabled = true;
    }

    // Set focus to the scrollable content or checkbox for accessibility
    setTimeout(() => {
      if (disclaimerContent) disclaimerContent.focus();
    }, 100);
  };

  const closeDisclaimerModal = () => {
    if (!disclaimerModal) return;
    disclaimerModal.classList.remove('is-visible');
    document.body.classList.remove('modal-open');
    window.dispatchEvent(new Event('scroll'));
  };

  // Initial session check
  if (!isAccepted) {
    openDisclaimerModal(false);
  }

  // Checkbox toggle listener
  if (disclaimerCheckbox && disclaimerAgreeBtn) {
    disclaimerCheckbox.addEventListener('change', () => {
      disclaimerAgreeBtn.disabled = !disclaimerCheckbox.checked;
    });
  }

  // Agree button listener
  if (disclaimerAgreeBtn) {
    disclaimerAgreeBtn.addEventListener('click', () => {
      sessionStorage.setItem(DISCLAIMER_STORAGE_KEY, 'true');
      closeDisclaimerModal();
    });
  }

  // Close button (used when revisiting from footer)
  if (disclaimerCloseBtn) {
    disclaimerCloseBtn.addEventListener('click', () => {
      closeDisclaimerModal();
    });
  }

  // Reopen disclaimer from footer
  if (footerDisclaimerBtn) {
    footerDisclaimerBtn.addEventListener('click', (e) => {
      e.preventDefault();
      openDisclaimerModal(true);
    });
  }

  // Focus trap & keyboard accessibility inside modal
  if (disclaimerModal) {
    disclaimerModal.addEventListener('keydown', (e) => {
      // STRICT REQUIREMENT: Do not allow the Escape key to bypass disclaimer!
      if (e.key === 'Escape') {
        e.preventDefault();
        // If already accepted previously, allow escape to close
        if (sessionStorage.getItem(DISCLAIMER_STORAGE_KEY) === 'true') {
          closeDisclaimerModal();
        }
        return;
      }

      // Focus trap for Tab key
      if (e.key === 'Tab') {
        const focusableElements = disclaimerModal.querySelectorAll(
          'a[href], button:not([disabled]), input:not([disabled]), [tabindex="0"]'
        );
        if (focusableElements.length === 0) return;

        const firstElement = focusableElements[0];
        const lastElement = focusableElements[focusableElements.length - 1];

        if (e.shiftKey) {
          if (document.activeElement === firstElement) {
            e.preventDefault();
            lastElement.focus();
          }
        } else {
          if (document.activeElement === lastElement) {
            e.preventDefault();
            firstElement.focus();
          }
        }
      }
    });
  }

  /* ==========================================================================
     2. STICKY HEADER & ACTIVE NAVIGATION OBSERVER
     ========================================================================== */
  const siteHeader = document.getElementById('site-header');
  const navLinks = document.querySelectorAll('.nav-link');
  const sections = document.querySelectorAll('section[id]');

  const handleHeaderScroll = () => {
    if (!siteHeader) return;
    if (window.scrollY > 20) {
      siteHeader.classList.add('scrolled');
    } else {
      siteHeader.classList.remove('scrolled');
    }
  };

  window.addEventListener('scroll', handleHeaderScroll, { passive: true });
  handleHeaderScroll(); // Check once on initial load

  // Active section indicator using IntersectionObserver
  if ('IntersectionObserver' in window && sections.length > 0) {
    const navObserverOptions = {
      root: null,
      rootMargin: '-20% 0px -60% 0px',
      threshold: 0
    };

    const navObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const currentId = entry.target.getAttribute('id');
          navLinks.forEach((link) => {
            if (link.getAttribute('href') === `#${currentId}`) {
              link.classList.add('active');
            } else {
              link.classList.remove('active');
            }
          });
        }
      });
    }, navObserverOptions);

    sections.forEach((section) => navObserver.observe(section));
  }

  /* ==========================================================================
     3. MOBILE NAVIGATION MENU
     ========================================================================== */
  const mobileMenuToggle = document.getElementById('mobile-menu-toggle');
  const siteNav = document.getElementById('site-nav');

  if (mobileMenuToggle && siteNav) {
    const toggleMenu = (expand) => {
      const isExpanded = expand !== undefined ? expand : mobileMenuToggle.getAttribute('aria-expanded') === 'true';
      const newState = !isExpanded;
      mobileMenuToggle.setAttribute('aria-expanded', String(newState));
      siteNav.classList.toggle('is-open', newState);
    };

    mobileMenuToggle.addEventListener('click', () => toggleMenu());

    // Close mobile menu when any nav link is clicked
    const allNavLinks = siteNav.querySelectorAll('a');
    allNavLinks.forEach((link) => {
      link.addEventListener('click', () => {
        if (window.innerWidth <= 768) {
          toggleMenu(true); // Close
        }
      });
    });

    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
      if (
        siteNav.classList.contains('is-open') &&
        !siteNav.contains(e.target) &&
        !mobileMenuToggle.contains(e.target)
      ) {
        toggleMenu(true);
      }
    });
  }

  /* ==========================================================================
     4. SERVICES ACCORDION / EXPANDABLE PANELS
     ========================================================================== */
  const serviceCards = document.querySelectorAll('.service-card');

  serviceCards.forEach((card) => {
    const toggleBtn = card.querySelector('.service-toggle-btn');
    const detailsPanel = card.querySelector('.service-details');
    const toggleText = toggleBtn ? toggleBtn.querySelector('.toggle-text') : null;

    if (!toggleBtn || !detailsPanel) return;

    toggleBtn.addEventListener('click', () => {
      const isExpanded = toggleBtn.getAttribute('aria-expanded') === 'true';

      // Rule: Only one service may be open at a time on mobile (width <= 768px)
      if (!isExpanded && window.innerWidth <= 768) {
        serviceCards.forEach((otherCard) => {
          if (otherCard !== card) {
            const otherBtn = otherCard.querySelector('.service-toggle-btn');
            const otherPanel = otherCard.querySelector('.service-details');
            const otherText = otherBtn ? otherBtn.querySelector('.toggle-text') : null;
            if (otherBtn && otherPanel) {
              otherBtn.setAttribute('aria-expanded', 'false');
              otherPanel.classList.remove('is-open');
              otherPanel.hidden = true;
              if (otherText) otherText.textContent = 'View Details';
            }
          }
        });
      }

      // Toggle current panel
      if (isExpanded) {
        toggleBtn.setAttribute('aria-expanded', 'false');
        detailsPanel.classList.remove('is-open');
        detailsPanel.hidden = true;
        if (toggleText) toggleText.textContent = 'View Details';
      } else {
        toggleBtn.setAttribute('aria-expanded', 'true');
        detailsPanel.hidden = false;
        // Trigger reflow for smooth height transition
        void detailsPanel.offsetHeight;
        detailsPanel.classList.add('is-open');
        if (toggleText) toggleText.textContent = 'Hide Details';
      }
    });
  });

  /* ==========================================================================
     5. ENQUIRY FORM VALIDATION & MAILTO DISPATCH
     ========================================================================== */
  const enquiryForm = document.getElementById('enquiry-form');
  const formStatus = document.getElementById('form-status');

  if (enquiryForm) {
    const validateField = (input, errorElement, errorMessage, validatorFn) => {
      const isValid = validatorFn ? validatorFn(input.value.trim()) : input.value.trim().length > 0;
      if (!isValid) {
        input.classList.add('is-invalid');
        if (errorElement) errorElement.textContent = errorMessage;
        return false;
      } else {
        input.classList.remove('is-invalid');
        if (errorElement) errorElement.textContent = '';
        return true;
      }
    };

    enquiryForm.addEventListener('submit', (e) => {
      e.preventDefault();

      const nameInput = document.getElementById('form-name');
      const emailInput = document.getElementById('form-email');
      const phoneInput = document.getElementById('form-phone');
      const serviceInput = document.getElementById('form-service');
      const messageInput = document.getElementById('form-message');

      const nameError = document.getElementById('name-error');
      const emailError = document.getElementById('email-error');
      const phoneError = document.getElementById('phone-error');
      const serviceError = document.getElementById('service-error');
      const messageError = document.getElementById('message-error');

      // Email validation regex
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      // Phone validation (at least 8 digits/characters)
      const phoneRegex = /^[\d\s+\-()]{8,20}$/;

      const isNameValid = validateField(nameInput, nameError, 'Please enter your full name.', (val) => val.length >= 2);
      const isEmailValid = validateField(emailInput, emailError, 'Please enter a valid email address.', (val) => emailRegex.test(val));
      const isPhoneValid = validateField(phoneInput, phoneError, 'Please enter a valid phone number.', (val) => phoneRegex.test(val));
      const isServiceValid = validateField(serviceInput, serviceError, 'Please select a required practice area.', (val) => val.length > 0);
      const isMessageValid = validateField(messageInput, messageError, 'Please enter your query or message (at least 5 characters).', (val) => val.length >= 5);

      if (isNameValid && isEmailValid && isPhoneValid && isServiceValid && isMessageValid) {
        const fullName = nameInput.value.trim();
        const email = emailInput.value.trim();
        const phone = phoneInput.value.trim();
        const service = serviceInput.value.trim();
        const message = messageInput.value.trim();

        // Construct pre-filled email client link
        const recipient = 'csankurchouksey@gmail.com';
        const subject = encodeURIComponent(`Professional Enquiry: ${service} - ${fullName}`);
        const bodyContent = encodeURIComponent(
          `Dear CS Ankur Chouksey & Associates,\n\n` +
          `I would like to enquire about your services.\n\n` +
          `Client Details:\n` +
          `• Full Name: ${fullName}\n` +
          `• Email: ${email}\n` +
          `• Phone: ${phone}\n` +
          `• Practice Area: ${service}\n\n` +
          `Requirement Details:\n` +
          `${message}\n\n` +
          `Regards,\n` +
          `${fullName}`
        );

        const mailtoUrl = `mailto:${recipient}?subject=${subject}&body=${bodyContent}`;

        // Clear status and show clear feedback
        if (formStatus) {
          formStatus.className = 'form-status is-ready';
          formStatus.textContent = 'Your email application is ready to open.';
        }

        // Open user's email client
        setTimeout(() => {
          window.location.href = mailtoUrl;
        }, 300);
      } else {
        // Focus first invalid element
        const firstInvalid = enquiryForm.querySelector('.is-invalid');
        if (firstInvalid) firstInvalid.focus();
      }
    });

    // Clear errors on input
    enquiryForm.querySelectorAll('input, select, textarea').forEach((field) => {
      field.addEventListener('input', () => {
        field.classList.remove('is-invalid');
        const errSpan = field.closest('.form-group')?.querySelector('.form-error');
        if (errSpan) errSpan.textContent = '';
      });
    });
  }

  /* ==========================================================================
     6. SCROLL-BASED REVEAL ANIMATIONS (IntersectionObserver)
     ========================================================================== */
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
  } else {
    // If reduced motion or IntersectionObserver unsupported, reveal immediately
    document.querySelectorAll(
      '.animate-item, .animate-mv-left, .animate-mv-right, .animate-photo'
    ).forEach((el) => {
      el.classList.add('is-revealed');
    });
  }

  /* ==========================================================================
     7. DYNAMIC COPYRIGHT YEAR
     ========================================================================== */
  const currentYearSpan = document.getElementById('current-year');
  if (currentYearSpan) {
    currentYearSpan.textContent = String(new Date().getFullYear());
  }
});
