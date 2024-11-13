import React from 'react'

const Features = () => {
  return (
    <section
        className="bg-gray-800 w-full max-w-4xl p-8 rounded-md shadow-lg border-4 border-gray-700 pixelated hover:border-blue-500 transform hover:scale-105 transition duration-300">
        <h3
            className="text-3xl font-bold text-green-400 pixel-font">Game
            Features</h3>
        <ul className="text-gray-200 text-lg mt-6 space-y-3 pixel-font">
            <li>🏆 Achievements System</li>
            <li>💰 Currency System</li>
            <li>📊 User Stats (Wins, Losses)</li>
            <li>🌐 Multiplayer Gameplay</li>
        </ul>
    </section>
  )
}

export default Features
