import { useState } from "react";

const useCart = () => {
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
    setCart((prevCart) => prevCart.filter((book) => book.id !== bookId));
  };

  const handleClearCart = () => setCart([]);

  return {
    cart,
    handleAddToCart,
    handleRemoveFromCart,
    handleClearCart,
  };
};

export default useCart;
