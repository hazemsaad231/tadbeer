import Image from "next/image";
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
        <div className="flex flex-col bg-[#262163] w-full py-20 px-4 sm:px-6 lg:px-8 xl:px-12">

            {/* الجزء الاول */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
{ Data.map((item) => (
        <div key={item.id} >
            <div className="flex flex-col gap-2 justify-center items-center"> 
                <h1 className="text-white text-2xl md:text-3xl lg:text-3xl xl:text-4xl font-bold">{item.num} +</h1>
            <p className="text-[#DFC96D] text-3xl md:text-4xl lg:text-4xl xl:text-5xl font-bold">{item.text}</p>
            </div>
           
        </div>
    ))
}
            </div>

        <hr className="border-t-2 border-[#DFC96D] w-[90%] m-auto my-8"/>

        {/* الجزء الثاني */}

        <div className="flex flex-col md:flex-row justify-center items-center gap-10 md:gap-6 w-full">

            <div>
                <Image src="/blog.webp" alt="logo" width={800} height={1200} className="object-cover w-[400px] h-[400px] sm:w-[400px] sm:h-[400px] md:w-[500px] md:h-[500px]
                lg:w-[600px] lg:h-[600px] xl:w-[700px] xl:h-[700px]" priority />
            </div>
        
        <div>
            <MyTimeline/>
        </div>


        </div>
        </div>
    );
}

export default ProfileContent;