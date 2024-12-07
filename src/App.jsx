import { Route, Routes } from 'react-router-dom' // Import Routes
import './App.css'
import Navbar from './components/navbar/Navbar'
import HomePage from './pages/HomePage'
import Footer from './components/home/footer/Footer'

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
      <Footer/>
    </>
  )
}

export default App
