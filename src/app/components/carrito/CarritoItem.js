"use client";
import "./CarritoItem.css";

const CarritoItem = ({ item, updateQuantity, removeFromCart }) => (
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
);

export default CarritoItem; 