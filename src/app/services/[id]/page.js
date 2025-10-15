// app/services/[id]/page.jsx
import Image from "next/image";
import Link from "next/link";
import Buttons from "@/app/components/buttons";




  const ServiceDetails = async ({ params }) => {


      const response = await fetch(`https://68ef82a9b06cc802829db21a.mockapi.io/tadbeer`)
      console.log(response);
  const Data = await response.json();

  const items = Data;

  const item = items.find((i) => String(i.id) === params.id);



console.log(item);

  const parts = item.text.split('*');

    const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://tadbeer-two.vercel.app/';
  const url = `${siteUrl}/services/${item.id}`;
  const imageUrl = item.img.startsWith('http') ? item.img : `${siteUrl}${item.img}`;

return (
  <>
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
<div className=" flex flex-col md:flex-row gap-20 py-20 p-4 md:p-8 lg:p-12 xl:p-20">
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
        <div className="text-xl text-gray-500 w-full h-full p-2">
           <p className="font-extrabold">{parts[0]}</p>
      <ul className="list-disc mt-3 space-y-2">
        {parts.slice(1).map((item, i) => (
          <p key={i} className="font-semibold text-lg">{item.trim()}</p>
        ))}
      </ul>
      </div>

      </div>
{/* الجزء الثاني */}
<div className="w-full md:w-max m-auto md:m-0 p-2 md:p-0">
      <div className="bg-[#262163] w-full m-auto rounded-xl py-6 p-2 sm:p-2 md:p-6">
        <h1 className="text-2xl md:text-3xl font-extrabold text-[#DFC96D] mb-2"> جميع الخدمات</h1>
        <div className="flex flex-col gap-4 py-6">
{items.map((item) => (
  <div key={item.id}>
    <Link href={`/services/${item.id}`} className="flex gap-3 w-full">
    <Image
      src={item.img}
      alt="الخدمات - صورة"
      width={200}
      height={200}
      className="w-12 h-12 md:w-14 md:h-14 object-cover rounded-xl"
      priority
    />
    <h1 className="text-md w-60 font-semibold text-white">{item.title}</h1>
    </Link>
  </div>
))}
</div>
<div className="w-full h-[2px] bg-white"></div>
<div className="py-8">
  <Buttons url={url} imageUrl={imageUrl} title={item.title}/>
  
</div>
      </div>
      </div>
      {/**/}
      </div>


    </div>

    </>
)

}

export default ServiceDetails ;