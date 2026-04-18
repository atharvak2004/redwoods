import React from 'react'
import HeroSection from '../components/projects/HeroSection'
import ProjectSectionTitle from "../components/projects/ProjectSectionTitle";
import ProjectLeft from "../components/projects/ProjectLeft";
import ProjectRight from "../components/projects/ProjectRight";
import CTASection from '../components/projects/CTASection'
import ServiceOverview from '../components/real-estate/ServiceOverview'
import DevelopmentSection from '../components/real-estate/DevelopmentSection'
import OngoingProjects from '../components/real-estate/OngoingProjects'
function RealEstateDevelopment() {
  return (
    <div>
      <HeroSection name="Real Estate Development" title="Our Business" title2="Real Estate Development" descr="End-to-end real estate development across land acquisition, project feasibility, planning, structuring, and execution—delivering projects seamlessly from concept to completion." img="/home/hero/hero-carousal-image1.png" />
      <ServiceOverview />
      <DevelopmentSection />
      <OngoingProjects />

      <CTASection title1="Start Your" title2="Development Project" descr="Have a development opportunity? Let's discuss how we can bring your vision to life." button1="Contact Us" button2="View Transactions" />
    </div>
  )
}

export default RealEstateDevelopment