import React from 'react'
import TeamHero from '../components/team/TeamHero'
import OurTeam from '../components/team/OurTeam'
import OurLeadership from '../components/team/OurLeadership'

function TeamPage() {
  return (
    <div>
      <TeamHero/>
      <OurLeadership/>
      <OurTeam/>
      {/* <OurTeam/> */}
    </div>
  )
}

export default TeamPage