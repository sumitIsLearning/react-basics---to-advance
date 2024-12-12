import React, { useContext, useState } from 'react';
import { cartContext } from '../context/CartContext';

const ProductCard = ({ product }) => {
  const { addToCart } = useContext(cartContext);
  const [quantity, setQuantity] = useState(1);

  function handleAddToCart() {
    addToCart(product, quantity);
  }

  function handleQuantityIncrement() {
    setQuantity((currentQuantity) => currentQuantity + 1);
  }

  function handleQuantityDecrement() {
    if (quantity > 1) {
      setQuantity((currentQuantity) => currentQuantity - 1);
    }
  }

  return (
    <div className="border p-4 rounded-lg shadow-lg hover:shadow-xl transition-all duration-200">
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-48 object-cover rounded-md mb-4"
      />
      <h3 className="text-lg font-semibold">{product.name}</h3>
      <p className="text-gray-600 mb-2">{product.description}</p>
      <p className="text-xl font-semibold text-blue-500">
        ${product.price.toFixed(2)}
      </p>

      {/* Quantity control */}
      <div className="flex items-center space-x-2 mt-4">
        <button
          onClick={handleQuantityDecrement}
          className="px-3 py-1 bg-gray-200 text-gray-700 rounded hover:bg-gray-300"
        >
          -
        </button>
        <input
          type="number"
          value={quantity}
          readOnly
          className="w-16 text-center border border-gray-300 rounded"
        />
        <button
          onClick={handleQuantityIncrement}
          className="px-3 py-1 bg-gray-200 text-gray-700 rounded hover:bg-gray-300"
        >
          +
        </button>
      </div>

      {/* Add to cart button */}
      <button
        onClick={handleAddToCart}
        className="w-full mt-4 py-2 bg-blue-500 text-white font-medium rounded-lg hover:bg-blue-600 transition duration-200"
      >
        Add to Cart
      </button>
    </div>
  );
};

export default ProductCard;
