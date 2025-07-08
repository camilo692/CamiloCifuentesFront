/* eslint-disable @next/next/no-img-element */
"use client";

import "./FooterLandingContainer.css";
import Link from 'next/link';


const FooterLandingContainer = () => {
 

  return (
    <footer className="footer-container">
      <div className="footer-content ">
        
        {/* Columna izquierda */}
        <div className="footer-section footer-section-left">
          <p className="footer-left-text">Política de Privacidad</p>
          <p className="footer-left-text">Términos y Condiciones</p>
          <p className="footer-left-text">Copyright All rights reserved 2025</p>
        </div>

        {/* Centro: logo + redes */}
        <div className="footer-center">
          <img
            src="/logocamilocifuentes2-04@2x.png" // Cambia esto por la ruta correcta del logo
            alt="Logo Camilo Cifuentes"
            className="footer-logo"
          />
          <div className="social-icons-footer">
            <a href="https://www.tiktok.com/@camilocifuentes">
              <img src="/Tiktok.png" alt="TikTok" />
            </a>
            <a href="https://www.instagram.com/camilocifuentes">
              <img src="/Instagram.png" alt="Instagram" />
            </a>
            <a href="https://www.facebook.com/camilocifuentes">
              <img src="/Facebook.png" alt="Facebook" />
            </a>
            <a href="https://www.youtube.com/@camilocifuentes">
              <img src="/Youtube.png" alt="YouTube" />
            </a>
          </div>
        </div>

        {/* Columna derecha */}
        <div className="footer-section footer-section-menu">
          <h4 className="footer-menu-title">Menú</h4>
          <Link href="/" className="footer-menu-item">inicio</Link>
          <Link href="/nosotros" className="footer-menu-item">nosotros</Link>
          <Link href="/tienda" className="footer-menu-item">tienda</Link>
          <Link href="/carrito" className="footer-menu-item">carrito</Link>
        </div>

      </div>
    </footer>
  );
};

export default FooterLandingContainer;
