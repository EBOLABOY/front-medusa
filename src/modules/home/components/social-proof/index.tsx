import LocalizedClientLink from "@modules/common/components/localized-client-link"

const SocialProof = () => {
  const testimonials = [
    {
      id: 1,
      name: "Emma Chen",
      role: "Content Creator",
      image: "/images/user-1.jpg",
      content: "The quality is incredible! My custom case has survived countless drops and still looks brand new.",
      rating: 5,
      product: "Custom Impact Case"
    },
    {
      id: 2,
      name: "Marcus Johnson",
      role: "Photographer",
      image: "/images/user-2.jpg",
      content: "Perfect protection for my gear. The MagSafe compatibility is a game-changer for my workflow.",
      rating: 5,
      product: "MagSafe Wallet"
    },
    {
      id: 3,
      name: "Sofia Rodriguez",
      role: "Student",
      image: "/images/user-3.jpg",
      content: "Love the personalization options! My case perfectly matches my style and personality.",
      rating: 5,
      product: "Clear Custom Case"
    }
  ]

  const socialStats = [
    { platform: "Instagram", followers: "2.5M", handle: "@sparkcore" },
    { platform: "TikTok", followers: "1.8M", handle: "@sparkcore" },
    { platform: "YouTube", followers: "850K", handle: "SparkCore Official" }
  ]

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-pink-500 to-purple-500 text-white rounded-full text-sm font-medium mb-6">
            #SparkCoreFamily
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">
            Loved by Millions
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Join our community of satisfied customers who trust us to protect their most important devices
          </p>
        </div>

        {/* Testimonials grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="bg-gray-50 rounded-2xl p-6 hover:shadow-lg transition-all duration-300">
              {/* Rating */}
              <div className="flex items-center space-x-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <svg key={i} className="w-4 h-4 text-yellow-400 fill-current" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>

              {/* Content */}
              <p className="text-gray-700 mb-6 leading-relaxed">
                "{testimonial.content}"
              </p>

              {/* User info */}
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full flex items-center justify-center text-white font-semibold">
                  {testimonial.name.charAt(0)}
                </div>
                <div>
                  <div className="font-semibold text-black text-sm">{testimonial.name}</div>
                  <div className="text-gray-500 text-xs">{testimonial.role}</div>
                </div>
              </div>

              {/* Product tag */}
              <div className="mt-4 pt-4 border-t border-gray-200">
                <span className="inline-flex items-center px-2 py-1 bg-black text-white rounded text-xs font-medium">
                  {testimonial.product}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Social media stats */}
        <div className="bg-black rounded-2xl p-8 text-white">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold mb-2">Follow Our Journey</h3>
            <p className="text-gray-300">Join millions of followers across all platforms</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {socialStats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl font-bold mb-2">{stat.followers}</div>
                <div className="text-gray-300 mb-1">{stat.platform} Followers</div>
                <div className="text-sm text-gray-400">{stat.handle}</div>
              </div>
            ))}
          </div>

          <div className="text-center mt-8">
            <LocalizedClientLink href="/community">
              <button className="bg-white text-black px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300">
                Join Our Community
              </button>
            </LocalizedClientLink>
          </div>
        </div>

        {/* Trust badges */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 items-center justify-items-center opacity-60">
          <div className="text-center">
            <div className="text-2xl mb-2">🏆</div>
            <div className="text-sm font-medium text-gray-600">Award Winning</div>
          </div>
          <div className="text-center">
            <div className="text-2xl mb-2">🔒</div>
            <div className="text-sm font-medium text-gray-600">Secure Checkout</div>
          </div>
          <div className="text-center">
            <div className="text-2xl mb-2">🚚</div>
            <div className="text-sm font-medium text-gray-600">Fast Shipping</div>
          </div>
          <div className="text-center">
            <div className="text-2xl mb-2">💯</div>
            <div className="text-sm font-medium text-gray-600">Money Back</div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default SocialProof
