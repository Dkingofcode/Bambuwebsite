

// 'use client';

// import { useEffect, useState, useRef } from 'react';



// export default function BambuHero() {
//   const [isVisible, setIsVisible] = useState(false);
//    const sectionRef = useRef<HTMLDivElement>(null);
//   const [scrollOffset, setScrollOffset] = useState(0);

//    // Scroll-linked animation matching Partners section
//   useEffect(() => {
//     const handleScroll = () => {
//       if (!sectionRef.current) return;

//       const rect = sectionRef.current.getBoundingClientRect();
//       const sectionTop = rect.top;
//       const sectionHeight = rect.height;
//       const viewportHeight = window.innerHeight;

//       // Calculate scroll progress relative to the section
//       const scrollProgress = Math.max(0, Math.min(1, (viewportHeight - sectionTop) / (viewportHeight + sectionHeight)));
      
//       // Apply animation based on scroll - total portfolio width calculation
//       // 22 items * (325px + 24px gap) = 7678px per set, with duplicates = 15356px
//       const maxOffset = 7678;
//       const offset = scrollProgress * maxOffset;
//       setScrollOffset(offset);
//     };

//     console.log(scrollOffset);

//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);


//  //const [isVisible, setIsVisible] = useState(false);

//   useEffect(() => {
//     setIsVisible(true);
//   }, []);

//   const proofPoints = [
//     ['Think', 'Strategy, positioning and creative direction.'],
//     ['Build', 'Identity, websites, content and campaigns.'],
//     ['Produce', 'Print, packaging, events and touchpoints.'],
//     ['Support', 'Practical systems that help teams move faster.'],
//   ];

//   return (
//     <section id="home" className="flex min-h-[calc(100svh-90px)] items-center justify-center bg-[#052f23] px-0 py-33 sm:py-36 md:py-28 lg:py-32">
//       <div className="mx-auto  w-full max-w-[1260px] px-[18px]">
//         <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
//           <div className="mb-8 md:mb-10">
//             <p className="text-sm font-poppins font-extrabold leading-tight text-[#d0d731]">Bambu Agency</p>
//           </div>

//           {/* Main Headline */}
//           <h1 className="mb-8 max-w-[900px] text-[clamp(44px,8vw,90px)] font-poppins font-black leading-[0.98] tracking-[-0.038em] md:mb-10">
//             <span className="text-[#E1E1D5]">Creative work that </span>
//             <br className="hidden md:block" />
//             <span className="text-[#E1E1D5]">moves businesses forward.</span>
//           </h1>

//           {/* Yellow accent line */}
//           {/* <div className="w-20 md:w-24 h-1 bg-[#D4F157] mb-10 md:mb-12" /> */}

//           {/* Subheading */}
//           <p className="text-base md:text-lg text-[#9ca19d] mb-14 md:mb-16 max-w-3xl leading-relaxed font-normal">
//             Strategy, identity, websites, campaigns, print, events and practical AI support for businesses that need clearer thinking and better execution.
//           </p>


//           {/* CTA Buttons */}
//           <div className="flex flex-col sm:flex-row gap-4 md:gap-5 py-4">
//             <a
//               href="#contact"
//               className="group relative inline-flex items-center justify-center overflow-hidden rounded-full bg-[#d0d731] px-8 py-3 text-sm font-poppins font-bold text-[#1a3a3a] transition-all duration-500 hover:-translate-y-1 hover:bg-[#E0F77D] hover:shadow-[0_12px_28px_rgba(212,241,87,0.22)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D4F157] focus-visible:ring-offset-2 focus-visible:ring-offset-[#1a3a3a] md:px-10 md:py-4 md:text-base"
//             >
//               <span className="relative h-5 overflow-hidden md:h-6">
//                 <span className="block transition-transform duration-500 ease-[cubic-bezier(.2,.8,.2,1)]">Start a project</span>
//                 {/* <span aria-hidden="true" className="absolute left-0 top-full block text-[#1a3a3a] transition-transform duration-500 ease-[cubic-bezier(.2,.8,.2,1)] group-hover:-translate-y-full">BUILD WITH US&nbsp; →</span> */}
//               </span>
//             </a>
//             <a
//               href="#work"
//               className="group relative inline-flex items-center justify-center overflow-hidden rounded-full border-2 border-[#d0d731] px-8 py-3 text-sm font-poppins font-bold text-[#d0d731] transition-all duration-500 hover:-translate-y-1 hover:bg-[#D4F157] hover:text-[#1a3a3a] hover:shadow-[0_12px_28px_rgba(212,241,87,0.18)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D4F157] focus-visible:ring-offset-2 focus-visible:ring-offset-[#1a3a3a] md:px-10 md:py-4 md:text-base"
//             >
//               <span className="relative h-5 overflow-hidden md:h-6">
//                 <span className="block transition-transform duration-500 ease-[cubic-bezier(.2,.8,.2,1)]">VIEW  WORK</span>
//                 {/* <span aria-hidden="true" className="absolute left-0 top-full block text-[#1a3a3a] transition-transform duration-500 ease-[cubic-bezier(.2,.8,.2,1)] group-hover:-translate-y-full">VIEW OUR WORK&nbsp; →</span> */}
//               </span>
//             </a>
//           </div>

