import React from 'react'
import { useState } from 'react'
import './First.css'

export default function First() {
  const [count,setCount] = useState(1);
function increment(){
  if(count>=20){
    alert("You have reached the maximum limit")
  }
  else{
    setCount(count+1)
  }
}

function decerment(){
  if(count==0){
    alert("Number can't be Negative")
  }
  else{
    setCount(count-1)
  }
}
  return (
    <>
<h1>{count}</h1> 
<button onClick={()=> increment()}>increment</button>
<button onClick={()=> decerment()}>decrment</button>
    </>
  )
}
