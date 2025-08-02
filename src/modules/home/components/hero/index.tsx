import { Github } from "@medusajs/icons"
import { Button, Heading } from "@medusajs/ui"
import LocalizedClientLink from "@modules/common/components/localized-client-link"

const Hero = () => {
  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-white">
      {/* CASETiFY-style hero image background */}
      <div className="absolute inset-0">
        <div className="w-full h-full bg-gradient-to-br from-gray-50 via-white to-gray-100">
          {/* Product showcase background */}
          <div className="absolute inset-0 flex items-center justify-center opacity-5">
            <div className="grid grid-cols-3 gap-8 transform rotate-12 scale-150">
              {[...Array(9)].map((_, i) => (
                <div key={i} className="w-32 h-32 bg-black rounded-lg"></div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Main hero content */}
      <div className="relative z-10 flex flex-col justify-center items-center text-center min-h-screen px-4 py-20">
        <div className="max-w-6xl mx-auto space-y-16">
          {/* Hero badge */}
          <div className="inline-flex items-center px-4 py-2 bg-black text-white rounded-full text-sm font-medium tracking-wide">
            <span>Premium Quality • Fast Shipping</span>
          </div>

          {/* Main headline */}
          <div className="space-y-6">
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-black leading-tight tracking-tight">
              Express Your
              <br />
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Style
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Discover premium cases, accessories, and lifestyle products designed to protect and personalize your everyday essentials.
            </p>
          </div>

          {/* CTA buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <LocalizedClientLink href="/store">
              <Button
                size="large"
                className="bg-black hover:bg-gray-800 text-white border-0 px-8 py-4 text-lg font-semibold rounded-lg transition-all duration-300 hover:scale-105 shadow-lg"
              >
                Shop Collection
              </Button>
            </LocalizedClientLink>
            <LocalizedClientLink href="/store?featured=true">
              <Button
                variant="secondary"
                size="large"
                className="border-2 border-black text-black hover:bg-black hover:text-white px-8 py-4 text-lg font-semibold rounded-lg transition-all duration-300"
              >
                View Featured
              </Button>
            </LocalizedClientLink>
          </div>

          {/* Trust indicators */}
          <div className="flex flex-wrap justify-center items-center gap-8 text-sm text-gray-500">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              <span>Free Shipping</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
              <span>30-Day Returns</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
              <span>Premium Quality</span>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-gray-300 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-gray-400 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </div>
  )
}

export default Hero
