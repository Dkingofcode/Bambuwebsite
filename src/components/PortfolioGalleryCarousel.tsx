'use client';

import { useState, useEffect } from 'react';

interface PortfolioItem {
  id: number;
  title: string;
  category: string;
  image: string;
}

export default function PortfolioGalleryCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlay, setIsAutoPlay] = useState(true);

  const portfolioItems: PortfolioItem[] = [
    { id: 1, title: 'Brand Identity', category: 'Branding', image: 'linear-gradient(135deg, #E7B621, #325432)' },
    { id: 2, title: 'Packaging Design', category: 'Product', image: 'linear-gradient(135deg, #325432, #E7B621)' },
    { id: 3, title: 'Web Design', category: 'Digital', image: 'linear-gradient(135deg, #ededda, #325432)' },
    { id: 4, title: 'Campaign Assets', category: 'Marketing', image: 'linear-gradient(135deg, #E7B621, #ededda)' },
    { id: 5, title: 'Visual System', category: 'Branding', image: 'linear-gradient(135deg, #325432, #ededda)' },
  ];

  useEffect(() => {
    if (!isAutoPlay) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % portfolioItems.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [isAutoPlay, portfolioItems.length]);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + portfolioItems.length) % portfolioItems.length);
    setIsAutoPlay(false);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % portfolioItems.length);
    setIsAutoPlay(false);
  };

  return (
    <section className="bg-[#ededda] py-16 md:py-20 relative overflow-hidden">
      <div className="container-max">
        {/* Carousel Container */}
        <div className="relative">
          {/* Main Display */}
          <div className="mb-8">
            <div
              className="aspect-video bg-cover bg-center rounded-xl overflow-hidden flex items-center justify-center group cursor-pointer transition-transform duration-300 hover:scale-102"
              style={{ backgroundImage: portfolioItems[currentIndex].image }}
            >
              <div className="text-center">
                <h3 className="text-4xl md:text-5xl font-poppins font-bold text-white drop-shadow-lg">
                  {portfolioItems[currentIndex].title}
                </h3>
                <p className="text-lg text-gray-200 mt-4 drop-shadow">{portfolioItems[currentIndex].category}</p>
              </div>
            </div>
          </div>

          {/* Thumbnail Strip */}
          <div className="flex gap-4 overflow-x-auto pb-4">
            {portfolioItems.map((item, index) => (
              <button
                key={item.id}
                onClick={() => {
                  setCurrentIndex(index);
                  setIsAutoPlay(false);
                }}
                className={`flex-shrink-0 w-20 h-20 rounded-lg transition-all duration-300 border-2 ${
                  index === currentIndex
                    ? 'border-[#E7B621] scale-105'
                    : 'border-transparent hover:border-gray-400'
                }`}
                style={{
                  backgroundImage: item.image,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                }}
                aria-label={`View ${item.title}`}
              />
            ))}
          </div>

          {/* Navigation Controls */}
          <div className="flex items-center justify-between mt-8">
            <div className="flex gap-4">
              <button
                onClick={handlePrev}
                className="w-12 h-12 rounded-full border-2 border-[#325432] text-[#325432] flex items-center justify-center hover:bg-[#325432] hover:text-white transition-all duration-300"
                aria-label="Previous portfolio item"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                  <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
              <button
                onClick={handleNext}
                className="w-12 h-12 rounded-full border-2 border-[#325432] text-[#325432] flex items-center justify-center hover:bg-[#325432] hover:text-white transition-all duration-300"
                aria-label="Next portfolio item"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                  <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
            </div>

            {/* Counter */}
            <div className="text-sm font-semibold text-[#325432]">
              {String(currentIndex + 1).padStart(2, '0')} / {String(portfolioItems.length).padStart(2, '0')}
            </div>

            {/* Autoplay Toggle */}
            <button
              onClick={() => setIsAutoPlay(!isAutoPlay)}
              className={`px-4 py-2 rounded-full text-sm font-semibold transition-all duration-300 ${
                isAutoPlay
                  ? 'bg-[#E7B621] text-[#325432] hover:bg-[#E0F77D]'
                  : 'bg-gray-300 text-[#325432] hover:bg-gray-400'
              }`}
            >
              {isAutoPlay ? 'Pause' : 'Play'}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
