'use client';

import { useEffect, useState, useRef } from 'react';

interface Stat {
  number: string;
  label: string;
  suffix?: string;
}

function StatCounter({ stat }: { stat: Stat }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          const numericValue = parseInt(stat.number.replace(/\D/g, '')) || 0;
          let current = 0;
          const increment = numericValue / 60;

          const timer = setInterval(() => {
            current += increment;
            if (current >= numericValue) {
              setCount(numericValue);
              clearInterval(timer);
            } else {
              setCount(Math.floor(current));
            }
          }, 30);

          return () => clearInterval(timer);
        }
      },
      { threshold: 0.3 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [hasAnimated, stat.number]);

  return (
    <div
      ref={ref}
      className="text-center p-8 bg-white rounded-lg border border-gray-200 hover:border-[#D4F157] transition-all duration-300"
    >
      <div className="text-5xl md:text-6xl font-poppins font-bold mb-4 text-[#1a3a3a]">
        {count}
        {stat.suffix}
      </div>
      <p className="text-gray-700 font-medium">{stat.label}</p>
    </div>
  );
}

export default function Stats() {
  const stats: Stat[] = [
    { number: '300', label: 'Brands Elevated', suffix: '+' },
    { number: '50', label: 'Million+ Consumer Decisions Influenced', suffix: 'M+' },
    { number: '80', label: 'Client Retention Rate', suffix: '%' },
    { number: '9', label: 'Years of Excellence', suffix: '+' },
  ];

  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="bg-[#e3e2d5] py-20 md:py-28 relative overflow-hidden">
      {/* Animated Background SVG Elements */}
      <div className="markaworks-floating-bg markaworks-floating-bg-1 absolute top-10 left-10 opacity-20 pointer-events-none" style={{ animation: 'float 6s ease-in-out infinite' }}>
        <svg width="120" height="120" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="60" cy="60" r="50" stroke="#D4F157" strokeWidth="2" opacity="0.5" />
          <path d="M60 10 L80 50 L50 70 L30 40 Z" fill="#D4F157" opacity="0.3" />
          <circle cx="60" cy="60" r="30" stroke="#1a3a3a" strokeWidth="1" opacity="0.3" />
        </svg>
      </div>

      <div className="markaworks-floating-bg markaworks-floating-bg-2 absolute top-1/3 right-12 opacity-20 pointer-events-none" style={{ animation: 'float 8s ease-in-out infinite 1s' }}>
        <svg width="140" height="140" viewBox="0 0 140 140" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="70" cy="70" r="60" stroke="#D4F157" strokeWidth="2" opacity="0.4" />
          <path d="M70 20 L100 60 L70 100 L40 60 Z" fill="#1a3a3a" opacity="0.2" />
          <circle cx="70" cy="70" r="35" stroke="#D4F157" strokeWidth="1" opacity="0.3" />
        </svg>
      </div>

      <div className="markaworks-floating-bg markaworks-floating-bg-3 absolute bottom-20 left-1/4 opacity-20 pointer-events-none" style={{ animation: 'float 7s ease-in-out infinite 0.5s' }}>
        <svg width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="50" cy="50" r="45" stroke="#1a3a3a" strokeWidth="2" opacity="0.3" />
          <polygon points="50,15 85,75 15,75" fill="#D4F157" opacity="0.2" />
          <circle cx="50" cy="50" r="25" stroke="#D4F157" strokeWidth="1" opacity="0.4" />
        </svg>
      </div>

      <div className="markaworks-floating-bg markaworks-floating-bg-4 absolute bottom-1/3 right-1/3 opacity-15 pointer-events-none" style={{ animation: 'float 9s ease-in-out infinite 1.5s' }}>
        <svg width="160" height="160" viewBox="0 0 160 160" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="80" cy="80" r="70" stroke="#D4F157" strokeWidth="2" opacity="0.3" />
          <path d="M80 20 L130 80 L80 140 L30 80 Z" fill="#1a3a3a" opacity="0.15" />
          <circle cx="80" cy="80" r="40" stroke="#1a3a3a" strokeWidth="1" opacity="0.25" />
        </svg>
      </div>

      <div className="container-max relative z-10">
        {/* Section Header */}
        <div className={`mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
          <h2 className="heading-lg max-w-4xl text-[#1a3a3a]">
            Everyone <span className="text-[#D4F157]">designs</span>. We shape how people feel{' '}
            <span className="text-[#D4F157]">your</span> <span className="text-[#D4F157]">brand</span>.
          </h2>
           <p className="text-lg leading-relaxed max-w-4xl mt-6 text-gray-700">
            {/* We&apos;re a 22-person international branding agency team specialized in brand design, packaging and web
            design / development. With offices in London, Dubai, and Istanbul, we&apos;ve worked on projects from
            boutique founders to global product brands. What we&apos;ve built over the years is not just a portfolio
            it&apos;s a culture. */}
            Our brand agency services have shaped standards and inspired new directions in the 
            international branding industry.Our agency takes brands from concept to execution, ensuring every element is intentional, structured, and built to last. Through strategy, design, and marketing, we create meaningful brand experiences that go beyond aesthetics, but build brands that are strong, scalable, and future-ready.
          </p>
        </div>

        {/* Stats Grid with Countdown Animation */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat) => (
            <StatCounter key={stat.label} stat={stat} />
          ))}
        </div>
      </div>
    </section>
  );
}
