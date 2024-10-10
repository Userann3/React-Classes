import { useState } from 'react'
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import './App.css'

import Header from './components/header/Header'

import Footer from './components/footer/Footer'
import Home from './Pages/Home'
import Products from './Pages/Products'
import About from './Pages/About'
import Contact from './Pages/Contact'
import Layout from './Layout/Layout'
import User from './User'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
<BrowserRouter> 

{/* <Header/> */}

<Routes>
  <Route path="/" element={<Layout/>}>
  <Route index element ={<Home/>}></Route>
  <Route path='/Products' element={<Products/>}/>
  <Route path='/Contact' element={<Contact/>}/>
  <Route path='/About' element={<About/>}/>
  <Route path='/products/:id' element={<User/>}></Route>
  </Route>
</Routes>

{/* <Footer/> */}

</BrowserRouter>
    </>
  )
}

export default App
