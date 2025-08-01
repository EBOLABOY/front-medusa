import { Heading } from "@medusajs/ui"

const CategoryShowcase = () => {
  const categories = [
    {
      id: 1,
      name: "Home & Living",
      description: "Beautiful accessories for your space",
      image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=600&h=400&fit=crop",
      icon: "🏠",
      color: "from-blue-500 to-purple-500"
    },
    {
      id: 2,
      name: "Kids' Items",
      description: "Safe, fun products for little ones",
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=400&fit=crop",
      icon: "👶",
      color: "from-pink-500 to-orange-500"
    },
    {
      id: 3,
      name: "Lifestyle Gadgets",
      description: "Smart solutions for modern living",
      image: "https://images.unsplash.com/photo-1572569511254-d8f925fe2cbb?w=600&h=400&fit=crop",
      icon: "🎯",
      color: "from-green-500 to-teal-500"
    }
  ]

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* 区域标题 */}
        <div className="text-center mb-12">
          <Heading
            level="h2"
            className="text-3xl md:text-4xl font-black text-black mb-4"
          >
            Shop by Category
          </Heading>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Explore our carefully curated product categories
          </p>
        </div>

        {/* CASETiFY风格类别网格 */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {categories.map((category, index) => (
            <div
              key={category.id}
              className="group relative bg-white rounded-3xl overflow-hidden hover:shadow-2xl transition-all duration-500 cursor-pointer hover:-translate-y-3"
            >
              {/* 类别图片 */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={category.image}
                  alt={category.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                {/* 渐变遮罩 */}
                <div className={`absolute inset-0 bg-gradient-to-t ${category.color} opacity-60 group-hover:opacity-80 transition-opacity duration-500`} />
                
                {/* 类别图标 */}
                <div className="absolute top-6 left-6 text-4xl group-hover:scale-110 transition-transform duration-300">
                  {category.icon}
                </div>

                {/* 悬停时的CTA */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <button className="bg-white text-black px-8 py-3 rounded-full font-bold hover:bg-gray-100 transition-colors">
                    Explore {category.name}
                  </button>
                </div>
              </div>

              {/* 类别信息 */}
              <div className="p-8">
                <Heading
                  level="h3"
                  className="text-2xl font-black text-black mb-3 group-hover:text-gray-700 transition-colors"
                >
                  {category.name}
                </Heading>
                <p className="text-gray-600 leading-relaxed">
                  {category.description}
                </p>
              </div>

              {/* 装饰性元素 */}
              <div className="absolute top-4 right-4 w-3 h-3 bg-white rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          ))}
        </div>

        {/* 底部CTA */}
        <div className="text-center mt-16">
          <a
            href="/categories"
            className="inline-flex items-center px-8 py-3 bg-black text-white font-bold rounded-full hover:bg-gray-800 transition-colors"
          >
            View All Categories
            <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  )
}

export default CategoryShowcase
