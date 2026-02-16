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

      {/* <ServicesGrid /> */}
      <OngoingProjects />
      {/* <CompletedProjects /> */}
      <CTASection />
    </div>
  )
}

export default RenewableEnergy