import React from 'react'
import HeroSection from '../components/projects/HeroSection'
import CTASection from '../components/projects/CTASection'
import ServicesSection from '../components/real-estate/ServicesSection'
function RealEstateServices() {
  return (
    <div>
      <HeroSection name="Real Estate Advisory" title="Our Business" title2="Real Estate Advisory" descr="Strategic services designed to optimise asset value and investment outcomes through disciplined analysis and market intelligence." img="/real-estate-adv-hero2.png" />
      <ServicesSection />
      <CTASection title1="Explore Our" title2="Advisory Services" descr="Interested in enhancing your real estate portfolio? Let's connect to discuss tailored advisory solutions." button1="Get in Touch" button2="Our Expertise" />
    </div>
  )
}

export default RealEstateServices