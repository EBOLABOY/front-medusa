import { Button, Heading } from "@medusajs/ui"
import LocalizedClientLink from "@modules/common/components/localized-client-link"

const AboutSection = () => {
  return (
    <section className="py-24 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <div className="inline-flex items-center px-4 py-2 bg-white/50 backdrop-blur-sm rounded-full border border-white/20">
                <span className="text-sm font-medium text-gray-700">About SparkCore LLC</span>
              </div>
              
              <Heading
                level="h2"
                className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight"
              >
                Bringing Quality Products to Your Everyday Life
              </Heading>
              
              <p className="text-xl text-gray-600 leading-relaxed">
                SparkCore LLC is a U.S.-based e-commerce company dedicated to designing, sourcing, 
                and selling everyday consumer products that make life better. We specialize in home & living 
                accessories, kids' items, and lifestyle gadgets that combine quality, functionality, and style.
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
                  <span className="text-white text-sm font-bold">✓</span>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Carefully Curated Selection</h4>
                  <p className="text-gray-600">Every product is thoughtfully selected and tested to meet our high standards for quality and functionality.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
                  <span className="text-white text-sm font-bold">✓</span>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Multi-Platform Convenience</h4>
                  <p className="text-gray-600">Shop easily on Amazon, TikTok Shop, or our Shopify store - wherever you prefer to shop.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-r from-pink-500 to-red-500 rounded-full flex items-center justify-center">
                  <span className="text-white text-sm font-bold">✓</span>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Trusted & Safe</h4>
                  <p className="text-gray-600">We prioritize safety and compliance, especially for kids' products, and never deal in firearms, adult content, or controlled substances.</p>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <LocalizedClientLink href="/store">
                <Button 
                  size="large"
                  className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white border-0 px-8 py-3"
                >
                  Shop Our Products
                </Button>
              </LocalizedClientLink>
              <div className="flex gap-2">
                <a 
                  href="https://amazon.com/stores/sparkcore" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  <Button 
                    variant="secondary"
                    size="large"
                    className="border-gray-300 text-gray-700 hover:bg-gray-50 px-6 py-3"
                  >
                    Amazon Store
                  </Button>
                </a>
                <a 
                  href="https://shop.tiktok.com/@sparkcore" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  <Button 
                    variant="secondary"
                    size="large"
                    className="border-gray-300 text-gray-700 hover:bg-gray-50 px-6 py-3"
                  >
                    TikTok Shop
                  </Button>
                </a>
              </div>
            </div>
          </div>

          {/* Visual Element */}
          <div className="relative">
            <div className="relative z-10 bg-white rounded-3xl p-8 shadow-2xl">
              {/* Company Info */}
              <div className="text-center mb-8">
                <Heading level="h3" className="text-2xl font-bold text-gray-900 mb-4">
                  SparkCore LLC at a Glance
                </Heading>
              </div>
              
              {/* Stats */}
              <div className="grid grid-cols-2 gap-6 mb-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-2">🇺🇸</div>
                  <div className="text-gray-600 text-sm font-medium">U.S.-Based Company</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-purple-600 mb-2">3</div>
                  <div className="text-gray-600 text-sm font-medium">Sales Platforms</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-indigo-600 mb-2">100%</div>
                  <div className="text-gray-600 text-sm font-medium">Quality Tested</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-pink-600 mb-2">0</div>
                  <div className="text-gray-600 text-sm font-medium">Prohibited Items</div>
                </div>
              </div>
              
              {/* Platform Icons */}
              <div className="border-t border-gray-100 pt-6">
                <div className="text-center mb-4">
                  <h4 className="font-semibold text-gray-900">Find Us On</h4>
                </div>
                <div className="flex justify-center space-x-6">
                  <div className="text-center">
                    <div className="w-12 h-12 bg-gradient-to-r from-orange-400 to-yellow-500 rounded-xl flex items-center justify-center mb-2">
                      <span className="text-white font-bold text-sm">AMZ</span>
                    </div>
                    <span className="text-xs text-gray-600">Amazon</span>
                  </div>
                  <div className="text-center">
                    <div className="w-12 h-12 bg-gradient-to-r from-pink-400 to-red-500 rounded-xl flex items-center justify-center mb-2">
                      <span className="text-white font-bold text-sm">TT</span>
                    </div>
                    <span className="text-xs text-gray-600">TikTok Shop</span>
                  </div>
                  <div className="text-center">
                    <div className="w-12 h-12 bg-gradient-to-r from-green-400 to-blue-500 rounded-xl flex items-center justify-center mb-2">
                      <span className="text-white font-bold text-sm">SF</span>
                    </div>
                    <span className="text-xs text-gray-600">Shopify</span>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Background decorations */}
            <div className="absolute -top-4 -left-4 w-72 h-72 bg-gradient-to-br from-blue-200/50 to-purple-200/50 rounded-full blur-3xl -z-10" />
            <div className="absolute -bottom-4 -right-4 w-72 h-72 bg-gradient-to-tl from-purple-200/50 to-pink-200/50 rounded-full blur-3xl -z-10" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection