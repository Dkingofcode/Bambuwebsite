export default function ProductionService() {
  const serviceItems = [
    {
      title: 'Print Production',
      description: 'We take the brand into the physical world through materials that feel considered, consistent and worth keeping.',
      tags: ['Publications', 'Packaging', 'Stationery', 'Corporate collateral', 'Signage', 'Printed marketing materials'],
    },
    {
      title: 'Event Branding',
      description: 'We shape how an event looks and feels across every physical and digital touchpoint — from the first announcement to the guest experience.',
      tags: ['Event identity', 'Stage branding', 'Passes', 'Wristbands', 'Directional signage', 'Vendor kits', 'Merchandise'],
    },
    {
      title: 'Film & Photography',
      description: 'We produce visual stories that help brands explain, launch, document and sell — from concept through final delivery.',
      tags: ['Brand films', 'Corporate films', 'Photography direction', 'Campaign shoots', 'Event content'],
    },
    {
      title: 'Animation & Motion',
      description: 'When an idea needs movement, we bring it to life with animation and motion systems designed around the message.',
      tags: ['2D animation', 'Motion graphics', 'Explainer videos', 'Animated campaigns', 'Social motion assets'],
    },
  ];

  return (
    <section className="bg-[#E1E1D5] py-20 md:py-32 lg:py-40">
      <div className="container-max max-w-7xl px-6 md:px-12">
        {/* Heading */}
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-poppins font-bold text-[#052F23] mb-12 md:mb-16 leading-tight">
          Production & Experiences
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
