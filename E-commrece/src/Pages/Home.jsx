import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import './Home.css'
import { Link } from 'react-router-dom'

export default function Home() {

  const [data, setData] = useState([]);

  const apiData = async () => {
    const response = await fetch('https://api.escuelajs.co/api/v1/products');
    const result = await response.json();
    setData(result);
    console.log(result[0])
  }

  useEffect(() => {
    apiData();
  }, [])

  return (
    <>

    <div className="container p-2">
      {
        data.map((products)=>{
          return(
            <div className="card p-2" key={products.id}>

            <div className="img">
              <img src={products.images[0]} alt="" />
            </div>
    
            <div className="detailes">
              <h4>{products.title}</h4>
              <h5>Price: {products.price}</h5>
              <Link to={`/products/${products.id}`}>Read More</Link>
            </div>
    
          </div>
          )
        })
      }
    </div>

 

    </>
  )
}
