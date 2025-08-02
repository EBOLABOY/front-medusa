import { Suspense } from "react"

import { listRegions } from "@lib/data/regions"
import { StoreRegion } from "@medusajs/types"
import LocalizedClientLink from "@modules/common/components/localized-client-link"
import CartButton from "@modules/layout/components/cart-button"
import SideMenu from "@modules/layout/components/side-menu"
import MegaMenu from "@modules/layout/components/mega-menu"

export default async function Nav() {
  const regions = await listRegions().then((regions: StoreRegion[]) => regions)

  return (
    <div className="sticky top-0 inset-x-0 z-50 group">
      <header className="relative h-20 mx-auto border-b duration-200 bg-white border-gray-200 shadow-sm">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between w-full h-full">
          {/* Mobile menu */}
          <div className="flex-1 basis-0 h-full flex items-center lg:hidden">
            <div className="h-full flex items-center">
              <SideMenu regions={regions} />
            </div>
          </div>

          {/* Logo */}
          <div className="flex items-center h-full lg:flex-1 lg:basis-0">
            <LocalizedClientLink
              href="/"
              className="text-2xl font-bold text-black hover:text-gray-700 transition-colors"
              data-testid="nav-home-link"
            >
              SparkCore
            </LocalizedClientLink>
          </div>

          {/* Desktop navigation */}
          <div className="hidden lg:flex items-center space-x-10 h-full">
            <MegaMenu />
            <LocalizedClientLink
              className="text-sm font-medium text-gray-700 hover:text-black transition-colors py-2"
              href="/about"
              data-testid="nav-about-link"
            >
              About
            </LocalizedClientLink>
            <LocalizedClientLink
              className="text-sm font-medium text-gray-700 hover:text-black transition-colors py-2"
              href="/contact"
              data-testid="nav-contact-link"
            >
              Contact
            </LocalizedClientLink>
          </div>

          {/* Right side actions */}
          <div className="flex items-center gap-x-6 h-full flex-1 basis-0 justify-end">
            <div className="hidden lg:flex items-center gap-x-6">
              <LocalizedClientLink
                className="text-sm font-medium text-gray-700 hover:text-black transition-colors py-2"
                href="/account"
                data-testid="nav-account-link"
              >
                Account
              </LocalizedClientLink>
            </div>
            <Suspense
              fallback={
                <LocalizedClientLink
                  className="text-sm font-medium text-gray-700 hover:text-black transition-colors flex items-center gap-2 py-2"
                  href="/cart"
                  data-testid="nav-cart-link"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-1.5 6M7 13l-1.5 6m0 0h9" />
                  </svg>
                  <span className="hidden sm:inline">Cart (0)</span>
                </LocalizedClientLink>
              }
            >
              <CartButton />
            </Suspense>
          </div>
        </nav>
      </header>
    </div>
  )
}
