"use client";
import React, { createContext, useContext, useState, useEffect } from "react";

const CartContext = createContext();

export function useCart() {
  return useContext(CartContext);
}

export function CartProvider({ children }) {
  const [cart, setCart] = useState([]);

  // Cargar carrito desde localStorage al iniciar
  useEffect(() => {
    const stored = localStorage.getItem("cart");
    if (stored) setCart(JSON.parse(stored));
  }, []);

  // Guardar carrito en localStorage al cambiar
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  // Añadir producto (si ya existe, sumar cantidad)
  function addToCart(producto, cantidad = 1, talla = null) {
    setCart((prev) => {
      const key = producto._id || producto.id;
      const existing = prev.find(
        (item) => item.id === key && item.talla === talla
      );
      if (existing) {
        return prev.map((item) =>
          item.id === key && item.talla === talla
            ? { ...item, cantidad: item.cantidad + cantidad }
            : item
        );
      } else {
        return [
          ...prev,
          {
            id: key,
            nombre: producto.nombre,
            precio: producto.precio,
            imagen: producto.imagen,
            talla,
            cantidad,
          },
        ];
      }
    });
  }

  function removeFromCart(id, talla = null) {
    setCart((prev) => prev.filter((item) => !(item.id === id && item.talla === talla)));
  }

  function updateQuantity(id, cantidad, talla = null) {
    setCart((prev) =>
      prev.map((item) =>
        item.id === id && item.talla === talla ? { ...item, cantidad } : item
      )
    );
  }

  function clearCart() {
    setCart([]);
  }

  const subtotal = cart.reduce((sum, item) => sum + item.precio * item.cantidad, 0);

  return (
    <CartContext.Provider
      value={{ cart, addToCart, removeFromCart, updateQuantity, clearCart, subtotal }}
    >
      {children}
    </CartContext.Provider>
  );
} 