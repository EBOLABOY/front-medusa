const c = require("ansi-colors")

const requiredEnvs = [
  {
    key: "NEXT_PUBLIC_MEDUSA_PUBLISHABLE_KEY",
    description:
      "Learn how to create a publishable key: https://docs.medusajs.com/v2/resources/storefront-development/publishable-api-keys",
  },
  {
    key: "MEDUSA_BACKEND_URL",
    description:
      "Your Medusa backend URL. Update CORS settings for your server.",
  },
  {
    key: "NEXT_PUBLIC_BASE_URL",
    description:
      "Your store URL where you are hosting your storefront.",
  },
  {
    key: "NEXT_PUBLIC_DEFAULT_REGION",
    description:
      "Your preferred default region in ISO-2 lowercase format (e.g., 'us').",
  },
]

const optionalEnvs = [
  {
    key: "NEXT_PUBLIC_STRIPE_KEY",
    description: "Your Stripe public key for payment processing.",
  },
  {
    key: "REVALIDATE_SECRET",
    description: "Secret for Next.js on-demand revalidation.",
  },
]

function checkEnvVariables() {
  const missingEnvs = requiredEnvs.filter(function (env) {
    return !process.env[env.key]
  })

  const missingOptionalEnvs = optionalEnvs.filter(function (env) {
    return !process.env[env.key]
  })

  if (missingEnvs.length > 0) {
    console.error(
      c.red.bold("\n🚫 Error: Missing required environment variables\n")
    )

    missingEnvs.forEach(function (env) {
      console.error(c.yellow(`  ${c.bold(env.key)}`))
      if (env.description) {
        console.error(c.dim(`    ${env.description}\n`))
      }
    })

    console.error(
      c.yellow(
        "\nPlease set these variables in your .env file or environment before starting the application.\n"
      )
    )

    process.exit(1)
  }

  // Show warnings for missing optional environment variables
  if (missingOptionalEnvs.length > 0) {
    console.warn(
      c.yellow.bold("\n⚠️  Warning: Missing optional environment variables\n")
    )

    missingOptionalEnvs.forEach(function (env) {
      console.warn(c.dim(`  ${env.key}`))
      if (env.description) {
        console.warn(c.dim(`    ${env.description}\n`))
      }
    })

    console.warn(
      c.dim(
        "These are optional but may be needed for full functionality.\n"
      )
    )
  }

  if (missingEnvs.length === 0 && missingOptionalEnvs.length === 0) {
    console.log(c.green("✅ All environment variables are properly configured"))
  }
}

module.exports = checkEnvVariables
