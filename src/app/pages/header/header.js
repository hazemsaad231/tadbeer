
"use client";

import { useContext, useState} from "react";
import Image from "next/image";
import Link from "next/link";
import { HiViewList } from "react-icons/hi";
import { MdOutlineCancelPresentation } from "react-icons/md";
import Logo, { SmallLogo } from "./logo";
import { Context } from "@/Context/context";

export default function Header() {


  const [isNavbarVisible, setNavbarVisible] = useState(false);

  const toggleNavbar = () => setNavbarVisible((s) => !s);
  const {active, setActive} = useContext(Context);

  const liBase =
    "relative px-4 before:content-[''] before:absolute before:right-[-1px] before:top-1/4 before:h-1/2 before:w-px before:bg-gray-400 cursor-pointer";
  return (
    <header>
      <div>
  {/* desktop navbar */}
      <div className="hidden lg:block">
        <nav className="relative bg-[#262163] text-white flex justify-between items-center px-8 py-1">

          <div className="flex">
            <Logo />
          </div>

          <ul className="flex gap-2 m-auto text-lg font-medium">
<li onClick={() => setActive('home')}  className={` px-3 ${
                active === 'home'
                ? "text-white" 
                : "text-[#DFC96D] hover:text-white"
            }`}
>
    <Link href="/">
  الرئيسية
</Link>
</li>

        <li onClick={() => setActive('about')} className={`${liBase} ${
                active === 'about'
                ? "text-white" 
                : "text-[#DFC96D] hover:text-white"
            }`}
>
    <Link href="/#about">
  من نحن
</Link>
</li>

            <li onClick={() => setActive('services')} className={`${liBase} ${
                active === 'services'
                ? "text-white":
                "text-[#DFC96D] hover:text-white"
            }`}> 
            <Link href="/services">
                الخدمات
              </Link>
            </li>
            <li onClick={() => setActive('blog')} className={`${liBase} ${
                active === 'blog'
                ? "text-white":
                "text-[#DFC96D] hover:text-white"
            }`}>
                <Link href="/blog">
                مدونة تدبير
              </Link>
            </li>

               {/* <li onClick={() => setActive('chances')} className={`  
               relative px-4 before:content-['']  before:w-px before:bg-gray-400 cursor-pointer
                ${ 
                active === 'chances' ? "text-white":
                "text-[#DFC96D] hover:text-white"
            }`}>
                <Link href="/chances">
                الفرص الاستثمارية
              </Link>
            </li> */}
              {/* <li onClick={() => setActive('teamWork')} className={`${
                active === 'teamWork'
                ? "text-white":
                "text-[#DFC96D] hover:text-white"
            }`}>
              <Link href="/teamWork">
                فريق العمل 
              </Link>
            </li> */}
          </ul>
          <ul className="flex items-center gap-2">
            <li onClick={()=>setActive('contact')}> <Link href="/contact" className={`hover:text-indigo-900 hover:bg-white border border-white rounded-full px-4 py-3 text-xl`}>
            انضم إلينا
              </Link></li>
              <li onClick={()=>setActive('contact')}> <Link href="https://apps-ruddy-nu.vercel.app/" className={`bg-[#DFC96D] text-white hover:bg-transparent border hover:border-white rounded-full px-4 py-3 text-xl`}>
            استثمر معانا
              </Link></li>
          </ul>
        </nav>
      </div>




        {/* mobile bar */}
        <div className="lg:hidden">

          <div className="w-[100vw] bg-[#262163] flex justify-between items-center p-3">
            <div>
              {isNavbarVisible ? (
                <MdOutlineCancelPresentation
                  className="text-2xl mt-1 cursor-pointer text-[#DFC96D]"
                  onClick={toggleNavbar}
                />
              ) : (
                <HiViewList
                  className="text-2xl mt-1 cursor-pointer text-[#DFC96D]"
                  onClick={toggleNavbar}
                />
              )}
            </div>

            {/* logo */}
            <div className="relative">
              <Image
                src="/logo.webp"
                alt="logo"
                width={110}
                height={110}
                priority
              />
            </div>
          </div>


        </div>
      </div>

    

      {/* Mobile Navbar*/}
      {isNavbarVisible && (
        
        <div className="fixed inset-0 z-50">
          <div
            className="absolute inset-0"
            onClick={toggleNavbar}
          />

          <div className="absolute right-0 top-0 z-50 w-full bg-[#262163] shadow-2xl overflow-y-auto transform transition-transform">
            <div className="flex items-center justify-between p-4">
              <div className="flex items-center gap-3">
               <SmallLogo/>
              </div>

              <button
                onClick={toggleNavbar}
                aria-label="close menu"
                className="p-2 rounded-md text-[#DFC96D] hover:bg-gray-100"
              >
                <MdOutlineCancelPresentation className="text-2xl" />
              </button>
            </div>

            <nav className="px-4 z-20">
              <ul className="flex flex-col">
                <li className="text-center text-[#DFC96D] font-semibold mb-4 text-lg" onClick={toggleNavbar}>
                <Link href="/">الرئيسية</Link></li>

                <li className="border-t border-gray-500 py-4">
                  <Link href="/#about" onClick={toggleNavbar} className="block text-center text-white">
                    من نحن
                  </Link>
                </li>

                <li className="border-t border-gray-500 py-4">
                  <Link href="/services" onClick={toggleNavbar} className="block text-center text-white">
                    خدماتنا
                  </Link>
                </li>

                <li className="border-t border-gray-500 py-4">
                  <Link href="/blog" onClick={toggleNavbar} className="block text-center text-white">
                    مدونة تدبير
                  </Link>
                </li>

                <li className="border-t border-gray-500 py-4">
                  <Link href="/chances" onClick={toggleNavbar} className="block text-center text-white">
                    الفرص الاستثمارية
                  </Link>
                </li>

                {/* <li className="border-t border-gray-500 py-4">
                  <Link href="/teamWork" onClick={toggleNavbar} className="block text-center text-white">
                    فريق العمل
                  </Link>
                </li> */}

                 <li className="border-t border-gray-500 py-4">
                  <Link href="/contact" onClick={toggleNavbar} className="block text-center text-white">
                    انضم إلينا
                  </Link>
                </li>
                
              <li className="border-t border-gray-500 py-4">
                  <Link href="https://apps-ruddy-nu.vercel.app/" onClick={toggleNavbar} className="block text-center text-white">
                    استثمر معانا
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
         
      )}
    </header>
  );
}


