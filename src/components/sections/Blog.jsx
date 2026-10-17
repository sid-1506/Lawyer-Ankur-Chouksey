import { useState, useEffect, useRef } from 'react';
import { getLatestPosts, getPostBySlug } from '../../lib/sanity';
import BlogCard from '../ui/BlogCard';
import BlogModal from '../ui/BlogModal';
import { refreshScrollReveal } from '../../hooks/useScrollReveal';

export default function Blog() {
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  // Selected post for modal
  const [activePost, setActivePost] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const triggerButtonRef = useRef(null);

  useEffect(() => {
    const controller = new AbortController();

    getLatestPosts(controller.signal)
      .then((data) => {
        setPosts(Array.isArray(data) ? data : []);
        setIsLoading(false);
      })
      .catch((err) => {
        if (err.name !== 'AbortError') {
          console.error('Error fetching blog posts:', err);
          setHasError(true);
          setIsLoading(false);
        }
      });

    return () => {
      controller.abort();
    };
  }, []);

  // Whenever posts load, refresh scroll reveal observers to animate the cards
  useEffect(() => {
    if (!isLoading) {
      setTimeout(() => {
        refreshScrollReveal();
      }, 50);
    }
  }, [isLoading, posts]);

  const handleSelectPost = async (slug) => {
    triggerButtonRef.current = document.activeElement;

    // First set existing preview data while fetching full body
    const initialPost = posts.find((p) => p.slug === slug);
    setActivePost(initialPost || { slug });
    setIsModalOpen(true);

    try {
      const fullPost = await getPostBySlug(slug);
      if (fullPost) {
        setActivePost(fullPost);
      }
    } catch (err) {
      console.error('Failed to load full post content:', err);
    }
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setActivePost(null);
  };

  return (
    <section id="blog" className="blog-section" aria-labelledby="blog-title">
      <div className="container">
        {/* Section Heading Pattern */}
        <div className="section-intro text-center">
          <span className="section-eyebrow animate-item">Insights</span>
          <h2 id="blog-title" className="section-heading animate-item">
            Legal &amp; Compliance Insights
          </h2>
          <p className="section-subheading animate-item">
            Practical updates on company law, compliance and regulatory developments.
          </p>
          <div className="gold-divider animate-item" aria-hidden="true"></div>
        </div>

        {/* Content States */}
        {isLoading ? (
          /* Loading State: 3 Skeletons */
          <div className="blog-grid" aria-label="Loading blog articles" aria-busy="true">
            {[1, 2, 3].map((n) => (
              <div key={n} className="blog-skeleton-card">
                <div className="skeleton-media"></div>
                <div className="skeleton-body">
                  <div className="skeleton-line skeleton-meta"></div>
                  <div className="skeleton-line skeleton-title"></div>
                  <div className="skeleton-line skeleton-text"></div>
                  <div className="skeleton-line skeleton-text-short"></div>
                  <div className="skeleton-line skeleton-btn"></div>
                </div>
              </div>
            ))}
          </div>
        ) : hasError ? (
          /* Error State */
          <div className="blog-empty-state" role="status">
            <p className="blog-status-message">
              Articles are temporarily unavailable. Please try again later.
            </p>
          </div>
        ) : posts.length === 0 ? (
          /* Empty State */
          <div className="blog-empty-state" role="status">
            <div className="blog-empty-icon" aria-hidden="true">
              <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                <polyline points="14 2 14 8 20 8"></polyline>
                <line x1="16" y1="13" x2="8" y2="13"></line>
                <line x1="16" y1="17" x2="8" y2="17"></line>
              </svg>
            </div>
            <p className="blog-status-message">New articles are coming soon.</p>
          </div>
        ) : (
          /* Success: Grid of Articles */
          <div className="blog-grid" role="region" aria-label="Latest legal insight articles">
            {posts.map((post) => (
              <BlogCard
                key={post._id || post.slug}
                post={post}
                onSelectPost={handleSelectPost}
              />
            ))}
          </div>
        )}
      </div>

      {/* Post Modal Dialog */}
      <BlogModal
        post={activePost}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        triggerRef={triggerButtonRef}
      />
    </section>
  );
}
