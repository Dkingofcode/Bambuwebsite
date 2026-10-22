'use client';

export default function BambuHero() {
  return (
    // <section className="bg-[#071e16] px-4 pb-10 pt-[90px] md:px-10 md:pb-20 lg:px-15 lg:py-35">
    //   <div className="bg-[#002d22] relative mx-auto flex min-h-[650px] w-full max-w-[1260px] overflow-hidden bg-[#0d1412] px-30 py-10 md:px-12 lg:px-12">
       
       <section className="bg-[#071e16] px-3 pb-6 pt-[78px] sm:px-4 sm:pb-10 md:px-10 md:pb-20 lg:px-0">
  <div className="bg-[#002d22] relative mx-auto flex min-h-[720px] w-full max-w-[1260px] overflow-hidden bg-[#062c22] px-5 py-6 sm:min-h-[650px] sm:px-8 sm:py-8 md:px-12 md:py-10 lg:px-12">
       
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
          {/* <div className="flex justify-between text-sm text-[#d9e5df]"> */}
            <div className="flex flex-col gap-2 text-xs text-[#d9e5df] sm:flex-row sm:items-center sm:justify-between sm:text-sm">
            <span>Bambu Agency</span>
            <span>Showreel coming soon</span>
          </div>
          {/* <div className="my-auto max-w-[1140px] pt-16"> */}

              <div className="my-auto max-w-[1140px] py-16 sm:pt-16">
            <p className="mb-5 text-base font-bold text-[#b5f536]">Strategy · Identity · Production</p>
            <h1 className="max-w-[1120px] text-7xl   font-medium leading-[1.04] tracking-[-0.055em] text-[#edf5f0]">Bambu makes brands look,<br className="hidden md:block" /> feel and work better.</h1>
            {/* <p className="mt-6 max-w-[720px] text-lg leading-[1.35] text-[#d9e5df] md:text-xl">Brand strategy, identity, websites, campaigns, print production and creative support<br className="hidden md:block" /> for growing businesses.</p> */}
            <p className="mt-5 max-w-[720px] text-base leading-[1.45] text-[#d9e5df] sm:mt-6 sm:text-lg md:text-xl">Brand strategy, identity, websites, campaigns, print production and creative support</p>
            <a href="#contact" className="mt-8 inline-flex items-center gap-5 rounded-md bg-[#b5f536] px-10 py-4 text-lg font-medium text-[#062c22] transition-transform hover:-translate-y-1">Start a project <span aria-hidden="true" className="text-2xl">→</span></a>
          </div>
          <button type="button" aria-label="Play showreel" className="absolute left-1/2 top-1/2 grid h-24 w-24 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full border border-white/40 transition-colors hover:bg-white/10"><span aria-hidden="true" className="ml-1 h-0 w-0 border-y-[14px] border-l-[22px] border-y-transparent border-l-[#b5f536]" /></button>
        </div>
      </div>
    </section>
  );
}
