'use client';

import { useState, useRef } from 'react';

export default function VideoTestimonial() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const iframeRef = useRef<HTMLIFrameElement>(null);

  const handlePlayClick = () => {
    setIsPlaying(true);
    if (iframeRef.current) {
      iframeRef.current.style.display = 'block';
    }
  };
  console.log(setCurrentTime(currentTime));
  console.log(setDuration(duration));

  const handlePauseClick = () => {
    setIsPlaying(false);
  };

  const handleMuteClick = () => {
    setIsMuted(!isMuted);
  };

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  return (
    <section className="bg-[#D4F157] py-20 md:py-28 relative overflow-hidden">
      <div className="container-max">
        {/* Video Container */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-center">
          {/* Video Player */}
          <div className="lg:col-span-2">
            <div className="relative rounded-2xl overflow-hidden bg-black aspect-video">
              {/* Thumbnail with play button */}
              {!isPlaying && (
                <div className="absolute inset-0 z-10">
                  <img
                    src="https://markaworks.com/wp-content/uploads/2026/02/image_5.webp"
                    alt="Video Testimonial Thumbnail"
                    className="w-full h-full object-cover"
                  />
                  {/* Animated circles background */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="relative w-32 h-32">
                      <div
                        className="absolute inset-0 rounded-full border-2 border-[#D4F157] opacity-30"
                        style={{ animation: 'pulse 2s ease-in-out infinite' }}
                      />
                      <div
                        className="absolute inset-4 rounded-full border-2 border-[#D4F157] opacity-20"
                        style={{ animation: 'pulse 2s ease-in-out infinite 0.5s' }}
                      />
                      <div
                        className="absolute inset-8 rounded-full border-2 border-[#D4F157] opacity-10"
                        style={{ animation: 'pulse 2s ease-in-out infinite 1s' }}
                      />
                    </div>
                  </div>

                  {/* Play button */}
                  <button
                    onClick={handlePlayClick}
                    className="absolute inset-0 flex items-center justify-center group"
                    aria-label="Play video"
                  >
                    <div className="relative">
                      <div className="absolute inset-0 rounded-full bg-white/10 group-hover:bg-white/20 transition-all duration-300 scale-100 group-hover:scale-110" />
                      <svg
                        width="80"
                        height="80"
                        viewBox="0 0 80 80"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="relative"
                      >
                        <circle
                          cx="40"
                          cy="40"
                          r="35"
                          fill="white"
                          fillOpacity="0.9"
                        />
                        <path
                          d="M32 28L32 52L54 40L32 28Z"
                          fill="#1a3a3a"
                        />
                      </svg>
                    </div>
                  </button>
                </div>
              )}

              {/* Vimeo iframe */}
              <iframe
                ref={iframeRef}
                src="https://player.vimeo.com/video/1167997297?badge=0&autopause=0&player_id=0&app_id=58479&background=0&muted=0&loop=1&controls=0&title=0&byline=0&portrait=0"
                frameBorder="0"
                allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media"
                referrerPolicy="strict-origin-when-cross-origin"
                style={{
                  position: isPlaying ? 'relative' : 'absolute',
                  top: 0,
                  left: 0,
                  width: '100%',
                  height: '100%',
                  display: isPlaying ? 'block' : 'none',
                }}
                title="MarkaWorks Client Testimonial"
              />
            </div>

            {/* Video Controls */}
            {isPlaying && (
              <div className="mt-4 bg-white rounded-lg p-4 border border-gray-200">
                <div className="flex items-center justify-between text-sm text-gray-700">
                  <div className="flex items-center gap-2">
                    <span>{formatTime(currentTime)}</span>
                    <span>/</span>
                    <span>{formatTime(duration)}</span>
                  </div>
                  <div className="flex items-center gap-4">
                    <button
                      onClick={handleMuteClick}
                      className="p-1 hover:text-[#D4F157] transition-colors"
                      aria-label="Mute/Unmute"
                    >
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M11 5L6 9H2V15H6L11 19V5Z"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </button>
                    <button
                      onClick={handlePauseClick}
                      className="px-4 py-2 bg-[#D4F157] text-[#1a3a3a] rounded-lg hover:bg-[#E0F77D] transition-all duration-300 font-semibold text-sm"
                    >
                      Pause
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Testimonial Content */}
          <div className="lg:col-span-1">
            <blockquote className="text-2xl md:text-3xl font-poppins font-bold text-[#1a3a3a] mb-8">
              "Our experience with MarkaWorks has been excellent"
            </blockquote>

            {/* Author Info */}
            <div className="flex items-start gap-4 mb-8">
              <img
                src="https://markaworks.com/wp-content/uploads/2026/02/Konrad-S.png"
                alt="Irene - CEO, Birtz Nutrition"
                className="w-16 h-16 rounded-full object-cover"
              />
              <div>
                <h3 className="font-semibold text-[#1a3a3a] font-poppins">Irene O.</h3>
                <p className="text-gray-700 text-sm">CEO, Birtz Nutrition</p>
                <a
                  href="https://birtznutrition.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#D4F157] text-xs font-medium hover:underline"
                >
                  birtznutrition.com
                </a>
              </div>
            </div>

            {/* Case Study Button */}
            <a
              href="/portfolio/birtz/"
              className="inline-flex items-center gap-2 px-6 py-3 bg-[#1a3a3a] text-white rounded-lg hover:bg-[#2a4a4a] transition-all duration-300 font-semibold"
            >
              <span>View Case Study</span>
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M5 12H19M19 12L12 5M19 12L12 19"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
