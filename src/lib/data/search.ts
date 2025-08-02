import { HttpTypes } from "@medusajs/types"
import { sdk } from "@lib/config"

export interface SearchResult {
  id: string
  title: string
  handle: string
  thumbnail?: string | null
  price?: {
    calculated_price: string
    currency_code: string
  }
  collection?: {
    title: string
    handle: string
  }
  category?: {
    name: string
    handle: string
  }
}

export interface SearchResponse {
  products: SearchResult[]
  total: number
  query: string
}

/**
 * Search products by query string
 */
export async function searchProducts(
  query: string,
  options: {
    limit?: number
    offset?: number
    region_id?: string
    currency_code?: string
  } = {}
): Promise<SearchResponse> {
  const { limit = 10, offset = 0, region_id, currency_code } = options

  try {
    const { products, count } = await sdk.store.product.list({
      q: query,
      limit,
      offset,
      region_id,
      fields: "*variants.calculated_price,*collection,*categories",
    })

    const searchResults: SearchResult[] = products.map((product: HttpTypes.StoreProduct) => ({
      id: product.id!,
      title: product.title!,
      handle: product.handle!,
      thumbnail: product.thumbnail || undefined,
      price: product.variants?.[0]?.calculated_price ? {
        calculated_price: String(product.variants[0].calculated_price.calculated_amount || 0),
        currency_code: product.variants[0].calculated_price.currency_code || 'usd',
      } : undefined,
      collection: product.collection ? {
        title: product.collection.title!,
        handle: product.collection.handle!,
      } : undefined,
      category: product.categories?.[0] ? {
        name: product.categories[0].name!,
        handle: product.categories[0].handle!,
      } : undefined,
    }))

    return {
      products: searchResults,
      total: count || 0,
      query,
    }
  } catch (error) {
    console.error("Search error:", error)
    return {
      products: [],
      total: 0,
      query,
    }
  }
}

/**
 * Get search suggestions based on query
 */
export async function getSearchSuggestions(
  query: string,
  limit: number = 5
): Promise<string[]> {
  try {
    // Get products that match the query
    const { products } = await sdk.store.product.list({
      q: query,
      limit: limit * 2, // Get more to filter unique suggestions
      fields: "title,collection.title,categories.name",
    })

    const suggestions = new Set<string>()

    products.forEach((product: HttpTypes.StoreProduct) => {
      // Add product title words
      const titleWords = product.title?.toLowerCase().split(' ') || []
      titleWords.forEach(word => {
        if (word.includes(query.toLowerCase()) && word.length > 2) {
          suggestions.add(word)
        }
      })

      // Add collection title
      if (product.collection?.title?.toLowerCase().includes(query.toLowerCase())) {
        suggestions.add(product.collection.title)
      }

      // Add category names
      product.categories?.forEach(category => {
        if (category.name?.toLowerCase().includes(query.toLowerCase())) {
          suggestions.add(category.name)
        }
      })
    })

    return Array.from(suggestions).slice(0, limit)
  } catch (error) {
    console.error("Suggestions error:", error)
    return []
  }
}

/**
 * Get popular search terms (mock implementation)
 */
export function getPopularSearchTerms(): string[] {
  return [
    "iPhone case",
    "Samsung case", 
    "Wireless charger",
    "Screen protector",
    "Phone stand",
    "MagSafe",
    "Clear case",
    "Leather case",
  ]
}
