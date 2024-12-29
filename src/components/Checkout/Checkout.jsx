import React from "react";
import { useNavigate } from "react-router-dom";
import "./Checkout.css";
import Header from "../Header/Header";

const Checkout = ({ cart, onClearCart }) => {
  const navigate = useNavigate();

  const shipping = 5.0;

  const handleConfirmPurchase = () => {
    if (cart.length === 0) {
      alert("El carrito está vacío. Agrega libros antes de proceder al pago.");
      return;
    }

    alert("Pedido realizado con éxito!!! 💰✅");
    onClearCart();
    navigate("/main");
  };

  return (
    <div className="checkout-view">
      <Header />
      <main
        id="main-content-checkout"
        className="d-flex flex-column align-items-center"
      >
        <h2 className="mb-4 display-4">Resumen del pedido</h2>
        {cart.length > 0 ? (
          <>
            <ul className="checkout-list list-group w-100">
              {cart.map((item, index) => (
                <li
                  key={index}
                  className="checkout-item list-group-item d-flex justify-content-between align-items-center"
                >
                  <div className="item-details">
                    <img
                      src={item.cover}
                      alt={item.title}
                      className="item-cover"
                    />
                    <div className="item-info">
                      <p>
                        <strong>{item.title}</strong>
                      </p>
                      <p>Autor: {item.author}</p>
                      <p>Cantidad: {item.quantity}</p>
                    </div>
                  </div>
                  <p className="item-total">
                    Total: {(item.price * item.quantity).toFixed(2)} €
                  </p>
                </li>
              ))}
            </ul>
            <div className="checkout-summary">
              <h4>
                Subtotal:{" "}
                {cart
                  .reduce(
                    (total, item) => total + item.price * item.quantity,
                    0
                  )
                  .toFixed(2)}{" "}
                €
              </h4>
              <h4>Gastos de envío: {shipping.toFixed(2)} €</h4>
              <h3 id="total-price">
                TOTAL A PAGAR:{" "}
                {(
                  cart.reduce(
                    (total, item) => total + item.price * item.quantity,
                    0
                  ) + shipping
                ).toFixed(2)}{" "}
                €
              </h3>
              <button
                className="btn btn-success"
                onClick={handleConfirmPurchase}
              >
                Confirmar compra
              </button>
            </div>
          </>
        ) : (
          <p>El carrito está vacío. No hay libros para procesar.</p>
        )}
      </main>
    </div>
  );
};

export default Checkout;
