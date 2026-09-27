'use client';

import { useState, type MouseEvent } from 'react';
import {Link} from 'react-router-dom';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  const sectionOffsets = {
  '#home': { desktop: -55, mobile: -42},
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
    setIsOpen(false);
  };


  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Services', href: '#services' },
    { name: 'Work', href: '#work' },
    { name: 'Panders', href: '#panders' },
    { name: 'Proof', href: '#proof' },
  ];

  return (
     <nav className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-[#052f23]/95 backdrop-blur-md">
      <div className="mx-auto flex min-h-[90px] w-full max-w-[1220px] items-center justify-between px-4 lg:px-0">
        <Link to="#home" aria-label="Bambu home" className="flex items-center gap-3">
          <span aria-hidden="true" className="relative h-10 w-[34px] shrink-0">
            <span className="absolute left-0 top-1 h-5 w-[34px] -skew-y-[18deg] rounded-[14px_18px_14px_4px] bg-[#d0d731]/30" />
            <span className="absolute bottom-1 left-0 h-5 w-[34px] -skew-y-[18deg] rounded-[14px_18px_14px_4px] bg-[#d0d731]" />
          </span>
          <span className="font-poppins text-[22px] font-extrabold leading-none tracking-[0.02em] text-[#e1e1d5]">BAMBU</span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden  items-center gap-0 lg:flex">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.href}
              onClick={(event) => handleSectionNavigation(event, link.href)}
              className="rounded-[16px] px-4 py-3 text-[17px] font-extrabold tracking-[-0.01em] text-[#b3b3ae] transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#d0d731] hover:text-[#052f23]"
            >
              {link.name}
            </Link>
          ))}
          <Link to="#contact" onClick={(event) => handleSectionNavigation(event, '#contact')} className="ml-2 inline-flex min-h-[48px] items-center justify-center rounded-[16px] bg-[#d0d731] px-6 text-[16px] font-extrabold text-[#052f23] transition-transform duration-200 hover:-translate-y-0.5">
            Build with us
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden inline-grid h-11 w-11 place-content-center gap-1.5 text-[#e1e1d5]"
          aria-label={isOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={isOpen}
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {isOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden border-t border-white/10 bg-[#052f23]">
          <div className="mx-auto flex w-full max-w-[1260px] flex-col gap-2 px-4 py-4 lg:px-0">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                className="rounded-xl px-3 py-3 text-base font-bold text-[#b3b3ae] transition-colors hover:bg-[#d0d731] hover:text-[#052f23]"
                onClick={(event) => handleSectionNavigation(event, link.href)}
              >
                {link.name}
              </Link>
            ))}
            <Link to="#contact" onClick={(event) => handleSectionNavigation(event, '#contact')} className="mt-2 inline-flex min-h-[48px] items-center justify-center rounded-[16px] bg-[#d0d731] px-6 text-base font-extrabold text-[#052f23]">
              Build with us
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
