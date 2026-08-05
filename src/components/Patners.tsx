'use client';

import { useEffect, useState, useRef } from 'react';

// const partners = [
//   { id: 1, name: 'Partner 1', logo: 'https://markaworks.com/wp-content/uploads/2025/10/Placeholder-Logo.png' },
//   { id: 2, name: 'Partner 2', logo: 'https://markaworks.com/wp-content/uploads/2025/10/Placeholder-Logo-1.png' },
//   { id: 3, name: 'Partner 3', logo: 'https://markaworks.com/wp-content/uploads/2025/10/Placeholder-Logo-2.png' },
//   { id: 4, name: 'Partner 4', logo: 'https://markaworks.com/wp-content/uploads/2025/10/Placeholder-Logo-3.png' },
//   { id: 5, name: 'Partner 5', logo: 'https://markaworks.com/wp-content/uploads/2025/10/Placeholder-Logo-4.png' },
//   { id: 6, name: 'Partner 6', logo: 'https://markaworks.com/wp-content/uploads/2025/10/Placeholder-Logo-5.png' },
//   { id: 7, name: 'Partner 7', logo: 'https://markaworks.com/wp-content/uploads/2025/10/Placeholder-Logo-6.png' },
//   { id: 8, name: 'Partner 8', logo: 'https://markaworks.com/wp-content/uploads/2025/10/Placeholder-Logo-7.png' },
//   { id: 9, name: 'Partner 9', logo: 'https://markaworks.com/wp-content/uploads/2025/10/Placeholder-Logo-8.png' },
//   { id: 10, name: 'Partner 10', logo: 'https://markaworks.com/wp-content/uploads/2025/10/Placeholder-Logo-9.png' },
// ];

