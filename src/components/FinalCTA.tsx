'use client';

import { useEffect, useState } from 'react';

export default function FinalCTA() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="bg-[#ededda] py-20 md:py-28 relative overflow-hidden">
      <div className="container-max">
        <div className="relative max-w-5xl mx-auto">
          {/* Main Card */}
          <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="bg-white rounded-2xl p-12 md:p-16 border border-gray-100 shadow-lg grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              {/* Left Content */}
              <div className="space-y-8">
                <h2 className="heading-lg text-[#1a3a3a]">
                  Let&apos;s make the work they&apos;ll copy.
                </h2>

                {/* CTA Link with Arrow */}
                <a
                  href="/contact-us/"
                  className="inline-flex items-center gap-4 px-8 py-4 bg-[#E7B621] text-[#1a3a3a] rounded-full font-poppins font-bold hover:bg-[#E0F77D] transition-all duration-300 group"
                >
                  <span>Talk to an expert now</span>
                  <div className="group-hover:translate-x-2 transition-transform duration-300">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M5 12h14"></path>
                      <path d="m12 5 7 7-7 7"></path>
                    </svg>
                  </div>
                </a>
              </div>

              {/* Right Images */}
              <div className="flex gap-4">
                <img
                  src="https://markaworks.com/wp-content/uploads/2025/10/Stat-1.png"
                  alt="Work Example 1"
                  className="flex-1 rounded-lg object-cover h-64 md:h-80"
                />
                <img
                  src="https://markaworks.com/wp-content/uploads/2025/10/Stat-2.png"
                  alt="Work Example 2"
                  className="flex-1 rounded-lg object-cover h-64 md:h-80"
                />
              </div>
            </div>

            {/* Decorative Pattern */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-[#E7B621] rounded-full opacity-10 blur-3xl -z-10" />
            <div className="absolute bottom-0 left-0 w-72 h-72 bg-[#E7B621] rounded-full opacity-5 blur-3xl -z-10" />
          </div>
        </div>
      </div>
    </section>
  );
}
