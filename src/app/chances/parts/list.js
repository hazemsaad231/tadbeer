"use client";
import { useState, useEffect } from "react";
import Image from "next/image";

export default function CategoriesSidebar({ categories, headerOffset = 0 }) {

  const [activeId, setActiveId] = useState(null);

  
  const handleScroll = () => {
    //  1. تحديد نقطة التنشيط 
    const topActivationPoint = headerOffset + 50; 
    let newActiveId = null;

    // 1.2. البحث عن العناصر وتحديد الفئة النشطة
    // المرور على الفئات بترتيب عكسي (من الأسفل للأعلى)
    for (let i = categories.length - 1; i >= 0; i--) {
      const cat = categories[i];
      // يجب أن يكون ID المحتوى في الصفحة الرئيسية هو: `cat-detail-${cat.id}`
      const el = document.getElementById(`cat-detail-${cat.id}`);

      if (el) {
        // el.getBoundingClientRect().top هي المسافة من أعلى منطقة العرض (Viewport)
        if (el.getBoundingClientRect().top <= topActivationPoint) {
          // إذا كان العنصر أعلى أو عند نقطة التنشيط، فهو النشط حالياً
          newActiveId = cat.id;
          break; 
        }
      }
    }

    // 1.3. تحديث الحالة
    // يتم التحديث فقط إذا كانت الفئة الجديدة مختلفة عن الفئة النشطة الحالية
    if (newActiveId !== activeId) {
      setActiveId(newActiveId);
      // إرسال حدث مخصص للمكونات الأخرى
      window.dispatchEvent(
        new CustomEvent("categorySelected", { detail: newActiveId })
      );
    }

  };

  useEffect(() => {
    if (categories?.length > 0) {
      // قم بتشغيل الدالة مرة واحدة للتأكد من الحالة الصحيحة عند التحميل (في حال كان المستخدم ليس في أعلى الصفحة)
      handleScroll();
      
      // إضافة مستمع لحدث التمرير
      window.addEventListener("scroll", handleScroll);

      // تنظيف المستمع عند إزالة المكون
      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }
  // التبعيات: يجب أن يتم تشغيل الـ useEffect عند تغيير أي من هذه القيم
  }, [categories, headerOffset, activeId]);


  // ************ 2. وظيفة التمرير عند الضغط (Handle Click) ************
  const scrollToCategory = (id) => {
    const el = document.getElementById(`cat-detail-${id}`);
    if (!el) return;

    // حساب موضع التمرير: موضع العنصر + ما تم تمريره - ارتفاع الهيدر
    // هذا يضمن توقف التمرير أسفل الـ Header الثابت مباشرة
    const top = el.getBoundingClientRect().top + window.pageYOffset - headerOffset;

    window.scrollTo({
      top: top,
      behavior: "smooth",
    });
  };

  const handleClick = (id) => {
    // عند الضغط، نقوم بتحديث الـ activeId والتمرير فورًا
    setActiveId(id);
    window.dispatchEvent(new CustomEvent("categorySelected", { detail: id }));
    scrollToCategory(id);
  };

  // ************ 3. التصميم (Render) ************
  return (
    <ul className="custom-scrollbar space-y-1 text-lg cursor-pointer h-40 overflow-y-auto">
      {categories.map((cat) => (
        <li
          key={cat.id}
          onClick={() => handleClick(cat.id)}
          className={`flex items-center gap-2 font-normal py-2 px-4 rounded-full w-max transition-colors
            ${
              // يتم تظليل العنصر فقط إذا كان activeId يطابق ID الفئة الحالية
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