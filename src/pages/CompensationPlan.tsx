import Bonuses from "@/components/CompensationPlan/bounens";
import { CompensationDetails } from "@/components/CompensationPlan/compensation-details";
import { ProductPricing } from "@/components/CompensationPlan/product-pricing";
import Revenue from "@/components/CompensationPlan/revenue";
import Terminologies from "@/components/CompensationPlan/terminologies";
import NavigationHeroSection from "@/components/NavigationHeroSection";

const CompensationPlan = () => {
  return (
    <section>
      <NavigationHeroSection
        title="Compensation Plan"
        path="Compensation Plan"
      />
      <div className="container mx-auto px-4 py-8 max-w-7xl">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-8 text-center my-6">
          Indusviva Compensation Plan 2025
        </h2>
        <Terminologies />
        <ProductPricing />
        <CompensationDetails />
        <Revenue />
        <Bonuses />
      </div>
    </section>
  );
};

export default CompensationPlan;
