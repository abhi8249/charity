import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Navbar from "./components/Navbar"
import Home from "./components/Home"
import AboutUs from "./components/AboutUs"
import Gallery from "./components/Gallery"
import './App.css'
import ContactUs from "./components/ContactUs"

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/contact" element={<ContactUs />} />
        {/* Add more routes as needed */}
      </Routes>
    </Router>
  )
}

export default App
