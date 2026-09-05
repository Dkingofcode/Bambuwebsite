// export default function ServicesOverview() {
//   const serviceGroups = [
//     {
//       label: 'BUILD',
//       title: 'Strategy & Brand',
//       description: 'Clarity, identity and communication systems that make the business easier to understand and remember.',
//     },
//     {
//       label: 'LAUNCH',
//       title: 'Marketing & Content',
//       description: 'Campaigns and content designed to earn attention and move the right audience to action.',
//     },
//     {
//       label: 'GROW',
//       title: 'Digital & AI',
//       description: 'Digital experiences and practical automation that make the business easier to discover, use and run.',
//     },
//     {
//       label: 'SHOW UP',
//       title: 'Production',
//       description: 'Film, print, animation, merchandise and events brought into the real world with consistency.',
//     },
//   ];

//   return (
//     <section className="overflow-hidden bg-[#052F23] py-20 md:py-32 lg:py-40">
//       <div className="container-max max-w-5xl px-6 md:px-12">
//         {/* Side-by-side service cards */}
//         <div className="relative -mx-6 overflow-hidden md:-mx-12">
//           <div className="services-marquee flex w-max gap-6 px-6 md:gap-8 md:px-12">
//           {[...serviceGroups, ...serviceGroups].map((group, idx) => (
//             <div
//               key={`${group.title}-${idx}`}
//               className="w-[78vw] max-w-[360px] shrink-0 rounded-lg border border-gray-700/50 bg-[#0f2f2f] p-8 transition-all duration-300 hover:-translate-y-2 hover:border-[#D4F157] md:w-[330px] md:p-10"
//             >
//               {/* Label */}
//               <div className="text-xs md:text-sm font-poppins font-bold text-[#D4F157] tracking-widest uppercase mb-4 md:mb-6">
//                 {group.label}
//               </div>

//               {/* Title */}
//               <h3 className="text-2xl md:text-3xl font-poppins font-bold text-white mb-4 md:mb-6">
//                 {group.title}
//               </h3>

//               {/* Description */}
//               <p className="text-gray-400 leading-relaxed text-base">
//                 {group.description}
//               </p>
//             </div>
//           ))}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }






export default function ServicesOverview() {
  const serviceGroups = [
    {
      label: "BUILD",
      title: "Strategy & Brand",
      description:
        "Clarity, identity and communication systems that make the business easier to understand and remember.",
    },
    {
      label: "LAUNCH",
      title: "Marketing & Content",
      description:
        "Campaigns and content designed to earn attention and move the right audience to action.",
    },
    {
      label: "GROW",
      title: "Digital & AI",
      description:
        "Digital experiences and practical automation that make the business easier to discover, use and run.",
    },
    {
      label: "SHOW UP",
      title: "Production",
      description:
        "Film, print, animation, merchandise and events brought into the real world with consistency.",
    },
  ];

  return (
    <section className="overflow-hidden bg-[#052F23]  py-20 md:py-32 lg:py-40">
      <div className="container-max  max-w-8xl px-6 md:px-12">
        <div className="relative -mx-6 overflow-hidden md:-mx-12">
          <div className="services-marquee flex w-max gap-6 px-6 md:gap-8 md:px-12">
            {[...serviceGroups, ...serviceGroups].map((group, idx) => (
              <div
                key={`${group.title}-${idx}`}
                className="w-[78vw] max-w-[360px] shrink-0 rounded-lg border border-gray-700/50 bg-[#315332] p-8 transition-all duration-300 hover:-translate-y-2 hover:border-[#D4F157] md:w-[330px] md:p-10"
              >
                <div className="mb-4 text-xs font-poppins font-bold uppercase tracking-widest text-[#D0D731] md:mb-6 md:text-sm">
                  {group.label}
                </div>

                <h3 className="mb-4 text-2xl font-poppins font-bold text-[#E1E1D5] md:mb-6 md:text-3xl">
                  {group.title}
                </h3>

                <p className="text-base leading-relaxed text-gray-400">
                  {group.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}