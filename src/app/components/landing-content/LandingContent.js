"use client";
import BannerLanding from "../banner-landing/BannerLanding";
import FooterLandingContainer from "../footer-landing/FooterLandingContainer";
import HeaderLandingContainer from "../header-landing/HeaderLandingContainer";
import "./LandingContent.css";

const LandingContent = () => {
    return (
        <div className="landing-content-container">
            <HeaderLandingContainer />
            <BannerLanding />
            {/* <FooterLandingContainer /> */}
        </div>
    );
};

export default LandingContent;