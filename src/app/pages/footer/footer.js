'use client';
import Image from "next/image";
import { IoLogoYoutube, IoLogoLinkedin } from "react-icons/io5";
import { FaTwitter, FaPhone } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

import { usePathname } from "next/navigation";

const Footer = () => {

const pathname = usePathname();

    const noHeaderRoutes = [
    '/chances/[id]',
    '/form/[id]',
  ];
  const startsWithList = [ '/chances/', '/form/'];
  const hideIfStartsWith = startsWithList.some((item) => pathname.startsWith(item));

  if (hideIfStartsWith|| noHeaderRoutes.includes(pathname)) return null;
  return (
    <footer className="w-full bg-white text-indigo-900" id="contact">
      {/* Newsletter */}
      <div className="w-full bg-[#262163] text-white py-12">
        <div className="max-w-7xl mx-auto px-4 flex flex-col xl:flex-row items-center gap-6 justify-between">
          <h2 className="text-2xl md:text-4xl font-extrabold text-center md:text-left">
            إشترك في النشرة البريدية
          </h2>

          <form
            className="w-full md:w-auto flex flex-col sm:flex-row gap-3 items-stretch"
            onSubmit={(e) => e.preventDefault()}
            aria-label="newsletter form"
          >
            <label htmlFor="email" className="sr-only">
              البريد الإلكتروني
            </label>

            <input
              id="email"
              type="email"
              placeholder="البريد الإلكتروني"
              className="w-full md:w-80 h-12 px-4 rounded-xl outline-none bg-white placeholder:text-gray-500 focus:ring-2 focus:ring-[#DFC96D]"
              required
            />

            <button
              type="submit"
              className="w-full sm:w-44 h-12 rounded-xl bg-[#DFC96D] text-[#262163] font-bold hover:bg-[#c9b25a] transition-colors duration-200"
            >
              اشتراك
            </button>
          </form>
        </div>
      </div>

      {/* Main footer content */}
      <div className="w-full bg-white text-indigo-900 py-8">
        <div className="max-w-8xl mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 items-center">
            {/* Logo */}
            <div className="flex justify-center items-center p-4 border-b-2 md:border-b-0 border-[#DFC96D]/30 h-full">
              <Image
                src="/logo2.jpeg"
                alt="Tadbeer logo"
                width={140}
                height={140}
                className="object-contain"
                priority
              />
            </div>

            {/* Social */}
            <div className="flex flex-col items-center justify-center p-5 border-b-2 md:border-b-0 md:border-r-2 border-[#DFC96D]/30">
              <h3 className="mb-3 font-bold text-lg">تابعنا</h3>
              <div className="flex gap-3">
                <a
                  href="https://www.youtube.com/channel/UCTcIQAUyUEipCP6TybIF0dg"
                  aria-label="YouTube"
                  className="p-3 rounded-lg bg-[#DFC96D] inline-flex items-center justify-center"
                >
                  <IoLogoYoutube size={22} className="text-white" />
                </a>
                <a
                  href="https://x.com/TadbeerSA"
                  aria-label="Twitter"
                  className="p-3 rounded-lg bg-[#DFC96D] inline-flex items-center justify-center"
                >
                  <FaTwitter size={22} className="text-white" />
                </a>
                <a
                  href="https://sa.linkedin.com/company/tadbeersa"
                  aria-label="LinkedIn"
                  className="p-3 rounded-lg bg-[#DFC96D] inline-flex items-center justify-center"
                >
                  <IoLogoLinkedin size={22} className="text-white" />
                </a>
              </div>
            </div>

            {/* Address */}
            <div className="p-4 border-b-2 md:border-b-0 md:border-x-2 border-[#DFC96D]/30 flex flex-col items-center">
              <h3 className="font-bold text-lg mb-2 text-[#262163]">العنوان</h3>
              <p className="text-lg font-semibold text-gray-600 leading-relaxed text-center">
                <a href="https://www.google.com/maps/place/21%C2%B033'26.3%22N+39%C2%B010'38.8%22E/@21.557312,39.177437,17z/data=!4m5!3m4!1s0x0:0x0!8m2!3d21.5573125!4d39.1774375?hl=ar-SA">
                6174 محمد بن عبدالعزيز، 3264 Al Amir، جدة 23441، المملكة العربية
                السعودية
                 </a>
              </p>
            </div>

            {/* Contacts */}
            <div className="p-4 flex flex-col items-center  gap-3">
              <h3 className="font-bold text-lg mb-2">تواصل معنا</h3>

              <a href="tel:+966 55 514 4382" className="flex items-center gap-3">
                <FaPhone size={20} className="text-[#DFC96D]" />
                <span className="text-gray-700">0555144382</span>
              </a>

              {/* <a href="tel:0554452877" className="flex items-center gap-3">
                <FaPhone size={20} className="text-[#DFC96D]" />
                <span className="text-gray-700">0554452877</span>
              </a>

              <a href="tel:05511800015" className="flex items-center gap-3">
                <FaPhone size={20} className="text-[#DFC96D]" />
                <span className="text-gray-700">05511800015</span>
              </a> */}

              <a href="mailto:info@tadbeer.sa" className="flex items-center gap-3">
                <MdEmail size={20} className="text-[#DFC96D]" />
                <span className="text-gray-700">info@tadbeer.sa</span>
              </a>
            </div>
          </div>

          {/* bottom note */}
          <div className="mt-6 border-t pt-4 flex flex-col md:flex-row items-center justify-between text-center gap-3">
            <p className="text-gray-600 text-sm">2025 © Tadbeer</p>
            <p className="text-gray-500 text-sm">جميع الحقوق محفوظة</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
