export default function WhyUs() {
  return (
    <section id="why-us" className="why-us-section" aria-labelledby="why-us-title">
      <div className="container">
        <div className="section-intro text-center">
          <span className="section-eyebrow animate-item">Our Commitment</span>
          <h2 id="why-us-title" className="section-heading animate-item">
            Why Clients Work With Us
          </h2>
          <div className="gold-divider animate-item" aria-hidden="true"></div>
        </div>

        {/* Four-item horizontal layout */}
        <div className="pillars-grid">
          {/* Pillar 1 */}
          <div className="pillar-card animate-item">
            <div className="pillar-icon" aria-hidden="true">
              <svg
                width="28"
                height="28"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.75"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M22 10v6M2 10l10-5 10 5-10 5z"></path>
                <path d="M6 12v5c3 3 9 3 12 0v-5"></path>
              </svg>
            </div>
            <h3 className="pillar-title">Professional Competence</h3>
            <p className="pillar-description">
              Advice grounded in corporate law, governance and regulatory understanding.
            </p>
          </div>

          {/* Pillar 2 */}
          <div className="pillar-card animate-item">
            <div className="pillar-icon" aria-hidden="true">
              <svg
                width="28"
                height="28"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.75"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
              </svg>
            </div>
            <h3 className="pillar-title">Integrity</h3>
            <p className="pillar-description">
              Every engagement is approached with honesty, responsibility and professional ethics.
            </p>
          </div>

          {/* Pillar 3 */}
          <div className="pillar-card animate-item">
            <div className="pillar-icon" aria-hidden="true">
              <svg
                width="28"
                height="28"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.75"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="12" cy="12" r="10"></circle>
                <polyline points="12 6 12 12 16 14"></polyline>
              </svg>
            </div>
            <h3 className="pillar-title">Timely Delivery</h3>
            <p className="pillar-description">
              Focused execution designed to support statutory milestones and business continuity.
            </p>
          </div>

          {/* Pillar 4 */}
          <div className="pillar-card animate-item">
            <div className="pillar-icon" aria-hidden="true">
              <svg
                width="28"
                height="28"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.75"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="11" cy="11" r="8"></circle>
                <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                <line x1="11" y1="8" x2="11" y2="14"></line>
                <line x1="8" y1="11" x2="14" y2="11"></line>
              </svg>
            </div>
            <h3 className="pillar-title">Meticulous Care</h3>
            <p className="pillar-description">
              Thorough attention to documentation, compliance and every relevant detail.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
