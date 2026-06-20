// src/utils/helpers.ts
// Common helper functions for formatting, generation, and data manipulation

/**
 * Generate a URL-friendly slug from text
 * @param text - Text to convert to slug (e.g., "Mobile Legends Game")
 * @returns URL-friendly slug (e.g., "mobile-legends-game")
 */
export function slugify(text: string): string {
  return text
    .toString()
    .toLowerCase()
    .trim()
    .replace(/\s+/g, '-')           // Replace spaces with -
    .replace(/[éèêë]/g, 'e')       // Accented chars to basic
    .replace(/[æ]/g, 'ae')
    .replace(/[ü]/g, 'u')
    .replace(/[ÿ]/g, 'y')
    .replace(/[ç]/g, 'c')
    .replace(/[œ]/g, 'oe')
    .replace(/[’']/g, '-')           // Apostrophes to -
    .replace(/[^a-z0-9-]/g, '')    // Remove invalid chars
    .replace(/-{2,}/g, '-')         // Replace multiple - with single -
    .replace(/^-|-$/g, '');         // Trim - from start/end
}

/**
 * Truncate text to max length with optional suffix
 * @param text - Text to truncate
 * @param maxLength - Maximum allowed length
 * @param suffix - Text to append if truncated (default: "...")
 * @returns Truncated text (not longer than maxLength)
 */
export function truncate(text: string, maxLength: number, suffix = '...'): string {
  if (text.length <= maxLength) return text;
  return text.slice(0, maxLength - suffix.length) + suffix;
}

/**
 * Generate a unique order ID
 * @param prefix - Order ID prefix (default: "ORD")
 * @returns Unique order ID (e.g., "ORD-20240620-ABC123")
 */
export function generateOrderId(prefix = 'ORD'): string {
  const date = new Date();
  const dateStr = `${date.getFullYear()}${String(date.getMonth() + 1).padStart(2, '0')}${String(date.getDate()).padStart(2, '0')}`;
  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
  let result = prefix + '-' + dateStr + '-';
  for (let i = 0; i < 6; i++) {
    result += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return result;
}

/**
 * Hash an email address for use as user identifier
 * @param email - Email address to hash
 * @returns Hashed email (safe for filenames, removes special chars)
 */
export function hashEmail(email: string): string {
  return email
    .toLowerCase()
    .replace(/[^a-z0-9]/g, '_')
    .replace(/_+/g, '_')
    .replace(/^_|_$/g, '');
}

/**
 * Convert a star rating to an array of full/empty star indicators
 * @param rating - Rating from 1-5 (or any number)
 * @param maxRating - Maximum possible rating (default: 5)
 * @returns Array of "full", "half", or "empty" strings
 */
export function getStarArray(rating: number, maxRating = 5): ('full' | 'half' | 'empty')[] {
  const stars = new Array(maxRating).fill('empty');
  const fullStars = Math.floor(rating);
  const hasHalf = rating % 1 >= 0.5;

  for (let i = 0; i < fullStars; i++) {
    stars[i] = 'full';
  }

  if (hasHalf && fullStars < maxRating) {
    stars[fullStars] = 'half';
  }

  return stars;
}

/**
 * Deep merge two objects (objects only, arrays will be replaced)
 * @param target - Target object
 * @param source - Source object(s)
 * @returns Merged object
 */
export function deepMerge<T extends Record<string, any>, S extends Partial<T>>(target: T, ...sources: S[]): T {
  for (const source of sources) {
    for (const key in source) {
      if (source[key] && typeof source[key] === 'object' && !Array.isArray(source[key])) {
        target[key] = deepMerge(target[key] || {}, source[key] as any);
      } else {
        target[key] = source[key] as any;
      }
    }
  }
  return target;
}

/**
 * Sanitize HTML to prevent XSS (basic implementation)
 * @param html - HTML string to sanitize
 * @returns Sanitized HTML (removes script tags and javascript: protocol)
 */
export function sanitizeHtml(html: string): string {
  return html
    .replace(/<script\b[^>]*>([\s\S]*?)<\/script>/gi, '')
    .replace(/javascript:/gi, '')
    .replace(/on\w+\s*=\s*"[\s\S]*?"/gi, '')
    .replace(/on\w+\s*=\s*'[\s\S]*?'/gi, '');
}