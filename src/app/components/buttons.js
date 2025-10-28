'use client';

import { useState } from 'react';
import { FaFacebook, FaLinkedin, FaTelegram, FaWhatsapp} from 'react-icons/fa';

const Buttons = ({ url, title }) => {
  const [copied, setCopied] = useState(false);


  const pageUrl = (typeof window !== 'undefined' && !url) ? window.location.href : url;
  const encodedUrl = encodeURIComponent(pageUrl || '');
  const encodedTitle = encodeURIComponent(title || '');

  const handlers = {
    facebook: () => {
      const href = `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`;
      window.open(href, '_blank', 'noopener,noreferrer');
    },
    linkedin: () => {
      const href = `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`;
      window.open(href, '_blank', 'noopener,noreferrer');
    },
    telegram: () => {
      const href = `https://t.me/share/url?url=${encodedUrl}&text=${encodedTitle}`;
      window.open(href, '_blank', 'noopener,noreferrer');
    },
    whatsapp: () => {
      const href = `https://api.whatsapp.com/send?text=${encodedTitle}%20${encodedUrl}`;
      window.open(href, '_blank', 'noopener,noreferrer');
    },
    copy: async () => {
      try {
        await navigator.clipboard.writeText(pageUrl);
        setCopied(true);
        setTimeout(() => setCopied(false), 1500);
      } catch (e) {
        window.prompt('انسخ الرابط من هنا:', pageUrl);
      }
    },
    nativeShare: async () => {
      if (navigator.share) {
        try {
          await navigator.share({ title, url: pageUrl });
        } catch (err) {
         
        }
      } else {
        handlers.copy();
      }
    },
  };

  const Icons = [
    { id: 1, icon: <FaFacebook />, onClick: handlers.facebook },
    { id: 2, icon: <FaLinkedin />, onClick: handlers.linkedin },
    { id: 3, icon: <FaTelegram />, onClick: handlers.telegram },
    { id: 4, icon: <FaWhatsapp />, onClick: handlers.whatsapp },
  ];

  return (
    <div>
      <h1 className="text-lg font-extrabold mb-3 text-white">شارك هذه الخدمة مع من تحب</h1>

      <div className="flex items-center">
        {Icons.map((it) => (
          <button
            key={it.id}
            onClick={it.onClick}
            className="p-3 bg-[#DFC96D] rounded-lg shadow-xl text-2xl text-white hover:scale-110 transition-transform duration-200
            ease-in-out cursor-pointer"
            aria-label="share"
          >
            {it.icon}
          </button>
        ))}
      
      </div>
    </div>
  );
};

export default Buttons;
