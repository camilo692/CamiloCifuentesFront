"use client";

import HeaderLandingContainer from "../components/header-landing/HeaderLandingContainer";
import FooterLandingContainer from "../components/footer-landing/FooterLandingContainer";

export default function Tienda() {
  return (
    <div className="landing-content-container">
      <HeaderLandingContainer />
      <main className="tienda-content">
        <h1>Nuestra Tienda</h1>
        <div className="productos-grid">
          {/* Aquí puedes agregar tu grid de productos */}
          <p>Próximamente: Catálogo de productos</p>
        </div>
      </main>
      <FooterLandingContainer />
    </div>
  );
} 