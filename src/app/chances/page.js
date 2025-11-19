
import Image from "next/image";
import bg from "../../../public/chances.jpeg";
import Link from "next/link";
export default async function Chances() {

   const data = await fetch(`https://tadbeer.wj.edu.sa/public/api/invests?type&min_price&max_price&per_page`, { next: { revalidate: 60 } });

  const Data = await data.json()

  const chances = Data.data

  console.log(chances);

  const galleries = chances.map((item) => item.gallery);

  console.log(galleries);

  const image = galleries.map((gallery) => gallery.find((item) => item.type_photo === 'default'));

  console.log(image);




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

<div className="py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 place-content-center place-items-center p-4 md:p-8 gap-8">

                    {chances.map((item) => (
                    <div
    key={item.id}
    className={`group h-full w-full lg:w-96 flex flex-col rounded-2xl overflow-hidden cursor-pointer transition-all duration-500
    
    bg-white border border-gray-100 shadow-md hover:shadow-lg hover:-translate-y-2 hover:border-[#dbbb39]`} 
>
    <div className="flex-1">
        <Link href={`/chances/${item.id}`}>
            <div className="relative h-60 w-full overflow-hidden bg-gray-100">
{item.gallery[0].type_photo === 'default' ? (
  <>
                        {item.gallery?.[0]?.photo_url ? (
                              <Image
                                src={item.gallery[0].photo_url}
                                alt={item.name || "فرصة استثمارية"}
                                fill
                                className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-500"
                                loading="lazy"
                                unoptimized={false}
                              />
                            ) : (
                              <div className="w-full h-full flex items-center justify-center bg-gray-200">
                                <span className="text-gray-400">صورة غير متوفرة</span>
                              </div>
                            )} </>
                          ):
                          (
  <>
                        {item.gallery?.[1]?.photo_url ? (
                              <Image
                                src={item.gallery[1].photo_url}
                                alt={item.name || "فرصة استثمارية"}
                                fill
                                className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-500"
                                loading="lazy"
                                unoptimized={false}
                              />
                            ) : (
                              <div className="w-full h-full flex items-center justify-center bg-gray-200">
                                <span className="text-gray-400">صورة غير متوفرة</span>
                              </div>
                            )} </>
                          )
                          }

                <div className="absolute top-4 right-4 bg-linear-to-r from-[#dbbb39] to-[#f5d76e] text-[#1a1a4d] px-3 py-1 rounded-full text-sm font-bold"> 
                    {item.type}
                </div>
            </div>
            <div className="flex-1 p-4 py-8 flex flex-col justify-between">
                <h3 className="text-xl text-center font-extrabold text-[#1a1a4d]   line-clamp-2 group-hover:text-[#dbbb39] transition-colors mb-2"> 
                    {item.name}
                </h3>
            </div>
        </Link>
    </div>
</div>
                    ))}
                  </div>
                  </div>

    </div>
  );
}
