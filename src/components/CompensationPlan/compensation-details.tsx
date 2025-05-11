const revenues = [
  "Retail Revenue",
  "Business Incubator Revenue",
  "Dual Team Revenue",
  "Rank Maintenance Revenue",
  "Co-applicant Revenue",
  "Single Team Revenue",
  "Royalty",
];

const bonuses = [
  "Business Opening Bonus",
  "Digi Rockstar Bonus",
  "Dual Team Revenue",
  "Top Retailer Bonus",
  "VOTM Bonus",
  "Presidential Club Bonus",
  "Loyalty Bonus",
  "Rewards",
];

export const CompensationDetails: React.FC = () => (
  <div className="my-8">
    <h2 className="text-xl font-semibold mb-4">Compensation Plan</h2>
    <p>There are 7 ways of earning Revenue and 7 ways of earning Bonus with IndusViva.</p>
    <div className="mt-6">
      <h3 className="text-lg font-semibold mb-2">Revenues</h3>
      <ul className="list-disc pl-6 space-y-1">
        {revenues.map((item, idx) => (
          <li key={idx}>{item}</li>
        ))}
      </ul>
    </div>
    <div className="mt-6">
      <h3 className="text-lg font-semibold mb-2">Bonuses</h3>
      <ul className="list-disc pl-6 space-y-1">
        {bonuses.map((item, idx) => (
          <li key={idx}>{item}</li>
        ))}
      </ul>
    </div>
  </div>
);
