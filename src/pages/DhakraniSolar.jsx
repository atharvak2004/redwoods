import React from 'react'
import HeroSection from '../components/projects/HeroSection'
import CTASection from '../components/projects/CTASection'
import { SolarInfo3 } from '../components/projects/SolarInfo3'
import ImageGallery from '../components/projects/ImageGallery'

function DhakraniSolar() {
  return (
    <div>
      <HeroSection name="Dhakrani Solar Project" title="Dhakrani Solar" title2="Power Plant" descr="A state-of-the-art solar energy project leveraging innovative photovoltaic technology to deliver reliable and eco-friendly power solutions." img="/solar/Dhakrani.JPG" />
      <SolarInfo3 />
      <ImageGallery gallery={[
              "/SolarPhotos/1.JPG",
              "/SolarPhotos/2.JPG",
              "/SolarPhotos/3.JPG",
            ]} />
      <CTASection title1="Learn More About the" title2="Dhakrani Solar Project" descr="Join us in our commitment to sustainable energy with the Dhakrani Solar Power Plant. Discover how we are contributing to a cleaner future through innovative solar solutions." button1="Contact Us" button2="View Portfolio" />
    </div>
  )
}

export default DhakraniSolar