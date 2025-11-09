import { IoIosArrowBack } from "react-icons/io";




const AboutContent = () => {
    return (
        <section className="bg-white w-full py-24" id="about">
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-4
         p-1 sm:p-3 md:p-4 lg:p-6 xl:p-12">


            <div className="flex flex-col w-full">
               
               
               <div className="flex">
                <div className="flex flex-col gap-1 border-r-[20px] border-b-[20px] border-[#DFC96D] px-1 py-3">
                                    <h1 className="text-2xl lg:text-3xl xl:text-4xl mb-2 font-bold text-[#262163] px-2">من نحن؟</h1>
 <p className="text-gray-600 text-lg w-full md:w-[300px] lg:w-[350px] xl:w-[400px] mb-2 px-2">منشأة احترافية تهدف الى تطوير الاستثمارات والأعمال التجارية والقطاع الخيري، بتقديم استشارات وخدمات مالية وإدارية. <span className="flex md:hidden xl:flex">بمعايير عالمية، وتقنيات متقدمة ملتزمة بقيمها الأصيلة.</span> </p>
                    <div className="flex gap-[2px] md:hidden lg:flex">
<IoIosArrowBack size={30} className="text-[#DFC96D]" />
                    <p className="text-gray-600 text-lg">قيمنا في الامتثال لقيم الشريعة الإسلامية</p>
                    </div>
                         <div className="flex gap-[2px] md:hidden lg:flex">
<IoIosArrowBack size={30} className="text-[#DFC96D]" />
                    <p className="text-gray-600 text-lg">احترافية العمل بروح الفريق الواحد</p>
                    </div>
                          <div className="flex gap-[2px]">
<IoIosArrowBack size={30} className="text-[#DFC96D]" />
                    <p className="text-gray-600 text-lg">نتائج عملية</p>
                    </div>
                    <div className="flex gap-[2px]">
<IoIosArrowBack size={30} className="text-[#DFC96D]" />
                    <p className="text-gray-600 text-lg">أفضل أداء لربحية أفضل</p>
                    </div>
                    <div className="flex gap-[2px]">
<IoIosArrowBack size={30} className="text-[#DFC96D]" />
                    <p className="text-gray-600 text-lg">مستشار العميل</p>
                    </div>
                    </div>
</div>
            </div>
           
            <div className="mt-12 sm:mt-10 md:mt-0">  <video src="/tadbeer.mp4" className="w-full h-full" controls></video></div>
          
        </div>
        </section>
    );
}

export default AboutContent