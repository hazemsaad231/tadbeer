// app/services/[id]/page.jsx
import Image from "next/image";
import { data } from "../Data";
import Link from "next/link";

export async function generateStaticParams() {
  return data.map((item) => ({
    id: String(item.id)
  }));
}

export default function ServicePage({ params }) {
  const idParam = String(params.id); 
  

  const item = data.find((i) => String(i.id) === idParam);

return (
     <div className="flex flex-col bg-white">
        {/* الجزء العلوي */}
      <div className="relative w-full rounded-b-xl h-72 z-10 transition-all duration-700 ease-in-out group overflow-hidden">
        <Image
          src={item.img}
          alt="الخدمات - صورة"
          width={1600}
          height={600}
          className="w-full object-cover h-full"
          priority
        />

        <div className="absolute inset-0 bg-[#262163]/50"></div>

        <div className="absolute left-4 right-4 bottom-32 z-10 text-center text-3xl md:text-4xl font-extrabold text-white py-2 cursor-pointer">
          {item.title}
        </div>
      </div>

{/* الجزء السفلي */}
<div className=" grid grid-cols-1 lg:grid-cols-2  gap-6 py-20 p-4 md:p-8 lg:p-12 xl:p-20">
{/* الجزء الاول */}
      <div className="relative flex flex-col gap-4">
        <Image
          src={item.img}
          alt="الخدمات - صورة"
          width={800}
          height={800}
          className="w-full object-cover h-96"
          priority
        />
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-[#262163]">{item.title}</h1>
        <p className="text-lg text-gray-600 w-full h-full p-2">{item.text}</p>
      </div>
{/* الجزء الثاني */}
      <div className="bg-[#262163] w-full m-auto lg:w-max  rounded-xl py-6 p-2 sm:p-2 md:p-12">
        <h1 className="text-2xl md:text-3xl font-extrabold text-[#DFC96D] mb-2"> جميع الخدمات</h1>
        <div className="flex flex-col gap-4 py-6">
{data.map((item) => (
  <div key={item.id}>
    <Link href={`/services/${item.id}`} className="flex gap-3 w-full">
    <Image
      src={item.img}
      alt="الخدمات - صورة"
      width={1600}
      height={600}
      className="w-16 md:w-20 object-cover h-16 md:h-20 rounded-xl"
      priority
    />
    <h1 className="text-md w-full font-semibold text-white">{item.title}</h1>
    </Link>
  </div>
))}
</div>
      </div>
      {/**/}



      </div>


    </div>
)

}