import { useState } from 'react'

import './App.css'

function App() {
  const [color, setCount] = useState("white")


  return (
    <>
<div className='div' style={{backgroundColor: color}}></div>

<button onClick={() => setCount("red") }>Click to change color</button>
<button onClick={() => setCount("green") }>Click to change color</button>
<button onClick={() => setCount("blue") }>Click to change color</button>

    </>
  )
}

export default App


