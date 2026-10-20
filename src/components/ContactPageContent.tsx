'use client';

import { useState, type FormEvent } from 'react';

const details = [
  { title: 'Good fit', body: 'Growing businesses that need clearer execution across strategy, identity, digital, campaigns, print and events.' },
  { title: 'What we can help with', body: 'Brand identity, websites, campaigns, print and packaging, event branding and ongoing creative support.' },
];

export default function ContactPageContent() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);
  }

  return (
    <main>
      <section className="bg-[#0b211b] px-6 pb-16 pt-36 text-[#edf5f0] md:px-10 md:pb-24 md:pt-44 lg:px-16 lg:pb-28 lg:pt-48">
        <div className="mx-auto grid max-w-[1260px] gap-16 lg:grid-cols-[1.1fr_0.9fr] lg:items-end lg:gap-24">
          <div>
            <p className="mb-10 text-sm font-bold text-[#b5f536]">Start a project</p>
            <h1 className="max-w-[760px] text-7xl font-bold leading-[1.09] tracking-[-0.005em]">
              Let&apos;s build your<br />brand, website or<br />next big<br />campaign.
            </h1>
            <div className="mt-12 max-w-[382px] text-lg leading-[1.25] text-[#b5f536]">
              <a href="mailto:contact@thebambuagency.org" className="inline-flex border-b border-[#b5f536] pb-2">contact@thebambuagency.org <span aria-hidden="true" className="ml-3">↗</span></a>
              <a href="tel:+2348064656195" className="mt-5 block">+234 806 465 6195</a>
            </div>
          </div>
          <div className="space-y-8 pb-1 text-base leading-[1.45] text-[#c8ddd6] lg:pb-3">
            {details.map((detail) => (
              <div key={detail.title}>
                <h2 className="mb-3 text-sm font-bold text-[#b5f536]">{detail.title}</h2>
                <p className="max-w-[560px]">{detail.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#e8f1ec] px-6 py-16 text-[#002d22] md:px-10 md:py-24 lg:px-16 lg:py-28">
        <div className="mx-auto grid max-w-[1260px] gap-14 lg:grid-cols-[0.8fr_1.2fr] lg:gap-24">
          <div>
            <p className="text-sm font-bold">Booking request / 01</p>
            <h2 className="mt-8 max-w-[520px] text-[clamp(44px,5vw,68px)] font-medium leading-[0.98] tracking-[-0.06em]">Let&apos;s find a time to talk.</h2>
            <p className="mt-8 max-w-[450px] text-lg leading-[1.45] text-[#405c53]">Share a little about your project and suggest a time that works for you.</p>
            <div className="mt-12 border-t border-[#91aaa0] pt-7 text-base text-[#405c53]"><strong className="text-[#002d22]">Not a confirmed booking.</strong> We&apos;ll get in touch to arrange the details.</div>
          </div>
          <form onSubmit={handleSubmit} className="border-t-2 border-[#002d22] pt-8">
            <div className="grid gap-7 md:grid-cols-2">
              <label className="text-base font-medium">Your name<input required name="name" type="text" className="mt-3 block h-16 w-full rounded border border-[#9bb2a8] bg-[#f5f8f6] px-5 font-normal outline-none focus:border-[#002d22]" /></label>
              <label className="text-base font-medium">Email address<input required name="email" type="email" className="mt-3 block h-16 w-full rounded border border-[#9bb2a8] bg-[#f5f8f6] px-5 font-normal outline-none focus:border-[#002d22]" /></label>
              <label className="text-base font-medium">Phone (optional)<input name="phone" type="tel" className="mt-3 block h-16 w-full rounded border border-[#9bb2a8] bg-[#f5f8f6] px-5 font-normal outline-none focus:border-[#002d22]" /></label>
              <label className="text-base font-medium">What do you need?<select name="service" defaultValue="Brand strategy" className="mt-3 block h-16 w-full rounded border border-[#9bb2a8] bg-[#f5f8f6] px-5 font-normal outline-none focus:border-[#002d22]"><option>Brand strategy</option><option>Brand identity</option><option>Website & digital</option><option>Campaign & marketing</option><option>Print, packaging & events</option></select></label>
            </div>
            <label className="mt-7 block text-base font-medium">Preferred date and time<input name="date" type="datetime-local" className="mt-3 block h-16 w-full rounded border border-[#9bb2a8] bg-[#f5f8f6] px-5 font-normal outline-none focus:border-[#002d22]" /></label>
            <label className="mt-7 block text-base font-medium">Tell us about your project<textarea required name="message" rows={5} placeholder="What are you creating or looking to change?" className="mt-3 block w-full resize-y rounded border border-[#9bb2a8] bg-[#f5f8f6] px-5 py-4 font-normal outline-none placeholder:text-[#6f8b80] focus:border-[#002d22]" /></label>
            <p className="mt-6 text-sm text-[#405c53]">Your preferred time is a request, not a confirmed appointment. We&apos;ll contact you to arrange the details.</p>
            <button type="submit" className="mt-7 inline-flex items-center gap-8 rounded bg-[#003d2e] px-10 py-4 font-bold text-white transition-colors hover:bg-[#005640]">{submitted ? 'Request sent' : 'Request a conversation'} <span aria-hidden="true" className="text-xl">→</span></button>
          </form>
        </div>
      </section>
    </main>
  );
}
