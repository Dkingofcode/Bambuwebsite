export default function PortfolioShowcase() {
  const projects = [
    {
      id: 1,
      name: 'Project Name',
      description: 'One clearline explaining the business challenge and result.',
    },
    {
      id: 2,
      name: 'Project Name',
      description: 'One clearline explaining the business challenge and result.',
    },
    {
      id: 3,
      name: 'Project Name',
      description: 'One clearline explaining the business challenge and result.',
    },
  ];

  return (
    <section className="bg-[#E1E1D5] py-20 md:py-32 lg:py-40">
      <div className="container-max max-w-7xl px-6 md:px-12">
        {/* Section Label */}
        <div className="mb-12 md:mb-16">
          <span className="text-gray-600 text-xs md:text-sm font-poppins font-bold tracking-widest uppercase">
            Work Preview
          </span>
        </div>

        {/* Headline */}
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-poppins font-bold text-[#052F23] mb-8 md:mb-10 leading-tight">
          Every project begins with a different challenge.
        </h2>

        {/* Body Paragraphs */}
        <div className="space-y-6 md:space-y-8 mb-16 md:mb-20 max-w-4xl">
          <p className="text-base md:text-lg text-[#052F23] leading-relaxed font-normal">
            Some businesses are launching. Some are growing. Some have simply outgrown the way they currently show up.
          </p>
          <p className="text-base md:text-lg text-[#1a3a3a] leading-relaxed font-normal">
            We start with the problem, then build the creative response around it. The work should reflect the business behind it — never a template.
          </p>
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-16 md:mb-20">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-[#E1E1D5] border border-gray-300 rounded-2xl overflow-hidden hover:shadow-lg transition-all duration-300"
            >
              {/* Project Image Area */}
              <div className="relative bg-gradient-to-br from-[#D0D731] via-[#052F23] to-[#0f2f2f]   aspect-square flex items-end justify-center rounded-t-2xl">
                <div className="w-32 h-32 mt-12 bg-[#D0D731]  rounded-full" />
              </div>

              {/* Project Info */}
              <div className="p-6 md:p-8">
                <div className="text-xs md:text-sm font-poppins font-bold text-gray-600 tracking-wide uppercase mb-3 md:mb-4">
                  Project Name
                </div>
                <h3 className="text-2xl md:text-3xl font-poppins font-bold text-[#052F23] mb-3 md:mb-4">
                  What we built
                </h3>
                <p className="text-base text-gray-700 leading-relaxed">
                  {project.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <a
          href="/projects"
          className="inline-block px-8 md:px-10 py-3 md:py-4 bg-[#D0D731] text-[#052F23] font-poppins font-bold text-sm md:text-base transition-all duration-300 hover:bg-[#E0F77D] rounded-full"
        >
          VIEW OUR WORK
        </a>
      </div>
    </section>
  );
}
