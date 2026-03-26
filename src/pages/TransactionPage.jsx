import React from 'react'
import TransactionsHero from '../components/transaction/TransactionsHero'
import TransactionsGrid from '../components/transaction/TransactionsGrid'
import CurvedTimeline from '../components/transaction/CurvedTimeline'
import WaveTimeline from '../components/transaction/WaveTimeline'
import HorizontalTimeline from '../components/transaction/HorizontalTimeline'
import MilestoneTimeline from '../components/transaction/MilestoneTimeline'

function TransactionPage() {
  return (
    <div>
      <TransactionsHero />
      <WaveTimeline />
      {/* <HorizontalTimeline /> */}
      {/* <MilestoneTimeline /> */}
      {/* <TransactionsGrid /> */}
    </div>
  )
}

export default TransactionPage