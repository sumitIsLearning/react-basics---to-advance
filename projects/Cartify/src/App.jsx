import React from "react";
import { Routes, Route } from "react-router";

//pages
import Home from "./pages/Home";
import Product from "./pages/Product";
import About from "./pages/About";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import Layout from "./pages/Layout";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="products" element={<Product />} />
          <Route path="About" element={<About />} />
          <Route path="cart" element={<Cart />} />
        </Route>
      </Routes>
      <Routes>
        <Route path="checkout" element={<Checkout />} />
      </Routes>
    </div>
  );
};

export default App;
