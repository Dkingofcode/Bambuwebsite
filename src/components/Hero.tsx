'use client';

import { useEffect, useState, useRef } from 'react';

const portfolioItems = [
  { id: 1, title: 'HOLME Home Luxury Fragrance', image: 'https://markaworks.com/wp-content/uploads/2026/01/holme_cover-1.gif', href: '/portfolio/holme/' },
  { id: 2, title: 'BARS Brand Identity', image: 'https://markaworks.com/wp-content/uploads/2026/01/bars_presentation_01.webp', href: '/projects/bars%20company.html' },
  { id: 3, title: 'GL Peptides', image: 'https://markaworks.com/wp-content/uploads/2026/01/glpeptides01.jpg', href: '/projects/glpeptides/' },
  { id: 4, title: 'LA MAMA Coffee Brand', image: 'https://markaworks.com/wp-content/uploads/2026/02/lamama_presentation-04.webp', href: '/portfolio/la-mama/' },
  { id: 5, title: 'Rauph', image: 'https://markaworks.com/wp-content/uploads/2025/12/rauph_presentation_Artboard-1.jpg', href: '/projects/rauph/' },
  { id: 6, title: 'Rauph UI', image: 'https://mir-s3-cdn-cf.behance.net/project_modules/1400_webp/cca059240284095.693af391570c1.jpg', href: '/projects/rauph-ui/' },
  { id: 7, title: 'VOXO', image: 'https://mir-s3-cdn-cf.behance.net/project_modules/1400_webp/ae0691239267949.6925cb3a5edb7.jpg', href: '/portfolio/voxo/' },
  { id: 8, title: 'MUUM', image: 'https://mir-s3-cdn-cf.behance.net/project_modules/1400_webp/1aa9de239201603.692491611b8cf.jpg', href: '/portfolio/muum/' },
  { id: 9, title: 'MUUM UI', image: 'https://mir-s3-cdn-cf.behance.net/project_modules/1400_webp/63c070239041909.69209fd51f130.jpg', href: '/portfolio/muum-ui/' },
  { id: 10, title: 'Birtz', image: 'https://markaworks.com/wp-content/uploads/2025/11/Blitz01.jpg', href: '/portfolio/birtz/' },
  { id: 11, title: 'YU', image: 'https://markaworks.com/wp-content/uploads/2025/10/01-1.jpg', href: '/projects/yu/' },
  { id: 12, title: 'Snax', image: 'https://markaworks.com/wp-content/uploads/2025/10/Snax_01.jpg', href: '/projects/snax/' },
  { id: 13, title: 'Umri', image: 'https://markaworks.com/wp-content/uploads/2025/10/Umri_01.jpg', href: '/projects/umri/' },
  { id: 14, title: 'Elevated', image: 'https://markaworks.com/wp-content/uploads/2025/10/Elevated_01.jpg', href: '/projects/elevated/' },
  { id: 15, title: 'Skindeep', image: 'https://markaworks.com/wp-content/uploads/2025/10/1-1920x1549.jpg', href: '/projects/skindeep/' },
  { id: 16, title: 'Pheros', image: 'https://markaworks.com/wp-content/uploads/2025/10/21-1920x1518.jpg', href: '/projects/pheros/' },
  { id: 17, title: 'Glowie', image: 'https://markaworks.com/wp-content/uploads/2025/10/1-1920x1464.jpg', href: '/projects/glowie/' },
  { id: 18, title: 'League&', image: 'https://markaworks.com/wp-content/uploads/2024/11/1-1-1920x1267.jpg', href: '/projects/leagueand/' },
  { id: 19, title: 'Viscerex', image: 'https://markaworks.com/wp-content/uploads/2024/11/1-1920x1475.jpg', href: '/projects/viscerex/' },
  { id: 20, title: 'Resetcare', image: 'https://markaworks.com/wp-content/uploads/2024/09/17-1920x2371.jpg', href: '/projects/resetcare/' },
  { id: 21, title: 'MoreBabies / Branding', image: 'https://markaworks.com/wp-content/uploads/2024/08/1-1-1920x1356.jpg', href: '/projects/morebabies-branding/' },
  { id: 22, title: 'Awelly / UI Design', image: 'https://markaworks.com/wp-content/uploads/2024/08/awellycover-1920x1535.jpg', href: '/projects/awelly-ui-design/' },
];

const languages = ['Hallo', 'Bonjour', 'Ciao', 'Hola', 'こんにちは'];

