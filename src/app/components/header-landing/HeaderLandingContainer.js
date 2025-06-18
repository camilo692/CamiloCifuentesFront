/* eslint-disable @next/next/no-img-element */
"use client";

import "./HeaderLandingContainer.css";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const HeaderLandingContainer = () => {
  const cartItemCount = 0;
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="header-landing-container">
      <div className="logo-cc">
        <img src="/cc.png" alt="Cc" className="header-logo" />
      </div>

      {/* Botón hamburguesa para móviles */}
      <button className="hamburger-btn" onClick={toggleMobileMenu}>
        ☰
      </button>

      {/* Navegación visible solo en desktop */}
      <nav className="nav-buttons desktop-only">
        <Link href="/">
          <button className={`nav-btn ${pathname === "/" ? "active" : ""}`}>
            Inicio
          </button>
        </Link>
        <Link href="/nosotros">
          <button className={`nav-btn ${pathname === "/nosotros" ? "active" : ""}`}>
            Nosotros
          </button>
        </Link>
        <Link href="/tienda">
          <button className={`nav-btn ${pathname === "/tienda" ? "active" : ""}`}>
            Tienda
          </button>
        </Link>
      </nav>

      {/* Menú desplegable visible solo en móviles si está abierto */}
      {menuOpen && (
        <div className="mobile-menu">
          <Link href="/" onClick={() => setMenuOpen(false)}>
            <p className="mobile-menu-item">Inicio</p>
          </Link>
          <Link href="/nosotros" onClick={() => setMenuOpen(false)}>
            <p className="mobile-menu-item">Nosotros</p>
          </Link>
          <Link href="/tienda" onClick={() => setMenuOpen(false)}>
            <p className="mobile-menu-item">Tienda</p>
          </Link>
        </div>
      )}

      <div className="logo-carrito">
        <img src="/carrito de compra.png" alt="Logo carrito" className="header-logo" />
        <span className="cart-counter">{cartItemCount}</span>
      </div>
    </header>
  );
};

export default HeaderLandingContainer;
