"use client";

import HeaderLandingContainer from "../components/header-landing/HeaderLandingContainer";
import FooterLandingContainer from "../components/footer-landing/FooterLandingContainer";
import ScrollingText from "../components/scrolling-text/ScrollingText";
import ProductList from "../components/productos/ProductList";

export default function Tienda() {
  return (
    <div className="store-content-container">
      <HeaderLandingContainer />
      <ScrollingText />
      <div className="productos-grid">
        <ProductList />
      </div>
      <FooterLandingContainer />
    </div>
  );
} 