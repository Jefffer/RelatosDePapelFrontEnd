import React from "react";
import "./Cart.css";
import { Link } from "react-router-dom";

const Cart = ({ cart, onRemoveFromCart }) => {
  //   const totalPrice = cart.reduce((total, item) => total + item.price, 0);
  const totalPrice = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <aside className="cart-container">
      <h3>Carrito 🛒</h3>
      {cart.length > 0 ? (
        <>
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
          <div className="cart-total d-flex justify-content-between align-items-center mt-3">
            <span>Subtotal: </span>
            <span className="total-price">{totalPrice.toFixed(2)}€</span>
            <br />
            <br />
            <Link to="/checkout" className="btn btn-primary">
              Ir al checkout 👉
            </Link>
          </div>
        </>
      ) : (
        <p>
          <i>El carrito está vacío</i>
        </p>
      )}
    </aside>
  );
};

export default Cart;
