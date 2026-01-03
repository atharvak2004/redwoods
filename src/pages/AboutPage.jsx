import React from 'react'
import AboutHero from '../components/about/AboutHero'
import AboutRedwoods from '../components/AboutRedwoods'
import AboutServices from '../components/about/AboutServices'
import MissionVision from '../components/about/MissionVision'
import OurTeam from '../components/OurTeam'
import AboutCTA from '../components/about/AboutCTA'
function AboutPage() {
  return (
    <div>
      <AboutHero />
      <AboutRedwoods />
      <MissionVision />
      <AboutServices />
      <OurTeam />
      <AboutCTA />
    </div>
  )
}

export default AboutPage