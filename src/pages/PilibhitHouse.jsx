import React from 'react'
import HeroSection from '../components/projects/HeroSection'
import ProjectOverview from '../components/projects/ProjectOverview'
import ImageGallery from '../components/projects/ImageGallery'
import CTASection from '../components/projects/CTASection'
function PilibhitHouse() {
  return (
    <div>
      <HeroSection name="Pilibhit House" title="Pilibhit House" title2="Heritage Hospitality" descr="Pilibhit House is a magnificent heritage property that has been meticulously restored to preserve its historical charm while incorporating modern amenities for a luxurious stay." img="/home/hero/InfinitySwimmingPool.jpg" />

      <ProjectOverview description="Pilibhit House is a magnificent heritage property that has been meticulously restored to preserve its historical charm while incorporating modern amenities for a luxurious stay." image="/philibhit-gallery/8.jpg" title="Pilibhit House Restoration" />

      <ImageGallery
        gallery={[
          "/philibhit-gallery/1.jpg",
          "/philibhit-gallery/2.jpg",
          "/philibhit-gallery/3.jpg",
          "/philibhit-gallery/4.jpg",
          "/philibhit-gallery/5.jpg",
          "/philibhit-gallery/6.jpg",
          "/philibhit-gallery/7.jpg",
          "/philibhit-gallery/8.jpg",
          "/philibhit-gallery/9.jpg",
        ]}
      />

      <CTASection title1="Discover Pilibhit House" title2=" Heritage & Architecture" descr="Join us in our mission to  preserve the Pilibhit House, a testament to our rich cultural heritage. Discover how we blend traditional techniques with modern restoration practices." button1="Contact Us" button2="View Portfolio" />
    </div>
  )
}

export default PilibhitHouse