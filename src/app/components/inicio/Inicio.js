"use client";
import BannerLanding from "../banner-landing/BannerLanding";
import FooterLandingContainer from "../footer-landing/FooterLandingContainer";
import HeaderLandingContainer from "../header-landing/HeaderLandingContainer";
import ScrollingText from "../scrolling-text/ScrollingText";
import MiNino from "../mi-nino/MiNino";
import MissionHero from "../mission-hero/MissionHero";
import PromoMarkerBanner from "../promoMarker/PromoMarkerBanner";
import "./Inicio.css";

const Inicio = () => {
  return (
    <div className="landing-content-container">
      <HeaderLandingContainer />
      <MiNino />
      <BannerLanding />
      <ScrollingText />
      <PromoMarkerBanner />
      <MissionHero />
      <FooterLandingContainer />
    </div>
  );
};

export default Inicio; 