import React, { Suspense } from "react"

import ImageGallery from "@modules/products/components/image-gallery"
import ProductActions from "@modules/products/components/product-actions"
import ProductOnboardingCta from "@modules/products/components/product-onboarding-cta"
import ProductTabs from "@modules/products/components/product-tabs"
import RelatedProducts from "@modules/products/components/related-products"
import ProductInfo from "@modules/products/templates/product-info"
import ProductReviews from "@modules/products/components/product-reviews"
import ProductSpecs from "@modules/products/components/product-specs"
import StockIndicator from "@modules/products/components/stock-indicator"
import Breadcrumb from "@modules/common/components/breadcrumb"
import SkeletonRelatedProducts from "@modules/skeletons/templates/skeleton-related-products"
import { notFound } from "next/navigation"
import ProductActionsWrapper from "./product-actions-wrapper"
import { HttpTypes } from "@medusajs/types"

type ProductTemplateProps = {
  product: HttpTypes.StoreProduct
  region: HttpTypes.StoreRegion
  countryCode: string
}

const ProductTemplate: React.FC<ProductTemplateProps> = ({
  product,
  region,
  countryCode,
}) => {
  if (!product || !product.id) {
    return notFound()
  }

  // Generate breadcrumb items
  const breadcrumbItems = [
    { title: "Products", href: "/products" },
    ...(product.collection ? [{ title: product.collection.title, href: `/collections/${product.collection.handle}` }] : []),
    { title: product.title }
  ]

  return (
    <>
      {/* Breadcrumb Navigation */}
      <div className="bg-gray-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <Breadcrumb items={breadcrumbItems} />
        </div>
      </div>

      {/* Main Product Section - CASETiFY Layout */}
      <div className="bg-white min-h-screen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 py-6 lg:py-12">

            {/* Image Gallery - Left Side (CASETiFY Style) */}
            <div className="lg:col-span-8 order-1">
              <div className="sticky top-6">
                <ImageGallery images={product?.images || []} />
              </div>
            </div>

            {/* Product Info & Purchase Actions - Right Side */}
            <div className="lg:col-span-4 order-2">
              <div className="space-y-6">
                <ProductInfo product={product} />

                {/* Stock Indicator */}
                <StockIndicator stockLevel="in_stock" stockCount={15} />

                {/* Purchase Actions */}
                <Suspense
                  fallback={
                    <ProductActions
                      disabled={true}
                      product={product}
                      region={region}
                    />
                  }
                >
                  <ProductActionsWrapper id={product.id} region={region} />
                </Suspense>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Product Details Section */}
      <div className="bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Product Specifications */}
            <div className="lg:col-span-2">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Product Details</h2>
              <ProductSpecs product={product} />
            </div>

            {/* Customer Reviews */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Customer Reviews</h2>
              <ProductReviews productId={product.id} />
            </div>
          </div>

          {/* Additional Product Information */}
          <div className="mt-12 pt-12 border-t border-gray-200">
            <ProductTabs product={product} />
          </div>
        </div>
      </div>

      {/* Related Products Section */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Suspense fallback={<SkeletonRelatedProducts />}>
            <RelatedProducts product={product} countryCode={countryCode} />
          </Suspense>
        </div>
      </div>
    </>
  )
}

export default ProductTemplate
