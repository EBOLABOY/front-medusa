import { Metadata } from "next"

import FeaturedProducts from "@modules/home/components/featured-products"
import Hero from "@modules/home/components/hero"
import Features from "@modules/home/components/features"
import AboutSection from "@modules/home/components/about-section"
import ProductCarousel from "@modules/home/components/product-carousel"
import CategoryShowcase from "@modules/home/components/category-showcase"
import { ErrorFallback } from "@modules/common/components/loading"
import { listCollections } from "@lib/data/collections"
import { getRegion } from "@lib/data/regions"

export const metadata: Metadata = {
  title: "SparkCore LLC - Quality Everyday Products for Home, Kids & Lifestyle",
  description:
    "SparkCore LLC designs, sources, and sells everyday consumer products including home & living accessories, kids' items, and lifestyle gadgets. Shop on Amazon, TikTok Shop, and our Shopify store.",
}

export default async function Home(props: {
  params: Promise<{ countryCode: string }>
}) {
  const params = await props.params

  const { countryCode } = params

  try {
    const region = await getRegion(countryCode)
    const { collections } = await listCollections({
      fields: "id, handle, title",
    })

    return (
      <>
        <Hero />
        <ProductCarousel />
        <CategoryShowcase />
        <Features />
        <AboutSection />
        {collections && region && (
          <div className="py-24 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-16">
                <h2 className="text-4xl font-bold text-gray-900 mb-4">
                  Explore Our Product Collections
                </h2>
                <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                  Discover our carefully curated selection of premium products designed 
                  to meet your every need.
                </p>
              </div>
              <ul className="flex flex-col gap-x-6">
                <FeaturedProducts collections={collections} region={region} />
              </ul>
            </div>
          </div>
        )}
        {!collections && (
          <div className="py-24 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Coming Soon
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                We're preparing our amazing product collections for you. 
                In the meantime, check out our stores on other platforms!
              </p>
              <div className="flex justify-center gap-4 mt-8">
                <a 
                  href="https://amazon.com/stores/sparkcore" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-gradient-to-r from-orange-500 to-yellow-500 text-white px-6 py-3 rounded-lg hover:from-orange-600 hover:to-yellow-600 transition-all duration-300"
                >
                  Shop on Amazon
                </a>
                <a 
                  href="https://shop.tiktok.com/@sparkcore" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-gradient-to-r from-pink-500 to-red-500 text-white px-6 py-3 rounded-lg hover:from-pink-600 hover:to-red-600 transition-all duration-300"
                >
                  Shop on TikTok
                </a>
              </div>
            </div>
          </div>
        )}
      </>
    )
  } catch (error) {
    return (
      <>
        <Hero />
        <ErrorFallback error={error as Error} />
      </>
    )
  }
}
