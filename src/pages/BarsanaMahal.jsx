import React from 'react'
import HeroSection from '../components/projects/HeroSection'
import CTASection from '../components/projects/CTASection'
import ProjectOverview from '../components/projects/ProjectOverview'
function BarsanaMahal() {
  return (
    <div>
      <HeroSection name="Barsana Jal Mahal Restoration" title="Barsana Jal Mahal" title2="Heritage Hospitality" descr="The Barsana Jal Mahal is a stunning water palace dating back to the 18th century. Our restoration project aims to preserve its magnificent heritage." img="/home/hero/barsana-hero-image.png" />

      <ProjectOverview description="The Barsana Jal Mahal is a stunning water palace dating back to the 18th century. Our restoration project aims to preserve its magnificent heritage." image="/barsana-gallery/Picture6.jpg" title="Barsana Jal Mahal" />

      <CTASection title1="Discover the" title2="Barsana Jal Mahal Restoration" descr="Join us in our mission to restore and preserve the Barsana Jal Mahal, a testament to our rich cultural heritage. Discover how we blend traditional techniques with modern restoration practices." button1="Contact Us" button2="View Portfolio" />
    </div>
  )
}

export default BarsanaMahal