const portfolioItems = [
  // { id: 1, title: 'HOLME Home Luxury Fragrance', image: 'https://markaworks.com/wp-content/uploads/2026/01/holme_cover-1.gif', href: '/portfolio/holme/' },
   { id: 1, title: 'HOLME Home Luxury Fragrance', image: '/camera-obscura-hE0Q1v2elO0-unsplash.jpg', href: '/portfolio/holme/' },
  
  //  { id: 2, title: 'BARS Brand Identity', image: 'https://markaworks.com/wp-content/uploads/2026/01/bars_presentation_01.webp', href: '/projects/bars%20company.html' },
    { id: 2, title: 'BARS Brand Identity', image: '/d-z-2oyHDz6LW1w-unsplash.jpg', href: '/projects/bars%20company.html' },

  // { id: 3, title: 'GL Peptides', image: 'https://markaworks.com/wp-content/uploads/2026/01/glpeptides01.jpg', href: '/projects/glpeptides/' },
   { id: 3, title: 'GL Peptides', image: '/gaspifilms-3GieBOQwVgI-unsplash.jpg', href: '/projects/glpeptides/' },


  // { id: 4, title: 'LA MAMA Coffee Brand', image: 'https://markaworks.com/wp-content/uploads/2026/02/lamama_presentation-04.webp', href: '/portfolio/la-mama/' },
   { id: 4, title: 'LA MAMA Coffee Brand', image: '/jimmy-woo-pC_7RvsPwng-unsplash.jpg', href: '/portfolio/la-mama/' },
  
  
  // { id: 5, title: 'Rauph', image: 'https://markaworks.com/wp-content/uploads/2025/12/rauph_presentation_Artboard-1.jpg', href: '/projects/rauph/' },
   { id: 5, title: 'Rauph', image: '/jonathan-kemper-kLqpttf2wGE-unsplash.jpg', href: '/projects/rauph/' },
 
 
//  { id: 6, title: 'Rauph UI', image: 'https://mir-s3-cdn-cf.behance.net/project_modules/1400_webp/cca059240284095.693af391570c1.jpg', href: '/projects/rauph-ui/' },
   { id: 6, title: 'Rauph UI', image: '/y-m-QYOsTPZaRt4-unsplash.jpg', href: '/projects/rauph-ui/' },


  //{ id: 7, title: 'VOXO', image: 'https://mir-s3-cdn-cf.behance.net/project_modules/1400_webp/ae0691239267949.6925cb3a5edb7.jpg', href: '/portfolio/voxo/' },
  { id: 7, title: 'VOXO', image: '/view-people-learning-how-make-traditional-sushi-dish.jpg', href: '/portfolio/voxo/' },
 

//  { id: 8, title: 'MUUM', image: 'https://mir-s3-cdn-cf.behance.net/project_modules/1400_webp/1aa9de239201603.692491611b8cf.jpg', href: '/portfolio/muum/' },
  { id: 8, title: 'MUUM', image: '/austin-distel-wD1LRb9OeEo-unsplash.jpg', href: '/portfolio/muum/' },
 
 // { id: 9, title: 'MUUM UI', image: 'https://mir-s3-cdn-cf.behance.net/project_modules/1400_webp/63c070239041909.69209fd51f130.jpg', href: '/portfolio/muum-ui/' },
  { id: 9, title: 'MUUM UI', image: '/annieunsplash (1).jpg', href: '/portfolio/muum-ui/' },
 
 
  //{ id: 10, title: 'Birtz', image: 'https://markaworks.com/wp-content/uploads/2025/11/Blitz01.jpg', href: '/portfolio/birtz/' },
  { id: 10, title: 'Birtz', image: '/gaspifilms-3GieBOQwVgI-unsplash.jpg', href: '/portfolio/birtz/' },
 

//  { id: 11, title: 'YU', image: 'https://markaworks.com/wp-content/uploads/2025/10/01-1.jpg', href: '/projects/yu/' },
  { id: 11, title: 'YU', image: '/d-z-2oyHDz6LW1w-unsplash.jpg', href: '/projects/yu/' },
 
  
  //{ id: 12, title: 'Snax', image: 'https://markaworks.com/wp-content/uploads/2025/10/Snax_01.jpg', href: '/projects/snax/' },
  { id: 12, title: 'Snax', image: '/camera-obscura-hE0Q1v2elO0-unsplash.jpg', href: '/projects/snax/' },
 
  //{ id: 13, title: 'Umri', image: 'https://markaworks.com/wp-content/uploads/2025/10/Umri_01.jpg', href: '/projects/umri/' },
  { id: 13, title: 'Umri', image: '/paymo-nMDjEyge8KA-unsplash.jpg', href: '/projects/umri/' },
 
 // { id: 14, title: 'Elevated', image: 'https://markaworks.com/wp-content/uploads/2025/10/Elevated_01.jpg', href: '/projects/elevated/' },
  { id: 14, title: 'Elevated', image: '/20250929_0114_Animated GTA VI Sky_simple_compose_01k6a8gpyzfe2vw8q6f6n4dg1s.png', href: '/projects/elevated/' },
 
  //{ id: 15, title: 'Skindeep', image: 'https://markaworks.com/wp-content/uploads/2025/10/1-1920x1549.jpg', href: '/projects/skindeep/' },
  { id: 15, title: 'Skindeep', image: '/chalo-gallardo-USKuSTaFhsQ-unsplash.jpg', href: '/projects/skindeep/' },
 
  //{ id: 16, title: 'Pheros', image: 'https://markaworks.com/wp-content/uploads/2025/10/21-1920x1518.jpg', href: '/projects/pheros/' },
  { id: 16, title: 'Pheros', image: '/y-m-QYOsTPZaRt4-unsplash.jpg', href: '/projects/pheros/' },
 
  //{ id: 17, title: 'Glowie', image: 'https://markaworks.com/wp-content/uploads/2025/10/1-1920x1464.jpg', href: '/projects/glowie/' },
  { id: 17, title: 'Glowie', image: '/20250929_0114_Animated GTA VI Sky_simple_compose_01k6a8gpyzfe2vw8q6f6n4dg1s.png', href: '/projects/glowie/' },
 
  //{ id: 18, title: 'League&', image: 'https://markaworks.com/wp-content/uploads/2024/11/1-1-1920x1267.jpg', href: '/projects/leagueand/' },
  { id: 18, title: 'League&', image: '/jonathan-kemper-kLqpttf2wGE-unsplash.jpg', href: '/projects/leagueand/' },
 
  //{ id: 19, title: 'Viscerex', image: 'https://markaworks.com/wp-content/uploads/2024/11/1-1920x1475.jpg', href: '/projects/viscerex/' },
  { id: 19, title: 'Viscerex', image: '/jimmy-woo-pC_7RvsPwng-unsplash.jpg', href: '/projects/viscerex/' },
 
  //{ id: 20, title: 'Resetcare', image: 'https://markaworks.com/wp-content/uploads/2024/09/17-1920x2371.jpg', href: '/projects/resetcare/' },
  { id: 20, title: 'Resetcare', image: '/d-z-2oyHDz6LW1w-unsplash.jpg', href: '/projects/resetcare/' },
 
 // { id: 21, title: 'MoreBabies / Branding', image: 'https://markaworks.com/wp-content/uploads/2024/08/1-1-1920x1356.jpg', href: '/projects/morebabies-branding/' },
  { id: 21, title: 'MoreBabies / Branding', image: '/374cd52c-9a1d-44b7-b933-d4ec0af1d1cf.jpg', href: '/projects/morebabies-branding/' },
 
 // { id: 22, title: 'Awelly / UI Design', image: 'https://markatent/uploads/2024/08/awellycover-1920x1535.jpg', href: '/projects/awelly-ui-design/' },
  { id: 22, title: 'Awelly / UI Design', image: '/view-people-learning-how-make-traditional-sushi-dish.jpg', href: '/projects/awelly-ui-design/' },
];



