import React from 'react'
import TransactionsHero from '../components/transaction/TransactionsHero'
import TransactionsGrid from '../components/transaction/TransactionsGrid'

function TransactionPage() {
  return (
    <div>
      <TransactionsHero />
      <TransactionsGrid />
    </div>
  )
}

export default TransactionPage