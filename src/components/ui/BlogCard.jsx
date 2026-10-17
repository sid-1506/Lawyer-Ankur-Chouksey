import { formatBlogDate, calculateReadingTime } from '../../lib/sanity';

export default function BlogCard({ post, onSelectPost }) {
  const formattedDate = formatBlogDate(post.publishedAt);
  const readingTime = calculateReadingTime(post.body || post.excerpt || '');
  const altText = post.coverAlt || post.title || 'Legal Insight Article';

  return (
    <article className="blog-card animate-item" id={`post-${post.slug || post._id}`}>
      {/* Cover Image or Elegant Fallback */}
      <div className="blog-card-media" onClick={() => onSelectPost(post.slug)} role="button" tabIndex={0} onKeyDown={(e) => { if (e.key === 'Enter') onSelectPost(post.slug); }} aria-label={`Read ${post.title}`}>
        {post.coverImage ? (
          <img
            src={post.coverImage}
            alt={altText}
            className="blog-card-img"
            loading="lazy"
          />
        ) : (
          <div className="blog-card-placeholder" aria-hidden="true">
            <svg
              width="48"
              height="48"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="blog-placeholder-icon"
            >
              <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path>
              <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path>
              <line x1="9" y1="7" x2="15" y2="7"></line>
              <line x1="9" y1="11" x2="15" y2="11"></line>
            </svg>
            <span className="blog-placeholder-label">ACA Legal Insights</span>
          </div>
        )}
      </div>

      <div className="blog-card-body">
        {/* Meta Row: Category + Date + Reading Time */}
        <div className="blog-card-meta">
          <span className="blog-category-tag">{post.category || 'Updates'}</span>
          <span className="blog-meta-divider" aria-hidden="true">&bull;</span>
          <span className="blog-date">{formattedDate}</span>
          <span className="blog-meta-divider" aria-hidden="true">&bull;</span>
          <span className="blog-read-time">{readingTime}</span>
        </div>

        {/* Title */}
        <h3 className="blog-card-title">
          <button
            type="button"
            className="blog-title-btn"
            onClick={() => onSelectPost(post.slug)}
            aria-label={`Read article: ${post.title}`}
          >
            {post.title}
          </button>
        </h3>

        {/* Excerpt */}
        <p className="blog-card-excerpt">
          {post.excerpt || 'Click below to read the comprehensive regulatory update and advisory notes by Ankur Chouksey & Associates.'}
        </p>

        {/* Read Article Trigger */}
        <button
          type="button"
          className="blog-read-btn"
          onClick={() => onSelectPost(post.slug)}
          aria-label={`Read article: ${post.title}`}
        >
          <span className="read-btn-text">Read Article</span>
          <span className="read-btn-icon" aria-hidden="true">
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="5" y1="12" x2="19" y2="12"></line>
              <polyline points="12 5 19 12 12 19"></polyline>
            </svg>
          </span>
        </button>
      </div>
    </article>
  );
}
