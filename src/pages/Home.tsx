import Navigation from '../components/Navigation';
//import VideoHero from '../components/VideoHero';
import Hero from '../components/Hero';
//import CTASection from '../components/CTASection';
import Partners from '../components/Patners';
//import Stats from '../components/Stats';
import WhyBambu from '../components/WhyBambu';
import ServicesSnapshot from '../components/ServicesSnapshot';
import AISupport from '../components/AISupport';
import Work from '../components/Work';
import ThePanders from '../components/Panders';
import CTA from '../components/CTA';
//import VideoTestimonial from '../components/VideoTestimonial';
//import PortfolioShowcase from '../components/PortfolioShowcase';
//import BrandingStrategy from '../components/BrandingStrategy';
//import Testimonials from '../components/Testimonials';
//import Services from '../components/Services';
//import CaseStudies from '../components/CaseStudies';
//import FinalCTA from '../components/FinalCTA';
//import FAQ from '../components/FAQ';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <main className="bg-[#052F23]">
      <Navigation />
      {/* <VideoHero /> */}
      <Hero />
      <Partners />
      <WhyBambu />
      <ServicesSnapshot />
      <AISupport />
      <Work />
      <ThePanders />
      <CTA />
      {/* <Stats /> */}
      {/* <VideoTestimonial />
      <PortfolioShowcase /> */}
      {/* <CTASection />
      <BrandingStrategy />
      <Testimonials /> */}
      {/* <Services /> */}
      {/* <CaseStudies />
      <FinalCTA /> */}
      {/* <FAQ /> */}
      <Footer />
    </main>
  );
}
