import Navigation from '../components/Navigation';
import Stats from '../components/Stats';
import Partners from '../components/Patners';
import FounderVision from '../components/FounderVision';
import CreativeTeamCarousel from '../components/CreativeTeamCarousel';
import Methodology from '../components/Methodology';
import FinalCTA from '../components/FinalCTA';
import FAQ from '../components/FAQ';
import Footer from '../components/Footer';

export const metadata = {
  title: 'About Us | MarkaWorks',
  description: 'Discover MarkaWorks: our story, values, team, and methodology for creating powerful brands.',
};

export default function AboutUsPage() {
  return (
    <main>
      <Navigation />
      <Stats />
      <Partners />
      <FounderVision />
      <CreativeTeamCarousel />
      <Methodology />
      <FinalCTA />
      <FAQ />
      <Footer />
    </main>
  );
}
