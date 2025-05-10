import Navbar from "@/components/navbar";
import HeroSection from "@/components/hero-section";
import AboutSection from "@/components/about-section";
import SustainabilitySection from "@/components/sustainability-section";
import InnovationSection from "@/components/innovation-section";
import ProductsSection from "@/components/products-section";
import VideosSection from "@/components/videos-section";
import QualitySection from "@/components/quality-section";
import ResearchSection from "@/components/research-section";
import PhilosophySection from "@/components/philosophy-section";
import TestimonialsSection from "@/components/testimonials-section";
import BlogSection from "@/components/blog-section";
import ContactSection from "@/components/contact-section";
import { BrowserRouter } from "react-router";
import Footer from "./components/Footer";
import FooterTextSlider from "./components/FooterTextSlider";

export default function Home() {
  return (
    <BrowserRouter>
      <div className=" bg-white">
        <Navbar />
        <main className=" overflow-hidden">
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
        </main>
        <div className="bg-[radial-gradient(circle,_#088772_0%,_#5ec199_96%)] w-full py-6">
          <FooterTextSlider />
        </div>

        <Footer />
      </div>
    </BrowserRouter>
  );
}
