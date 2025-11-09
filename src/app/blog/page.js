
import Image from "next/image";
import Link from "next/link";
import bg from "../../../public/img4.png";
import { Api } from "../components/api/api";
export default async function Bolgs() {

   const data = await fetch(`${Api}/services?per_page=100`, { next: { revalidate: 60 } });

  const Data= await data.json()

  const blog = Data.data

  console.log(blog);

const blogs = blog.filter((it) => it.type === 'blogs');



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
          مدونه تدبير
        </div>
      </div>

      <div className="py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 place-content-center place-items-center p-6 md:p-12 gap-6">
          {blogs.map((item) => (
            <article key={item.id} className="group overflow-hidden cursor-pointer gap-2 rounded-xl opacity-90 hover:opacity-100 hover:border-[#dbbb39]   transition-all duration-700 ease-in-out
            bg-white border border-gray-100 shadow-lg hover:shadow-2xl hover:-translate-y-3 hover:border-[#dbbb39]/30">
              <Link href={`/blog/${item.id}`} className="block">
              { item.image_url && (
                                <Image
                  src={item.image_url}
                  alt={item.title}
                  width={800}
                  height={800}
                  className="rounded-t-xl w-96 h-60 object-cover opacity-95 hover:opacity-100 transition-all duration-700 ease-in-out"
                  loading="lazy"
                />
              )}

                <h2 className="group-hover:text-[#dbbb39] text-lg font-extrabold text-[#262163] px-4 h-28 flex justify-center items-center">
                  {item.title}
                </h2>
              </Link>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
