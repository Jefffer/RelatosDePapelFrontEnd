import "./App.css";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Landing from "./components/Landing/Landing";
import MainPage from "./components/MainPage/MainPage";
import BookView from "./components/BookDetails/BookDetails";
import Checkout from "./components/Checkout/Checkout";
import useCart from "./hooks/useCart";

function App() {
  const { cart, handleAddToCart, handleRemoveFromCart, handleClearCart } =
    useCart();

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route
          path="/main"
          element={
            <MainPage
              cart={cart}
              onAddToCart={handleAddToCart}
              onRemoveFromCart={handleRemoveFromCart}
            />
          }
        />
        <Route
          path="/book/:id"
          element={
            <BookView
              cart={cart}
              onAddToCart={handleAddToCart}
              onRemoveFromCart={handleRemoveFromCart}
            />
          }
        />
        <Route
          path="/checkout"
          element={<Checkout cart={cart} onClearCart={handleClearCart} />}
        />
      </Routes>
    </Router>
  );
}

export default App;
