import React from 'react'
import Image from 'next/image'
import Logo from '../../../assets/images/SAS_LOGO_NOBG.png'

const AboutTemplate = () => {
  const features = [
    {
      title: "Curated Selection",
      description: "Each book in our collection is thoughtfully chosen to inspire, educate, and transport."
    },
    {
      title: "Community Focus",
      description: "We believe in building connections through shared stories and literary experiences."
    },
    {
      title: "Sustainable Practice",
      description: "Committed to environmental responsibility in our operations and partnerships."
    }
  ]
  return (
    <div className="min-h-screen bg-[#f8f7f4] py-16">
      <div className="max-w-[1000px] mx-auto px-6">
        <div className="text-center mb-16">
          <div className="w-32 mx-auto mb-8">
            <Image 
              src={Logo} 
              alt="Sage & Story"
              className="w-full h-auto"
            />
          </div>
          <h1 className="text-[#2c524c] font-serif text-4xl md:text-5xl mb-4">
            Our Story
          </h1>
          <div className="w-16 h-[2px] bg-[#c26d43] mx-auto"/>
        </div>

        <div className="grid gap-16">
          <section className="prose mx-auto max-w-[700px] text-center">
            <p className="text-lg text-[#4a4a4a] leading-relaxed">
              Welcome to Sage & Story, where every book opens a door to new possibilities. 
              Founded with a passion for storytelling and a love for literature, 
              we've created more than just an online bookstore – we've built a sanctuary 
              for book lovers and knowledge seekers alike.
            </p>
          </section>

          <section className="bg-white/50 rounded-lg p-8 backdrop-blur-sm">
            <h2 className="text-[#2c524c] font-serif text-2xl mb-6 text-center">
              Our Mission
            </h2>
            <p className="text-[#4a4a4a] leading-relaxed text-center max-w-[600px] mx-auto">
              At Sage & Story, we believe in the transformative power of books. 
              Our carefully curated collection spans across genres, bringing together 
              timeless classics and contemporary masterpieces. We strive to create 
              an accessible haven where stories find their rightful readers.
            </p>
          </section>

          <section className="grid md:grid-cols-3 gap-8">
            {features.map((value, index) => (
              <div 
                key={index}
                className="bg-white/30 p-6 rounded-lg text-center hover:bg-white/50 transition-colors"
              >
                <h3 className="text-[#2c524c] font-serif text-xl mb-3">
                  {value.title}
                </h3>
                <p className="text-[#4a4a4a]">
                  {value.description}
                </p>
              </div>
            ))}
          </section>
        </div>
      </div>

      <div className="absolute top-0 right-0 w-64 h-64 bg-[#c26d43]/5 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#2c524c]/5 rounded-full blur-3xl -z-10" />
    </div>
  )
}

export default AboutTemplate