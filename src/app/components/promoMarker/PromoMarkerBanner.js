"use client";
import Image from "next/image";
import { Rubik, Montserrat } from "next/font/google";
import localFont from "next/font/local";
import "./PromoMarkerBanner.css";

const rubik = Rubik({
  subsets: ["latin"],
  weight: ["900"],
});

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400"],
});

const permanentMarker = localFont({
  src: "../../fonts/PermanentMarker-Regular.ttf",
  variable: "--font-permanent-marker",
});

const PromoMarkerBanner = () => {
  return (
    <div className="promo-marker-container">
      <div className="promo-marker-content">
        <Image
          src="/bannerMarker.png"
          alt="Banner Marker"
          fill
          className="promo-marker-background"
          priority
          sizes="(max-width: 768px) 100vw, 100vw"
          srcSet="/bannerMarker.png 1x, /bannerMarker2x.png 2x"
        />

        <div className={`MARCA-LA-DIFERENCIA ${permanentMarker.className}`}>
          <span className={`text-style-1 ${rubik.className}`}>MARCA LA </span>
          DIFERENCIA
        </div>

        <div
          className={`LLEVATE ${montserrat.className}`}
        >
          Y LLEVATE ALGO MAS QUE SOLO UNA PRENDA, <br />
          LLEVA CONTIGO CAMBIO E IMPACTO REAL
        </div>

        <button className="button-store">TIENDA</button>
      </div>
    </div>
  );
};

export default PromoMarkerBanner;
