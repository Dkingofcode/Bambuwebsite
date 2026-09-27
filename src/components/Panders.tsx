export default function ThePanders() {
  const principles = [
    ['We deliver clearly.', 'Outputs, files, documentation and handover are organised for the team.'],
    ['We watch what happens next.', 'We pay attention to how customers respond and how the team uses the work.'],
    ['We spot the next move.', 'Campaigns, content, print, digital, events or AI support can build from the first project.'],
  ];

  return (
    <section id="panders" className="bg-[#052F23] py-16 text-[#e6e3d2] md:py-24">
      <div className="mx-auto w-full max-w-[1260px] px-4 md:px-6">
        <p className="mb-5 text-base font-poppins font-extrabold leading-tight text-[#d0d731]">The Panders</p>
        <h2 className="max-w-[720px] text-[clamp(44px,7vw,78px)] font-poppins font-black leading-[1.02] tracking-[-0.055em]">
          You are gaining <span className="text-[#d0d731]">a creative partner.</span>
        </h2>
        <p className="mt-8 max-w-[900px] text-[clamp(22px,2.5vw,30px)] leading-[1.42] text-[#9ca19d]">
          Every business that builds with us becomes part of our community. We stay curious after delivery and keep looking for the next stronger expression, smarter system and better opportunity.
        </p>

        <div className="mt-10 rounded-[24px] border border-[#315c50] bg-[#10362b] px-7 py-10 md:px-12 md:py-12">
          <h3 className="max-w-[850px] text-[clamp(42px,6vw,68px)] font-poppins font-black leading-[1.02] tracking-[-0.055em]">
            The project may end. The partnership does not.
          </h3>
          <div className="mt-8 grid grid-cols-1 gap-8 border-t border-[#315c50] pt-5 md:grid-cols-3 md:gap-4">
            {principles.map(([title, description]) => (
              <div key={title} className="border-t border-[#315c50] pt-4 md:border-t-0 md:pr-6">
                <h4 className="text-[19px] font-poppins font-black leading-tight">{title}</h4>
                <p className="mt-3 text-[19px] leading-[1.55] text-[#9ca19d]">{description}</p>
              </div>
            ))}
          </div>
          <a href="#contact" className="mt-7 flex min-h-[60px] items-center justify-center rounded-full bg-[#d0d731] px-5 text-base font-poppins font-black text-[#052f23] transition-colors duration-200 hover:bg-[#e0e85b]">
            Join the Panders
          </a>
        </div>
      </div>
    </section>
  );
}
