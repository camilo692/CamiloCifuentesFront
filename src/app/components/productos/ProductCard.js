import React from "react";
import "./Productos.css";

export default function ProductCard({ producto, onClick }) {
  return (
    <div className="product-card producto" onClick={onClick} style={{ cursor: 'pointer' }}>
      <div className="product-image-placeholder">
        {producto.imagen ? (
          <img src={producto.imagen} alt={producto.nombre} />
        ) : (
          <div className="no-image">Sin imagen</div>
        )}
      </div>
      <div className="product-info">
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <span className="product-name">{producto.nombre}</span>
          {producto.etiqueta && (
            <span className="product-tag">{producto.etiqueta}</span>
          )}
        </div>
        <div className="product-meta">
          <span className="product-gender">{producto.genero}</span>
          <span className="product-price">${producto.precio}</span>
        </div>
        <div className="product-stock">
          <span className="stock-info">Stock: {producto.stock}</span>
        </div>
      </div>
    </div>
  );
} 