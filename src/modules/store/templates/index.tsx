import { Suspense } from "react"

import SkeletonProductGrid from "@modules/skeletons/templates/skeleton-product-grid"
import RefinementList from "@modules/store/components/refinement-list"
import { SortOptions } from "@modules/store/components/refinement-list/sort-products"

import PaginatedProducts from "./paginated-products"

const StoreTemplate = ({
  sortBy,
  page,
  countryCode,
}: {
  sortBy?: SortOptions
  page?: string
  countryCode: string
}) => {
  const pageNumber = page ? parseInt(page) : 1
  const sort = sortBy || "created_at"

  return (
    <div className="bg-white min-h-screen">
      {/* CASETiFY-style header - 更简洁 */}
      <div className="bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <h1
              className="text-xl font-medium text-gray-900"
              data-testid="store-page-title"
            >
              All Products
            </h1>
            <div className="text-xs text-gray-500">
              {/* 产品数量会在这里显示 */}
            </div>
          </div>
        </div>
      </div>

      <div
        className="flex flex-col lg:flex-row lg:items-start max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6"
        data-testid="category-container"
      >
        {/* Sidebar - 更紧凑 */}
        <div className="lg:w-56 lg:flex-shrink-0 mb-6 lg:mb-0 lg:mr-6">
          <RefinementList sortBy={sort} />
        </div>

        {/* Main content */}
        <div className="flex-1">
          <Suspense fallback={<SkeletonProductGrid />}>
            <PaginatedProducts
              sortBy={sort}
              page={pageNumber}
              countryCode={countryCode}
            />
          </Suspense>
        </div>
      </div>
    </div>
  )
}

export default StoreTemplate
