import Analytics from '@/components/Analytics';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import WhyUs from '@/components/WhyUs';
import Gallery from '@/components/Gallery';
import Zones from '@/components/Zones';
import FAQ from '@/components/FAQ';
import ContactForm from '@/components/ContactForm';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import MobileStickyBar from '@/components/MobileStickyBar';

export default function HomePage() {
  return (
    <>
      <Analytics />
      <Navbar />
      <main>
        <Hero />
        <Services />
        <WhyUs />
        <Gallery />
        <Zones />
        <FAQ />
        <ContactForm />
      </main>
      <Footer />
      <WhatsAppButton />
      <MobileStickyBar />
    </>
  );
}
