import React from "react";
import "./Productos.css";

export default function ProductDetail({ producto, onClose }) {
  if (!producto) return null;

  // Simulación de imágenes adicionales
  const images = producto.imagenes || [producto.imagen, producto.imagen, producto.imagen];
  const tallas = producto.tallas || ["S", "M", "L", "XL", "XXL"];

  return (
    <div className="product-detail-block">
      <div className="product-detail-content">
        <div className="product-detail-gallery">
          <div className="product-detail-thumbnails">
            {images.map((img, idx) => (
              <div key={idx} className="thumbnail-placeholder">
                <img src={img} alt={`thumb-${idx}`} />
              </div>
            ))}
          </div>
          <div className="product-detail-main-image">
            <img src={images[0]} alt={producto.nombre} />
          </div>
        </div>
        <div className="product-detail-info">
          <h2 className="product-detail-title">{producto.nombre}</h2>
          <div className="product-detail-gender">{producto.genero || "unisex"}</div>
          <div className="product-detail-price">${producto.precio}</div>
          <div className="product-detail-shortdesc">{producto.descripcionCorta || "Buzo negro"}</div>
          <div className="product-detail-description">
            {producto.descripcion || (
              <>Este hoodie unisex, esta hecho en algodón, cuenta con una capucha, bolsillo tipo canguro, puños y cintura en rib, cordones ajustables, y estampado.<br />100% algodón perchado</>
            )}
          </div>
          <div className="product-detail-tallas">
            <div className="tabla-tallas">TABLA DE TALLAS</div>
            <div className="tallas-list">
              {tallas.map((t, idx) => (
                <button key={t} className="talla-btn">{t}</button>
              ))}
            </div>
          </div>
          <button className="agregar-carrito-btn">AGREGAR AL CARRITO</button>
          <div className="product-detail-envios">
            Envíos a toda Colombia<br />
            Métodos de pago: tarjeta de crédito, débito, PSE.
          </div>
        </div>
      </div>
    </div>
  );
} 