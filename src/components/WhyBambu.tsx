export default function WhyBambu() {
  return (
    <section className="bg-[#E1E1D5] py-20 md:py-32 lg:py-40">
      <div className="container-max max-w-7xl px-6 md:px-12">
        {/* Section Label */}
        <div className="mb-12 md:mb-16">
          <span className="text-[#315332] text-xs md:text-sm font-poppins font-bold tracking-widest uppercase">
            Why Bambu
          </span>
        </div>

        {/* Main Headline */}
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-poppins font-bold text-[#052F23] mb-8 md:mb-10 leading-tight">
          Everything your audience sees should point in the same direction.
        </h2>

          {/* Yellow accent line */}
          <div className="w-20 md:w-24 h-1 bg-[#D0D731] mb-10 md:mb-12" />

        {/* Subheading with Yellow Highlight */}
        <p className="text-lg md:text-xl text-[#052F23] mb-2 md:mb-16 leading-relaxed max-w-3xl">
          <span className="px-1">Your identity, website, campaign, content, packaging and customer experience</span> should feel like the same business.
          That&apos;s where Bambu comes in. We connect the thinking and the execution, so the brand shows up clearly wherever people meet it.
        </p>

        {/* Body Paragraphs */}
        <div className="space-y-2 md:space-y-8 mb-12 md:mb-16 max-w-3xl">
         
          <p className="text-base md:text-lg text-[#052F23] leading-relaxed font-normal">
            From the first strategic question to the final deliverable, every part is built to support the next.
          </p>
        </div>

        {/* CTA Button */}
        <a
          href="/projects"
          className="inline-block px-8 md:px-10 py-3 md:py-4 bg-[#D0D731] text-[#052F23] font-poppins font-bold rounded-4xl text-sm md:text-base transition-all duration-300 hover:bg-[#E0F77D]"
        >
          SEE HOW WE WORK
        </a>
      </div>
    </section>
  );
}
