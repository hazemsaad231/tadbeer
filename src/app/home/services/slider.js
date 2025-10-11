



'use client';

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import {FreeMode} from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/free-mode';
import Image from 'next/image';
import Link from 'next/link';
import {data} from '../../services/Data';

export default function BigCenterCarousel() {

  return (
    <div className="w-full flex justify-center items-center py-10  overflow-hidden">
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
        // أقل من 480px -> موبايل صغير
        320: {
          slidesPerView: 1,
          spaceBetween: 3,
        },
        // موبايل عادي
        480: {
          slidesPerView: 2, // fractional علشان يبان جزء من اللي بعده (peek)
          spaceBetween: 5,
        },
        // تابليت عمودي / موبايل أكبر
        640: {
          slidesPerView: 2,
          spaceBetween: 5,
        },
        // تابليت أفقي / لابتوب صغير
        768: {
          slidesPerView: 2.5,
          spaceBetween: 6,
        },
        // لابتوب
        1024: {
          slidesPerView: 3,
          spaceBetween: 12,
        },
        // ديسكتوب عادي
        1280: {
          slidesPerView: 4,
          spaceBetween: 14,
        },
        // شاشة كبيرة جداً
        1600: {
          slidesPerView: 5,
          spaceBetween: 16,
        },
      }}
        >

{data.map((item, idx) => (
  <SwiperSlide key={`${item.id}-${idx}`}>
       
   <div className="relative w-80 h-full z-20 brightness-150 md:brightness-95 hover:brightness-125 transition-all duration-700 ease-in-out group rounded-xl overflow-hidden">

  <Image
    src={item.img}
    alt={item.title}
    fill
    className="rounded-xl object-cover"
    loading="lazy"
  />

  {/* طبقة تغميق */}
  <div className="absolute inset-0 bg-black/15 group-hover:bg-white/50 transition-all duration-500 z-[5]"></div>

  {/* النص الأول */}
  <div className="absolute left-4 right-4 bottom-4 z-10 text-center font-extrabold text-white py-2 cursor-pointer opacity-0
  md:opacity-100
  transition-all duration-500 transform group-hover:opacity-0 group-hover:translate-y-4">
    {item.title}
  </div>

  {/* النص التاني */}
  <div className="absolute inset-0 z-10 flex flex-col gap-6 items-center justify-end py-8 opacity-100 md:opacity-0
  transition-all duration-500 transform translate-y-4 group-hover:opacity-100 group-hover:translate-y-0">
    <h1 className='text-[#7d6b23] drop-shadow-xl tracking-wide text-xl font-extrabold'>{item.title}</h1>
    <button className="bg-[#262163] rounded-md w-fit p-2 px-4 font-bold"><Link href={`/services/${item.id}`}>تعرف اكثر </Link></button>

  </div>

</div>
  </SwiperSlide>
))}


        </Swiper>
      </div>
    </div>
  );
}
