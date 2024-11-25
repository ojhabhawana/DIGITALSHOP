import React,{useEffect,useState} from 'react'
import { useParams,Link } from 'react-router-dom' 



function Category() {
    let{cid}=useParams()
    let [product, setProduct] = useState([]);

    useEffect(() => {
       fetch(`https://dummyjson.com/products/category/${cid}`)
        .then((a) => a.json())
        .then((b) => setProduct(b.products));
    }, []);
      
  return (
    <>
    <div className="container">
        <h2 className='text-uppercase py-3'>{cid}</h2>
        <div className="row g-4">
{product.map((a) => (
                  <div className='col-lg-3' key={a}>
                    <div className="border shadow text-center pb-3 pbox">
                      <img src={a.thumbnail} className='w-100' alt="" />
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
      
    </>
  )
}

export default Category
