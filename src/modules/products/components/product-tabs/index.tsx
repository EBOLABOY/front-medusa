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
      icon: "📋",
      component: <ProductInfoTab product={product} />,
    },
    {
      label: "Shipping & Returns",
      icon: "🚚",
      component: <ShippingInfoTab />,
    },
    {
      label: "Care Instructions",
      icon: "🧼",
      component: <CareInstructionsTab />,
    },
    {
      label: "Size Guide",
      icon: "📏",
      component: <SizeGuideTab />,
    },
  ]

  return (
    <div className="w-full space-y-4">
      <h3 className="text-xl font-bold text-casetify-primary mb-6">Product Information</h3>
      <div className="space-y-3">
        <Accordion type="multiple">
          {tabs.map((tab, i) => (
            <Accordion.Item
              key={i}
              title={`${tab.icon} ${tab.label}`}
              headingSize="medium"
              value={tab.label}
              className="border border-casetify-neutral-200 rounded-xl overflow-hidden mb-3 bg-white shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <div className="bg-casetify-neutral-50 p-6">
                {tab.component}
              </div>
            </Accordion.Item>
          ))}
        </Accordion>
      </div>
    </div>
  )
}

const ProductInfoTab = ({ product }: ProductTabsProps) => {
  const specs = [
    { label: "Material", value: product.material || "Premium quality materials", icon: "🧵" },
    { label: "Country of Origin", value: product.origin_country || "Made with care", icon: "🌍" },
    { label: "Product Type", value: product.type?.value || "High-quality product", icon: "🏷️" },
    { label: "Weight", value: product.weight ? `${product.weight} g` : "Lightweight design", icon: "⚖️" },
    {
      label: "Dimensions",
      value: product.length && product.width && product.height
        ? `${product.length}L × ${product.width}W × ${product.height}H`
        : "Perfectly sized",
      icon: "📐"
    },
  ]

  return (
    <div className="space-y-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {specs.map((spec, index) => (
          <div
            key={index}
            className="bg-white rounded-lg p-4 border border-casetify-neutral-200 hover:border-casetify-accent-blue transition-colors duration-300"
          >
            <div className="flex items-start space-x-3">
              <span className="text-xl">{spec.icon}</span>
              <div className="flex-1">
                <h4 className="font-semibold text-casetify-primary text-sm uppercase tracking-wide">
                  {spec.label}
                </h4>
                <p className="text-casetify-neutral-700 mt-1 font-medium">
                  {spec.value}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Additional Product Features */}
      <div className="mt-6 p-4 bg-gradient-to-r from-casetify-accent-blue/10 to-casetify-accent-purple/10 rounded-lg border border-casetify-accent-blue/20">
        <h4 className="font-semibold text-casetify-primary mb-3 flex items-center">
          <span className="mr-2">✨</span>
          Why You'll Love This Product
        </h4>
        <ul className="space-y-2 text-sm text-casetify-neutral-700">
          <li className="flex items-center">
            <span className="w-2 h-2 bg-casetify-accent-green rounded-full mr-3"></span>
            Carefully crafted with attention to detail
          </li>
          <li className="flex items-center">
            <span className="w-2 h-2 bg-casetify-accent-blue rounded-full mr-3"></span>
            Designed for everyday use and durability
          </li>
          <li className="flex items-center">
            <span className="w-2 h-2 bg-casetify-accent-purple rounded-full mr-3"></span>
            Backed by our quality guarantee
          </li>
        </ul>
      </div>
    </div>
  )
}

