import React from 'react'
import { useState, useEffect } from 'react'
import './App.css'
import First from './Componants/First'
import Second from './Componants/Second'
import Third from './Componants/Third'

export default function App() {
  const [password,setPassword] = useState("");

  const passwordFunction = ()=>{
    // let char = "ABCDEFGHIJKLMNOPQURSTVWXYZabcdefghijklmnopqrstuvwxyz"
    // let numb = "1234567890"
    let pass = Math.floor(Math.random()*10000)
    setPassword(pass)

  }

  useEffect(()=>{
    passwordFunction();

  },[])


  return (
    <>
    <div className="main">
      <input type="text" className='password' placeholder='password...' readOnly value={password}/>
      <button>Copy</button>
      <br /><br />
      <input type="checkbox" name="" id="" />
      <span>Number</span>
      <input type="checkbox" name="" id="" />
      <span>Special Character</span>
      <br /><br />
      <input type="range"/>
    </div>
    </>
  )
}
