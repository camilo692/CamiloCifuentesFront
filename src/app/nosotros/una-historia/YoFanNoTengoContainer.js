"use client";

import Image from "next/image";
import "./YoAfanNoTengo.css";

const YoFanNoTengoContainer = () => {
  return (
    <div className="banner-container">
      <Image
        src="/banner 3 pagina@2x.png"
        alt="Banner de Yo Fan No Tengo"
        fill
        priority
        className="banner-image"
      />

      <div className="iconos-sociales1">
        <a href="#"><img src="/tiktok.png" alt="TikTok" /></a>
        <a href="#"><img src="/instagram.png" alt="Instagram" /></a>
        <a href="#"><img src="/facebook.png" alt="Facebook" /></a>
        <a href="#"><img src="/youtube.png" alt="YouTube" /></a>
      </div>
    </div>
  );
};

export default YoFanNoTengoContainer;
