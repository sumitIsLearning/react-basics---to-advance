import React, { useContext } from "react";
import { cartContext } from "../context/CartContext";
import CartItem from "../components/CartItem";
import { Link } from "react-router";

const Cart = () => {
  const { cartItems, setCartItems } = useContext(cartContext);

  function handleUpdateQuantity(id, quantity) {
    setCartItems((currItems) => {
      return currItems.map((item) =>
        item.id == id ? { ...item, quantity } : item
      );
    });
  }

  function handleRemoveItem(id) {
    setCartItems((currItems) => currItems.filter((item) => item.id !== id));
  }
  
  /* The reduce() method executes a reducer function for array element.
    The reduce() method returns a single value: the function's accumulated result.
    The reduce() method does not execute the function for empty array elements.
    The reduce() method does not change the original array. */

  const totalCost = cartItems.reduce(
    (total, item) => total + item.quantity * item.price ,
    0
  );

  return (
    <div className="container mx-auto px-4 py-6">
      <h1 className="text-2xl font-bold mb-4">Your Cart</h1>
      {cartItems.length > 0 ? (
        <>
          {cartItems.map((item) => (
            <CartItem
              key={item.id}
              item={item}
              onUpdateQuantity={handleUpdateQuantity}
              onRemoveItem={handleRemoveItem}
            />
          ))}
          <div className="text-right mt-6">
            <h2 className="text-xl font-semibold">
              Total: ${totalCost.toFixed(2)}
            </h2>
            <button className="mt-4 px-6 py-2 bg-blue-500 text-white font-medium rounded-lg shadow-md hover:bg-blue-600 transition duration-200 focus:outline-none focus:ring-2 focus:ring-blue-300">
              <Link to={"/checkout"}>Proceed to checkout</Link>
            </button>
          </div>
        </>
      ) : (
        <p className="text-gray-600">Your cart is empty.</p>
      )}
    </div>
  );
};

export default Cart;
