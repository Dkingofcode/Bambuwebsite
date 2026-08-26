// 'use client';

// import {Link} from 'react-router-dom';

// export default function Footer() {
//   const currentYear = new Date().getFullYear();

//   // const locations = [
//   //   {
//   //     name: 'London',
//   //     address: '167-169 Great Portland Street, 5th Floor\nW1W 5PF London',
//   //   },
//   //   {
//   //     name: 'Istanbul',
//   //     address: 'Harbiye Mh. Bostan Sok. LV Orjin Apt. 15/5\nNişantaşı Şişli\nIstanbul Turkiye 34367',
//   //   },
//   //   {
//   //     name: 'Dubai',
//   //     address: 'Level 27, Unit 2705, Marina Plaza,\nDubai, United Arab Emirates',
//   //   },
//   //   {
//   //     name: 'Antalya',
//   //     address: 'Liman Mah. 23. Sok. 12/A D:3\nKonyaaltı\nAntalya, Turkey 07130',
//   //   },
//   // ];

//   // const blogPosts = [
//   //   {
//   //     title: 'How to Build Trust in 0.3 Seconds Through Branding, Packaging and Web Experience',
//   //     href: '#',
//   //   },
//   //   {
//   //     title: 'Why Simplicity Is the Ultimate Luxury in Branding',
//   //     href: '#',
//   //   },
//   //   {
//   //     title: 'How to Build a Product Brand That Feels Expensive Without Spending Millions',
//   //     href: '#',
//   //   },
//   // ];

//   return (
//     <footer className="bg-[#052F23]">
//       {/* Contact Information */}
//       <div className="border-b border-white/10">
//         <div className="container-max py-12">
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//             <div>
//               <h3 className="font-poppins font-bold text-white mb-2">Have questions?</h3>
//               <a href="tel:+234 806 465 6195" className="text-lg text-[#E7B621] hover:text-white transition-colors font-bold">
//                 +234 806 465 6195
//               </a>
//             </div>
//             <div>
//               <h3 className="font-poppins font-bold text-white mb-2">Let&apos;s talk</h3>
//               <a href="mailto:thebambuagency@gmail.com" className="text-lg text-[#E7B621] hover:text-white transition-colors font-bold">
//                 thebambuagency@gmail.com
//               </a>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Main Footer Grid */}
//       <div className="container-max py-16">
//         <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 mb-16">
//           {/* Calendly Section */}
//           <div>
//             <h3 className="font-poppins font-bold text-white mb-6">Schedule a Call</h3>
//             <div className="bg-[#11211F] rounded-lg p-6 border border-white/10 text-center">
//               <p className="text-gray-400 text-sm mb-4">Book a discovery meeting with our team</p>
//               <a
//                 href="https://calendly.com/marka-works/discovery-meeting"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="inline-block px-6 py-3 bg-[#E7B621] text-[#11211F] rounded-full font-bold hover:bg-[#E7B001] transition-colors text-sm"
//               >
//                 Book Now
//               </a>
//             </div>
//           </div>

//           {/* Office Locations */}
//           {/* <div className="lg:col-span-2">
//             <h3 className="font-poppins font-bold text-white mb-6">Our Offices</h3>
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//               {locations.map((location) => (
//                 <div key={location.name} className="bg-[#0f2a2a] rounded-lg p-6 border border-white/10">
//                   <h4 className="font-poppins font-bold text-white mb-3">{location.name}</h4>
//                   <p className="text-sm text-gray-400 leading-relaxed whitespace-pre-line">{location.address}</p>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div> */}

//         {/* Blog Posts */}
//         {/* <div className="border-t border-white/10 pt-12 mb-12">
//           <h3 className="font-poppins font-bold text-white mb-8">Recent posts from Blog</h3>
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//             {blogPosts.map((post, index) => (
//               <a
//                 key={index}
//                 href={post.href}
//                 className="text-gray-300 hover:text-[#E7B621] transition-colors font-semibold text-sm leading-relaxed"
//               >
//                 {post.title}
//               </a>
//             ))}
//           </div>
//           */}
//         </div>     

//         {/* Bottom Footer */}
//         <div className="border-t border-white/10 pt-12">
//           <div className="flex flex-col md:flex-row items-center justify-between gap-8">
//             {/* Logo and Links */}
//             <div className="flex items-center gap-8">
//               <h3 className="font-poppins font-bold text-lg text-white">Bambu</h3>
//               <nav className="flex gap-6">
//                 <Link to="/about-us" className="text-sm text-gray-400 hover:text-[#E7B621] transition-colors">
//                   About us
//                 </Link>
//                 <Link to="/projects" className="text-sm text-gray-400 hover:text-[#E7B621] transition-colors">
//                   Projects
//                 </Link>
//                 <Link to="/services" className="text-sm text-gray-400 hover:text-[#E7B621] transition-colors">
//                   Services
//                 </Link>
//                 <Link to="#" className="text-sm text-gray-400 hover:text-[#E7B621] transition-colors">
//                   Blog
//                 </Link>
//                 <Link to="/contact" className="text-sm text-gray-400 hover:text-[#E7B621] transition-colors">
//                   Contact
//                 </Link>
//               </nav>
//             </div>

