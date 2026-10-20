import Navigation from '../components/Navigation';

import Hero from '../components/Hero';

//import Partners from '../components/Patners';

//import WhyBambu from '../components/WhyBambu';
import ServicesSnapshot from '../components/ServicesSnapshot';
//import AISupport from '../components/AISupport';
import Work from '../components/Work';
// import ThePanders from '../components/Panders';
// import CTA from '../components/CTA';

// import Details from "../components/Details";
// import FinalCTA from '../components/FinalCTA';

import Footer from '../components/Footer';
import Services from '../components/Services';
import Testimonials from '../components/Testimonials';

export default function Home() {
  return (
    <main className="bg-[#052F23]">
      <Navigation />
    
      <Hero />
    
      {/* <WhyBambu /> */}
      <ServicesSnapshot />
      <Work />
      <Services />
      <Testimonials />
      {/* <ThePanders />
      <CTA />
     
      <Details />
      <FinalCTA />  */}
     
      <Footer />
    </main>
  );
}
