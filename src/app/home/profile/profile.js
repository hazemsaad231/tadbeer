

// 'use client';

// import Image from "next/image";
// // تأكد من أن هذا المسار صحيح بالنسبة لملف MyTimeline
// import MyTimeline from "./MyTimeline"; 
// import { motion } from "framer-motion"; 

// // بيانات الأرقام والإحصائيات
// const Data = [
//     {
//         id: 1,
//         text: "زيارة",
//         num: 10000 
//     },
//     {
//         id: 2,
//         text: "عميل",
//         num: 542
//     },
//     {
//         id: 3,
//         text: "تقرير",
//         num: 3360
//     },
//     {
//         id: 4,
//         text: "إستشارة",
//         num: 1500
//     }
// ];

// // ----------------------------------------------------
// // تعريف حركات FRAMER MOTION (Variants)
// // ----------------------------------------------------

// // 1. حركة الحاوية (لتطبيق الـ Staggering على الأرقام)
// const containerVariants = {
//     hidden: { opacity: 0 },
//     visible: {
//         opacity: 1,
//         transition: {
//             delayChildren: 0.1, // تأخير قبل بدء ظهور الأرقام
//             staggerChildren: 0.25, // الفارق الزمني بين ظهور كل رقم
//         },
//     },
// };

// // 2. حركة العنصر (لكل رقم وإحصائية)
// const itemVariants = {
//     hidden: { y: 20, opacity: 0 },
//     visible: { y: 0, opacity: 1 },
// };

// // ----------------------------------------------------
// // المكون الرئيسي
// // ----------------------------------------------------

// const ProfileContent = () => {
//     return (
//         <div className="flex flex-col bg-[#262163] w-full py-20 px-4 sm:px-6 lg:px-8 xl:px-12">
            
//             {/* ⭐️ الجزء الأول: الأرقام والإحصائيات (تأثير Staggering) ⭐️ */}
//             <motion.div
//                 className="grid grid-cols-2 md:grid-cols-4 gap-12"
//                 variants={containerVariants}
//                 initial="hidden"
//                 whileInView="visible"
//                 viewport={{ once: true, amount: 0.5 }} // يبدأ عند ظهور 50% من الحاوية
//             >
//                 {Data.map((item) => (
//                     // تطبيق حركة العنصر 'itemVariants'
//                     <motion.div key={item.id} variants={itemVariants}> 
//                         <div className="flex flex-col gap-2 justify-center items-center"> 
//                             <h1 className="text-white text-2xl md:text-3xl lg:text-3xl xl:text-4xl font-bold">{item.num} +</h1>
//                             <p className="text-[#DFC96D] text-3xl md:text-4xl lg:text-4xl xl:text-5xl font-bold">{item.text}</p>
//                         </div>
//                     </motion.div>
//                 ))}
//             </motion.div>

//             <hr className="border-t-2 border-[#DFC96D] w-[90%] m-auto my-8"/>

//             {/* ⭐️ الجزء الثاني: الصورة والـ Timeline (حركة متبادلة من الجوانب) ⭐️ */}
//             <div className="flex flex-col md:flex-row justify-center items-center gap-10 md:gap-6 w-full">

//                 {/* الصورة: Fade In From Left */}
//                 <motion.div
//                     initial={{ opacity: 0, x: -50 }}
//                     whileInView={{ opacity: 1, x: 0 }}
//                     transition={{ duration: 1.0, ease: "easeOut" }}
//                     viewport={{ once: true, amount: 0.3 }}
//                 >
//                     {/* تأكد من أن لديك ملف صورة اسمه 'blog.webp' في مجلد public */}
//                     <Image 
//                         src="/blog.webp" 
//                         alt="logo" 
//                         width={800} 
//                         height={1200} 
//                         className="object-cover w-[400px] h-[400px] sm:w-[400px] sm:h-[400px] md:w-[500px] md:h-[500px]
//                             lg:w-[600px] lg:h-[600px] xl:w-[700px] xl:h-[700px]" 
//                         priority 
//                     />
//                 </motion.div>
            
