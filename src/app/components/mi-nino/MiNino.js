"use client";
import Image from 'next/image';
import './MiNino.css';
import { usePathname } from 'next/navigation';

const MiNino = () => {
  const pathname = usePathname();
  const showSocialIcons = pathname && pathname.includes('/nosotros');

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
      {showSocialIcons && (
        <div className="iconos-sociales1">
          <a href="#"><img src="/tiktok.png" alt="TikTok" /></a>
          <a href="#"><img src="/instagram.png" alt="Instagram" /></a>
          <a href="#"><img src="/facebook.png" alt="Facebook" /></a>
          <a href="#"><img src="/youtube.png" alt="YouTube" /></a>
        </div>
      )}
    </div>
  );
};

export default MiNino; 