// const projects = [
//   {
//     client: 'ShopInverse',
//     category: 'Identity + packaging',
//     title: 'Retail touchpoints customers actually hold.',
//     description: 'A brand and packaging system across bags, envelopes, stationery, tees and customer-facing materials.',
//   },
//   {
//     client: 'Votelina',
//     category: 'Event branding',
//     title: 'Graduation materials delivered under pressure.',
//     description: 'Banners, certificates, frames, plaques, wrist tags and PVC boards with pre-production checks.',
//   },
//   {
//     client: 'Khynetic',
//     category: 'Studio direction',
//     title: 'A sharper creative world for a 2D animation studio.',
//     description: 'Positioning, presentation direction and marketing language for African-grounded animation work.',
//   },
// ]

// export default function WorkPreview() {
//   return (
//     <section id="work" aria-labelledby="work-preview-title" className="bg-[#052F23] py-16 text-[#e6e3d2] md:py-24">
//       <div className="mx-auto w-full max-w-[1260px] px-4 md:px-6">
//         <p className="mb-5 text-base font-poppins font-extrabold leading-tight text-[#d0d731]">Work preview</p>
//         <h2 id="work-preview-title" className="max-w-[1050px] text-[clamp(42px,7.5vw,80px)] font-poppins font-black leading-[0.98] tracking-[-0.055em]">
//           Every project starts with the business problem first.
//         </h2>
//         <div className="mt-10 grid grid-cols-1 gap-4 md:grid-cols-3">
//           {projects.map((project) => (
//             <article key={project.client} className="min-h-[294px] rounded-[22px] border border-[#315c50] bg-[#10362b] p-6 transition-transform duration-200 hover:-translate-y-1">
//               <div className="flex items-start justify-between gap-4">
//                 <span className="text-base font-poppins font-black text-[#d0d731]">{project.client}</span>
//                 <span className="text-right text-base leading-tight text-[#b8c5ba]">{project.category}</span>
//               </div>
//               <h3 className="mt-5 max-w-[320px] text-[29px] font-poppins font-black leading-[1.1] tracking-[-0.035em] text-[#e6e3d2]">{project.title}</h3>
//               <p className="mt-5 max-w-[360px] text-[19px] leading-[1.55] text-[#9ca19d]">{project.description}</p>
//             </article>
//           ))}
//         </div>
//       </div>
//     </section>
//   )
// }


const projects = [
  // {
  //   client: 'ShopInverse',
  //   category: 'Identity · Packaging · Production',
  //   image: '',
  //   alt: 'ShopInverse branded campaign and graduation materials',
  // },
  {
    client: 'Votelina',
    category: 'Event branding · 2025',
    image: './public/work-votelina.jpg',
    alt: 'Graduation ceremony identity materials and certificate presentation',
    description: 'A coordinated set of event materials designed to make a milestone feel considered from stage to certificate.'
  },
  {
    client: 'Khynetic',
    category: 'Studio direction · 2024',
    image: './public/work-khynetic.jpg',
    alt: 'Brighter future campaign artwork in green and lime',
    description: 'A bold visual direction that gives an animation studio more energy, character and room to move.'
  },
]

export default function WorkPreview() {
  return (
    <section aria-labelledby="work-preview-title" className="bg-[#051d18] py-16 text-[#edf5f0] md:py-24 lg:py-28">
      <div className="mx-auto w-full max-w-[1260px] px-4 md:px-6 lg:px-0">
        <div className="flex items-end justify-between gap-8">
          <div>
            <p className="mb-5 text-sm font-bold text-[#b5f536]">Selected work</p>
            <h2 id="work-preview-title" className="text-[clamp(48px,7vw,78px)] font-medium leading-[1.02] tracking-[-0.055em]">
              Built for the real world.
            </h2>
          </div>
          <a href="#contact" className="mb-2 hidden shrink-0 text-base text-[#b5f536] transition-opacity hover:opacity-70 md:inline-flex md:items-center md:gap-2">
            View all work <span aria-hidden="true" className="text-xl">→</span>
          </a>
        </div>

        <article className="mt-12 overflow-hidden bg-[#0a211c] md:mt-14">
          <img src="./public/work-shopinverse.jpg" alt="Bambu branded campaign and graduation materials" className="h-[360px] w-full object-cover object-center md:h-[560px] lg:h-[680px]" />
          <div className="border-t  border-white/20 py-5 md:flex md:items-center md:justify-between">
            {/* <div className="border border-red-500 flex items-center justify-between gap-4"> */}
                  <p className="text-sm font-bold text-[#b5f536]">Identity + Packaging · 2025</p>
                  <span aria-hidden="true" className="text-2xl text-[#b5f536]">↗</span>
                {/* </div> */}
            
            {/* <p className="text-sm font-bold text-[#b5f536]">Identity · Packaging · Production</p>
            <p className="mt-2 text-2xl md:mt-0"> <span aria-hidden="true" className="ml-3 text-[#b5f536]">↗</span></p> */}
          </div>
          <h3 className="mt-3 text-3xl font-medium tracking-[-0.04em]">ShopInverse</h3>
          <p>A brand and packaging system across bags, envelopes, stationery, tees and customer-facing materials.</p>
        </article>

        <div className="mt-14 grid gap-8 md:grid-cols-2 md:gap-7">
          {projects.map((project) => (
            <article key={project.client}>
              <img src={project.image} alt={project.alt} className="h-[300px] w-full object-cover object-left md:h-[390px]" />
              <div className="mt-5 border-t border-white/25 pt-5">
                <div className="flex items-center justify-between gap-4">
                  <p className="text-sm font-bold text-[#b5f536]">{project.category}</p>
                  <span aria-hidden="true" className="text-2xl text-[#b5f536]">↗</span>
                </div>
                <h3 className="mt-3 text-3xl font-medium tracking-[-0.04em]">{project.client}</h3>
                <p>{project.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
