"use client"

import Back from "@modules/common/icons/back"
import FastDelivery from "@modules/common/icons/fast-delivery"
import Refresh from "@modules/common/icons/refresh"

import Accordion from "./accordion"
import { HttpTypes } from "@medusajs/types"

type ProductTabsProps = {
  product: HttpTypes.StoreProduct
}

const ProductTabs = ({ product }: ProductTabsProps) => {
  const tabs = [
    {
      label: "Product Details",
      component: <ProductInfoTab product={product} />,
    },
    {
      label: "Shipping & Returns",
      component: <ShippingInfoTab />,
    },
  ]

  return (
    <div className="w-full">
      <Accordion type="multiple">
        {tabs.map((tab, i) => (
          <Accordion.Item
            key={i}
            title={tab.label}
            headingSize="medium"
            value={tab.label}
            className="border-b border-gray-200 last:border-b-0"
          >
            <div className="py-6">
              {tab.component}
            </div>
          </Accordion.Item>
        ))}
      </Accordion>
    </div>
  )
}

const ProductInfoTab = ({ product }: ProductTabsProps) => {
  const specs = [
    { label: "Material", value: product.material || "Premium quality materials" },
    { label: "Country of Origin", value: product.origin_country || "Made with care" },
    { label: "Product Type", value: product.type?.value || "High-quality product" },
    { label: "Weight", value: product.weight ? `${product.weight} g` : "Lightweight design" },
    {
      label: "Dimensions",
      value: product.length && product.width && product.height
        ? `${product.length}L × ${product.width}W × ${product.height}H`
        : "Perfectly sized"
    },
  ]

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4">
        {specs.map((spec, index) => (
          <div key={index} className="space-y-1">
            <h4 className="text-sm font-medium text-gray-900">
              {spec.label}
            </h4>
            <p className="text-sm text-gray-600">
              {spec.value}
            </p>
          </div>
        ))}
      </div>
    </div>
  )
}

const ShippingInfoTab = () => {
  const shippingFeatures = [
    {
      icon: <FastDelivery />,
      title: "Fast delivery",
      description: "Your package will arrive in 3-5 business days at your pick up location or in the comfort of your home."
    },
    {
      icon: <Refresh />,
      title: "Simple exchanges",
      description: "Is the fit not quite right? No worries - we'll exchange your product for a new one."
    },
    {
      icon: <Back />,
      title: "Easy returns",
      description: "Just return your product and we'll refund your money. No questions asked – we'll do our best to make sure your return is hassle-free."
    }
  ]

  return (
    <div className="space-y-8">
      <div className="grid grid-cols-1 gap-6">
        {shippingFeatures.map((feature, index) => (
          <div key={index} className="flex items-start space-x-4">
            <div className="flex-shrink-0">
              {feature.icon}
            </div>
            <div>
              <h4 className="font-medium text-gray-900 mb-2">
                {feature.title}
              </h4>
              <p className="text-sm text-gray-600 leading-relaxed max-w-sm">
                {feature.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}



export default ProductTabs
