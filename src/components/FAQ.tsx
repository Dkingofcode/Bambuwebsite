'use client';

import { useState } from 'react';

interface FAQItem {
  id: number;
  question: string;
  answer: string;
}

function FAQAccordion({ item, isOpen, onClick }: { item: FAQItem; isOpen: boolean; onClick: () => void }) {
  return (
    <div
      className="border border-gray-200 rounded-lg overflow-hidden hover:border-[#E7B621] transition-all duration-300 cursor-pointer bg-white"
      onClick={onClick}
    >
      <div className="p-6 flex items-center justify-between">
        <h3 className="text-lg font-poppins font-bold text-[#325432] pr-4">
          {item.question}
        </h3>
        <div
          className={`text-[#E7B621] text-2xl transition-transform duration-300 flex-shrink-0 ${
            isOpen ? 'rotate-45' : ''
          }`}
        >
          +
        </div>
      </div>

      <div
        className={`overflow-hidden transition-all duration-300 ${
          isOpen ? 'max-h-96' : 'max-h-0'
        }`}
      >
        <div className="p-6 bg-gray-50 border-t border-gray-200">
          <p className="text-gray-700 leading-relaxed">{item.answer}</p>
        </div>
      </div>
    </div>
  );
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs: FAQItem[] = [
    {
      id: 1,
      question: 'What makes Bambu different?',
      answer:
        'We don\'t just design. We build brands that disrupt markets and create emotional connections. Our work combines strategic thinking with bold creativity to deliver results that matter.',
    },
    {
      id: 2,
      question: 'Do you work with startups?',
      answer:
        'Startups, scale-ups, and brands ready to disrupt. Those are our people. We don\'t do maintenance. We do momentum.',
    },
    {
      id: 3,
      question: 'How long does it take to start a project with MarkaWorks?',
      answer:
        'We move fast. After our initial conversation, we can typically kick off within 1-2 weeks. No endless meetings, no bureaucracy, just action.',
    },
    {
      id: 4,
      question: 'What if we don\'t like the first direction?',
      answer:
        'We iterate until it\'s right. Our process includes multiple rounds of refinement, and we\'re not satisfied until you\'re thrilled with the result.',
    },
    {
      id: 5,
      question: 'Why should we trust you?',
      answer:
        'Our work speaks for itself. We\'ve helped brands go from unknown to unforgettable, and we bring that same energy and expertise to every project.',
    },
    {
      id: 6,
      question: 'Do you offer full-service creative?',
      answer:
        'Yes. From brand strategy to web design, from content creation to digital marketing; we handle it all. One team, one vision, zero handoffs.',
    },
  ];

  return (
    <section id="faq" className="section-spacing bg-[#D9DECC] relative overflow-hidden">
      {/* Decorative rotating SVG elements */}
      <div className="absolute top-0 left-12 w-40 h-40 opacity-15 pointer-events-none" style={{ animation: 'spin 20s linear infinite' }}>
        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
          <circle cx="100" cy="100" r="80" fill="none" stroke="#E7B621" strokeWidth="2" />
          <path d="M100 30 L120 70 L100 100 L80 70 Z" fill="#E7B621" opacity="0.5" />
          <circle cx="100" cy="100" r="50" fill="none" stroke="#325432" strokeWidth="1" opacity="0.3" />
        </svg>
      </div>

      <div className="absolute bottom-20 right-12 w-48 h-48 opacity-10 pointer-events-none" style={{ animation: 'spin 25s linear infinite reverse' }}>
        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
          <circle cx="100" cy="100" r="90" fill="none" stroke="#325432" strokeWidth="2" />
          <polygon points="100,20 150,100 100,180 50,100" fill="#E7B621" opacity="0.4" />
          <circle cx="100" cy="100" r="60" fill="none" stroke="#E7B621" strokeWidth="1" opacity="0.3" />
        </svg>
      </div>

      <div className="container-max max-w-4xl relative z-10">
        <h2 className="heading-lg mb-16 text-center text-[#325432]">
          Frequently Asked <span className="text-[#E7B621]">Questions</span>
        </h2>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={faq.id}>
              <FAQAccordion
                item={{ ...faq, question: `${index + 1}. ${faq.question}` }}
                isOpen={index === openIndex}
                onClick={() => setOpenIndex(index)}
              />
            </div>
          ))}
        </div>

        {/* Contact CTA */}
        {/* <div className="mt-16 text-center p-8 bg-white rounded-xl border border-[#E7B621]">
          <h3 className="heading-md mb-4 text-[#325432]">Still have questions?</h3>
          <p className="text-gray-700 mb-6">
            Our team is ready to discuss your branding needs and answer any questions you might have.
          </p>
          <a href="/contact-us/" className="inline-block px-8 py-3 bg-[#E7B621] text-[#325432] rounded-full font-poppins font-bold hover:bg-[#E0F77D] transition-colors">
            Schedule a Consultation
          </a>
        </div> */}
      </div>
    </section>
  );
}
