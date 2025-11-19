
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

// تم تحديث نوع typeSrc ليكون مصفوفة من السلاسل
export default function Slider({ src = [], typeSrc = []}) {

  console.log(typeSrc);

  // يجب أن يكون طول مصفوفة src مساوياً لطول مصفوفة typeSrc
  if (src.length !== typeSrc.length) {
    console.error("Slider Error: src and typeSrc arrays must have the same length.");
    return null; // أو عرض رسالة خطأ مناسبة
  }

  return (
    <Swiper
      spaceBetween={30}
      effect={'fade'}
      navigation={true}
      pagination={false}
      modules={[EffectFade, Navigation]}
      className="big-slider w-full rounded-3xl"
    >
      {src.map((mediaUrl, index) => {
        // 👈 فحص نوع العنصر الحالي (صورة أو فيديو) لكل شريحة
        const currentType = typeSrc[index];
        const isVideo = currentType === 'video';
        
        return (
          <SwiperSlide key={index}>
            {isVideo ? (
              // 📹 إذا كان فيديو
              <video
                className="w-full h-full object-cover rounded-3xl"
                controls
                autoPlay
                muted
                loop
              >
                <source src={mediaUrl || ''} type="video/mp4" />
              </video>
            ) : (
              // 🖼️ إذا كانت صورة
              <Image
                src={mediaUrl || ''}
                className="w-full h-full object-cover rounded-3xl"
                alt={`slide-${index}`}
                width={1000}
                height={1000}
                priority
              />
            )}
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
}