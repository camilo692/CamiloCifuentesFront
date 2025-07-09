"use client";
import HeaderLandingContainer from "../header-landing/HeaderLandingContainer";
import FooterLandingContainer from "../footer-landing/FooterLandingContainer";
import ScrollingText from "../scrolling-text/ScrollingText";
import ProductList from "../productos/ProductList";

const TiendaContainer = () => {
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
};  

export default TiendaContainer;
