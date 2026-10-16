export default function MissionVision() {
  return (
    <section id="mission-vision" className="mission-vision-section" aria-labelledby="mv-heading">
      <div className="container">
        <h2 id="mv-heading" className="sr-only">Our Mission and Vision</h2>
        <div className="mv-grid">
          {/* Mission Column */}
          <div className="mv-card mv-card-mission animate-mv-left">
            <div className="mv-decorative-number" aria-hidden="true">01</div>
            <div className="mv-content">
              <span className="mv-tag">OUR MISSION</span>
              <h3 className="mv-title">Adding Value Through Quality &amp; Precision</h3>
              <p className="mv-text">
                Ankur Chouksey &amp; Associates strives to widen its client base and achieve client satisfaction through the professional delivery of services. The firm aims to add value to client operations through quality and timely services, resulting in adherence to statutory milestones.
              </p>
            </div>
          </div>

          {/* Vision Column */}
          <div className="mv-card mv-card-vision animate-mv-right">
            <div className="mv-decorative-number" aria-hidden="true">02</div>
            <div className="mv-content">
              <span className="mv-tag">OUR VISION</span>
              <h3 className="mv-title">Exemplary Standards of Corporate Governance</h3>
              <p className="mv-text">
                Ankur Chouksey &amp; Associates intends to be a trusted service provider in the field of Company Law and other Corporate Laws, leading by example through high standards of professionalism and work ethics.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
