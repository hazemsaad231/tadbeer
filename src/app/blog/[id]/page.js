import Link from "next/link";
import Buttons from "@/app/components/buttons/buttons";
import { Api } from "@/app/components/api/api";
import Image from "next/image";


const BlogDetails = async ({ params }) => {
  const response = await fetch(`${Api}/services?per_page=100`, { next: { revalidate: 60 } });
  const Data = await response.json();
  const items = Array.isArray(Data?.data) ? Data.data : [];
  const item = items.find((i) => String(i.id) === String(params.id));
  const blogs = items.filter((it) => it.type === "blogs");

  console.log(item.image_url);

  if (!item) {
    return (
      <div className="p-8">
        <h2 className="text-2xl font-bold">الخدمة مش موجودة</h2>
      </div>
    );
  }


  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://tadbeer-nine.vercel.app/";
  const getImageUrl = (imgPath) =>
    typeof imgPath === "string" && imgPath.startsWith("http") ? imgPath : `${siteUrl}${imgPath || ""}`;

  const url = `${siteUrl.replace(/\/+$/, "")}/services/${item.id}`;
  const imageUrl = getImageUrl(item.image_url);

  return (
    <div className="flex flex-col bg-white">
      {/* الجزء العلوي */}
      <div className="relative w-full rounded-b-xl h-72 z-10 transition-all duration-700 ease-in-out group overflow-hidden">
        {item.image_url && (
          <Image
            src={imageUrl}
            alt={item.title || "الخدمات - صورة"}
            width={1600}
            height={600}
            className="w-full object-cover h-full"
            priority
          />
        )}

        <div className="absolute inset-0 bg-[#262163]/50" />
        <div className="absolute left-4 right-4 bottom-32 z-10 text-center text-3xl md:text-4xl font-extrabold text-white py-2 cursor-pointer">
          {item.title}
        </div>
      </div>

      {/* الجزء السفلي */}
      <div className="flex flex-col md:flex-row gap-20 py-20 p-4 md:p-8 lg:p-12 xl:p-20">
        {/* الجزء الاول */}
        <div className="relative w-full md:w-4/5 lg:w-3/4 flex flex-col gap-4">
          {item.image_url && (
            <Image
              src={imageUrl}
              alt={item.title || "الخدمات - صورة"}
              width={800}
              height={800}
              className="w-full object-cover h-96"
              priority
            />
          )}

          <h1 className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-[#262163]">
            {item.title}
          </h1>

          <div className="text-xl text-gray-500 w-full h-full p-2">
            <div
  className="text-lg text-[#262163] font-medium leading-relaxed prose prose-blue max-w-none"
  dangerouslySetInnerHTML={{ __html: item.description || "" }}
></div>
          </div>
        </div>

        {/* الجزء الثاني */}
        <div className="w-full md:w-max m-auto md:m-0 p-2 md:p-0">
          <div className="bg-[#262163] w-full m-auto rounded-xl py-6 p-2 sm:p-2 md:p-6">
            <h1 className="text-2xl md:text-3xl font-extrabold text-[#DFC96D] mb-2">
          جميع المدونات
            </h1>

            <div className="flex flex-col gap-4 py-6">
              {Array.isArray(blogs) && blogs.length > 0 ? (
                blogs.map((blog) => {
                  const svcImg = getImageUrl(blog.image_url);
                  return (
                    <div key={blog.id}>
                      <Link href={`/blog/${blog.id}`} className="flex gap-3 w-full items-center">
                        {blog.image_url && (
                          <Image
                            src={svcImg}
                            alt={blog.title || "مدونه"}
                            width={200}
                            height={200}
                            className="w-12 h-12 md:w-14 md:h-14 object-cover rounded-xl"
                          />
                        )}
                        <h1 className="text-md w-60 font-semibold text-white">{blog.title}</h1>
                      </Link>
                    </div>
                  );
                })
              ) : (
                <p className="text-sm text-gray-300">ما فيش مدونات لعرضها</p>
              )}
            </div>

            <div className="w-full h-[2px] bg-white" />

            <div className="py-8">
              <Buttons url={url} imageUrl={imageUrl} title={item.title} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogDetails;
