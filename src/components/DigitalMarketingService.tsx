export default function DigitalMarketingService() {
  const serviceItems = [
    {
      title: 'Web Development',
      description: 'We build digital homes for brands that need to communicate clearly, earn trust quickly and turn attention into meaningful action.',
      tags: ['Websites', 'Landing pages', 'UI/UX', 'eCommerce', 'Analytics', 'Website maintenance'],
    },
    {
      title: 'Marketing Strategy',
      description: 'We turn business goals into a clear roadmap for what to say, where to show up and how each campaign should support the next.',
      tags: ['Marketing roadmaps', 'Channel planning', 'Campaign strategy', 'Paid and organic direction', 'Performance review'],
    },
    {
      title: 'Social Media',
      description: 'We build a social presence that looks consistent, sounds like the brand and gives people a reason to keep paying attention.',
      tags: ['Content strategy', 'Calendars', 'Post design', 'Copywriting', 'Community direction', 'Reporting'],
    },
    {
      title: 'Campaigns & Content',
      description: 'From a single launch to an ongoing content system, we create ideas and assets that move across platforms without losing the core message.',
      tags: ['Campaign concepts', 'Content production', 'Launch assets', 'LinkedIn carousels', 'Social campaigns', 'Sales content'],
    },
  ];

  return (
    <section className="bg-[#E1E1D5] py-20 md:py-32 lg:py-40">
      <div className="container-max max-w-7xl px-6 md:px-12">
        {/* Section Label */}
        <div className="mb-6 md:mb-8">
          <span className="text-gray-600 text-xs md:text-sm font-poppins font-bold tracking-widest uppercase">
            Service Detail
          </span>
        </div>

        {/* Heading */}
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-poppins font-bold text-[#052F23] mb-12 md:mb-16 leading-tight">
          Digital & Marketing
        </h2>

        {/* Service Items */}
        <div className="space-y-12 md:space-y-14">
          {serviceItems.map((item, idx) => (
            <div key={idx}>
              {/* Item Header */}
              <div className="mb-6 md:mb-8">
                <h3 className="text-2xl md:text-3xl font-poppins font-bold text-[#052F23] mb-4 md:mb-6">
                  {item.title}
                </h3>
                <p className="text-base md:text-lg text-[#052F23] leading-relaxed font-normal max-w-3xl">
                  {item.description}
                </p>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 md:gap-3 mb-12 md:mb-14">
                {item.tags.map((tag, tagIdx) => (
                  <span key={tagIdx} className="text-xs md:text-sm text-gray-600 font-normal">
                    {tag}
                    {tagIdx < item.tags.length - 1 && ' •'}
                  </span>
                ))}
              </div>

              {/* Divider */}
              {idx < serviceItems.length - 1 && (
                <div className="w-full h-px bg-gray-300" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
