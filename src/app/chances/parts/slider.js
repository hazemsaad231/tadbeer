
'use client';

import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';

// import required modules
import { EffectFade, Navigation} from 'swiper/modules';
import Image from 'next/image';

export default function Slider({ src = [] }) {
  return (
    <Swiper
      spaceBetween={30}
      effect={'fade'}
      navigation={true}
      pagination={false}
      modules={[EffectFade, Navigation]}
      className="big-slider w-full h-full rounded-3xl"
    >
      {src.map((img, index) => (
        <SwiperSlide key={index}>
         
          <Image
            src={img||''}
            className="w-full h-full object-center rounded-3xl"
            alt={`slide-${index}`}
           fill
           priority
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
