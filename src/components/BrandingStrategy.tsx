'use client';

import { useEffect, useState, useRef } from 'react';

interface Service {
  name: string;
  description: string;
}

interface ServiceCategory {
  title: string;
  services: Service[];
}

const serviceCategories: ServiceCategory[] = [
  {
    title: 'Brand Strategy',
    services: [
      { name: 'Brand Positioning', description: 'Clarifying where the brand stands in the market, defining the promise, value, and differentiation.' },
      { name: 'Audience & Persona Analysis', description: 'Understanding who we are speaking to is the foundation of every strong brand.' },
      { name: 'Naming & Story Building', description: 'Crafting names with meaning and stories with depth that evoke emotion.' },
    ],
  },
  {
    title: 'Packaging Design',
    services: [
      { name: 'Packaging Strategy', description: 'Where creativity meets precision, turning every box and label into a story.' },
      { name: 'Structural Design', description: 'Engineering packaging forms that balance functionality and aesthetics.' },
      { name: 'Label & Graphics Design', description: 'Designing detailed, impactful labels that stand out on every shelf.' },
    ],
  },
  {
    title: 'Web & Digital Design',
    services: [
      { name: 'UI/UX Design', description: 'Designing digital experiences that are intuitive, engaging, and brand-aligned.' },
      { name: 'Responsive Web Design', description: 'Turning design into reality through seamless, responsive websites.' },
      { name: 'Mobile App Design', description: 'Designing mobile interfaces that blend usability and aesthetics.' },
    ],
  },
  {
    title: 'Marketing Materials',
    services: [
      { name: 'Pitch Deck Design', description: 'Crafting compelling visuals and layouts that elevate storytelling.' },
      { name: 'Sales Collateral', description: 'Designing materials that extend the brand experience and drive conversion.' },
      { name: 'Email Campaign Design', description: 'Designing visually engaging email campaigns that nurture connection.' },
    ],
  },
  {
    title: 'Support & Retainer',
    services: [
      { name: 'Dedicated Design Team', description: 'A specialized team that understands your brand and ensures consistency.' },
      { name: 'Ongoing Brand Management', description: 'Supporting your brand\'s evolution as your business grows.' },
      { name: 'Design Extensions', description: 'Creating new designs for products, services, and campaigns.' },
    ],
  },
];

export default function BrandingStrategy() {
  const [currentIndex, setCurrentIndex] = useState(3);
  const [rotation, setRotation] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);

  // Auto-rotate content every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % serviceCategories.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  // Scroll-linked rotation
  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;

      const rect = sectionRef.current.getBoundingClientRect();
      const sectionTop = rect.top;
      const sectionHeight = rect.height;
      const viewportHeight = window.innerHeight;

      const scrollProgress = Math.max(0, Math.min(1, (viewportHeight - sectionTop) / (viewportHeight + sectionHeight)));
      setRotation(scrollProgress * 360);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const category = serviceCategories[currentIndex];

  return (
    <section ref={sectionRef} className="bg-[#E1E1D5] py-20 md:py-28 relative overflow-hidden">
      <div className="container-max">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left - Rotating Spin Wheel Image */}
          <div className="relative h-96 flex items-center justify-center">
            {/* Rotating Spin Wheel */}
            <div
              style={{
                transform: `rotate(${rotation}deg)`,
                transition: 'transform 0.05s linear',
              }}
              className="relative w-80 h-80"
            >
              <img
                src="/SpinshweelICOn.png"
                alt="Spin wheel"
                className="w-full h-full object-contain"
              />
            </div>

            {/* Auto-rotating inner circle indicator */}
            <div
              className="absolute w-32 h-32 rounded-full flex items-center justify-center text-center"
              style={{
                animation: 'spin 6s linear infinite',
              }}
            >
              <div className="text-sm font-bold text-[#052F23] bg-white rounded-full w-28 h-28 flex items-center justify-center">
                {String(currentIndex + 1).padStart(2, '0')} / {String(serviceCategories.length).padStart(2, '0')}
              </div>
            </div>
          </div>

          {/* Right - Content Carousel */}
          <div className="space-y-8">
            <div>
              <h2 className="heading-lg mb-4 text-[#052F23]">
                {category.title}
              </h2>
              <div className="h-1 w-20 bg-[#E7B621] rounded-full" />
            </div>

            {/* Services List */}
            <div className="space-y-6">
              {category.services.map((service, idx) => (
                <div
                  key={idx}
                  className="border-l-4 border-[#E7B621] pl-6 py-2 hover:pl-8 transition-all duration-300"
                >
                  <h3 className="text-lg font-poppins font-bold text-[#052F23] mb-2">
                    {service.name}
                  </h3>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    {service.description}
                  </p>
                </div>
              ))}
            </div>

            {/* Navigation Arrows */}
            <div className="flex gap-4 pt-8">
              <button
                onClick={() => setCurrentIndex((prev) => (prev - 1 + serviceCategories.length) % serviceCategories.length)}
                className="w-12 h-12 rounded-full border-2 border-[#E7B621] text-[#052F23] flex items-center justify-center hover:bg-[#E7B621] transition-all duration-300"
                aria-label="Previous category"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                  <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
              <button
                onClick={() => setCurrentIndex((prev) => (prev + 1) % serviceCategories.length)}
                className="w-12 h-12 rounded-full border-2 border-[#E7B621] text-[#052F23] flex items-center justify-center hover:bg-[#E7B621] transition-all duration-300"
                aria-label="Next category"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                  <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
