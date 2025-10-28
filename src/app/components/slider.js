
'use client';

import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';

// import required modules
import { EffectFade, Navigation} from 'swiper/modules';

export default function Slider({ src = [],typeSrc}) {
  return (
    <Swiper
      spaceBetween={30}
      effect={'fade'}
      navigation={true}
      pagination={false}
      modules={[EffectFade, Navigation]}
      className="mySwiper w-full h-full rounded-4xl"
    >
      {src.map((img, index) => (
        <SwiperSlide key={index}>
          {typeSrc[index] === 'video' ? (
            <video controls>
              <source src={img} type="video/mp4" />
            </video>
          ) : (
            <img
              src={img}
              className="w-full h-full object-center rounded-4xl"
              alt={`slide-${index}`}
            />
          )}
          <img
            src={img}
            className="w-full h-full object-center rounded-4xl"
            alt={`slide-${index}`}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
