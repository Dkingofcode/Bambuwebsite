'use client';

import Testimonials from '../components/Testimonials';
import Footer from '../components/Footer';
import Navigation from '../components/Navigation';

const processSteps = [
  ['01', 'We start with the business.', 'Before colour, copy or format, we get clear on what needs to change and who needs to care.'],
  ['02', 'We connect the work.', 'Strategy, identity, digital and production are treated as one system rather than separate assignments.'],
  ['03', 'We deliver clearly.', 'Outputs, files, documentation and handover are organised so the work remains useful after launch.'],
];

export default function AboutPageContent() {
  return (
    <main>
        <Navigation />
       <section className="bg-[#0b211b] px-6 pb-24 pt-36 text-[#edf5f0] md:px-10 md:pb-32 md:pt-44 lg:px-16 lg:pt-48">
        <div className="mx-auto max-w-[1260px]">
          <p className="text-base font-bold text-[#b5f536]">About Bambu</p>
          <h1 className="mt-10 max-w-[1220px] text-8xl font-medium leading-[0.96] tracking-[-0.065em]">
            <span className="block">A creative partner for</span>
            <span className="block">brands that are</span>
            <span className="block">building.</span>
          </h1>
          <p className="mt-10 max-w-[760px]  leading-[1.35] text-[#b9cec5]">
            We create brand identities, websites, campaigns and printed experiences for businesses that want to show up clearly and consistently.
          </p>
        </div>
      </section>

      <section className="border-b border-[#315c50] bg-[#e8f0ec] px-6 py-24 text-[#002d22] md:px-10 md:py-32 lg:px-16 lg:py-36">
        <div className="mx-auto grid max-w-[1260px] gap-16 md:grid-cols-[minmax(180px,0.56fr)_minmax(0,1fr)] md:gap-16">
          <p className="text-base font-bold">The Panders</p>
          <div>
            <h2 className="max-w-[760px] text-6xl font-medium leading-[0.98] tracking-[-0.06em]">The project may end. The partnership does not.</h2>
            <p className="mt-10 max-w-[640px]   leading-[1.35]">Every business that builds with us becomes part of our community. We watch what happens next, learn from how the work performs and help spot the next move.</p>
          </div>
        </div>
      </section>

      <Testimonials />

      <section className="bg-[#041f19] px-6 py-20 text-[#edf5f0] md:px-10 md:py-28 lg:px-16 lg:py-32">
        <div className="mx-auto max-w-[1260px]">
          <p className="border-b border-[#315c50] pb-10 text-base font-bold text-[#b5f536]">How we work</p>
          <div>
            {processSteps.map(([number, title, description]) => (
              <div key={number} className="grid gap-6 border-b border-[#315c50] py-10 md:grid-cols-[72px_minmax(0,1fr)_minmax(280px,0.9fr)] md:items-start md:gap-8 md:py-12">
                <span className="text-base text-[#b5f536]">{number}</span>
                <h2 className="text-3xl font-normal leading-[1.05] tracking-[-0.04em]">{title}</h2>
                <p className="max-w-[470px] text-[14px] leading-[1.4] text-[#b9cec5]">{description}</p>
              </div>
            ))}
          </div>
          <a href="#footer" className="mt-12 inline-flex items-center gap-4 text-base font-bold text-[#b5f536]">Build with Bambu <span aria-hidden="true" className="text-xl">→</span></a>
        </div>
      </section>

      <Footer />
    </main>
  );
}


// bg-[#0b211b]