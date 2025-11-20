"use client";
import { useState, useEffect } from "react";
import Image from "next/image";

export default function CategoriesSidebar({ categories, headerOffset = 0 }) {
  const [activeId, setActiveId] = useState(null);

  useEffect(() => {
    if (categories?.length > 0) {
      setActiveId(categories[0].id);
      window.dispatchEvent(new CustomEvent("categorySelected", { detail: categories[0].id }));
    }
  }, [categories]);


  const scrollToCategory = (id) => {
    const el = document.getElementById(`cat-detail-${id}`);
    if (!el) return;

    const top = el.getBoundingClientRect().top + window.pageYOffset ;

    window.scrollTo({
      top,
      behavior: "smooth",
    });
  };

  const handleClick = (id) => {
    setActiveId(id);
    window.dispatchEvent(new CustomEvent("categorySelected", { detail: id }));
    scrollToCategory(id);
  };

  return (
    <ul className="custom-scrollbar space-y-1 text-lg cursor-pointer h-40 overflow-y-auto">
      {categories.map((cat) => (
        <li
          key={cat.id}
          onClick={() => handleClick(cat.id)}
          className={`flex items-center gap-2 font-normal py-2 px-4 rounded-full w-max transition-colors
            ${
              activeId === cat.id
                ? "border border-[#262163] text-[#262163] bg-[#262163]/10 "
                : "text-[#262163] hover:bg-[#262163]/10 "
            }`}
        >
          {cat.icon_url && cat.icon_url.startsWith("http") && (
            <Image
              src={cat.icon_url}
              alt="الخدمات - صورة"
              width={30}
              height={30}
              className="inline-block"
              priority
            />
          )}
          {cat.name}
        </li>
      ))}
    </ul>
  );
}
