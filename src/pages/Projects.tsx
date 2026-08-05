// import Navigation from '../components/Navigation';
// import PortfolioShowcase from '../components/PortfolioShowcase';
// //import Testimonials from '../components/Testimonials';
// import Footer from '../components/Footer';

// export const metadata = {
//   title: 'Projects | MarkaWorks',
//   description: 'Explore our portfolio of transformative branding projects.',
// };

// export default function ProjectsPage() {
//   return (
//     <main>
//       <Navigation />
      
//       {/* Hero Section */}
//       <section className="bg-[#052F23] py-20 md:py-28">
//         <div className="container-max">
//           <h1 className="text-5xl md:text-7xl font-poppins font-bold text-white mb-6">
//             Our <span className="text-[#E7B621]">Projects</span>
//           </h1>
//           <p className="text-xl text-gray-400 max-w-2xl">
//             Explore the transformative work we&apos;ve done for leading brands across industries.
//           </p>
//         </div>
//       </section>

//       {/* Portfolio Showcase */}
//       <PortfolioShowcase />

//       {/* Testimonials */}
//       {/* <Testimonials /> */}

//       <Footer />
//     </main>
//   );
// }












import Navigation from '../components/Navigation';
//import Testimonials from '../components/Testimonials';
//import FinalCTA from '../components/FinalCTA';
import Footer from '../components/Footer';

export const metadata = {
  title: 'Work | Bambu',
  description: 'Case studies showing different businesses, different problems, thoughtful creative responses.',
};

export default function WorkPage() {
  const caseStudies = [
    {
      name: 'La Mama Coffee',
      service: 'Strategy & Brand',
      outcome: 'Established specialty coffee brand with cohesive identity and market positioning.',
    },
    {
      name: 'Holme Fragrance',
      service: 'Digital & Brand',
      outcome: 'Luxury fragrance brand with immersive digital experience and premium packaging.',
    },
    {
      name: 'Bars Nutrition',
      service: 'Strategy & Marketing',
      outcome: 'Sports nutrition brand with targeted campaigns reaching 50K+ health-conscious consumers.',
    },
    {
      name: 'Rauph Luxury',
      service: 'Brand & Production',
      outcome: 'High-end brand with comprehensive visual identity and production ecosystem.',
    },
    {
      name: 'SkinDeep Beauty',
      service: 'Digital & Campaign',
      outcome: 'Beauty tech startup with 5x increase in customer engagement through digital experiences.',
    },
    {
      name: 'Yu Tea',
      service: 'Full System',
      outcome: 'Premium tea brand with complete brand system, digital presence, and 3K+ new customers.',
    },
  ];

  return (
    <main>
      <Navigation />
      
      {/* Work Hero Section */}
      <section className="bg-[#052F23] py-20 md:py-32 lg:py-40">
        <div className="container-max max-w-7xl px-6 md:px-12">
          {/* Section Label */}
          <div className="mb-12 md:mb-16">
            <span className="text-[#D0D731] text-xs md:text-sm font-poppins font-bold tracking-widest uppercase">
              Work
            </span>
          </div>

          {/* Main Headline */}
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-poppins font-bold leading-tight mb-8 md:mb-10">
            <span className="text-[#E1E1D5]">Different businesses. </span>
            <br />
            <span className="text-[#D0D731]">Different problems. </span>
            <br />
            <span className="text-[#E1E1D5]">Thoughtful creative responses.</span>
          </h1>

          {/* Yellow accent line */}
          <div className="w-20 md:w-24 h-1 bg-[#D0D731] mb-10 md:mb-12" />

          {/* Body Text */}
          <p className="text-base md:text-lg text-gray-400 leading-relaxed max-w-3xl font-normal">
            Every case study should show the challenge, the thinking, what Bambu built and what changed.
          </p>
        </div>
      </section>

      {/* Case Study Structure & Format */}
      <section className="bg-[#052F23] py-16 md:py-20">
        <div className="container-max max-w-7xl px-6 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
            {/* Case Study Structure
            <div className="bg-[#315332] rounded-lg p-8 md:p-10">
              <div className="text-xs md:text-sm font-poppins font-bold text-[#D0D731] tracking-widest uppercase mb-6 md:mb-8">
                Case Study Structure
              </div>
              <div className="space-y-4">
                <div>
                  <p className="text-[#D0D731] font-bold text-sm md:text-base">01 · The business context</p>
                </div>
                <div>
                  <p className="text-[#D0D731] font-bold text-sm md:text-base">02 · The problem</p>
                </div>
                <div>
                  <p className="text-[#E1E1D5] font-semibold text-sm md:text-base">03 · The strategic direction</p>
                </div>
                <div>
                  <p className="text-[#E1E1D5] font-semibold text-sm md:text-base">04 · What we built</p>
                </div>
                <div>
                  <p className="text-[#E1E1D5] font-semibold text-sm md:text-base">05 · The result</p>
                </div>
              </div>
            </div> */}

            {/* Project Card Format
            <div className="bg-[#315332] rounded-lg p-8 md:p-10">
              <div className="text-xs md:text-sm font-poppins font-bold text-[#D0D731] tracking-widest uppercase mb-6 md:mb-8">
                Project Card Format
              </div>
              <div className="space-y-4">
                <div>
                  <p className="text-[#E1E1D5] font-semibold text-sm md:text-base">Project name</p>
                </div>
                <div>
                  <p className="text-[#E1E1D5] font-semibold text-sm md:text-base">Service category</p>
                </div>
                <div>
                  <p className="text-[#E1E1D5] font-semibold text-sm md:text-base">One-line outcome</p>
                </div>
                <div>
                  <p className="text-gray-400 font-semibold text-sm md:text-base">View case study →</p>
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="bg-[#E1E1D5] py-20 md:py-32 lg:py-40">
        <div className="container-max max-w-7xl px-6 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {caseStudies.map((study, idx) => (
              <div
                key={idx}
                className="bg-[#E1E1D5] border border-gray-300 rounded-2xl overflow-hidden hover:shadow-lg transition-all duration-300"
              >
                {/* Image Area */}
                <div className="relative bg-gradient-to-br from-[#D0D731] via-[#052F23] to-[#0f2f2f] aspect-video flex items-center justify-center">
                  <div className="text-center">
                    <p className="text-gray-400 text-sm md:text-base font-poppins font-bold">{study.service}</p>
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-6 md:p-8">
                  <h3 className="text-xl md:text-2xl font-poppins font-bold text-[#052F23] mb-3 md:mb-4">
                    {study.name}
                  </h3>
                  <p className="text-base text-gray-700 leading-relaxed mb-4 md:mb-6">
                    {study.outcome}
                  </p>
                  <a
                    href="#"
                    className="text-[#D0D731] hover:text-[#052F23] font-semibold text-sm md:text-base transition-colors"
                  >
                    View case study →
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      {/* <Testimonials /> */}

      {/* Final CTA */}
      {/* <FinalCTA /> */}

      <Footer />
    </main>
  );
}
