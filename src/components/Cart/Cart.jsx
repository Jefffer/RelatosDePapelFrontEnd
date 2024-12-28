import React from "react";
import "./Cart.css";

const Cart = ({ cart, onRemoveFromCart }) => {
  return (
    <aside className="cart-container">
      <h3>Carrito 🛒</h3>
      {cart.length > 0 ? (
        <ul>
          {cart.map((item) => (
            <li key={item.id} className="cart-item">
              <div id="item-details">
                <strong>{item.title}</strong>
                {item.price.toFixed(2)}€
                <div className="item-quantity">
                  <button className="quantity-btn">-</button>
                  <span id="quantity">{item.quantity}</span>
                  <button className="quantity-btn">+</button>
                </div>
              </div>
              <button
                id="remove-btn"
                className="btn btn-danger btn-sm"
                onClick={() => onRemoveFromCart(item.id)}
              >
                🗑️
              </button>
            </li>
          ))}
        </ul>
      ) : (
        <p>
          <i>El carrito está vacío</i>
        </p>
      )}
    </aside>
  );
};

export default Cart;
