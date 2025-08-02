import { getBaseURL } from "@lib/util/env"
import { Metadata } from "next"
import "styles/globals.css"
import { generateOrganizationSchema, generateWebSiteSchema } from "@lib/util/schema"
import { JsonLd } from "@lib/components/json-ld"

export const metadata: Metadata = {
  metadataBase: new URL(getBaseURL()),
  title: {
    default: "SparkCore LLC - Quality Everyday Products",
    template: "%s | SparkCore LLC"
  },
  description: "SparkCore LLC is a U.S.-based e-commerce company that designs, sources, and sells everyday consumer products—home & living accessories, kids' items, and lifestyle gadgets—via Amazon, TikTok Shop, and Shopify.",
  keywords: ["home accessories", "kids items", "lifestyle gadgets", "everyday products", "consumer goods", "SparkCore LLC", "Amazon store", "TikTok Shop", "Shopify"],
  authors: [{ name: "SparkCore LLC" }],
  creator: "SparkCore LLC",
  publisher: "SparkCore LLC",
}

export default function RootLayout(props: { children: React.ReactNode }) {
  const baseUrl = getBaseURL()
  const organizationSchema = generateOrganizationSchema(baseUrl)
  const websiteSchema = generateWebSiteSchema(baseUrl)

  return (
    <html lang="en" data-mode="light">
      <head>
        <JsonLd schema={organizationSchema} />
        <JsonLd schema={websiteSchema} />
      </head>
      <body>
        <main className="relative">{props.children}</main>
      </body>
    </html>
  )
}
