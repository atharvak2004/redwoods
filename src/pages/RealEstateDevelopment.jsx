import React from 'react'
import HeroSection from '../components/projects/HeroSection'
import ProjectSectionTitle from "../components/projects/ProjectSectionTitle";
import ProjectLeft from "../components/projects/ProjectLeft";
import ProjectRight from "../components/projects/ProjectRight";
import CTASection from '../components/projects/CTASection'
function RealEstateDevelopment() {
  return (
    <div>
      <HeroSection name="Real Estate Development" title="Real Estate" title2="Development" descr="Advisory across land acquisition, project feasibility, planning, structuring, and execution support — guiding projects from concept to completion." img="/RealEstateHeroBg.png" />

      <ProjectSectionTitle
        title="Featured Developments"
        subtitle="Curated developments reflecting innovation, sustainability, and long-term value."
      />

      <ProjectLeft
        image="/development/2.png"
        title2="Featured Project"
        title="The Residency"
        subtitle="Prime location. High ROI. Strategic leasing."
      />

      <ProjectRight
        image="/RealEstateHeroBg.png"
        title2="Featured Project"
        title="Dehradun House - Condo Living"
        subtitle="Modern living. Smart design. Sustainable spaces."
      />

      <ProjectLeft
        image="/development/GhaziabadPhoto.png"
        title2="Featured Project"
        title="Ghaziabad MI"
        subtitle="Prime location. High ROI. Strategic leasing."
      />

      <CTASection title1="Start Your" title2="Development Project" descr="Have a development opportunity? Let's discuss how we can bring your vision to life." button1="Contact Us" button2="View Transactions" />
    </div>
  )
}

export default RealEstateDevelopment