export default function WhyBambu() {
  return (
    <section id="why-bambu" className="bg-[#e1e1d5] py-16 text-[#082f25] md:py-24">
      <div className="mx-auto grid w-full max-w-[1260px] gap-8 px-[18px] md:gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
        <div>
          <p className="mb-4 text-sm font-poppins font-extrabold leading-tight text-[#315332]">Why Bambu</p>
          <h2 className="max-w-[620px] text-[clamp(32px,5vw,62px)] font-poppins font-black leading-[1.03] tracking-[-0.038em]">
            Everything your audience sees should point in the same direction.
          </h2>
        </div>

        <div className="max-w-[620px] pt-1 lg:pt-8">
          <p className="text-[17px] leading-[1.7] text-[rgba(8,47,37,0.72)]">
            Your identity, website, campaign, packaging, content and customer experience should feel like the same business. We connect the thinking and the execution so people meet a clearer brand wherever they find you.
          </p>
          <a
            href="#services"
            className="mt-6 inline-flex w-fit border-b-2 border-[#d0d731] pb-1 text-[#082f25] font-extrabold transition-colors hover:text-[#315332]"
          >
            See services
          </a>
        </div>
      </div>
    </section>
  );
}
