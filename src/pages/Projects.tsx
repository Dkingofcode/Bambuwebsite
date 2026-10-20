import Navigation from '../components/Navigation';
//import Testimonials from '../components/Testimonials';
//import FinalCTA from '../components/FinalCTA';
//import Work from "../components/Work";
import Footer from '../components/Footer';

export const metadata = {
  title: 'Work | Bambu',
  description: 'Case studies showing different businesses, different problems, thoughtful creative responses.',
};

export default function WorkPage() {
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

  return (
    <main>
      <Navigation />
      <section aria-labelledby="work-preview-title" className="bg-[#051d18] py-16 text-[#edf5f0] md:py-24 lg:py-28">
      <div className="mx-auto w-full max-w-[1260px] px-4 md:px-6 lg:px-0">
        <div className="flex items-end justify-between gap-8">
          <div>
            <p className="mb-5 text-sm font-bold text-[#b5f536]">Selected work</p>
            <h2 id="work-preview-title" className="text-[clamp(48px,7vw,78px)] font-medium leading-[1.02] tracking-[-0.055em]">
              Work you can see and use
            </h2>
            <p className='pt-10'>Brand identities, packaging, event materials and creative direction made for real businesses.</p>
          </div>
          {/* <a href="#contact" className="mb-2 hidden shrink-0 text-base text-[#b5f536] transition-opacity hover:opacity-70 md:inline-flex md:items-center md:gap-2">
            View all work <span aria-hidden="true" className="text-xl">→</span>
          </a> */}
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
      
      
      <Footer />
    </main>
  );
}
