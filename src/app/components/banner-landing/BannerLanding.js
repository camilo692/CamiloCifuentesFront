"use client";

import "./BannerLanding.css";
import { Montserrat, Rubik } from 'next/font/google';
import localFont from 'next/font/local';

const montserrat = Montserrat({
    subsets: ['latin'],
    weight: ['400', '700'],
});

const rubik = Rubik({
    subsets: ['latin'],
    weight: ['900'],
});

const permanentMarker = localFont({
    src: '../../fonts/PermanentMarker-Regular.ttf',
    variable: '--font-permanent-marker',
});

const BannerLanding = () => {
    return (
        <div className="banner-landing-container">
            <div className="banner-content">
                <div className="banner-text">
                    <h2 className={`impact-text ${permanentMarker.className}`}>Genera un impacto</h2>
                    <h1 className={`main-title ${rubik.className}`}>
                        CONVIERTE HISTORIAS
                        INVISIBLES EN{' '}
                        <span className="highlight">INSPIRACIÓN REAL</span>
                    </h1>
                    <p className={`description ${montserrat.className}`}>
                        Cada acción, compartir, apoyar, genera un impacto real en la vida de miles de personas.
                        Por que ellos son parte esencial de esta comunidad y los protagonistas de esta historia.
                    </p>
                    <button className={`store-button ${montserrat.className}`}>TIENDA</button>
                </div>
            </div>
            <div className="social-icons-banner">
                <a href="#" className="social-icon-banner">
                    <img src="/tiktok.svg" alt="TikTok" />
                </a>
                <a href="#" className="social-icon-banner">
                    <img src="/instagram.svg" alt="Instagram" />
                </a>
                <a href="#" className="social-icon-banner">
                    <img src="/facebook.svg" alt="Facebook" />
                </a>
                <a href="#" className="social-icon-banner">
                    <img src="/youtube.svg" alt="YouTube" />
                </a>
            </div>
            <img src="/fondo.png" alt="Banner landing" className="banner-background" />
        </div>
    );
};

export default BannerLanding;

