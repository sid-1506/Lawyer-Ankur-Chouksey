export default function About() {
  return (
    <section id="about" className="about-section" aria-labelledby="about-title">
      <div className="container">
        <div className="section-intro text-center">
          <span className="section-eyebrow animate-item">Who We Are</span>
          <h2 id="about-title" className="section-heading animate-item">
            Corporate Guidance Built on Integrity
          </h2>
          <div className="gold-divider animate-item" aria-hidden="true"></div>
        </div>

        <div className="about-grid">
          {/* Main Narrative Column */}
          <div className="about-narrative">
            <p className="lead-paragraph animate-item">
              Ankur Chouksey &amp; Associates has been eminent in providing corporate, business, financial, taxation, intellectual property rights, corporate advisory and advocacy services to individuals and business enterprises within and beyond India for many years.
            </p>
            <p className="animate-item">
              The firm provides a wide range of corporate legal services, including appearances before NCLT and courts, client briefings and conferences, opinion writing, professional guidance, research work and related activities.
            </p>
            <p className="animate-item">
              The firm renders high-end legal and corporate law services to renowned corporate houses across Madhya Pradesh and other regions. Its capabilities include corporate restructuring, corporate compliance and due diligence, valuation of securities or financial assets, investment banking, securities law advisory and corporate taxation.
            </p>
            <p className="animate-item">
              Our primary mission is to establish long-term and meaningful business relationships with every client. Our clients and colleagues trust us for professional competence and integrity. We continuously strive to uphold that trust while working within applicable professional standards, laws and regulations.
            </p>
          </div>

          {/* Four Concise Capability Points with Minimal Line Icons */}
          <div className="about-capabilities">
            <div className="capability-item animate-item">
              <div className="capability-icon-wrap" aria-hidden="true">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.75"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                  <polyline points="14 2 14 8 20 8"></polyline>
                  <line x1="16" y1="13" x2="8" y2="13"></line>
                  <line x1="16" y1="17" x2="8" y2="17"></line>
                  <polyline points="10 9 9 9 8 9"></polyline>
                </svg>
              </div>
              <div className="capability-text">
                <h3 className="capability-title">Corporate Legal Services</h3>
                <p className="capability-desc">
                  High-end legal opinions, court &amp; tribunal appearances, and authoritative corporate legal guidance.
                </p>
              </div>
            </div>

            <div className="capability-item animate-item">
              <div className="capability-icon-wrap" aria-hidden="true">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.75"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                  <polyline points="9 12 11 14 15 10"></polyline>
                </svg>
              </div>
              <div className="capability-text">
                <h3 className="capability-title">Regulatory Compliance</h3>
                <p className="capability-desc">
                  Rigorous secretarial audits, statutory filings, and end-to-end regulatory adherence.
                </p>
              </div>
            </div>

            <div className="capability-item animate-item">
              <div className="capability-icon-wrap" aria-hidden="true">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.75"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx="12" cy="12" r="10"></circle>
                  <line x1="12" y1="16" x2="12" y2="12"></line>
                  <line x1="12" y1="8" x2="12.01" y2="8"></line>
                </svg>
              </div>
              <div className="capability-text">
                <h3 className="capability-title">Strategic Advisory</h3>
                <p className="capability-desc">
                  Corporate restructuring, valuations, FEMA, investment banking, and capital-market strategy.
                </p>
              </div>
            </div>

            <div className="capability-item animate-item">
              <div className="capability-icon-wrap" aria-hidden="true">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.75"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
                  <line x1="3" y1="9" x2="21" y2="9"></line>
                  <line x1="9" y1="21" x2="9" y2="9"></line>
                </svg>
              </div>
              <div className="capability-text">
                <h3 className="capability-title">Representation &amp; Advocacy</h3>
                <p className="capability-desc">
                  Authoritative representation before MCA, NCLT, RD, SEBI, and Central Government authorities.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
