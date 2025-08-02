import { Metadata } from "next"
import { notFound } from "next/navigation"
import { listProducts } from "@lib/data/products"
import { getRegion, listRegions } from "@lib/data/regions"
import ProductTemplate from "@modules/products/templates"
import { generateProductSchema, medusaProductToSchema } from "@lib/util/schema"
import { JsonLd } from "@lib/components/json-ld"
import { getBaseURL } from "@lib/util/env"

type Props = {
  params: Promise<{ countryCode: string; handle: string }>
}

export async function generateStaticParams() {
  try {
    const countryCodes = await listRegions().then((regions) =>
      regions?.map((r) => r.countries?.map((c) => c.iso_2)).flat()
    )

    if (!countryCodes) {
      return []
    }

    const promises = countryCodes.map(async (country) => {
      const { response } = await listProducts({
        countryCode: country,
        queryParams: { limit: 100, fields: "handle" },
      })

      return {
        country,
        products: response.products,
      }
    })

    const countryProducts = await Promise.all(promises)

    return countryProducts
      .flatMap((countryData) =>
        countryData.products.map((product) => ({
          countryCode: countryData.country,
          handle: product.handle,
        }))
      )
      .filter((param) => param.handle)
  } catch (error) {
    console.error(
      `Failed to generate static paths for product pages: ${
        error instanceof Error ? error.message : "Unknown error"
      }.`
    )
    return []
  }
}

export async function generateMetadata(props: Props): Promise<Metadata> {
  const params = await props.params
  const { handle } = params
  const region = await getRegion(params.countryCode)

  if (!region) {
    notFound()
  }

  const product = await listProducts({
    countryCode: params.countryCode,
    queryParams: { ...({handle} as any) },
  }).then(({ response }) => response.products[0])

  if (!product) {
    notFound()
  }

  return {
    title: `${product.title} | SparkCore`,
    description: product.description || `${product.title} - Quality product from SparkCore`,
    keywords: [
      product.title,
      ...(product.categories?.map(cat => cat.name) || []),
      "SparkCore",
      "quality products"
    ].filter(Boolean).join(", "),
    openGraph: {
      title: `${product.title} | SparkCore`,
      description: product.description || `${product.title} - Quality product from SparkCore`,
      images: product.thumbnail ? [product.thumbnail] : [],
      type: "website",
      siteName: "SparkCore LLC",
    },
    twitter: {
      card: "summary_large_image",
      title: `${product.title} | SparkCore`,
      description: product.description || `${product.title} - Quality product from SparkCore`,
      images: product.thumbnail ? [product.thumbnail] : [],
    },
    alternates: {
      canonical: `/${params.countryCode}/products/${product.handle}`,
    },
  }
}

export default async function ProductPage(props: Props) {
  const params = await props.params
  const region = await getRegion(params.countryCode)

  if (!region) {
    notFound()
  }

  const pricedProduct = await listProducts({
    countryCode: params.countryCode,
    queryParams: { ...({handle: params.handle} as any) },
  }).then(({ response }) => response.products[0])

  if (!pricedProduct) {
    notFound()
  }

  // Generate structured data for the product
  const baseUrl = getBaseURL()
  const defaultVariant = pricedProduct.variants?.[0]

  let productSchema = null
  if (defaultVariant) {
    const schemaData = medusaProductToSchema(
      pricedProduct,
      defaultVariant,
      baseUrl,
      params.countryCode
    )
    productSchema = generateProductSchema(schemaData)
  }

  return (
    <>
      {productSchema && <JsonLd schema={productSchema} />}
      <ProductTemplate
        product={pricedProduct}
        region={region}
        countryCode={params.countryCode}
      />
    </>
  )
}
