'use client';

import { useEffect, useState, useRef } from 'react';

const partners = [
  { id: 1, name: 'Partner 1', logo: 'https://markaworks.com/wp-content/uploads/2025/10/Placeholder-Logo.png' },
  { id: 2, name: 'Partner 2', logo: 'https://markaworks.com/wp-content/uploads/2025/10/Placeholder-Logo-1.png' },
  { id: 3, name: 'Partner 3', logo: 'https://markaworks.com/wp-content/uploads/2025/10/Placeholder-Logo-2.png' },
  { id: 4, name: 'Partner 4', logo: 'https://markaworks.com/wp-content/uploads/2025/10/Placeholder-Logo-3.png' },
  { id: 5, name: 'Partner 5', logo: 'https://markaworks.com/wp-content/uploads/2025/10/Placeholder-Logo-4.png' },
  { id: 6, name: 'Partner 6', logo: 'https://markaworks.com/wp-content/uploads/2025/10/Placeholder-Logo-5.png' },
  { id: 7, name: 'Partner 7', logo: 'https://markaworks.com/wp-content/uploads/2025/10/Placeholder-Logo-6.png' },
  { id: 8, name: 'Partner 8', logo: 'https://markaworks.com/wp-content/uploads/2025/10/Placeholder-Logo-7.png' },
  { id: 9, name: 'Partner 9', logo: 'https://markaworks.com/wp-content/uploads/2025/10/Placeholder-Logo-8.png' },
  { id: 10, name: 'Partner 10', logo: 'https://markaworks.com/wp-content/uploads/2025/10/Placeholder-Logo-9.png' },
];

export default function Partners() {
  const [scrollOffset, setScrollOffset] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;

      const rect = sectionRef.current.getBoundingClientRect();
      const sectionTop = rect.top;
      const sectionHeight = rect.height;
      const viewportHeight = window.innerHeight;

      // Calculate scroll progress relative to the section
      const scrollProgress = Math.max(0, Math.min(1, (viewportHeight - sectionTop) / (viewportHeight + sectionHeight)));
      
      // Apply animation based on scroll - moves left as you scroll down
      const offset = scrollProgress * 615.2;
      setScrollOffset(offset);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="bg-[#D9DECC] py-20 md:py-28" ref={sectionRef}>
      <div className="container-max">
        <h3 className="text-3xl md:text-4xl font-poppins font-bold text-[#1a3a3a] mb-12 text-center">
          Tech We Build With
        </h3>

        {/* Partners Carousel */}
        <div className="markaworks-partners-track-container relative overflow-hidden">
          <div
            className="markaworks-partners-track flex gap-8 transition-transform duration-300"
            style={{
              transform: `translateX(-${scrollOffset}px)`,
              transition: 'transform 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
            }}
          >
            {/* First set of partners */}
            {partners.map((partner) => (
              <div
                key={`${partner.id}-first`}
                className="markaworks-partner-item flex-shrink-0 w-32 h-32 rounded-lg bg-white flex items-center justify-center overflow-hidden"
              >
                <img
                  src={partner.logo}
                  alt={partner.name}
                  className="w-24 h-24 object-contain"
                  loading="lazy"
                />
              </div>
            ))}

            {/* Second set of partners for infinite loop */}
            {partners.map((partner) => (
              <div
                key={`${partner.id}-second`}
                className="markaworks-partner-item flex-shrink-0 w-32 h-32 rounded-lg bg-white flex items-center justify-center overflow-hidden"
              >
                <img
                  src={partner.logo}
                  alt={partner.name}
                  className="w-24 h-24 object-contain"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
