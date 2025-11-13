// HeroWrapper.js (Server Component)
import Image from "next/image";
import Link from "next/link";
import bg from "../../../../public/hero.webp"; 
import dotsImage from "../../../../public/dots.webp";
// استيراد الأيقونات (تبقى هنا لأنها تستخدم في المكون الثابت Socials)
import { FaFacebook, FaYoutube, FaLinkedin, FaTelegram } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import { IoLogoInstagram } from "react-icons/io5";

import HeroInteractions from "./HeroInteractions"; 

const HeroWrapper = () => {

    // 1. الصورة الرئيسية الآن هي مكون جاهز في الخادم
    const HeroImageContent = (
        <Image 
            src={bg} 
            alt="Hero Image" 
            width={800} 
            height={800} 
            placeholder="blur" 
            className=" object-cover w-full h-96" 
            priority // مهم جداً للصور الرئيسية
        />
    );

    // الروابط الاجتماعية - ثابتة في الخادم
    const socialLinks = [
        { Icon: FaFacebook, href: "https://www.facebook.com/TadbeerSA/" },
        { Icon: BsTwitterX, href: "https://x.com/TadbeerSA?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor" },
        // ... بقية الروابط
        { Icon: FaYoutube, href: "https://www.youtube.com/channel/UCTcIQAUyUEipCP6TybIF0dg" },
        { Icon: IoLogoInstagram, href: "https://www.instagram.com/tadbeersa/" },
        { Icon: FaLinkedin, href: "https://sa.linkedin.com/company/tadbeersa" },
        { Icon: FaTelegram, href: "https://t.me/TadbeerSa" },
    ];
    
    const Socials = (
        <div className="flex gap-2 sm:gap-4 md:gap-6 cursor-pointer p-3">
            {socialLinks.map(({ Icon, href }, index) => (
                <a key={index} href={href} target="_blank" rel="noopener noreferrer">
                    <Icon size={20} className="text-white hover:text-[#DFC96D] transition-colors" />
                </a>
            ))}
        </div>
    );

    // الأزرار - ثابتة في الخادم
    const StaticButtons = (
        <div className="flex">
            <h1 className="text-md sm:text-md md:text-xl h-full bg-[#DFC96D] text-gray-900 p-2 md:p-4 px-2 sm:px-4 md:px-8 lg:px-15 cursor-pointer rounded-br-xl">
                <a href="#contact">تواصل معنا</a>
            </h1>
            <h1 className="text-md sm:text-md md:text-xl h-full bg-white text-gray-900 p-2 px-2 md:p-4 sm:px-4 md:px-8 lg:px-15 cursor-pointer">
                {/* هنا يفضل أن يكون Link بدون استخدام Context في الخادم */}
                <Link href="/services">جميع الخدمات</Link> 
            </h1>
        </div>
    );

    return (
      <div className="flex flex-col w-screen py-8 bg-[#262163] text-white">
        <div className="flex flex-col gap-4 text-center py-20 w-full">
            {/* النصوص - ثابتة (Server) */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold">شركة تدبير المتخصصة</h1>
            <p className="text-xl sm:text-2xl md:text-2xl lg:text-2xl xl:text-3xl text-gray-400 w-full px-4">شركة متخصصة تقدم خدمات مالية ومهنية واستشارات مهنية متقدمة لتطوير التجارة والأعمال</p>
            
            {/* ⭐️ مكون العميل ⭐️ */}
            <HeroInteractions 
                HeroImageContent={HeroImageContent} // تمرير مكون الصورة
                SocialsContent={Socials} 
                StaticButtons={StaticButtons} 
                dotsImage={dotsImage} 
            />

        </div>
      </div>
    );
}

export default HeroWrapper;