//                 {/* الـ Timeline: Fade In From Right */}
//                 <motion.div
//                     initial={{ opacity: 0, y: 50 }}
//                     whileInView={{ opacity: 1, y: 0 }}
//                     transition={{ duration: 1.0, ease: "easeOut" }}
//                     viewport={{ once: true, amount: 0.3 }}
//                 >
//                     <MyTimeline/>
//                 </motion.div>
//             </div>
//         </div>
//     );
// }

// export default ProfileContent;


'use client';

import Image from "next/image";
import MyTimeline from "./MyTimeline"; 
import { motion } from "framer-motion"; 

// بيانات الأرقام والإحصائيات
const Data = [
    { id: 1, text: "زيارة", num: 10000 },
    { id: 2, text: "عميل", num: 542 },
    { id: 3, text: "تقرير", num: 3360 },
    { id: 4, text: "إستشارة", num: 1500 }
];

// ----------------------------------------------------
// تعريف حركات FRAMER MOTION (نسخة آمنة للتجاوب)
// ----------------------------------------------------

// 1. حركة الحاوية (Staggering)
const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            delayChildren: 0.1, 
            staggerChildren: 0.15, // تقليل الفارق ليكون أسرع
        },
    },
};

// 2. حركة عنصر الأرقام (Fade In فقط مع إزاحة عمودية خفيفة)
const itemVariants = {
    // ⭐️ (y: 20 آمن نسبياً طالما لا يوجد overflow) ⭐️
    hidden: { y: 20, opacity: 0 }, 
    visible: { y: 0, opacity: 1 },
};

// 3. حركة الجزء الثاني (الصورة والـ Timeline) - Fade & Scale Up
const fadeScaleVariants = {
    // ⭐️ استخدام Scale بدلاً من X لمنع شريط التمرير الأفقي ⭐️
    hidden: { opacity: 0, scale: 0.95 }, 
    visible: { opacity: 1, scale: 1 },
};

// ----------------------------------------------------
// المكون الرئيسي
// ----------------------------------------------------

const ProfileContent = () => {
    return (
        <div className="flex flex-col bg-[#262163] w-full py-20 px-4 sm:px-6 lg:px-8 xl:px-12">
            
            {/* الجزء الأول: الأرقام والإحصائيات */}
            <motion.div
                className="grid grid-cols-2 md:grid-cols-4 gap-12"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
            >
                {Data.map((item) => (
                    <motion.div key={item.id} variants={itemVariants}> 
                        <div className="flex flex-col gap-2 justify-center items-center"> 
                            <h1 className="text-white text-2xl md:text-3xl lg:text-3xl xl:text-4xl font-bold">{item.num} +</h1>
                            <p className="text-[#DFC96D] text-3xl md:text-4xl lg:text-4xl xl:text-5xl font-bold">{item.text}</p>
                        </div>
                    </motion.div>
                ))}
            </motion.div>

            <hr className="border-t-2 border-[#DFC96D] w-[90%] m-auto my-8"/>

            {/* الجزء الثاني: الصورة والـ Timeline */}
            <div className="flex flex-col md:flex-row justify-center items-center gap-10 md:gap-6 w-full">

                {/* الصورة: Fade In & Scale Up */}
                <motion.div
                    variants={fadeScaleVariants} // ⭐️ استخدام الـ Variants الجديدة ⭐️
                    initial="hidden"
                    whileInView="visible"
                    transition={{ duration: 1.0, ease: "easeOut" }}
                    viewport={{ once: true, amount: 0.3 }}
                >
                    <Image 
                        src="/blog.webp" 
                        alt="logo" 
                        width={800} 
                        height={1200} 
                        className="object-cover w-[400px] h-[400px] sm:w-[400px] sm:h-[400px] md:w-[500px] md:h-[500px]
                            lg:w-[600px] lg:h-[600px] xl:w-[700px] xl:h-[700px]" 
                        priority 
                    />
                </motion.div>
            
                {/* الـ Timeline: Fade In & Scale Up */}
                <motion.div
                    variants={fadeScaleVariants} // ⭐️ استخدام الـ Variants الجديدة ⭐️
                    initial="hidden"
                    whileInView="visible"
                    transition={{ duration: 1.0, ease: "easeOut" }}
                    viewport={{ once: true, amount: 0.3 }}
                >
                    <MyTimeline/>
                </motion.div>
            </div>
        </div>
    );
}

export default ProfileContent;