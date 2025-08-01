import { Button, Heading } from "@medusajs/ui"
import LocalizedClientLink from "@modules/common/components/localized-client-link"

const AboutSection = () => {
  return (
    <section className="py-24 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <div className="inline-flex items-center px-4 py-2 bg-white/50 backdrop-blur-sm rounded-full border border-white/20">
                <span className="text-sm font-medium text-gray-700">About SparkCore LLC</span>
              </div>
              
              <Heading
                level="h2"
                className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight"
              >
                Pioneering the Future of Digital Commerce
              </Heading>
              
              <p className="text-xl text-gray-600 leading-relaxed">
                Founded with a vision to revolutionize online retail, SparkCore LLC has been at the 
                forefront of e-commerce innovation for over a decade. We believe that exceptional 
                technology should be accessible to businesses of all sizes.
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
                  <span className="text-white text-sm font-bold">✓</span>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Innovation-Driven Solutions</h4>
                  <p className="text-gray-600">Cutting-edge technology that stays ahead of market trends and customer expectations.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
                  <span className="text-white text-sm font-bold">✓</span>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Customer-Centric Approach</h4>
                  <p className="text-gray-600">Every solution is tailored to meet your unique business needs and objectives.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-r from-pink-500 to-red-500 rounded-full flex items-center justify-center">
                  <span className="text-white text-sm font-bold">✓</span>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Proven Track Record</h4>
                  <p className="text-gray-600">500+ successful projects and partnerships with businesses worldwide.</p>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <LocalizedClientLink href="/about">
                <Button 
                  size="large"
                  className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white border-0 px-8 py-3"
                >
                  Learn More About Us
                </Button>
              </LocalizedClientLink>
              <LocalizedClientLink href="/contact">
                <Button 
                  variant="secondary"
                  size="large"
                  className="border-gray-300 text-gray-700 hover:bg-gray-50 px-8 py-3"
                >
                  Get In Touch
                </Button>
              </LocalizedClientLink>
            </div>
          </div>

          {/* Visual Element */}
          <div className="relative">
            <div className="relative z-10 bg-white rounded-3xl p-8 shadow-2xl">
              {/* Stats */}
              <div className="grid grid-cols-2 gap-8">
                <div className="text-center">
                  <div className="text-4xl font-bold text-blue-600 mb-2">10+</div>
                  <div className="text-gray-600 text-sm">Years Experience</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-purple-600 mb-2">500+</div>
                  <div className="text-gray-600 text-sm">Projects Completed</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-indigo-600 mb-2">50+</div>
                  <div className="text-gray-600 text-sm">Team Members</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-pink-600 mb-2">30+</div>
                  <div className="text-gray-600 text-sm">Countries Served</div>
                </div>
              </div>
              
              {/* Quote */}
              <div className="mt-8 pt-8 border-t border-gray-100">
                <blockquote className="text-gray-700 italic text-center">
                  "Excellence in e-commerce is not just about technology; it's about understanding 
                  people and creating experiences that matter."
                </blockquote>
                <div className="mt-4 text-center">
                  <div className="font-semibold text-gray-900">Sarah Johnson</div>
                  <div className="text-sm text-gray-600">CEO, SparkCore LLC</div>
                </div>
              </div>
            </div>
            
            {/* Background decorations */}
            <div className="absolute -top-4 -left-4 w-72 h-72 bg-gradient-to-br from-blue-200/50 to-purple-200/50 rounded-full blur-3xl -z-10" />
            <div className="absolute -bottom-4 -right-4 w-72 h-72 bg-gradient-to-tl from-purple-200/50 to-pink-200/50 rounded-full blur-3xl -z-10" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection