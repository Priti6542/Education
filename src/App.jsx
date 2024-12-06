import { Route, Routes } from 'react-router-dom' // Import Routes
import './App.css'
import Navbar from './components/navbar/Navbar'
import HomePage from './pages/HomePage'

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
    </>
  )
}

export default App
