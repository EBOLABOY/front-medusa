/**
 * Environment utilities for getting configuration values
 */

/**
 * Get the base URL for the application
 */
export function getBaseURL(): string {
  // In production, use the configured base URL
  if (process.env.NEXT_PUBLIC_BASE_URL) {
    return process.env.NEXT_PUBLIC_BASE_URL
  }

  // Fallback to Vercel URL if available
  if (process.env.NEXT_PUBLIC_VERCEL_URL) {
    return `https://${process.env.NEXT_PUBLIC_VERCEL_URL}`
  }

  // Development fallback
  if (process.env.NODE_ENV === 'development') {
    return 'http://localhost:8000'
  }

  // Default fallback
  return 'https://sparkcore.com'
}

/**
 * Get the Medusa backend URL
 */
export function getBackendURL(): string {
  return process.env.MEDUSA_BACKEND_URL || 'http://localhost:9000'
}

/**
 * Get the default region
 */
export function getDefaultRegion(): string {
  return process.env.NEXT_PUBLIC_DEFAULT_REGION || 'us'
}

/**
 * Check if we're in production environment
 */
export function isProduction(): boolean {
  return process.env.NODE_ENV === 'production'
}

/**
 * Check if we're in development environment
 */
export function isDevelopment(): boolean {
  return process.env.NODE_ENV === 'development'
}

/**
 * Get the revalidate secret for on-demand revalidation
 */
export function getRevalidateSecret(): string | undefined {
  return process.env.REVALIDATE_SECRET
}
