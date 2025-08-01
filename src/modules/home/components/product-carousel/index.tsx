"use client"

import { Heading } from "@medusajs/ui"

const ProductCarousel = () => {
  const products = [
    {
      id: 1,
      name: "Smart Home Organizer",
      category: "Home & Living",
      image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=500&h=500&fit=crop",
      price: "$29.99",
      badge: "Best Seller",
      color: "bg-blue-500"
    },
    {
      id: 2,
      name: "Kids Safety Set",
      category: "Kids' Items",
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=500&h=500&fit=crop",
      price: "$19.99",
      badge: "New",
      color: "bg-pink-500"
    },
    {
      id: 3,
      name: "Wireless Charging Pad",
      category: "Lifestyle Gadgets",
      image: "https://images.unsplash.com/photo-1572569511254-d8f925fe2cbb?w=500&h=500&fit=crop",
      price: "$39.99",
      badge: "Popular",
      color: "bg-purple-500"
    },
    {
      id: 4,
      name: "Minimalist Desk Lamp",
      category: "Home & Living",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&h=500&fit=crop",
      price: "$49.99",
      badge: "Featured",
      color: "bg-green-500"
    },
    {
      id: 5,
      name: "Educational Toy Set",
      category: "Kids' Items",
      image: "https://images.unsplash.com/photo-1558060370-d644479cb6f7?w=500&h=500&fit=crop",
      price: "$24.99",
      badge: "Safe",
      color: "bg-orange-500"
    },
    {
      id: 6,
      name: "Bluetooth Speaker",
      category: "Lifestyle Gadgets",
      image: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=500&h=500&fit=crop",
      price: "$59.99",
      badge: "Premium",
      color: "bg-red-500"
    },
    {
      id: 7,
      name: "Ceramic Vase Set",
      category: "Home & Living",
      image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=500&h=500&fit=crop",
      price: "$34.99",
      badge: "Trending",
      color: "bg-teal-500"
    },
    {
      id: 8,
      name: "Smart Watch for Kids",
      category: "Kids' Items",
      image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500&h=500&fit=crop",
      price: "$89.99",
      badge: "Tech",
      color: "bg-indigo-500"
    }
  ]

  return (
    <section className="py-16 bg-white">
      <div className="max-w-full px-4 sm:px-6 lg:px-8">
        {/* CASETiFY风格区域标题 */}
        <div className="text-center mb-12">
          <Heading
            level="h2"
            className="text-3xl md:text-4xl font-black text-black mb-4"
          >
            Featured Products
          </Heading>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover our most popular items across all categories
          </p>
        </div>

        {/* CASETiFY风格横向滚动 - 更大的产品卡片 */}
        <div className="relative">
          <div className="flex gap-4 overflow-x-auto pb-6 scrollbar-hide px-4">
            {products.map((product, index) => (
              <div
                key={product.id}
                className="group flex-shrink-0 w-72 bg-white border border-gray-200 rounded-3xl overflow-hidden hover:shadow-2xl transition-all duration-500 cursor-pointer hover:-translate-y-2"
              >
                {/* 产品图片 */}
                <div className="relative aspect-square overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  {/* 徽章 */}
                  <div className={`absolute top-4 left-4 px-3 py-1 ${product.color} text-white text-xs font-bold rounded-full`}>
                    {product.badge}
                  </div>
                  {/* 悬停遮罩 */}
                  <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  {/* CASETiFY风格的悬停按钮 */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <button className="bg-white text-black px-6 py-2 rounded-full font-bold hover:bg-gray-100 transition-colors">
                      Quick View
                    </button>
                  </div>
                </div>

                {/* 产品信息 */}
                <div className="p-6">
                  <div className="text-xs font-medium text-gray-500 uppercase tracking-wide mb-2">
                    {product.category}
                  </div>
                  <Heading
                    level="h3"
                    className="text-lg font-bold text-black mb-3 group-hover:text-gray-700 transition-colors"
                  >
                    {product.name}
                  </Heading>
                  <div className="text-xl font-black text-black">
                    {product.price}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* 滚动指示器 */}
          <div className="flex justify-center mt-8 gap-2">
            {Array.from({ length: Math.ceil(products.length / 4) }).map((_, index) => (
              <div
                key={index}
                className="w-2 h-2 rounded-full bg-gray-300 hover:bg-black transition-colors cursor-pointer"
              />
            ))}
          </div>
        </div>

        {/* CTA按钮 */}
        <div className="text-center mt-12">
          <a
            href="/store"
            className="inline-flex items-center px-8 py-3 bg-black text-white font-bold rounded-full hover:bg-gray-800 transition-colors"
          >
            View All Products
            <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </a>
        </div>
      </div>

      <style jsx>{`
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  )
}

export default ProductCarousel
