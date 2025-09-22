import React from 'react'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import './App.css'
import Home from './Pages/Home/Home'
import Clothing from './Products/Clothing/Clothing' 
import Shoes from './Products/Shoes/Shoes'
import Nav from './Navbar/Nav'
import Footer from './Footer/Footer'
import Copyright from './Footer/Copyright'

function App() {
  

  return (
    <Router>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Clothing" element={<Clothing />} />
        <Route path="/Shoes" element={<Shoes />} />
      </Routes>
      <Footer />
      <Copyright />
    </Router>
  )
}

export default App
