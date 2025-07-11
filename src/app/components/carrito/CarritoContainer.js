"use client";
import "./CarritoContainer.css";
import HeaderLandingContainer from "../header-landing/HeaderLandingContainer";
import FooterLandingContainer from "../footer-landing/FooterLandingContainer";
import { useCart } from "../../providers/CartContext";
import CarritoLista from "./CarritoLista";
import CarritoResumen from "./CarritoResumen";

const CarritoContainer = () => {
  const { cart, updateQuantity, removeFromCart, subtotal } = useCart();
  return (
    <div className="carrito-page">
      <HeaderLandingContainer />
      <div className="carrito-page-container">
        <CarritoLista cart={cart} updateQuantity={updateQuantity} removeFromCart={removeFromCart} />
        <CarritoResumen subtotal={subtotal} cart={cart} />
      </div>
      <FooterLandingContainer />
    </div>
  );
};

export default CarritoContainer;
