import React from 'react';
import { useNavigate } from 'react-router';

const SuccessMessage = ({ message, onClose , clearCart }) => {

  function handleClose() {
    onClose();
    clearCart();
  }

  return (
    <div className="fixed top-20 right-0 z-50 p-4 w-80 bg-green-500 text-white rounded-l-lg shadow-lg transform transition-transform duration-300 ease-in-out">
      <div className="flex justify-between items-center">
        <p className="text-sm font-semibold">{message}</p>
        <button
          onClick={handleClose}
          className="text-white hover:text-gray-200 focus:outline-none"
        >
          &times;
        </button>
      </div>
      <div className="mt-2 text-sm">
        🎉 <span>Thank you for your action!</span>
      </div>
    </div>
  );
};

export default SuccessMessage;
