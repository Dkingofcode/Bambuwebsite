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
    clientName: 'SHOPINVERSE',
    brand: 'ShopInverse',
    quote: 'Working with Bambu Agency has been an exceptional experience from start to finish. Your team delivered far beyond our expectations, combining creativity, professionalism, and strategic insight to bring the Shopinverse brand to life.',
  },
  {
    id: 2,
    clientName: 'Nneka M. Craigwell',
    brand: 'CRAIGWELL PRESS',
    quote: 'Working with Bambu has been delightful! I appreciate the process, the creativity, the talent, and the patience of the team members! Elizabeth and members of the Bambu agency have been able to take (on more than one occasion) words, ideas, and thoughts on paper and turn them into full-on visuals! I"ve been beyond happy with the outcomes, and early clients have commented on how awesome the overall presentations are. I"m grateful to have been introduced to the Bambu agency and will continue to patner with and refer them to others. As long as they"re growing, I"ll be along for the journey!',
  },
  {
    id: 3,
    clientName: 'Oyin- Events & Marketing Executive',
    brand: 'The Liberty Church Uk',
    quote: 'Working with Bambu has been such a smooth and collaborative experience. Morenike responds promptly and handles briefs with great clarity and care that i never have to worry or chase multiple times. Bambu has an incredible ability to take a brief and bring it to life with clarity, creativity and speed. It"s been a real pleasure partnering with them.',
  },
];

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);

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

        {/* Testimonial Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-16 md:mb-24">
          {testimonials.map((testimonial, idx) => (
            <div
              key={testimonial.id}
              className={`p-8 md:p-10 rounded-2xl transition-all duration-300 hover:shadow-lg ${
                idx === 1
                  ? 'bg-[#eef9d7] border border-gray-300'
                  : 'bg-[#E1E1D5] border border-gray-300'
              }`}
            >
              {/* Client Info Label */}
              <div className="text-xs md:text-sm font-poppins font-bold text-gray-600 tracking-wide uppercase mb-4 md:mb-6">
                {testimonial.clientName} • {testimonial.brand}
              </div>

              {/* Testimonial Quote */}
              <p className="text-lg md:text-xl font-poppins italic font-semibold text-[#052F23] leading-relaxed">
                "{testimonial.quote}"
              </p>
            </div>
          ))}
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
              className="inline-block px-8 md:px-10 py-3 md:py-4 bg-[#D0D731] text-[#052F23] font-poppins font-bold text-sm md:text-base transition-all duration-300 hover:bg-[#E0F77D]"
            >
              BOOK A STRATEGY SESSION
            </a>
          </div>
        </section>
      </div>
    </section>
  );
}
