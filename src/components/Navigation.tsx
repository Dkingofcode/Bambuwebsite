'use client';

import { useState } from 'react';
import {Link} from 'react-router-dom';
import { useLocation } from 'react-router-dom';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const location  = useLocation();
  const pathname = location.pathname;

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About Us', href: '/about-us' },
    { name: 'Projects', href: '/projects' },
    { name: 'Services', href: '/services' },
    { name: 'Contacts', href: '/contacts' },
  ];

  return (
    <nav className="fixed top-0 w-full bg-[#325432]/95 backdrop-blur-md z-50 border-b border-white/10">
      <div className="container-max flex items-center justify-between py-4">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
        <img className='w-11 h-10' src='/ICON.png'  />
          <div className="text-2xl font-poppins font-bold text-[#D4F157]">BAMBU</div>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => {
            const active = pathname === link.href;
            return (
              <Link
                key={link.name}
                to={link.href}
                className={`relative transition-colors duration-300 font-medium group ${
                  active ? 'text-[#D4F157]' : 'text-white hover:text-[#D4F157]'
                }`}
              >
                {link.name}
                <span className={`absolute bottom-0 left-0 h-0.5 bg-[#D4F157] transition-all duration-300 ${
                  active ? 'w-full' : 'w-0 group-hover:w-full'
                }`}></span>
              </Link>
            );
          })}
          <button className="btn-primary">Start a project</button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white"
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
        <div className="md:hidden bg-[#0f2a2a] border-t border-white/10">
          <div className="container-max flex flex-col gap-4 py-4">
            {navLinks.map((link) => {
              const active = pathname === link.href;
              return (
                <Link
                  key={link.name}
                  to={link.href}
                  className={`transition-colors duration-300 ${
                    active ? 'text-[#D4F157] font-bold' : 'text-white hover:text-[#D4F157]'
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </Link>
              );
            })}
            <button className="btn-primary w-full">Start a project</button>
          </div>
        </div>
      )}
    </nav>
  );
}
