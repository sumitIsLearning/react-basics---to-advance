import React, { useContext, useState } from "react";
import { featuredProducts } from "../utils/mockData";
import { cartContext } from "../context/CartContext";
import { Link } from "react-router";

const HomePage = () => {
  const {addToCart } = useContext(cartContext);
  const [quality, setQuality] = useState(1);

  function handleAddToCart(product) {
    addToCart(product , quality);
  }

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-500 to-blue-300 text-white py-20 px-8">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Empowering Retailers, One Product at a Time
          </h1>
          <p className="text-lg md:text-xl mb-6">
            Discover premium quality products for your business, delivered with care.
          </p>
          <div className="flex justify-center space-x-4">
            <button className="px-6 py-3 bg-white text-blue-500 font-semibold rounded-lg shadow-md hover:bg-gray-200 transition">
              <Link to={"/products"}>Shop Now</Link>
            </button>
            <button className="px-6 py-3 bg-transparent border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-blue-500 transition">
            <Link to={"/about"}>Learn More</Link>
            </button>
          </div>
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="py-16 px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-semibold text-center mb-10">
            Featured Products
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {featuredProducts.map((product) => (
              <div
                key={product.id}
                className="border rounded-lg overflow-hidden shadow hover:shadow-lg transition"
              >
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h3 className="text-lg font-semibold">{product.name}</h3>
                  <p className="text-gray-600">${product.price.toFixed(2)}</p>
                  <button className="mt-4 w-full py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition" onClick={() => handleAddToCart(product)}>
                    Add to Cart
                  </button>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <button className="px-8 py-3 bg-blue-500 text-white font-medium rounded-lg shadow hover:bg-blue-600 transition">
              <Link to={"/products"} > View All Products </Link>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
