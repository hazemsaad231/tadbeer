'use client';

import Image from "next/image";
import { FaFacebook } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import { FaYoutube } from "react-icons/fa";
import { IoLogoInstagram } from "react-icons/io5";
import { FaLinkedin } from "react-icons/fa";
import { FaTelegram } from "react-icons/fa";
import { useRef, useEffect } from "react";
import VanillaTilt from "vanilla-tilt";


const Hero = () => {




const tiltRef = useRef(null);

  useEffect(() => {
    if (tiltRef.current) {
      VanillaTilt.init(tiltRef.current, { max: 5, speed: 200 });
    }
  }, []);





    return (
        <div  className="flex flex-col w-screen py-8  bg-[#262163] text-white">
            <div  className="flex flex-col gap-4 text-center py-20 w-full">
                <h1 className="text-7xl font-extrabold">شركة تدبير المتخصصة</h1>
                <p className="text-3xl text-gray-400">شركة متخصصة تقدم خدمات مالية ومهنية واستشارات مهنية متقدمة لتطوير التجارة والأعمال</p>
<div ref={tiltRef} className="relative w-full" >
    {/* dots */}
    <div className="absolute flex justify-between items-end w-full">
    <Image src="/dots.webp" alt="logo" width={800} height={800} className="object-contain w-96 h-[600px]" priority />
    <Image src="/dots.webp" alt="logo" width={800} height={800} className="object-contain w-96 h-[600px]" priority />
</div>
{/* hero */}
            <div  className="relative z-40 flex flex-col justify-center items-center mt-4 rounded-b-xl bg-gray-600 w-[90%] m-auto">
                    <Image src="/hero.webp" alt="logo" width={400} height={400} className="object-cover w-full h-96" priority />
{/* buttons */}
                    <div className="flex justify-between items-center w-full">
                        {/* services */}
                    <div className="flex">
<h1 className="text-xl font-bold h-full bg-[#DFC96D] text-gray-900 p-5 px-15 cursor-pointer rounded-br-xl">تواصل معنا</h1>
<h1 className="text-xl font-bold h-full bg-white text-gray-900 p-5 px-15 cursor-pointer">
    جميع الخدمات</h1>
                    </div>
                    {/* socials */}
                    <div className="flex gap-8 p-4">
<FaFacebook size={28} className="text-white" />
<BsTwitterX size={28} className="text-white" />
<FaYoutube size={28} className="text-white" />
<IoLogoInstagram size={28} className="text-white" />
<FaLinkedin size={28} className="text-white" />
<FaTelegram size={28} className="text-white" />
                    </div>

                    <div></div>
                    </div>
   
                </div>
</div>

            </div>
        </div>
    );
}

export default Hero
