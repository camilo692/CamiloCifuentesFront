"use client";
import React, { useState } from "react";
import "./Productos.css";
import { useCart } from "../../providers/CartContext";

export default function ProductDetail({ producto, onClose }) {
  const { addToCart } = useCart();
  const [tallaSeleccionada, setTallaSeleccionada] = useState(producto?.tallas?.[0] || "");
  const [agregado, setAgregado] = useState(false);
  
  // Usar datos reales del backend
  const images = producto?.imagenes || [producto?.imagen];
  const tallas = producto?.tallas || [];

  if (!producto) return null;

  function handleAddToCart() {
    addToCart(producto, 1, tallaSeleccionada);
    setAgregado(true);
    setTimeout(() => setAgregado(false), 1200);
  }

  return (
    <div className="product-detail-block">
      <div className="product-detail-content">
        <div className="product-detail-gallery">
          <div className="product-detail-thumbnails">
            {images.map((img, idx) => (
              <div key={idx} className="thumbnail-placeholder">
                <img src={img} alt={`${producto.nombre} - imagen ${idx + 1}`} />
              </div>
            ))}
          </div>
          <div className="product-detail-main-image">
            <img src={images[0]} alt={producto.nombre} />
          </div>
        </div>
        <div className="product-detail-info">
          <h2 className="product-detail-title">{producto.nombre}</h2>
          <div className="product-detail-gender">{producto.genero}</div>
          <div className="product-detail-price">${producto.precio.toLocaleString()}</div>
          <div className="product-detail-shortdesc">{producto.descripcionCorta}</div>
          <div className="product-detail-description">
            {producto.descripcion}
          </div>
          {tallas.length > 0 && (
            <div className="product-detail-tallas">
              <div className="tabla-tallas">TABLA DE TALLAS</div>
              <div className="tallas-list">
                {tallas.map((t) => (
                  <button
                    key={t}
                    className={`talla-btn${t === tallaSeleccionada ? " selected" : ""}`}
                    onClick={() => setTallaSeleccionada(t)}
                  >
                    {t}
                  </button>
                ))}
              </div>
            </div>
          )}
          <button 
            className="agregar-carrito-btn" 
            onClick={handleAddToCart} 
            disabled={agregado || !tallaSeleccionada}
          >
            {agregado ? "¡Agregado!" : "AGREGAR AL CARRITO"}
          </button>
          <div className="product-detail-envios">
            Envíos a toda Colombia<br />
            Métodos de pago: tarjeta de crédito, débito, PSE.
          </div>
          <button className="product-detail-close-inline" onClick={onClose}>Cerrar</button>
        </div>
      </div>
    </div>
  );
} 