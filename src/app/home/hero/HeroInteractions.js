// HeroInteractions.js (Client Component)
'use client';

import Image from "next/image";
import Link from "next/link";
import { Context } from "@/Context/context";
import { useContext, useRef, useEffect } from "react";
import VanillaTilt from "vanilla-tilt";

// استيراد الأيقونات (يتم استيرادها هنا حيث يتواجد 'use client')
import { FaFacebook } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import { FaYoutube } from "react-icons/fa";
import { IoLogoInstagram } from "react-icons/io5";
import { FaLinkedin } from "react-icons/fa";
import { FaTelegram } from "react-icons/fa";

const HeroInteractions = ({ bgImage }) => {

    // Hooks ومنطق التفاعل
    const tiltRef = useRef(null);
    const {setActive} = useContext(Context);

    useEffect(() => {
        // تم نقل منطق VanillaTilt إلى هنا
        if ( typeof window !== 'undefined' && window.innerWidth > 768 && tiltRef.current ) {
            VanillaTilt.init(tiltRef.current, { max: 5, speed: 200 });
        }
        // تنظيف التأثير عند إزالة المكون
        return () => {
             if (tiltRef.current && tiltRef.current.vanillaTilt) {
                tiltRef.current.vanillaTilt.destroy();
            }
        };
    }, []);

    return (
        <div ref={tiltRef} className="relative w-full" >
            {/* dots - ثابتة، ولكن نتركها هنا لتبقى تحت تأثير VanillaTilt */}
            <div className="absolute flex flex-col sm:flex-col md:flex-row justify-between items-end w-full">
                <Image src="/dots.webp" alt="logo" width={800} height={800} className="object-contain w-96 h-[600px]" />
                <Image src="/dots.webp" alt="logo" width={800} height={800} className="object-contain w-96 h-[600px] hidden md:block"/>
            </div>
            
            {/* hero */}
            <div  className="relative z-40 flex flex-col justify-center items-center mt-4 rounded-b-xl bg-gray-600 w-[95%] m-auto">
                {/* الصورة الرئيسية - تستخدم هنا لأنها جزء من التأثير التفاعلي */}
                <Image 
                    src={bgImage} 
                    alt="logo" 
                    width={800} 
                    height={800} 
                    placeholder="blur" 
                    className=" object-cover w-full h-96" 
                    priority 
                />
                
                {/* buttons - تفاعلية */}
                <div className="flex justify-between items-center w-full">
                    <div className="flex">
                        <h1 className="text-md sm:text-md md:text-xl h-full bg-[#DFC96D] text-gray-900 p-2 md:p-4 px-2 sm:px-4 md:px-8 lg:px-15 cursor-pointer rounded-br-xl">
                            <a href="#contact">تواصل معنا</a>
                        </h1>
                        <h1 className="text-md sm:text-md md:text-xl h-full bg-white text-gray-900 p-2 px-2 md:p-4 sm:px-4 md:px-8 lg:px-15 cursor-pointer">
                            <Link href="/services" onClick={()=>setActive('services')}>
                                جميع الخدمات
                            </Link>
                        </h1>
                    </div>
                    
                    {/* socials - تفاعلية */}
                    <div className="flex gap-2 sm:gap-4 md:gap-6 cursor-pointer p-3">
                        <a href="https://www.facebook.com/TadbeerSA/"><FaFacebook size={20} className="text-white" /></a>
                        <a href="https://x.com/TadbeerSA?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor"><BsTwitterX size={20} className="text-white" /></a>
                        <a href="https://www.youtube.com/channel/UCTcIQAUyUEipCP6TybIF0dg"><FaYoutube size={20} className="text-white" /></a>
                        <a href="https://www.instagram.com/tadbeersa/"><IoLogoInstagram size={20} className="text-white" /></a>
                        <a href="https://sa.linkedin.com/company/tadbeersa"><FaLinkedin size={20} className="text-white" /></a>
                        <a href="https://t.me/TadbeerSa"><FaTelegram size={20} className="text-white" /></a>
                    </div>
                    <div className="hidden lg:block"></div>
                </div>
            </div>
        </div>
    );
}

export default HeroInteractions;