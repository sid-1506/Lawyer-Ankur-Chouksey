export default function Hero() {
  return (
    <section id="home" className="hero-section" aria-labelledby="hero-title">
      <div className="hero-background-pattern" aria-hidden="true"></div>
      <div className="container hero-container">
        <div className="hero-grid">
          <div className="hero-content">
            <h1 id="hero-title" className="hero-title animate-item">
              Ankur Chouksey &amp; Associates
            </h1>

            <p className="hero-subtitle animate-item">
              Corporate law, compliance, governance and strategic advisory services delivered with professional competence, integrity and meticulous care.
            </p>

            <div className="hero-actions animate-item">
              <a href="#services" className="btn btn-primary">Explore Our Services</a>
              <a href="tel:+918839106961" className="btn btn-secondary">Speak With Us</a>
            </div>

            {/* Trust Strip */}
            <div className="hero-trust-strip animate-item">
              <div className="trust-item">
                <span className="trust-bullet" aria-hidden="true"></span>
                <span>Corporate Compliance</span>
              </div>
              <div className="trust-item">
                <span className="trust-bullet" aria-hidden="true"></span>
                <span>Governance Advisory</span>
              </div>
              <div className="trust-item">
                <span className="trust-bullet" aria-hidden="true"></span>
                <span>Restructuring</span>
              </div>
              <div className="trust-item">
                <span className="trust-bullet" aria-hidden="true"></span>
                <span>Regulatory Representation</span>
              </div>
            </div>
          </div>

          {/* Owner Photo Column in Hero / Landing Section */}
          <div className="hero-image-col animate-photo">
            <div className="hero-image-card">
              <div className="hero-image-frame">
                <img
                  src="img/Owner.jpeg"
                  alt="CS Ankur Chouksey, Proprietor of Ankur Chouksey & Associates"
                  className="hero-owner-img"
                  width="460"
                  height="530"
                  fetchPriority="high"
                />
              </div>
              <div className="hero-owner-caption">
                <div className="caption-gold-bar" aria-hidden="true"></div>
                <div className="caption-text">
                  <span className="caption-name">CS Ankur Chouksey</span>
                  <span className="caption-role">Proprietor &bull; Company Secretary in Practice</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