const ShippingInfoTab = () => {
  const shippingFeatures = [
    {
      icon: <FastDelivery />,
      title: "Lightning Fast Delivery",
      description: "Get your order in 2-3 business days with our express shipping. Free on orders over $50!",
      highlight: "2-3 Days",
      color: "bg-casetify-accent-blue"
    },
    {
      icon: <Refresh />,
      title: "Hassle-Free Exchanges",
      description: "Not the perfect fit? Exchange within 30 days for free. We'll even cover return shipping.",
      highlight: "30 Days",
      color: "bg-casetify-accent-green"
    },
    {
      icon: <Back />,
      title: "Easy Returns",
      description: "100% satisfaction guaranteed. Return any item within 30 days for a full refund, no questions asked.",
      highlight: "100% Guaranteed",
      color: "bg-casetify-accent-purple"
    }
  ]

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 gap-4">
        {shippingFeatures.map((feature, index) => (
          <div
            key={index}
            className="bg-white rounded-xl p-6 border border-casetify-neutral-200 hover:shadow-lg transition-all duration-300 group"
          >
            <div className="flex items-start space-x-4">
              <div className={`p-3 rounded-full ${feature.color} text-white group-hover:scale-110 transition-transform duration-300`}>
                {feature.icon}
              </div>
              <div className="flex-1">
                <div className="flex items-center justify-between mb-2">
                  <h4 className="font-bold text-casetify-primary text-lg">
                    {feature.title}
                  </h4>
                  <span className={`px-3 py-1 rounded-full text-white text-sm font-semibold ${feature.color}`}>
                    {feature.highlight}
                  </span>
                </div>
                <p className="text-casetify-neutral-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Shipping Zones */}
      <div className="bg-gradient-to-r from-casetify-neutral-50 to-casetify-accent-blue/5 rounded-xl p-6 border border-casetify-neutral-200">
        <h4 className="font-bold text-casetify-primary mb-4 flex items-center">
          <span className="mr-2">🌍</span>
          Worldwide Shipping Available
        </h4>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
          <div className="text-center">
            <div className="font-semibold text-casetify-primary">🇺🇸 USA</div>
            <div className="text-casetify-neutral-600">2-3 days</div>
          </div>
          <div className="text-center">
            <div className="font-semibold text-casetify-primary">🇪🇺 Europe</div>
            <div className="text-casetify-neutral-600">3-5 days</div>
          </div>
          <div className="text-center">
            <div className="font-semibold text-casetify-primary">🇨🇦 Canada</div>
            <div className="text-casetify-neutral-600">3-5 days</div>
          </div>
          <div className="text-center">
            <div className="font-semibold text-casetify-primary">🌏 Asia</div>
            <div className="text-casetify-neutral-600">5-7 days</div>
          </div>
        </div>
      </div>
    </div>
  )
}

// New Care Instructions Tab
const CareInstructionsTab = () => {
  const careSteps = [
    { step: "1", title: "Regular Cleaning", description: "Wipe gently with a soft, damp cloth", icon: "🧽" },
    { step: "2", title: "Avoid Harsh Chemicals", description: "Use mild soap if needed, avoid bleach or abrasives", icon: "⚠️" },
    { step: "3", title: "Proper Storage", description: "Store in a cool, dry place away from direct sunlight", icon: "📦" },
    { step: "4", title: "Handle with Care", description: "Avoid dropping or excessive force", icon: "🤲" },
  ]

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {careSteps.map((step, index) => (
          <div key={index} className="bg-white rounded-lg p-4 border border-casetify-neutral-200">
            <div className="flex items-start space-x-3">
              <div className="bg-casetify-accent-blue text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm">
                {step.step}
              </div>
              <div className="flex-1">
                <h4 className="font-semibold text-casetify-primary flex items-center">
                  <span className="mr-2">{step.icon}</span>
                  {step.title}
                </h4>
                <p className="text-casetify-neutral-600 text-sm mt-1">{step.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

// New Size Guide Tab
const SizeGuideTab = () => {
  return (
    <div className="space-y-6">
      <div className="bg-white rounded-lg p-6 border border-casetify-neutral-200">
        <h4 className="font-bold text-casetify-primary mb-4 flex items-center">
          <span className="mr-2">📏</span>
          How to Measure
        </h4>
        <div className="space-y-4">
          <div className="flex items-start space-x-3">
            <span className="bg-casetify-accent-blue text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">1</span>
            <p className="text-casetify-neutral-600">Use a flexible measuring tape for accurate measurements</p>
          </div>
          <div className="flex items-start space-x-3">
            <span className="bg-casetify-accent-blue text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">2</span>
            <p className="text-casetify-neutral-600">Measure at the widest/longest points</p>
          </div>
          <div className="flex items-start space-x-3">
            <span className="bg-casetify-accent-blue text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">3</span>
            <p className="text-casetify-neutral-600">Compare with our size chart below</p>
          </div>
        </div>
      </div>

      <div className="bg-gradient-to-r from-casetify-accent-green/10 to-casetify-accent-blue/10 rounded-lg p-6 border border-casetify-accent-green/20">
        <p className="text-center text-casetify-neutral-700">
          <span className="font-semibold">Need help?</span> Our customer service team is here to help you find the perfect fit.
          <br />
          <span className="text-casetify-accent-blue font-medium">Contact us anytime!</span>
        </p>
      </div>
    </div>
  )
}

export default ProductTabs
