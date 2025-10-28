"use client"; // لو هتستخدمه في client components؛ لو كله server ممكن تشيله

import React from "react";

/**
 * DescriptionRenderer
 * يحوّل نص description إلى عناصر HTML مرتبة.
 */
export default function Description({ text }) {
  if (!text || typeof text !== "string") return null;

  // تقسيم على الفقرات الفارغة (سطر فارغ أو أكتر)
  const paragraphs = text
    .split(/\n{2,}/)
    .map((p) => p.trim())
    .filter(Boolean);

  return (
    <div className="description text-gray-700">
      {paragraphs.map((para, idx) => {
        // كسور الأسطر داخل الفقرة
        const lines = para.split(/\n/).map((l) => l.trim()).filter(Boolean);

        const isNumberedList = lines.every((l) => /^\d+\.\s+/.test(l));
        const isBulletList = lines.every((l) => /^[-•*]\s+/.test(l));

        if (isNumberedList) {
          return (
            <ol key={idx} className="list-decimal ml-6 mb-4 space-y-2">
              {lines.map((line, i) => (
                <li key={i} className="text-lg leading-relaxed">
                  {line.replace(/^\d+\.\s+/, "")}
                </li>
              ))}
            </ol>
          );
        }

        if (isBulletList) {
          return (
            <ul key={idx} className="list-disc ml-6 mb-4 space-y-2">
              {lines.map((line, i) => (
                <li key={i} className="text-lg leading-relaxed">
                  {line.replace(/^[-•*]\s+/, "")}
                </li>
              ))}
            </ul>
          );
        }

        // فقرة عادية — نحافظ على كسور الأسطر بـ <br/>
        if (lines.length > 1) {
          return (
            <p key={idx} className="mb-4 text-lg leading-relaxed">
              {lines.map((line, i) => (
                <React.Fragment key={i}>
                  {line}
                  {i < lines.length - 1 && <br />}
                </React.Fragment>
              ))}
            </p>
          );
        }

        return (
          <p key={idx} className="mb-4 text-lg leading-relaxed">
            {para}
          </p>
        );
      })}
    </div>
  );
}
