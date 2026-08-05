'use client';

import { useEffect, useState } from 'react';

export default function CTASection() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="markaworks-cta-section bg-[#ededda] py-20 md:py-28">
      <div className="container-max">
        <div className={`text-center transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="mb-6">
            <p className="text-lg md:text-xl text-gray-700 font-poppins">Need a better branding?</p>
          </div>
          <h2 className="heading-lg mb-12 text-[#052F23]">
            Start a project today
          </h2>
          <a
            href="#contact"
            className="inline-block px-10 py-4 bg-[#E7B621] text-[#052F23] font-poppins font-bold rounded-full hover:bg-[#E0F77D] transition-all duration-300 transform hover:scale-105 text-lg"
          >
            Start a project
          </a>
        </div>
      </div>
    </section>
  );
}
