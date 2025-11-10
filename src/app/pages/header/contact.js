import { FaWhatsapp } from "react-icons/fa6";
import React, { useState, useEffect } from 'react';


const messages = [
  "تواصل معنا الآن!",
  "هل لديك استفسار ؟",
 
]; 

// مدة ظهور الرسالة (بالمللي ثانية) - 4 ثوانٍ
const DISPLAY_DURATION = 4000; 
// مدة الانتظار قبل ظهور الرسالة التالية (بالمللي ثانية) - 15 ثانية
const HIDE_DURATION = 15000;

const Whats = () => {
    // حالة لتتبع مؤشر الرسالة الحالية
    const [currentMessageIndex, setCurrentMessageIndex] = useState(0);
    // حالة للتحكم في ظهور الرسالة المنبثقة
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        let displayTimer;
        let hideTimer;
        
        // وظيفة مساعدة لتبديل وعرض الرسالة
        const cycleMessage = () => {
            // 1. إظهار الرسالة
            setIsVisible(true);
            
            // 2. تعيين مؤقت لإخفاء الرسالة بعد مدة العرض
            displayTimer = setTimeout(() => {
                setIsVisible(false);
                
                // 3. الانتقال للرسالة التالية في المصفوفة (يعود للأولى بعد الأخيرة)
                const nextIndex = (currentMessageIndex + 1) % messages.length;
                setCurrentMessageIndex(nextIndex);

                // 4. تعيين مؤقت للانتظار قبل بدء الدورة التالية (إظهار الرسالة التالية)
                hideTimer = setTimeout(cycleMessage, HIDE_DURATION);
            }, DISPLAY_DURATION);
        };

        // بدء الدورة الأولى بعد فترة انتظار قصيرة لتجنب الظهور الفوري (3 ثوانٍ مثلاً)
        hideTimer = setTimeout(cycleMessage, 3000); 

        // 5. وظيفة التنظيف: ضرورية لإيقاف المؤقتات عند إزالة المكون من DOM
        return () => {
            clearTimeout(displayTimer);
            clearTimeout(hideTimer);
        };
    }, [currentMessageIndex]); // إعادة تشغيل useEffect عند تغيير مؤشر الرسالة لبدء الدورة الجديدة

    return (
        // استخدام fixed positioning لجعل الأيقونة ثابتة على الشاشة
        <div className="fixed bottom-5 right-5 z-50"> 
            
            {/* الرسالة المنبثقة - تظهر فقط عندما تكون isVisible true */}
            {isVisible && (
                <div className="absolute right-16 bottom-2 p-2 bg-white text-[#322b83] rounded-lg shadow-xl w-max transition-opacity duration-300 transform scale-100 origin-bottom-right">
                    <p className="text-sm font-semibold">{messages[currentMessageIndex]}</p>
                </div>
            )}
            
            {/* أيقونة الواتساب الأصلية */}
            <div className="bg-[#322b83] w-14 h-14 rounded-full flex justify-center items-center">
                {/* تم تعديل الرابط لاستخدام واجهة واتساب المباشرة بدلاً من tel: */}
                <a href="https://wa.me/966555144382" target="_blank" rel="noopener noreferrer">
                    <FaWhatsapp className="text-white cursor-pointer text-3xl md:text-4xl lg:text-4xl font-bold"/>
                </a>
            </div>
        </div>
    );
}

export default Whats;