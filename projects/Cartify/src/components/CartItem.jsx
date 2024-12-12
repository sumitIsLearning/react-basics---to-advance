import React, { useRef } from "react";

const CartItem = ({ item, onUpdateQuantity, onRemoveItem }) => {
  const quantiyRef = useRef(item.quantity);

  function handleQuantityChange(e) {
    const newQuantity = parseInt(e.target.value);
    quantiyRef.current = newQuantity;
    {
      newQuantity > 0 && onUpdateQuantity(item.id, newQuantity);
    }
  }

  function handleIncrement() {
    onUpdateQuantity(item.id, item.quantity + 1);
  }

  function handleDecrement() {
    if(item.quantity > 1) {
      onUpdateQuantity(item.id, item.quantity - 1);
    }
  }


  return (
    <div className="flex items-center justify-between border-b border-gray-200 py-4">
      {/* Product Image */}
      <img
        src={item.image}
        alt={item.name}
        className="w-16 h-16 rounded object-cover"
      />

      {/* Product Details */}
      <div className="flex-1 ml-4">
        <h3 className="text-lg font-medium text-gray-800">{item.name}</h3>
        <p className="text-sm text-gray-600">${item.price.toFixed(2)}</p>
      </div>

      {/* Quantity Controls */}
      <div className="flex items-center space-x-2">
        <button
          onClick={handleDecrement}
          className="px-2 py-1 bg-gray-200 text-gray-700 rounded hover:bg-gray-300"
        >
          -
        </button>
        <input
          type="number"
          value={item.quantity}
          onChange={handleQuantityChange}
          className="w-12 text-center border border-gray-300 rounded"
        />
        <button
          onClick={handleIncrement}
          className="px-2 py-1 bg-gray-200 text-gray-700 rounded hover:bg-gray-300"
        >
          +
        </button>
      </div>

      {/* Total Price */}
      <div className="ml-4">
        <p className="text-gray-800 font-medium">
          ${(item.price * item.quantity).toFixed(2)}
        </p>
      </div>

      {/* Remove Button */}
      <button
        onClick={() => onRemoveItem(item.id)}
        className="ml-4 text-red-500 hover:text-red-700"
      >
        Remove
      </button>
    </div>
  );
};

export default CartItem;
