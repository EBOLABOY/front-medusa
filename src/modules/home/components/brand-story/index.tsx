import LocalizedClientLink from "@modules/common/components/localized-client-link"
import { Button } from "@medusajs/ui"

const BrandStory = () => {
  const features = [
    {
      icon: "🛡️",
      title: "Premium Protection",
      description: "Military-grade materials tested to withstand everyday drops and impacts"
    },
    {
      icon: "🎨",
      title: "Custom Design",
      description: "Express yourself with personalized designs and premium finishes"
    },
    {
      icon: "🌱",
      title: "Sustainable",
      description: "Eco-friendly materials and packaging for a better tomorrow"
    },
    {
      icon: "⚡",
      title: "Fast Shipping",
      description: "Quick delivery worldwide with premium packaging and care"
    }
  ]

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <div className="inline-flex items-center px-4 py-2 bg-black text-white rounded-full text-sm font-medium">
                Our Story
              </div>
              
              <h2 className="text-4xl md:text-5xl font-bold text-black leading-tight">
                Designed for
                <br />
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  Real Life
                </span>
              </h2>
              
              <p className="text-xl text-gray-600 leading-relaxed">
                We believe your accessories should be as unique as you are. That's why we create premium products that combine cutting-edge protection with personalized style.
              </p>
            </div>

            {/* Features grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <div key={index} className="space-y-3">
                  <div className="text-2xl">{feature.icon}</div>
                  <h3 className="text-lg font-semibold text-black">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <LocalizedClientLink href="/about">
                <Button
                  size="large"
                  className="bg-black hover:bg-gray-800 text-white px-6 py-3 rounded-lg transition-all duration-300"
                >
                  Learn More
                </Button>
              </LocalizedClientLink>
              <LocalizedClientLink href="/store?custom=true">
                <Button
                  variant="secondary"
                  size="large"
                  className="border-2 border-black text-black hover:bg-black hover:text-white px-6 py-3 rounded-lg transition-all duration-300"
                >
                  Start Customizing
                </Button>
              </LocalizedClientLink>
            </div>
          </div>

          {/* Right visual */}
          <div className="relative">
            <div className="relative z-10 bg-white rounded-2xl p-8 shadow-xl">
              {/* Stats */}
              <div className="grid grid-cols-2 gap-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-black mb-2">1M+</div>
                  <div className="text-gray-600 text-sm">Happy Customers</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-black mb-2">50+</div>
                  <div className="text-gray-600 text-sm">Countries Served</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-black mb-2">99%</div>
                  <div className="text-gray-600 text-sm">Satisfaction Rate</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-black mb-2">24/7</div>
                  <div className="text-gray-600 text-sm">Support</div>
                </div>
              </div>

              {/* Customer testimonial */}
              <div className="mt-8 pt-8 border-t border-gray-200">
                <div className="flex items-center space-x-1 mb-3">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-4 h-4 text-yellow-400 fill-current" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-gray-700 text-sm italic mb-3">
                  "Amazing quality and fast shipping. My custom case looks exactly like I imagined!"
                </p>
                <p className="text-gray-500 text-xs">- Sarah M., Verified Customer</p>
              </div>
            </div>

            {/* Background decoration */}
            <div className="absolute -top-4 -right-4 w-full h-full bg-gradient-to-br from-blue-100 to-purple-100 rounded-2xl -z-10"></div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default BrandStory
