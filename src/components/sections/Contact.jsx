import { useState, useRef } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    service: '',
    message: '',
  });

  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState({ isReady: false, message: '' });

  const nameInputRef = useRef(null);
  const emailInputRef = useRef(null);
  const phoneInputRef = useRef(null);
  const serviceInputRef = useRef(null);
  const messageInputRef = useRef(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    // Clear error on input
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^[\d\s+\-()]{8,20}$/;

    const newErrors = {};

    const nameVal = formData.fullName.trim();
    const emailVal = formData.email.trim();
    const phoneVal = formData.phone.trim();
    const serviceVal = formData.service.trim();
    const messageVal = formData.message.trim();

    if (nameVal.length < 2) {
      newErrors.fullName = 'Please enter your full name.';
    }
    if (!emailRegex.test(emailVal)) {
      newErrors.email = 'Please enter a valid email address.';
    }
    if (!phoneRegex.test(phoneVal)) {
      newErrors.phone = 'Please enter a valid phone number.';
    }
    if (serviceVal.length === 0) {
      newErrors.service = 'Please select a required practice area.';
    }
    if (messageVal.length < 5) {
      newErrors.message = 'Please enter your query or message (at least 5 characters).';
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      const recipient = 'csankurchouksey@gmail.com';
      const subject = encodeURIComponent(`Professional Enquiry: ${serviceVal} - ${nameVal}`);
      const bodyContent = encodeURIComponent(
        `Dear CS Ankur Chouksey & Associates,\n\n` +
        `I would like to enquire about your services.\n\n` +
        `Client Details:\n` +
        `• Full Name: ${nameVal}\n` +
        `• Email: ${emailVal}\n` +
        `• Phone: ${phoneVal}\n` +
        `• Practice Area: ${serviceVal}\n\n` +
        `Requirement Details:\n` +
        `${messageVal}\n\n` +
        `Regards,\n` +
        `${nameVal}`
      );

      const mailtoUrl = `mailto:${recipient}?subject=${subject}&body=${bodyContent}`;

      setStatus({
        isReady: true,
        message: 'Your email application is ready to open.',
      });

      setTimeout(() => {
        window.location.href = mailtoUrl;
      }, 300);
    } else {
      // Focus first invalid element
      if (newErrors.fullName && nameInputRef.current) {
        nameInputRef.current.focus();
      } else if (newErrors.email && emailInputRef.current) {
        emailInputRef.current.focus();
      } else if (newErrors.phone && phoneInputRef.current) {
        phoneInputRef.current.focus();
      } else if (newErrors.service && serviceInputRef.current) {
        serviceInputRef.current.focus();
      } else if (newErrors.message && messageInputRef.current) {
        messageInputRef.current.focus();
      }
    }
  };

  return (
    <section id="contact" className="contact-section" aria-labelledby="contact-title">
      <div className="container">
        <div className="section-intro text-center">
          <span className="section-eyebrow animate-item">Get In Touch</span>
          <h2 id="contact-title" className="section-heading animate-item">
            Let’s Work Together
          </h2>
          <p className="section-subheading animate-item">
            Connect with Ankur Chouksey &amp; Associates for corporate, secretarial, compliance and regulatory assistance.
          </p>
          <div className="gold-divider animate-item" aria-hidden="true"></div>
        </div>

        <div className="contact-grid">
          {/* Contact Information Column */}
          <div className="contact-info-panel animate-item">
            <h3 className="contact-panel-title">Office &amp; Contact Details</h3>

            <address className="contact-details-address">
              {/* Physical Address */}
              <div className="contact-info-block">
                <div className="contact-info-icon" aria-hidden="true">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.75"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                    <circle cx="12" cy="10" r="3"></circle>
                  </svg>
                </div>
                <div className="contact-info-content">
                  <span className="contact-info-label">Office Location</span>
                  <p className="address-text">
                    5/12, Third Floor, Amer Complex, Infront of Punjab National Bank, M. P. Nagar Zone-2, Bhopal, Madhya Pradesh – 462011
                  </p>
                  <a
                    href="https://www.google.com/maps/search/?api=1&amp;query=5/12,+Third+Floor,+Amer+Complex,+Infront+of+Punjab+National+Bank,+M.+P.+Nagar+Zone-2,+Bhopal,+Madhya+Pradesh+462011"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="directions-link"
                  >
                    Get Directions
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden="true"
                    >
                      <line x1="7" y1="17" x2="17" y2="7"></line>
                      <polyline points="7 7 17 7 17 17"></polyline>
                    </svg>
                  </a>
                </div>
              </div>

              {/* Phone Numbers */}
              <div className="contact-info-block">
                <div className="contact-info-icon" aria-hidden="true">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.75"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                  </svg>
                </div>
                <div className="contact-info-content">
                  <span className="contact-info-label">Telephone</span>
                  <ul className="contact-links-list">
                    <li>
                      <a href="tel:+918602782727" className="contact-link">
                        +91 86027 82727
                      </a>
                    </li>
                    <li>
                      <a href="tel:+918839106961" className="contact-link">
                        +91 88391 06961
                      </a>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Email Addresses */}
              <div className="contact-info-block">
                <div className="contact-info-icon" aria-hidden="true">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.75"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                    <polyline points="22,6 12,13 2,6"></polyline>
                  </svg>
                </div>
                <div className="contact-info-content">
                  <span className="contact-info-label">Email Inquiries</span>
                  <ul className="contact-links-list">
                    <li>
                      <a href="mailto:csankurchouksey@gmail.com" className="contact-link">
                        csankurchouksey@gmail.com
                      </a>
                    </li>
                    <li>
                      <a href="mailto:info@csankurchouksey.com" className="contact-link">
                        info@csankurchouksey.com
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </address>
          </div>

          {/* Enquiry Form Column */}
          <div className="contact-form-panel animate-item">
            <h3 className="contact-panel-title">Send a Written Enquiry</h3>

            <form id="enquiry-form" className="enquiry-form" noValidate onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="form-name" className="form-label">
                  Full Name <span className="required" aria-hidden="true">*</span>
                </label>
                <input
                  type="text"
                  id="form-name"
                  ref={nameInputRef}
                  name="fullName"
                  className={`form-input ${errors.fullName ? 'is-invalid' : ''}`}
                  placeholder="e.g. Rahul Sharma"
                  required
                  aria-required="true"
                  value={formData.fullName}
                  onChange={handleChange}
                />
                <span className="form-error" id="name-error" role="alert">
                  {errors.fullName}
                </span>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="form-email" className="form-label">
                    Email Address <span className="required" aria-hidden="true">*</span>
                  </label>
                  <input
                    type="email"
                    id="form-email"
                    ref={emailInputRef}
                    name="email"
                    className={`form-input ${errors.email ? 'is-invalid' : ''}`}
                    placeholder="name@company.com"
                    required
                    aria-required="true"
                    value={formData.email}
                    onChange={handleChange}
                  />
                  <span className="form-error" id="email-error" role="alert">
                    {errors.email}
                  </span>
                </div>
                <div className="form-group">
                  <label htmlFor="form-phone" className="form-label">
                    Phone Number <span className="required" aria-hidden="true">*</span>
                  </label>
                  <input
                    type="tel"
                    id="form-phone"
                    ref={phoneInputRef}
                    name="phone"
                    className={`form-input ${errors.phone ? 'is-invalid' : ''}`}
                    placeholder="e.g. 9876543210"
                    required
                    aria-required="true"
                    value={formData.phone}
                    onChange={handleChange}
                  />
                  <span className="form-error" id="phone-error" role="alert">
                    {errors.phone}
                  </span>
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="form-service" className="form-label">
                  Service Required <span className="required" aria-hidden="true">*</span>
                </label>
                <div className="select-wrapper">
                  <select
                    id="form-service"
                    ref={serviceInputRef}
                    name="service"
                    className={`form-select ${errors.service ? 'is-invalid' : ''}`}
                    required
                    aria-required="true"
                    value={formData.service}
                    onChange={handleChange}
                  >
                    <option value="" disabled>Please select a practice area</option>
                    <option value="Business Registration">Business Registration</option>
                    <option value="Corporate Secretarial & Advisory">Corporate Secretarial &amp; Advisory</option>
                    <option value="FEMA">FEMA &amp; Cross-Border</option>
                    <option value="Audit & Certifications">Audit &amp; Certifications</option>
                    <option value="Corporate Restructuring">Corporate Restructuring</option>
                    <option value="Financial Restructuring">Financial Restructuring</option>
                    <option value="SEBI & Listing">SEBI &amp; Listing</option>
                    <option value="CSR Consultancy">CSR Consultancy</option>
                    <option value="Representation">Regulatory Representation</option>
                    <option value="Legal Drafting">Legal Drafting</option>
                    <option value="Other Corporate Inquiry">Other Corporate Inquiry</option>
                  </select>
                </div>
                <span className="form-error" id="service-error" role="alert">
                  {errors.service}
                </span>
              </div>

              <div className="form-group">
                <label htmlFor="form-message" className="form-label">
                  Message <span className="required" aria-hidden="true">*</span>
                </label>
                <textarea
                  id="form-message"
                  ref={messageInputRef}
                  name="message"
                  className={`form-textarea ${errors.message ? 'is-invalid' : ''}`}
                  rows={4}
                  placeholder="Briefly describe your requirements or query..."
                  required
                  aria-required="true"
                  value={formData.message}
                  onChange={handleChange}
                ></textarea>
                <span className="form-error" id="message-error" role="alert">
                  {errors.message}
                </span>
              </div>

              <div className="form-action">
                <button type="submit" id="submit-enquiry-btn" className="btn btn-primary btn-block">
                  Send Enquiry
                </button>
              </div>

              <div
                id="form-status"
                className={`form-status ${status.isReady ? 'is-ready' : ''}`}
                role="status"
                aria-live="polite"
              >
                {status.message}
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
