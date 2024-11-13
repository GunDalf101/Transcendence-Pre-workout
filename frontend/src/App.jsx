import React from 'react'
import api from './api'
import Login from './pages/Login'
import Register from './pages/Register'
import Home from './pages/Home'
import NotFound from './pages/NotFound'
import ProtectedRoute from './components/ProtectedRoute'
import MainLayout from './layout/MainLayout'
import Game from './pages/Game'
import { Route, BrowserRouter, Routes, Navigate } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import MatchHistory from './pages/MatchHistory'
import 'react-toastify/dist/ReactToastify.css'

const Logout = () => {
  localStorage.clear()
  return <Navigate to="/login" />
}

const RegisterAndLogout = () => {
  localStorage.clear()
  return <Register />
}

const App = () => {
  return (
    // <Pong />
    <BrowserRouter>
      <ToastContainer />
      <Routes>
          <Route path="/" element={<MainLayout />} >
            <Route index element={<ProtectedRoute><Home /></ProtectedRoute>} />
            <Route path="/game" element={<ProtectedRoute><Game /></ProtectedRoute>} />
            <Route path="/match-history" element={<ProtectedRoute><MatchHistory /></ProtectedRoute>} />
          </Route>
          <Route path="/login" element={<Login />} />
          <Route path="/logout" element={<Logout />} />
          <Route path="/register" element={<RegisterAndLogout />} />
          <Route path="*" element={<NotFound />} />
          
      </Routes>
    </BrowserRouter>
  )
}

export default App

