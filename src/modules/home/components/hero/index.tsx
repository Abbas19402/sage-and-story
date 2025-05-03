import { Button, Heading } from "@medusajs/ui"
import Image from "next/image"
import Logo from "../../../../assets/images/SAS_LOGO.jpg"
import LocalizedClientLink from "@modules/common/components/localized-client-link"

const Hero = () => {
  return (
    <div className="min-h-[80vh] w-full relative bg-[#f8f7f4] flex items-center">
      <div className="absolute top-0 right-0 w-1/2 h-full opacity-10">
        <div className="relative h-full w-full">
          <Image
            src={Logo}
            alt="Decorative leaves"
            fill
            className="object-cover"
          />
        </div>
      </div>
      
      <div className="relative container mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div className="flex flex-col gap-6">
          
            <span className="text-[#c26d43] uppercase tracking-wider text-sm">Welcome to <span className="text-[#2c524c] text-lg font-serif font-medium">Sage & Story</span></span>
          <Heading
            level="h1"
            className="text-4xl md:text-5xl lg:text-6xl text-[#2c524c] font-serif"
          >
            Your Journey Through Pages Begins Here
          </Heading>
          <p className="text-[#4a4a4a] text-lg max-w-lg">
            Discover a carefully curated collection of books that inspire, educate, and transport you to new worlds.
          </p>
          <div className="flex gap-4 mt-4">
            <LocalizedClientLink
              className="hover:text-ui-fg-base"
              href="/store"
              data-testid="nav-account-link"
            >
              <Button
                className="bg-[#2c524c] hover:bg-[#1a3330] text-white px-8 py-3 rounded-md transition-colors"
                variant="primary"
              >
                Browse Collection
              </Button>
            </LocalizedClientLink>
            <LocalizedClientLink
              className="hover:text-ui-fg-base"
              href="/about"
              data-testid="nav-account-link"
            >
              <Button
                className="border-2 border-[#c26d43] text-[#c26d43] hover:bg-[#c26d43] hover:text-white px-8 py-3 rounded-md transition-colors"
                variant="secondary"
              >
                About Us
              </Button>
            </LocalizedClientLink>
          </div>
        </div>
        
        <div className="hidden md:block relative h-[600px]">
          <div className="absolute inset-0 rounded-lg overflow-hidden">
            <div className="absolute inset-0 bg-[#2c524c]/5 backdrop-blur-sm" />
            <div className="absolute bottom-0 right-0 w-64 h-64 bg-[#c26d43]/10 rounded-full blur-3xl" />
            <div className="absolute top-20 -right-20 w-48 h-48 bg-[#2c524c]/10 rounded-full blur-3xl" />
          
            <div className="relative h-full p-8 grid grid-cols-2 gap-6">
              {/* Book 1 - Large featured book */}
              <div className="col-span-1 row-span-2 transform hover:-translate-y-2 transition-transform duration-300">
                <div className="relative h-full bg-white rounded-lg shadow-xl overflow-hidden transform -rotate-6 hover:rotate-0 transition-transform duration-300">
                  <div className="absolute inset-0 bg-gradient-to-b from-[#2c524c]/20 to-transparent" />
                </div>
              </div>
              
              {/* Book stack */}
              <div className="space-y-6">
                {[1, 2, 3].map((i) => (
                  <div 
                    key={i}
                    className="relative h-32 bg-white rounded-lg shadow-lg overflow-hidden transform hover:-translate-x-2 transition-transform duration-300"
                    style={{
                      transform: `rotate(${i * 2}deg)`,
                    }}
                  >
                    <div className="absolute left-0 top-0 bottom-0 w-[4px] bg-[#c26d43]" />
                  </div>
                ))}
              </div>
              
              <div className="absolute inset-0 pointer-events-none">
                {[...Array(8)].map((_, i) => (
                  <div
                    key={i}
                    className="absolute animate-float"
                    style={{
                      top: `${Math.random() * 100}%`,
                      left: `${Math.random() * 100}%`,
                      transform: `rotate(${Math.random() * 360}deg)`,
                      animationDelay: `${i * 0.7}s`,
                      animationDuration: `${5 + Math.random() * 3}s`
                    }}
                  >
                    <Leaf 
                      className={`w-${4 + Math.floor(Math.random() * 4)} h-${4 + Math.floor(Math.random() * 4)} ${
                        Math.random() > 0.5 ? 'text-[#2c524c]' : 'text-[#c26d43]'
                      }`}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

const Leaf = ({ className = "", fill = "#2c524c" }) => (
  <svg
    viewBox="0 0 32 32"
    className={className}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M16 4C16 4 14 8 14 16C14 24 26 28 26 28C26 28 28 24 28 16C28 8 16 4 16 4Z"
      fill={fill}
      fillOpacity="0.4"
    />
    <path
      d="M16 4C16 4 18 8 18 16C18 24 6 28 6 28C6 28 4 24 4 16C4 8 16 4 16 4Z"
      fill={fill}
      fillOpacity="0.4"
    />
    <path
      d="M16 4V28M16 4C16 4 20 8 20 16C20 24 16 28 16 28C16 28 12 24 12 16C12 8 16 4 16 4Z"
      stroke={fill}
      strokeWidth="1"
      strokeLinecap="round"
      opacity="0.6"
    />
  </svg>
)

export default Hero