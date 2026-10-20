'use client';

import { useState } from 'react';
import {Link} from 'react-router-dom';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Services', href: '/services' },
    { name: 'Work', href: '/work' },
    { name: 'About', href: '/about-us' },
    { name: 'Contact', href: '/contacts' },
  ];

  return (
    <nav className="absolute inset-x-0 top-0 z-50 bg-[#eaf2ed]">
      <div className="mx-auto flex min-h-[90px] w-full max-w-[1260px] items-center justify-between px-6 lg:px-0">
        <Link
  to="/"
  aria-label="Bambu home"
  className="flex justify-start items-start gap-0.5"
>
  <img
    src="/ICON@4x.png"
    alt=""
    aria-hidden="true"
    className="h-9 w-9 object-contain"
  />
  <span className="font-poppins text-[28px] font-extrabold leading-none tracking-[-0.04em] text-[#31563f]">
    Bambu
  </span>
</Link>

        {/* Desktop Menu */}
        <div className="hidden items-center gap-7 lg:flex">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.href}
              className="rounded-[16px] px-3 py-3 text-[17px] font-normal tracking-[-0.01em] text-[#0b2f22] transition-colors duration-200 hover:text-[#31563f]"
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden inline-grid h-11 w-11 place-content-center gap-1.5 text-[#0b2f22]"
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
        <div className="lg:hidden border-t border-[#cbd8d0] bg-[#eaf2ed]">
          <div className="mx-auto flex w-full max-w-[1260px] flex-col gap-2 px-4 py-4 lg:px-0">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                onClick={() => setIsOpen(false)}
                className="rounded-xl px-3 py-3 text-base font-normal text-[#0b2f22] transition-colors hover:bg-[#d0d731] hover:text-[#052f23]"
                >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
