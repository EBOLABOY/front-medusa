import { clx } from "@medusajs/ui"

import { getProductPrice } from "@lib/util/get-product-price"
import { HttpTypes } from "@medusajs/types"

export default function ProductPrice({
  product,
  variant,
}: {
  product: HttpTypes.StoreProduct
  variant?: HttpTypes.StoreProductVariant
}) {
  const { cheapestPrice, variantPrice } = getProductPrice({
    product,
    variantId: variant?.id,
  })

  const selectedPrice = variant ? variantPrice : cheapestPrice

  if (!selectedPrice) {
    return (
      <div className="space-y-2">
        <div className="w-32 h-8 bg-casetify-neutral-200 animate-pulse rounded-lg" />
        <div className="w-24 h-4 bg-casetify-neutral-100 animate-pulse rounded" />
      </div>
    )
  }

  return (
    <div className="space-y-2">
      {/* Main Price Display */}
      <div className="flex items-baseline space-x-2">
        <span
          className={clx("text-2xl font-medium", {
            "text-red-600": selectedPrice.price_type === "sale",
            "text-gray-900": selectedPrice.price_type !== "sale",
          })}
        >
          {!variant && (
            <span className="text-base font-normal text-gray-500 mr-1">
              From
            </span>
          )}
          <span
            data-testid="product-price"
            data-value={selectedPrice.calculated_price_number}
          >
            {selectedPrice.calculated_price}
          </span>
        </span>

        {/* Original Price (if on sale) */}
        {selectedPrice.price_type === "sale" && (
          <span
            className="line-through text-gray-400 text-lg"
            data-testid="original-product-price"
            data-value={selectedPrice.original_price_number}
          >
            {selectedPrice.original_price}
          </span>
        )}
      </div>

      {/* Sale Badge */}
      {selectedPrice.price_type === "sale" && (
        <div className="flex items-center space-x-2">
          <span className="bg-red-100 text-red-800 text-xs font-medium px-2 py-1 rounded">
            SALE
          </span>
          <span className="text-sm text-gray-600">Limited time offer</span>
        </div>
      )}

      {/* Payment Options */}
      <div className="space-y-1 text-sm text-gray-600">
        <div className="flex items-center space-x-2">
          <span>💳</span>
          <span>4 interest-free payments of ${(selectedPrice.calculated_price_number / 4).toFixed(2)}</span>
        </div>
        <div className="flex items-center space-x-2">
          <span>🚚</span>
          <span>Free shipping on orders over $50</span>
        </div>
        <div className="flex items-center space-x-2">
          <span>🔒</span>
          <span>Secure checkout</span>
        </div>
      </div>
    </div>
  )
}
