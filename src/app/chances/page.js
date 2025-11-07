
import Image from "next/image";
import bg from "../../../public/img4.png";
import Link from "next/link";
export default async function Chances() {

   const data = await fetch(`https://tadbeer.wj.edu.sa/public/api/invests?type&min_price&max_price&per_page`, { next: { revalidate: 60 } });

  const Data= await data.json()

  const chances = Data.data

  console.log(chances);



  return (
    <div className="flex flex-col bg-white">
     
      <div className="relative w-full rounded-b-xl h-72 z-10 transition-all duration-700 ease-in-out group overflow-hidden">
        <Image
          src={bg}
          alt="الخدمات - صورة"
          fill
          placeholder="blur"
          className="object-cover"
          priority
        />

        <div className="absolute inset-0 bg-[#262163]/50"></div>

        <div className="absolute left-4 right-4 bottom-32 z-10 text-center text-4xl font-extrabold text-white py-2 cursor-pointer">
          الفرص الاستثمارية
        </div>
      </div>

<div className="w-full py-24 px-12">
      <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-10`}>
                    {chances.map((item) => (
                      <div
                        key={item.id}
                        className={`group h-full w-104 flex flex-col rounded-3xl overflow-hidden  cursor-pointer transition-all duration-500
                        
                    bg-white border border-gray-100 shadow-lg hover:shadow-2xl hover:-translate-y-3 hover:border-[#dbbb39]/30`}
                        
                      >
                        <Link href={`/chances/${item.id}`}>
                        <div className="flex-1">
                          <div className="relative h-64 overflow-hidden bg-gray-100">
                            {item.gallery?.[0]?.photo_url ? (
                              <Image
                                src={item.gallery[0].photo_url}
                                alt={item.name || "فرصة استثمارية"}
                                fill
                                className="w-full h-full object-center group-hover:scale-110 transition-transform duration-500"
                                loading="lazy"
                                unoptimized={false}
                              />
                            ) : (
                              <div className="w-full h-full flex items-center justify-center bg-gray-200">
                                <span className="text-gray-400">صورة غير متوفرة</span>
                              </div>
                            )}
                            <div className="absolute top-4 right-4 bg-linear-to-r from-[#dbbb39] to-[#f5d76e] text-[#1a1a4d] px-3 py-1 rounded-full text-xs font-bold">
                              {item.type}
                            </div>
                          </div>
                          <div className="flex-1 p-2 md:p-4 flex flex-col justify-between">
                            <h3 className="text-lg text-center md:text-xl font-bold text-[#1a1a4d] line-clamp-2 group-hover:text-[#dbbb39] transition-colors mb-2">
                              {item.name}
                            </h3>
                            <div className="w-full h-0.5 bg-gray-200 my-3"></div>
                            <div className="flex justify-between mt-4">
                              <span className="font-medium text-[#262163]">نوع الاستثمار</span>
                              <span className="font-extrabold text-[#262163]">{item.type}</span>
                            </div>
                            <div className="flex justify-between mt-4 mb-4">
                              <span className="font-medium text-[#262163]">مبلغ الاستثمار</span>
                              <span className="font-extrabold text-[#262163]">{item.price} ر.س</span>
                            </div>
                            <button
                           
                              className="bg-[#dbbb39] text-[#262163] group-hover:text-[#dbbb39] group-hover:bg-[#262163] py-2 px-4 w-full cursor-pointer rounded-full font-semibold"
                            >
                               <Link href={`/chances/${item.id}`}>
                              تفاصيل الفرصة
                              </Link>
                            </button>
                          </div>
                        </div>
                        </Link>
                      </div>
                    ))}
                  </div>
                  </div>

    </div>
  );
}
