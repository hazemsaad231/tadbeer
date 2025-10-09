import { IoIosArrowBack } from "react-icons/io";



const AboutContent = () => {
    return (
        <div className="bg-white py-24" id="about">
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-3
         p-2 sm:p-3 md:p-4 lg:p-10 xl:p-16">


            <div className="flex flex-col w-full gap-1">
               
                
               <div className="flex">
                <div className="flex flex-col gap-1 border-r-[20px] border-b-[20px] border-[#DFC96D] p-4">
                                    <h1 className="text-2xl lg:text-3xl xl:text-4xl mb-2 font-bold text-[#262163]">من نحن؟</h1>
 <p className="text-gray-600 text-xl w-68 sm:w-72 md:w-[300px] lg:w-[350px] xl:w-[400px] mb-2">منشأة احترافية تهدف الى تطوير الاستثمارات والأعمال التجارية والقطاع الخيري، بتقديم استشارات وخدمات مالية وإدارية، بمعايير عالمية، وتقنيات متقدمة ، ملتزمة بقيمها الأصيلة.</p>
                    <div className="flex gap-1">
<IoIosArrowBack size={30} className="text-[#DFC96D]" />
                    <p className="text-gray-600 text-xl">قيمنا في الامتثال لقوانين الشريعة الإسلامية</p>
                    </div>
                         <div className="flex gap-1">
<IoIosArrowBack size={30} className="text-[#DFC96D]" />
                    <p className="text-gray-600 text-xl">احترافية العمل بروح الفريق الواحد</p>
                    </div>
                          <div className="flex gap-1">
<IoIosArrowBack size={30} className="text-[#DFC96D]" />
                    <p className="text-gray-600 text-xl">نتائج عملية</p>
                    </div>
                    <div className="flex gap-1">
<IoIosArrowBack size={30} className="text-[#DFC96D]" />
                    <p className="text-gray-600 text-xl">أفضل أداء لربحية أفضل</p>
                    </div>
                    <div className="flex gap-1">
<IoIosArrowBack size={30} className="text-[#DFC96D]" />
                    <p className="text-gray-600 text-xl">مستشار العميل</p>
                    </div>
                    </div>
</div>
            </div>
            <div className="mt-12 sm:mt-10 md:mt-0">  <video src="/tadbeer.mp4" className="w-full h-full" controls></video></div>
          
        </div>
        </div>
    );
}

export default AboutContent