'use client';

import { useEffect, useState } from 'react';

interface TeamMember {
  id: number;
  name: string;
  role: string;
  description: string;
  emoji: string; // Using emojis as placeholder for 3D avatars
}

const teamMembers: TeamMember[] = [
  {
    id: 1,
    name: 'Mustafa',
    role: 'Brand Architect',
    description: 'Orchestrates the strategic vision, transforming complex brand challenges into elegant, powerful solutions that resonate across markets.',
    emoji: '👨‍💼',
  },
  {
    id: 2,
    name: 'Ethan',
    role: 'Art Director',
    description: 'Translates strategy into stunning visuals and compelling design systems that bring brands to life with precision and creativity.',
    emoji: '👨‍🎨',
  },
  {
    id: 3,
    name: 'Duygu',
    role: 'CFO',
    description: 'Ensures every project delivers measurable value and sustainable growth. Balances creativity with smart business strategy.',
    emoji: '👩‍💼',
  },
  {
    id: 4,
    name: 'Tugberk',
    role: 'Project Manager',
    description: 'Orchestrates projects with clarity and focus, ensuring every idea becomes a seamless brand reality on schedule and on budget.',
    emoji: '👨‍💻',
  },
  {
    id: 5,
    name: 'Uygar',
    role: 'Project Manager',
    description: 'Drives execution excellence, managing timelines and teams to ensure every brand project exceeds expectations.',
    emoji: '👨‍💼',
  },
];

export default function CreativeTeamCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlay, setIsAutoPlay] = useState(true);

  // Auto-rotate every 5 seconds
  useEffect(() => {
    if (!isAutoPlay) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % teamMembers.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlay]);

  const handlePrev = () => {
    setIsAutoPlay(false);
    setCurrentIndex((prev) => (prev - 1 + teamMembers.length) % teamMembers.length);
  };

  const handleNext = () => {
    setIsAutoPlay(false);
    setCurrentIndex((prev) => (prev + 1) % teamMembers.length);
  };

  const current = teamMembers[currentIndex];

  return (
    <section className="bg-[#D9DECC] py-20 md:py-28">
      <div className="container-max">
        {/* Section Title */}
        <h2 className="text-4xl md:text-5xl font-poppins font-bold text-[#1a3a3a] mb-16 text-center">
          Our Creative Brand Consultancy Team Making It All Happen
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-center">
          {/* Team Members Carousel */}
          <div className="lg:col-span-2">
            <div className="flex items-center justify-center gap-8 relative">
              {/* Carousel Items */}
              <div className="flex gap-6 justify-center flex-wrap">
                {teamMembers.map((member, idx) => {
                  const isActive = idx === currentIndex;
                  return (
                    <div
                      key={member.id}
                      className={`flex flex-col items-center gap-3 cursor-pointer transition-all duration-300 transform ${
                        isActive ? 'scale-125 opacity-100' : 'scale-75 opacity-40 hover:opacity-60'
                      }`}
                      onClick={() => {
                        setIsAutoPlay(false);
                        setCurrentIndex(idx);
                      }}
                    >
                      {/* Avatar Placeholder */}
                      <div className={`w-24 h-24 rounded-full bg-gradient-to-br from-[#D4F157] to-[#1a3a3a] flex items-center justify-center text-4xl shadow-lg ${
                        isActive ? 'ring-4 ring-[#D4F157]' : ''
                      }`}>
                        {member.emoji}
                      </div>
                      <p className="text-sm font-bold text-[#1a3a3a] text-center">{member.name}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Active Member Card */}
          <div className="bg-white rounded-3xl p-8 border-2 border-[#1a3a3a] h-full flex flex-col justify-center">
            <div className="text-center lg:text-left">
              <h3 className="text-2xl font-poppins font-bold text-[#1a3a3a] mb-2">
                {current.name.toUpperCase()}
              </h3>
              <p className="text-gray-600 font-semibold mb-6">{current.role}</p>
              <p className="text-gray-700 leading-relaxed">
                {current.description}
              </p>
            </div>
          </div>
        </div>

        {/* Navigation Controls */}
        <div className="flex gap-4 justify-center mt-12">
          <button
            onClick={handlePrev}
            className="w-12 h-12 rounded-full border-2 border-[#1a3a3a] text-[#1a3a3a] flex items-center justify-center hover:bg-[#D4F157] transition-all duration-300"
            aria-label="Previous team member"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
              <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
          <button
            onClick={handleNext}
            className="w-12 h-12 rounded-full border-2 border-[#1a3a3a] text-[#1a3a3a] flex items-center justify-center hover:bg-[#D4F157] transition-all duration-300"
            aria-label="Next team member"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
              <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}
