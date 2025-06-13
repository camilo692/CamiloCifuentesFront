"use client";

import HeaderLandingContainer from "../components/header-landing/HeaderLandingContainer";
import UnaHistoriaContainer from "./una-historia/UnaHistoriaContainer";
import TuEresContainer from "./una-historia/TuEresContainer";
import FooterLandingContainer from "../components/footer-landing/FooterLandingContainer";

export default function Nosotros() {
  return (
    <div className="landing-content-container">
      <HeaderLandingContainer />
      <UnaHistoriaContainer />
      <TuEresContainer />
      <FooterLandingContainer />
    </div>
  );
} 