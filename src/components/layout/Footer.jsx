export default function Footer({ onOpenDisclaimer }) {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="container footer-container">
        <div className="footer-top">
          <div className="footer-brand">
            <img
              src="/img/Logo.jpeg"
              alt="Ankur Chouksey & Associates, Company Secretaries"
              className="footer-logo"
              width="220"
              height="55"
            />
            <p className="footer-firm-title">Ankur Chouksey &amp; Associates</p>
            <p className="footer-firm-subtitle">Company Secretaries</p>
            <p className="footer-firm-desc">
              Corporate law, compliance, governance and strategic advisory services.
            </p>
          </div>

          <div className="footer-nav-col">
            <h4 className="footer-heading">Quick Links</h4>
            <ul className="footer-links">
              <li><a href="#home">Home</a></li>
              <li><a href="#about">About Us</a></li>
              <li><a href="#services">Areas of Practice</a></li>
              <li><a href="#mission-vision">Mission &amp; Vision</a></li>
              <li><a href="#team">Our Team</a></li>
              <li><a href="#why-us">Why Us</a></li>
              <li><a href="#contact">Contact</a></li>
              <li><a href="#blog">Blog</a></li>
            </ul>
          </div>

          <div className="footer-contact-col">
            <h4 className="footer-heading">Contact Information</h4>
            <ul className="footer-links">
              <li>
                <span className="footer-sublabel">Phone:</span>
                <a href="tel:+918602782727">+91 86027 82727</a> / <a href="tel:+918839106961">+91 88391 06961</a>
              </li>
              <li>
                <span className="footer-sublabel">Email:</span>
                <a href="mailto:csankurchouksey@gmail.com">csankurchouksey@gmail.com</a>
              </li>
              <li>
                <span className="footer-sublabel">Inquiries:</span>
                <a href="mailto:info@csankurchouksey.com">info@csankurchouksey.com</a>
              </li>
              <li>
                <span className="footer-sublabel">Office:</span>
                <span className="footer-address-inline">
                  5/12, Third Floor, Amer Complex, Infront of Punjab National Bank, M. P. Nagar Zone-2, Bhopal, Madhya Pradesh – 462011
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-divider" aria-hidden="true"></div>

        <div className="footer-middle">
          <p className="footer-regulatory-note">
            The information on this website is provided for general informational purposes and does not constitute professional advice or solicitation.
          </p>
        </div>

        <div className="footer-bottom">
          <p className="footer-copyright">
            &copy; <span id="current-year">{currentYear}</span> Ankur Chouksey &amp; Associates. All rights reserved.
          </p>
          <div className="footer-legal-links">
            <button
              type="button"
              id="footer-disclaimer-btn"
              className="footer-text-btn"
              onClick={onOpenDisclaimer}
            >
              Disclaimer
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
