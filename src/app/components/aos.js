'use client';

import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const AOScroll = ({ children, animation = "fade-up", delay = 0 }) => {
  useEffect(() => {
    AOS.init({ duration: 200, once: true });
  }, []);

  return (
    <div data-aos={animation} data-aos-delay={delay}>
      {children}
    </div>
  );
};

export default AOScroll;
