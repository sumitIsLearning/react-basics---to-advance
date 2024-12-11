import React, { createContext, useState } from "react";

const cartContext = createContext();

const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([
    { id: 1, name: "Product A", price: 20, quantity: 1, image: "https://via.placeholder.com/64" },
    { id: 2, name: "Product B", price: 35, quantity: 2, image: "https://via.placeholder.com/64" },
  ]);
  return (
    <cartContext.Provider
      value={{
        cartItems,
        setCartItems,
      }}
    >
      {children}
    </cartContext.Provider>
  );
};
export { cartContext, CartProvider };
