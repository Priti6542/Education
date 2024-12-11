import {  Router,Route, Routes } from 'react-router-dom' // Import Routes
import './App.css'

import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'
import Navbar from './components/navbar/Navbar'
import CourcesPage from './pages/CourcesPage'


function App() {
  return (
    <>
    
      <Navbar/>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/cources" element={<CourcesPage />} />
      </Routes>
    </>
  )
}

export default App
