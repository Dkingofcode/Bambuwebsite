// /import type { Metadata } from 'next';
import Navigation from '../components/Navigation';
import ContactPageContent from '../components/ContactPageContent';
import Footer from '../components/Footer';

export const metadata = {
  title: 'Contact | The Bambu Agency',
  description: 'Start a project with The Bambu Agency.',
};

export default function ContactPage() {
  return (
    <>
      <Navigation />
      <ContactPageContent />
      <Footer />
    </>
  );
}