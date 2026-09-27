export default function Details() {
  const details = [
    ['Email', 'contact@thebambuagency.org'],
    ['What we handle', 'Strategy, identity, websites, content, print, event branding and AI support.'],
    ['Best fit', 'Growing businesses that need clearer execution across different touchpoints.'],
    ['Location', 'Lagos, Nigeria - working with brands across markets.'],
  ];

  return (
    <section id="details" className="bg-[#e1e1d5] py-16 text-[#082f25] md:py-24">
      <div className="mx-auto w-full max-w-[1260px] px-4 md:px-6">
        <p className="mb-5 text-base font-poppins font-extrabold text-[#315332]">Details</p>
        <h2 className="max-w-[900px] text-[clamp(44px,7vw,78px)] font-poppins font-black leading-[1.02] tracking-[-0.055em]">
          Make the final section useful, not oversized.
        </h2>
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2">
          {details.map(([label, value]) => (
            <div key={label} className="border-t border-[rgba(8,47,37,0.18)] py-5 md:min-h-[135px] md:pr-10">
              <p className="text-base font-poppins font-extrabold text-[#70877f]">{label}</p>
              <p className="mt-3 max-w-[620px] text-[20px] font-semibold leading-[1.45]">{value}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
