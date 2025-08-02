import { Button } from "@medusajs/ui"
import LocalizedClientLink from "@modules/common/components/localized-client-link"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "404 - Checkout Page Not Found | SparkCore",
  description: "The checkout page you're looking for doesn't exist.",
}

export default async function NotFound() {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
      <div className="text-center max-w-md">
        <div className="mb-8">
          <div className="text-6xl font-bold text-gray-300 mb-4">404</div>
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Checkout Page Not Found</h1>
          <p className="text-gray-600 leading-relaxed">
            The checkout page you're trying to access doesn't exist.
            Please return to your cart to continue with your purchase.
          </p>
        </div>

        <div className="space-y-4">
          <LocalizedClientLink href="/cart">
            <Button className="bg-black hover:bg-gray-800 text-white px-8 py-3 rounded-lg transition-colors">
              Return to Cart
            </Button>
          </LocalizedClientLink>

          <div className="text-sm text-gray-500">
            or{" "}
            <LocalizedClientLink href="/" className="text-black hover:text-gray-700 font-medium">
              go to homepage
            </LocalizedClientLink>
          </div>
        </div>
      </div>
    </div>
  )
}
