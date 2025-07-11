"use client";
import "./CarritoLista.css";
import CarritoItem from "./CarritoItem";

const CarritoLista = ({ cart, updateQuantity, removeFromCart }) => (
  <div className="carrito-lista-contenedor">
    {cart.length === 0 ? (
      <div className="carrito-vacio">Tu carrito está vacío.</div>
    ) : (
      cart.map((item) => (
        <div key={item.id + (item.talla || "")} className="carrito-lista">
          <CarritoItem
            item={item}
            updateQuantity={updateQuantity}
            removeFromCart={removeFromCart}
          />
        </div>
      ))
    )}
  </div>
);

export default CarritoLista;
