
import Image from "next/image";
import Slider from "./slider";
import { Api } from "../../components/api/api";



const ServicesContent = async() => {

const data = await fetch(`${Api}/services?per_page=15`, { next: { revalidate: 60 } });

  const Data= await data.json()

  const service = Data.data

  console.log(service);

const services = service.filter((it) => it.type === 'services').slice(0, 5);

console.log(services);
    




    return (
        <div  className="flex flex-col w-screen py-8  bg-[#DFC96D] text-white">
            <div  className="flex flex-col gap-4 text-center py-20 w-full">
                <div className="flex flex-col lg:flex-row justify-center items-center gap-4 w-full px-2 md:w-[80%] lg:w-[80%] m-auto py-8">
                <h1 className="text-3xl sm:text-3xl md:text-4xl xl:text-5xl font-extrabold text-[#262163]">خدمات تدبير المتخصصة</h1>
                <p className="text-lg sm:text-lg lg:text-xl xl:text-xl text-gray-600 w-full">
                    منشأة احترافية تهدف الى تطوير الاستثمارات والأعمال التجارية والقطاع الخيري، بتقديم استشارات وخدمات مالية وإدارية، بمعايير عالمية، وتقنيات متقدمة ، ملتزمة بقيمها الأصيلة.
                </p>
                </div>
<div className="relative w-full" >
    {/* dots */}
    <div className="absolute flex flex-col sm:flex-col md:flex-row justify-between items-end w-full">
    <Image src="/dots2.webp" alt="logo" width={800} height={800} className="object-contain w-96 h-[600px]" priority />
    <Image src="/dots2.webp" alt="logo" width={800} height={800} className="object-contain w-96 h-[600px] hidden md:block" priority />
</div>

{/* slider */}
   <div className="w-full absolute top-5 z-20">
    <Slider services={services}/>
    </div> 

            <div  className="relative z-10 flex flex-col justify-center items-center mt-4 rounded-xl m-auto">
                    <div className="object-cover w-[95vw] sm:w-[95vw] md:w-[80vw] lg:w-[70vw] xl:w-[70vw] h-[425px] 
                    md:h-[450px]">
                    <div className="rounded-xl bg-[#23205a] w-full h-full"></div>
                    </div>


         
   
                </div>
</div>

            </div>
        </div>
    );
}

export default ServicesContent;
