import { useState } from 'react';
import { servicesData } from '../data/servicesData';
import ServiceCard from './ServiceCard';

export default function Services() {
  const [openServices, setOpenServices] = useState([]);

  const handleToggle = (id) => {
    setOpenServices((prev) => {
      const isCurrentlyOpen = prev.includes(id);
      const isMobile = typeof window !== 'undefined' && window.innerWidth <= 768;

      if (isCurrentlyOpen) {
        return prev.filter((item) => item !== id);
      } else {
        if (isMobile) {
          // Rule: Only one service may be open at a time on mobile (width <= 768px)
          return [id];
        } else {
          return [...prev, id];
        }
      }
    });
  };

  return (
    <section id="services" className="services-section" aria-labelledby="services-title">
      <div className="container">
        <div className="section-intro text-center">
          <span className="section-eyebrow animate-item">Practice Areas</span>
          <h2 id="services-title" className="section-heading animate-item">
            Areas of Practice
          </h2>
          <p className="section-subheading animate-item">
            Integrated corporate, secretarial and regulatory support for organisations at every stage of business.
          </p>
          <div className="gold-divider animate-item" aria-hidden="true"></div>
        </div>

        {/* Services Grid: 10 Service Items */}
        <div className="services-grid" role="region" aria-label="Services list accordion">
          {servicesData.map((service) => (
            <ServiceCard
              key={service.id}
              service={service}
              isOpen={openServices.includes(service.id)}
              onToggle={handleToggle}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
