import { useState, useEffect, useRef } from 'react';

const DISCLAIMER_STORAGE_KEY = 'aca_disclaimer_accepted';

export default function DisclaimerModal({ isOpen, allowCloseDirectly, onClose }) {
  const [isChecked, setIsChecked] = useState(false);
  const modalRef = useRef(null);
  const contentRef = useRef(null);

  useEffect(() => {
    if (isOpen) {
      document.body.classList.add('modal-open');
      const isAccepted = sessionStorage.getItem(DISCLAIMER_STORAGE_KEY) === 'true';
      if (allowCloseDirectly || isAccepted) {
        setIsChecked(true);
      } else {
        setIsChecked(false);
      }
      setTimeout(() => {
        if (contentRef.current) {
          contentRef.current.focus();
        }
      }, 100);
    } else {
      document.body.classList.remove('modal-open');
      window.dispatchEvent(new Event('scroll'));
    }
  }, [isOpen, allowCloseDirectly]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!isOpen || !modalRef.current) return;

      if (e.key === 'Escape') {
        e.preventDefault();
        if (sessionStorage.getItem(DISCLAIMER_STORAGE_KEY) === 'true') {
          onClose();
        }
        return;
      }

      if (e.key === 'Tab') {
        const focusableElements = modalRef.current.querySelectorAll(
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
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  const handleAgree = () => {
    sessionStorage.setItem(DISCLAIMER_STORAGE_KEY, 'true');
    onClose();
  };

  return (
    <div
      id="disclaimer-modal"
      ref={modalRef}
      className={`modal-backdrop ${isOpen ? 'is-visible' : ''}`}
      role="dialog"
      aria-modal="true"
      aria-labelledby="disclaimer-title"
      aria-describedby="disclaimer-content"
    >
      <div className="modal-dialog">
        <div className="modal-header">
          <img
            src="img/Logo.jpeg"
            alt="Ankur Chouksey & Associates, Company Secretaries"
            className="modal-logo"
            width="220"
            height="55"
          />
          <h2 id="disclaimer-title" className="modal-heading">Disclaimer</h2>
        </div>
        <div
          id="disclaimer-content"
          ref={contentRef}
          className="modal-body"
          tabIndex={0}
          aria-label="Disclaimer statement scrollable text"
        >
          <p>
            This section of the website pertaining to Ankur Chouksey &amp; Associates (&lsquo;ACA&rsquo;), Company Secretaries in Practice, is never sent unsolicited to any person. In case any of our associates has referred this page without the context of a discussion, expression of interest or specific request, please do bring such an act to our notice by mailing us at <a href="mailto:info@csankurchouksey.com">info@csankurchouksey.com</a>.
          </p>
          <p>
            This section is meant solely for the purpose of information and not for the purpose of advertising and solicitation of any assignments or professional engagements in any manner. Ankur Chouksey &amp; Associates hereby declares that the contents of this section of the website are true to the best of our knowledge and belief and are in conformity with ICSI (Guidelines for Advertisement by Company Secretaries), 2020.
          </p>
          <p>
            The contents or claims in this section of the website are the sole and exclusive responsibility of Ankur Chouksey &amp; Associates. The Institute of Company Secretaries of India does not own any responsibility whatsoever for such contents or claims by Ankur Chouksey &amp; Associates. The content of this website is for informational purposes only and Ankur Chouksey &amp; Associates shall not be liable for consequences of any action taken by relying on the material or information provided on this website.
          </p>
        </div>
        <div className="modal-footer">
          <label className="modal-checkbox-label" htmlFor="disclaimer-checkbox">
            <input
              type="checkbox"
              id="disclaimer-checkbox"
              className="modal-checkbox"
              checked={isChecked}
              onChange={(e) => setIsChecked(e.target.checked)}
            />
            <span className="checkbox-text">I have read and understood the disclaimer.</span>
          </label>
          <div className="modal-actions">
            <button
              type="button"
              id="disclaimer-agree-btn"
              className="btn btn-primary"
              disabled={!isChecked}
              onClick={handleAgree}
            >
              I Agree
            </button>
            <button
              type="button"
              id="disclaimer-close-btn"
              className="btn btn-outline"
              style={{ display: allowCloseDirectly ? 'inline-flex' : 'none' }}
              onClick={onClose}
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