export default function Partners() {
//  const [scrollOffset, setScrollOffset] = useState(0);
 // const sectionRef = useRef<HTMLDivElement>(null);

  // useEffect(() => {
  //   const handleScroll = () => {
  //     if (!sectionRef.current) return;

  //     const rect = sectionRef.current.getBoundingClientRect();
  //     const sectionTop = rect.top;
  //     const sectionHeight = rect.height;
  //     const viewportHeight = window.innerHeight;

  //     // Calculate scroll progress relative to the section
  //     const scrollProgress = Math.max(0, Math.min(1, (viewportHeight - sectionTop) / (viewportHeight + sectionHeight)));
      
  //     // Apply animation based on scroll - moves left as you scroll down
  //     const offset = scrollProgress * 615.2;
  //     setScrollOffset(offset);
  //   };

  //   window.addEventListener('scroll', handleScroll);
  //   return () => window.removeEventListener('scroll', handleScroll);
  // }, []);

     const sectionRef = useRef<HTMLDivElement>(null);
  const [scrollOffset, setScrollOffset] = useState(0);

   // Scroll-linked animation matching Partners section
  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;

      const rect = sectionRef.current.getBoundingClientRect();
      const sectionTop = rect.top;
      const sectionHeight = rect.height;
      const viewportHeight = window.innerHeight;

      // Calculate scroll progress relative to the section
      const scrollProgress = Math.max(0, Math.min(1, (viewportHeight - sectionTop) / (viewportHeight + sectionHeight)));
      
      // Apply animation based on scroll - total portfolio width calculation
      // 22 items * (325px + 24px gap) = 7678px per set, with duplicates = 15356px
      const maxOffset = 7678;
      const offset = scrollProgress * maxOffset;
      setScrollOffset(offset);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);



  return (
    <section className="bg-[#E1E1D5] py-20 md:py-28" ref={sectionRef}>
      




        {/* Portfolio Gallery Section */}
         <div className="markaworks-portfolio-gallery-wrapper relative w-full h-96" ref={sectionRef}>
           <div className="markaworks-gallery-nav markaworks-gallery-nav-left absolute left-0 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-[#E7B621] text-[#11211F] flex items-center justify-center">
             <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
               <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
             </svg>
           </div>

           <div className="markaworks-portfolio-gallery relative overflow-hidden h-full flex items-center">
             <div
              className="markaworks-portfolio-track flex gap-6"
              style={{
                transform: `translateX(-${scrollOffset}px)`,
                transition: 'transform 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
              }}
            >
              {portfolioItems.map((item) => (
                <a
                  key={`${item.id}-first`}
                  href={item.href}
                  className="markaworks-portfolio-item flex-shrink-0 rounded-lg overflow-hidden group cursor-pointer relative"
                  style={{
                    width: '325px',
                    minWidth: '325px',
                    height: '325px',
                    minHeight: '325px',
                  }}
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover transition-all duration-300 group-hover:blur-sm"
                    loading="lazy"
                  />
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300"></div>
                  {/* View Button with Saturn Ring */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="relative">
                      {/* Saturn Ring */}
                      <div className="absolute inset-0 rounded-full border-2 border-[#E7B621] opacity-0 group-hover:opacity-100 transition-all duration-300"
                        style={{
                          width: '120px',
                          height: '120px',
                          top: '50%',
                          left: '50%',
                          transform: 'translate(-50%, -50%)',
                        }}
                      ></div>
                      {/* Button */}
                      <button
                        className="relative w-24 h-24 rounded-full bg-[#E7B621] text-[#052F23] flex items-center justify-center font-poppins font-bold text-sm opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-[#E0F77D]"
                        style={{
                          boxShadow: '0 0 20px rgba(212, 241, 87, 0.3)',
                        }}
                      >
                        View
                      </button>
                    </div>
                  </div>
                </a>
              ))}

              {portfolioItems.map((item) => (
                <a
                  key={`${item.id}-second`}
                  href={item.href}
                  className="markaworks-portfolio-item flex-shrink-0 rounded-lg overflow-hidden group cursor-pointer relative"
                  style={{
                    width: '325px',
                    minWidth: '325px',
                    height: '325px',
                    minHeight: '325px',
                  }}
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover transition-all duration-300 group-hover:blur-sm"
                    loading="lazy"
                  />
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300"></div>
                  {/* View Button with Saturn Ring */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="relative">
                      {/* Saturn Ring */}
                      <div className="absolute inset-0 rounded-full border-2 border-[#E7B621] opacity-0 group-hover:opacity-100 transition-all duration-300"
                        style={{
                          width: '120px',
                          height: '120px',
                          top: '50%',
                          left: '50%',
                          transform: 'translate(-50%, -50%)',
                        }}
                      ></div>
                      {/* Button */}
                      <button
                        className="relative w-24 h-24 rounded-full bg-[#E7B621] text-[#11211F] flex items-center justify-center font-poppins font-bold text-sm opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-[#E0F77D]"
                        style={{
                          boxShadow: '0 0 20px rgba(212, 241, 87, 0.3)',
                        }}
                      >
                        View
                      </button>
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </div>

          <div className="markaworks-gallery-nav markaworks-gallery-nav-right absolute right-0 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-[#E7B621] text-[#11211F] flex items-center justify-center">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        </div>
    </section>
  );
}













// <div className="container-max">
//         <h3 className="text-3xl md:text-4xl font-poppins font-bold text-[#052F23] mb-12 text-center">
//           Tech We Build With
//         </h3>

//         {/* Partners Carousel */}
//         <div className="markaworks-partners-track-container relative overflow-hidden">
//           <div
//             className="markaworks-partners-track flex gap-8 transition-transform duration-300"
//             style={{
//               transform: `translateX(-${scrollOffset}px)`,
//               transition: 'transform 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
//             }}
//           >
//             {/* First set of partners */}
//             {partners.map((partner) => (
//               <div
//                 key={`${partner.id}-first`}
//                 className="markaworks-partner-item flex-shrink-0 w-32 h-32 rounded-lg bg-white flex items-center justify-center overflow-hidden"
//               >
//                 <img
//                   src={partner.logo}
//                   alt={partner.name}
//                   className="w-24 h-24 object-contain"
//                   loading="lazy"
//                 />
//               </div>
//             ))}

//             {/* Second set of partners for infinite loop */}
//             {partners.map((partner) => (
//               <div
//                 key={`${partner.id}-second`}
//                 className="markaworks-partner-item flex-shrink-0 w-32 h-32 rounded-lg bg-white flex items-center justify-center overflow-hidden"
//               >
//                 <img
//                   src={partner.logo}
//                   alt={partner.name}
//                   className="w-24 h-24 object-contain"
//                   loading="lazy"
//                 />
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>