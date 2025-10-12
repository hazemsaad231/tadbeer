
import Image from "next/image";
import { IoReaderOutline } from "react-icons/io5";
import { IoSearch } from "react-icons/io5";
import { GrContact } from "react-icons/gr";


const data = [
    {
        id: 1,
        title: 'تقديم السيرة الذاتية',
        text: 'هل أنت مهتم ببناء مسيرة مهنية معنا؟ قدم سيرتك الذاتية الآن',
        icon: IoReaderOutline 
    },
    {
        id: 2,
        title: "البحث عن وظيفة",
        text: 'ابحث عن الفرصة المثالية وتقدم إليها بكبسة زر',
        icon: IoSearch
    },
    {
        id: 3,
        title:'التواصل',
        text: 'نسعد بإنضمامك لنا في حال توفر شواغر لدينا ويمكنك التقدم عبر البوابة في الاسفل',
        icon: GrContact
    },
]
export default function Contact() {
  return (
    <div className="flex flex-col bg-white max-w-full">

        {/* الجزء العلوي */}
      <div className="w-full h-[28rem]">
        <Image
          src="/contact.webp"
          alt="الخدمات - صورة"
          width={1600}
          height={600}
          className="w-full object-cover h-full"
          priority
        />
      </div>
{/* الجزء الاوسط */}
   <div className="py-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-8 lg:gap-4 place-content-center place-items-center">
        {data.map((item) => (
          <article key={item.id}>
            <div className="flex flex-col items-center justify-center gap-4 p-4">
              <item.icon size={50} className="text-[#262163]" />
                <h1 className="text-2xl font-bold text-[#262163]">{item.title}</h1>
                <p className="text-lg text-center text-[#262163] w-full lg:w-96 m-auto p-2">{item.text}</p>
            </div>
          </article>
        ))}
      </div>

      {/* الجزء الاسفل */}
      


    </div>
  );
}
