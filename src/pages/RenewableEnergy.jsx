import React from 'react'
import RenewableEnergyHero from '../components/renewable-energy/RenewableEnergyHero'
import { ServiceOverview } from '../components/renewable-energy/ServiceOverview'
import { ImpactSection } from '../components/renewable-energy/ImpactSection'
import { ServicesGrid } from '../components/renewable-energy/ServicesGrid'
import { OngoingProjects } from '../components/renewable-energy/OngoingProjects'
import CompletedProjects from '../components/renewable-energy/CompletedProjects'
import CTASection from '../components/business/CTASection'
import VideoSection from '../components/renewable-energy/VideoSection'
function RenewableEnergy() {
  return (
    <div>
      <RenewableEnergyHero />
      <ServiceOverview />
      <ImpactSection />
      {/* <VideoSection
        eyebrow="Solar power & clean energy solutions"
        title="Building Clean Energy Infrastructure"
        caption="Advisory and execution support for renewable energy projects, focused on clean power generation, sustainable infrastructure, and long-term environmental and economic value."
        videoSrc="/KrantiSolarVideo.mp4"
      /> */}


      {/* <ServicesGrid /> */}
      <OngoingProjects />
      {/* <CompletedProjects /> */}
      <CTASection />
    </div>
  )
}

export default RenewableEnergy