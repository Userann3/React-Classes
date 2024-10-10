import { useState, useEffect } from "react"
import Cards from "./Cards";
import './App.css'

export default function App() {
  const [count, setCount] = useState([]);

  useEffect(()=>{
    async function name(params) {
      const api = await fetch('https://fakestoreapi.com/products');
      const data = await api.json();
      console.log(data)
      setCount(data);

    }
name();

  },[])

  

  return (
    <>
   
          <div className="cards-container">
        {count.map((product, index) => (
          <Cards 
            key={index} 
            title={product.title} 
            price={product.price} 
            img={product.image} 
            desc={product.description}
          />
        ))}
      </div>
 

    </>
  )
}
