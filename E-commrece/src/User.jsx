import React from 'react';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import './Pages/User.css';

export default function User() {
    const { id } = useParams();

    const [data, setData] = useState({});

    const apiData = async () => {
        const response = await fetch(`https://api.escuelajs.co/api/v1/products/${id}`);
        const result = await response.json();
        setData(result);
        console.log(result);
    }

    useEffect(() => {
        apiData();
    }, []);

    return (
        <div className='Main-container d-flex'>

            <div className='Other-images border'>

                <div className='img-1'>       {data.images && data.images[1] ? (
                            <img src={data.images[1]} alt={data.title} className="card-img-top img-fluid rounded" />
                        ) : (
                            <div>No Image Available</div>
                        )}</div>

                <div className='img-2'>{data.images && data.images[2] ? (
                            <img src={data.images[2]} alt={data.title} className="card-img-top img-fluid rounded" />
                        ) : (
                            <div>No Image Available</div>
                        )}</div>


            </div>
        <div className="container d-flex py-5">

            <div className="row">
                <div className="col-md-6">
                    <div className="card">

                        {data.images && data.images[0] ? (
                            <img src={data.images[0]} alt={data.title} className="card-img-top img-fluid rounded" />
                        ) : (
                            <div>No Image Available</div>
                        )}
                    </div>
                </div>
                <div className="col-md-6 d-flex flex-column justify-content-center">
                    <div className="detailes">
                        <h3 className="card-title">{data.title}</h3>
                        <br />
                        <p className="card-text">{data.description}</p>
                        <h4 className="text-primary fs-5">Price: ${data.price}</h4>
                    </div>
                </div>
            </div>
        </div>
        </div>
    );
}
