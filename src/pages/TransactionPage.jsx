import React from 'react'
import TransactionsHero from '../components/transaction/TransactionsHero'
import TransactionsGrid from '../components/transaction/TransactionsGrid'
import CurvedTimeline from '../components/transaction/CurvedTimeline'

function TransactionPage() {
  return (
    <div>
      <TransactionsHero />
      {/* <CurvedTimeline /> */}
      <TransactionsGrid />
    </div>
  )
}

export default TransactionPage