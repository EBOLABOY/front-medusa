import { ChevronRight } from "@medusajs/icons"
import { clx } from "@medusajs/ui"
import LocalizedClientLink from "@modules/common/components/localized-client-link"
import { generateBreadcrumbSchema } from "@lib/util/schema"
import { JsonLd } from "@lib/components/json-ld"
import { getBaseURL } from "@lib/util/env"

export type BreadcrumbItem = {
  title: string
  href?: string
}

type BreadcrumbProps = {
  items: BreadcrumbItem[]
  className?: string
  includeSchema?: boolean
}

const Breadcrumb = ({ items, className, includeSchema = true }: BreadcrumbProps) => {
  // Generate breadcrumb schema for SEO
  const baseUrl = getBaseURL()
  const breadcrumbItems = [
    { name: "Home", url: baseUrl },
    ...items.map(item => ({
      name: item.title,
      url: item.href ? `${baseUrl}${item.href}` : `${baseUrl}`
    }))
  ]

  const breadcrumbSchema = includeSchema ? generateBreadcrumbSchema(breadcrumbItems) : null

  return (
    <>
      {breadcrumbSchema && <JsonLd schema={breadcrumbSchema} />}
      <nav
        className={clx("flex items-center space-x-2 text-sm", className)}
        aria-label="Breadcrumb"
      >
        <LocalizedClientLink
          href="/"
          className="text-gray-500 hover:text-gray-700 transition-colors"
        >
          Home
        </LocalizedClientLink>

        {items.map((item, index) => (
          <div key={index} className="flex items-center space-x-2">
            <ChevronRight className="w-4 h-4 text-gray-400" />
            {item.href ? (
              <LocalizedClientLink
                href={item.href}
                className="text-gray-500 hover:text-gray-700 transition-colors"
              >
                {item.title}
              </LocalizedClientLink>
            ) : (
              <span className="text-gray-900 font-medium">
                {item.title}
              </span>
            )}
          </div>
        ))}
      </nav>
    </>
  )
}

export default Breadcrumb
