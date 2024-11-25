import React from 'react'
import {useEffect, useState  } from 'react';
import { Link } from 'react-router-dom';

function Productsbycat(props) {
    let [product, setProduct] = useState([]);

    useEffect(() => {
       fetch(`https://dummyjson.com/products/category/${props.title}`)
        .then((a) => a.json())
        .then((b) => setProduct(b.products));
    }, []);
  
    useEffect(() => {
  
      fetch(`https://your-api-endpoint/brands`)
        .then((a) => a.json())
        .then((b) => setBrands(b));
    }, []);
  return (
    <>
    <section className='py-5'>
        <div className="container">
            <div className="row">
                <div className="col-lg-6"><h4 className='fw-bold text-uppercase'>{props.title}</h4></div>
                <div className="col-lg-6 text-lg-end">View more</div>
            </div>
            <div className="row g-4">
{product.slice(0, 4).map((a) => (
                  <div className='col-lg-3' key={a}>
                    <div className="border shadow text-center pb-3 pbox">
                      <img src={a.thumbnail} className='w-100%' alt="" />
                      <div className='content'>
                        <p className='fw-bold pt-2'>{a.title}</p>
                        <h5 className='text-primary fw-bold '>रु{a.price}</h5>
                        <Link className='btn btn-primary btn-sm' to={`/details/${a.id}`}>Quick View</Link>

                      </div>
                    </div>
                  </div>

                ))}
                  </div>
        </div>

    </section>
      
    </>
  )
}

export default Productsbycat
