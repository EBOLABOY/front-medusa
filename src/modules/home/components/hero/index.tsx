import { Github } from "@medusajs/icons"
import { Button, Heading } from "@medusajs/ui"
import LocalizedClientLink from "@modules/common/components/localized-client-link"

const Hero = () => {
  return (
    <div className="h-[75vh] w-full border-b border-ui-border-base relative bg-ui-bg-subtle">
      <div className="absolute inset-0 z-10 flex flex-col justify-center items-center text-center small:p-32 gap-6">
        <span>
          <Heading
            level="h1"
            className="text-3xl leading-10 text-ui-fg-base font-normal"
          >
            SparkCore LLC
          </Heading>
          <Heading
            level="h2"
            className="text-3xl leading-10 text-ui-fg-subtle font-normal"
          >
            Premium E-commerce Solutions
          </Heading>
        </span>
        <p className="text-ui-fg-subtle max-w-lg text-center">
          Delivering innovative e-commerce experiences powered by cutting-edge technology 
          and exceptional service. Your trusted partner for digital commerce solutions.
        </p>
        <div className="flex gap-4">
          <LocalizedClientLink href="/store">
            <Button variant="primary">
              Explore Products
            </Button>
          </LocalizedClientLink>
          <LocalizedClientLink href="/about">
            <Button variant="secondary">
              Learn More
            </Button>
          </LocalizedClientLink>
        </div>
      </div>
    </div>
  )
}

export default Hero
