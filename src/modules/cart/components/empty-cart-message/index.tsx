import { Button } from "@medusajs/ui"
import LocalizedClientLink from "@modules/common/components/localized-client-link"

const EmptyCartMessage = () => {
  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-12 text-center max-w-md" data-testid="empty-cart-message">
      <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
        <svg className="w-12 h-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-1.5 6M7 13l-1.5 6m0 0h9" />
        </svg>
      </div>

      <h2 className="text-2xl font-semibold text-gray-900 mb-4">
        Your cart is empty
      </h2>

      <p className="text-gray-600 mb-8 leading-relaxed">
        Looks like you haven't added any items to your cart yet.
        Start shopping to fill it up with amazing products!
      </p>

      <LocalizedClientLink href="/store">
        <Button className="bg-black hover:bg-gray-800 text-white px-8 py-3 rounded-lg transition-colors">
          Start Shopping
        </Button>
      </LocalizedClientLink>
    </div>
  )
}

export default EmptyCartMessage
