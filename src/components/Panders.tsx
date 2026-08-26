export default function ThePanders() {
  return (
    <section className="bg-[#052F23] py-20 md:py-32 lg:py-40">
      <div className="container-max max-w-7xl px-6 md:px-12">
        {/* Section Label */}
        <div className="mb-12 md:mb-16">
          <span className="text-[#D0D731] text-xs md:text-sm font-poppins font-bold tracking-widest uppercase">
            The Panders
          </span>
        </div>

        {/* Main Headline */}
        <h2 className="text-5xl md:text-6xl lg:text-7xl font-poppins font-bold leading-tight mb-8 md:mb-10">
          <span className="text-[#E1E1D5]">You are not hiring an agency. </span>
          <br />
          <span className="text-[#D0D731]">You are gaining a creative partner.</span>
        </h2>

        {/* Yellow accent line */}
        <div className="w-20 md:w-24 h-1 bg-[#D0D731] mb-10 md:mb-12" />

        {/* Body Paragraphs */}
        <div className="space-y-6 md:space-y-8 mb-12 md:mb-16 max-w-3xl">
          <p className="text-base md:text-lg text-gray-400 leading-relaxed font-normal">
            Every business that builds with us becomes part of our community. We call them Panders.
          </p>
          <p className="text-base md:text-lg text-gray-400 leading-relaxed font-normal">
            We stay curious after delivery. We keep looking for the next opportunity, the stronger expression, the smarter system and the idea that can move the brand forward.
          </p>
        </div>

        {/* Partnership Statement */}
        <h3 className="text-4xl md:text-5xl lg:text-6xl font-poppins font-bold text-[#E1E1D5] mb-12 md:mb-16 leading-tight">
          The project may end. The partnership does not.
        </h3>

        {/* CTA Button */}
        <a
          href="/contacts"
          className="inline-block px-8 md:px-10 py-3 md:py-4 bg-[#D0D731] text-[#052F23] font-poppins font-bold rounded-4xl text-sm md:text-base transition-all duration-300 hover:bg-[#E0F77D]"
        >
          JOIN THE PANDERS
        </a>
      </div>
    </section>
  );
}
