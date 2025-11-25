// HeroWrapper.js (Server Component)


import Image from "next/image";
import Link from "next/link";
import bg from "../../../../public/hero.webp"; 
import dotsImage from "../../../../public/dots.webp";
import { FaFacebook, FaYoutube, FaLinkedin, FaTelegram } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import { IoLogoInstagram } from "react-icons/io5";
import HeroInteractions from "./HeroInteractions"; 

const HeroWrapper = () => {

    // 1. الصورة الرئيسية الآن هي مكون جاهز
    const HeroImageContent = (
        <Image 
            src={bg} 
            alt="Hero Image" 
            height={400}
            width={400}
            className=" object-center md:object-cover w-full h-96 rounded-t-xl" 
            priority 
        />

    );

    const socialLinks = [
        { Icon: FaFacebook, href: "https://www.facebook.com/TadbeerSA/" },
        { Icon: BsTwitterX, href: "https://x.com/TadbeerSA?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor" },
        { Icon: FaYoutube, href: "https://www.youtube.com/channel/UCTcIQAUyUEipCP6TybIF0dg"},
        { Icon: IoLogoInstagram, href: "https://www.instagram.com/tadbeersa/"},
        { Icon: FaLinkedin, href: "https://sa.linkedin.com/company/tadbeersa"},
        { Icon: FaTelegram, href: "https://t.me/TadbeerSa" },
    ];
    
    const Socials = (
        <div className="flex gap-2 sm:gap-4 md:gap-6 cursor-pointer p-3">
            {socialLinks.map(({ Icon, href }, index) => (
                <a key={index} href={href}  target="_blank" rel="noopener noreferrer" >
                    <Icon  className="text-white hover:text-[#DFC96D] transition-colors text-md sm:text-lg md:text-2xl xl:text-[1.6rem]" />
                </a>
            ))}
        </div>
    );

    // الأزرار - ثابتة في الخادم
    const StaticButtons = (
        <div className="flex">
            <h1 className="text-md sm:text-md md:text-xl font-bold h-full bg-[#DFC96D] text-gray-900 p-2 md:p-4 px-2 sm:px-4 md:px-8 lg:px-15 cursor-pointer rounded-br-xl">
                <a href="#contact">تواصل معنا</a>
            </h1>
            <h1 className="text-md sm:text-md md:text-xl font-bold h-full bg-white text-gray-900 p-2 px-2 md:p-4 sm:px-4 md:px-8 lg:px-15 cursor-pointer">
                {/* هنا يفضل أن يكون Link بدون استخدام Context في الخادم */}
                <Link href="/services">جميع الخدمات</Link> 
            </h1>
        </div>
    );

    return (
      <div className="flex flex-col w-screen py-8 bg-[#262163] text-white">
        <div className="flex flex-col gap-4 text-center py-16 w-full">
            {/* ⭐️ مكون العميل ⭐️ */}
            <HeroInteractions 
                HeroImageContent={HeroImageContent}
                SocialsContent={Socials} 
                StaticButtons={StaticButtons} 
                dotsImage={dotsImage} 
            />

        </div>
      </div>
    );
}

export default HeroWrapper;