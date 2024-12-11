import React, { useContext } from 'react'
import {cartContext } from '../context/CartContext';
import { Link } from 'react-router';

export const Header = () => {
    const {cartItems} = useContext(cartContext);
  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo */}
        <div className="text-xl font-bold text-gray-800">
          Cartify
        </div>

        {/* Navigation Links */}
        <nav className="hidden md:flex space-x-6">
          <Link to="/" className="text-gray-600 hover:text-gray-800">
            Home
          </Link>
          <Link to="/products" className="text-gray-600 hover:text-gray-800">
            Products
          </Link>
          <Link to="/about" className="text-gray-600 hover:text-gray-800">
            About
          </Link>
        </nav>

        {/* Cart Icon */}
        <div className="relative">
          <Link to="/cart" className="text-gray-600 hover:text-gray-800">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-7 w-7"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={3}
                d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13l-1.3 5.4c-.1.4.2.6.6.6h12.6c.4 0 .7-.2.6-.6L17 13H7zm4 8a2 2 0 100-4 2 2 0 000 4zm6 0a2 2 0 100-4 2 2 0 000 4z"
              />
            </svg>
          </Link>
          {cartItems.length > 0 && (
            <span className="absolute bottom-3 left-3 bg-red-500 text-white text-xs rounded-full px-2 py-1">
              {cartItems.length}
            </span>
          )}
        </div>
      </div>
    </header>
  )
}
