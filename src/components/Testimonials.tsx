'use client';

import { useState } from 'react';

interface Stat {
  number: string;
  label: string;
  color: 'purple' | 'green' | 'blue';
}

interface Testimonial {
  id: number;
  title: string;
  quote: string;
  stats: Stat[];
  author: string;
  position: string;
  company: string;
  website: string;
  avatar: string;
  image: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    title: '"High quality work"',
    quote: 'Working with Bambu has been an outstanding experience. Their eye for detail and ability to tell compelling brand stories is unmatched. They brought a whole new level of meaning and excitement to building our incredible studio!',
    stats: [
      { number: '2.5x', label: 'social media engagement', color: 'purple' },
      { number: '60%', label: 'higher brand recall', color: 'green' },
      { number: '82%', label: 'increase in brand awareness', color: 'blue' },
    ],
    author: 'THESONDELAB Creative',
    position: 'director',
    company: 'THESONDELAB Creative',
    website: 'https://www.shopinverse.com',
     avatar: 'https://markaworks.com/wp-content/uploads/2025/10/Statkonrad-5.png',
     image: 'https://markaworks.com/wp-content/uploads/2025/10/StatKonrad.png',
  },
  {
    id: 2,
    title: '"What stood out immediately was their approach"',
    quote: 'Working with Bambu was a delight. They truly captured the essence of VUVU (hope) and translated it into a logo where color and meaning feel magically intertwined. Bambus creativity and understanding made the process effortless. Thanks for everything!',
    stats: [
      { number: '+70%', label: 'website engagement', color: 'purple' },
      { number: '2x', label: 'conversion with product visuals', color: 'green' },
      { number: '60%', label: 'higher purchase confidence', color: 'blue' },
    ],
    author: 'Vuvu CEO',
    position: 'CEO',
    company: 'Vuvu',
    website: '',
    avatar: 'https://markaworks.com/wp-content/uploads/2026/02/Konrad-S.png',
    image: 'https://markaworks.com/wp-content/uploads/2026/02/BIRTZ_SCENE_11_04-2k.webp',
  },
  {
    id: 3,
    title: '"Truly impressive…"',
    quote: 'Working with Bambu has been such a smooth and collaborative experience. They respond promptly and handle briefs with great clarity and care that i never have to worry or chase multiple times. Bambu has an incredible ability to take a brief and bring it to life with clarity, creativity, and speed. Its been a real pleasure partnering with them.',
    stats: [
      { number: '4.5x', label: 'stronger brand presence', color: 'purple' },
      { number: '75%', label: 'higher customer satisfaction', color: 'green' },
      { number: '+2k', label: 'new customers in the first 6 months', color: 'blue' },
    ],
    author: '',
    position: 'Events & Marketing Executive',
    company: 'Oyin',
    website: '',
    avatar: 'https://markaworks.com/wp-content/uploads/2025/10/StatAlec.png',
    image: 'https://markaworks.com/wp-content/uploads/2025/10/StatAlec-1.png',
  },
  {
    id: 4,
    title: '"Working with Bambu was one of the best decisions…"',
    quote: 'Working with Bambu Agency has been an exceptional experience from start to finish. The team delivered far beyond our expectations, combining creativity, professionalism, and strategic insight to bring the Shopinverse brand to life. Were truly grateful for the partnership and highly recommend Bambu Agency to any brand looking for top-tier creative direction and design execution.',
    stats: [
      { number: '2.5x', label: 'social media engagement', color: 'purple' },
      { number: '60%', label: 'higher brand recall', color: 'green' },
      { number: '82%', label: 'increase in brand awareness', color: 'blue' },
    ],
    author: '',
    position: '',
    company: 'SHOPINVERSE',
    website: '',
    avatar: 'https://markaworks.com/wp-content/uploads/2026/03/St78at.webp',
    image: 'https://markaworks.com/wp-content/uploads/2026/03/Stat-1.webp',
  },
  // {
  //   id: 5,
  //   title: '"Truly Exceptional…"',
  //   quote: 'Working with MarkaWorks on our brand rebranding was an absolute pleasure. The entire process was seamless, with their team consistently demonstrating professionalism, creativity, and a deep understanding of our vision. The final outcome was exactly what we had envisioned, elevating Skin Deep to new heights.',
  //   stats: [
  //     { number: '5x', label: 'more customer engagement', color: 'purple' },
  //     { number: '90%', label: 'campaign success rate', color: 'green' },
  //     { number: '+8k', label: 'product trials', color: 'blue' },
  //   ],
  //   author: 'Sadaf M.',
  //   position: 'CEO',
  //   company: 'SkinDeep',
  //   website: 'skindeepintl.com',
  //   avatar: 'https://markaworks.com/wp-content/uploads/2025/10/StatSadaf.png',
  //   image: 'https://markaworks.com/wp-content/uploads/2025/10/StatSadaf-1.png',
  // },
  // {
  //   id: 6,
  //   title: '"Was truly impressive…"',
  //   quote: 'We recently partnered with the MarkaWorks design team for a full rebrand of our Tea company, and the experience was exceptional. The team&apos;s ability to capture the essence of our brand and translate it into visually stunning designs was truly impressive. We are so happy with the results.',
  //   stats: [
  //     { number: '6x', label: 'brand awareness', color: 'purple' },
  //     { number: '80%', label: 'sales growth', color: 'green' },
  //     { number: '+3k', label: 'new customers in first quarter', color: 'blue' },
  //   ],
  //   author: 'Shayan T.',
  //   position: 'CEO',
  //   company: 'Yu Tea',
  //   website: 'yutea.com',
  //   avatar: 'https://markaworks.com/wp-content/uploads/2025/10/StatShayan.png',
  //   image: 'https://markaworks.com/wp-content/uploads/2025/10/StatShayan-1.png',
  // },
];

