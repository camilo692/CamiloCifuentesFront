"use client";
import React from "react";
import { useCart } from "../providers/CartContext";
import "../components/productos/Productos.css";

export default function CarritoPage() {
  const { cart, updateQuantity, removeFromCart, subtotal } = useCart();

  return (
    <div className="carrito-page-container">
      <div className="carrito-lista">
        {cart.length === 0 ? (
          <div className="carrito-vacio">Tu carrito está vacío.</div>
        ) : (
          cart.map((item) => (
            <div className="carrito-item" key={item.id + (item.talla || "") }>
              <button className="carrito-remove" onClick={() => removeFromCart(item.id, item.talla)}>
                ×
              </button>
              <div className="carrito-img">
                {item.imagen ? <img src={item.imagen} alt={item.nombre} /> : <div className="no-image">Sin imagen</div>}
              </div>
              <div className="carrito-info">
                <div className="carrito-nombre">{item.nombre}</div>
                <div className="carrito-talla">Talla: {item.talla}</div>
              </div>
              <div className="carrito-precio">${item.precio.toLocaleString()}</div>
              <div className="carrito-cantidad">
                <button onClick={() => updateQuantity(item.id, Math.max(1, item.cantidad - 1), item.talla)}>-</button>
                <span>{item.cantidad}</span>
                <button onClick={() => updateQuantity(item.id, item.cantidad + 1, item.talla)}>+</button>
              </div>
            </div>
          ))
        )}
      </div>
      <div className="carrito-resumen">
        <div className="carrito-subtotal-row">
          <span className="carrito-subtotal-label">SUBTOTAL</span>
          <span className="carrito-subtotal-value">${subtotal.toLocaleString()}</span>
        </div>
        <div className="carrito-envio">costo de envío se calcula al momento de pagar</div>
        <button className="carrito-pagar-btn" disabled={cart.length === 0}>IR A PAGAR</button>
      </div>
    </div>
  );
} 