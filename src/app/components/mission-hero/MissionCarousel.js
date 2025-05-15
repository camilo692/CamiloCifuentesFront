"use client";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, EffectFade, Navigation } from 'swiper/modules';
import Image from 'next/image';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import './MissionCarousel.css';

const images = [
  {
    src: '/carousel/image1.png',
    alt: 'Cuidese mucho por',
    caption: 'CUIDESE MUCHO POR',
    author: 'Camilo Cifuentes',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
  },
  {
    src: '/carousel/image2.png',
    alt: 'Ocurre?',
    caption: 'OCURRE?',
    author: '@ventadecuentos',
    text: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
  },
  {
    src: '/carousel/image3.png',
    alt: 'Sonrisas entre todos',
    caption: 'SONRISAS ENTRE TODOS',
    author: '@camilocifuentes',
    text: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.'
  }
];

const MissionCarousel = () => {
  return (
    <div className="mission-carousel-container">
      <Swiper
        modules={[Autoplay, Pagination, EffectFade, Navigation]}
        effect="fade"
        spaceBetween={0}
        slidesPerView={1}
        pagination={{ clickable: true }}
        navigation={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        loop={true}
        className="mission-swiper"
      >
        {images.map((image, index) => (
          <SwiperSlide key={index}>
            <div className="carousel-slide">
              <div className="image-container">
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  style={{ objectFit: 'cover' }}
                  priority={index === 0}
                />
                <div className="caption-overlay">
                  <h3 className="caption-text">{image.caption}</h3>
                  <p className="caption-author">{image.author}</p>
                  <p className="caption-description">{image.text}</p>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
        <div className="swiper-button-prev"></div>
        <div className="swiper-button-next"></div>
      </Swiper>
    </div>
  );
};

export default MissionCarousel;