const colorMap = {
  purple: 'text-purple-500',
  green: 'text-green-500',
  blue: 'text-blue-400',
};

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);
  const current = testimonials[activeIndex];

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };

  return (
    <section className="bg-[#ededda] py-20 md:py-28">
      <div className="container-max">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Testimonial Content */}
          <div className="space-y-8">
            <h3 className="text-3xl md:text-4xl font-poppins font-bold text-[#1a3a3a]">
              {current.title}
            </h3>
            
            <p className="text-lg leading-relaxed text-gray-700">
              {current.quote}
            </p>

            {/* Stats */}
            <div className="space-y-6">
              {current.stats.map((stat, idx) => (
                <div key={idx} className="flex items-start gap-4">
                  <div className={`text-4xl font-poppins font-bold ${colorMap[stat.color]}`}>
                    {stat.number}
                  </div>
                  <div className="flex-1">
                    <p className="text-gray-600 text-sm">{stat.label}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Author Info */}
            <div className="flex items-center gap-4 pt-8 border-t border-gray-300">
              <img
                src={current.avatar}
                alt={current.author}
                className="w-16 h-16 rounded-full object-cover"
              />
              <div>
                <p className="font-poppins font-bold text-[#1a3a3a]">{current.author}</p>
                <p className="text-gray-600 text-sm">{current.position}, {current.company}</p>
                <p className="text-[#D4F157] text-xs mt-1">{current.website}</p>
              </div>
            </div>

            {/* Navigation */}
            <div className="flex gap-4 pt-4">
              <button
                onClick={handlePrev}
                className="w-12 h-12 rounded-full border border-gray-300 text-[#1a3a3a] hover:border-[#D4F157] hover:text-[#D4F157] transition-all duration-300 flex items-center justify-center"
                aria-label="Previous testimonial"
              >
                <svg width="24" height="24" viewBox="0 0 32 32" fill="none">
                  <path d="M20 24L12 16L20 8" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
              <button
                onClick={handleNext}
                className="w-12 h-12 rounded-full border border-gray-300 text-[#1a3a3a] hover:border-[#D4F157] hover:text-[#D4F157] transition-all duration-300 flex items-center justify-center"
                aria-label="Next testimonial"
              >
                <svg width="24" height="24" viewBox="0 0 32 32" fill="none">
                  <path d="M12 24L20 16L12 8" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
            </div>
          </div>

          {/* Right Side - Image */}
          <div className="relative">
            <img
              src={current.image}
              alt={current.company}
              className="w-full h-full object-cover rounded-xl"
            />
          </div>
        </div>

        {/* Testimonial Counter */}
        <div className="mt-12 text-center text-gray-600 text-sm">
          {String(activeIndex + 1).padStart(2, '0')} / {String(testimonials.length).padStart(2, '0')}
        </div>
      </div>
    </section>
  );
}
