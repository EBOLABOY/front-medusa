import { Github } from "@medusajs/icons"
import { Button, Heading } from "@medusajs/ui"
import LocalizedClientLink from "@modules/common/components/localized-client-link"

const Hero = () => {
  return (
    <div className="relative h-screen w-full overflow-hidden bg-white">
      {/* CASETiFY-style dynamic video background simulation */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-white">
        {/* Animated background elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '4s' }} />
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-pink-400 to-orange-400 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '6s', animationDelay: '2s' }} />
        </div>
      </div>
      
      {/* CASETiFY-style极简主内容 */}
      <div className="relative z-10 flex flex-col justify-center items-center text-center h-full px-4 max-w-4xl mx-auto">
        <div className="space-y-12 animate-slide-up">
          {/* 极简品牌展示 - 完全模仿CASETiFY */}
          <div className="space-y-8">
            <div className="inline-flex items-center px-6 py-2 bg-black text-white rounded-full font-bold text-sm tracking-widest uppercase">
              <span>Show Your Colors</span>
            </div>

            <Heading
              level="h1"
              className="text-6xl md:text-8xl lg:text-9xl font-black text-black leading-none tracking-tight"
            >
              SparkCore
            </Heading>
          </div>

          {/* 极简CTA - 只保留主要按钮 */}
          <div className="flex flex-col gap-6 justify-center items-center">
            <LocalizedClientLink href="/store">
              <Button
                size="large"
                className="bg-black hover:bg-gray-800 text-white border-0 px-12 py-4 text-xl font-bold rounded-full transition-all duration-300 hover:scale-105"
              >
                Shop Now
              </Button>
            </LocalizedClientLink>
          </div>
        </div>
      </div>

      {/* CASETiFY风格滚动指示器 */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border border-gray-400 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-gray-400 rounded-full mt-2"></div>
        </div>
      </div>
    </div>
  )
}

export default Hero
