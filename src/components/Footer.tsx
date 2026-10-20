'use client';

//import { type MouseEvent } from 'react';
import {Link} from 'react-router-dom';

const footerLinks = [
  { label: 'Services', href: '/services' },
  { label: 'Work', href: '/work' },
  { label: 'About', href: '/about-us' },
];

export default function Footer() {
  

  return (
    <footer id="footer" className="bg-[#06392c] text-[#edf5f0]">
      <div className="mx-auto w-full max-w-[1260px] px-6 py-16 md:py-20 lg:px-0 lg:py-[54px]">
        <div className="grid gap-14 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-start lg:gap-20">
          <div>
            <p className="mb-7 text-base font-bold text-[#b5f536]">Start a project</p>
            <h2 className="max-w-[650px] text-6xl font-medium leading-[1.24] tracking-[-0.005em]">
              Have a project in<br className="hidden md:block" /> mind? Let&apos;s talk.
            </h2>
          </div>

          <address className="not-italic lg:pt-[104px]">
            <Link to="/contacts" className="inline-flex items-center gap-4 text-base font-bold text-[#b5f536] transition-colors hover:text-[#d1ff75]">
              Request a conversation <span aria-hidden="true" className="text-xl">↗</span>
            </Link>
            <Link to="mailto:contact@thebambuagency.org" className="mt-5 block text-base text-[#edf5f0] transition-colors hover:text-[#b5f536]">contact@thebambuagency.org</Link>
            <Link to="tel:+2348064656195" className="mt-5 block text-base text-[#edf5f0] transition-colors hover:text-[#b5f536]">+234 806 465 6195</Link>
          </address>
        </div>

        <div className="mt-16 border-t border-[#719187]/45 pt-7 md:mt-20">
          <div className="flex flex-col gap-5 text-sm text-[#b9d0c8] md:grid md:grid-cols-[1fr_auto_1fr] md:items-center">
            <p>© 2026 The Bambu Agency</p>
            <nav aria-label="Footer links" className="flex gap-7 md:justify-center">
              {footerLinks.map((link) => (
                <Link key={link.label} to={link.href}  className="transition-colors hover:text-[#b5f536]">{link.label}</Link>
              ))}
            </nav>
            <p className="md:text-right">building brands that lasts</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
