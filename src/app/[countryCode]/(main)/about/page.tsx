import { Metadata } from "next"
import { Button, Heading } from "@medusajs/ui"
import LocalizedClientLink from "@modules/common/components/localized-client-link"

export const metadata: Metadata = {
  title: "About Us - SparkCore LLC",
  description: "Learn about SparkCore LLC, a U.S.-based e-commerce company specializing in home & living accessories, kids' items, and lifestyle gadgets.",
}

export default function AboutPage() {
  return (
    <div className="py-16">
      {/* Hero Section */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-16">
        <Heading
          level="h1"
          className="text-4xl md:text-5xl font-bold text-gray-900 mb-6"
        >
          About SparkCore LLC
        </Heading>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          We're a U.S.-based e-commerce company dedicated to bringing you the best everyday consumer products 
          that enhance your life and home.
        </p>
      </div>

      {/* Our Story */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <Heading level="h2" className="text-3xl font-bold text-gray-900 mb-6">
              Our Story
            </Heading>
            <div className="space-y-4 text-gray-600">
              <p>
                SparkCore LLC was founded with a simple mission: to design, source, and sell everyday consumer 
                products that make life better. We believe that quality shouldn't be compromised, and that 
                great products should be accessible to everyone.
              </p>
              <p>
                Based in the United States, we specialize in three core categories: home & living accessories 
                that beautify your space, kids' items that prioritize safety and fun, and lifestyle gadgets 
                that solve everyday problems with smart design.
              </p>
              <p>
                Our products are available across multiple platforms including Amazon, TikTok Shop, and our 
                own Shopify store, ensuring you can shop wherever you're most comfortable.
              </p>
            </div>
          </div>
          <div className="bg-gradient-to-br from-blue-50 to-purple-50 p-8 rounded-2xl">
            <div className="grid grid-cols-2 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600 mb-2">🇺🇸</div>
                <div className="text-sm text-gray-600">U.S.-Based</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-600 mb-2">3</div>
                <div className="text-sm text-gray-600">Product Categories</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-indigo-600 mb-2">100%</div>
                <div className="text-sm text-gray-600">Quality Tested</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-pink-600 mb-2">3</div>
                <div className="text-sm text-gray-600">Sales Platforms</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Our Values */}
      <div className="bg-gray-50 py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <Heading level="h2" className="text-3xl font-bold text-gray-900 mb-4">
              Our Values
            </Heading>
            <p className="text-gray-600">The principles that guide everything we do</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl">✨</span>
              </div>
              <Heading level="h3" className="text-xl font-semibold text-gray-900 mb-3">
                Quality First
              </Heading>
              <p className="text-gray-600">
                Every product undergoes rigorous testing to ensure it meets our high standards for 
                quality, safety, and functionality.
              </p>
            </div>
            
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl">❤️</span>
              </div>
              <Heading level="h3" className="text-xl font-semibold text-gray-900 mb-3">
                Customer Focus
              </Heading>
              <p className="text-gray-600">
                Your satisfaction is our priority. We're committed to providing excellent service 
                and standing behind every product we sell.
              </p>
            </div>
            
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-gradient-to-r from-pink-500 to-red-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl">🛡️</span>
              </div>
              <Heading level="h3" className="text-xl font-semibold text-gray-900 mb-3">
                Safety & Trust
              </Heading>
              <p className="text-gray-600">
                We never compromise on safety, especially for kids' products. We don't deal in 
                firearms, adult content, or controlled substances.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Our Categories */}
      <div className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <Heading level="h2" className="text-3xl font-bold text-gray-900 mb-4">
              What We Offer
            </Heading>
            <p className="text-gray-600">Three carefully curated product categories</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-8 rounded-2xl text-center">
              <div className="text-6xl mb-4">🏠</div>
              <Heading level="h3" className="text-xl font-bold text-gray-900 mb-3">
                Home & Living
              </Heading>
              <p className="text-gray-600">
                Decorative accessories, organizers, and functional items that make your house a home.
              </p>
            </div>
            
            <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-8 rounded-2xl text-center">
              <div className="text-6xl mb-4">👶</div>
              <Heading level="h3" className="text-xl font-bold text-gray-900 mb-3">
                Kids' Items
              </Heading>
              <p className="text-gray-600">
                Safe, educational, and fun products designed specifically for children's development and enjoyment.
              </p>
            </div>
            
            <div className="bg-gradient-to-br from-green-50 to-blue-50 p-8 rounded-2xl text-center">
              <div className="text-6xl mb-4">🎯</div>
              <Heading level="h3" className="text-xl font-bold text-gray-900 mb-3">
                Lifestyle Gadgets
              </Heading>
              <p className="text-gray-600">
                Innovative gadgets and tools that solve everyday problems and make life more convenient.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Heading level="h2" className="text-3xl font-bold text-white mb-4">
            Ready to Discover Great Products?
          </Heading>
          <p className="text-xl text-blue-100 mb-8">
            Explore our carefully curated selection across all our platforms
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <LocalizedClientLink href="/store">
              <Button size="large" className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3">
                Browse Products
              </Button>
            </LocalizedClientLink>
            <LocalizedClientLink href="/contact">
              <Button 
                variant="secondary" 
                size="large" 
                className="border-white text-white hover:bg-white/10 px-8 py-3"
              >
                Contact Us
              </Button>
            </LocalizedClientLink>
          </div>
        </div>
      </div>
    </div>
  )
}