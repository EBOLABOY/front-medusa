import { Heading } from "@medusajs/ui"
import { cookies as nextCookies } from "next/headers"

import CartTotals from "@modules/common/components/cart-totals"
import Help from "@modules/order/components/help"
import Items from "@modules/order/components/items"
import OnboardingCta from "@modules/order/components/onboarding-cta"
import OrderDetails from "@modules/order/components/order-details"
import ShippingDetails from "@modules/order/components/shipping-details"
import PaymentDetails from "@modules/order/components/payment-details"
import { HttpTypes } from "@medusajs/types"

type OrderCompletedTemplateProps = {
  order: HttpTypes.StoreOrder
}

export default async function OrderCompletedTemplate({
  order,
}: OrderCompletedTemplateProps) {
  const cookies = await nextCookies()

  const isOnboarding = cookies.get("_medusa_onboarding")?.value === "true"

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Success Header */}
      <div className="bg-green-50 border-b border-green-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 text-center">
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <Heading
            level="h1"
            className="text-3xl font-bold text-gray-900 mb-2"
          >
            Order Confirmed!
          </Heading>
          <p className="text-lg text-gray-600">
            Thank you for your purchase. Your order has been placed successfully.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {isOnboarding && <OnboardingCta orderId={order.id} />}

        <div className="space-y-8" data-testid="order-complete-container">
          {/* Order Details Card */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
            <OrderDetails order={order} />
          </div>

          {/* Order Summary Card */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
            <Heading level="h2" className="text-xl font-semibold text-gray-900 mb-6">
              Order Summary
            </Heading>
            <Items order={order} />
            <div className="mt-6 pt-6 border-t border-gray-200">
              <CartTotals totals={order} />
            </div>
          </div>

          {/* Shipping & Payment Details */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
              <ShippingDetails order={order} />
            </div>
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
              <PaymentDetails order={order} />
            </div>
          </div>

          {/* Help Section */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
            <Help />
          </div>
        </div>
      </div>
    </div>
  )
}
