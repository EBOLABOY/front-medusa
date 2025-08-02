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
      <div className="flex items-baseline space-x-3">
        <span
          className={clx("text-3xl font-bold", {
            "text-casetify-accent-blue": selectedPrice.price_type === "sale",
            "text-casetify-primary": selectedPrice.price_type !== "sale",
          })}
        >
          {!variant && (
            <span className="text-lg font-normal text-casetify-neutral-600 mr-1">
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

        {/* Sale Badge */}
        {selectedPrice.price_type === "sale" && (
          <div className="bg-casetify-accent-pink text-white px-2 py-1 rounded-full text-sm font-semibold">
            SALE
          </div>
        )}
      </div>

      {/* Sale Price Details */}
      {selectedPrice.price_type === "sale" && (
        <div className="space-y-1">
          <div className="flex items-center space-x-2">
            <span className="text-casetify-neutral-500 text-sm">Original:</span>
            <span
              className="line-through text-casetify-neutral-500 text-lg"
              data-testid="original-product-price"
              data-value={selectedPrice.original_price_number}
            >
              {selectedPrice.original_price}
            </span>
          </div>
          <div className="inline-flex items-center bg-casetify-accent-green text-white px-3 py-1 rounded-full text-sm font-semibold">
            <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z" clipRule="evenodd" />
            </svg>
            Save {selectedPrice.percentage_diff}%
          </div>
        </div>
      )}

      {/* Payment Options */}
      <div className="text-sm text-casetify-neutral-600 space-y-1">
        <div className="flex items-center">
          <span className="font-medium">💳</span>
          <span className="ml-2">Pay in 4 interest-free installments</span>
        </div>
        <div className="flex items-center">
          <span className="font-medium">🚚</span>
          <span className="ml-2">Free shipping on orders over $50</span>
        </div>
      </div>
    </div>
  )
}
