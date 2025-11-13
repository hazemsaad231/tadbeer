// HeroInteractions.js (Client Component)
'use client';

import Image from "next/image"; // نحتاج Image لاستخدامه مع الـ dots
import { Context } from "@/Context/context";
import { useContext, useRef, useEffect } from "react";
import VanillaTilt from "vanilla-tilt";

const HeroInteractions = ({ HeroImageContent, dotsImage, SocialsContent, StaticButtons }) => { 
    // تم استقبال HeroImageContent

    // Hooks ومنطق التفاعل (يبقى في العميل)
    const tiltRef = useRef(null);
    const {setActive} = useContext(Context); 
    
    // منطق الـ VanillaTilt (يبقى في العميل)
    useEffect(() => {
        if ( typeof window !== 'undefined' && window.innerWidth > 768 && tiltRef.current ) {
            VanillaTilt.init(tiltRef.current, { max: 5, speed: 200 });
        }
        return () => {
            if (tiltRef.current && tiltRef.current.vanillaTilt) {
                tiltRef.current.vanillaTilt.destroy();
            }
        };
    }, []);

    return (
        <div ref={tiltRef} className="relative w-full" >
            
            {/* dots - تستخدم Image لأنها ما زالت تحتاج إلى بيانات الصورة (dotsImage) */}
            <div className="absolute flex flex-col sm:flex-col md:flex-row justify-between items-end w-full">
                <Image src={dotsImage} alt="dots" width={800} height={800} className="object-contain w-96 h-[600px]" />
                <Image src={dotsImage} alt="dots" width={800} height={800} className="object-contain w-96 h-[600px] hidden md:block"/>
            </div>
            
            {/* hero */}
            <div className="relative z-40 flex flex-col justify-center items-center mt-4 rounded-b-xl bg-gray-600 w-[95%] m-auto">
                
                {/* ⭐️ الصورة الرئيسية - تم تمريرها كـ prop جاهز من الخادم ⭐️ */}
                {HeroImageContent}
                
                {/* buttons & socials - تم تمريرها كمحتوى ثابت */}
                <div className="flex justify-between items-center w-full">
                    
                    {/* الأزرار - تمرير المحتوى الثابت من الخادم */}
                    {StaticButtons}
                    
                    {/* الروابط الاجتماعية - تمرير المحتوى الثابت من الخادم */}
                    {SocialsContent}

                    <div className="hidden lg:block"></div>
                </div>
            </div>
        </div>
    );
}

export default HeroInteractions;