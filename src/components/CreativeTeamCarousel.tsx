'use client';

import { useEffect, useState } from 'react';

interface TeamMember {
  id: number;
  name: string;
  role: string;
  description: string;
  emoji: string; // Using emojis as placeholder for 3D avatars
  avatar?: string; // Optional avatar image URL
}

const teamMembers: TeamMember[] = [
  {
    id: 1,
    name: 'Ese',
    role: 'Brand Architect',
    description: 'Orchestrates the strategic vision, transforming complex brand challenges into elegant, powerful solutions that resonate across markets.',
    emoji: '👨‍💼',
    avatar: '/PROFILE PHOTO_ESE-01-01.jpg', // Example avatar image
  },
  {
    id: 2,
    name: 'Moyo',
    role: 'Art Director',
    description: 'Translates strategy into stunning visuals and compelling design systems that bring brands to life with precision and creativity.',
    emoji: '👨‍🎨',
    avatar: '/PROFILE PHOTO_MOYO-01-01.jpg', // Example avatar image
  },
  {
    id: 3,
    name: 'Rhema',
    role: 'CFO',
    description: 'Ensures every project delivers measurable value and sustainable growth. Balances creativity with smart business strategy.',
    emoji: '👩‍💼',
    avatar: '/PROFILE PHOTO_RHEMA-01-01.jpg', // Example avatar image
  },
  // {
  //   id: 4,
  //   name: 'Tugberk',
  //   role: 'Project Manager',
  //   description: 'Orchestrates projects with clarity and focus, ensuring every idea becomes a seamless brand reality on schedule and on budget.',
  //   emoji: '👨‍💻',
  //   avatar: '/PROFILE PHOTO_TUGBERK-01-01.jpg', // Example avatar image
  // },
  // {
  //   id: 5,
  //   name: 'Uygar',
  //   role: 'Project Manager',
  //   description: 'Drives execution excellence, managing timelines and teams to ensure every brand project exceeds expectations.',
  //   emoji: '👨‍💼',
  //   avatar: '/avatars/uygar.png', // Example avatar image
  // },
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
        <h2 className="text-4xl md:text-5xl font-poppins font-bold text-[#052F23] mb-16 text-center">
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
                      <div className={`w-24 h-24  rounded-full bg-gradient-to-br from-[#E7B621] to-[#052F23] flex items-center justify-center text-4xl shadow-lg ${
                        isActive ? 'ring-4 ring-[#E7B621]' : ''
                      }`}>
                       <img className='rounded-full w-full h-full object-cover' src={member.avatar} alt={member.name} />  
                      </div>
                      <p className="text-sm font-bold text-[#052F23] text-center">{member.name}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Active Member Card */}
          <div className="bg-white rounded-3xl p-8 border-2 border-[#052F23] h-full flex flex-col justify-center">
            <div className="text-center lg:text-left">
              <h3 className="text-2xl font-poppins font-bold text-[#052F23] mb-2">
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
            className="w-12 h-12 rounded-full border-2 border-[#052F23] text-[#052F23] flex items-center justify-center hover:bg-[#E7B621] transition-all duration-300"
            aria-label="Previous team member"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
              <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
          <button
            onClick={handleNext}
            className="w-12 h-12 rounded-full border-2 border-[#052F23] text-[#052F23] flex items-center justify-center hover:bg-[#E7B621] transition-all duration-300"
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





                        // {member.emoji}