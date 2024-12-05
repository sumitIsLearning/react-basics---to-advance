import React from "react";
import { Routes, Route, Outlet } from "react-router";
import Navbar from "./components/Navbar";

//pages imported from page folder
import Features from "./pages/Features";
import Customer from "./pages/Customer";
import Integrations from "./pages/Integrations";
import Error from "./pages/Error";

// this defines the layout of the application
function Layout() {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <main>
        <Outlet />
      </main>
    </>
  );
}

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout/>}>
            <Route index element={<Customer />}/>
            <Route path="features" element={<Features />}/>
            <Route path="integration" element={<Integrations />}/>
            <Route path="*" element={<Error />}/>
        </Route>
        
      </Routes>
    </>
  );
};

export default App;
