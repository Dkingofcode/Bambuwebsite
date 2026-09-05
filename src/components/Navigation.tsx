'use client';

import { useState } from 'react';
import {Link} from 'react-router-dom';
import { useLocation } from 'react-router-dom';
//import { Navigate } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const location  = useLocation();
  const pathname = location.pathname;
  const navigate = useNavigate();

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About Us', href: '/about-us' },
    { name: 'Projects', href: '/projects' },
    { name: 'Services', href: '/services' },
    { name: 'Contacts', href: '/contacts' },
  ];

  return (
    <nav className="fixed top-0 w-full bg-[#052F23]/95 backdrop-blur-md z-50 border-b border-white/10">
      <div className="container-max flex items-center justify-between py-4">
        {/* Logo */}
        {/* <Link to="/" className="flex items-center gap-2">
        <img className='w-8 h-10' src='/ICON.png'  />
          <div className="text-2xl font-poppins font-bold text-[#D0D731]">BAMBU</div>
        </Link> */}


         <Link to="/" className="flex items-center gap-3">
  <div className="flex items-center justify-center w-12 h-12 ">
    <img
      className="w-8 h-10 object-contain"
      src="/ICON@4x.png"
     // src='/WHITE PRIMARY LOGO@4x.png'
     alt="BAMBU Logo"
    />
  </div>

  <div className="text-2xl font-poppins font-bold text-[#E1E1D5]">
    BAMBU
  </div>
</Link> 



{/* 

<Link to="/" className="flex items-center gap-3">
  <div className="flex items-center justify-center w-12 h-12 rounded-full bg-white shadow-lg">
    <img
      className="w-8 h-10 object-contain"
      src="/ICON.png"
      alt="BAMBU Logo"
    />
  </div>

  <div className="text-2xl font-poppins font-bold text-[#D0D731]">
    BAMBU
  </div>
</Link> */}




{/* <Link to="/" className="flex items-center gap-3 group">
  <div
    className="
      flex items-center justify-center
      w-14 h-14
      rounded-2xl
      bg-gradient-to-br
      from-white/20
      to-white/5
      border border-white/20
      backdrop-blur-md
      shadow-lg
      transition-all duration-300
      group-hover:scale-105
    "
  >
    <img
      className="w-8 h-10 object-contain"
      src="/ICON.png"
      alt="BAMBU Logo"
    />
  </div>

  <div className="text-2xl font-poppins font-bold text-[#D0D731]">
    BAMBU
  </div>
</Link> */}


        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => {
            const active = pathname === link.href;
            return (
              <Link
                key={link.name}
                to={link.href}
                className={`relative transition-colors duration-300 font-medium group ${
                  active ? 'text-[#D0D731]' : 'text-[#E1E1D5] hover:text-[#D0D731]'
                }`}
              >
                {link.name}
                <span className={`absolute bottom-0 left-0 h-0.5 bg-[#D0D731] transition-all duration-300 ${
                  active ? 'w-full' : 'w-0 group-hover:w-full'
                }`}></span>
              </Link>
            );
          })}
          <button onClick={() => navigate("/contacts")}  className="btn-primary bg-[#D0D731]">Start a project</button>
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
        <div className="md:hidden bg-[#11211F] border-t border-white/10">
          <div className="container-max flex flex-col gap-4 py-4">
            {navLinks.map((link) => {
              const active = pathname === link.href;
              return (
                <Link
                  key={link.name}
                  to={link.href}
                  className={`transition-colors duration-300 ${
                    active ? 'text-[#D0D731] font-bold' : 'text-[#E1E1D5] hover:text-[#D0D731]'
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </Link>
              );
            })}
            <button onClick={() => navigate("/contacts")}  className="btn-primary bg-[#D0D731] w-full">Start a project</button>
          </div>
        </div>
      )}
    </nav>
  );
}
