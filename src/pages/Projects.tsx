import Navigation from '../components/Navigation';
import PortfolioShowcase from '../components/PortfolioShowcase';
import Testimonials from '../components/Testimonials';
import Footer from '../components/Footer';

export const metadata = {
  title: 'Projects | MarkaWorks',
  description: 'Explore our portfolio of transformative branding projects.',
};

export default function ProjectsPage() {
  return (
    <main>
      <Navigation />
      
      {/* Hero Section */}
      <section className="bg-[#1a3a3a] py-20 md:py-28">
        <div className="container-max">
          <h1 className="text-5xl md:text-7xl font-poppins font-bold text-white mb-6">
            Our <span className="text-[#D4F157]">Projects</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl">
            Explore the transformative work we&apos;ve done for leading brands across industries.
          </p>
        </div>
      </section>

      {/* Portfolio Showcase */}
      <PortfolioShowcase />

      {/* Testimonials */}
      <Testimonials />

      <Footer />
    </main>
  );
}
