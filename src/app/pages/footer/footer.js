import Image from "next/image";
import { IoLogoYoutube } from "react-icons/io";
import { IoLogoLinkedin } from "react-icons/io";
import { FaTwitter } from "react-icons/fa";
import { FaPhone } from "react-icons/fa";
import { MdEmail } from "react-icons/md";



const Footer = () => {
    return (
        <footer className="flex flex-col justify-center items-center bg-white">

            <div className="flex flex-col gap-6 w-full py-20 bg-[#262163] text-white justify-center items-center">
<h1 className="text-4xl font-extrabold">إشترك في النشرة البريدية</h1>

<div className="flex gap-4 justify-center items-center h-full">

    <div className="flex flex-col text-gray-400">
        <label htmlFor="email">البريد الألكتروني</label>
        <input type="email" placeholder="البريد الألكتروني" className="bg-white rounded-xl w-80 h-12 outline-none" />
    </div>

    <div>
         <button className="cursor-pointer relative top-3 bg-[#DFC96D] rounded-xl text-indigo-900 w-80 h-12 font-bold hover:bg-transparent hover:text-white transation-all duration-500 ease-in-out">اشتراك</button>
    </div>
   
</div>
            </div>

            <div className="flex flex-col gap-2 w-full bg-white text-indigo-900 h-full justify-center items-center">

                <div className="grid grid-cols-4 w-full h-full place-content-center place-items-center pb-4">
                    <div className="border-l border-[#DFC96D] flex justify-center items-center w-full h-full p-6">
                        <Image src="/logo2.jpeg" alt="logo" width={150} height={150} className="object-contain" priority />
                    </div>
 <div className="border-l border-[#DFC96D] flex justify-center items-center gap-3 w-full h-full p-6">
    <div className="p-3 rounded-lg bg-[#DFC96D] cursor-pointer">
<IoLogoYoutube size={28} className="text-white" />
    </div>
       <div className="p-3 rounded-lg bg-[#DFC96D] cursor-pointer">
<FaTwitter size={28} className="text-white" />
    </div>
          <div className="p-3 rounded-lg bg-[#DFC96D] cursor-pointer">
<IoLogoLinkedin size={28} className="text-white" />
    </div>                     
                  
                    </div>
                    <div className="border-l border-[#DFC96D] m-auto flex justify-center items-center w-full h-full p-6">
                        <h1 className="text-center text-2xl font-bold text-[#262163] cursor-pointer">
                            العنوان
6174 محمد بن عبدالعزيز، 3264 Al Amir، جدة 23441، المملكة العربية السعودية
                        </h1>
                    </div>
                        <div className="flex gap-2 flex-col w-full h-full p-5">
                       <div className="flex gap-4 h-full cursor-pointer">
                       <FaPhone size={30} className="text-[#DFC96D]" />
                       <h1 className="text-center text-lg font-medium text-gray-500">0555144382</h1>
                       </div>
                       <div className="flex  gap-4 h-full cursor-pointer">
                       <FaPhone size={30} className="text-[#DFC96D]" />
                       <h1 className="text-center text-lg font-medium text-gray-600">0554452877</h1>
                       </div>
                       <div className="flex  gap-4 h-full cursor-pointer">
                       <FaPhone size={30} className="text-[#DFC96D]" />
                       <h1 className="text-center text-lg font-medium text-gray-600">05511800015</h1>
                       </div>
                       <div className="flex gap-4 h-full cursor-pointer">
                       <MdEmail size={30} className="text-[#DFC96D]" />
                       <h1 className="text-center text-lg font-medium text-gray-600">info@tadbeer.sa</h1>
                       </div>
                    </div>
    
                </div>

            </div>
            
            <h1 className="text-center text-md font-light text-gray-600 my-4"> 2025 @ Tadbeer</h1>
        </footer>
    );
};

export default Footer; 