'use client';

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import {FreeMode} from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/free-mode';
import Image from 'next/image';
import Link from 'next/link';
import { useContext, useState, useEffect} from 'react';
import { Context } from '@/Context/context';
import { Api } from '@/app/components/api/api';


export default function BigCenterCarousel() {


  const {setActive} = useContext(Context);

  const [data, setData] = useState([]);

 const getData = async () => {
    const res = await fetch(`${Api}/services?per_page=100`, { cache: 'no-store' });
    const data = await res.json();
    setData(data.data);

  };


useEffect(() => {
    getData();
  }, []);
console.log(data.map((it) => it.type === 'services'));

const currentData = data.filter((it) => it.type === 'services').slice(0, 5);

  // const currentData = data.slice(0, 5);

  return (
    
    <>
   
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
    
        320: {
          slidesPerView: 1,
          spaceBetween: 3,
        },
     
        480: {
          slidesPerView: 2, 
          spaceBetween: 5,
        },
       
        640: {
          slidesPerView: 2,
          spaceBetween: 5,
        },
        
        768: {
          slidesPerView: 2.5,
          spaceBetween: 6,
        },
      
        1024: {
          slidesPerView: 3,
          spaceBetween: 12,
        },
      
        1280: {
          slidesPerView: 4,
          spaceBetween: 14,
        },
        
        1600: {
          slidesPerView: 5,
          spaceBetween: 16,
        },
      }}
        >

{currentData.map((item, idx) => (
  <SwiperSlide key={`${item.id}-${idx}`}>
       
   <div className="relative w-80 h-full md:brightness-95 hover:brightness-125 transition-all duration-700 ease-in-out group rounded-xl overflow-hidden">
{ item.image_url && (
   <Image
    src={item.image_url}
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
    </div>
    </>
  );
}