export default function Hero() {
  const [currentLanguage, setCurrentLanguage] = useState(0);
  const [scrollOffset, setScrollOffset] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentLanguage((prev) => (prev + 1) % languages.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

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

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="bg-[#325432] py-20 md:py-28">
      <div className="container-max">
        {/* Top Section - Text & Description */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20 items-start">
          <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="mb-8">
              <p className="text-2xl md:text-3xl font-poppins font-semibold text-white mb-6 h-12">
                <span className="text-[#E7B621]">{languages[currentLanguage]}</span>
              </p>
            </div>

            <h1 className="heading-lg leading-tight mb-6">
              <span className="text-white">First </span>
              <span className="text-[#E7B621]">impression</span>
              <span className="text-white"> wins.</span>
              <br />
              <span className="text-white">We build what </span>
              <span className="text-[#E7B621]">memory</span>
              <span className="text-white"> pins.</span>
            </h1>
          </div>

          <div className={`transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <p className="text-body text-lg leading-relaxed mb-8">
              As an international branding agency, we create designs that trigger emotion, shift behavior, and convert across global markets. With presence in London, Dubai, and beyond.
            </p>
            <a
              href="#contact"
              className="inline-block px-8 py-3 bg-[#E7B621] text-[#11211F] font-poppins font-bold rounded-full hover:bg-[#E0F77D] transition-all duration-300 transform hover:scale-105"
            >
              Let&apos;s build yours
            </a>
          </div>
        </div>

        {/* Portfolio Gallery Section */}
        <div className="markaworks-portfolio-gallery-wrapper relative w-full h-96" ref={sectionRef}>
          <div className="markaworks-gallery-nav markaworks-gallery-nav-left absolute left-0 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-[#E7B621] text-[#11211F] flex items-center justify-center">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>

          <div className="markaworks-portfolio-gallery relative overflow-hidden h-full flex items-center">
            <div
              className="markaworks-portfolio-track flex gap-6"
              style={{
                transform: `translateX(-${scrollOffset}px)`,
                transition: 'transform 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
              }}
            >
              {portfolioItems.map((item) => (
                <a
                  key={`${item.id}-first`}
                  href={item.href}
                  className="markaworks-portfolio-item flex-shrink-0 rounded-lg overflow-hidden group cursor-pointer relative"
                  style={{
                    width: '325px',
                    minWidth: '325px',
                    height: '325px',
                    minHeight: '325px',
                  }}
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover transition-all duration-300 group-hover:blur-sm"
                    loading="lazy"
                  />
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300"></div>
                  {/* View Button with Saturn Ring */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="relative">
                      {/* Saturn Ring */}
                      <div className="absolute inset-0 rounded-full border-2 border-[#E7B621] opacity-0 group-hover:opacity-100 transition-all duration-300"
                        style={{
                          width: '120px',
                          height: '120px',
                          top: '50%',
                          left: '50%',
                          transform: 'translate(-50%, -50%)',
                        }}
                      ></div>
                      {/* Button */}
                      <button
                        className="relative w-24 h-24 rounded-full bg-[#E7B621] text-[#325432] flex items-center justify-center font-poppins font-bold text-sm opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-[#E0F77D]"
                        style={{
                          boxShadow: '0 0 20px rgba(212, 241, 87, 0.3)',
                        }}
                      >
                        View
                      </button>
                    </div>
                  </div>
                </a>
              ))}

              {portfolioItems.map((item) => (
                <a
                  key={`${item.id}-second`}
                  href={item.href}
                  className="markaworks-portfolio-item flex-shrink-0 rounded-lg overflow-hidden group cursor-pointer relative"
                  style={{
                    width: '325px',
                    minWidth: '325px',
                    height: '325px',
                    minHeight: '325px',
                  }}
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover transition-all duration-300 group-hover:blur-sm"
                    loading="lazy"
                  />
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300"></div>
                  {/* View Button with Saturn Ring */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="relative">
                      {/* Saturn Ring */}
                      <div className="absolute inset-0 rounded-full border-2 border-[#E7B621] opacity-0 group-hover:opacity-100 transition-all duration-300"
                        style={{
                          width: '120px',
                          height: '120px',
                          top: '50%',
                          left: '50%',
                          transform: 'translate(-50%, -50%)',
                        }}
                      ></div>
                      {/* Button */}
                      <button
                        className="relative w-24 h-24 rounded-full bg-[#E7B621] text-[#11211F] flex items-center justify-center font-poppins font-bold text-sm opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-[#E0F77D]"
                        style={{
                          boxShadow: '0 0 20px rgba(212, 241, 87, 0.3)',
                        }}
                      >
                        View
                      </button>
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </div>

          <div className="markaworks-gallery-nav markaworks-gallery-nav-right absolute right-0 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-[#E7B621] text-[#11211F] flex items-center justify-center">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}
