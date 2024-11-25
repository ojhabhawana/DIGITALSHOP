import React, { createContext, useReducer } from "react";

const CartContext = createContext();

const reducer = (state, action) => {
  switch (action.type) {
    case "addtocart":
      return {
        cart: [...state.cart, action.payload]
      };
    case "removefromcart":
      return {
        cart: state.cart.filter(item => item.id !== action.payload.id)
      };
    default:
      return state;
  }
};

export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, { cart: [] });

  return (
    <CartContext.Provider value={{ state, dispatch }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartContext;