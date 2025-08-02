import { Metadata } from "next"
import { Button } from "@medusajs/ui"
import LocalizedClientLink from "@modules/common/components/localized-client-link"

export const metadata: Metadata = {
  title: "404 - Cart Not Found | SparkCore",
  description: "The cart you're looking for doesn't exist.",
}

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
      <div className="text-center max-w-md">
        <div className="mb-8">
          <div className="text-6xl font-bold text-gray-300 mb-4">404</div>
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Cart Not Found</h1>
          <p className="text-gray-600 leading-relaxed">
            The cart you're trying to access doesn't exist.
            This might happen if your session expired. Please start shopping again.
          </p>
        </div>

        <div className="space-y-4">
          <LocalizedClientLink href="/store">
            <Button className="bg-black hover:bg-gray-800 text-white px-8 py-3 rounded-lg transition-colors">
              Start Shopping
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
