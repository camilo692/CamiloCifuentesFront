"use client";
import Image from 'next/image';
import './MiNino.css';

const MiNino = () => {
  return (
    <div className="mi-nino-container">
      <div className="mi-nino-content">
        <Image
          src="/bannerMiNino.png"
          alt="Yo Afán No Tengo"
          fill
          className="mi-nino-background"
          priority
        />
      </div>
    </div>
  );
};

export default MiNino; 