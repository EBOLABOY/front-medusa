import { Heading } from "@medusajs/ui"

const Features = () => {
  const features = [
    {
      title: "Lightning Fast Performance",
      description: "Optimized for speed with cutting-edge technology ensuring your customers enjoy seamless shopping experiences.",
      icon: "⚡",
      gradient: "from-yellow-400 to-orange-500"
    },
    {
      title: "Secure & Reliable",
      description: "Enterprise-grade security with 99.9% uptime guarantee. Your data and transactions are always protected.",
      icon: "🔒",
      gradient: "from-green-400 to-blue-500"
    },
    {
      title: "Mobile-First Design",
      description: "Responsive designs that look perfect on any device, optimized for mobile commerce and user experience.",
      icon: "📱",
      gradient: "from-purple-400 to-pink-500"
    },
    {
      title: "Analytics & Insights",
      description: "Advanced analytics and reporting tools to help you understand your customers and grow your business.",
      icon: "📊",
      gradient: "from-blue-400 to-indigo-500"
    },
    {
      title: "24/7 Expert Support",
      description: "Round-the-clock technical support from our team of e-commerce experts and developers.",
      icon: "🎧",
      gradient: "from-indigo-400 to-purple-500"
    },
    {
      title: "Scalable Solutions",
      description: "Grow without limits. Our infrastructure scales with your business from startup to enterprise.",
      icon: "🚀",
      gradient: "from-pink-400 to-red-500"
    }
  ]

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center px-4 py-2 bg-blue-50 rounded-full border border-blue-100 mb-6">
            <span className="text-sm font-medium text-blue-700">Why Choose SparkCore LLC</span>
          </div>
          <Heading
            level="h2"
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-6"
          >
            Built for Modern Commerce
          </Heading>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We combine innovative technology with proven strategies to deliver e-commerce solutions 
            that drive real results for businesses of all sizes.
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

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 transition-colors duration-300 cursor-pointer">
            <span className="font-medium">Ready to get started?</span>
            <span className="text-xl">→</span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Features