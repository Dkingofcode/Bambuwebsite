export default function StrategyBrandService() {
  const serviceItems = [
    {
      title: 'Brand Strategy',
      description: 'Before anything is designed, we define what the brand needs to mean. We clarify the audience, position, difference, personality and direction so every creative decision has a reason.',
      tags: ['Brand positioning', 'Audience research', 'Competitive analysis', 'Brand architecture', 'Naming', 'Go-to-market thinking'],
    },
    {
      title: 'Brand Identity',
      description: 'We build visual systems people can recognise across every platform and touchpoint — from the logo and typography to the rules that keep the brand consistent as it grows.',
      tags: ['Logo design', 'Colour and typography', 'Visual language', 'Iconography', 'Brand guidelines', 'Asset library'],
    },
    {
      title: 'Messaging Systems',
      description: 'We shape how the brand speaks, what it repeatedly says and how those ideas adapt across the website, campaigns, social media and sales materials.',
      tags: ['Voice and tone', 'Core messaging', 'Taglines', 'Website copy', 'Campaign copy', 'Sales messaging'],
    },
    {
      title: 'Creative Direction',
      description: 'We define the creative idea and visual world that ties a campaign, launch or communication programme together — so every output feels intentional.',
      tags: ['Campaign concepts', 'Art direction', 'Creative briefing', 'Visual standards', 'Production direction'],
    },
  ];

  return (
    <section className="bg-[#E1E1D5] py-20 md:py-32 lg:py-40">
      <div className="container-max max-w-7xl px-6 md:px-12">
        {/* Heading */}
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-poppins font-bold text-[#052F23] mb-12 md:mb-16 leading-tight">
          Strategy & Brand
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
