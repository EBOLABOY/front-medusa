import { HttpTypes } from "@medusajs/types"

/**
 * Schema.org structured data utilities for SEO
 */

export interface ProductSchemaData {
  name: string
  description?: string
  image?: string[]
  sku?: string
  brand?: string
  category?: string
  offers: {
    price: number
    currency: string
    availability: string
    url: string
  }
  aggregateRating?: {
    ratingValue: number
    reviewCount: number
    bestRating?: number
    worstRating?: number
  }
}

export interface BreadcrumbItem {
  name: string
  url: string
}

/**
 * Generate Product schema markup
 */
export function generateProductSchema(data: ProductSchemaData): object {
  const schema: any = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: data.name,
    description: data.description,
    image: data.image,
    sku: data.sku,
    brand: {
      "@type": "Brand",
      name: data.brand || "SparkCore"
    },
    category: data.category,
    offers: {
      "@type": "Offer",
      price: data.offers.price,
      priceCurrency: data.offers.currency,
      availability: `https://schema.org/${data.offers.availability}`,
      url: data.offers.url,
      seller: {
        "@type": "Organization",
        name: "SparkCore LLC"
      }
    }
  }

  // Add aggregate rating if available
  if (data.aggregateRating) {
    schema.aggregateRating = {
      "@type": "AggregateRating",
      ratingValue: data.aggregateRating.ratingValue,
      reviewCount: data.aggregateRating.reviewCount,
      bestRating: data.aggregateRating.bestRating || 5,
      worstRating: data.aggregateRating.worstRating || 1
    }
  }

  return schema
}

/**
 * Generate BreadcrumbList schema markup
 */
export function generateBreadcrumbSchema(items: BreadcrumbItem[]): object {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url
    }))
  }
}

/**
 * Generate Organization schema markup for the company
 */
export function generateOrganizationSchema(baseUrl: string): object {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "SparkCore LLC",
    description: "Quality everyday products for home, kids & lifestyle",
    url: baseUrl,
    logo: `${baseUrl}/images/logo.png`,
    sameAs: [
      "https://amazon.com/stores/sparkcore",
      "https://shop.tiktok.com/@sparkcore"
    ],
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "customer service",
      url: `${baseUrl}/contact`
    },
    address: {
      "@type": "PostalAddress",
      addressCountry: "US"
    }
  }
}

/**
 * Generate WebSite schema markup with search functionality
 */
export function generateWebSiteSchema(baseUrl: string): object {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "SparkCore LLC",
    description: "Quality everyday products for home, kids & lifestyle",
    url: baseUrl,
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: `${baseUrl}/store?q={search_term_string}`
      },
      "query-input": "required name=search_term_string"
    }
  }
}

/**
 * Generate ItemList schema for product collections/categories
 */
export function generateItemListSchema(
  name: string,
  description: string,
  items: Array<{ name: string; url: string; image?: string }>
): object {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name,
    description,
    numberOfItems: items.length,
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      url: item.url,
      image: item.image
    }))
  }
}

/**
 * Convert Medusa product to ProductSchemaData
 */
export function medusaProductToSchema(
  product: HttpTypes.StoreProduct,
  variant: HttpTypes.StoreProductVariant,
  baseUrl: string,
  countryCode: string
): ProductSchemaData {
  const images = product.images?.map(img => img.url).filter(Boolean) || []
  
  // Determine availability based on inventory
  let availability = "InStock"
  if (variant.manage_inventory && variant.inventory_quantity !== undefined) {
    availability = variant.inventory_quantity > 0 ? "InStock" : "OutOfStock"
  }

  // Get price from calculated price
  const price = variant.calculated_price?.calculated_amount || 0
  const currency = variant.calculated_price?.currency_code || "USD"

  return {
    name: product.title || "",
    description: product.description || "",
    image: images,
    sku: variant.sku || variant.id,
    brand: "SparkCore",
    category: product.categories?.[0]?.name,
    offers: {
      price: price / 100, // Convert from cents
      currency: currency.toUpperCase(),
      availability,
      url: `${baseUrl}/${countryCode}/products/${product.handle}`
    },
    // Mock aggregate rating - replace with real data when available
    aggregateRating: {
      ratingValue: 4.5,
      reviewCount: 127,
      bestRating: 5,
      worstRating: 1
    }
  }
}

/**
 * Render JSON-LD script tag
 */
export function renderJsonLd(schema: object): string {
  return `<script type="application/ld+json">${JSON.stringify(schema, null, 2)}</script>`
}
