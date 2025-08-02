const excludedPaths = ["/checkout", "/account/*", "/admin/*", "/api/*"]

/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.NEXT_PUBLIC_BASE_URL || process.env.NEXT_PUBLIC_VERCEL_URL || 'https://sparkcore.com',
  generateRobotsTxt: true,
  exclude: excludedPaths.concat(["/[sitemap]", "/404", "/500"]),
  generateIndexSitemap: false,
  changefreq: 'daily',
  priority: 0.7,
  sitemapSize: 5000,

  // Static paths for now - dynamic generation will be added after build setup
  additionalPaths: async () => {
    const paths = []
    const countryCodes = ['us', 'ca', 'gb', 'au'] // Common regions

    // Add static pages for each country
    const staticPages = [
      { path: '', priority: 1.0, changefreq: 'daily' }, // Homepage
      { path: '/store', priority: 0.9, changefreq: 'daily' },
    ]

    staticPages.forEach(page => {
      countryCodes.forEach(countryCode => {
        paths.push({
          loc: `/${countryCode}${page.path}`,
          changefreq: page.changefreq,
          priority: page.priority,
          lastmod: new Date().toISOString(),
        })
      })
    })

    return paths
  },

  robotsTxtOptions: {
    policies: [
      {
        userAgent: "*",
        allow: "/",
        disallow: excludedPaths,
      },
    ],
    additionalSitemaps: [
      `${process.env.NEXT_PUBLIC_BASE_URL || process.env.NEXT_PUBLIC_VERCEL_URL || 'https://sparkcore.com'}/sitemap.xml`,
    ],
  },
}
