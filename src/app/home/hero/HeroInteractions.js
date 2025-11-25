


// HeroInteractions.js (Client Component)
'use client';

import Image from "next/image";
import { useRef, useEffect } from "react";
import VanillaTilt from "vanilla-tilt";
// ⭐️ استيراد Framer Motion ⭐️
import { motion } from "framer-motion"; 

const HeroInteractions = ({ HeroImageContent, dotsImage, SocialsContent, StaticButtons }) => { 

    const tiltRef = useRef(null);
    
    // منطق الـ VanillaTilt (يظل كما هو)
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

    // ⭐️ تعريف حركة Framer Motion (Fade/Zoom In) ⭐️
    const aosFadeZoomVariants = {
      hidden: { opacity: 0, scale: 0.95 }, // مخفي وتصغير بنسبة 95%
      visible: { opacity: 1, scale: 1 }, // ظاهر وبحجمه الطبيعي
    };

    return (
        // ⭐️ تغليف المكون بـ motion.div وتطبيق AOS عليه ⭐️
        <motion.div
            initial="hidden"
            whileInView="visible"
            variants={aosFadeZoomVariants}
            transition={{ duration: 1.0, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.2 }} // يبدأ عند رؤية 20% من المكون
        >
            <div>
                <div className="flex flex-col gap-y-4 justify-center items-center mb-8">
                    <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-[5.25rem] font-[950] w-full">شركة تدبير المتخصصة</h1>
 <p className="text-xl sm:text-2xl md:text-2xl lg:text-2xl xl:text-[2.2rem] text-gray-300 w-full pt-6 px-3">شركة متخصصة تقدم خدمات مالية ومهنية واستشارات مهنية متقدمة لتطوير التجارة والأعمال</p>
                </div>
 
            {/* ⭐️ هذا هو المكون الذي يحمل تأثير VanillaTilt ⭐️ */}
            <div ref={tiltRef} className="relative w-full" >
                
                {/* dots - تستخدم Image لأنها ما زالت تحتاج إلى بيانات الصورة (dotsImage) */}
                <div className="absolute flex flex-col sm:flex-col md:flex-row justify-between items-end w-full">
                    <Image src={dotsImage} alt="dots" width={600} height={800} className="object-contain w-[28rem] md:w-[24rem] lg:w-[28rem] h-[600px]" />
                    <Image src={dotsImage} alt="dots" width={600} height={800} className="object-contain w-[28rem] md:w-[24rem] lg:w-[28rem] h-[600px] hidden md:block"/>
                </div>
                
                {/* hero */}
                <div className="relative z-40 flex flex-col justify-center items-center mt-4 rounded-xl bg-gray-600 w-[94%] m-auto">
                    
                    {/* الصورة الرئيسية */}
                    {HeroImageContent}
                    
                    {/* buttons & socials */}
                    <div className="flex justify-between items-center w-full">
                        {StaticButtons}
                        {SocialsContent}
                        <div className="hidden lg:block"></div>
                    </div>
                </div>
                            </div>

            </div>
        </motion.div>
    );
}

export default HeroInteractions;