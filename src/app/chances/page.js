
import Image from "next/image";
import Link from "next/link";

export default async function Chances() {

   const data = await fetch('https://tadbeer.wj.edu.sa/public/api/invests?type&min_price&max_price&per_page', { cache: 'no-store' });

  const Chance= await data.json()


  console.log(Chance.data);
  const Chances = Chance.data;

  return (
    <div className="flex flex-col bg-white">
      <div className="relative w-full rounded-b-xl h-72 z-10 transition-all duration-700 ease-in-out group overflow-hidden">
        <Image
          src="/services.webp"
          alt="الفرص الاستثمارية - صورة"
           fill
          className="object-cover"
          priority
        />

        <div className="absolute inset-0 bg-[#262163]/50"></div>

        <div className="absolute left-4 right-4 bottom-32 z-10 text-center text-4xl font-extrabold text-white py-2 cursor-pointer">
            الفرص الاستثمارية
        </div>
      </div>

      <div className="py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 place-content-center place-items-center p-6 md:p-12 gap-6">
          {Chances.map((item) => (
            <article key={item.id} className="cursor-pointer w-full flex flex-col gap-2 rounded-xl shadow-md hover:shadow-lg transition-all duration-700 ease-in-out">
              <Link href={`/chances/${item.id}`} className="block">
              {item.gallery[0]?.photo_url && (
                 <Image
             src={`${item.gallery[0]?.photo_url}`}
             alt={item.title || "No image"}
             width={800}
             height={800}
             className="rounded-t-xl w-full h-60 object-cover opacity-95 hover:opacity-100 transition-all duration-700 ease-in-out"
             loading="lazy"
           />
              )}
          
           <h2 className="text-lg font-extrabold text-[#262163] px-4 h-16 flex items-center">
                  {item.name}
                </h2>
              </Link>
           </article>
          ))}
        </div>
      </div>
    </div>
  );
}
