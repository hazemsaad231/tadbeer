import Image from "next/image";
import Link from "next/link";
import Slider from "@/app/components/slider";
import bg from "../../../../public/bg.jpg";
import layer from "../../../../public/Layer.png";
import CategoriesSidebarClient from "../categories/list";
import CategoriesMainClient from "../categories/details";


const ChanceDetails = async ({ params }) => {

  const response = await fetch(
    `https://tadbeer.wj.edu.sa/public/api/invests?type&min_price&max_price&per_page`,
    { cache: "no-store" }
  );
  const Data = await response.json();

  const items = Data.data;
  const item = items.find((i) => String(i.id) === params.id);

  // في حالة ما كانت البيانات فاضية نتجنّب 
  if (!item) {
    return (
      <div className="w-full p-8">
        <h2 className="text-2xl font-bold text-[#262163]">الفرصة غير موجودة</h2>
        <p className="mt-4 text-[#262163]">لا توجد بيانات مطابقة لهذا المعرف.</p>
      </div>
    );
  }

  const Src = (item.gallery || []).map((i) => i.photo_url);
  const typeSrc = (item.gallery || []).map((i) => i.type_photo);

  console.log(typeSrc, Src);
  const categories = item.categories || [];

  return (
    <>
      <div className="flex flex-col bg-white">
        <div className="relative w-full py-6 xl:py-0 min-h-[800px] z-0 transition-all duration-700 ease-in-out group overflow-hidden">
          <Image src={bg} alt="الخدمات - صورة" placeholder="blur" fill className="w-full object-cover h-full" priority />
          <div className="absolute inset-0 bg-[#262163]/20"></div>

          <div className=" absolute top-28 z-10 text-center m-auto w-full text-white py-2 px-2 md:px-6 lg:px-12 xl:px-16">
            <div className="flex flex-col md:flex-row gap-2 justify-center items-center">
              <div className="flex flex-col items-center w-full md:w-[60%] lg:w-[50%] m-auto gap-4 p-2">
                <h6 className="font-light text-3xl md:text-3xl lg:text-4xl xl:text-5xl">فرص استثمارية واعدة مع</h6>
                <h1 className="font-extrabold text-[2.5rem] md:text-5xl lg:text-5xl xl:text-7xl">تدبير المتخصصة</h1>
                <p className="font-light text-lg text-white my-2 md:my-4 lg:my-6 xl:my-8">
                  شركة متخصصة في تقديم الخدمات المالية والمهنية لدعم نمو وتطور التجارة والأعمال. بفضل خبرتنا العميقة وفريقنا المتخصص، نوفر بيئة استثمارية موثوقة ومبنية على أسس استراتيجية قوية. انضم إلينا واستثمر في مستقبلٍ واعد مليء بالفرص.
                </p>
                <button className="bg-[#dbbb39] text-white py-3 px-4 cursor-pointer rounded-full font-semibold my-2">
                  <Link href={`/form/${item.id}`}>استثمار الآن</Link>
                </button>
              </div>

              {/* Wrapper للصورة */}
              <div className="hidden m-auto md:flex items-center justify-center p-2">
                <Image
                  src={layer}
                  alt="الخدمات - صورة"
                  width={200}
                  height={200}
                  placeholder="blur"
                  className="block md:w-60 xl:w-68 h-auto object-center"
                  priority
                />
              </div>
            </div>
          </div>
        </div>


 <div className="w-full md:w-[90%] lg:w-[80%]  xl:w-[80%] m-auto relative bottom-60 p-4">
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-4 m-auto">
            <div className="col-span-1 md:col-span-2 lg:col-span-2 xl:col-span-2">
              <div>
                <Slider src={Src} typeSrc={typeSrc} />
              </div>
               {/** mobile */}
               <div className="md:hidden col-span-1 md:col-span-1 lg:col-span-1 xl:col-span-1 mt-12">
              <div className="w-full md:w-80 h-max rounded-4xl bg-white shadow-lg border  p-4 py-10 flex flex-col gap-3">
                <h1 className="text-lg font-extrabold text-[#262163]">استثمر في تدبير</h1>
                <p className="text-md text-gray-500">سجّل الآن للاستثمار في تدبير، وابدأ بمتابعة مستجدات الشركة وفرص نموها بشكل تلقائي.</p>
                <div className="bg-[#dbbb39] text-white py-2 px-4 w-max cursor-pointer rounded-full font-semibold">
                  <Link href={`/form/${item.id}`}>استثمار الآن</Link>
                </div>

                <div className="w-full h-[2px] bg-gray-300 my-3"></div>

                <CategoriesSidebarClient categories={categories} />
              </div>
               </div>

              <div className="py-40">
                <h1 className="text-3xl font-bold text-[#262163]">ابرز المعومات </h1>
                <div className="w-full h-[2px] bg-gray-300 my-4"></div>
                <div className="flex justify-between mt-20">
                  <h4 className="text-lg md:text-xl text-[#262163] font-medium">نوع الاستثمار</h4>
                  <h1 className="text-md md:text-xl text-[#262163] font-extrabold">{item.type}</h1>
                </div>
                <div className="w-full h-[1px] bg-gray-300 my-4"></div>
                <div className="flex justify-between mt-8 mb-4">
                  <h4 className="text-lg md:text-xl text-[#262163] font-medium">مبلغ الاستثمار</h4>
                  <h1 className="text-md md:text-xl text-[#262163] font-extrabold">{item.price} ر.س</h1>
                </div>
                <div className="w-full h-[1px] bg-gray-300 my-4"></div>
                <div className="border-2 border-[#262163] p-4 py-8 text-[#262163] bg-[#262163]/15 rounded-4xl my-12">
                  يقدّم الرئيس التنفيذي لشركة تدبير عرضًا تفصيليًا في فيديو مدته ١٥ دقيقة، يستعرض فيه استراتيجية الشركة، أبرز الإنجازات، والوضع المالي الحالي.
                </div>

                {/* بدل الـ categories.map هنا هنستخدم الـ client component اللي بيعرض كل التفاصيل */}
                <CategoriesMainClient categories={categories} />
              </div>
           
            </div>
               {/** desktop */}
            <div className="sticky top-20 hidden md:block col-span-1 md:col-span-1 lg:col-span-1 xl:col-span-1">
              <div className="w-full md:w-60 lg:w-80 h-max rounded-4xl bg-white shadow-lg border  p-4 py-10 flex flex-col gap-3">
                <h1 className="text-lg font-extrabold text-[#262163]">استثمر في تدبير</h1>
                <p className="text-md text-gray-500">سجّل الآن للاستثمار في تدبير، وابدأ بمتابعة مستجدات الشركة وفرص نموها بشكل تلقائي.</p>
                <div className="bg-[#dbbb39] text-white py-2 px-4 w-max cursor-pointer rounded-full font-semibold">
                  <Link href={`/form/${item.id}`}>استثمار الآن</Link>
                </div>

                <div className="w-full h-[2px] bg-gray-300 my-3"></div>

                <CategoriesSidebarClient categories={categories} />
              </div>
            </div>

          </div>
        </div>




       
      </div>
    </>
  );
};

export default ChanceDetails;
