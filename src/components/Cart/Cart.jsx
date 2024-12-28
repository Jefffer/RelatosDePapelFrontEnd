import React from "react";
import "./Cart.css";

const Cart = ({ cart, handleRemoveFromCart }) => {
  return (
    <aside className="cart-container">
      <h3>Carrito 🛒</h3>
      {cart.length > 0 ? (
        <ul>
          {cart.map((item) => (
            <ul
              key={item.id}
              className="d-flex justify-content-between align-items-center"
            >
              <span>{item.title}</span>
              <button
                id="remove-btn"
                className="btn btn-danger btn-sm"
                onClick={() => handleRemoveFromCart(item.id)}
              >
                🗑️
              </button>
            </ul>
          ))}
        </ul>
      ) : (
        <p><i>El carrito está vacío</i></p>
      )}
    </aside>
  );
};

export default Cart;
