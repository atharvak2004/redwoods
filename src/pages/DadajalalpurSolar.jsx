import React from 'react'
import HeroSection from '../components/projects/HeroSection'
import CTASection from '../components/projects/CTASection'
import { SolarInfo2 } from '../components/projects/SolarInfo2'
import ImageGallery from '../components/projects/ImageGallery'
function DadajalalpurSolar() {
  return (
    <div>
      <HeroSection name="Dadajalalpur Solar Project" title="Dadajalalpur Solar" title2="Power Plant" descr="An innovative solar energy project utilizing advanced photovoltaic technology to provide clean and sustainable power solutions." img="/solar/Dakpathar_B_DJI_0126.JPG" />
      <SolarInfo2 />
      <ImageGallery gallery={[
              "/SolarPhotos/1.JPG",
              "/SolarPhotos/2.JPG",
              "/SolarPhotos/3.JPG",
            ]} />
      <CTASection title1="Explore the" title2="Dadajalalpur Solar Project" descr="Be a part of our journey towards a greener future with the Dadajalalpur Solar Power Plant. Discover how we are making an impact through sustainable energy solutions." button1="Contact Us" button2="View Portfolio" />
    </div>
  )
}

export default DadajalalpurSolar