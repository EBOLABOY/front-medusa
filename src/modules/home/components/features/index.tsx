import { Heading } from "@medusajs/ui"

const Features = () => {
  const features = [
    {
      title: "Quality Assurance",
      description: "Every product is carefully tested and sourced from trusted manufacturers to ensure the highest quality standards.",
      icon: "✨",
      gradient: "from-yellow-400 to-orange-500"
    },
    {
      title: "Fast Shipping",
      description: "Quick and reliable delivery through Amazon Prime, TikTok Shop logistics, and our optimized fulfillment network.",
      icon: "🚚",
      gradient: "from-green-400 to-blue-500"
    },
    {
      title: "Customer First",
      description: "Our dedicated customer service team ensures your satisfaction with every purchase and resolves any concerns quickly.",
      icon: "❤️",
      gradient: "from-purple-400 to-pink-500"
    },
    {
      title: "Innovative Design",
      description: "We design products that blend functionality with style, making everyday items both useful and beautiful.",
      icon: "🎨",
      gradient: "from-blue-400 to-indigo-500"
    },
    {
      title: "Multi-Platform Presence",
      description: "Shop where you love - find our products on Amazon, TikTok Shop, and our own Shopify store for maximum convenience.",
      icon: "🛍️",
      gradient: "from-indigo-400 to-purple-500"
    },
    {
      title: "Safe & Trusted",
      description: "We prioritize safety and compliance, ensuring all products meet strict safety standards and regulations.",
      icon: "🛡️",
      gradient: "from-pink-400 to-red-500"
    }
  ]

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center px-4 py-2 bg-blue-50 rounded-full border border-blue-100 mb-6">
            <span className="text-sm font-medium text-blue-700">Why Choose Our Products</span>
          </div>
          <Heading
            level="h2"
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-6"
          >
            Quality You Can Trust
          </Heading>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From concept to your doorstep, we're committed to bringing you exceptional products 
            that enhance your daily life and bring joy to your home.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group relative p-8 bg-white rounded-3xl border border-gray-100 hover:border-gray-200 hover:shadow-xl transition-all duration-300 cursor-pointer"
            >
              {/* Background gradient on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-blue-50 opacity-0 group-hover:opacity-100 rounded-3xl transition-opacity duration-300" />
              
              {/* Content */}
              <div className="relative z-10">
                {/* Icon */}
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${feature.gradient} flex items-center justify-center text-2xl mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  {feature.icon}
                </div>
                
                {/* Title */}
                <Heading
                  level="h3"
                  className="text-xl font-bold text-gray-900 mb-4 group-hover:text-blue-700 transition-colors duration-300"
                >
                  {feature.title}
                </Heading>
                
                {/* Description */}
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Product Categories Showcase */}
        <div className="mt-20 text-center">
          <Heading
            level="h3"
            className="text-2xl font-bold text-gray-900 mb-8"
          >
            Our Product Categories
          </Heading>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="p-6 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl">
              <div className="text-5xl mb-4">🏠</div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">Home & Living</h4>
              <p className="text-gray-600 text-sm">Decorative accessories, organizers, and functional items for your home</p>
            </div>
            <div className="p-6 bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl">
              <div className="text-5xl mb-4">👶</div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">Kids' Items</h4>
              <p className="text-gray-600 text-sm">Safe, educational, and fun products designed specifically for children</p>
            </div>
            <div className="p-6 bg-gradient-to-br from-green-50 to-blue-50 rounded-2xl">
              <div className="text-5xl mb-4">🎯</div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">Lifestyle Gadgets</h4>
              <p className="text-gray-600 text-sm">Innovative gadgets that make daily tasks easier and more enjoyable</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Features