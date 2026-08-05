export default function ServicesOverview() {
  const serviceGroups = [
    {
      label: 'BUILD',
      title: 'Strategy & Brand',
      description: 'Clarity, identity and communication systems that make the business easier to understand and remember.',
    },
    {
      label: 'LAUNCH',
      title: 'Marketing & Content',
      description: 'Campaigns and content designed to earn attention and move the right audience to action.',
    },
    {
      label: 'GROW',
      title: 'Digital & AI',
      description: 'Digital experiences and practical automation that make the business easier to discover, use and run.',
    },
    {
      label: 'SHOW UP',
      title: 'Production',
      description: 'Film, print, animation, merchandise and events brought into the real world with consistency.',
    },
  ];

  return (
    <section className="bg-[#052F23] py-20 md:py-32 lg:py-40">
      <div className="container-max max-w-7xl px-6 md:px-12">
        {/* Main Headline */}
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-poppins font-bold leading-tight mb-8 md:mb-10">
          <span className="text-[#E1E1D5]">Create services built </span>
          <br />
          <span className="text-[#D0D731]">around the business.</span>
        </h1>

        {/* Yellow accent line */}
        <div className="w-20 md:w-24 h-1 bg-[#D0D731] mb-10 md:mb-12" />

        {/* Body Paragraphs */}
        <div className="space-y-6 md:space-y-8 mb-16 md:mb-20 max-w-4xl">
          <p className="text-base md:text-lg text-gray-400 leading-relaxed font-normal">
            Each service can stand on its own. The strongest results happen when the right services work together.
          </p>
          <p className="text-base md:text-lg text-gray-400 leading-relaxed font-normal">
            We can help you clarify the strategy, build the identity, create the platform, launch the campaign, produce the experience and strengthen the systems behind it.
          </p>
        </div>

        {/* Service Groups Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {serviceGroups.map((group, idx) => (
            <div
              key={idx}
              className="bg-[#315332] rounded-lg p-8 md:p-10 border border-gray-700/50 transition-all duration-300 hover:border-[#D0D731]"
            >
              {/* Label */}
              <div className="text-xs md:text-sm font-poppins font-bold text-[#D0D731] tracking-widest uppercase mb-4 md:mb-6">
                {group.label}
              </div>

              {/* Title */}
              <h3 className="text-2xl md:text-3xl font-poppins font-bold text-[#E1E1D5] mb-4 md:mb-6">
                {group.title}
              </h3>

              {/* Description */}
              <p className="text-gray-400 leading-relaxed text-base">
                {group.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
