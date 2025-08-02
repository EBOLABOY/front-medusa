import { HttpTypes } from "@medusajs/types"
import { Badge } from "@medusajs/ui"

type ProductSpecsProps = {
  product: HttpTypes.StoreProduct
}

const ProductSpecs = ({ product }: ProductSpecsProps) => {
  // Mock technical specifications - in real implementation, these would come from product metadata
  const technicalSpecs = [
    {
      label: "Compatibility",
      value: "MagSafe Compatible",
      highlight: true,
      icon: "🧲"
    },
    {
      label: "Protection Level",
      value: "Military Grade Drop Protection",
      highlight: true,
      icon: "🛡️"
    },
    {
      label: "Material",
      value: product.material || "Premium TPU + PC",
      highlight: false,
      icon: "🔬"
    },
    {
      label: "Weight",
      value: product.weight ? `${product.weight}g` : "Lightweight (45g)",
      highlight: false,
      icon: "⚖️"
    },
    {
      label: "Thickness",
      value: "Ultra-thin 1.2mm",
      highlight: false,
      icon: "📏"
    },
    {
      label: "Wireless Charging",
      value: "Fully Compatible",
      highlight: true,
      icon: "⚡"
    }
  ]

  const certifications = [
    "Drop Tested 10ft",
    "Scratch Resistant",
    "Anti-Yellowing",
    "Eco-Friendly Materials"
  ]

  return (
    <div className="space-y-6">
      {/* Key Features Badges */}
      <div className="flex flex-wrap gap-2">
        {technicalSpecs
          .filter(spec => spec.highlight)
          .map((spec, index) => (
            <Badge 
              key={index}
              className="bg-blue-100 text-blue-800 border-blue-200 px-3 py-1"
            >
              <span className="mr-1">{spec.icon}</span>
              {spec.value}
            </Badge>
          ))}
      </div>

      {/* Technical Specifications */}
      <div className="bg-gray-50 rounded-lg p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">
          Technical Specifications
        </h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {technicalSpecs.map((spec, index) => (
            <div key={index} className="flex items-start space-x-3">
              <span className="text-lg">{spec.icon}</span>
              <div className="flex-1">
                <dt className="text-sm font-medium text-gray-600">
                  {spec.label}
                </dt>
                <dd className="text-sm text-gray-900 mt-1">
                  {spec.value}
                </dd>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Certifications */}
      <div className="bg-green-50 rounded-lg p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
          <span className="mr-2">✅</span>
          Quality Certifications
        </h3>
        
        <div className="grid grid-cols-2 gap-3">
          {certifications.map((cert, index) => (
            <div key={index} className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              <span className="text-sm text-gray-700">{cert}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Compatibility Matrix */}
      <div className="bg-blue-50 rounded-lg p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
          <span className="mr-2">📱</span>
          Device Compatibility
        </h3>
        
        <div className="space-y-3">
          <div className="flex items-center justify-between py-2 border-b border-blue-200 last:border-b-0">
            <span className="text-sm text-gray-700">Wireless Charging</span>
            <span className="text-green-600 font-medium">✓ Compatible</span>
          </div>
          <div className="flex items-center justify-between py-2 border-b border-blue-200 last:border-b-0">
            <span className="text-sm text-gray-700">MagSafe Accessories</span>
            <span className="text-green-600 font-medium">✓ Compatible</span>
          </div>
          <div className="flex items-center justify-between py-2 border-b border-blue-200 last:border-b-0">
            <span className="text-sm text-gray-700">Car Mounts</span>
            <span className="text-green-600 font-medium">✓ Compatible</span>
          </div>
          <div className="flex items-center justify-between py-2">
            <span className="text-sm text-gray-700">Screen Protectors</span>
            <span className="text-green-600 font-medium">✓ Compatible</span>
          </div>
        </div>
      </div>

      {/* Care Instructions */}
      <div className="bg-yellow-50 rounded-lg p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
          <span className="mr-2">🧼</span>
          Care Instructions
        </h3>
        
        <div className="space-y-2 text-sm text-gray-700">
          <p>• Clean with soft, damp cloth</p>
          <p>• Avoid harsh chemicals and abrasives</p>
          <p>• Remove case periodically to clean phone</p>
          <p>• Store in cool, dry place when not in use</p>
        </div>
      </div>
    </div>
  )
}

export default ProductSpecs
