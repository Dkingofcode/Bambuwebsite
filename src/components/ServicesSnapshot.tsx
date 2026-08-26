export default function ServicesSnapshot() {
  const services = [
    {
      number: '01',
      title: 'Strategy & Brand',
      description: 'Positioning, identity, messaging, creative direction and the systems that make the brand recognisable.',
      bgColor: 'bg-[#E1E1D7]',
      borderStyle: 'border border-gray-300',
      isDark: false,
      isNew: false,
    },
    {
      number: '02',
      title: 'Digital',
      description: 'Websites, landing pages, UI/UX and digital experiences designed around how people actually decide.',
      bgColor: 'bg-[#eef9d7]',
      borderStyle: 'border border-gray-300',
      isDark: false,
      isNew: false,
    },
    {
      number: '03',
      title: 'Marketing',
      description: 'Campaigns, content, social media and communication that keeps the brand relevant and visible.',
      bgColor: 'bg-[#E1E1D5]',
      borderStyle: 'border border-gray-300',
      isDark: false,
      isNew: false,
    },
    {
      number: '04',
      title: 'Production',
      description: 'Film, photography, animation, print, merchandise and event experiences brought to life properly.',
      bgColor: 'bg-[#eef9d7]',
      borderStyle: 'border border-gray-300',
      isDark: false,
      isNew: false,
    },
    {
      number: '05',
      title: 'AI Business Support',
      description: 'Practical systems for customer response, scheduling, follow-up and repetitive operational work.',
      bgColor: 'bg-[#052F23]',
      borderStyle: '',
      isDark: true,
      isNew: true,
    },
    {
      number: '06',
      title: 'One creative partner.',
      description: 'For businesses that want strategy and execution connected from the beginning.',
      bgColor: 'bg-[#E1E1D5]',
      borderStyle: 'border border-gray-300',
      isDark: false,
      isNew: false,
      isFullSystem: true,
    },
  ];

  return (
    <section className="bg-[#E1E1D5] py-20 md:py-32 lg:py-40">
      <div className="container-max max-w-7xl px-6 md:px-12">
        {/* Headline */}
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-poppins font-bold text-[#1a3a3a] mb-6 md:mb-8 leading-tight">
          Creative services built to work together.
        </h2>
        
        {/* Subheading */}
        <p className="text-base md:text-lg text-[#1a3a3a] mb-16 md:mb-20 max-w-3xl leading-relaxed font-normal">
          Businesses do not experience your brand one service at a time. Neither should you.
        </p>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-16 md:mb-20">
          {services.map((service) => (
            <div
              key={service.number}
              className={`${service.bgColor} ${service.borderStyle} rounded-2xl p-8 md:p-10 transition-all duration-300 hover:shadow-lg ${
                service.isDark ? 'text-[#E1E1D5]' : 'text-[#1a3a3a]'
              }`}
            >
              {/* Service Number */}
              <div className={`text-xs md:text-sm font-poppins font-bold tracking-widest uppercase mb-4 md:mb-6 ${
                service.isDark ? 'text-gray-400' : 'text-gray-600'
              }`}>
                {service.number}
                {service.isNew && ' · NEW'}
                {service.isFullSystem && ' FULL SYSTEM'}
              </div>

              {/* Service Title */}
              <h3 className={`text-2xl md:text-3xl font-poppins font-bold mb-4 md:mb-6 leading-tight ${
                service.isDark ? 'text-[#E1E1D5]' : 'text-[#1a3a3a]'
              }`}>
                {service.title}
              </h3>

              {/* Service Description */}
              <p className={`leading-relaxed text-base md:text-lg ${
                service.isDark ? 'text-gray-300' : 'text-gray-700'
              }`}>
                {service.description}
              </p>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <a
          href="/services"
          className="inline-block px-8 md:px-10 py-3 md:py-4 bg-[#D0D731] text-[#052F23] font-poppins font-bold rounded-4xl text-sm md:text-base transition-all duration-300 hover:bg-[#E0F77D]"
        >
          EXPLORE ALL SERVICES
        </a>
      </div>
    </section>
  );
}
