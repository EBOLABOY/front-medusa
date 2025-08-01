import { Metadata } from "next"
import { Button, Heading } from "@medusajs/ui"

export const metadata: Metadata = {
  title: "Contact Us - SparkCore LLC",
  description: "Get in touch with SparkCore LLC. Find us on Amazon, TikTok Shop, or reach out directly for customer support and inquiries.",
}

export default function ContactPage() {
  return (
    <div className="py-16">
      {/* Hero Section */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-16">
        <Heading
          level="h1"
          className="text-4xl md:text-5xl font-bold text-gray-900 mb-6"
        >
          Get in Touch
        </Heading>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          We'd love to hear from you! Whether you have questions about our products, 
          need customer support, or want to learn more about SparkCore LLC.
        </p>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div>
            <Heading level="h2" className="text-2xl font-bold text-gray-900 mb-8">
              How to Reach Us
            </Heading>
            
            <div className="space-y-8">
              {/* Customer Support */}
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center">
                  <span className="text-white text-xl">💬</span>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Customer Support</h3>
                  <p className="text-gray-600 mb-3">
                    For product questions, order issues, or returns, please contact us through 
                    the platform where you made your purchase:
                  </p>
                  <ul className="text-gray-600 space-y-1">
                    <li>• Amazon: Use Amazon's messaging system</li>
                    <li>• TikTok Shop: Contact through TikTok Shop support</li>
                    <li>• Shopify Store: Use our store's contact form</li>
                  </ul>
                </div>
              </div>

              {/* Business Inquiries */}
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
                  <span className="text-white text-xl">🤝</span>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Business Inquiries</h3>
                  <p className="text-gray-600">
                    For wholesale opportunities, partnerships, or media inquiries, 
                    please reach out through our business channels.
                  </p>
                </div>
              </div>

              {/* Location */}
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-pink-500 to-red-500 rounded-lg flex items-center justify-center">
                  <span className="text-white text-xl">🇺🇸</span>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Location</h3>
                  <p className="text-gray-600">
                    SparkCore LLC is proudly based in the United States. 
                    We serve customers nationwide and internationally through our platform partners.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Shop with Us */}
          <div>
            <Heading level="h2" className="text-2xl font-bold text-gray-900 mb-8">
              Shop Our Products
            </Heading>
            
            <div className="space-y-6">
              {/* Amazon Store */}
              <div className="bg-gradient-to-r from-orange-50 to-yellow-50 p-6 rounded-xl">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-orange-400 to-yellow-500 rounded-xl flex items-center justify-center">
                    <span className="text-white font-bold">AMZ</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">Amazon Store</h3>
                    <p className="text-gray-600 text-sm">Prime shipping available</p>
                  </div>
                </div>
                <p className="text-gray-600 mb-4">
                  Shop our full collection with fast Prime delivery and Amazon's trusted customer service.
                </p>
                <a 
                  href="https://amazon.com/stores/sparkcore" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  <Button className="bg-gradient-to-r from-orange-500 to-yellow-500 text-white border-0">
                    Visit Amazon Store
                  </Button>
                </a>
              </div>

              {/* TikTok Shop */}
              <div className="bg-gradient-to-r from-pink-50 to-red-50 p-6 rounded-xl">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-pink-400 to-red-500 rounded-xl flex items-center justify-center">
                    <span className="text-white font-bold">TT</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">TikTok Shop</h3>
                    <p className="text-gray-600 text-sm">Discover through video</p>
                  </div>
                </div>
                <p className="text-gray-600 mb-4">
                  See our products in action and shop directly through TikTok's social commerce platform.
                </p>
                <a 
                  href="https://shop.tiktok.com/@sparkcore" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  <Button className="bg-gradient-to-r from-pink-500 to-red-500 text-white border-0">
                    Visit TikTok Shop
                  </Button>
                </a>
              </div>

              {/* Shopify Store */}
              <div className="bg-gradient-to-r from-green-50 to-blue-50 p-6 rounded-xl">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-green-400 to-blue-500 rounded-xl flex items-center justify-center">
                    <span className="text-white font-bold">SF</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">Our Store</h3>
                    <p className="text-gray-600 text-sm">Direct from SparkCore</p>
                  </div>
                </div>
                <p className="text-gray-600 mb-4">
                  Shop directly from our Shopify store for the complete SparkCore experience.
                </p>
                <Button 
                  className="bg-gradient-to-r from-green-500 to-blue-500 text-white border-0"
                  disabled
                >
                  Coming Soon
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mt-20">
          <div className="text-center mb-12">
            <Heading level="h2" className="text-3xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </Heading>
            <p className="text-gray-600">Quick answers to common questions</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  What types of products do you sell?
                </h3>
                <p className="text-gray-600">
                  We specialize in three categories: home & living accessories, kids' items, 
                  and lifestyle gadgets. All products are carefully curated for quality and functionality.
                </p>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Where can I buy your products?
                </h3>
                <p className="text-gray-600">
                  Our products are available on Amazon, TikTok Shop, and our upcoming Shopify store. 
                  Choose the platform that's most convenient for you.
                </p>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Do you ship internationally?
                </h3>
                <p className="text-gray-600">
                  International shipping availability depends on the platform. Amazon and TikTok Shop 
                  each have their own international shipping policies.
                </p>
              </div>
            </div>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  How do I return or exchange a product?
                </h3>
                <p className="text-gray-600">
                  Returns and exchanges are handled through the platform where you made your purchase. 
                  Each platform has its own return policy and process.
                </p>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Are your products safe for children?
                </h3>
                <p className="text-gray-600">
                  Yes! All our kids' items meet or exceed safety standards. We prioritize safety 
                  in our product selection and never compromise on quality.
                </p>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Do you offer wholesale pricing?
                </h3>
                <p className="text-gray-600">
                  For wholesale inquiries and bulk orders, please contact us through our 
                  business inquiry channels. We're happy to discuss partnership opportunities.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}