import { Metadata } from "next"

import FeaturedProducts from "@modules/home/components/featured-products"
import Hero from "@modules/home/components/hero"
import Features from "@modules/home/components/features"
import AboutSection from "@modules/home/components/about-section"
import { listCollections } from "@lib/data/collections"
import { getRegion } from "@lib/data/regions"

export const metadata: Metadata = {
  title: "SparkCore LLC - Premium E-commerce Solutions",
  description:
    "SparkCore LLC delivers innovative e-commerce experiences with cutting-edge technology and exceptional service. Your trusted partner for digital commerce solutions.",
}

export default async function Home(props: {
  params: Promise<{ countryCode: string }>
}) {
  const params = await props.params

  const { countryCode } = params

  const region = await getRegion(countryCode)

  const { collections } = await listCollections({
    fields: "id, handle, title",
  })

  return (
    <>
      <Hero />
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
    </>
  )
}
