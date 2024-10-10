import React from 'react'
import { useState , useEffect} from 'react';

export default function Third() {
    const [count,setCount] = useState(0)
    let date = new Date();
    let hours = date.getHours();
    let min = date.getMinutes();
    let sec = date.getSeconds();
    
    let interval =  setInterval(() => {
      setCount(sec)
    clearInterval(interval)
    }, 1000);
    
    return (
      <>
        <h1>{hours.toString()}</h1>
        <h1>{min.toString()}</h1>
        <h1>{count}</h1>
        {/* <h1>{an}</h1> */}
      </>  
  )
}
