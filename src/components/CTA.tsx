'use client';

import { useState, useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface Testimonial {
  id: number;
  clientName: string;
  brand: string;
  quote: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    clientName: 'SHOPINVERSE',
    brand: 'ShopInverse',
    quote: 'Working with Bambu Agency has been an exceptional experience from start to finish. Your team delivered far beyond our expectations, combining creativity, professionalism, and strategic insight to bring the Shopinverse brand to life.',
  },
  {
    id: 2,
    clientName: 'Nneka M. Craigwell',
    brand: 'CRAIGWELL PRESS',
    quote: 'Working with Bambu has been delightful! I appreciate the process, the creativity, the talent, and the patience of the team members. Elizabeth and members of the Bambu agency have been able to take my words, ideas, and thoughts on paper and turn them into full-on visuals! I"ve been beyond happy with the outcomes, and early clients have commented on how awesome the overall presentations are. I"m grateful to have been introduced to the Bambu agency and will continue to work with them.',
  },
  {
    id: 3,
    clientName: 'Oyin- Events & Marketing Executive',
    brand: 'The Liberty Church Uk',
    quote: 'Working with Bambu has been such a smooth and collaborative experience. Morenike responds promptly and handles briefs with great clarity and care that i never have to worry or chase multiple times. Bambu has an incredible ability to take a brief and bring it to life with clarity, creativity and speed. It"s been a real pleasure partnering with them.',
  },
  {
    id: 4,
    clientName: 'RL- (Vuvu CEO)',
    brand: 'Vuvu',
    quote: 'Working with your team was a delight. The designer truly captured the essence of VUVU (hope) and translated it into a logo where color and meaning feel magically intertwined. Bambu"s creativity and understanding made the process effortless.  Thanks for everything!',
  }


];

export default function Testimonials() {
 // const [activeIndex, setActiveIndex] = useState(0);

   const [activeIndex, setActiveIndex] = useState(0);
  const sliderRef = useRef<HTMLDivElement>(null);

  const goToSlide = (index: number) => {
    const nextIndex = (index + testimonials.length) % testimonials.length;
    setActiveIndex(nextIndex);
    sliderRef.current?.children[nextIndex]?.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'start' });
  };

  const handleSliderScroll = () => {
    const slider = sliderRef.current;
    if (!slider) return;
    const slideWidth = slider.children[0]?.clientWidth ?? slider.clientWidth;
    setActiveIndex(Math.round(slider.scrollLeft / slideWidth));
  };

  console.log('Active Index:', activeIndex); // Debugging line
  console.log(setActiveIndex); // Debugging line

  return (
    <section className="bg-[#E1E1D5] py-20 md:py-32 lg:py-40">
      <div className="container-max max-w-7xl px-6 md:px-12">
        {/* Headline */}
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-poppins font-bold text-[#052F23] mb-8 md:mb-10 leading-tight max-w-4xl">
          The best measure of creative work is what happens after it launches.
        </h2>

        {/* Subheading */}
        <p className="text-base md:text-lg text-[#052F23] mb-16 md:mb-20 max-w-3xl leading-relaxed font-normal">
          The conversation starts. The trust it builds. The customers it attracts. The confidence it gives the business.
        </p>
 {/* Testimonial Slider */}
        <div className="mb-16 md:mb-24" aria-roledescription="carousel" aria-label="Client testimonials">
          <div
            ref={sliderRef}
            onScroll={handleSliderScroll}
            className="flex snap-x snap-mandatory gap-6 overflow-x-auto overscroll-x-contain pb-4 scrollbar-none md:gap-8"
          >
            {testimonials.map((testimonial, idx) => (
              <article
                key={testimonial.id}
                aria-label={`Testimonial ${idx + 1} of ${testimonials.length}`}
                className={`w-full shrink-0 snap-start rounded-2xl border p-8 transition-all duration-300 md:p-10 ${
                  idx === 1 ? 'border-gray-300 bg-[#eef9d7]' : 'border-gray-300 bg-white'
                }`}
              >
                <div className="mb-4 text-xs font-poppins font-bold uppercase tracking-wide text-gray-600 md:mb-6 md:text-sm">
                  {testimonial.clientName} • {testimonial.brand}
                </div>
                <p className="text-lg font-poppins font-semibold italic leading-relaxed text-[#1a3a3a] md:text-xl">
                  &quot;{testimonial.quote}&quot;
                </p>
              </article>
            ))}
          </div>

          <div className="mt-6 flex items-center justify-between gap-5">
            <div className="flex items-center gap-2" aria-label="Choose testimonial">
              {testimonials.map((testimonial, idx) => (
                <button
                  key={testimonial.id}
                  type="button"
                  aria-label={`Go to testimonial ${idx + 1}`}
                  aria-current={activeIndex === idx ? 'true' : undefined}
                  onClick={() => goToSlide(idx)}
                  className={`h-2 rounded-full transition-all duration-300 ${activeIndex === idx ? 'w-8 bg-[#1a3a3a]' : 'w-2 bg-[#a6aaa0] hover:bg-[#1a3a3a]'}`}
                />
              ))}
            </div>
            <div className="flex gap-2">
              <button
                type="button"
                aria-label="Previous testimonial"
                onClick={() => goToSlide(activeIndex - 1)}
                className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-[#1a3a3a] text-[#1a3a3a] transition-colors hover:bg-[#1a3a3a] hover:text-[#f5f5f5] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1a3a3a]"
              >
                <ChevronLeft size={20} aria-hidden="true" />
              </button>
              <button
                type="button"
                aria-label="Next testimonial"
                onClick={() => goToSlide(activeIndex + 1)}
                className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-[#1a3a3a] text-[#1a3a3a] transition-colors hover:bg-[#1a3a3a] hover:text-[#f5f5f5] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1a3a3a]"
              >
                <ChevronRight size={20} aria-hidden="true" />
              </button>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <section className="bg-[#052F23] p-12 md:p-16 lg:p-20 rounded-2xl">
          <div className="max-w-3xl">
            {/* Section Label */}
            <div className="mb-8 md:mb-10">
              {/* <span className="text-gray-700 text-xs md:text-sm font-poppins font-bold tracking-widest uppercase">
                Final CTA
              </span> */}
            </div>

            {/* CTA Headline */}
            <h3 className="text-4xl md:text-5xl lg:text-6xl font-poppins font-bold text-[#E1E1D5] mb-6 md:mb-8 leading-tight">
              Let us build something worth remembering.
            </h3>

            {/* CTA Description */}
            <p className="text-base md:text-lg text-gray-400 leading-relaxed font-normal mb-10 md:mb-12">
              Whether you are starting from scratch, refreshing an established brand, preparing for a launch or looking for a creative partner who understands where the business heading, we would love to build it with you.
            </p>

            {/* CTA Button */}
            <a
              href="/contacts"
              className="inline-block px-8 md:px-10 py-3 md:py-4 bg-[#D0D731] text-[#052F23] font-poppins font-bold rounded-4xl text-sm md:text-base transition-all duration-300 hover:bg-[#E0F77D]"
            >
              BOOK A STRATEGY SESSION
            </a>
          </div>
        </section>
      </div>
    </section>
  );
}
