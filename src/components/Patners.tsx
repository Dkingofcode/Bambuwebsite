'use client';

import { useEffect, useRef, useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export default function ServicesOverview() {
  const sectionRef = useRef<HTMLElement>(null);
  const [scrollOffset, setScrollOffset] = useState(0);
  const [cardIndex, setCardIndex] = useState(0);
  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      const progress = Math.max(0, Math.min(1, (window.innerHeight - rect.top) / (window.innerHeight + rect.height)));
      setScrollOffset(progress * 240);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const serviceGroups = [
    {
      label: 'BUILD',
      title: 'Strategy & Brand',
      description: 'Clarity, identity and communication systems that make the business easier to understand and remember.',
    },
    {
      label: 'LAUNCH',
      title: 'Marketing & Content',
      description: 'Campaigns and content designed to earn attention and move the right audience to action.',
    },
    {
      label: 'GROW',
      title: 'Digital & AI',
      description: 'Digital experiences and practical automation that make the business easier to discover, use and run.',
    },
    {
      label: 'SHOW UP',
      title: 'Production',
      description: 'Film, print, animation, merchandise and events brought into the real world with consistency.',
    },
  ];

  return (
    <section ref={sectionRef} className="overflow-hidden bg-[#052F23] py-20 md:py-32 lg:py-40">
      <div className="container-max max-w-5xl px-6 md:px-12">
        {/* Side-by-side service cards */}
        <div className="relative -mx-6 overflow-visible md:-mx-12">
          <div
            className="flex w-max gap-6 px-6 transition-transform duration-500 ease-out md:gap-8 md:px-12"
            style={{ transform: `translateX(-${scrollOffset + cardIndex * 338}px)` }}
          >
          {serviceGroups.map((group, idx) => (
            <div
              key={idx}
              className="w-[78vw] max-w-[360px] shrink-0 rounded-lg border border-gray-700/50 bg-[#315332] p-8 transition-all duration-300 hover:-translate-y-2 hover:border-[#D4F157] md:w-[330px] md:p-10"
            >
              {/* Label */}
              <div className="text-xs md:text-sm font-poppins font-bold text-[#D0D731] tracking-widest uppercase mb-4 md:mb-6">
                {group.label}
              </div>

              {/* Title */}
              <h3 className="text-2xl md:text-3xl font-poppins font-bold text-[#E1E1D5] mb-4 md:mb-6">
                {group.title}
              </h3>

              {/* Description */}
              <p className="text-gray-400 leading-relaxed text-base">
                {group.description}
              </p>
            </div>
          ))}
          </div>
          <div className="mt-8 flex items-center justify-between px-6 md:px-12">
            <p className="text-sm text-gray-400">{cardIndex + 1} / {serviceGroups.length}</p>
            <div className="flex gap-3">
              <button
                type="button"
                aria-label="View previous service"
                disabled={cardIndex === 0}
                onClick={() => setCardIndex((index) => Math.max(0, index - 1))}
                className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-[#D4F157] text-[#D4F157] transition-all hover:bg-[#D4F157] hover:text-[#1a3a3a] disabled:cursor-not-allowed disabled:opacity-35"
              >
                <ChevronLeft size={20} aria-hidden="true" />
              </button>
              <button
                type="button"
                aria-label="View next service"
                disabled={cardIndex === serviceGroups.length - 1}
                onClick={() => setCardIndex((index) => Math.min(serviceGroups.length - 1, index + 1))}
                className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-[#D4F157] text-[#D4F157] transition-all hover:bg-[#D4F157] hover:text-[#1a3a3a] disabled:cursor-not-allowed disabled:opacity-35"
              >
                <ChevronRight size={20} aria-hidden="true" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
