import React from "react";
import { Hero } from "../parts/hero";
import Slider from "../parts/slider";
import Link from "next/link";
import CategoriesSidebar from "../parts/list";
import CategoriesMain from "../parts/details";
import { Info } from "lucide-react";

export default async function Home({ params }) {

  




  const res = await fetch("https://tadbeer.wj.edu.sa/public/api/invests?type&min_price&max_price&per_page", {
    next: { revalidate: 30 } 
  });

const {id} = params;

  const data = await res.json();
  const items = data?.data || [];

  const item = items.find((it) => String(it.id) === String(id));

  console.log(item);

  return (
    <div>
      <Hero />
      <div className="pb-28 relative top-[-120px] z-10" id="details">

                  <div className="max-w-8xl md:max-w-7xl lg:max-w-6xl xl:max-w-6xl m-auto grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="col-span-1 md:col-span-2">
                      <Slider
                        src={(item.gallery || []).map((i) => i.photo_url)}
                        typeSrc={(item.gallery || []).map((i) => i.type_photo)}
                      />
                      <div className="block md:hidden col-span-1 mt-14">
                        <div className="w-full md:w-60 lg:w-80 h-max rounded-4xl bg-white shadow-lg border border-gray-200 p-4 py-10 flex flex-col gap-3 mb-12">
                          <h3 className="text-xl font-extrabold text-[#262163]">استثمر في تدبير</h3>
                          <p className="text-gray-500">سجّل الآن للاستثمار في تدبير، وابدأ بمتابعة مستجدات الشركة وفرص نموها بشكل تلقائي.</p>
                          <div className="bg-[#dbbb39] text-white py-2 px-4 w-max cursor-pointer rounded-full font-semibold">
                            <Link href={`/form`}>استثمار الآن</Link>
                          </div>
                          <div className="w-full h-0.5 bg-gray-300 my-3"></div>
                          <CategoriesSidebar categories={item.categories || []} />
                        </div>
                      </div>

                      <div className="py-12">
                        <h3 className="text-2xl md:text-3xl font-bold text-[#262163] mb-6 flex items-center gap-2">
                          <Info className="w-6 h-6" />
                          ابرز المعومات
                        </h3>
                        <div className="w-full h-0.5 bg-gray-300 my-4"></div>
                        <div className="flex justify-between mt-4">
                          <span className="font-medium text-[#262163]">نوع الاستثمار</span>
                          <span className="font-extrabold text-[#262163]">{item.type}</span>
                        </div>
                        <div className="flex justify-between mt-4 mb-4">
                          <span className="font-medium text-[#262163]">مبلغ الاستثمار</span>
                          <span className="font-extrabold text-[#262163]">{item.price} ر.س</span>
                        </div>
                        <CategoriesMain categories={item.categories || []} />
                      </div>
                    </div>

                    <div className="hidden md:block col-span-1">
                      <div className="w-full md:w-60 lg:w-80 h-max rounded-4xl bg-white shadow-lg border border-gray-200
                       p-4 py-10 flex flex-col gap-3 sticky top-20">
                        <h3 className="text-xl font-extrabold text-[#262163]">استثمر في تدبير</h3>
                        <p className="text-gray-500">سجّل الآن للاستثمار في تدبير، وابدأ بمتابعة مستجدات الشركة وفرص نموها بشكل تلقائي.</p>
                        <div className="bg-[#dbbb39] text-white py-2 px-4 w-max cursor-pointer rounded-full font-semibold">
                          <Link href={`/form/${item.id}`}>استثمار الآن</Link>
                        </div>
                        <div className="w-full h-0.5 bg-gray-300 my-3"></div>
                        <CategoriesSidebar categories={item.categories || []} />
                      </div>
                    </div>
                  </div>
                </div>
    </div>
  )
}
