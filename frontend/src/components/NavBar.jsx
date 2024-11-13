import React from 'react'
import { Link } from 'react-router-dom'
import { useState } from 'react'

const NavBar = () => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    }
  return (
    <nav className="w-full bg-gray-900 text-green-400 pixel-font border-b-4 border-gray-700">
            
        <div className="max-w-screen-xl mx-auto flex justify-between items-center p-4">
            <h1 className="text-3xl md:text-4xl font-bold tracking-wide pixelated animate-pulse">Pong Game</h1>
            
            <button id="nav-toggle" className="text-green-400 md:hidden focus:outline-none" onClick={toggleDropdown}>
                <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15"/>
                </svg>
            </button>
            <ul id="nav-links" className="hidden md:flex space-x-8 text-lg font-bold">
                <li>
                    <Link to="/"
                        className="hover:text-green-300 pixel-font">Home</Link>
                </li>
                <li>
                    <Link to="/match-history"
                        className="hover:text-green-300 pixel-font">
                        History</Link>
                </li>
                <li>
                    <Link to="/register"
                        className="hover:text-green-300 pixel-font">Sign
                        Up</Link>
                </li>
                <li>
                    <Link to="/logout"
                        className="hover:text-green-300 pixel-font">Logout</Link>

                </li>
            </ul>
        </div>
        {isDropdownOpen? (
            <div id="dropdown" className="md:hidden bg-gray-800 px-4 py-2 space-y-4 text-lg font-bold text-center">
                        <Link to="/"
                            className="block hover:text-green-300 pixel-font">Home</Link>
                        <Link to="/match-history"
                            className="block hover:text-green-300 pixel-font">History</Link>
                        <Link to="/register"
                            className="block hover:text-green-300 pixel-font">Sign Up</Link>
                        <Link to="/logout"
                            className="block hover:text-green-300 pixel-font">Logout</Link>
            </div>
        ) : null}
    </nav>
  )
}

export default NavBar
