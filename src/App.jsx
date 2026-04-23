import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import BrandLogos from './components/BrandLogos/BrandLogos';
import Stats from './components/Stats/Stats';
import HowItWorks from './components/HowItWorks/HowItWorks';
import CreatorPartners from './components/CreatorPartners/CreatorPartners';
import UniversityPartners from './components/UniversityPartners/UniversityPartners';
import Services from './components/Services/Services';
import CaseStudy from './components/CaseStudy/CaseStudy';
import About from './components/About/About';
import Testimonials from './components/Testimonials/Testimonials';
import FAQ from './components/FAQ/FAQ';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';

export default function App() {
  return (
    <>
      <Header />
      <Hero />
      <BrandLogos />
      <HowItWorks />
      <CreatorPartners />
      <UniversityPartners />
      <Services />
      <About />
      <FAQ />
      <Contact />
      <Footer />
    </>
  );
}

