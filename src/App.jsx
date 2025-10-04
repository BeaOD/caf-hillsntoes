import React from 'react'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import './App.css'
import Home from './Pages/Home/Home'
import Clothing from './Products/Clothing/Clothing' 
import Shoes from './Products/Shoes/Shoes'
import ProductsDisplay from './Components/ProductsDisplay'
import Nav from './Navbar/Nav'
import Footer from './Footer/Footer'
import Copyright from './Footer/Copyright'
import Login from './Account/Login'
import SignUp from './Account/Signup'
import ForgotPassword from './Account/ForgotPassword'
import About from './Pages/About'
import Delivery from './Pages/Delivery'
import ProductPayment from './Payment/ProductPayment'


function App() {
  

  return (
    <Router>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Clothing" element={<Clothing />} />
        <Route path="/Shoes" element={<Shoes />} />
        <Route path="/ProductsDisplay/:id" element={<ProductsDisplay />} />
        <Route path="/Login" element={<Login/>}/>
        <Route path="/Signup" element={<SignUp/>}/>
        <Route path="/ForgotPassword" element={<ForgotPassword/>}/>
        <Route path="/About" element={<About/>}/>
        <Route path="/Delivery" element={<Delivery/>}/>
        <Route path="/ProductPayment" element={<ProductPayment/>}/>
      </Routes>
      <Footer />
      <Copyright />
    </Router>
  )
}

export default App
