import Navigation from '../components/Navigation';
import PortfolioCarousel from '../components/PortfolioCarousel';
//import ServiceSlides from '../components/ServiceSlides';
import FAQ from '../components/FAQ';
import FinalCTA from '../components/FinalCTA';
import Footer from '../components/Footer';

export const metadata = {
  title: 'Services | Bambu',
  description: 'Our comprehensive branding and design services.',
};

export default function ServicesPage() {
  return (
    <main>
      <Navigation />

      {/* Heading & Text One */}
      <section className="bg-[#ededda] py-20 md:py-28">
        <div className="container-max">
          <h1 className="text-5xl md:text-7xl font-poppins font-bold text-[#1a3a3a] mb-8 text-balance">
            The Work That <span className="text-[#D4F157]">Moves the Business.</span>
            <br />
            Not someday. Not softly. Now.
          </h1>
          <p className="text-lg leading-relaxed text-[#1a3a3a] max-w-4xl">
            As an international branding and web design agency, we don&apos;t sell creativity we use it. Our brand design agency services close gaps, gain ground, and push brands where they need to go. Faster. Sharper. Without detours. Serving clients globally with offices in London, Dubai, and Istanbul.
          </p>
        </div>
      </section>

      {/* Portfolio Carousel */}
      <PortfolioCarousel />

      {/* Heading & Text Two */}
      <section className="bg-[#ededda] py-20 md:py-28">
        <div className="container-max">
          <h2 className="text-5xl md:text-6xl font-poppins font-bold text-[#1a3a3a] mb-8 text-balance">
            What We Do. What <span className="text-[#D4F157]">Moves Brands.</span>
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-lg leading-relaxed text-[#1a3a3a]">
                Bambu is an international brand design agency delivering creative assets designed to perform. If, on screen, in pitch rooms, and in people&apos;s hands, our brand agency services span global markets with presence in London, Dubai, and Istanbul. No fluff. No filler. Just what moves.
           We are a creative agency driven by one core belief: great brands aren’t made, they’re built. Our purpose is simple yet powerful, to build brands that are structured, intentional, and built to last.

We specialize in crafting bold, strategic, and meaningful identities that go beyond aesthetics. Our services span: Brand Identity Conceptualization, Strategy & Consultation, Website Design, Marketing, Digital Marketing, Email Marketing, Motion Design, and Animation.
At the heart of everything we do is our guiding principle: Building. We don’t jump into execution. We start with concept, because a strong foundation shapes everything that follows. It’s how we ensure that every brand we create has depth, clarity, and a compelling story.
Every project we work on, we ask the questions: What will your brand represent? How will it grow? We’re here to build brands that won't just exist but brands that will thrive, evolve and leave a legacy. We build something TIMELESS. It's Time to Build with Bambu.
              </p>
            </div>
            <div className="flex justify-center">
              <img src="/annieunsplash.jpg" alt="Brand concept" className="w-210 h-110  object-contain" />
            </div>
          </div>
        </div>
      </section>

      {/* Service Slides */}
      {/* <ServiceSlides /> */}

      {/* FAQ Section */}
      <FAQ />

      {/* Final CTA */}
      <FinalCTA />

      <Footer />
    </main>
  );
}
