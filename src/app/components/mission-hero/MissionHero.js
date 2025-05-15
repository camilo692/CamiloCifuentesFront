"use client";
import React from 'react';
import './MissionHero.css';
import MissionCarousel from './MissionCarousel';

const MissionHero = () => {
  return (
    <div className="mission-hero-container">
      <div className="mission-content">
        <div className="mission">
          <h1 className="mission-title">
            TENEMOS UNA <span className="highlight">MISIÓN</span>
          </h1>
          <h2 className="mission-subtitle">
            CAMBIAR LA VIDA DE <span className="highlight">MILES</span> DE PERSONAS
          </h2>
          <p className="mission-description">
            Conoce más sobre cual es nuestro propósito y cómo tu también puedes ser parte de ayudar a miles de personas y generar un cambio.
          </p>
          <button className="nosotros-btn">NOSOTROS</button>
        </div>
      </div>
      
      <div className="mission-carousel">
        <MissionCarousel />
      </div>
    </div>
  );
};

export default MissionHero; 