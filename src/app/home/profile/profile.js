import Image from "next/image";
import dynamic from 'next/dynamic';
import MyTimeline from "./MyTimeline";
// const Timeline = dynamic(() => import('./MyTimeline'), { ssr: false });
const Data = [
    {
        id: 1,
        text: "زيارة",
        num: 10000  
    },
    {
        id: 2,
        text: "عميل",
        num: 542
    },
    {
        id: 3,
        text: "تقرير",
        num: 3360
    },
    {
        id: 4,
        text: "إستشارة",
        num: 1500
    }
]
const ProfileContent = () => {
    return (
        <div className="flex flex-col bg-[#262163] w-full py-20 px-12">

            {/* الجزء الاول */}
            <div className="flex justify-evenly items-center gap-8 mb-20">
{ Data.map((item) => (
        <div key={item.id} >
            <div className="flex flex-col gap-2 justify-center items-center"> 
                <h1 className="text-white text-4xl font-bold">{item.num} +</h1>
            <p className="text-[#DFC96D] text-5xl font-bold">{item.text}</p>
            </div>
           
        </div>
    ))
}
            </div>

        <hr className="border-t-2 border-[#DFC96D] w-[95%] m-auto my-8"/>

        <div className="flex flex-col md:flex-row justify-center items-center w-full">

            <div>
                <Image src="/blog.webp" alt="logo" width={800} height={1200} className="object-cover w-[400px] h-[400px] sm:w-[400px] sm:h-[400px] md:w-[500px] md:h-[500px]
                lg:w-[600px] lg:h-[600px] xl:w-[700px] xl:h-[700px]" priority />
            </div>
        
        <div className="flex flex-col justify-center items-center gap-5">
            <h1 className="text-white text-4xl font-bold">بماذا نساعدك في مشروعك؟</h1>
            <MyTimeline/>
        </div>
        </div>
        </div>
    );
}

export default ProfileContent;