//             {/* Social Links */}
//             <div className="flex gap-6">
//               <a
//                 href="https://www.instagram.com/thebambuagency/"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="text-gray-400 hover:text-[#E7B621] transition-colors"
//                 aria-label="Instagram"
//               >
//                 <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
//                   <path
//                     d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073z"
//                     fill="currentColor"
//                   />
//                   <path
//                     d="M12 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4z"
//                     fill="currentColor"
//                   />
//                 </svg>
//               </a>
//               <a
//                 href="https://www.linkedin.com/company/thebambuagency/"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="text-gray-400 hover:text-[#E7B621] transition-colors"
//                 aria-label="LinkedIn"
//               >
//                 <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
//                   <path
//                     d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"
//                     fill="currentColor"
//                   />
//                 </svg>
//               </a>
//             </div>
//           </div>

//           {/* Legal */}
//           <div className="border-t border-white/10 mt-12 pt-8 text-center text-sm text-gray-400">
//             <p className="mb-4">© {currentYear} Bambu. All rights reserved.</p>
//             <div className="flex gap-6 justify-center">
//               <Link to="#" className="hover:text-[#E7B621] transition-colors">
//                 Privacy Policy
//               </Link>
//               <Link to="#" className="hover:text-[#E7B621] transition-colors">
//                 Terms of Service
//               </Link>
//               <Link to="#" className="hover:text-[#E7B621] transition-colors">
//                 Cookies
//               </Link>
//             </div>
//           </div>
//         </div>
//       </div>
//     </footer>
//   );
// }


















// 'use client';

// //import Link from 'next/link';

// export default function Footer() {
//   return (
//     <footer className="bg-[#052F23]">
//       <div className="container-max max-w-7xl px-6 md:px-12 py-20 md:py-32 lg:py-40">
//         {/* Top Section */}
//         <div className="flex justify-between items-start mb-20 md:mb-24">
//           <div>
//             <h2 className="text-2xl md:text-3xl font-poppins font-bold text-[#E1E1D5]">BAMBU</h2>
//           </div>
//           {/* <div className="text-xs md:text-sm font-poppins font-bold text-gray-600 tracking-widest uppercase">
//             Global Footer
//           </div> */}
//         </div>

//         {/* Footer Copy Section */}
//         <div className="mb-16 md:mb-20">
//           {/* <div className="text-xs md:text-sm font-poppins font-bold text-[#D0D731] tracking-widest uppercase mb-4 md:mb-6">
//             Footer Copy
//           </div> */}
//           <h3 className="text-4xl md:text-5xl lg:text-6xl font-poppins font-bold text-[#E1E1D5] mb-6 md:mb-8">
//             Bambu
//           </h3>
//           <p className="text-base md:text-lg text-gray-400 leading-relaxed font-normal">
//             Creative work that moves businesses forward.
//           </p>
//         </div>

//         {/* Navigation Links */}
//         <div className="mb-12 md:mb-16">
//           <div className="flex flex-wrap gap-4 md:gap-6">
//             <div className="border border-gray-600 rounded-4xl pt-3 py-3 px-4">
//             <a
//               href="/"
//               className="px-6 py-4 border border-gray-600 text-[#E1E1D5] rounded-full hover:border-[#D0D731] hover:text-[#D0D731] transition-colors text-sm md:text-base font-medium"
//             >
//               Home
//             </a>
//             </div>

//             <div className="border border-gray-600 rounded-4xl pt-3 px-4">
//             <a
//               href="/projects"
//               className="px-6 py-4 border border-gray-600 text-[#E1E1D5] rounded-full hover:border-[#D0D731] hover:text-[#D0D731] transition-colors text-sm md:text-base font-medium"
//             >
//               Work
//             </a>
//             </div>

//             <div className="border border-gray-600 rounded-4xl pt-3 px-4">
//             <a
//               href="/services"
//               className="px-6 py-4 border border-gray-600 text-[#E1E1D5] rounded-full hover:border-[#D0D731] hover:text-[#D0D731] transition-colors text-sm md:text-base font-medium"
//             >
//               Services
//             </a>
//             </div>

//             <div className="border border-gray-600 rounded-4xl pt-3 px-4">
//             <a
//               href="/about-us"
//               className="px-6 py-4 border border-gray-600 text-[#E1E1D5] rounded-full hover:border-[#D0D731] hover:text-[#D0D731] transition-colors text-sm md:text-base font-medium"
//             >
//               About
//             </a>
//             </div>

//             <div className="border border-gray-600 rounded-4xl pt-3 py-3 px-4">
//             <a
//               href="/contacts"
//               className="px-6 py-4 border border-gray-600 text-[#E1E1D5] rounded-full hover:border-[#D0D731] hover:text-[#D0D731] transition-colors text-sm md:text-base font-medium"
//             >
//               Build With Us
//             </a>
//             </div>
//           </div>
//         </div>

