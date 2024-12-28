import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Landing from "./components/Landing/Landing";
import MainPage from "./components/MainPage/MainPage";
import BookView from "./components/BookDetails/BookDetails";

function App() {
  const [cart, setCart] = useState([]);

  const handleAddToCart = (book) => {
    setCart((prevCart) => {
      const existingBook = prevCart.find((item) => item.id === book.id);
      if (existingBook) {
        return prevCart.map((item) =>
          item.id === book.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      } else {
        return [...prevCart, { ...book, quantity: 1 }];
      }
    });
  };

  const handleRemoveFromCart = (bookId) => {
    setCart(cart.filter((book) => book.id !== bookId));
  };

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
      </Routes>
    </Router>
  );
}

export default App;
