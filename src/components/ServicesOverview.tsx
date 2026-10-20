const serviceGroups = [
  {
    number: '01',
    title: 'Brand strategy',
    description: 'We get clear on your audience, position and purpose so every decision has a direction.',
    items: ['Research & discovery', 'Positioning', 'Brand architecture', 'Messaging strategy'],
  },
  {
    number: '02',
    title: 'Brand identity',
    description: 'We turn that strategy into a distinctive visual and verbal world people remember.',
    items: ['Logo & identity design', 'Visual systems', 'Brand voice', 'Guidelines', 'Brand stewardship'],
  },
  {
    number: '03',
    title: 'Print, packaging & events',
    description: 'We design and produce packaging, printed materials, merchandise and event branding people can hold and experience.',
    items: ['Print production', 'Packaging & merchandise', 'Event materials', 'Event branding'],
  },
  {
    number: '04',
    title: 'Website & digital',
    description: 'We design websites, landing pages and digital experiences that help people understand and choose you.',
    items: ['Web design', 'Landing pages', 'Digital products', 'Content systems'],
  },
  {
    number: '05',
    title: 'Campaign & marketing',
    description: 'We create campaigns, content plans and social media systems that put your brand in front of people.',
    items: ['Campaign direction', 'Social systems', 'Content strategy', 'Launch support'],
  },
  {
    number: '06',
    title: 'Creative partnership',
    description: 'Ongoing strategy and execution for teams that need one clear creative partner over time.',
    items: ['Creative direction', 'Campaign support', 'Design retainers', 'Brand stewardship'],
  },
];

export default function ServicesPageContent() {
  return (
    <section className="bg-[#0b211b] px-6 pb-24 pt-[150px] text-[#edf5f0] md:px-10 lg:px-16 lg:pb-32 lg:pt-[166px]">
      <div className="mx-auto max-w-[1260px]">
        <header className="max-w-[920px] border-b border-[#7d9c90]/35 pb-24 lg:pb-28">
          <p className="mb-10 text-sm font-semibold text-[#b5f536]">Services</p>
          <h1 className="max-w-[1100px] text-8xl font-medium leading-[0.98] tracking-[-0.005em]">What we can do for your business.</h1>
          <p className="mt-8 max-w-[760px] text-sm leading-[1.45] text-[#bdd0c7] md:text-xl">Brand identity, websites, campaigns, print production, event branding and practical business support — planned and made together.</p>
        </header>

        <div>
          {serviceGroups.map((service) => (
            <article
  key={service.number}
  className="grid gap-10 border-b border-[#7d9c90]/35 py-16 md:grid-cols-[70px_minmax(0,1fr)_minmax(390px,0.95fr)] md:gap-x-5 md:gap-y-12 md:py-16 lg:grid-cols-[100px_minmax(0,1fr)_minmax(520px,0.9fr)] lg:gap-x-6 lg:gap-y-12 lg:py-[68px]"
>
              <p className="text-sm font-medium text-[#b5f536]">{service.number}</p>
              <div>
                <h2 className="text-4xl font-normal leading-[1.04] tracking-[-0.055em]">{service.title}</h2>
                <p className="mt-7 max-w-[370px] text-base text-sm leading-[1.45] text-[#bdd0c7] md:text-sm">{service.description}</p>
              </div>
              <ul className="w-96 border-t border-[#7d9c90]/20 lg:justify-self-end">
                {service.items.map((item) => (
                  <li key={item} className="border-b border-[#7d9c90]/20 py-4 text-base text-[#d6e3dd] md:text-sm">{item}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>

        <a href="#contact" className="mt-14 inline-flex items-center gap-3 text-base font-semibold text-[#b5f536] transition-transform hover:translate-x-1">Discuss your project <span aria-hidden="true" className="text-xl">→</span></a>
      </div>
    </section>
  );
}
