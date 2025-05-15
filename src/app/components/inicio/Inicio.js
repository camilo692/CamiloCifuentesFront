"use client";
import BannerLanding from "../banner-landing/BannerLanding";
import FooterLandingContainer from "../footer-landing/FooterLandingContainer";
import HeaderLandingContainer from "../header-landing/HeaderLandingContainer";
import ScrollingText from "../scrolling-text/ScrollingText";
import MiNino from "../mi-nino/MiNino";
import MissionHero from "../mission-hero/MissionHero";
import "./Inicio.css";

const Inicio = () => {
  return (
    <div className="landing-content-container">
      <HeaderLandingContainer />
      <BannerLanding />
      <ScrollingText />
      <MiNino />
      <MissionHero />
      <FooterLandingContainer />
    </div>
  );
};

export default Inicio; 