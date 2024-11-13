import React from 'react'
import { Link } from 'react-router-dom'

const Hero = () => {
  return (
    <section
        className="bg-gray-800 mt-6 w-full max-w-4xl p-8 rounded-md shadow-lg border-4 border-gray-700 pixelated hover:border-green-500 transform hover:scale-105 transition duration-300">
        <h2 className="text-3xl font-bold text-green-400 pixel-font">🎮
            Welcome to Pong Game 🎮</h2>
        <p className="text-lg text-gray-200 mt-4 pixel-font">
            Challenge your friends in a fast-paced retro Pong game.
            Compete, win, and rise up the ranks!
        </p>
        <div className="mt-6">
            <Link to="/game"
                className="retro-btn bg-green-500 text-black font-bold py-2 px-8 rounded-md hover:bg-green-600 transition duration-300 pixel-font">
                Start Playing
            </Link>
        </div>
    </section>
  )
}

export default Hero
