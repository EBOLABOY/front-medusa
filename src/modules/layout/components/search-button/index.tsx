"use client"

import { useState } from "react"
import SearchModal from "@modules/common/components/search-modal"

const SearchButton = () => {
  const [isSearchOpen, setIsSearchOpen] = useState(false)

  return (
    <>
      <button
        onClick={() => setIsSearchOpen(true)}
        className="text-sm font-medium text-gray-700 hover:text-black transition-colors flex items-center gap-2 py-2"
        data-testid="search-button"
      >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
        <span className="hidden lg:inline">Search</span>
      </button>

      <SearchModal 
        isOpen={isSearchOpen} 
        onClose={() => setIsSearchOpen(false)} 
      />
    </>
  )
}

export default SearchButton
