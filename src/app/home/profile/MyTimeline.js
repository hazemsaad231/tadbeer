

'use client';

import React from "react";
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import 'react-vertical-timeline-component/style.min.css';

const Data = [
  {
    title: "التطوير المالي",
    text: "نساعدك في تطوير الأداء المالي لمنشأتك القائمة، مما يمكنها من زيادة أرباحها وعوائدها، فبعد تشخيص طبيعة وحجم عمل منشأتك، نقدم لكم الخدمة التي تحتاجها.",
    color: "#d8bf63", // gold
  },
  {
    title: "إستشارات الإستثمار",
    text: "إن كانت لديك طموحات توسعية، أو تبحث عن فرص استثمارية، فلدينا إدارة متخصّصة وخبرة وعلاقات تؤهلك في آفاقك الاستثمارية.",
    color: "#d8bf63",
  },
  {
    title: "هيئة تدبير الإستشارية",
    text: "يتم تصميم الخدمات التي نقدمها في تدبير المتخصّصة وإعداد معاييرها، ثم مراجعتها وتطويرها باستمرار من قبل نخبة من المتخصصين.",
    color: "#ffffff",
  },
];

export default function MyTimeline() {
  return (
    <div className="relative">
      <div className="max-w-4xl mx-auto text-center my-5" dir="rtl">
        <h2 className="text-white text-3xl md:text-3xl lg:text-3xl xl:text-4xl font-extrabold">
          بماذا نساعدك في مشروعك؟
        </h2>
      </div>

      <div className="max-w-3xl mx-auto relative" dir="rtl">
        <style jsx global>{`
          /* تخصيص الخط العمودي */
          .vertical-timeline::before {
            background: linear-gradient(to bottom, #d8bf63 0%, #d8bf63 60%, #ffffff 60%, #ffffff 100%) !important;
            width: 3px !important;
     border-radius: 2px;
     height: 95% !important;
     top: 29px !important;
          }

        
        `}</style>

        <VerticalTimeline layout="1-column-right" animate={false}>
          {Data.map((item, idx) => (
            <VerticalTimelineElement
              key={idx}
              contentStyle={{
                background: "white",
                borderRadius: "12px",
                textAlign: "right",
                boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
                padding: "24px",
              }}
              contentArrowStyle={{ borderRight: "12px solid white" }}
              iconStyle={{
                background: item.color,
                color: "#000",
                boxShadow: "0 0 0 3px #2a2663",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
              icon={
                <div className="w-3 h-3 rounded-full bg-transparent border border-[#2a2663]" />
              }
            >
              <h3 className={`text-[#2a2663] text-2xl font-bold mb-2`}>
                {item.title}
              </h3>
              <p className="text-gray-600 text-lg leading-relaxed">{item.text}</p>
            </VerticalTimelineElement>
          ))}
        </VerticalTimeline>
      </div>
    </div>
  );
}
