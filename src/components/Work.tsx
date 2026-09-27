const projects = [
  {
    client: 'ShopInverse',
    category: 'Identity + packaging',
    title: 'Retail touchpoints customers actually hold.',
    description: 'A brand and packaging system across bags, envelopes, stationery, tees and customer-facing materials.',
  },
  {
    client: 'Votelina',
    category: 'Event branding',
    title: 'Graduation materials delivered under pressure.',
    description: 'Banners, certificates, frames, plaques, wrist tags and PVC boards with pre-production checks.',
  },
  {
    client: 'Khynetic',
    category: 'Studio direction',
    title: 'A sharper creative world for a 2D animation studio.',
    description: 'Positioning, presentation direction and marketing language for African-grounded animation work.',
  },
]

export default function WorkPreview() {
  return (
    <section id="work" aria-labelledby="work-preview-title" className="bg-[#052F23] py-16 text-[#e6e3d2] md:py-24">
      <div className="mx-auto w-full max-w-[1260px] px-4 md:px-6">
        <p className="mb-5 text-base font-poppins font-extrabold leading-tight text-[#d0d731]">Work preview</p>
        <h2 id="work-preview-title" className="max-w-[1050px] text-[clamp(42px,7.5vw,80px)] font-poppins font-black leading-[0.98] tracking-[-0.055em]">
          Every project starts with the business problem first.
        </h2>
        <div className="mt-10 grid grid-cols-1 gap-4 md:grid-cols-3">
          {projects.map((project) => (
            <article key={project.client} className="min-h-[294px] rounded-[22px] border border-[#315c50] bg-[#10362b] p-6 transition-transform duration-200 hover:-translate-y-1">
              <div className="flex items-start justify-between gap-4">
                <span className="text-base font-poppins font-black text-[#d0d731]">{project.client}</span>
                <span className="text-right text-base leading-tight text-[#b8c5ba]">{project.category}</span>
              </div>
              <h3 className="mt-5 max-w-[320px] text-[29px] font-poppins font-black leading-[1.1] tracking-[-0.035em] text-[#e6e3d2]">{project.title}</h3>
              <p className="mt-5 max-w-[360px] text-[19px] leading-[1.55] text-[#9ca19d]">{project.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
