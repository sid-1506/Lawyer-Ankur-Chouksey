/**
 * Sanity CMS Client & Fetch Utilities
 * Direct HTTP API + GROQ (Zero heavy SDK dependency)
 */

export const SANITY_PROJECT_ID = 'p5l1yo36';
export const SANITY_DATASET = 'production';
export const SANITY_API_VERSION = 'v2025-01-01';

const BASE_URL = `https://${SANITY_PROJECT_ID}.apicdn.sanity.io/${SANITY_API_VERSION}/data/query/${SANITY_DATASET}`;

/**
 * Execute a GROQ query against Sanity HTTP API
 * @param {string} query GROQ query string
 * @param {Record<string, string>} [params] Query parameters
 * @param {AbortSignal} [signal] Optional AbortSignal for cleanup
 * @returns {Promise<any>}
 */
export async function sanityFetch(query, params = {}, signal) {
  const url = new URL(BASE_URL);
  url.searchParams.set('query', query);

  for (const [key, value] of Object.entries(params)) {
    url.searchParams.set(`$${key}`, JSON.stringify(value));
  }

  const response = await fetch(url.toString(), { signal });
  if (!response.ok) {
    throw new Error(`Sanity query failed: ${response.status} ${response.statusText}`);
  }

  const data = await response.json();
  return data.result;
}

/**
 * Fetch latest 3 published blog posts
 * @param {AbortSignal} [signal]
 */
export async function getLatestPosts(signal) {
  const query = `*[_type=="post" && defined(slug.current)] | order(publishedAt desc)[0...3]{
    _id,
    title,
    "slug": slug.current,
    excerpt,
    category,
    publishedAt,
    "coverImage": coverImage.asset->url,
    "coverAlt": coverImage.alt,
    author
  }`;

  return sanityFetch(query, {}, signal);
}

/**
 * Fetch full post with body by slug
 * @param {string} slug
 * @param {AbortSignal} [signal]
 */
export async function getPostBySlug(slug, signal) {
  const cleanSlug = slug.replace(/[^a-zA-Z0-9-_]/g, '');
  const query = `*[_type=="post" && slug.current == "${cleanSlug}"][0]{
    _id,
    title,
    "slug": slug.current,
    excerpt,
    category,
    publishedAt,
    "coverImage": coverImage.asset->url,
    "coverAlt": coverImage.alt,
    author,
    body
  }`;

  return sanityFetch(query, {}, signal);
}

/**
 * Format ISO datetime string to Indian English date (e.g., "12 Oct 2026")
 * @param {string} dateString
 * @returns {string}
 */
export function formatBlogDate(dateString) {
  if (!dateString) return '';
  const date = new Date(dateString);
  if (isNaN(date.getTime())) return '';

  return date.toLocaleDateString('en-IN', {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
  });
}

/**
 * Calculate estimated reading time in minutes
 * @param {string|Array} textOrBlocks
 * @returns {string}
 */
export function calculateReadingTime(textOrBlocks) {
  let wordCount = 0;

  if (typeof textOrBlocks === 'string') {
    wordCount = textOrBlocks.trim().split(/\s+/).length;
  } else if (Array.isArray(textOrBlocks)) {
    // Extract text from Portable Text blocks
    for (const block of textOrBlocks) {
      if (block && block.children && Array.isArray(block.children)) {
        for (const child of block.children) {
          if (child && typeof child.text === 'string') {
            wordCount += child.text.trim().split(/\s+/).length;
          }
        }
      }
    }
  }

  // Base read time estimation (average 200 words per minute)
  const minutes = Math.max(1, Math.ceil(wordCount / 200));
  return `${minutes} min read`;
}
