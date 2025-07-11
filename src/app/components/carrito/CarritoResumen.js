"use client";
import "./CarritoResumen.css";

const CarritoResumen = ({ subtotal, cart }) => (
  <div className="carrito-resumen">
    <div className="carrito-subtotal-row">
      <span className="carrito-subtotal-label">SUBTOTAL</span>
      <span className="carrito-subtotal-value">${subtotal.toLocaleString()}</span>
    </div>
    <div className="carrito-envio">costo de envío se calcula al momento de pagar</div>
    <button className="carrito-pagar-btn" disabled={cart.length === 0}>
      IR A PAGAR
    </button>
  </div>
);

export default CarritoResumen; 