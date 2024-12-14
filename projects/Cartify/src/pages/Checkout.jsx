import React, { useContext } from "react";
import BillingInformation from "../components/BillingInformation";
import PaymentInformation from "../components/PaymentInformation";
import OrderSummary from "../components/OrderSummary";
import { cartContext } from "../context/CartContext";

const CheckoutPage = () => {
  const { cartItems } = useContext(cartContext);

  const subtotal = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
  const tax = subtotal * 0.1; // Example tax rate of 10%
  const total = subtotal + tax;

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6 text-center">Checkout</h1>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left Section: Billing & Payment */}
        <div className="lg:col-span-2 space-y-8">
          <BillingInformation />
          <PaymentInformation />
        </div>

        {/* Right Section: Order Summary */}
        <OrderSummary
          items={cartItems}
          subtotal={subtotal}
          tax={tax}
          total={total}
        />
      </div>
    </div>
  );
};

export default CheckoutPage;
