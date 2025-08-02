import LocalizedClientLink from "@modules/common/components/localized-client-link"
import ChevronDown from "@modules/common/icons/chevron-down"
import MedusaCTA from "@modules/layout/components/medusa-cta"

export default function CheckoutLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="w-full bg-gray-50 relative min-h-screen">
      <div className="h-20 bg-white border-b border-gray-200 shadow-sm">
        <nav className="flex h-full items-center max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 justify-between">
          <LocalizedClientLink
            href="/cart"
            className="text-sm font-medium text-gray-700 hover:text-black flex items-center gap-x-2 transition-colors"
            data-testid="back-to-cart-link"
          >
            <ChevronDown className="rotate-90" size={16} />
            <span className="hidden sm:block">
              Back to Cart
            </span>
            <span className="block sm:hidden">
              Back
            </span>
          </LocalizedClientLink>
          <LocalizedClientLink
            href="/"
            className="text-xl font-bold text-black hover:text-gray-700 transition-colors"
            data-testid="store-link"
          >
            SparkCore
          </LocalizedClientLink>
          <div className="flex-1 basis-0" />
        </nav>
      </div>
      <div className="relative" data-testid="checkout-container">{children}</div>
      <div className="py-6 w-full flex items-center justify-center bg-white border-t border-gray-200">
        <MedusaCTA />
      </div>
    </div>
  )
}
