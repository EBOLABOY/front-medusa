/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.NEXT_PUBLIC_BASE_URL || 'https://front-medusa-iota.vercel.app',
  generateRobotsTxt: true,
  exclude: [
    '/admin/*',
    '/api/*',
    '/checkout',
    '/account/*',
    '/cart',
    '/order/*'
  ],
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
        disallow: [
          '/admin/',
          '/api/',
          '/checkout',
          '/account/',
          '/cart',
          '/order/'
        ]
      }
    ]
  },
  transform: async (config, path) => {
    // 自定义路径转换
    return {
      loc: path,
      changefreq: path.includes('/products/') ? 'weekly' : 'monthly',
      priority: path === '/' ? 1.0 : path.includes('/products/') ? 0.8 : 0.6,
      lastmod: new Date().toISOString(),
    }
  }
}
