import React from 'react'
import HeroSection from '../components/projects/HeroSection'
import CTASection from '../components/projects/CTASection'
import { SolarInfo1 } from '../components/projects/SolarInfo1'
import ImageGallery from '../components/projects/ImageGallery'
function KhodriSolar() {
  return (
    <div>
      <HeroSection name="Khodri Solar Project" title="Khodri Solar" title2="Power Plant" descr="A pioneering solar energy initiative harnessing cutting-edge technology to deliver sustainable and efficient power solutions." img="/solar/Khodri-hero.png" />
      <SolarInfo1 />
      <ImageGallery gallery={[
        "/SolarPhotos/1.JPG",
        "/SolarPhotos/2.JPG",
        "/SolarPhotos/3.JPG",
      ]} />
      <CTASection title1="Discover the" title2="Khodri Solar Project" descr="Join us in our mission to create a sustainable future through innovative solar energy solutions. Explore how the Khodri Solar Power Plant is making a difference." button1="Contact Us" button2="View Portfolio" />
    </div>
  )
}

export default KhodriSolar