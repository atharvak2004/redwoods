import React from 'react'
import HeroSection from '../components/projects/HeroSection'
import CTASection from '../components/projects/CTASection'
import ProjectOverview from '../components/projects/ProjectOverview'
import ImageGallery from '../components/projects/ImageGallery'
function BarsanaMahal() {
  return (
    <div>
      <HeroSection name="Barsana Jal Mahal Restoration" title="Barsana Jal Mahal" title2="Heritage Hospitality" descr="The Barsana Jal Mahal is a stunning water palace dating back to the 18th century. Our restoration project aims to preserve its magnificent heritage." img="/home/hero/barsana-hero-image.png" />

      <ProjectOverview description="The Barsana Jal Mahal is a stunning water palace dating back to the 18th century. Our restoration project aims to preserve its magnificent heritage." image="/barsana-ongoing.jpg" title="Barsana Jal Mahal" />

      <ImageGallery
        gallery={[
          "/barsana-gallery/Picture1.jpg",
          "/barsana-gallery/Picture2.jpg",
          "/barsana-gallery/Picture3.jpg",
          "/barsana-gallery/Picture4.jpg",
          "/barsana-gallery/Picture5.jpg",
          "/barsana-gallery/Picture6.jpg",
          "/barsana-gallery/Picture7.jpg",
          "/barsana-gallery/Picture8.jpg",
          "/barsana-gallery/Picture9.jpg",
        ]}
      />
      <CTASection title1="Discover the" title2="Barsana Jal Mahal Restoration" descr="Join us in our mission to restore and preserve the Barsana Jal Mahal, a testament to our rich cultural heritage. Discover how we blend traditional techniques with modern restoration practices." button1="Contact Us" button2="View Portfolio" />
    </div>
  )
}

export default BarsanaMahal