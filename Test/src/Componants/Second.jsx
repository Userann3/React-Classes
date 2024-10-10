import React, { useState } from 'react'
import './Second.css'

export default function Second() {
    const [color,setColor] = useState('white')
  return (
    <>
    <div className="div" style={{backgroundColor:color}}></div>
    <button onClick={()=> setColor('red')}>Red</button>
    <button onClick={()=> setColor('green')}>Green</button>
    <button onClick={()=> setColor('yellow')}>Yellow</button>
    <button onClick={()=> setColor()}>Reset</button>
    </>
  )
}
