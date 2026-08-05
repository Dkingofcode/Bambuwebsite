export default function AIBusinessSupportService() {
  const supportFeatures = [
    {
      category: 'CUSTOMER SUPPORT',
      title: 'Reply faster and more consistently.',
      description: 'Organise frequently asked questions, create smart response systems and reduce the time spent answering the same enquiries.',
    },
    {
      category: 'SCHEDULING',
      title: 'Make booking easier.',
      description: 'Setup simple meeting and appointment workflows that reduce back-and-forth communication.',
    },
    {
      category: 'FOLLOW-UP',
      title: 'Keep opportunities moving.',
      description: 'Support lead tracking, reminders and routine customer follow-up so valuable conversations do not disappear.',
    },
    {
      category: 'INTERNAL OPERATIONS',
      title: 'Reduce repetitive admin.',
      description: 'Create practical workflows for information, reporting, content support and everyday business tasks.',
    },
  ];

  return (
    <section className="bg-[#052F23] py-20 md:py-32 lg:py-40">
      <div className="container-max max-w-7xl px-6 md:px-12">
        {/* Section Label */}
        <div className="mb-12 md:mb-16">
          <span className="text-[#D0D731] text-xs md:text-sm font-poppins font-bold tracking-widest uppercase">
            New Service Offering
          </span>
        </div>

        {/* Main Heading */}
        <h2 className="text-5xl md:text-6xl lg:text-7xl font-poppins font-bold text-[#E1E1D5] leading-tight mb-8 md:mb-10">
          AI Business Support
        </h2>

        {/* Yellow accent line */}
        <div className="w-20 md:w-24 h-1 bg-[#D0D731] mb-10 md:mb-12" />

        {/* Introductory text */}
        <p className="text-base md:text-lg text-gray-400 leading-relaxed font-normal mb-16 md:mb-20 max-w-3xl">
          Practical AI systems for small and growing businesses that want to work faster without making operations more complicated.
        </p>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mb-12 md:mb-16">
          {supportFeatures.map((feature, idx) => (
            <div
              key={idx}
              className="bg-[#315332] rounded-lg p-8 md:p-10 border border-gray-700/50 transition-all duration-300 hover:border-[#D0D731]"
            >
              {/* Category Label */}
              <div className="text-xs md:text-sm font-poppins font-bold text-[#D0D731] tracking-widest uppercase mb-4 md:mb-6">
                {feature.category}
              </div>

              {/* Title */}
              <h3 className="text-2xl md:text-3xl font-poppins font-bold text-[#E1E1D5] mb-4 md:mb-6">
                {feature.title}
              </h3>

              {/* Description */}
              <p className="text-gray-400 leading-relaxed text-base">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom Callout Section */}
        <div className="bg-[#D0D731] rounded-lg p-8 md:p-10 lg:p-12">
          <h3 className="text-3xl md:text-4xl lg:text-5xl font-poppins font-bold text-[#052F23] mb-4 md:mb-6 leading-tight">
            Technology should simplify the business.
          </h3>
          <p className="text-base md:text-lg text-[#052F23] leading-relaxed font-normal">
            Every system is designed around the way the team already works, then introduced with clear documentation and training.
          </p>
        </div>
      </div>
    </section>
  );
}
