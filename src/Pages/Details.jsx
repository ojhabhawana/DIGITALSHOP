import React,{useContext, useEffect,useState} from 'react'
import { useParams,Link } from 'react-router-dom' 
import CartContext from '../Cartcontext';




function Details() {
  let{state,dispatch}=useContext(CartContext)
  console.log(state.Cart)
  
  let{id}=useParams()
    let [product, setProduct] = useState([]);

    useEffect(() => {
       fetch(`https://dummyjson.com/products/${id}`)
        .then((a) => a.json())
        .then((b) => setProduct(b));
    }, []);
  return (
    <><div className="container py-4 my-4 .bg-black">
  <div className="card">
    <div className="container-fliud">
      <div className="wrapper row">
        <div className="preview col-md-6">
          <div className="preview-pic tab-content">
            <div className="tab-pane active" id="pic-1"><img className='w-100' src={product.images} alt=''/></div>
            
          
          </div>
          
        </div>
        <div className="details col-md-6">
          <h1 className="product-title text-uppercase py-4 fw-bold">{product.title}</h1>
          <div className="rating">
            <div className="stars">
              <span className="fa fa-star checked" />
              <span className="fa fa-star checked" />
              <span className="fa fa-star checked" />
              <span className="fa fa-star" />
              <span className="fa fa-star" />
            </div>
            <span className="review-no">41 reviews</span>
          </div>
          <p className="product-description">{product.description}</p>
          <h4 className="price">current price: <span>${product.price}</span></h4>
          <p className="vote"><strong>91%</strong> of buyers enjoyed this product! <strong>(87 votes)</strong></p>
          
          <div className="action">
            <button className="add-to-cart btn btn-primary" type="button" onClick={()=>dispatch({type: 'addtocart',payload: product})}>add to cart</button>
            <button className="like btn btn-default" type="button"><span className="fa fa-heart" /></button>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

      
    </>
  )
}

export default Details
