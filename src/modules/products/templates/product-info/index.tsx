import { HttpTypes } from "@medusajs/types"
import { Heading, Text, Badge } from "@medusajs/ui"
import LocalizedClientLink from "@modules/common/components/localized-client-link"

type ProductInfoProps = {
  product: HttpTypes.StoreProduct
}

const ProductInfo = ({ product }: ProductInfoProps) => {
  return (
    <div id="product-info" className="space-y-6">
      {/* Collection Badge */}
      {product.collection && (
        <div className="flex items-center space-x-2">
          <LocalizedClientLink
            href={`/collections/${product.collection.handle}`}
            className="group"
          >
            <Badge
              className="bg-casetify-neutral-100 text-casetify-neutral-700 hover:bg-casetify-accent-blue hover:text-white transition-all duration-300 group-hover:scale-105"
            >
              {product.collection.title}
            </Badge>
          </LocalizedClientLink>
        </div>
      )}

      {/* Product Title */}
      <div className="space-y-2">
        <Heading
          level="h1"
          className="text-4xl lg:text-5xl font-bold leading-tight text-casetify-primary tracking-tight"
          data-testid="product-title"
        >
          {product.title}
        </Heading>

        {/* Product Status Indicators */}
        <div className="flex items-center space-x-3">
          <Badge className="bg-casetify-accent-green text-white">
            ✓ In Stock
          </Badge>
          <Badge className="border border-casetify-accent-blue text-casetify-accent-blue bg-transparent">
            Free Shipping
          </Badge>
        </div>
      </div>

      {/* Product Description */}
      <div className="space-y-4">
        <Text
          className="text-lg text-casetify-neutral-600 leading-relaxed whitespace-pre-line"
          data-testid="product-description"
        >
          {product.description}
        </Text>

        {/* Key Features */}
        <div className="bg-casetify-neutral-50 rounded-xl p-4 border border-casetify-neutral-200">
          <h3 className="font-semibold text-casetify-primary mb-3">Key Features:</h3>
          <ul className="space-y-2 text-sm text-casetify-neutral-600">
            <li className="flex items-center space-x-2">
              <span className="w-1.5 h-1.5 bg-casetify-accent-blue rounded-full"></span>
              <span>Premium quality materials</span>
            </li>
            <li className="flex items-center space-x-2">
              <span className="w-1.5 h-1.5 bg-casetify-accent-blue rounded-full"></span>
              <span>Durable construction</span>
            </li>
            <li className="flex items-center space-x-2">
              <span className="w-1.5 h-1.5 bg-casetify-accent-blue rounded-full"></span>
              <span>Perfect fit guarantee</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Trust Indicators */}
      <div className="flex items-center space-x-4 pt-4 border-t border-casetify-neutral-200">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-casetify-accent-green rounded-full flex items-center justify-center">
            <span className="text-white text-xs font-bold">✓</span>
          </div>
          <span className="text-sm text-casetify-neutral-600">30-Day Return</span>
        </div>
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-casetify-accent-blue rounded-full flex items-center justify-center">
            <span className="text-white text-xs font-bold">★</span>
          </div>
          <span className="text-sm text-casetify-neutral-600">5-Star Rated</span>
        </div>
      </div>
    </div>
  )
}

export default ProductInfo
