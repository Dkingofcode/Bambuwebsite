export default function ServicesSnapshot() {
  return (
    <section className="border-t border-[#082f25] bg-[#c7e6d4] text-[#082f25]">
      <div className="mx-auto grid w-full max-w-[1260px] grid-cols-1 gap-12 px-6 py-24 md:grid-cols-[minmax(180px,0.58fr)_minmax(0,1.7fr)] md:gap-16 md:px-8 md:py-28 lg:px-10 lg:py-32">
        <div>
          <p className="text-sm font-semibold leading-tight tracking-[-0.01em] md:text-base">What we do</p>
        </div>

        <div className="max-w-[900px]">
          <h2 className="max-w-[850px] text-[clamp(42px,5.2vw,72px)] font-medium leading-[0.98] tracking-[-0.055em]">
            From your logo to your launch,
            <br className="hidden md:block" /> we make the work real.
          </h2>
          <p className="mt-8 max-w-[760px] text-[18px] leading-[1.35] tracking-[-0.02em] md:text-[20px]">
            We develop identities and messaging, design digital experiences, run campaigns, and produce the packaging, print and event materials people actually see and use.
          </p>
          <a
            href="#work"
            className="group mt-8 inline-flex items-center gap-4 border-b border-[#082f25] pb-1 text-base font-medium transition-colors hover:text-[#31563f] md:text-lg"
          >
            Explore our services
            <span aria-hidden="true" className="text-2xl leading-none transition-transform duration-200 group-hover:translate-x-1">→</span>
          </a>
        </div>
      </div>
    </section>
  );
}
