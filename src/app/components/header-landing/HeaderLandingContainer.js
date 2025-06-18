/* eslint-disable @next/next/no-img-element */
"use client";

import "./HeaderLandingContainer.css";
import Link from "next/link";
import { usePathname } from "next/navigation";

const HeaderLandingContainer = () => {
  // This would typically come from your cart context/state management
  const cartItemCount = 0;
  const pathname = usePathname();

  return (
    <header className="header-landing-container">
      <div className="logo-cc">
        <img src="/cc.png" alt="Cc" className="header-logo" />
      </div>
      
      <nav className="nav-buttons">
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

      <div className="logo-carrito">
        <img src="/carrito de compra.png" alt="Logo carrito" className="header-logo" />
        <span className="cart-counter">{cartItemCount}</span>
      </div>
    </header>
  );
};

export default HeaderLandingContainer;
