export default function ServiceCard({ service, isOpen, onToggle }) {
  return (
    <article className="service-card animate-item" id={service.id}>
      <div className="service-card-header">
        <div className="service-meta">
          <span className="service-number">{service.number}</span>
          <h3 className="service-title">{service.title}</h3>
        </div>
        <p className="service-summary">{service.summary}</p>
      </div>

      <button
        type="button"
        className="service-toggle-btn"
        aria-expanded={isOpen}
        aria-controls={service.detailId}
        id={service.btnId}
        onClick={() => onToggle(service.id)}
      >
        <span className="toggle-text">{isOpen ? 'Hide Details' : 'View Details'}</span>
        <span className="toggle-icon" aria-hidden="true">
          <svg
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1="12" y1="5" x2="12" y2="19"></line>
            <line x1="5" y1="12" x2="19" y2="12"></line>
          </svg>
        </span>
      </button>

      <div
        id={service.detailId}
        className={`service-details ${isOpen ? 'is-open' : ''}`}
        role="region"
        aria-labelledby={service.btnId}
        hidden={!isOpen}
      >
        <ul className="details-list">
          {service.items.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
    </article>
  );
}
