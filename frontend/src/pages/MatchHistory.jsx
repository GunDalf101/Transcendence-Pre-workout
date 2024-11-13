import React from 'react'
import TableRows from '../components/MatchHistory/TableRows'

const MatchHistory = () => {
  return (
    <main className="flex flex-col items-center min-h-screen text-center space-y-10 pt-10">
      <section className="bg-gray-800 w-full max-w-4xl p-8 rounded-lg shadow-lg border-4 border-gray-700 pixelated">
        <h2 className="text-5xl font-bold text-yellow-400 pixel-font mb-6">Match History</h2>
        <p className="text-lg text-gray-200 font-medium pixel-font mb-8">
          Review your past matches and see how you performed!
        </p>
    
        <TableRows />
      </section>
    </main>
  )
}

export default MatchHistory
