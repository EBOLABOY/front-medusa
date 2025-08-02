import { HttpTypes } from "@medusajs/types"
import { Heading, Text, Badge } from "@medusajs/ui"
import { Star } from "@medusajs/icons"
import LocalizedClientLink from "@modules/common/components/localized-client-link"

type ProductInfoProps = {
  product: HttpTypes.StoreProduct
}

const ProductInfo = ({ product }: ProductInfoProps) => {
  return (
    <div id="product-info" className="space-y-4">
      {/* Collection Link */}
      {product.collection && (
        <div>
          <LocalizedClientLink
            href={`/collections/${product.collection.handle}`}
            className="text-xs text-gray-500 hover:text-gray-700 transition-colors uppercase tracking-wide"
          >
            {product.collection.title}
          </LocalizedClientLink>
        </div>
      )}

      {/* Product Title */}
      <div className="space-y-2">
        <Heading
          level="h1"
          className="text-xl lg:text-2xl font-medium leading-tight text-gray-900"
          data-testid="product-title"
        >
          {product.title}
        </Heading>

        {/* Rating Summary */}
        <div className="flex items-center space-x-2">
          <div className="flex items-center space-x-1">
            {[1, 2, 3, 4, 5].map((star) => (
              <Star
                key={star}
                className={`w-3 h-3 ${star <= 4 ? 'text-yellow-400 fill-current' : 'text-gray-300'}`}
              />
            ))}
          </div>
          <span className="text-xs text-gray-600">
            4.3 (127 reviews)
          </span>
        </div>
      </div>

      {/* Product Description */}
      <div className="space-y-3">
        <Text
          className="text-xs text-gray-600 leading-relaxed whitespace-pre-line"
          data-testid="product-description"
        >
          {product.description}
        </Text>

        {/* Key Features */}
        <div className="space-y-1">
          <ul className="space-y-1 text-xs text-gray-600">
            <li className="flex items-start space-x-2">
              <span className="text-gray-400 mt-0.5">•</span>
              <span>MagSafe Compatible</span>
            </li>
            <li className="flex items-start space-x-2">
              <span className="text-gray-400 mt-0.5">•</span>
              <span>Drop Protection up to 10ft</span>
            </li>
            <li className="flex items-start space-x-2">
              <span className="text-gray-400 mt-0.5">•</span>
              <span>Wireless Charging Compatible</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default ProductInfo
