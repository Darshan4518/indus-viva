import NavigationHeroSection from "@/components/NavigationHeroSection";

const Disclaimer = () => {
  return (
    <section>
      <NavigationHeroSection title="Disclaimer" path="Disclaimer" />
      <div className="container mx-auto px-4 py-8 max-w-7xl space-y-3">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-8 text-center my-6">
          Disclaimer
        </h2>
        <p className=" text-gray-500">
          At This is the official Compensation Plan, Policy & Procedure and
          Terms & Conditions document of IndusViva, valid only in India, for the
          year 2025; pertaining to the business opportunity offered to
          Independent Distributors. IndusViva withholds all the rights to amend
          or remove any of the clauses mentioned here without any notice. The
          company has all the rights to nullify any of the clauses, if
          necessary, to protect the interest of the business. Refer to{" "}
          <strong>
            <a href="https://indusviva.com/compensation-plan/">
              https://indusviva.com/compensation-plan/
            </a>
          </strong>{" "}
          for the latest updates. Valid only in India, for the year 2025. Any
          disputes, Bangalore jurisdiction only.
        </p>
        <p className=" text-gray-500">
          <strong>Published on 1st Jan 2025</strong>
        </p>
      </div>
    </section>
  );
};

export default Disclaimer;
