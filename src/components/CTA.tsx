'use client';

import { useState } from 'react';
interface Testimonial {
  id: number;
  clientName: string;
  brand: string;
  quote: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    clientName: 'ShopInverse',
    brand: 'ShopInverse',
    quote: 'Working with Bambu Agency has been an exceptional experience from start to finish. Your team delivered far beyond our expectations, combining creativity, professionalism and strategic insight to bring the ShopInverse brand to life.',
  },
  {
    id: 2,
    clientName: 'Craigwell Press',
    brand: 'Nneka M. Craigwell',
    quote: 'The Bambu team took my words, ideas and thoughts on paper and turned them into full-on visuals. I have been beyond happy with the outcomes.',
  },
  {
    id: 3,
    clientName: 'The Liberty Church UK',
    brand: 'Oyin',
    quote: 'Bambu has an incredible ability to take a brief and bring it to life with clarity, creativity and speed. It has been a real pleasure partnering with them.',
  },
];

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);
  const goToSlide = (index: number) => {
    setActiveIndex((index + testimonials.length) % testimonials.length);
  };

  return (
    <section id="proof" className="bg-[#e1e1d5] py-16 text-[#082f25] md:py-24">
      <div className="mx-auto grid w-full max-w-[1260px] gap-10 px-4 md:px-6 lg:grid-cols-[1fr_0.9fr] lg:items-start lg:gap-14">
        <div>
          <p className="mb-5 text-base font-poppins font-extrabold leading-tight text-[#315332]">Proof</p>
          <h2 className="max-w-[680px] text-[clamp(44px,6vw,78px)] font-poppins font-black leading-[1.02] tracking-[-0.055em]">
            The best measure of creative work is what happens after it launches.
          </h2>
          <p className="mt-8 max-w-[620px] text-[clamp(20px,2.4vw,28px)] leading-[1.5] text-[rgba(8,47,37,0.72)]">
            The conversation it starts. The trust it builds. The customers it attracts. The confidence it gives the business.
          </p>
        </div>

        {/* Testimonial Slider */}
        <div className="min-w-0" aria-roledescription="carousel" aria-label="Client testimonials">
          <article
            aria-live="polite"
            aria-label={`Testimonial ${activeIndex + 1} of ${testimonials.length}`}
            className="rounded-[26px] border border-[rgba(8,47,37,0.14)] bg-[#f1f0e7] p-7 shadow-[0_18px_55px_rgba(5,47,35,0.08)] md:p-12"
          >
            <div className="mb-6 text-sm font-poppins font-extrabold text-[rgba(8,47,37,0.62)] md:text-base">
              {testimonials[activeIndex].clientName} · {testimonials[activeIndex].brand}
            </div>
            <p className="text-[clamp(30px,4vw,48px)] font-poppins font-black leading-[1.18] tracking-[-0.04em] text-[#082f25]">
              &quot;{testimonials[activeIndex].quote}&quot;
            </p>
          </article>

          <div className="mt-4 flex items-center justify-start gap-3">
            <div className="flex gap-3">
              <button
                type="button"
                aria-label="Previous testimonial"
                onClick={() => goToSlide(activeIndex - 1)}
                className="inline-flex h-[52px] items-center justify-center rounded-full border-[1.5px] border-[#082f25] px-5 font-poppins font-black text-[#082f25] transition-colors hover:bg-[#082f25] hover:text-[#e1e1d5] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#082f25]"
              >
                <span>Prev</span>
              </button>
              <button
                type="button"
                aria-label="Next testimonial"
                onClick={() => goToSlide(activeIndex + 1)}
                className="inline-flex h-[52px] items-center justify-center rounded-full border-[1.5px] border-[#082f25] px-5 font-poppins font-black text-[#082f25] transition-colors hover:bg-[#082f25] hover:text-[#e1e1d5] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#082f25]"
              >
                <span>Next</span>
              </button>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
