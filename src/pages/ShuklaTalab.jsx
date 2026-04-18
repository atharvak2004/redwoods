import React from 'react'
import HeroSection from '../components/projects/HeroSection'
import ProjectOverview from '../components/projects/ProjectOverview'
import ImageGallery from '../components/projects/ImageGallery'
import CTASection from '../components/projects/CTASection'
function ShuklaTalab() {
  return (
    <div>
      <HeroSection name="Shukla Ka Talab Restoration" title="Shukla Ka Talab" title2="Heritage Hospitality" descr="Shukla Ka Talab is a historic heritage complex centered around a centuries-old reservoir. The project encompasses the restoration of its historical structures and surrounding environment." img="/Shukla/shukla-project-hero.png" />

      <ProjectOverview description="Shukla Ka Talab is a historic heritage complex centered around a centuries-old reservoir. The project encompasses the restoration of its historical structures and surrounding environment." image="/Shukla/S-1.png" title="Shukla Ka Talab Restoration" />

      <ImageGallery
        gallery={[
          "/shukla-gallery/Picture1.jpg",
          "/shukla-gallery/Picture2.jpg",
          "/shukla-gallery/Picture3.jpg",
          "/shukla-gallery/Picture4.jpg",
          "/shukla-gallery/Picture5.jpg",
          "/shukla-gallery/Picture6.jpg",
          "/shukla-gallery/Picture7.jpg",
          "/shukla-gallery/Picture8.jpg",
          "/shukla-gallery/Picture9.jpg",
        ]}
      />

      <CTASection title1="Explore the" title2="Shukla Ka Talab Restoration" descr="Join us in our mission to restore and preserve the Shukla Ka Talab, a testament to our rich cultural heritage. Discover how we blend traditional techniques with modern restoration practices." button1="Contact Us" button2="View Portfolio" />
    </div>
  )
}

export default ShuklaTalab