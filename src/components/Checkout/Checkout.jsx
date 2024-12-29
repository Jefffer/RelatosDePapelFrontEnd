import React from "react";
import { useNavigate } from "react-router-dom";
import "./Checkout.css";

const Checkout = ({ cart, onClearCart }) => {
  const navigate = useNavigate();

  const handleConfirmPurchase = () => {
    if (cart.length === 0) {
      alert("El carrito está vacío. Agrega libros antes de proceder al pago.");
      return;
    }

    // Simula el pago exitoso
    alert("¡Pedido realizado con éxito!");

    // Vaciar el carrito
    onClearCart();

    // Redirigir a la página principal
    navigate("/main");
  };

  return (
    <div className="checkout-view">
      <h2>Resumen del pedido</h2>
      {cart.length > 0 ? (
        <>
          <ul className="checkout-list">
            {cart.map((item, index) => (
              <li key={index} className="checkout-item">
                <div>
                  <p><strong>{item.title}</strong></p>
                  <p>Autor: {item.author}</p>
                  <p>Cantidad: {item.quantity}</p>
                </div>
                <p className="item-total">
                  Total: {item.price * item.quantity} €
                </p>
              </li>
            ))}
          </ul>
          <div className="checkout-summary">
            <h4>
              Total a pagar:{" "}
              {cart.reduce(
                (total, item) => total + item.price * item.quantity,
                0
              )}{" "}
              €
            </h4>
            <button className="btn btn-success" onClick={handleConfirmPurchase}>
              Confirmar compra
            </button>
          </div>
        </>
      ) : (
        <p>El carrito está vacío. No hay libros para procesar.</p>
      )}
    </div>
  );
};

export default Checkout;
