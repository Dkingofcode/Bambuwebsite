'use client';

import { useState } from 'react';
//import { useNavigate } from 'react-router-dom';

interface CaseStudy {
  id: number;
  title: string;
  category: string;
  description: string;
  metrics: {
    label: string;
    value: string;
  }[];
  color: string;
}

function CaseStudyCard({ study }: { study: CaseStudy }) {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <div
      className="group cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div
        className={`aspect-video rounded-xl overflow-hidden mb-6 transition-all duration-300 ${study.color}`}
        style={{
          transform: isHovered ? 'scale(1.05)' : 'scale(1)',
        }}
      >
        <div className="w-full h-full flex items-center justify-center text-white/50 font-poppins font-bold text-2xl">
          {study.category}
        </div>
      </div>

      <h3 className="heading-md mb-2 group-hover:text-[#E7B621] transition-colors">
        {study.title}
      </h3>
      <p className="text-[#b0b0b0] mb-4">{study.description}</p>

      {/* Metrics */}
      <div className="grid grid-cols-2 gap-4">
        {study.metrics.map((metric) => (
          <div key={metric.label} className="bg-[#0f2a2a] rounded-lg p-3">
            <p className="text-[#E7B621] font-bold">{metric.value}</p>
            <p className="text-xs text-[#b0b0b0]">{metric.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function CaseStudies() {
  //const navigate = useNavigate();
  const caseStudies: CaseStudy[] = [
    {
      id: 1,
      title: 'Twenty Zero Eight',
      category: 'Tech Startup',
      description: 'Complete brand identity redesign.',
      metrics: [
        { label: 'Brand Awareness', value: '2.5x' },
        { label: 'Customer Recall', value: '87%' },
      ],
      color: 'bg-gradient-to-br from-blue-600 to-blue-900',
    },
    {
      id: 2,
      title: 'ShopInverse',
      category: 'Luxury Goods',
      description: 'Premium packaging and brand Identity and strategy',
      metrics: [
        { label: 'Sales Increase', value: '156%' },
        { label: 'Online Engagement', value: '340%' },
      ],
      color: 'bg-gradient-to-br from-amber-600 to-amber-900',
    },
    {
      id: 3,
      title: 'The Modern Africa',
      category: 'Story Telling & Media',
      description: 'Eco-conscious brand identity reflecting environmental values.',
      metrics: [
        { label: 'Social Growth', value: '420K' },
        { label: 'Brand Sentiment', value: '+92%' },
      ],
      color: 'bg-gradient-to-br from-green-600 to-green-900',
    },
    {
      id: 4,
      title: 'LOKACIN',
      category: 'Luxury & Lifestyle',
      description: 'Cohesive visual identity for luxurious watch brand.',
      metrics: [
        { label: 'Store Footfall', value: '+78%' },
        { label: 'Brand Recognition', value: '94%' },
      ],
      color: 'bg-gradient-to-br from-orange-600 to-red-900',
    },
    // {
    //   id: 5,
    //   title: 'MinimalFit',
    //   category: 'Fitness & Wellness',
    //   description: 'Modern brand refresh for premium fitness equipment company.',
    //   metrics: [
    //     { label: 'Product Sales', value: '+203%' },
    //     { label: 'Market Share', value: '+45%' },
    //   ],
    //   color: 'bg-gradient-to-br from-purple-600 to-purple-900',
    // },
    // {
    //   id: 6,
    //   title: 'CloudFirst',
    //   category: 'Enterprise Software',
    //   description: 'B2B brand positioning and digital design overhaul.',
    //   metrics: [
    //     { label: 'Enterprise Deals', value: '12x' },
    //     { label: 'Website Conversion', value: '+65%' },
    //   ],
    //   color: 'bg-gradient-to-br from-cyan-600 to-cyan-900',
    // },
  ];

  return (
    <section id="work" className="section-spacing bg-[#052F23]">
      <div className="container-max">
        <h2 className="heading-lg mb-12 text-center">
          Featured <span className="text-[#E7B621]">Work</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {caseStudies.map((study) => (
            <CaseStudyCard key={study.id} study={study} />
          ))}
        </div>

        {/* CTA */}
        <div className="mt-20 text-center">
          <p className="text-[#b0b0b0] mb-6">
            Want to see how we can transform your brand?
          </p>
          <a href='https://www.behance.net/bambudesign'>  
          <button   className="btn-primary text-lg cursor-pointer">
            View Full Portfolio
          </button>
          </a>
        </div>
      </div>
    </section>
  );
}
