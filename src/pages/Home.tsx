import HeroSection from "@/components/home/hero-section";
import AboutSection from "@/components/home/about-section";
import SustainabilitySection from "@/components/home/sustainability-section";
import InnovationSection from "@/components/home/innovation-section";
import ProductsSection from "@/components/home/products-section";
import VideosSection from "@/components/home/videos-section";
import QualitySection from "@/components/home/quality-section";
import ResearchSection from "@/components/home/research-section";
import PhilosophySection from "@/components/home/philosophy-section";
import TestimonialsSection from "@/components/home/testimonials-section";
import BlogSection from "@/components/home/blog-section";
import ContactSection from "@/components/home/contact-section";
import FooterTextSlider from "@/components/FooterTextSlider";

const Home = () => {

  return (
    <section className=" overflow-hidden">
      <HeroSection />
      <AboutSection />
      <SustainabilitySection />
      <InnovationSection />
      <ProductsSection />
      <QualitySection />
      <VideosSection />
      <ResearchSection />
      <PhilosophySection />
      <TestimonialsSection />
      <BlogSection />
      <ContactSection />
      <FooterTextSlider />
    </section>
  );
};

export default Home;
