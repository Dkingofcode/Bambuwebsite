export default function AISupport() {
  const features = [
    {
      category: 'CUSTOMER RESPONSE',
      title: 'Faster replies',
      description: 'Turn repeated enquiries into organised, consistent responses.',
    },
    {
      category: 'OPERATIONS',
      title: 'Smarter workflows',
      description: 'Automate follow-ups, scheduling and routine internal tasks.',
    },
    {
      category: 'TEAM CAPACITY',
      title: 'More useful time',
      description: 'Let people focus on judgement, service and growth.',
    },
  ];

  return (
    <section className="bg-[#052F23] py-20 md:py-32 lg:py-40">
      <div className="container-max max-w-7xl px-6 md:px-12">
        {/* Section Label */}
        <div className="mb-12 md:mb-16">
          <span className="text-[#D0D731] text-xs md:text-sm font-poppins font-bold tracking-widest uppercase">
            AI Support Teaser
          </span>
        </div>

        {/* Main Headline */}
        <h2 className="text-5xl md:text-6xl lg:text-7xl font-poppins font-bold leading-tight mb-8 md:mb-10">
          <span className="text-[#E1E1D5]">Your newest team member </span>
          <br />
          <span className="text-[#D4F157]">does not need a desk.</span>
        </h2>

        {/* Yellow accent line */}
        <div className="w-20 md:w-24 h-1 bg-[#D4F157] mb-10 md:mb-12" />

        {/* Body Paragraphs */}
        <div className="space-y-6 md:space-y-8 mb-16 md:mb-20 max-w-3xl">
          <p className="text-base md:text-lg text-gray-400 leading-relaxed font-normal">
            We help small and growing businesses use AI to reply customers faster, schedule meetings, organise information, follow up leads and reduce repetitive admin.
          </p>
          <p className="text-base md:text-lg text-gray-400 leading-relaxed font-normal">
            The goal is simple: less time spent repeating the same work, more time spent serving customers and growing the business.
          </p>
        </div>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-16 md:mb-20">
          {features.map((feature, idx) => (
            <div 
              key={idx} 
              className="bg-[#315332] rounded-2xl p-8 md:p-10 border border-gray-700/50 transition-all duration-300 hover:border-[#D4F157]"
            >
              {/* Category Label */}
              <div className="text-xs md:text-sm font-poppins font-bold text-[#D4F157] tracking-widest uppercase mb-4 md:mb-6">
                {feature.category}
              </div>

              {/* Feature Title */}
              <h3 className="text-2xl md:text-3xl font-poppins font-bold text-[#E1E1D5] mb-4 md:mb-6">
                {feature.title}
              </h3>

              {/* Feature Description */}
              <p className="text-gray-400 leading-relaxed text-base">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <a
          href="/services"
          className="inline-block px-8 md:px-10 py-3 md:py-4 bg-[#D0D731] text-[#052F23] font-poppins font-bold text-sm md:text-base transition-all duration-300 hover:bg-[#E0F77D]"
        >
          EXPLORE AI SUPPORT
        </a>
      </div>
    </section>
  );
}
