import React from "react";
import "./Productos.css";

export default function ProductCard({ producto }) {
  return (
    <div className="product-card producto">
      <div className="product-image-placeholder" />
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
      </div>
    </div>
  );
} 