import { Button, Heading } from "@medusajs/ui"
import LocalizedClientLink from "@modules/common/components/localized-client-link"

const AboutSection = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* 简化内容 */}
          <div className="space-y-8">
            <div className="space-y-6">
              <Heading
                level="h2"
                className="text-3xl md:text-4xl font-black text-black leading-tight"
              >
                About SparkCore
              </Heading>

              <p className="text-lg text-gray-700 leading-relaxed">
                SparkCore LLC is a U.S.-based e-commerce company dedicated to designing, sourcing,
                and selling everyday consumer products that make life better. We specialize in home & living
                accessories, kids' items, and lifestyle gadgets that combine quality, functionality, and style.
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-8 h-8 bg-black rounded-full flex items-center justify-center">
                  <span className="text-white text-sm font-bold">✓</span>
                </div>
                <div>
                  <h4 className="font-bold text-black mb-1">Carefully Curated Selection</h4>
                  <p className="text-gray-600">Every product is thoughtfully selected and tested to meet our high standards.</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-8 h-8 bg-black rounded-full flex items-center justify-center">
                  <span className="text-white text-sm font-bold">✓</span>
                </div>
                <div>
                  <h4 className="font-bold text-black mb-1">Multi-Platform Convenience</h4>
                  <p className="text-gray-600">Shop easily on Amazon, TikTok Shop, or our Shopify store.</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-8 h-8 bg-black rounded-full flex items-center justify-center">
                  <span className="text-white text-sm font-bold">✓</span>
                </div>
                <div>
                  <h4 className="font-bold text-black mb-1">Trusted & Safe</h4>
                  <p className="text-gray-600">We prioritize safety and compliance for all our products.</p>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <LocalizedClientLink href="/store">
                <Button
                  size="large"
                  className="bg-black hover:bg-gray-800 text-white border-0 px-8 py-3 font-bold rounded-full transition-colors"
                >
                  Shop Our Products
                </Button>
              </LocalizedClientLink>
              <div className="flex gap-4 text-sm">
                <a
                  href="https://amazon.com/stores/sparkcore"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-black transition-colors underline"
                >
                  Amazon Store
                </a>
                <a
                  href="https://shop.tiktok.com/@sparkcore"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-black transition-colors underline"
                >
                  TikTok Shop
                </a>
              </div>
            </div>
          </div>

          {/* 简化视觉元素 */}
          <div className="relative">
            <div className="bg-white rounded-2xl p-8 border border-gray-200">
              {/* 公司统计 */}
              <div className="text-center mb-8">
                <Heading level="h3" className="text-2xl font-bold text-black mb-6">
                  SparkCore at a Glance
                </Heading>
              </div>

              {/* 简单统计 */}
              <div className="grid grid-cols-2 gap-6 mb-8">
                <div className="text-center">
                  <div className="text-3xl mb-2">🇺🇸</div>
                  <div className="text-gray-700 text-sm font-medium">U.S.-Based</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl mb-2">3</div>
                  <div className="text-gray-700 text-sm font-medium">Platforms</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl mb-2">100%</div>
                  <div className="text-gray-700 text-sm font-medium">Quality Tested</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl mb-2">0</div>
                  <div className="text-gray-700 text-sm font-medium">Prohibited Items</div>
                </div>
              </div>

              {/* 简单平台链接 */}
              <div className="border-t border-gray-200 pt-6">
                <div className="text-center mb-4">
                  <h4 className="font-bold text-black">Find Us On</h4>
                </div>
                <div className="flex justify-center space-x-6">
                  <div className="text-center">
                    <div className="w-12 h-12 bg-black rounded-xl flex items-center justify-center mb-2">
                      <span className="text-white font-bold text-sm">AMZ</span>
                    </div>
                    <span className="text-xs text-gray-600">Amazon</span>
                  </div>
                  <div className="text-center">
                    <div className="w-12 h-12 bg-black rounded-xl flex items-center justify-center mb-2">
                      <span className="text-white font-bold text-sm">TT</span>
                    </div>
                    <span className="text-xs text-gray-600">TikTok</span>
                  </div>
                  <div className="text-center">
                    <div className="w-12 h-12 bg-black rounded-xl flex items-center justify-center mb-2">
                      <span className="text-white font-bold text-sm">SF</span>
                    </div>
                    <span className="text-xs text-gray-600">Shopify</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection