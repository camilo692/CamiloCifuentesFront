"use client";

import HeaderLandingContainer from "../header-landing/HeaderLandingContainer";
import FooterLandingContainer from "../footer-landing/FooterLandingContainer";
import UnaHistoriaContainer from "./una-historia/UnaHistoriaContainer";
import TuEresContainer from "./una-historia/TuEresContainer";
import MiNino from "../mi-nino/MiNino";
    
const NosotrosContainer = () => {
    return (
        <div>
            <HeaderLandingContainer />
            <UnaHistoriaContainer />
            <TuEresContainer />
            <MiNino />
            <FooterLandingContainer />
        </div>
    );
};

export default NosotrosContainer;