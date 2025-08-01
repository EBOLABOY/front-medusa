import { Heading } from "@medusajs/ui"

const Features = () => {
  const features = [
    {
      title: "Quality Assurance",
      description: "Every product is carefully tested and sourced from trusted manufacturers to ensure the highest quality standards.",
      icon: "✨",
      iconBg: "from-orange-400/20 to-orange-400/10 border-orange-400/30",
      titleColor: "group-hover:text-orange-500",
      bgGradient: "from-orange-400/10 to-orange-400/5",
      accent: "bg-orange-500"
    },
    {
      title: "Fast Shipping",
      description: "Quick and reliable delivery through Amazon Prime, TikTok Shop logistics, and our optimized fulfillment network.",
      icon: "🚚",
      iconBg: "from-green-400/20 to-green-400/10 border-green-400/30",
      titleColor: "group-hover:text-green-500",
      bgGradient: "from-green-400/10 to-green-400/5",
      accent: "bg-green-500"
    },
    {
      title: "Customer First",
      description: "Our dedicated customer service team ensures your satisfaction with every purchase and resolves any concerns quickly.",
      icon: "❤️",
      iconBg: "from-pink-400/20 to-pink-400/10 border-pink-400/30",
      titleColor: "group-hover:text-pink-500",
      bgGradient: "from-pink-400/10 to-pink-400/5",
      accent: "bg-pink-500"
    },
    {
      title: "Innovative Design",
      description: "We design products that blend functionality with style, making everyday items both useful and beautiful.",
      icon: "🎨",
      iconBg: "from-blue-400/20 to-blue-400/10 border-blue-400/30",
      titleColor: "group-hover:text-blue-500",
      bgGradient: "from-blue-400/10 to-blue-400/5",
      accent: "bg-blue-500"
    },
    {
      title: "Multi-Platform Presence",
      description: "Shop where you love - find our products on Amazon, TikTok Shop, and our own Shopify store for maximum convenience.",
      icon: "🛍️",
      iconBg: "from-purple-400/20 to-purple-400/10 border-purple-400/30",
      titleColor: "group-hover:text-purple-500",
      bgGradient: "from-purple-400/10 to-purple-400/5",
      accent: "bg-purple-500"
    },
    {
      title: "Safe & Trusted",
      description: "We prioritize safety and compliance, ensuring all products meet strict safety standards and regulations.",
      icon: "🛡️",
      iconBg: "from-red-400/20 to-red-400/10 border-red-400/30",
      titleColor: "group-hover:text-red-500",
      bgGradient: "from-red-400/10 to-red-400/5",
      accent: "bg-red-500"
    }
  ]

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* 简化的区域标题 */}
        <div className="text-center mb-12">
          <Heading
            level="h2"
            className="text-3xl md:text-4xl font-black text-black mb-6"
          >
            Why Choose SparkCore
          </Heading>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            From concept to your doorstep, we're committed to bringing you exceptional products
            that enhance your daily life and bring joy to your home.
          </p>
        </div>

        {/* CASETiFY风格特性网格 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group p-8 bg-white rounded-2xl border border-gray-200 hover:border-black hover:shadow-lg transition-all duration-300"
            >
              {/* 图标 */}
              <div className="text-4xl mb-4">
                {feature.icon}
              </div>

              {/* 标题 */}
              <Heading
                level="h3"
                className="text-xl font-bold text-black mb-3"
              >
                {feature.title}
              </Heading>

              {/* 描述 */}
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>


      </div>
    </section>
  )
}

export default Features