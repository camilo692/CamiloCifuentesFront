/* eslint-disable @next/next/no-img-element */
"use client";

import "./HeaderLandingContainer.css";
import { useTheme } from "@/app/providers/ThemeContext";

const HeaderLandingContainer = () => {

  return (
    <header className="header-landing-container">
      <div className="logo-cc">
        <img src="/cc.png" alt="Cc" className="header-logo" />
      </div>
      
      <nav className="nav-buttons">
        <button className="nav-btn">Inicio</button> 
        <button className="nav-btn">Nosotros</button>
        <button className="nav-btn">Tienda</button>
      </nav>

      <div className="logo-carrito ">
        <img src="/carrito de compra.png" alt="Logo carrito" className="header-logo" />
      </div>
    </header>
  );
};

export default HeaderLandingContainer;
