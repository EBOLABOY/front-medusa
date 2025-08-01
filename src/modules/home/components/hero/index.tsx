import { Github } from "@medusajs/icons"
import { Button, Heading } from "@medusajs/ui"
import LocalizedClientLink from "@modules/common/components/localized-client-link"

const Hero = () => {
  return (
    <div className="relative h-[85vh] w-full overflow-hidden">
      {/* Background with gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
      </div>
      
      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-tl from-indigo-400/20 to-pink-400/20 rounded-full blur-3xl" />
      
      {/* Main content */}
      <div className="relative z-10 flex flex-col justify-center items-center text-center h-full px-4 max-w-6xl mx-auto">
        <div className="space-y-8">
          {/* Company logo/name */}
          <div className="space-y-4">
            <div className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20">
              <span className="text-sm font-medium text-gray-700">Welcome to the future of e-commerce</span>
            </div>
            
            <Heading
              level="h1"
              className="text-5xl md:text-7xl lg:text-8xl font-bold bg-gradient-to-r from-gray-900 via-blue-800 to-purple-800 bg-clip-text text-transparent leading-tight"
            >
              SparkCore LLC
            </Heading>
            
            <Heading
              level="h2"
              className="text-2xl md:text-3xl lg:text-4xl font-light text-gray-600 max-w-3xl mx-auto"
            >
              Premium E-commerce Solutions That Drive Success
            </Heading>
          </div>

          {/* Description */}
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Transforming digital commerce through innovative technology, exceptional design, 
            and unparalleled customer experiences. Your trusted partner in building the future of online retail.
          </p>

          {/* Stats or features */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center p-6 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10">
              <div className="text-3xl font-bold text-blue-600 mb-2">500+</div>
              <div className="text-gray-600">Happy Clients</div>
            </div>
            <div className="text-center p-6 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10">
              <div className="text-3xl font-bold text-purple-600 mb-2">99.9%</div>
              <div className="text-gray-600">Uptime</div>
            </div>
            <div className="text-center p-6 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10">
              <div className="text-3xl font-bold text-indigo-600 mb-2">24/7</div>
              <div className="text-gray-600">Support</div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <LocalizedClientLink href="/store">
              <Button 
                size="xlarge" 
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white border-0 px-8 py-4 text-lg shadow-xl hover:shadow-2xl transition-all duration-300"
              >
                Explore Our Solutions
              </Button>
            </LocalizedClientLink>
            <LocalizedClientLink href="/about">
              <Button 
                variant="secondary" 
                size="xlarge"
                className="bg-white/10 backdrop-blur-sm border-white/20 text-gray-700 hover:bg-white/20 px-8 py-4 text-lg transition-all duration-300"
              >
                Learn More About Us
              </Button>
            </LocalizedClientLink>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-gray-400 rounded-full mt-2"></div>
        </div>
      </div>
    </div>
  )
}

export default Hero
