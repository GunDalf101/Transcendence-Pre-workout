import React from 'react'
import NavBar from '../components/NavBar'
import { Outlet } from 'react-router-dom'
import Footer from '../components/Footer'
import { UserProvider } from '../components/Context/UserContext'

const MainLayout = () => {
  return (
    <>
      <UserProvider>
          <div className="font-sans bg-gray-50 text-gray-900">
              <div className="flex flex-col min-h-screen bg-black p-0">
              <NavBar />
              <Outlet />
              <Footer />
              </div>
          </div>
      </UserProvider>
    </>
  )
}

export default MainLayout
