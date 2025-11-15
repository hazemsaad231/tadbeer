

'use client';

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import {FreeMode} from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/free-mode';
import Image from 'next/image';
import Link from 'next/link';
import { useContext} from 'react';
import { Context } from '@/Context/context';
// ⭐️ 1. استيراد Framer Motion ⭐️
import { motion } from 'framer-motion';


// ⭐️ 2. تعريف Variants لتأثير AOS (الظهور من الأسفل) ⭐️
const fadeFromBottomVariants = {
  hidden: { opacity: 0, x: 50 }, 
  visible: { opacity: 1, x: 0 } 
};


export default function BigCenterCarousel({services}) {

  const {setActive} = useContext(Context);

  return (
    
    // ⭐️ 3. تطبيق motion.div على الحاوية الخارجية ⭐️
    <motion.div
        initial="hidden"
        whileInView="visible"
        variants={fadeFromBottomVariants}
        transition={{ duration: 1, ease: "easeOut" }}
        // تشغيل الحركة عند رؤية 20% من الكاروسيل (Carousel)
        viewport={{ once: true, amount: 0.2 }} 
        className="w-full flex justify-center items-center py-10 overflow-hidden"
    >
        
        {/*
          ملاحظة: لقد قمنا بنقل الكلاسات التي كانت على الـ div الخارجي 
          (w-full flex justify-center items-center py-10 overflow-hidden) 
          إلى الـ motion.div الجديد.
        */}

        <div className=" w-full max-w-8xl">
          <Swiper
            modules={[FreeMode]}
            slidesPerView={4}
            spaceBetween={4}
            loop
            allowTouchMove={true}
            freeMode={{
              enabled: true,
              momentum: false,
            }}
            breakpoints={{
              // ... (إعدادات Breakpoints تظل كما هي) ...
              320: { slidesPerView: 1, spaceBetween: 3 },
              480: { slidesPerView: 2, spaceBetween: 5 },
              640: { slidesPerView: 2, spaceBetween: 5 },
              768: { slidesPerView: 2.5, spaceBetween: 6 },
              1024: { slidesPerView: 3, spaceBetween: 12 },
              1280: { slidesPerView: 4, spaceBetween: 14 },
              1600: { slidesPerView: 5, spaceBetween: 16 },
            }}
            className='small-slider'
          >

            {services.map((item) => (
              <SwiperSlide key={`${item.id}`}>
                {/* ... (محتوى الشريحة يظل كما هو) ... */}
                <div className="relative w-72 h-full md:brightness-95 hover:brightness-125 transition-all duration-700 ease-in-out group rounded-xl overflow-hidden">
                  { item.image_url && (
                    <Image
                      src={item.image_url || ""}
                      alt={item.title}
                      fill
                      className="rounded-xl object-cover"
                      loading="lazy"
                    />
                  )}
                  
                  <div className="absolute inset-0 bg-black/15 group-hover:bg-white/50 transition-all duration-500 z-[5]"></div>

                  <div className="absolute left-4 right-4 bottom-4 z-10 text-center font-extrabold text-white py-2 cursor-pointer opacity-0
                    md:opacity-100
                    transition-all duration-500 transform group-hover:opacity-0 group-hover:translate-y-4">
                    {item.title}
                  </div>

                  <div className="absolute inset-0 z-10 flex flex-col gap-6 items-center justify-end py-8 opacity-95 md:opacity-0
                    transition-all duration-500 transform translate-y-4 group-hover:opacity-100 group-hover:translate-y-0">
                    <h1 className='text-white md:text-black drop-shadow-xl tracking-wide text-xl font-extrabold'>{item.title}</h1>
                    <button className="bg-[#262163] rounded-md w-fit p-2 px-4 font-bold"
                    onClick={() => setActive('services')}><Link href={`/services/${item.id}`}>تعرف اكثر </Link></button>
                  </div>
                </div>
              </SwiperSlide>
            ))}


          </Swiper>
        </div>
    </motion.div>
  );
}