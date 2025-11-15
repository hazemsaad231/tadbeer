
"use client";

import Link from "next/link";
import Logo from "./logo";

export default function Header() {
  return (
  
    <header className="w-full z-50">
      <div>
        {/* desktop navbar */}
        
        <div className="bg-[#262163] p-2 md:p-0.5 shadow-xl h-16 md:h-20">
          
          {/* نستخدم max-w-7xl mx-auto لتحديد عرض الـ Header ليتوسط الشاشة بشكل جيد. */}
          <nav className="relative max-w-7xl mx-auto flex justify-between items-center px-1 xl:px-6 h-full">
            
            {/* الشعار */}
            <div className="flex items-center">
              <Logo />
            </div>
          
            <ul>
              <li>
                <Link href="#footer"
                     className={`
                        bg-[#f0cc3b] text-white font-bold border border-white/50
                        px-2 md:px-4 lg:px-6 py-2.5 rounded-full 
                        text-sm md:text-md lg:text-lg
                        shadow-lg shadow-[#dbbb39]/60 
                        hover:shadow-xl hover:scale-[1.05] 
                        transition-all duration-300 transform
                    `}>
                      تواصل معنا
                    
                </Link>
              </li>
            </ul>

          </nav>
        </div>
      </div>
    </header>
  );
}