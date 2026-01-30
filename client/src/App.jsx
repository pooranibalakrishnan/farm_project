import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Login from "./pages/Login";
import Register from "./pages/Register";

import Home from "./pages/Home";
import Products from "./pages/Products";
import About from "./pages/About";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";


import ProtectedRoute from "./components/ProtectedRoute";

export default function App() {
  const location = useLocation();

  const hideLayoutPages = ["/", "/register"];

  const hideLayout = hideLayoutPages.includes(location.pathname);

  return (
    <>
   
      {!hideLayout && <Navbar />}

      <Routes>
       
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />

      
        <Route
          path="/home"
          element={
            <ProtectedRoute>
              <Home />
            </ProtectedRoute>
          }
        />

        <Route
          path="/products"
          element={
            <ProtectedRoute>
              <Products />
            </ProtectedRoute>
          }
        />

        <Route
          path="/about"
          element={
            <ProtectedRoute>
              <About />
            </ProtectedRoute>
          }
        />

        <Route
          path="/cart"
          element={
            <ProtectedRoute>
              <Cart />
            </ProtectedRoute>
          }
        />
        <Route
  path="/checkout"
  element={
    <ProtectedRoute>
      <Checkout />
    </ProtectedRoute>
  }
/>


        <Route path="*" element={<Login />} />
      </Routes>

      {!hideLayout && <Footer />}
    </>
  );
}