//           <div className="grid max-w-[680px] grid-cols-2 gap-2.5 md:gap-3.5" aria-label="Bambu service summary">
//             {proofPoints.map(([title, description], idx) => (
//               <div
//                 key={title}
//                 className={`rounded-[14px] border border-white/10 bg-white/[0.05] p-3.5 transition-all duration-700 md:p-4 ${
//                   isVisible ? 'translate-y-0 opacity-100' : 'translate-y-3 opacity-0'
//                 }`}
//                 style={{ transitionDelay: `${idx * 70}ms` }}
//               >
//                 <strong className="block text-base font-extrabold text-[#e1e1d5]">{title}</strong>
//                 <span className="mt-1.5 block text-[13px] leading-[1.35] text-[#9ca19d]">{description}</span>
//               </div>
//             ))}
//           </div>

          
//         </div>
//       </div>
//     </section>
//   );
// }














'use client';

export default function BambuHero() {
  return (
    <section className="bg-[#071e16] px-4 pb-10 pt-[90px] md:px-10 md:pb-20 lg:px-15 lg:py-35">
      <div className="bg-[#002d22] relative mx-auto flex min-h-[650px] w-full max-w-[1260px] overflow-hidden bg-[#0d1412] px-30 py-10 md:px-12 lg:px-12">
        <div aria-hidden="true" className="pointer-events-none absolute inset-0 opacity-90">
          <div className="absolute inset-y-0 left-0 w-[27%] bg-[#08261f]" />
          <div className="absolute inset-y-0 left-[27%] w-[31%] border-x border-[#174438] bg-[#0b3328]" />
          <div className="absolute inset-y-0 right-0 w-[42%] bg-[#092b23]" />
          <div className="absolute -bottom-24 left-[31%] h-64 w-[57%] -rotate-3 rounded-[48%] border border-[#1b4b3d] bg-[#0b392d]" />
          <div className="absolute right-[14%] top-14 h-56 w-[38%] -rotate-2 rounded-[18px] border border-[#1b4b3d] bg-[#0b3328] shadow-[inset_0_0_0_16px_rgba(2,35,27,.4)]" />
          <div className="absolute left-[38%] top-28 h-16 w-16 rounded-full border border-[#83972d]/70" />
          <div className="absolute left-[38.9%] top-[117px] h-20 w-px rotate-45 bg-[#83972d]/70" />
          <div className="absolute right-[28%] top-[52%] h-10 w-10 rounded-full border border-[#83972d]/50" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#031e17]/80 via-[#031e17]/20 to-[#031e17]/40" />
        </div>

        <div className="relative z-10 flex w-full flex-col justify-between self-stretch">
          <div className="flex justify-between text-sm text-[#d9e5df]">
            <span>Bambu Agency</span>
            <span>Showreel coming soon</span>
          </div>
          <div className="my-auto max-w-[1140px] pt-16">
            <p className="mb-5 text-base font-bold text-[#b5f536]">Strategy · Identity · Production</p>
            <h1 className="max-w-[1120px] text-[clamp(48px,6.2vw,90px)] font-medium leading-[1.04] tracking-[-0.055em] text-[#edf5f0]">Bambu makes brands look,<br className="hidden md:block" /> feel and work better.</h1>
            <p className="mt-6 max-w-[720px] text-lg leading-[1.35] text-[#d9e5df] md:text-xl">Brand strategy, identity, websites, campaigns, print production and creative support<br className="hidden md:block" /> for growing businesses.</p>
            <a href="#contact" className="mt-8 inline-flex items-center gap-5 rounded-md bg-[#b5f536] px-10 py-4 text-lg font-medium text-[#062c22] transition-transform hover:-translate-y-1">Start a project <span aria-hidden="true" className="text-2xl">→</span></a>
          </div>
          <button type="button" aria-label="Play showreel" className="absolute left-1/2 top-1/2 grid h-24 w-24 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full border border-white/40 transition-colors hover:bg-white/10"><span aria-hidden="true" className="ml-1 h-0 w-0 border-y-[14px] border-l-[22px] border-y-transparent border-l-[#b5f536]" /></button>
        </div>
      </div>
    </section>
  );
}
