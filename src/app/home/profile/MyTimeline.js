'use client';

import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

const Data = [
  {
    title: "التطوير المالي",
    text: "نساعدك في تطوير الأداء المالي لمنشأتك القائمة، مما يمكنها من زيادة أرباحها وعوائدها، فبعد تشخيص طبيعة وحجم عمل منشأتك، نقدم لكم الخدمة التي تحتاجها.",
  },
  {
    title: "التقنية المتقدمة",
    text: "نقدم لكم استشارات وخدمات مالية وإدارية، بمعايير عالمية، وتقنيات متقدمة، ملتزمة بقيمها الأصيلة.",
  },
  {
    title: "التحليل الإداري",
    text: "نساعدك على تحسين الأداء الإداري عن طريق تحليل نقاط القوة والضعف وتطبيق حلول عملية فعّالة.",
  },
];

export default function MyTimeline() {
  return (
    <div>
      <div className="max-w-3xl">

        <VerticalTimeline
          lineColor="#262163"
          layout="1-column-right"
        >
          {Data.map((data, index) => (
            <VerticalTimelineElement
              key={index}
              contentStyle={{
                background: "white",
                boxShadow: "0 3px 10px rgba(0,0,0,0.1)",
                borderRadius: "12px",
                textAlign: "right",
              }}
              contentArrowStyle={{ borderRight: "7px solid white" }}
              iconStyle={{
                background: "#262163",
                color: "#fff",
                boxShadow: "0 0 0 4px #e0e0e0",
              }}
            >
              <div className="flex flex-col gap-2">
                <h1 className="text-[#262163] text-2xl font-bold">{data.title}</h1>
                <p className="text-gray-600 text-lg leading-relaxed">{data.text}</p>
              </div>
            </VerticalTimelineElement>
          ))}
        </VerticalTimeline>
      </div>
    </div>
  );
}
