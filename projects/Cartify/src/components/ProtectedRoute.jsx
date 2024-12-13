import { Navigate } from "react-router";
import { cartContext} from "../context/CartContext"; // Assume you have a cart context
import { useContext } from "react";

const ProtectedRoute = ({ children }) => {

  const { cartItems } = useContext(cartContext); // Access cart state

  // Check if the cart has items
  if (cartItems.length === 0) {
    return <Navigate to={"/cart"} /> // Redirect to the cart page
  }

  return children; // Render the protected component (e.g., Checkout)
};

export default ProtectedRoute;
