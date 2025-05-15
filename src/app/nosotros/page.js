"use client";

import HeaderLandingContainer from "../components/header-landing/HeaderLandingContainer";
import FooterLandingContainer from "../components/footer-landing/FooterLandingContainer";

export default function Nosotros() {
  return (
    <div className="landing-content-container">
      <HeaderLandingContainer />
      <main className="nosotros-content">
        <h1>Sobre Nosotros</h1>
        <div className="nosotros-info">
          <p>
            Somos una empresa comprometida con la excelencia y la calidad en todos
            nuestros productos y servicios. Nuestra misión es proporcionar las
            mejores soluciones a nuestros clientes.
          </p>
          {/* Aquí puedes agregar más contenido sobre tu empresa */}
        </div>
      </main>
      <FooterLandingContainer />
    </div>
  );
} 