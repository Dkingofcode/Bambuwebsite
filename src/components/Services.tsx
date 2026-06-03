'use client';

import { useState } from 'react';

interface Service {
  icon: string;
  title: string;
  description: string;
  items: string[];
}

function ServiceCard({ service }: { service: Service; index: number }) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div
      className="bg-[#11211F] border border-white/10 rounded-xl p-8 hover:border-[#E7B621] transition-all duration-300 cursor-pointer"
      onClick={() => setIsExpanded(!isExpanded)}
    >
      <div className="text-4xl mb-4">{service.icon}</div>
      <h3 className="text-2xl font-poppins font-bold mb-2">{service.title}</h3>
      <p className="text-[#b0b0b0] mb-4">{service.description}</p>

      {/* Service Items */}
      <div
        className={`overflow-hidden transition-all duration-300 ${
          isExpanded ? 'max-h-96' : 'max-h-0'
        }`}
      >
        <div className="pt-4 border-t border-white/10">
          <ul className="space-y-2">
            {service.items.map((item) => (
              <li key={item} className="flex items-start gap-3 text-[#b0b0b0]">
                <span className="text-[#E7B621] mt-1">•</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="mt-4 text-[#E7B621] font-semibold text-sm">
        {isExpanded ? 'Show Less' : 'Learn More'}
      </div>
    </div>
  );
}

export default function Services() {
  const services: Service[] = [
    {
      icon: '🎯',
      title: 'Brand Strategy',
      description:
        'We help brands figure out who they are, where they stand, and how to position themselves for growth. From defining your voice to mapping out a clear direction, we make sure your brand isnt just seen but understood.',
      items: [
        'Market Research & Competitive Analysis',
        'Brand Positioning & Messaging',
        'Visual Identity System Design',
        'Brand Guidelines & Documentation',
        'Logo Design & Evolution',
        'Color Palette Development',
      ],
    },
    {
      icon: '✔',
      title: 'Brand Identity',
      description:
        'We dont design in isolation; we build with intention. Every brand identity starts with a concept statement that defines its purpose and direction.',
      items: [
        'Package Structure Design',
        'Label & Graphics Design',
        'Material Selection Guidance',
        '3D Mockup Creation',
        'Production Coordination',
        'Sustainability Consulting',
      ],
    },
    {
      icon: '🖥️',
      title: 'Animation & Motion Design',
      description:
        'We bring brands to life with motion. Whether it’s animated brand stories, explainer videos, motion graphics, or interactive elements, we make sure your brand doesn’t just sit still, it moves, engages, and makes an impact.',
      items: [
        'Website Design & Development',
        'UI/UX Design',
        'Mobile App Design',
        'Digital Asset Creation',
        'Email Template Design',
        'Social Media Kit Design',
      ],
    },
    {
      icon: '📦',
      title: 'Social Media Marketing & Brand Assets',
      description:
        'We don’t just create content; we develop strategies that make brands visible, engaging, and relevant.',
      items: [
        'Website Design & Development',
        'UI/UX Design',
        'Mobile App Design',
        'Digital Asset Creation',
        'Email Template Design',
        'Social Media Kit Design',
      ],
    },
    {
      icon: '',
      title: 'Website & Digital Presence',
      description:
        'Your brand’s online presence should be as strong as its foundation. We develop websites and digital experiences that align with your brand strategy, ensuring clarity, functionality, and impact.',
      items: [
        'Website Design & Development',
        'UI/UX Design',
        'Mobile App Design',
        'Digital Asset Creation',
        'Email Template Design',
        'Social Media Kit Design',
      ],
    },
    {
      icon: '',
      title: 'Training & Consultation',
      description:
        'Great brands need the right knowledge to keep growing. We offer branding workshops, creative direction, and tailored consultations to help businesses and teams understand, refine, and apply their brand effectively.',
      items: [
        'Website Design & Development',
        'UI/UX Design',
        'Mobile App Design',
        'Digital Asset Creation',
        'Email Template Design',
        'Social Media Kit Design',
      ],
    },
  ];

  return (
    <section id="services" className="section-spacing bg-[#325432]">
      <div className="container-max">
        <h2 className="heading-lg mb-12 text-center">
          Our <span className="text-[#E7B621]">Services</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={service.title} service={service} index={index} />
          ))}
        </div>

        {/* Additional Info */}
        <div className="mt-16 bg-[#11211F] border border-white/10 rounded-xl p-8">
          <h3 className="heading-md mb-4">Our Approach</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <p className="font-poppins font-semibold text-[#E7B621] mb-2">Strategy</p>
              <p className="text-[#b0b0b0]">We start with research and insights to build a solid foundation for your brand identity.</p>
            </div>
            <div>
              <p className="font-poppins font-semibold text-[#E7B621] mb-2">Design</p>
              <p className="text-[#b0b0b0]">Our creative team brings your vision to life with stunning visuals and cohesive brand elements.</p>
            </div>
            <div>
              <p className="font-poppins font-semibold text-[#E7B621] mb-2">Delivery</p>
              <p className="text-[#b0b0b0]">We provide comprehensive documentation and support for seamless implementation across all channels.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
