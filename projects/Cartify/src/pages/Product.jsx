import React from 'react';
import ProductList from '../components/ProductList';
 // Import ProductList component

const ProductPage = () => {
  return (
    <div className="max-w-7xl mx-auto p-6">
      <h1 className="text-3xl font-semibold mb-6">Shop Our Products</h1>
      <ProductList/>
    </div>
  );
};

export default ProductPage;
