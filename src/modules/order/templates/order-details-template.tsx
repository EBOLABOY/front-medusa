"use client"

import { XMark } from "@medusajs/icons"
import { HttpTypes } from "@medusajs/types"
import LocalizedClientLink from "@modules/common/components/localized-client-link"
import Help from "@modules/order/components/help"
import Items from "@modules/order/components/items"
import OrderDetails from "@modules/order/components/order-details"
import OrderSummary from "@modules/order/components/order-summary"
import ShippingDetails from "@modules/order/components/shipping-details"
import React from "react"

type OrderDetailsTemplateProps = {
  order: HttpTypes.StoreOrder
}

const OrderDetailsTemplate: React.FC<OrderDetailsTemplateProps> = ({
  order,
}) => {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row gap-4 justify-between items-start sm:items-center">
        <h1 className="text-2xl font-semibold text-gray-900">Order Details</h1>
        <LocalizedClientLink
          href="/account/orders"
          className="flex gap-2 items-center text-sm text-gray-600 hover:text-black transition-colors"
          data-testid="back-to-overview-button"
        >
          <XMark /> Back to Orders
        </LocalizedClientLink>
      </div>

      {/* Content Cards */}
      <div className="space-y-6" data-testid="order-details-container">
        {/* Order Status & Details */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <OrderDetails order={order} showStatus />
        </div>

        {/* Order Items */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">Items Ordered</h2>
          <Items order={order} />
        </div>

        {/* Shipping & Summary */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
            <ShippingDetails order={order} />
          </div>
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
            <OrderSummary order={order} />
          </div>
        </div>

        {/* Help Section */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <Help />
        </div>
      </div>
    </div>
  )
}

export default OrderDetailsTemplate
