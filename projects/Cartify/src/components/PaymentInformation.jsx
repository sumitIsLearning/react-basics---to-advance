import React, { useContext, useState } from "react";
import SuccessMessage from "./SuccessMessage";
import { cartContext } from "../context/CartContext";

const PaymentInformation = () => {
  const [paymentMode, setPaymentMode] = useState("card"); // Default to card
  const [cardDetails, setCardDetails] = useState({
    cardNumber: "",
    cardName: "",
    expirationDate: "",
    cvv: "",
  });
  const [upiId, setUpiId] = useState("");
  const [paypalEmail, setPaypalEmail] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [showSuccess, setShowSuccess] = useState("");
  const {setCartItems} = useContext(cartContext);

  const handlePaymentSubmit = () => {
    if (
      paymentMode === "card" &&
      Object.values(cardDetails).some((field) => !field)
    ) {
      setErrorMessage(
        "All card payment fields are required. Please fill them out."
      );
    } else if (paymentMode === "UPI" && !upiId) {
      setErrorMessage("Please provide a valid UPI ID.");
    } else if (paymentMode === "paypal" && !paypalEmail) {
      setErrorMessage("Please provide a valid PayPal email.");
    } else {
      setErrorMessage(""); // Clear error message if everything is valid
      setShowSuccess(`Payment processed successfully using ${paymentMode}!`);
    }
  };

  return (
    <div className="border p-6 rounded-lg shadow-lg">
      <h2 className="text-xl font-semibold mb-4">Payment Information</h2>
      {errorMessage && <p className="text-red-600 mb-4">{errorMessage}</p> }
      
      {/* Show Success Message */}
      {showSuccess && (
        <SuccessMessage
          message={showSuccess}
          onClose={() => setShowSuccess(false)}
          clearCart={() => setCartItems([])}
        />
      )}

      {/* Payment Mode Selection */}
      <div className="mb-6">
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Select Payment Mode
        </label>
        <select
          value={paymentMode}
          onChange={(e) => setPaymentMode(e.target.value)}
          className="w-full px-3 py-2 border rounded-lg"
        >
          <option value="card">Credit/Debit Card</option>
          <option value="UPI">UPI</option>
          <option value="paypal">PayPal</option>
        </select>
      </div>

      {/* Card Information Section */}
      {paymentMode === "card" && (
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Card Number
            </label>
            <input
              type="text"
              value={cardDetails.cardNumber}
              onChange={(e) =>
                setCardDetails({ ...cardDetails, cardNumber: e.target.value })
              }
              className="w-full px-3 py-2 border rounded-lg"
              placeholder="1234 5678 9012 3456"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Name on Card
            </label>
            <input
              type="text"
              value={cardDetails.cardName}
              onChange={(e) =>
                setCardDetails({ ...cardDetails, cardName: e.target.value })
              }
              className="w-full px-3 py-2 border rounded-lg"
              placeholder="John Doe"
            />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Expiration Date
              </label>
              <input
                type="text"
                value={cardDetails.expirationDate}
                onChange={(e) =>
                  setCardDetails({
                    ...cardDetails,
                    expirationDate: e.target.value,
                  })
                }
                className="w-full px-3 py-2 border rounded-lg"
                placeholder="MM/YY"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                CVV
              </label>
              <input
                type="text"
                value={cardDetails.cvv}
                onChange={(e) =>
                  setCardDetails({ ...cardDetails, cvv: e.target.value })
                }
                className="w-full px-3 py-2 border rounded-lg"
                placeholder="123"
              />
            </div>
          </div>
        </div>
      )}

      {/* UPI Information Section */}
      {paymentMode === "UPI" && (
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              UPI ID
            </label>
            <input
              type="text"
              value={upiId}
              onChange={(e) => setUpiId(e.target.value)}
              className="w-full px-3 py-2 border rounded-lg"
              placeholder="example@upi"
            />
          </div>
        </div>
      )}

      {/* PayPal Information Section */}
      {paymentMode === "paypal" && (
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              PayPal Email
            </label>
            <input
              type="email"
              value={paypalEmail}
              onChange={(e) => setPaypalEmail(e.target.value)}
              className="w-full px-3 py-2 border rounded-lg"
              placeholder="example@example.com"
            />
          </div>
        </div>
      )}

      {/* Submit Button */}
      <button
        onClick={handlePaymentSubmit}
        className="mt-6 w-full py-2 bg-blue-500 text-white font-medium rounded-lg hover:bg-blue-600 transition duration-200"
      >
        Place Order
      </button>
    </div>
  );
};

export default PaymentInformation;
