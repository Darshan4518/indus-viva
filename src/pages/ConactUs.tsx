import BranchOffices from "@/components/contactUs/branch-office";
import ContactForm from "@/components/contactUs/contact-form";
import NavigationHeroSection from "@/components/NavigationHeroSection";


const ConactUs = () => {

  return (
    <section>
      <NavigationHeroSection title="contact us" path="contact us" />
      <ContactForm />
      <BranchOffices/>
    </section>
  );
};

export default ConactUs;
