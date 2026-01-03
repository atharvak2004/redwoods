import React from 'react'
import HeritageHospitalityHero from '../components/heritagehospitality/HeritageHospitalityHero'
import { ServiceOverview } from '../components/heritagehospitality/ServiceOverview'
import { PhilosophySection } from '../components/heritagehospitality/PhilosophySection'
import { ServicesSection } from '../components/heritagehospitality/ServicesSection'
import { OngoingProjects } from '../components/heritagehospitality/OngoingProjects'
import { CompletedProjects } from '../components/heritagehospitality/CompletedProjects'
import CTASection from '../components/business/CTASection'
function HeritageHospitality() {
  return (
    <div>
      <HeritageHospitalityHero />
      <ServiceOverview />
      <PhilosophySection />
      <ServicesSection />
      <OngoingProjects />
      <CompletedProjects />
      <CTASection />
    </div>
  )
}

export default HeritageHospitality