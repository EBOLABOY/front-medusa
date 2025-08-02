"use client"

import { useState, useEffect, useRef, useCallback } from "react"
import { Dialog, Transition } from "@headlessui/react"
import { Fragment } from "react"
import LocalizedClientLink from "@modules/common/components/localized-client-link"
import { searchProducts, getPopularSearchTerms, SearchResult } from "@lib/data/search"
import { convertToLocale } from "@lib/util/money"

interface SearchModalProps {
  isOpen: boolean
  onClose: () => void
}

const SearchModal = ({ isOpen, onClose }: SearchModalProps) => {
  const [query, setQuery] = useState("")
  const [results, setResults] = useState<SearchResult[]>([])
  const [isLoading, setIsLoading] = useState(false)
  const [popularTerms] = useState(getPopularSearchTerms())
  const inputRef = useRef<HTMLInputElement>(null)

  // Debounced search function
  const debouncedSearch = useCallback(
    debounce(async (searchQuery: string) => {
      if (searchQuery.length < 2) {
        setResults([])
        setIsLoading(false)
        return
      }

      try {
        const searchResponse = await searchProducts(searchQuery, { limit: 8 })
        setResults(searchResponse.products)
      } catch (error) {
        console.error("Search failed:", error)
        setResults([])
      } finally {
        setIsLoading(false)
      }
    }, 300),
    []
  )

  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus()
    }
  }, [isOpen])

  useEffect(() => {
    if (query.length > 0) {
      setIsLoading(true)
      debouncedSearch(query)
    } else {
      setResults([])
      setIsLoading(false)
    }
  }, [query, debouncedSearch])

  const handleClose = () => {
    setQuery("")
    setResults([])
    onClose()
  }

// Debounce utility function
function debounce<T extends (...args: any[]) => any>(
  func: T,
  wait: number
): (...args: Parameters<T>) => void {
  let timeout: NodeJS.Timeout
  return (...args: Parameters<T>) => {
    clearTimeout(timeout)
    timeout = setTimeout(() => func(...args), wait)
  }
}

  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-50" onClose={handleClose}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-start justify-center p-4 pt-16">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className="w-full max-w-2xl transform overflow-hidden rounded-lg bg-white shadow-xl transition-all">
                {/* Search Input */}
                <div className="p-6 border-b border-gray-200">
                  <div className="relative">
                    <svg
                      className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                    <input
                      ref={inputRef}
                      type="text"
                      placeholder="Search products..."
                      value={query}
                      onChange={(e) => setQuery(e.target.value)}
                      className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent outline-none text-lg"
                    />
                    <button
                      onClick={handleClose}
                      className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                    >
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </button>
                  </div>
                </div>

                {/* Search Results */}
                <div className="max-h-96 overflow-y-auto">
                  {query.length === 0 && (
                    <div className="p-8 text-center text-gray-500">
                      <svg className="w-12 h-12 mx-auto mb-4 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                      </svg>
                      <p>Start typing to search products...</p>
                    </div>
                  )}

                  {query.length > 0 && query.length < 2 && (
                    <div className="p-8 text-center text-gray-500">
                      <p>Type at least 2 characters to search</p>
                    </div>
                  )}

                  {isLoading && (
                    <div className="p-8 text-center">
                      <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-black mx-auto"></div>
                      <p className="mt-2 text-gray-500">Searching...</p>
                    </div>
                  )}

                  {!isLoading && query.length >= 2 && results.length === 0 && (
                    <div className="p-8 text-center text-gray-500">
                      <p>No products found for "{query}"</p>
                      <p className="text-sm mt-2">Try different keywords or browse our categories</p>
                    </div>
                  )}

                  {!isLoading && results.length > 0 && (
                    <div className="p-4">
                      <p className="text-sm text-gray-500 mb-4 px-2">
                        {results.length} result{results.length !== 1 ? 's' : ''} found
                      </p>
                      <div className="space-y-2">
                        {results.map((product) => (
                          <LocalizedClientLink
                            key={product.id}
                            href={`/products/${product.handle}`}
                            onClick={handleClose}
                            className="flex items-center p-3 hover:bg-gray-50 rounded-lg transition-colors"
                          >
                            <div className="w-12 h-12 bg-gray-200 rounded-lg mr-4 flex-shrink-0 overflow-hidden">
                              {product.thumbnail ? (
                                <img
                                  src={product.thumbnail}
                                  alt={product.title}
                                  className="w-full h-full object-cover"
                                />
                              ) : (
                                <div className="w-full h-full bg-gray-200"></div>
                              )}
                            </div>
                            <div className="flex-1">
                              <h3 className="font-medium text-gray-900">{product.title}</h3>
                              <div className="flex items-center gap-2 text-sm text-gray-500">
                                {product.price && (
                                  <span className="font-medium">
                                    {convertToLocale({
                                      amount: parseInt(product.price.calculated_price),
                                      currency_code: product.price.currency_code,
                                    })}
                                  </span>
                                )}
                                {product.category && (
                                  <span>• {product.category.name}</span>
                                )}
                              </div>
                            </div>
                            <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                          </LocalizedClientLink>
                        ))}
                      </div>
                    </div>
                  )}
                </div>

                {/* Quick Links and Popular Searches */}
                {query.length === 0 && (
                  <div className="p-6 border-t border-gray-200 bg-gray-50">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <h3 className="text-sm font-medium text-gray-900 mb-3">Quick Links</h3>
                        <div className="space-y-2">
                          <LocalizedClientLink
                            href="/store?category=devices"
                            onClick={handleClose}
                            className="block text-sm text-gray-600 hover:text-black transition-colors"
                          >
                            Devices
                          </LocalizedClientLink>
                          <LocalizedClientLink
                            href="/store?category=cases"
                            onClick={handleClose}
                            className="block text-sm text-gray-600 hover:text-black transition-colors"
                          >
                            Cases
                          </LocalizedClientLink>
                          <LocalizedClientLink
                            href="/store?category=accessories"
                            onClick={handleClose}
                            className="block text-sm text-gray-600 hover:text-black transition-colors"
                          >
                            Accessories
                          </LocalizedClientLink>
                        </div>
                      </div>
                      <div>
                        <h3 className="text-sm font-medium text-gray-900 mb-3">Popular Searches</h3>
                        <div className="space-y-2">
                          {popularTerms.slice(0, 4).map((term) => (
                            <button
                              key={term}
                              onClick={() => {
                                setQuery(term)
                                if (inputRef.current) {
                                  inputRef.current.focus()
                                }
                              }}
                              className="block text-sm text-gray-600 hover:text-black transition-colors text-left"
                            >
                              {term}
                            </button>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  )
}

export default SearchModal
