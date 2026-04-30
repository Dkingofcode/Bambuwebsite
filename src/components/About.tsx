
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
      className="text-center p-8 bg-[#0f2a2a] rounded-lg border border-white/10 hover:border-[#D4F157] transition-all duration-300"
    >
      <div className="text-5xl md:text-6xl font-poppins font-bold mb-4 text-[#D4F157]">
        {count}
        {stat.suffix}
      </div>
      <p className="text-[#b0b0b0] font-medium">{stat.label}</p>
    </div>
  );
}

export default function About() {
  const stats: Stat[] = [
    { number: '300', label: 'Brands Elevated', suffix: '+' },
    { number: '50', label: 'Million+ Consumer Decisions Influenced', suffix: 'M+' },
    { number: '80', label: 'Client Retention Rate', suffix: '%' },
    { number: '9', label: 'Years of Excellence', suffix: '+' },
  ];

  return (
    <section id="about" className="section-spacing bg-[#1a3a3a]">
      <div className="container-max">
        {/* Section Title */}
        <div className="mb-16">
          <h2 className="heading-lg mb-4">
            Everyone <span className="text-[#D4F157]">Designs</span>
          </h2>
          <p className="text-body max-w-3xl">
            But few truly understand the strategy behind transformative design. At MarkaWorks, we blend creative excellence with strategic thinking to deliver brands that matter. Our team of world-class designers and strategists craft visual identities that not only look stunning but drive real business results.
            
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat) => (
            <StatCounter key={stat.label} stat={stat} />
          ))}
        </div>

        {/* Video Testimonial Section */}
        <div className="mt-20 bg-[#0f2a2a] rounded-2xl overflow-hidden border border-white/10 p-8">
          <div className="aspect-video bg-[#0a1f1f] rounded-lg flex items-center justify-center">
            <div className="text-center">
              <div className="inline-block mb-4">
                <svg
                  className="w-20 h-20 text-[#D4F157]"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
                </svg>
              </div>
              <p className="text-[#b0b0b0] text-sm">Client Testimonial</p>
              <p className="text-white text-xs mt-2">00:00 / 00:00</p>
            </div>
          </div>
          <p className="text-[#b0b0b0] mt-6 italic">
            "Working with MarkaWorks transformed our brand from a startup to a market leader. Their strategic approach combined with exceptional design created a brand identity that truly resonates with our customers."
          </p>
          <p className="text-white font-semibold mt-4">Sarah Johnson, CEO at TechVenture</p>
        </div>
      </div>
    </section>
  );
}
