import LocalizedClientLink from "@modules/common/components/localized-client-link"
import { Button } from "@medusajs/ui"

const FeaturedShowcase = () => {
  const featuredItems = [
    {
      id: 1,
      title: "Impact Case Collection",
      subtitle: "Ultimate Protection",
      description: "Military-grade protection meets sleek design",
      image: "/images/featured-1.jpg",
      link: "/store?category=cases",
      badge: "Best Seller"
    },
    {
      id: 2,
      title: "MagSafe Accessories",
      subtitle: "Snap & Go",
      description: "Wireless charging made effortless",
      image: "/images/featured-2.jpg",
      link: "/store?category=magsafe",
      badge: "New"
    },
    {
      id: 3,
      title: "Custom Designs",
      subtitle: "Make It Yours",
      description: "Personalize with your photos and text",
      image: "/images/featured-3.jpg",
      link: "/store?custom=true",
      badge: "Popular"
    }
  ]

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">
            Featured Collections
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Discover our most popular products designed for style and protection
          </p>
        </div>

        {/* Featured grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {featuredItems.map((item, index) => (
            <div
              key={item.id}
              className={`group relative overflow-hidden rounded-2xl ${
                index === 0 ? 'lg:col-span-2 lg:row-span-2' : ''
              }`}
            >
              {/* Background */}
              <div className={`relative ${
                index === 0 ? 'h-96 lg:h-full' : 'h-80'
              } bg-gradient-to-br ${
                index === 0 
                  ? 'from-blue-50 to-purple-50' 
                  : index === 1 
                    ? 'from-green-50 to-blue-50'
                    : 'from-pink-50 to-orange-50'
              }`}>
                
                {/* Badge */}
                <div className="absolute top-6 left-6 z-10">
                  <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold ${
                    item.badge === 'Best Seller' 
                      ? 'bg-black text-white'
                      : item.badge === 'New'
                        ? 'bg-green-500 text-white'
                        : 'bg-purple-500 text-white'
                  }`}>
                    {item.badge}
                  </span>
                </div>

                {/* Content */}
                <div className="absolute inset-0 flex flex-col justify-end p-6 lg:p-8">
                  <div className="space-y-4">
                    <div>
                      <p className="text-sm font-medium text-gray-600 mb-2">
                        {item.subtitle}
                      </p>
                      <h3 className={`font-bold text-black mb-3 ${
                        index === 0 ? 'text-3xl lg:text-4xl' : 'text-2xl'
                      }`}>
                        {item.title}
                      </h3>
                      <p className={`text-gray-700 mb-6 ${
                        index === 0 ? 'text-lg' : 'text-base'
                      }`}>
                        {item.description}
                      </p>
                    </div>
                    
                    <LocalizedClientLink href={item.link}>
                      <Button
                        variant="secondary"
                        className="border-2 border-black text-black hover:bg-black hover:text-white transition-all duration-300 group-hover:scale-105"
                      >
                        Explore Collection
                      </Button>
                    </LocalizedClientLink>
                  </div>
                </div>

                {/* Hover overlay */}
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-5 transition-all duration-300" />
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <LocalizedClientLink href="/store">
            <Button
              size="large"
              className="bg-black hover:bg-gray-800 text-white px-8 py-4 text-lg font-semibold rounded-lg transition-all duration-300 hover:scale-105"
            >
              View All Products
            </Button>
          </LocalizedClientLink>
        </div>
      </div>
    </section>
  )
}

export default FeaturedShowcase
