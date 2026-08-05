'use client';

export default function FounderVision() {
  return (
    <section className="bg-[#052F23] py-20 md:py-28 relative overflow-hidden">
      <div className="container-max gap-2  p-12">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center p-12">
          {/* Left Side - Vision Content */}
          <div className="space-y-8">
            {/* Large Quote */}
            <div>
              <h2 className="text-5xl md:text-6xl font-poppins font-bold text-[#D0D731] leading-tight">
                Good design turns heads.
              </h2>
              <h2 className="text-5xl md:text-6xl font-poppins font-bold text-[#D0D731] leading-tight">
                Great design turns minds.
              </h2>
            </div>

            {/* Vision Statement */}
            <p className="text-lg leading-relaxed text-[#E1E1D5] max-w-lg">
              The projects we build aren&apos;t just meant to launch well. They&apos;re meant to shape how people think, choose, and come back. This isn&apos;t a sprint. It&apos;s a strategy. And we treat every brand like it&apos;s going to matter for years.
            </p>

            {/* Founder Info */}
            <div className="pt-8 border-t border-white/20">
              <p className="text-[#D0D731] font-poppins font-bold text-xl mb-2">
                Morenike Olaolu
              </p>
              <p className="text-gray-400 text-sm">
                Founder & Creative Director
              </p>
            </div>
          </div>

          {/* Right Side - Founder Image */}
          <div className="relative h-96 md:h-full">
            <img
              src="/FoundersImg (1).jpg"
              alt="Morenike Olaolu - Founder"
              className="w-full h-full object-cover rounded-2xl"
            />
          </div>
        </div>


        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center p-12">
          {/* Left Side - Vision Content */}
          <div className="space-y-8">
            {/* Large Quote */}
            <div>
              <h2 className="text-5xl md:text-6xl font-poppins font-bold text-[#D0D731] leading-tight">
                Good design turns heads.
              </h2>
              <h2 className="text-5xl md:text-6xl font-poppins font-bold text-[#D0D731] leading-tight">
                Great design turns minds.
              </h2>
            </div>

            {/* Vision Statement */}
            <p className="text-lg leading-relaxed text-[#E1E1D5] max-w-lg">
              The projects we build aren&apos;t just meant to launch well. They&apos;re meant to shape how people think, choose, and come back. This isn&apos;t a sprint. It&apos;s a strategy. And we treat every brand like it&apos;s going to matter for years.
            </p>

            {/* Founder Info */}
            <div className="pt-8 border-t border-white/20">
              <p className="text-[#D0D731] font-poppins font-bold text-xl mb-2">
                Kevwe Emegbo
              </p>
              <p className="text-gray-400 text-sm">
                Founder & Chief Strategy Officer
              </p>
            </div>
          </div>

          {/* Right Side - Founder Image */}
          <div className="relative h-96 md:h-full">
            <img
              src="/PROFILE PHOTO_KEVWE_B&W-01.jpg"
              alt="Kevwe Emegbo - Founder"
              className="w-full h-full object-cover rounded-2xl"
            />
          </div>
        </div>
      </div>
    </section>

    
  );
}
