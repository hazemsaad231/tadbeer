"use client";
import Image from "next/image";

export default function CategoriesMain({ categories }) {


  return (
    <>
      {categories.map((cat) => (
        <div
          key={cat.id}
          id={`cat-detail-${cat.id}`}
        >
          <div className="flex gap-2 items-center mt-10">
            {cat.icon_url && (
              <Image
                src={cat.icon_url}
                alt="الخدمات - صورة"
                width={50}
                height={50}
              />
            )}
            <h1 className="text-2xl md:text-3xl font-bold text-[#262163]">{cat.name || ""}</h1>
          </div>

          <div className="w-full h-0.5 bg-gray-300 my-4"></div>

          <div
            className="text-lg text-[#262163] font-medium leading-relaxed prose prose-blue max-w-none"
            dangerouslySetInnerHTML={{ __html: cat.description || "" }}
          ></div>
        </div>
      ))}

      
    </>
  );
}
