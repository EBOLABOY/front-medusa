"use client"

import { usePathname, useRouter, useSearchParams } from "next/navigation"
import { useCallback } from "react"

import SortProducts, { SortOptions } from "./sort-products"

type RefinementListProps = {
  sortBy: SortOptions
  search?: boolean
  'data-testid'?: string
}

const RefinementList = ({ sortBy, 'data-testid': dataTestId }: RefinementListProps) => {
  const router = useRouter()
  const pathname = usePathname()
  const searchParams = useSearchParams()

  const createQueryString = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParams)
      params.set(name, value)

      return params.toString()
    },
    [searchParams]
  )

  const setQueryParams = (name: string, value: string) => {
    const query = createQueryString(name, value)
    router.push(`${pathname}?${query}`)
  }

  return (
    <div className="space-y-4">
      {/* Sort Section */}
      <div className="bg-white border border-gray-200 rounded p-4">
        <h3 className="text-sm font-medium text-gray-900 mb-3">Sort</h3>
        <SortProducts sortBy={sortBy} setQueryParams={setQueryParams} data-testid={dataTestId} />
      </div>

      {/* Filter Sections */}
      <div className="bg-white border border-gray-200 rounded p-4">
        <h3 className="text-sm font-medium text-gray-900 mb-3">Device</h3>
        <div className="space-y-2">
          <label className="flex items-center text-sm">
            <input type="checkbox" className="rounded border-gray-300 text-black focus:ring-black mr-2" />
            <span className="text-gray-600">iPhone 16 Pro Max</span>
          </label>
          <label className="flex items-center text-sm">
            <input type="checkbox" className="rounded border-gray-300 text-black focus:ring-black mr-2" />
            <span className="text-gray-600">iPhone 16 Pro</span>
          </label>
          <label className="flex items-center text-sm">
            <input type="checkbox" className="rounded border-gray-300 text-black focus:ring-black mr-2" />
            <span className="text-gray-600">Galaxy S25 Ultra</span>
          </label>
        </div>
      </div>

      <div className="bg-white border border-gray-200 rounded p-4">
        <h3 className="text-sm font-medium text-gray-900 mb-3">Case Type</h3>
        <div className="space-y-2">
          <label className="flex items-center text-sm">
            <input type="checkbox" className="rounded border-gray-300 text-black focus:ring-black mr-2" />
            <span className="text-gray-600">Impact Case</span>
          </label>
          <label className="flex items-center text-sm">
            <input type="checkbox" className="rounded border-gray-300 text-black focus:ring-black mr-2" />
            <span className="text-gray-600">Clear Case</span>
          </label>
          <label className="flex items-center text-sm">
            <input type="checkbox" className="rounded border-gray-300 text-black focus:ring-black mr-2" />
            <span className="text-gray-600">Ultra Bounce Case</span>
          </label>
        </div>
      </div>

      <div className="bg-white border border-gray-200 rounded p-4">
        <h3 className="text-sm font-medium text-gray-900 mb-3">Price</h3>
        <div className="space-y-2">
          <label className="flex items-center text-sm">
            <input type="checkbox" className="rounded border-gray-300 text-black focus:ring-black mr-2" />
            <span className="text-gray-600">Under $25</span>
          </label>
          <label className="flex items-center text-sm">
            <input type="checkbox" className="rounded border-gray-300 text-black focus:ring-black mr-2" />
            <span className="text-gray-600">$25 - $50</span>
          </label>
          <label className="flex items-center text-sm">
            <input type="checkbox" className="rounded border-gray-300 text-black focus:ring-black mr-2" />
            <span className="text-gray-600">Over $50</span>
          </label>
        </div>
      </div>
    </div>
  )
}

export default RefinementList