//         {/* Social Links */}
//         <div className="flex flex-wrap gap-4 md:gap-6">
//           <div className="border border-gray-600 rounded-4xl pt-3 py-3 px-4">
//           <a
//             href="https://www.instagram.com"
//             target="_blank"
//             rel="noopener noreferrer"
//             className="px-6 py-4 border border-gray-600 text-[#E1E1D5] rounded-full hover:border-[#D0D731] hover:text-[#D0D731] transition-colors text-sm md:text-base font-medium"
//           >
//             Instagram
//           </a>
//           </div>

//           <div className="border border-gray-600 rounded-4xl pt-3 py-3 px-4">
//           <a
//             href="https://www.linkedin.com"
//             target="_blank"
//             rel="noopener noreferrer"
//             className="px-6 py-4 border border-gray-600 text-[#E1E1D5] rounded-full hover:border-[#D0D731] hover:text-[#D0D731] transition-colors text-sm md:text-base font-medium"
//           >
//             LinkedIn
//           </a>
//           </div>

//           <div className="border border-gray-600 rounded-4xl pt-3 py-3 px-4">
//           <a
//             href="https://twitter.com"
//             target="_blank"
//             rel="noopener noreferrer"
//             className="px-6 py-4 border border-gray-600 text-[#E1E1D5] rounded-full hover:border-[#D0D731] hover:text-[#D0D731] transition-colors text-sm md:text-base font-medium"
//           >
//             Twitter / X
//           </a>
//           </div>

//         </div>
//       </div>
//     </footer>
//   );
// }








'use client';

import { Link } from "react-router-dom";

//import Link from 'next/link';

export default function Footer() {
  const menuLinks = [
    { label: 'Home', href: '/' },
    { label: 'About', href: '/about-us' },
    { label: 'Work', href: '/projects' },
    { label: 'Services', href: '/services' },
  ];

  const socialLinks = [
    { label: 'Instagram', href: 'https://www.instagram.com' },
    { label: 'LinkedIn', href: 'https://www.linkedin.com' },
    { label: 'Twitter/X', href: 'https://twitter.com' },
  ];

  return (
    <footer className="bg-[#052F23] text-[#E1E1D5]">
      <div className="mx-auto max-w-[940px] px-8 py-96 md:px-16 md:py-14 lg:max-w-[1300px]">
        <div className="grid grid-cols-2 gap-x-10 gap-y-10 md:grid-cols-[1fr_auto_auto] md:gap-28">
          <div className="col-span-2 text-center md:col-span-1 md:text-left">
            <Link to="/" className="inline-flex items-center gap-3" aria-label="Bambu home">
              {/* <span aria-hidden="true" className="relative block h-12 w-10 overflow-hidden">
                <span className="absolute left-0 top-0 h-8 w-9 -rotate-[28deg] rounded-[18px] bg-[#31563f]" />
                <span className="absolute bottom-0 left-0 h-8 w-9 -rotate-[28deg] rounded-[18px] bg-[#d4e52b]" />
              </span>
              <span className="text-[40px] font-bold leading-none tracking-[-0.06em] text-[#f4f2ed]">Bambu</span> */}
              <img src="/public/WHITE PRIMARY LOGO@4x.png" alt="Bambu Logo" className="h-12 w-auto" />
            </Link>
            <p className="mx-auto mt-5 max-w-[310px] text-[22px] leading-[1.28] tracking-[-0.02em] md:mx-0 md:text-[23px]">
              Creative work that moves<br className="hidden md:block" /> businesses forward.
            </p>
            <div className="mx-auto mt-9 h-px w-full max-w-[545px] bg-[#f4f2ed] md:hidden" />
            <Link
              to="/contacts"
              className="mt-5 hidden rounded-full bg-[#D0D731] text-[#052F23] px-7 py-2 text-[16px] font-bold text-[#003b2f] transition-colors hover:bg-[#e4f35a] md:inline-flex"
            >
              Build With Us
            </Link>
          </div>

          <nav aria-label="Footer menu" className="text-center md:text-left">
            <h2 className="text-[21px] font-bold text-[#D0D731]">Menu</h2>
            <ul className="mt-3 space-y-2 text-[22px] leading-[1.25]">
              {menuLinks.map((link) => (
                <li key={link.label}>
                  <Link to={link.href} className="transition-colors hover:text-[#d4e52b]">{link.label}</Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label="Footer social links" className="text-center md:text-left">
            <h2 className="text-[21px] font-bold text-[#D0D731]">Socials</h2>
            <ul className="mt-3 space-y-2 text-[22px] leading-[1.25]">
              {socialLinks.map((link) => (
                <li key={link.label}>
                  <a href={link.href} target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-[#d4e52b]">{link.label}</a>
                </li>
              ))}
            </ul>
            <Link
              to="/contacts"
              className="mt-5 inline-flex rounded-full bg-[#d4e52b] px-7 py-2 text-[16px] font-bold text-[#003b2f] transition-colors hover:bg-[#e4f35a] md:hidden"
            >
              Build With Us
            </Link>
          </nav>
        </div>
      </div>
    </footer>
  );
}
