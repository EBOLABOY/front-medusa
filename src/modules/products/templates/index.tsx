import React, { Suspense } from "react"

import ImageGallery from "@modules/products/components/image-gallery"
import ProductActions from "@modules/products/components/product-actions"
import ProductOnboardingCta from "@modules/products/components/product-onboarding-cta"
import ProductTabs from "@modules/products/components/product-tabs"
import RelatedProducts from "@modules/products/components/related-products"
import ProductInfo from "@modules/products/templates/product-info"
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

  return (
    <>
      {/* Hero Section - CASETiFY Style */}
      <div className="bg-gradient-to-br from-casetify-neutral-50 to-white min-h-screen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 py-8 lg:py-16">

            {/* Product Info - Left Side */}
            <div className="lg:col-span-4 order-2 lg:order-1">
              <div className="sticky top-24 space-y-8">
                <ProductInfo product={product} />

                {/* Product Tabs - Mobile Hidden, Desktop Visible */}
                <div className="hidden lg:block">
                  <ProductTabs product={product} />
                </div>
              </div>
            </div>

            {/* Image Gallery - Center */}
            <div className="lg:col-span-5 order-1 lg:order-2">
              <div className="relative">
                <ImageGallery images={product?.images || []} />
              </div>
            </div>

            {/* Purchase Actions - Right Side */}
            <div className="lg:col-span-3 order-3">
              <div className="sticky top-24 space-y-6">
                <div className="bg-white rounded-2xl shadow-lg border border-casetify-neutral-200 p-6">
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

                {/* Additional CTA */}
                <div className="hidden lg:block">
                  <ProductOnboardingCta />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Product Details Section - Mobile */}
      <div className="lg:hidden bg-white border-t border-casetify-neutral-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8">
          <ProductTabs product={product} />
        </div>
      </div>

      {/* Related Products Section */}
      <div className="bg-casetify-neutral-50 py-16 lg:py-24">
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
