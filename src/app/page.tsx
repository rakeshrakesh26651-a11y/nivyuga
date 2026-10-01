import Header from '@/components/Header';
import Hero from '@/components/Hero';
import IntroSection from '@/components/IntroSection';
import NewArrivals from '@/components/NewArrivals';
import ServicesSection from '@/components/ServicesSection';
import AboutSection from '@/components/AboutSection';
import BestSellers from '@/components/BestSellers';
import Testimonials from '@/components/Testimonials';
import BlogSection from '@/components/BlogSection';
import CTASection from '@/components/CTASection';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="relative flex flex-col min-h-screen bg-[#fffff5] overflow-hidden">
      <Header />
      <Hero />
      <IntroSection />
      <NewArrivals />
      <ServicesSection />
      <AboutSection />
      <BestSellers />
      <Testimonials />
      <BlogSection />
      <CTASection />
      <Footer />
    </main>
  );
}
