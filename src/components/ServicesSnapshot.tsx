export default function ServicesSnapshot() {
  const services = [
    {
      number: '01',
      title: 'Strategy & Brand',
      description: 'Positioning, identity, messaging, and systems that make the brand easier to understand.',
      bgColor: 'bg-[#e5e5db]',
      borderStyle: 'border border-gray-300',
      isDark: false,
      isNew: false,
    },
    {
      number: '02',
      title: 'Digital',
      description: 'Websites, landing pages and digital experiences designed around how people decide.',
      bgColor: 'bg-[#f1fcca]',
      borderStyle: 'border border-gray-300',
      isDark: false,
      isNew: false,
    },
    {
      number: '03',
      title: 'Marketing',
      description: 'Campaigns, content direction and social media systems that keep the brand visible.',
      bgColor: 'bg-[#e5e5db]',
      borderStyle: 'border border-gray-300',
      isDark: false,
      isNew: false,
    },
    {
      number: '04',
      title: 'Production',
      description: 'Print, packaging, merchandise, film, photography, animation and event touchpoints.',
      bgColor: 'bg-[#e5e5db]',
      borderStyle: 'border border-gray-300',
      isDark: false,
      isNew: false,
    },
    {
      number: '05',
      title: 'AI Business Support',
      description: 'Practical systems for response, scheduling, follow-up and repetitive operations.',
      bgColor: 'bg-[#052f23]',
      borderStyle: '',
      isDark: true,
      isNew: true,
    },
    {
      number: '06',
      title: 'One creative partner.',
      description: 'Ongoing support for businesses that need strategy and execution connected over time.',
      bgColor: 'bg-[#e5e5db]',
      borderStyle: 'border border-gray-300',
      isDark: false,
      isNew: false,
      isFullSystem: true,
    },
  ];

  return (
    <section id="services"  className="bg-[#e1e1d5] py-16 text-[#082f25] md:py-24">
      <div className="mx-auto w-full max-w-[1260px] px-[18px]">
        <p className="mb-4 text-sm font-poppins font-extrabold leading-tight text-[#315332]">Services</p>
        <h2 className="max-w-[840px] text-[clamp(32px,6vw,62px)] font-poppins font-black leading-[1.03] tracking-[-0.038em]">
          Creative services built to work together.
        </h2>
        {/* <p className="mt-5 max-w-[720px] text-[17px] leading-[1.7] text-[rgba(8,47,37,0.72)]">
          Businesses do not experience your brand one service at a time. Neither should you.
        </p> */}

        {/* Services Grid */}
        <div className="mt-7 grid grid-cols-1 gap-3.5 md:grid-cols-3">
          {services.map((service) => (
            <div
              key={service.number}
              className={`${service.bgColor} ${service.borderStyle} rounded-[18px] p-5 transition-all duration-200 hover:-translate-y-1 hover:shadow-[0_18px_40px_rgba(8,47,37,0.1)] md:min-h-[250px] md:p-6 ${
                service.isDark ? 'text-[#e1e1d5]' : 'text-[#1a3a3a]'
              }`}
            >
              {/* Service Number */}
              <div className={`text-xs md:text-sm font-poppins font-bold tracking-widest uppercase mb-4 md:mb-6 ${
                service.isDark ? 'text-[#d0d731]' : 'text-gray-600'
              }`}>
                {service.number}
                
              </div>

              {/* Service Title */}
              <h3 className={`text-2xl md:text-[28px] font-poppins font-black mb-3 leading-[1.08] tracking-[-0.025em] ${
                service.isDark ? 'text-[#e1e1d5]' : 'text-[#092f2f]'
              }`}>
                {service.title}
              </h3>

              {/* Service Description */}
              <p className={`leading-relaxed text-base md:text-lg ${
                service.isDark ? 'text-[#9ca19d]' : 'text-[#4e6660]'
              }`}>
                {service.description}
              </p>
            </div>
          ))}
        </div>

        
      </div>
    </section>
  );
}
