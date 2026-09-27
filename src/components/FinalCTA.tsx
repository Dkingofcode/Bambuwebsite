'use client';

import { useState } from 'react';

export default function FinalCTA() {
  const [name, setName] = useState('');
  const [contact, setContact] = useState('');
  const [needs, setNeeds] = useState('');

  const enquiry = `mailto:contact@thebambuagency.org?subject=Build with Bambu${name ? ` - ${name}` : ''}&body=${encodeURIComponent(needs ? `${name}\n${contact}\n\n${needs}` : `${name}\n${contact}`)}`;

  return (
    <section id="contact" className="bg-[#e1e1d5] py-16 text-[#082f25] md:py-24">
      <div className="mx-auto w-full max-w-[1260px] px-4 md:px-6">
        <p className="mb-5 text-base font-poppins font-extrabold">Build with Bambu</p>
        <h2 className="max-w-[800px] text-[clamp(48px,7vw,82px)] font-poppins font-black leading-[0.98] tracking-[-0.06em]">Tell us what you are building.</h2>

        <div className="mt-10 grid gap-6 lg:grid-cols-[1.08fr_1fr] lg:items-start">
          <form onSubmit={(event) => { event.preventDefault(); window.location.href = enquiry; }} className="rounded-[26px] border border-[rgba(8,47,37,0.16)] bg-[#f1f0e7] p-6 md:p-7">
            <label className="block text-lg font-poppins font-black" htmlFor="contact-name">Name / Company</label>
            <input id="contact-name" value={name} onChange={(event) => setName(event.target.value)} placeholder="Your name and company" className="mt-2 w-full rounded-[18px] border border-[rgba(8,47,37,0.18)] bg-[#faf9f2] px-4 py-4 text-lg font-extrabold outline-none placeholder:text-[#79908a] focus:border-[#d0d731]" required />
            <label className="mt-5 block text-lg font-poppins font-black" htmlFor="contact-detail">Email / Phone</label>
            <input id="contact-detail" value={contact} onChange={(event) => setContact(event.target.value)} placeholder="email@example.com or +234..." className="mt-2 w-full rounded-[18px] border border-[rgba(8,47,37,0.18)] bg-[#faf9f2] px-4 py-4 text-lg font-extrabold outline-none placeholder:text-[#79908a] focus:border-[#d0d731]" required />
            <label className="mt-5 block text-lg font-poppins font-black" htmlFor="contact-needs">What do you need help with?</label>
            <textarea id="contact-needs" value={needs} onChange={(event) => setNeeds(event.target.value)} placeholder="Brand identity, website, event branding, content..." className="mt-2 min-h-[132px] w-full resize-y rounded-[18px] border border-[rgba(8,47,37,0.18)] bg-[#faf9f2] px-4 py-4 text-lg font-extrabold outline-none placeholder:text-[#79908a] focus:border-[#d0d731]" required />
            <button type="submit" className="mt-5 min-h-[60px] w-full rounded-full bg-[#d0d731] px-5 text-base font-poppins font-black transition-colors hover:bg-[#e0e85b]">Prepare enquiry</button>
          </form>

          <aside className="rounded-[28px] bg-[#053529] p-7 text-[#e6e3d2] md:p-8">
            <h3 className="text-[30px] font-poppins font-black tracking-[-0.04em]">Contact Bambu</h3>
            <p className="mt-1 max-w-[560px] text-[20px] leading-[1.55] text-[#b8c5ba]">Keep the conversion path visible. A good mobile footer should help people act quickly, not make them scroll through empty space.</p>
            <div className="mt-5 flex flex-wrap gap-3">
              <button type="button" onClick={() => navigator.clipboard?.writeText('contact@thebambuagency.org')} className="rounded-full bg-[#d0d731] px-5 py-3 font-poppins font-black text-[#053529]">Copy email address</button>
              <a href="mailto:contact@thebambuagency.org" className="rounded-full border border-[#d0d731] px-5 py-3 font-poppins font-black text-[#d0d731]">Send email</a>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
