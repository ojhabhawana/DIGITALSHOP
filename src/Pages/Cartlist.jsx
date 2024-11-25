import React, { useContext } from 'react'
import CartContext from '../Cartcontext'

function Cartlist() {
    let{state,dispatch}=useContext(CartContext)
  return (
    <><div className="container">
  <div className="row">
    <div className="col-sm-12 col-md-12">
      <table className="table table-hover">
        <thead>
          <tr>
            <th>Product</th>
            <th>Quantity</th>
            <th className="text-center">Price</th>
            <th className="text-center">Total</th>
            <th>&nbsp;</th>
          </tr>
        </thead>
        <tbody>
            {state.cart.map((a)=>(
                  <tr>
                  <td className="col-sm-8 col-md-6">
                    <div className="media">
                      <a className="thumbnail pull-left" href="#"> <img className="media-object" src={a.images} style={{width: 72, height: 72}} /> </a>
                      <div className="media-body">
                        <h4 className="media-heading"><a href="#">{a.title}</a></h4>
                      
                      </div>
                    </div></td>
                  <td className="col-sm-1 col-md-1" style={{textAlign: 'center'}}>
                    <input type="email" className="form-control" id="exampleInputEmail1" defaultValue={3} />
                  </td>
                  <td className="col-sm-1 col-md-1 text-center"><strong>$4.87</strong></td>
                  <td className="col-sm-1 col-md-1 text-center"><strong>$14.61</strong></td>
                  <td className="col-sm-1 col-md-1">
                    <button type="button" className="btn btn-danger"onClick={()=>dispatch({type: 'removefromcart',payload: a})}>
                      <span className="glyphicon glyphicon-remove" /> Remove
                    </button></td>
                </tr>

            ))}
        

        </tbody>
      </table>
    </div>
  </div>
</div>

      
    </>
  )
}

export default Cartlist
