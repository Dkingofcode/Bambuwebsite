'use client';

export default function FounderVision() {
  return (
    <section className="bg-[#1a3a3a] py-20 md:py-28 relative overflow-hidden">
      <div className="container-max">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Vision Content */}
          <div className="space-y-8">
            {/* Large Quote */}
            <div>
              <h2 className="text-5xl md:text-6xl font-poppins font-bold text-[#D4F157] leading-tight">
                Good design turns heads.
              </h2>
              <h2 className="text-5xl md:text-6xl font-poppins font-bold text-[#D4F157] leading-tight">
                Great design turns minds.
              </h2>
            </div>

            {/* Vision Statement */}
            <p className="text-lg leading-relaxed text-white max-w-lg">
              The projects we build aren&apos;t just meant to launch well. They&apos;re meant to shape how people think, choose, and come back. This isn&apos;t a sprint. It&apos;s a strategy. And we treat every brand like it&apos;s going to matter for years.
            </p>

            {/* Founder Info */}
            <div className="pt-8 border-t border-white/20">
              <p className="text-[#D4F157] font-poppins font-bold text-xl mb-2">
                Morenike Olaolu
              </p>
              <p className="text-gray-400 text-sm">
                Founder & Brand Architect
              </p>
            </div>
          </div>

          {/* Right Side - Founder Image */}
          <div className="relative h-96 md:h-full">
            <img
              src="/FoundersImg.jpg"
              alt="Morenike Olaolu - Founder"
              className="w-full h-full object-cover rounded-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
