'use client';

import { useEffect } from 'react';

export default function VideoHero() {
  useEffect(() => {
    // Load Vimeo player API
    const script = document.createElement('script');
    script.src = 'https://player.vimeo.com/api/player.js';
    script.defer = true;
    document.head.appendChild(script);

    script.onload = () => {
      const iframe = document.getElementById('vimeoHero') as HTMLIFrameElement;
      const poster = document.getElementById('heroPoster') as HTMLElement;

      if (iframe && (window as any).Vimeo) {
        const player = new (window as any).Vimeo.Player(iframe);

        player.on('play', function () {
          if (poster) {
            poster.style.opacity = '0';
            setTimeout(() => {
              poster.style.display = 'none';
            }, 800);
          }
        });
      }
    };
  }, []);

  return (
    <section className="markaworks-hero relative w-full h-screen overflow-hidden" id="markaworksHero">
      <div className="hero-video-container relative w-full h-full" id="heroVideoContainer">
        {/* Poster Image - shows while video is loading */}
        <div
          id="heroPoster"
          className="absolute top-0 left-0 w-full h-full z-20 transition-opacity duration-800"
          style={{
            backgroundImage:
              'url(https://images.unsplash.com/photo-1634973357611-606f0aeb6b9b?w=1920&q=90)',
            backgroundPosition: 'center center',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            opacity: 1,
          }}
        ></div>

        {/* Vimeo Video Background */}
        <iframe
          id="vimeoHero"
          src="https://player.vimeo.com/video/1165682343?background=1&autoplay=1&loop=1&byline=0&title=0&muted=1"
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            width: '100vw',
            height: '56.25vw',
            minHeight: '100%',
            minWidth: '177.77vh',
            transform: 'translate(-50%, -50%) scale(1.05)',
            pointerEvents: 'none',
            zIndex: 10,
            border: 'none',
          }}
          allow="autoplay; fullscreen; picture-in-picture"
          allowFullScreen
          title="MarkaWorks Hero Video"
        ></iframe>
      </div>

      {/* CTA Button */}
      <div className="absolute bottom-20 left-10 z-30">
        <a
          href="#about"
          className="inline-block px-8 py-3 bg-[#D4F157] text-[#1a3a3a] font-poppins font-bold rounded-full hover:bg-[#E0F77D] transition-all duration-300 transform hover:scale-105"
        >
          Start a project
        </a>
      </div>

      {/* Scroll Indicator at Bottom */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-30 animate-bounce">
        <svg
          className="w-8 h-8 text-[#D4F157]"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 14l-7 7m0 0l-7-7m7 7V3"
          />
        </svg>
      </div>
    </section>
  );
}
