"use client";

import HeaderLandingContainer from "../components/header-landing/HeaderLandingContainer";
import FooterLandingContainer from "../components/footer-landing/FooterLandingContainer";
import ScrollingText from "../components/scrolling-text/ScrollingText";
import ProductList from "../components/productos/ProductList";
import Link from "next/link";

export default function Tienda() {
  return (
    <div className="store-content-container">
      <HeaderLandingContainer />
      <ScrollingText />
      <div style={{ textAlign: 'right', marginBottom: '1.5rem' }}>
        <Link href="/tienda/carrito">
          <button className="carrito-ir-btn">Ver Carrito</button>
        </Link>
      </div>
      <div className="productos-grid">
        <ProductList />
      </div>
      <FooterLandingContainer />
    </div>
  );
} 