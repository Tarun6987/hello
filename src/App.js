import "./App.css";
import React, { createContext, useState } from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import Navbar from './Navbar';
import ProductData from "./ProductData";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./Login";
import Contact from "./Contact";
import About from "./About";
import Cart from "./Cart"; // Import Cart component

export const AppContext = createContext();

function App() {
  const [cart, setCart] = useState([]);  // Store cart items
  const [quantity, setQuantity] = useState(1);  // Default quantity
  
  const addToCart = (product) => {
    setCart([...cart, { ...product, quantity }]);  // Add product with selected quantity to the cart
  };

  return (
    <div>
      <BrowserRouter>
        <AppContext.Provider value={{ cart, setCart, quantity, setQuantity, addToCart }}>
          <Navbar />
          <Routes>
            <Route index element={<ProductData />}></Route>
            <Route path="/product" element={<ProductData />}></Route>
            <Route path="/login" element={<Login />}></Route>
            <Route path="/contact" element={<Contact />}></Route>
            <Route path="/about" element={<About />}></Route>
            <Route path="/cart" element={<Cart />}></Route>  
          </Routes>
        </AppContext.Provider>
      </BrowserRouter>
    </div>
  );
}
export default App;
