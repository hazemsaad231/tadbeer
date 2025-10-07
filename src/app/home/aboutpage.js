import Image from "next/image";
import { IoIosArrowBack } from "react-icons/io";

const AboutContent = () => {
    return (
        <div className="flex  justify-center items-center bg-white py-32">
        <div className="flex justify-around items-center flex-col sm:flex-col md:flex-row w-[95%] m-auto gap-4">
            <div className="w-1/2 flex flex-col gap-6">
                <h1 className="text-4xl font-bold text-[#262163]">من نحن؟</h1>
                <p className="text-gray-600 text-xl w-[400px">منشأة احترافية تهدف الى تطوير الاستثمارات والأعمال التجارية والقطاع الخيري، بتقديم استشارات وخدمات مالية وإدارية، بمعايير عالمية، وتقنيات متقدمة ، ملتزمة بقيمها الأصيلة.</p>
                <div className="flex">
                <Image src="/desin.webp" alt="logo" width={220} height={220} className="object-contain" priority />
                <div className="flex flex-col gap-2 relative left-48">
                    <div className="flex gap-2">
<IoIosArrowBack size={30} className="text-[#DFC96D]" />
                    <p className="text-gray-600 text-lg">قيمنا في الامتثال لقوانين الشريعة الإسلامية</p>
                    </div>
                         <div className="flex gap-2">
<IoIosArrowBack size={30} className="text-[#DFC96D]" />
                    <p className="text-gray-600 text-lg">احترافية العمل بروح الفريق الواحد</p>
                    </div>
                          <div className="flex gap-2">
<IoIosArrowBack size={30} className="text-[#DFC96D]" />
                    <p className="text-gray-600 text-lg">نتائج عملية</p>
                    </div>
                    <div className="flex gap-2">
<IoIosArrowBack size={30} className="text-[#DFC96D]" />
                    <p className="text-gray-600 text-lg">أفضل أداء لربحية أفضل</p>
                    </div>
                    <div className="flex gap-2">
<IoIosArrowBack size={30} className="text-[#DFC96D]" />
                    <p className="text-gray-600 text-lg">مستشار العميل</p>
                    </div>
                    </div>
</div>
            </div>
            <div className="w-1/2">  <video src="/tadbeer.mp4" className="w-full" controls></video></div>
          
        </div>
        </div>
    );
}

export default AboutContent