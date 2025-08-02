import { listCategories } from "@lib/data/categories"
import { listCollections } from "@lib/data/collections"
import { Text, clx } from "@medusajs/ui"

import LocalizedClientLink from "@modules/common/components/localized-client-link"
import MedusaCTA from "@modules/layout/components/medusa-cta"

export default async function Footer() {
  const { collections } = await listCollections({
    fields: "*products",
  })
  const productCategories = await listCategories()

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-16">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Brand */}
            <div className="md:col-span-1">
              <LocalizedClientLink
                href="/"
                className="text-2xl font-bold text-white hover:text-gray-300 transition-colors"
              >
                SparkCore
              </LocalizedClientLink>
              <p className="mt-4 text-gray-400 text-sm leading-relaxed">
                Quality everyday products for home, kids & lifestyle.
                Proudly based in the United States.
              </p>
            </div>
            {/* Shop */}
            <div>
              <h3 className="text-white font-semibold mb-4">Shop</h3>
              <ul className="space-y-3">
                <li>
                  <LocalizedClientLink
                    href="/store"
                    className="text-gray-400 hover:text-white transition-colors text-sm"
                  >
                    All Products
                  </LocalizedClientLink>
                </li>
                {productCategories?.slice(0, 4).map((c) => {
                  if (c.parent_category) return null
                  return (
                    <li key={c.id}>
                      <LocalizedClientLink
                        className="text-gray-400 hover:text-white transition-colors text-sm"
                        href={`/categories/${c.handle}`}
                        data-testid="category-link"
                      >
                        {c.name}
                      </LocalizedClientLink>
                    </li>
                  )
                })}
                {collections?.slice(0, 2).map((c) => (
                  <li key={c.id}>
                    <LocalizedClientLink
                      className="text-gray-400 hover:text-white transition-colors text-sm"
                      href={`/collections/${c.handle}`}
                    >
                      {c.title}
                    </LocalizedClientLink>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company */}
            <div>
              <h3 className="text-white font-semibold mb-4">Company</h3>
              <ul className="space-y-3">
                <li>
                  <LocalizedClientLink
                    href="/about"
                    className="text-gray-400 hover:text-white transition-colors text-sm"
                  >
                    About Us
                  </LocalizedClientLink>
                </li>
                <li>
                  <LocalizedClientLink
                    href="/contact"
                    className="text-gray-400 hover:text-white transition-colors text-sm"
                  >
                    Contact Us
                  </LocalizedClientLink>
                </li>
                <li>
                  <LocalizedClientLink
                    href="/account"
                    className="text-gray-400 hover:text-white transition-colors text-sm"
                  >
                    My Account
                  </LocalizedClientLink>
                </li>
              </ul>
            </div>

            {/* External Stores */}
            <div>
              <h3 className="text-white font-semibold mb-4">Shop Elsewhere</h3>
              <ul className="space-y-3">
                <li>
                  <a
                    href="https://amazon.com/stores/sparkcore"
                    target="_blank"
                    rel="noreferrer"
                    className="text-gray-400 hover:text-white transition-colors text-sm flex items-center gap-2"
                  >
                    <span>Amazon Store</span>
                    <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                </li>
                <li>
                  <a
                    href="https://shop.tiktok.com/@sparkcore"
                    target="_blank"
                    rel="noreferrer"
                    className="text-gray-400 hover:text-white transition-colors text-sm flex items-center gap-2"
                  >
                    <span>TikTok Shop</span>
                    <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom section */}
        <div className="border-t border-gray-800 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <Text className="text-gray-400 text-sm">
              © {new Date().getFullYear()} SparkCore LLC. All rights reserved.
            </Text>
            <MedusaCTA />
          </div>
        </div>
      </div>
    </footer>
  )
}
