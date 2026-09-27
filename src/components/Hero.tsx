

'use client';

import { useEffect, useState, useRef } from 'react';



export default function BambuHero() {
  const [isVisible, setIsVisible] = useState(false);
   const sectionRef = useRef<HTMLDivElement>(null);
  const [scrollOffset, setScrollOffset] = useState(0);

   // Scroll-linked animation matching Partners section
  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;

      const rect = sectionRef.current.getBoundingClientRect();
      const sectionTop = rect.top;
      const sectionHeight = rect.height;
      const viewportHeight = window.innerHeight;

      // Calculate scroll progress relative to the section
      const scrollProgress = Math.max(0, Math.min(1, (viewportHeight - sectionTop) / (viewportHeight + sectionHeight)));
      
      // Apply animation based on scroll - total portfolio width calculation
      // 22 items * (325px + 24px gap) = 7678px per set, with duplicates = 15356px
      const maxOffset = 7678;
      const offset = scrollProgress * maxOffset;
      setScrollOffset(offset);
    };

    console.log(scrollOffset);

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);


 //const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const proofPoints = [
    ['Think', 'Strategy, positioning and creative direction.'],
    ['Build', 'Identity, websites, content and campaigns.'],
    ['Produce', 'Print, packaging, events and touchpoints.'],
    ['Support', 'Practical systems that help teams move faster.'],
  ];

  return (
    <section id="home" className="flex scroll-mt-[-50px] min-h-[calc(100svh-90px)] items-center justify-center bg-[#052f23] px-0 py-20 sm:py-36 md:py-28 lg:py-32">
      <div className="mx-auto w-full max-w-[1260px] px-[18px]">
        <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="mb-8 md:mb-10">
            <p className="text-sm font-poppins font-extrabold leading-tight text-[#d0d731]">Bambu Agency</p>
          </div>

          {/* Main Headline */}
          <h1 className="mb-8 max-w-[900px] text-[clamp(44px,8vw,90px)] font-poppins font-black leading-[0.98] tracking-[-0.038em] md:mb-10">
            <span className="text-[#E1E1D5]">Creative work that </span>
            <br className="hidden md:block" />
            <span className="text-[#E1E1D5]">moves businesses forward.</span>
          </h1>

          {/* Yellow accent line */}
          {/* <div className="w-20 md:w-24 h-1 bg-[#D4F157] mb-10 md:mb-12" /> */}

          {/* Subheading */}
          <p className="text-base md:text-lg text-[#9ca19d] mb-14 md:mb-16 max-w-3xl leading-relaxed font-normal">
            Strategy, identity, websites, campaigns, print, events and practical AI support for businesses that need clearer thinking and better execution.
          </p>


          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 md:gap-5 py-4">
            <a
              href="#contact"
              className="group relative inline-flex items-center justify-center overflow-hidden rounded-full bg-[#d0d731] px-8 py-3 text-sm font-poppins font-bold text-[#1a3a3a] transition-all duration-500 hover:-translate-y-1 hover:bg-[#E0F77D] hover:shadow-[0_12px_28px_rgba(212,241,87,0.22)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D4F157] focus-visible:ring-offset-2 focus-visible:ring-offset-[#1a3a3a] md:px-10 md:py-4 md:text-base"
            >
              <span className="relative h-5 overflow-hidden md:h-6">
                <span className="block transition-transform duration-500 ease-[cubic-bezier(.2,.8,.2,1)]">Start a project</span>
                {/* <span aria-hidden="true" className="absolute left-0 top-full block text-[#1a3a3a] transition-transform duration-500 ease-[cubic-bezier(.2,.8,.2,1)] group-hover:-translate-y-full">BUILD WITH US&nbsp; →</span> */}
              </span>
            </a>
            <a
              href="#work"
              className="group relative inline-flex items-center justify-center overflow-hidden rounded-full border-2 border-[#d0d731] px-8 py-3 text-sm font-poppins font-bold text-[#d0d731] transition-all duration-500 hover:-translate-y-1 hover:bg-[#D4F157] hover:text-[#1a3a3a] hover:shadow-[0_12px_28px_rgba(212,241,87,0.18)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D4F157] focus-visible:ring-offset-2 focus-visible:ring-offset-[#1a3a3a] md:px-10 md:py-4 md:text-base"
            >
              <span className="relative h-5 overflow-hidden md:h-6">
                <span className="block transition-transform duration-500 ease-[cubic-bezier(.2,.8,.2,1)]">VIEW  WORK</span>
                {/* <span aria-hidden="true" className="absolute left-0 top-full block text-[#1a3a3a] transition-transform duration-500 ease-[cubic-bezier(.2,.8,.2,1)] group-hover:-translate-y-full">VIEW OUR WORK&nbsp; →</span> */}
              </span>
            </a>
          </div>

          <div className="grid max-w-[680px] grid-cols-2 gap-2.5 md:gap-3.5" aria-label="Bambu service summary">
            {proofPoints.map(([title, description], idx) => (
              <div
                key={title}
                className={`rounded-[14px] border border-white/10 bg-white/[0.05] p-3.5 transition-all duration-700 md:p-4 ${
                  isVisible ? 'translate-y-0 opacity-100' : 'translate-y-3 opacity-0'
                }`}
                style={{ transitionDelay: `${idx * 70}ms` }}
              >
                <strong className="block text-base font-extrabold text-[#e1e1d5]">{title}</strong>
                <span className="mt-1.5 block text-[13px] leading-[1.35] text-[#9ca19d]">{description}</span>
              </div>
            ))}
          </div>

          
        </div>
      </div>
    </section>
  );
}
