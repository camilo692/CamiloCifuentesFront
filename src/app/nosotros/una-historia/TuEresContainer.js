"use client";

import { Montserrat } from "next/font/google";
import "./TuEresContainer.css";

const montserrat = Montserrat({ subsets: ["latin"], weight: ["400"] });

const TuEresContainer = () => {
  return (
    <div className="Rectngulo-5"> {/* Contenedor principal */}

      <div className="tu-eres-content"> {/* Contenido centrado */}
        <div className="Porque-t-eres-el-protagonista">
          Porque <span className="text-style-1">tú</span> eres el protagonista.
        </div>

        <div className="Creo-firmemente-que-cada-persona-lleva-consigo-una-historia-nica-autntica-y-poderosa-Mi-razn-d">
          <p>
            Creo firmemente que cada persona lleva consigo una historia única,
            <span className="text-style-1"> auténtica y poderosa.</span>
            <div style={{ marginBottom: "2rem" }}></div>
            

          </p>
          <p>
            Mi razón de existir es darte voz, visibilidad y reconocimiento a ti y a todos aquellos que habitualmente no tienen una plataforma para ser escuchados. Aquí, tú y todas las personas que aparecen en cada historia son los verdaderos protagonistas, inspirando cambios positivos. Creo en la generosidad, no solo material, sino también en la alegría, el tiempo y el afecto que compartimos, demostrando que la verdadera riqueza está en nuestro espíritu solidario.
          </p>
          <div style={{ marginBottom: "2rem" }}></div>
          <p>
            Vivo la humildad como principio esencial, reconociendo que cada persona, independientemente de su situación, aporta un valor incalculable a nuestra comunidad. Mantengo la positividad en cada momento, convencido de que siempre hay algo bueno por descubrir y compartir. Y, sobre todo, defiendo la autenticidad: historias reales, sin filtros ni ediciones, mostrando lo que realmente somos.
          </p>
          <div style={{ marginBottom: "2rem" }}></div>
          <p>
            Mi propósito es inspirarte, motivarte y empoderarte. Busco generar un impacto directo, sincero y positivo, uniendo manos y corazones para transformar realidades. Tú, que compartes, que apoyas, que sonríes y extiendes tu mano a quienes lo necesitan, eres parte esencial de esta comunidad. Juntos somos creadores de esperanza, cuidadores del bienestar común y héroes cotidianos que demuestran que la grandeza vive en la sencillez del día a día.
          </p>
        </div>
      </div>
      <div className={`Bienvenido-a-esta-historia-tu-historia ${montserrat.className}`}>
        <span>
          BIENVENIDO A<br />
          ESTA HISTORIA,<br />
          <span className="text-style-1">TU HISTORIA.</span>
        </span>
      </div>

    </div>
  );
};

export default TuEresContainer;
