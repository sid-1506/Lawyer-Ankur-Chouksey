import { useEffect, useRef } from 'react';
import { PortableText } from '@portabletext/react';
import { formatBlogDate } from '../../lib/sanity';

export default function BlogModal({ post, isOpen, onClose, triggerRef }) {
  const modalRef = useRef(null);
  const closeBtnRef = useRef(null);

  // Body scroll lock & focus management
  useEffect(() => {
    if (isOpen) {
      document.body.classList.add('modal-open');

      // Focus close button on open
      setTimeout(() => {
        if (closeBtnRef.current) {
          closeBtnRef.current.focus();
        }
      }, 50);
    } else {
      document.body.classList.remove('modal-open');
      // Return focus to triggering button
      if (triggerRef && triggerRef.current) {
        triggerRef.current.focus();
      }
    }

    return () => {
      document.body.classList.remove('modal-open');
    };
  }, [isOpen, triggerRef]);

  // Focus trap & Escape key listener
  const handleKeyDown = (e) => {
    if (e.key === 'Escape') {
      e.preventDefault();
      onClose();
      return;
    }

    if (e.key === 'Tab' && modalRef.current) {
      const focusableElements = modalRef.current.querySelectorAll(
        'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
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

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  const handleContactClick = () => {
    onClose();
    setTimeout(() => {
      const contactSection = document.getElementById('contact');
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: 'smooth' });
      }
    }, 150);
  };

  if (!isOpen || !post) return null;

  const formattedDate = formatBlogDate(post.publishedAt);
  const authorName = post.author || 'CS Ankur Chouksey';

  // Custom PortableText components strictly matching ACA design system
  const portableTextComponents = {
    block: {
      h2: ({ children }) => <h2 className="blog-body-h2">{children}</h2>,
      h3: ({ children }) => <h3 className="blog-body-h3">{children}</h3>,
      normal: ({ children }) => <p className="blog-body-p">{children}</p>,
      blockquote: ({ children }) => (
        <blockquote className="blog-body-quote">
          {children}
        </blockquote>
      ),
    },
    list: {
      bullet: ({ children }) => <ul className="blog-body-bullet-list">{children}</ul>,
      number: ({ children }) => <ol className="blog-body-numbered-list">{children}</ol>,
    },
    listItem: {
      bullet: ({ children }) => <li>{children}</li>,
      number: ({ children }) => <li>{children}</li>,
    },
    marks: {
      link: ({ value, children }) => {
        const target = (value?.href || '').startsWith('http') ? '_blank' : undefined;
        return (
          <a
            href={value?.href}
            target={target}
            rel={target === '_blank' ? 'noopener noreferrer' : undefined}
            className="blog-body-link"
          >
            {children}
          </a>
        );
      },
      strong: ({ children }) => <strong className="blog-body-strong">{children}</strong>,
      em: ({ children }) => <em>{children}</em>,
    },
    types: {
      image: ({ value }) => {
        if (!value?.asset?._ref && !value?.asset?.url) return null;
        const imageUrl = value.asset.url || '';
        return (
          <figure className="blog-body-figure">
            <img
              src={imageUrl}
              alt={value.alt || post.title}
              className="blog-body-image"
              loading="lazy"
            />
            {value.caption && (
              <figcaption className="blog-body-caption">{value.caption}</figcaption>
            )}
          </figure>
        );
      },
    },
  };

  return (
    <div
      className="modal-backdrop is-visible"
      onClick={handleBackdropClick}
      onKeyDown={handleKeyDown}
      role="dialog"
      aria-modal="true"
      aria-labelledby="blog-modal-title"
      ref={modalRef}
    >
      <div className="modal-dialog blog-modal-dialog">
        {/* Modal Header */}
        <div className="blog-modal-header">
          <div className="blog-modal-top-row">
            <div className="blog-modal-meta">
              <span className="blog-category-tag">{post.category || 'Legal Updates'}</span>
              <span className="blog-meta-divider" aria-hidden="true">&bull;</span>
              <span className="blog-date">{formattedDate}</span>
            </div>

            <button
              ref={closeBtnRef}
              type="button"
              className="blog-modal-close-btn"
              onClick={onClose}
              aria-label="Close article dialog"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>
          </div>

          <h2 id="blog-modal-title" className="blog-modal-title">
            {post.title}
          </h2>

          <div className="blog-modal-byline">
            <span className="byline-prefix">Published by</span>{' '}
            <strong className="byline-author">{authorName}</strong>
            <span className="byline-role"> &bull; Company Secretary in Practice</span>
          </div>

          <div className="gold-divider-left" aria-hidden="true"></div>
        </div>

        {/* Modal Scrollable Body */}
        <div className="modal-body blog-modal-body" tabIndex={0} aria-label="Article text content">
          {/* Main Cover Image if present */}
          {post.coverImage && (
            <div className="blog-modal-cover">
              <img
                src={post.coverImage}
                alt={post.coverAlt || post.title}
                className="blog-modal-cover-img"
              />
            </div>
          )}

          {/* Portable Text Content or Excerpt fallback */}
          {post.body && Array.isArray(post.body) && post.body.length > 0 ? (
            <div className="blog-portable-text">
              <PortableText value={post.body} components={portableTextComponents} />
            </div>
          ) : (
            <div className="blog-fallback-text">
              <p className="lead-paragraph">{post.excerpt}</p>
              <p>
                For detailed consultation, regulatory circular references, or specific advisory regarding this topic, please get in touch with our practice team.
              </p>
            </div>
          )}
        </div>

        {/* Modal Actions Footer */}
        <div className="modal-footer blog-modal-footer">
          <div className="blog-modal-actions">
            <button
              type="button"
              className="btn btn-secondary"
              onClick={onClose}
            >
              Close
            </button>
            <button
              type="button"
              className="btn btn-primary"
              onClick={handleContactClick}
            >
              Contact Us Regarding This
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
