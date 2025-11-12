

// HeroWrapper.js (Server Component)

import bg from "../../../../public/hero.webp";
// تحتاج إلى استيراد مكون العميل
import HeroInteractions from "./HeroInteractions"; 

const HeroWrapper = () => {
    return (
      <div  className="flex flex-col w-screen py-8 bg-[#262163] text-white">
          <div  className="flex flex-col gap-4 text-center py-20 w-full">
              {/* النصوص - ثابتة ولا تحتاج JavaScript */}
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold">شركة تدبير المتخصصة</h1>
              <p className="text-xl sm:text-2xl md:text-2xl lg:text-2xl xl:text-3xl text-gray-400 w-full px-4">شركة متخصصة تقدم خدمات مالية ومهنية واستشارات مهنية متقدمة لتطوير التجارة والأعمال</p>
              
              {/* ⭐️  الجزء التفاعلي */}
              <HeroInteractions bgImage={bg} />

          </div>
      </div>
    );
}

export default HeroWrapper;