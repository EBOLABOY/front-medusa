import { getBaseURL } from "@lib/util/env"
import { Metadata } from "next"
import "styles/globals.css"

export const metadata: Metadata = {
  metadataBase: new URL(getBaseURL()),
  title: {
    default: "SparkCore LLC - Premium E-commerce Solutions",
    template: "%s | SparkCore LLC"
  },
  description: "SparkCore LLC delivers innovative e-commerce experiences with cutting-edge technology and exceptional service. Your trusted partner for digital commerce solutions.",
  keywords: ["e-commerce", "online store", "digital commerce", "SparkCore LLC", "premium solutions"],
  authors: [{ name: "SparkCore LLC" }],
  creator: "SparkCore LLC",
  publisher: "SparkCore LLC",
}

export default function RootLayout(props: { children: React.ReactNode }) {
  return (
    <html lang="en" data-mode="light">
      <body>
        <main className="relative">{props.children}</main>
      </body>
    </html>
  )
}
