"use client";

import "./UnaHistoriaContainer.css";
import { Rubik, Montserrat } from "next/font/google";
import localFont from "next/font/local";

const rubik = Rubik({ subsets: ["latin"], weight: ["900"] });
const montserrat = Montserrat({ subsets: ["latin"], weight: ["400"] });
const permanentMarker = localFont({ src: "../../fonts/PermanentMarker-Regular.ttf" });

const UnaHistoriaContainer = () => {
  return (
    <div className="cabecera">
      <div className="Ellipse-2"></div>

      <div className="contenido-historia">
        <div className="TENEMOS-UNA-MISIN-CAMBIAR-LA-VIDA-DE-MILES-DE-PERSONAS">
          <span className={permanentMarker.className}>
            TENEMOS UNA MISIÓN: CAMBIAR LA VIDA DE MILES DE PERSONAS
          </span>
        </div>

        <div className="Una-historia-que-t-haces-posible">
          <span className={rubik.className}>
            UNA HISTORIA <br />
            QUE{" "}
            <span className={`text-style-1 ${permanentMarker.className}`}>
              TÚ HACES POSIBLE
            </span>
          </span>
        </div>

        <div className="Aqu-el-protagonista-eres-t-y-nuestra-comunidad-unidos-para-hacer-la-diferencia-Toda-ayuda-puede">
          <span className={montserrat.className}>
            Aquí el protagonista eres tú y nuestra comunidad, unidos para hacer
            la diferencia. Toda ayuda puede impactar a muchas personas.
          </span>
        </div>

        <div className="Rectangle-2">
          <button className={montserrat.className}>TIENDA</button>
        </div>
      </div>

      <div className="iconos-sociales">
        <a href="#"><img src="/tiktok.png" alt="TikTok" /></a>
        <a href="#"><img src="/instagram.png" alt="Instagram" /></a>
        <a href="#"><img src="/facebook.png" alt="Facebook" /></a>
        <a href="#"><img src="/youtube.png" alt="YouTube" /></a>
      </div>
    </div>
  );
};

export default UnaHistoriaContainer;
