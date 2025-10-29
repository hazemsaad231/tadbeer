'use client'

import Image from "next/image";
import { IoReaderOutline, IoSearch } from "react-icons/io5";
import { GrContact } from "react-icons/gr";
import { useForm } from "react-hook-form";
import { IoIosSend } from "react-icons/io";
import axios from "axios";
import bg from "../../../public/contact.webp";
import toast from "react-hot-toast";
import { useState } from "react";

const data = [
  {
    id: 1,
    title: 'تقديم السيرة الذاتية',
    text: 'هل أنت مهتم ببناء مسيرة مهنية معنا؟ قدم سيرتك الذاتية الآن',
    icon: IoReaderOutline,
  },
  {
    id: 2,
    title: "البحث عن وظيفة",
    text: 'ابحث عن الفرصة المثالية وتقدم إليها بكبسة زر',
    icon: IoSearch,
  },
  {
    id: 3,
    title: 'التواصل',
    text: 'نسعد بإنضمامك لنا في حال توفر شواغر لدينا ويمكنك التقدم عبر البوابة في الاسفل',
    icon: GrContact,
  },
];

export default function Contact() {
  const { register, handleSubmit, formState: { errors }, reset } = useForm();
  const [submitting, setSubmitting] = useState(false);

  const onSubmit = async (formData) => {
    try {
      setSubmitting(true);

      const fd = new FormData();
      fd.append('name', formData.name || '');
      fd.append('email', formData.email || '');
      fd.append('phone', formData.phone || '');
      fd.append('about', formData.about || '');

      // formData.cv is a FileList when registered normally
      if (formData.cv && formData.cv.length > 0) {
        fd.append('cv', formData.cv[0]); // تأكد إن اسم الحقل 'cv' يطابق السيرفر
      }

      // لو السيرفر عايز حقول تانية ضيفهم هنا

      const response = await axios.post(
        'https://tadbeer.wj.edu.sa/public/api/applicants',
        fd,
        {
          headers: {
            // axios هيضبط الـ boundary لو متخلي header فاضي، بس محددته هنا عشان وضوح
            'Content-Type': 'multipart/form-data',
          },
        }
      );

      console.log('response', response.data || response);
      toast.success('تم الارسال بنجاح');
      reset();
    } catch (error) {
      console.error('submit error', error.response?.data || error);
      // لو الـ API بيرجع رسائل في error.response.data نعرضها للمستخدم لو حبيت
      toast.error('لم يتم الارسال بنجاح');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="flex flex-col bg-white max-w-full">
      {/* الجزء العلوي */}
      <div className="relative w-full h-[28rem]">
        <Image
          src={bg}
          alt="الخدمات - صورة"
          fill
          placeholder="blur"
          className="object-cover"
          priority
        />
      </div>

      {/* الجزء الاوسط */}
      <div className="py-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-8 lg:gap-4 place-content-center place-items-center">
        {data.map((item) => (
          <article key={item.id}>
            <div className="flex flex-col items-center justify-center gap-4 p-4">
              {/* icon as component */}
              <item.icon size={50} className="text-[#262163]" />
              <h1 className="text-2xl font-bold text-[#262163]">{item.title}</h1>
              <p className="text-lg text-center text-[#262163] w-full lg:w-96 m-auto p-2">{item.text}</p>
            </div>
          </article>
        ))}
      </div>

      {/* الجزء الاسفل */}
      <div className="flex justify-center items-center m-auto py-10">
        <form onSubmit={handleSubmit(onSubmit)} encType="multipart/form-data" className="w-full">
          <div className="grid grid-cols-1 place-items-center gap-4 p-2 md:p-6 lg:p-10 w-full md:w-[700px] lg:w-[750px] xl:w-[800px]">

            {/* الاسم */}
            <div className="flex flex-col w-full text-gray-700">
              <label htmlFor="name">الاسم</label>
              <input
                id="name"
                type="text"
                placeholder='اكتب الاسم رباعي '
                className="rounded-md w-full p-2 bg-white border border-gray-500"
                {...register('name', { required: true })}
              />
              {errors.name && <span className="text-red-500 mt-2">⚠ الاسم مطلوب</span>}
            </div>

            {/* البريد الالكتروني */}
            <div className="flex flex-col w-full text-gray-700">
              <label htmlFor="email">البريد الالكتروني</label>
              <input
                id="email"
                type="email"
                placeholder="البريد الالكتروني"
                className="rounded-md w-full p-2 bg-white border border-gray-500"
                {...register('email', { required: true })}
              />
              {errors.email && <span className="text-red-500 mt-2">⚠ البريد الالكتروني مطلوب</span>}
            </div>

            {/* الجوال و السيرة الذاتية */}
            <div className="flex flex-col md:flex-row my-2 w-full m-auto gap-6">

              <div className="flex flex-col w-full text-gray-700">
                <label htmlFor="phone">رقم الجوال</label>
                <input
                  id="phone"
                  type="text"
                  placeholder="رقم الجوال "
                  className="rounded-md w-full p-2 bg-white border border-gray-500"
                  {...register('phone', { required: true })}
                />
                {errors.phone && <span className="text-red-500 mt-2">⚠ رقم الجوال مطلوب</span>}
              </div>

              <div className="flex flex-col w-full text-gray-700">
                <label htmlFor="cv" className="font-medium">ارفع السيرة الذاتية</label>
                <input
                  id="cv"
                  type="file"
                  accept=".pdf,.doc,.docx"
                  className="rounded-md w-full p-2 bg-white border border-gray-500 file:py-1 file:cursor-pointer file:px-4 file:rounded-md file:border-0 file:text-white file:bg-gray-700 file:mx-2 hover:file:bg-gray-800 transition-all"
                  {...register('cv', { required: true })}
                />
                {errors.cv && <span className="text-red-500 mt-2">⚠ سيرة ذاتية مطلوبة</span>}
              </div>
            </div>

            {/* نبذة عن نفسك */}
            <div className="flex flex-col w-full mt-4 text-gray-700">
              <label htmlFor="about">حدثنا عن نفسك </label>
              <textarea
                id="about"
                placeholder="حدثنا عن نفسك"
                className="rounded-md w-full h-32 bg-white border border-gray-500 p-2 resize-none"
                {...register('about', { required: true })}
              />
              {errors.about && <span className="text-red-500 mt-2">⚠ اكتب نبذة عن نفسك</span>}
            </div>

            {/* الزر */}
            <div className="flex justify-center w-full">
              <button
                type="submit"
                disabled={submitting}
                className={`flex justify-center items-center gap-1 ${submitting ? 'opacity-60 cursor-not-allowed' : ''} bg-[#DFC96D] text-[#262163] hover:bg-[#262163] hover:text-[#DFC96D] font-bold text-xl cursor-pointer w-full py-3 rounded-md mt-10`}
              >
                <IoIosSend size={30} />
                <h1>ارسال</h1>
              </button>
            </div>

          </div>
        </form>
      </div>
    </div>
  );
}
