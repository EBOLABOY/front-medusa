import { listProducts } from "@lib/data/products"
import { getRegion } from "@lib/data/regions"
import { HttpTypes } from "@medusajs/types"
import Product from "../product-preview"

type RelatedProductsProps = {
  product: HttpTypes.StoreProduct
  countryCode: string
}

export default async function RelatedProducts({
  product,
  countryCode,
}: RelatedProductsProps) {
  const region = await getRegion(countryCode)

  if (!region) {
    return null
  }

  // edit this function to define your related products logic
  const queryParams: HttpTypes.StoreProductParams & any = {}
  if (region?.id) {
    queryParams.region_id = region.id
  }
  if (product.collection_id) {
    queryParams.collection_id = [product.collection_id]
  }
  if (product.tags) {
    queryParams.tag_id = product.tags
      .map((t) => t.id)
      .filter(Boolean) as string[]
  }
  queryParams.is_giftcard = false

  const products = await listProducts({
    queryParams,
    countryCode,
  }).then(({ response }) => {
    return response.products.filter(
      (responseProduct) => responseProduct.id !== product.id
    )
  })

  if (!products.length) {
    return null
  }

  return (
    <div className="w-full">
      {/* Section Header */}
      <div className="text-center mb-12">
        <div className="inline-flex items-center justify-center space-x-2 mb-4">
          <div className="w-12 h-0.5 bg-gradient-to-r from-transparent to-casetify-accent-blue"></div>
          <span className="text-sm font-semibold text-casetify-accent-blue uppercase tracking-wider">
            You Might Also Like
          </span>
          <div className="w-12 h-0.5 bg-gradient-to-l from-transparent to-casetify-accent-blue"></div>
        </div>
        <h2 className="text-3xl lg:text-4xl font-bold text-casetify-primary mb-4">
          Complete Your Look
        </h2>
        <p className="text-lg text-casetify-neutral-600 max-w-2xl mx-auto">
          Discover more amazing products that perfectly complement your style and needs.
        </p>
      </div>

      {/* Products Grid */}
      <div className="relative">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="grid grid-cols-8 gap-4 h-full">
            {Array.from({ length: 32 }).map((_, i) => (
              <div key={i} className="bg-casetify-accent-blue rounded-full w-2 h-2"></div>
            ))}
          </div>
        </div>

        {/* Products */}
        <div className="relative z-10">
          <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 lg:gap-8">
            {products.slice(0, 8).map((product, index) => (
              <li
                key={product.id}
                className="group transform transition-all duration-500 hover:scale-105"
                style={{
                  animationDelay: `${index * 100}ms`,
                }}
              >
                <div className="bg-white rounded-2xl shadow-lg border border-casetify-neutral-200 overflow-hidden hover:shadow-2xl transition-all duration-500 group-hover:border-casetify-accent-blue">
                  <Product region={region} product={product} />

                  {/* Quick Add Overlay */}
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
                    <button className="bg-casetify-primary text-white px-6 py-2 rounded-full font-semibold transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 hover:bg-casetify-neutral-800">
                      Quick View
                    </button>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* View All Button */}
      {products.length > 8 && (
        <div className="text-center mt-12">
          <button className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-casetify-accent-blue to-casetify-accent-purple text-white font-semibold rounded-full hover:shadow-lg transform hover:scale-105 transition-all duration-300">
            <span>View All Products</span>
            <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </button>
        </div>
      )}

      {/* Trust Indicators */}
      <div className="mt-16 bg-gradient-to-r from-casetify-neutral-50 to-white rounded-2xl p-8 border border-casetify-neutral-200">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div className="space-y-3">
            <div className="w-16 h-16 bg-casetify-accent-green rounded-full flex items-center justify-center mx-auto">
              <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
            </div>
            <h3 className="font-bold text-casetify-primary">Quality Guaranteed</h3>
            <p className="text-casetify-neutral-600 text-sm">Every product is carefully tested and verified</p>
          </div>
          <div className="space-y-3">
            <div className="w-16 h-16 bg-casetify-accent-blue rounded-full flex items-center justify-center mx-auto">
              <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z" />
              </svg>
            </div>
            <h3 className="font-bold text-casetify-primary">Fast Shipping</h3>
            <p className="text-casetify-neutral-600 text-sm">Free delivery on orders over $50</p>
          </div>
          <div className="space-y-3">
            <div className="w-16 h-16 bg-casetify-accent-purple rounded-full flex items-center justify-center mx-auto">
              <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
              </svg>
            </div>
            <h3 className="font-bold text-casetify-primary">24/7 Support</h3>
            <p className="text-casetify-neutral-600 text-sm">We're here to help whenever you need us</p>
          </div>
        </div>
      </div>
    </div>
  )
}
