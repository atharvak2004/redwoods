import React from 'react'
import HeroCarousel from '../components/home/HeroCarousel'
import AboutRedwoods from '../components/AboutRedwoods'
import OurTeam from '../components/OurTeam'
import OurBusinesses from '../components/home/OurBusinesses'
import Transactions from '../components/home/Transactions'
import HomeCTA from '../components/home/HomeCTA'
import useScrollReveal from '../components/useScrollReveal'
import LeaderSection from '../components/home/LeaderSection'
function HomePage() {
  useScrollReveal();
  return (
    <div>
        <HeroCarousel />
        <AboutRedwoods />
        <OurBusinesses />
        <LeaderSection />
        <Transactions />
        <HomeCTA /> 
    </div>
  )
}

export default HomePage