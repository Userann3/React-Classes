// import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from './Navbar';
import Home from './Navbar_Pages/Home';
import Contact from './Navbar_Pages/Contact';
import About from "./Navbar_Pages/About";
import './App.css'
function App() {
  return (
    <>
   
    <BrowserRouter>
    <Navbar/>
<Routes>
  <Route path="/" element={<Home />} />
  <Route path="/Navbar_Pages/Contact" element={<Contact />} />
  <Route path="/Navbar_Pages/About" element={<About />} />

</Routes>
    </BrowserRouter>
    </>
  )
}

export default App