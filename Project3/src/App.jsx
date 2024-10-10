import { useEffect, useState } from "react";
import Navbar from "./Navbar";
import Card from "./Card";

function App() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        let data = await fetch('https://fakestoreapi.com/products');
        let jsonData = await data.json();
        setProducts(jsonData); 
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <Navbar />
      <div className="cards-container">
        {products.map((product, index) => (
          <Card 
            key={index} 
            title={product.title} 
            price={product.price} 
            img={product.image} 
          />
        ))}
      </div>
    </>
  );
}

export default App;
