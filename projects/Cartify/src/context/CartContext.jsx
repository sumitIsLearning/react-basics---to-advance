import React, { createContext, useState } from "react";

const cartContext = createContext();

const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  function addToCart(product, quantity) {
    setCartItems((currItems) => {
      const existingProductIndex = currItems.findIndex(
        (item) => item.id === product.id
      );

      if (existingProductIndex >= 0) {
        const updatedItems = [...currItems];
        updatedItems[existingProductIndex].quantity += quantity;

        return updatedItems;
      } else {
        return [...currItems, { ...product, quantity }];
      }
    });
  }

  return (
    <cartContext.Provider
      value={{
        cartItems,
        setCartItems,
        addToCart,
      }}
    >
      {children}
    </cartContext.Provider>
  );
};
export { cartContext, CartProvider };
