import React from 'react'
import HeroSection from '../components/business/HeroSection'
import IntroductionSection from '../components/business/IntroductionSection'
import RealEstateSection from '../components/business/RealEstateSection'
import RenewableEnergySection from '../components/business/RenewableEnergySection'
import HeritageHospitalitySection from '../components/business/HeritageHospitalitySection'
import CTASection from '../components/business/CTASection'
function BusinessPage() {
  return (
    <div>
      <HeroSection />
      <IntroductionSection />
      <RealEstateSection />
      <RenewableEnergySection />
      <HeritageHospitalitySection />
      <CTASection />
    </div>
  )
}

export default BusinessPage