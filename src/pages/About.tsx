import CompanyValues from "@/components/about/company-values";
import FaqSection from "@/components/about/faq-section";
import TeamSection from "@/components/about/team-section";
import WhoWeAre from "@/components/about/who-we-are";
import FooterTextSlider from "@/components/FooterTextSlider";
import TestimonialsSection from "@/components/home/testimonials-section";
import NavigationHeroSection from "@/components/NavigationHeroSection";

const About = () => {
  return (
    <div>
      <NavigationHeroSection title="About Us" path="About" />
      <WhoWeAre />
      <CompanyValues />
      <TeamSection />
      <FaqSection />
      <TestimonialsSection />
      <FooterTextSlider />
    </div>
  );
};

export default About;
