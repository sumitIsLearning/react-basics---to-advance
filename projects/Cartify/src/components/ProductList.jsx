import React from 'react';
import ProductCard from './ProductCard'; // Assuming you have a ProductCard component
import { products } from '../utils/mockData';// Import products from mockData.js

const ProductList = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 p-6">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductList;
