"use client";
import CarritoItem from "./CarritoItem";

const CarritoLista = ({ cart, updateQuantity, removeFromCart }) => (
  <div className="carrito-lista">
    {cart.length === 0 ? (
      <div className="carrito-vacio">Tu carrito está vacío.</div>
    ) : (
      cart.map((item) => (
        <CarritoItem
          key={item.id + (item.talla || "")}
          item={item}
          updateQuantity={updateQuantity}
          removeFromCart={removeFromCart}
        />
      ))
    )}
  </div>
);

export default CarritoLista; 