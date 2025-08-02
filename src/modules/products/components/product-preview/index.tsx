import { Text } from "@medusajs/ui"
import { listProducts } from "@lib/data/products"
import { getProductPrice } from "@lib/util/get-product-price"
import { HttpTypes } from "@medusajs/types"
import LocalizedClientLink from "@modules/common/components/localized-client-link"
import Thumbnail from "../thumbnail"
import PreviewPrice from "./price"

export default async function ProductPreview({
  product,
  isFeatured,
  region,
}: {
  product: HttpTypes.StoreProduct
  isFeatured?: boolean
  region: HttpTypes.StoreRegion
}) {
  // const pricedProduct = await listProducts({
  //   regionId: region.id,
  //   queryParams: { id: [product.id!] },
  // }).then(({ response }) => response.products[0])

  // if (!pricedProduct) {
  //   return null
  // }

  const { cheapestPrice } = getProductPrice({
    product,
  })

  return (
    <LocalizedClientLink href={`/products/${product.handle}`} className="group block">
      <div
        data-testid="product-wrapper"
        className="product-card bg-white rounded-2xl overflow-hidden border border-casetify-neutral-200 hover:border-casetify-accent-blue transition-all duration-500 group-hover:shadow-2xl"
      >
        {/* Product Image */}
        <div className="relative overflow-hidden bg-casetify-neutral-50 aspect-square">
          <Thumbnail
            thumbnail={product.thumbnail}
            images={product.images}
            size="full"
            isFeatured={isFeatured}
            className="product-image w-full h-full object-cover"
          />

          {/* Hover Overlay */}
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all duration-300 flex items-center justify-center">
            <div className="transform translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
              <div className="bg-white/90 backdrop-blur-sm rounded-full px-4 py-2 text-casetify-primary font-semibold text-sm shadow-lg">
                Quick View
              </div>
            </div>
          </div>

          {/* Sale Badge */}
          {cheapestPrice?.price_type === "sale" && (
            <div className="absolute top-3 left-3 bg-casetify-accent-pink text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg">
              SALE
            </div>
          )}

          {/* Wishlist Button */}
          <button className="absolute top-3 right-3 w-10 h-10 bg-white/80 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-white hover:scale-110">
            <svg className="w-5 h-5 text-casetify-neutral-600 hover:text-casetify-accent-pink transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
            </svg>
          </button>
        </div>

        {/* Product Info */}
        <div className="p-4 space-y-3">
          {/* Product Title */}
          <div className="space-y-1">
            <Text
              className="text-casetify-primary font-semibold text-base group-hover:text-casetify-accent-blue transition-colors duration-300 line-clamp-2"
              data-testid="product-title"
            >
              {product.title}
            </Text>

            {/* Product Category/Collection */}
            {product.collection && (
              <Text className="text-casetify-neutral-500 text-sm">
                {product.collection.title}
              </Text>
            )}
          </div>

          {/* Price and Rating */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-x-2">
              {cheapestPrice && <PreviewPrice price={cheapestPrice} />}
            </div>

            {/* Rating Stars */}
            <div className="flex items-center space-x-1">
              {[...Array(5)].map((_, i) => (
                <svg
                  key={i}
                  className={`w-4 h-4 ${i < 4 ? 'text-casetify-accent-orange' : 'text-casetify-neutral-300'}`}
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
              <span className="text-casetify-neutral-500 text-xs ml-1">(4.0)</span>
            </div>
          </div>

          {/* Quick Add Button */}
          <button className="w-full bg-casetify-neutral-100 hover:bg-casetify-primary text-casetify-primary hover:text-white py-2 px-4 rounded-lg font-semibold text-sm transition-all duration-300 transform hover:scale-105 opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0">
            Add to Cart
          </button>
        </div>
      </div>
    </LocalizedClientLink>
  )
}
