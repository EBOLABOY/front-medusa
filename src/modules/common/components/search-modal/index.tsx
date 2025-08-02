"use client"

import { useState, useEffect, useRef } from "react"
import { Dialog, Transition } from "@headlessui/react"
import { Fragment } from "react"
import LocalizedClientLink from "@modules/common/components/localized-client-link"

interface SearchModalProps {
  isOpen: boolean
  onClose: () => void
}

const SearchModal = ({ isOpen, onClose }: SearchModalProps) => {
  const [query, setQuery] = useState("")
  const [results, setResults] = useState<any[]>([])
  const [isLoading, setIsLoading] = useState(false)
  const inputRef = useRef<HTMLInputElement>(null)

  // Mock search results - in real app, this would call an API
  const mockResults = [
    { id: 1, title: "iPhone 16 Pro Case", price: "$29.99", image: "/placeholder.jpg", handle: "iphone-16-pro-case" },
    { id: 2, title: "Samsung Galaxy S24 Case", price: "$24.99", image: "/placeholder.jpg", handle: "samsung-s24-case" },
    { id: 3, title: "Wireless Charger", price: "$39.99", image: "/placeholder.jpg", handle: "wireless-charger" },
    { id: 4, title: "Phone Stand", price: "$19.99", image: "/placeholder.jpg", handle: "phone-stand" },
    { id: 5, title: "Screen Protector", price: "$14.99", image: "/placeholder.jpg", handle: "screen-protector" },
  ]

  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus()
    }
  }, [isOpen])

  useEffect(() => {
    if (query.length > 2) {
      setIsLoading(true)
      // Simulate API call
      setTimeout(() => {
        const filtered = mockResults.filter(item =>
          item.title.toLowerCase().includes(query.toLowerCase())
        )
        setResults(filtered)
        setIsLoading(false)
      }, 300)
    } else {
      setResults([])
    }
  }, [query])

  const handleClose = () => {
    setQuery("")
    setResults([])
    onClose()
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

                  {query.length > 0 && query.length <= 2 && (
                    <div className="p-8 text-center text-gray-500">
                      <p>Type at least 3 characters to search</p>
                    </div>
                  )}

                  {isLoading && (
                    <div className="p-8 text-center">
                      <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-black mx-auto"></div>
                      <p className="mt-2 text-gray-500">Searching...</p>
                    </div>
                  )}

                  {!isLoading && query.length > 2 && results.length === 0 && (
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
                            <div className="w-12 h-12 bg-gray-200 rounded-lg mr-4 flex-shrink-0">
                              {/* Product image placeholder */}
                            </div>
                            <div className="flex-1">
                              <h3 className="font-medium text-gray-900">{product.title}</h3>
                              <p className="text-sm text-gray-500">{product.price}</p>
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

                {/* Quick Links */}
                {query.length === 0 && (
                  <div className="p-6 border-t border-gray-200 bg-gray-50">
                    <h3 className="text-sm font-medium text-gray-900 mb-3">Quick Links</h3>
                    <div className="grid grid-cols-2 gap-2">
                      <LocalizedClientLink
                        href="/store?category=devices"
                        onClick={handleClose}
                        className="text-sm text-gray-600 hover:text-black transition-colors"
                      >
                        Devices
                      </LocalizedClientLink>
                      <LocalizedClientLink
                        href="/store?category=cases"
                        onClick={handleClose}
                        className="text-sm text-gray-600 hover:text-black transition-colors"
                      >
                        Cases
                      </LocalizedClientLink>
                      <LocalizedClientLink
                        href="/store?category=accessories"
                        onClick={handleClose}
                        className="text-sm text-gray-600 hover:text-black transition-colors"
                      >
                        Accessories
                      </LocalizedClientLink>
                      <LocalizedClientLink
                        href="/store?custom=true"
                        onClick={handleClose}
                        className="text-sm text-gray-600 hover:text-black transition-colors"
                      >
                        Customize
                      </LocalizedClientLink>
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
