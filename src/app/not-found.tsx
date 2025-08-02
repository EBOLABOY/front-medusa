import { Button } from "@medusajs/ui"
import { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "404 - Page Not Found | SparkCore",
  description: "The page you're looking for doesn't exist.",
}

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
      <div className="text-center max-w-md">
        <div className="mb-8">
          <div className="text-6xl font-bold text-gray-300 mb-4">404</div>
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Page Not Found</h1>
          <p className="text-gray-600 leading-relaxed">
            Sorry, we couldn't find the page you're looking for.
            It might have been moved, deleted, or you entered the wrong URL.
          </p>
        </div>

        <div className="space-y-4">
          <Link href="/">
            <Button className="bg-black hover:bg-gray-800 text-white px-8 py-3 rounded-lg transition-colors">
              Go to Homepage
            </Button>
          </Link>

          <div className="text-sm text-gray-500">
            or{" "}
            <Link href="/store" className="text-black hover:text-gray-700 font-medium">
              browse our products
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
