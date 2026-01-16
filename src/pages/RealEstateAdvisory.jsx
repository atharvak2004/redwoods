import React from 'react'
import RealEstateHero from '../components/real-estate/RealEstateHero'
import ServiceOverview from '../components/real-estate/ServiceOverview'
import ServicesSection from '../components/real-estate/ServicesSection'
import DevelopmentSection from '../components/real-estate/DevelopmentSection'
import CompletedProjects from '../components/real-estate/CompletedProjects'
import OngoingProjects from '../components/real-estate/OngoingProjects'    
import CTASection from '../components/business/CTASection'
function RealEstateAdvisory() {
  return (
    <div>
      <RealEstateHero />
      <ServiceOverview />
      <DevelopmentSection />
      <ServicesSection />
      <OngoingProjects />
      {/* <CompletedProjects /> */}
      <CTASection />
    </div>
  )
}

export default RealEstateAdvisory