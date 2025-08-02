import { notFound } from "next/navigation"
import { Suspense } from "react"

import InteractiveLink from "@modules/common/components/interactive-link"
import SkeletonProductGrid from "@modules/skeletons/templates/skeleton-product-grid"
import RefinementList from "@modules/store/components/refinement-list"
import { SortOptions } from "@modules/store/components/refinement-list/sort-products"
import PaginatedProducts from "@modules/store/templates/paginated-products"
import LocalizedClientLink from "@modules/common/components/localized-client-link"
import { HttpTypes } from "@medusajs/types"

export default function CategoryTemplate({
  category,
  sortBy,
  page,
  countryCode,
}: {
  category: HttpTypes.StoreProductCategory
  sortBy?: SortOptions
  page?: string
  countryCode: string
}) {
  const pageNumber = page ? parseInt(page) : 1
  const sort = sortBy || "created_at"

  if (!category || !countryCode) notFound()

  const parents = [] as HttpTypes.StoreProductCategory[]

  const getParents = (category: HttpTypes.StoreProductCategory) => {
    if (category.parent_category) {
      parents.push(category.parent_category)
      getParents(category.parent_category)
    }
  }

  getParents(category)

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          {/* Breadcrumb */}
          <nav className="flex items-center space-x-2 text-sm text-gray-500 mb-4">
            <LocalizedClientLink href="/" className="hover:text-black transition-colors">
              Home
            </LocalizedClientLink>
            {parents &&
              parents.reverse().map((parent) => (
                <span key={parent.id} className="flex items-center space-x-2">
                  <span>/</span>
                  <LocalizedClientLink
                    className="hover:text-black transition-colors"
                    href={`/categories/${parent.handle}`}
                    data-testid="breadcrumb-link"
                  >
                    {parent.name}
                  </LocalizedClientLink>
                </span>
              ))}
            <span>/</span>
            <span className="text-black font-medium">{category.name}</span>
          </nav>

          {/* Category Title */}
          <h1 className="text-3xl font-bold text-gray-900 mb-4" data-testid="category-page-title">
            {category.name}
          </h1>

          {/* Category Description */}
          {category.description && (
            <p className="text-lg text-gray-600 max-w-3xl">
              {category.description}
            </p>
          )}
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8" data-testid="category-container">
        {/* Subcategories */}
        {category.category_children && category.category_children.length > 0 && (
          <div className="mb-8">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Subcategories</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
              {category.category_children.map((c) => (
                <LocalizedClientLink
                  key={c.id}
                  href={`/categories/${c.handle}`}
                  className="bg-white p-4 rounded-lg border border-gray-200 hover:border-gray-300 hover:shadow-sm transition-all"
                >
                  <span className="text-sm font-medium text-gray-900">{c.name}</span>
                </LocalizedClientLink>
              ))}
            </div>
          </div>
        )}

        {/* Products Section */}
        <div className="flex flex-col lg:flex-row lg:items-start gap-8">
          {/* Sidebar */}
          <div className="lg:w-64 lg:flex-shrink-0">
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
              <RefinementList sortBy={sort} data-testid="sort-by-container" />
            </div>
          </div>

          {/* Products Grid */}
          <div className="flex-1">
            <Suspense
              fallback={
                <SkeletonProductGrid
                  numberOfProducts={category.products?.length ?? 8}
                />
              }
            >
              <PaginatedProducts
                sortBy={sort}
                page={pageNumber}
                categoryId={category.id}
                countryCode={countryCode}
              />
            </Suspense>
          </div>
        </div>
      </div>
    </div>
  )
}
