'use client';

import { type MouseEvent } from 'react';
import {Link} from 'react-router-dom';

export default function Footer() {
  const menuLinks = [
    { label: 'Home', href: '#home' },
    { label: 'Services', href: '#services' },
    { label: 'Work', href: '#work' },
    { label: 'Contact', href: '#contact' },
  ];

  // const handleSectionNavigation = (event: MouseEvent<HTMLAnchorElement>, href: string) => {
  //   if (!href.startsWith('#')) return;
  //   event.preventDefault();
  //   document.querySelector(href)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  //   window.history.replaceState(null, '', href);
  // };


  const sectionOffsets = {
  '#home': { desktop: -55, mobile: -72},
  '#work': { desktop: -25, mobile: 5 },
  '#services': { desktop: -18, mobile: 10 },
  '#panders': { desktop: -24, mobile: 10 },
  '#proof': { desktop: -24, mobile: 10 },
  '#details': { desktop: -24, mobile: 10 },
  '#contact': { desktop: -24, mobile: 8 },
}


const handleSectionNavigation = (
  event: MouseEvent<HTMLAnchorElement>,
  href: string,
) => {
  if (!href.startsWith('#')) return
  
      event.preventDefault()

  const target = document.querySelector(href)

  if (target) {
    // const desktopOffset = sectionOffsets[href]?.desktop ?? 10
    // const mobileOffset = sectionOffsets[href]?.mobile ?? 18
     const offsetValues = sectionOffsets[href as keyof typeof sectionOffsets] ?? {
    desktop: 10,
    mobile: 18,
  }
  
  const offset =
    window.innerWidth < 768
      ? offsetValues.mobile
      : offsetValues.desktop

 
 //   const offset = window.innerWidth < 768 ? mobileOffset : desktopOffset
    const targetTop =
      target.getBoundingClientRect().top + window.scrollY - offset

    window.scrollTo({ top: targetTop, behavior: 'smooth' })
  }

    window.history.replaceState(null, '', href);
  };


  const socialLinks = [
    { label: 'Instagram', href: 'https://www.instagram.com' },
    { label: 'LinkedIn', href: 'https://www.linkedin.com' },
    { label: 'Email', href: 'mailto:contact@thebambuagency.org' },
  ];

  return (
    <footer id="footer" className="bg-[#052f23] text-[#b8c5ba]">
      <div className="mx-auto w-full max-w-[1260px] px-4 py-12 md:px-6 md:py-12 lg:py-11">
        <div className="grid grid-cols-1 gap-9 lg:grid-cols-[minmax(0,1fr)_auto_auto] lg:items-start lg:gap-24">
          <div className="text-left">
            <Link to="#home" onClick={(event) => handleSectionNavigation(event, '#home')} className="inline-flex items-center gap-3" aria-label="Bambu home">
              <span aria-hidden="true" className="relative block h-10 w-[34px] shrink-0">
                <span className="absolute left-0 top-1 h-5 w-[34px] -skew-y-[18deg] rounded-[14px_18px_14px_4px] bg-[#31563f]" />
                <span className="absolute bottom-1 left-0 h-5 w-[34px] -skew-y-[18deg] rounded-[14px_18px_14px_4px] bg-[#d4e52b]" />
              </span>
              <span className="font-poppins text-[30px] font-extrabold leading-none tracking-[0.02em] text-[#f4f2ed]">BAMBU</span>
            </Link>
            <p className="mt-6 max-w-[350px] text-[20px] leading-[1.35] tracking-[-0.02em] md:text-[21px]">
              Creative work that moves businesses forward.
            </p>
          </div>

          <nav aria-label="Footer menu" className="text-left">
            <h2 className="text-[21px] font-bold text-[#d4e52b]">Menu</h2>
            <ul className="mt-3 space-y-2 text-[22px] leading-[1.25]">
              {menuLinks.map((link) => (
                <li key={link.label}>
                  <Link to={link.href} onClick={(event) => handleSectionNavigation(event, link.href)} className="transition-colors hover:text-[#d4e52b]">{link.label}</Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label="Footer social links" className="text-left">
            <h2 className="text-[21px] font-bold text-[#d4e52b]">Socials</h2>
            <ul className="mt-3 space-y-2 text-[22px] leading-[1.25]">
              {socialLinks.map((link) => (
                <li key={link.label}>
                  <a href={link.href} target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-[#d4e52b]">{link.label}</a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </footer>
  );
}
