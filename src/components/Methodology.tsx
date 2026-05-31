'use client';

export default function Methodology() {
  const methodologySteps = [
    {
      number: '1',
      title: 'Initial Analysis',
      description: 'Our method isn\'t a formula. It\'s a craft. We decode, distill, and direct each brand into its most powerful form.',
    },
    {
      number: '2',
      title: 'Design Execution',
      description: 'We don\'t just listen. We extract. We decode the DNA of your brand to uncover what\'s worth amplifying.',
    },
    {
      number: '3',
      title: 'Quality Assurance',
      description: 'We refine ideas together with shared insight, guided by experience. Each step is collaborative, each decision intentional.',
    },
    {
      number: '4',
      title: 'Delivery Completion',
      description: 'Powerful execution isn\'t the last step. It\'s the strike point. This is where your brand stops being seen and starts being felt.',
    },
  ];

  return (
    <section className="bg-[#D9DECC] py-20 md:py-28">
      <div className="container-max">
        {/* Header */}
        <div className="mb-16">
          <h2 className="text-5xl md:text-6xl font-poppins font-bold text-[#1a3a3a] mb-6 leading-tight">
            From Idea to Impact. Together.
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl">
            Our method isn&apos;t a formula. It&apos;s a craft. We decode, distill, and direct each brand into its most powerful form.
          </p>
        </div>

        {/* Methodology Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {methodologySteps.map((step, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl p-8 border border-gray-200 hover:border-[#D4F157] transition-all duration-300"
            >
              {/* Step Number */}
              <div className="text-6xl font-poppins font-bold text-[#1a3a3a] mb-6 opacity-20">
                {step.number}
              </div>

              {/* Title */}
              <h3 className="text-2xl font-poppins font-bold text-[#1a3a3a] mb-4">
                {step.title}
              </h3>

              {/* Description */}
              <p className="text-gray-700 leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>

        {/* Full Methodology Image */}
        {/* <div className="mt-20">
          <img
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/methodology-JfayidJzN6HjjboXhxnuzvI27kGlpm.png"
            alt="Complete Methodology Flow"
            className="w-full rounded-2xl shadow-lg"
          />
        </div> */}
      </div>
    </section>
  );
}
