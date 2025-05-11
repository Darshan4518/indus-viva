import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../ui/table";

const Bonuses = () => {
  return (
    <div className="space-y-10">
      <section>
        <h2 className="text-4xl font-bold py-6">Bonuses</h2>

        <h4 className="text-xl font-semibold mb-3">
          Business Opening Bonus (Bob)
        </h4>
        <p>
          On the first order of the immediate associates in the first and second
          organisations, the VBO shall be eligible for a 5% BOB*, irrespective
          of their sponsorship; up to a maximum of 15 GBU.
        </p>
        <p className="mt-2 font-semibold">
          *Up to 300 PV shall be considered for BOB and the remaining, if any,
          shall be carried forward and get considered for DTR.
        </p>
      </section>

      <section>
        <h4 className="text-xl font-semibold mb-3">
          Digi Rockstar Bonus (Drb)
        </h4>
        <p>
          A VBO from the rank of Star and above who retails 300 PV products to
          customers within a period of a month shall be called a Digi Rockstar.
          By retailing 1000 PV, 600 PV and 300 PV in a calendar month a Digi
          Rockstar shall be eligible for Digi Rockstar Bonus as 4, 2 and 1 units
          of iCharge as complimentary products respectively.
        </p>
        <div className="mt-4">
          <strong>Conditions:</strong>
          <ul className="list-disc pl-6 mt-2 space-y-1">
            <li>
              For brand-new Stars the volume shall be considered for this bonus
              only from the subsequent week of their rank achievement.
            </li>
            <li>
              Maximum 100 PV shall be considered from a unique customer in the
              month. Not applicable if products are sent to overseas customers
              from the company itself.
            </li>
            <li>
              Orders placed through Virtual Office including PCM and VOTM shall
              not be considered.
            </li>
            <li>
              Even if the criteria are fulfilled prior, it shall be considered
              only after completion of the calendar month.
            </li>
            <li>TRB achievers shall not be considered.</li>
          </ul>
        </div>
      </section>

      <section>
        <h4 className="text-xl font-semibold mb-3">
          Top Retailer Bonus (Trb)#
        </h4>
        <p>
          VBOs from the rank of Star & above who achieve high retail sales in a
          month with the most authenticated sales to their customers will be
          rewarded with Top Retailer Bonus (TRB). A minimum of 1,000 PV must be
          retailed to enjoy the privilege.
        </p>
        <p className="mt-2">1st Position: 500 GBU</p>
        <p>2nd Position: 250 GBU</p>
        <strong className="block mt-4">Conditions:</strong>
        <ul className="list-disc pl-6 mt-2 space-y-1">
          <li>
            If 2 or 3 VBOs qualify for 1st position, the sum of TRB for
            positions 1 & 2 shall be distributed among the qualified. If more
            than 3 qualifies for 1st position then 8 units of iCharge as
            complimentary products shall be rewarded to all the qualified VBOs.
            If 2 VBOs qualify for 2nd position then the TRB 2 shall be
            distributed among them. If 3 or more VBOs qualify for 2nd position
            then 4 units of iCharge as complimentary products shall be rewarded
            to all the qualified.
          </li>
          <li>
            VBOs who are qualified for 1st or 2nd position are not eligible for
            Digi Rockstar Bonus in the month they qualified for TRB.
          </li>
          <li>
            Orders placed through Virtual Office including PCM and VOTM shall
            not be considered.
          </li>
          <li>
            Maximum 100 PV shall be considered from a unique customer. Not
            applicable for overseas orders.
          </li>
        </ul>
      </section>

      <section>
        <h4 className="text-xl font-semibold mb-3">Votm Bonus</h4>
        <p>
          Viva On The Move (VOTM) is for quick delivery of products which helps
          the team members & their customers to enjoy cash & carry of IndusViva
          products. Having a VOTM and promoting the same in the team will help
          in building a fast and sustainable Viva business.
        </p>
        <p className="mt-2">
          A VOTM owner can earn VOTM Bonus when s/he delivers products to
          his/her associates and their customers as per the below criteria.
        </p>

        <ul className="list-disc pl-6 mt-2 space-y-1">
          <li>
            1000 PV and above in a week: 2 units of iCharge as complimentary
            products
          </li>
          <li>
            500 PV and above but less than 1000 PV in a week: 1 unit of iCharge
            as complimentary product
          </li>
        </ul>

        <p className="mt-2">
          The VOTM owner can earn this by either qualifying with weekly volume
          or generating average weekly volume of the above-mentioned criteria.
        </p>

        <p className="mt-4 font-semibold">Additional Benefits:</p>
        <p>
          On placing a VOTM order of 1000 PV, the VBO shall be eligible for 2
          units of iCharge as complimentary products.
        </p>

        <strong className="block mt-4">Conditions:</strong>
        <ul className="list-disc pl-6 mt-2 space-y-1">
          <li>Star 1000 and above is eligible.</li>
          <li>
            To avail VOTM, the eligible VBO must submit a notarised affidavit in
            the given format.
          </li>
          <li>
            Duly notarised affidavits shall be given on Rs. 100 non-judicial
            pre-printed/ e-stamp paper. Affidavits on plain paper affixed with
            stamps shall not be accepted. In case of e-stamp paper, the 2nd
            party should be mentioned as M/s IndusViva HealthSciences Pvt. Ltd.
            while obtaining it.
          </li>
          <li>
            The soft copy of the affidavit must be uploaded to the Virtual
            Office for approval and the original copy should reach the
            headquarters within 10 days from the date of uploading to the VO.
          </li>
          <li>
            The complimentary products shall be released only after receiving
            the original copy at the headquarters. Payout of VBO and sponsor
            might be withheld if original copy is not received within 30 days.
          </li>
          <li>
            Approval is completely based on the discretion of the company.
          </li>
          <li>ID should be active.</li>
          <li>
            Placing VOTM order shall not activate an ID & VOTM shall be approved
            only if the ID is in active status.
          </li>
          <li>
            The volume above 200 PV, which is normally considered for spillover
            and Dual Team Revenue, is not applicable in VOTM, because this is
            not retail but stock products for serving through delivery.
          </li>
          <li>
            Orders of associates only can be assigned to a VOTM; orders of
            crosslines cannot be assigned.
          </li>
          <li>
            Maximum 1000 PV shall be allowed to be assigned a VOTM in a week.
          </li>
          <li>
            Handling charges are applicable for all the orders placed by the
            team through VOTM.
          </li>
          <li>
            No order is permitted to be assigned on a VOTM ID which is inactive.
          </li>
          <li>
            Orders will be dispatched to the VOTM owner’s shipping address
            usually once a week and strictly not to any other addresses.
          </li>
          <li>PCM & VOTM orders cannot be done through VOTM.</li>
          <li>
            VOTM of an ID shall be cancelled if it is inactive for 13 weeks or
            more.
          </li>
        </ul>

        <strong className="block mt-4">Procedures:</strong>
        <ul className="list-disc pl-6 mt-2 space-y-1">
          <li>
            VBOs shall choose VOTM as the mode of delivery for the orders placed
            by their customers, who have given their consent while placing the
            order, from their VO within 12 hours from the time of order and
            their preferred VOTM owner by entering the ID number or selecting
            from the suggested list of VOTM owners who shall deliver the
            products to the customer.
          </li>
          <li>
            VOTM owner will be responsible for the distribution of products of
            the orders assigned to their VOTM along with a copy of the credit
            note generated in their virtual office.
          </li>
          <li>
            VOTM Bonus shall be calculated after setting off TRB/Digi Rockstar
            Bonus/other complimentary products eligible volume, if any, on a
            monthly basis.
          </li>
          <li>
            Averaging shall be applicable if minimum qualifying volume criteria
            has been fulfilled before setting off TRB/Digi Rockstar Bonus/other
            complimentary products eligible volume in all the weeks of a
            calendar month.
          </li>
        </ul>
      </section>

      <section>
        <h4 className="text-xl font-semibold mb-3">
          Presidential Club Bonus (Pcb)
        </h4>
        <p>
          On achieving Star 250 Rank, a VBO is eligible to upgrade to the elite
          Presidential Club by placing a single order of 1,000 PV. A VBO gets 4
          complimentary products once s/he upgrades to the presidential club.
        </p>

        <p className="mt-4 font-semibold">Benefits:</p>
        <ul className="list-disc pl-6 mt-2 space-y-1">
          <li>ID remains active with 100 PV for 12 cycles.</li>
          <li>4 units of iCharge as complimentary products.</li>
          <li>
            If a VBO reactivates their presidential club membership on the week
            of expiry or activates on the 1st week of his/her eligibility, then
            s/he will get a 13 cycles activation.
          </li>
          <li>
            Upon uploading the customer details fulfilling the unique customer
            criteria for 24 products out of the PCM stock, a Star 250 can
            advance to Star 500 subject to audit.
          </li>
          <li>
            Sponsor will get 50 GBU as PCM upgrading bonus provided sponsor is
            also a PCM. The Presidential Club Upgrading Bonus is only for new
            PCM members and not applicable for renewal.
          </li>
        </ul>

        <p className="mt-4 font-semibold">Conditions:</p>
        <ul className="list-disc pl-6 mt-2 space-y-1">
          <li>Only a Star 250 and above can apply.</li>
          <li>
            Duly notarised affidavits signed by self, co-applicant and sponsor
            shall be given on Rs. 100 non-judicial pre-printed/ e-stamp paper.
            Affidavits on plain paper affixed with stamp shall not be accepted.
            In case of e-stamp paper, the 2nd party should be mentioned as M/s
            IndusViva HealthSciences Pvt. Ltd. while obtaining it.
          </li>
          <li>
            The soft copy of the affidavit must be uploaded to the Virtual
            Office for approval and the original copy should reach the
            headquarters within 10 days from the date of uploading to the VO.
          </li>
          <li>
            The complimentary products shall be released only after receiving
            the original copy at the headquarters. Payout of VBO and sponsor
            might be withheld if original copy is not received within 30 days.
          </li>
          <li>
            In case it is notified by the company, the VBO might be required to
            do a video verification along with the signed affidavit.
          </li>
          <li>
            Approval is completely based on the discretion of the company.
          </li>
          <li>
            Reactivation of presidential club membership is not permitted until
            the existing PCM expires.
          </li>
        </ul>
      </section>
      <section>
        <h4 className="text-xl font-semibold mb-3">Loyalty Bonus</h4>
        <p>
          Loyalty, as the name suggests, is our token of appreciation for the
          consistent loyalty a customer has towards the direct sellers of
          IndusViva who introduce its products to him/her. If a customer places
          a minimum purchase order (25 PV) through the store link of a
          particular direct seller for 10 consecutive months*, they shall be
          rewarded with 1 unit of iCharge as complimentary product via the
          Loyalty Program. They can get more complimentary products by placing
          orders for more than 1 product every month, maximum up to 4 units and
          the number of eligible quantities will be same as of the lowest number
          of products purchased in the 10 months.
        </p>
        <p className="mt-4 font-semibold">Conditions:</p>
        <ul className="list-disc pl-6 mt-2 space-y-1">
          <li>
            This reward is considered for 10 consecutive months. If there is any
            lapse in between the months, it has to be restarted from the
            beginning.
          </li>
          <li>
            Orders with the store link of a single direct seller shall be
            considered. They shall be disqualified if they buy from another
            direct seller while the previously served direct seller is active in
            the business.
          </li>
          <li>Orders placed through VOTM are not eligible.</li>
        </ul>
        <p className="mt-2">*T&C Applicable</p>
      </section>

      <section>
        <h4 className="text-xl font-semibold mb-3">Rank Rewards</h4>
        <Table className="border border-gray-300 p-4">
          <TableHeader>
            <TableRow>
              <TableHead>Rank</TableHead>
              <TableHead>Reward</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {[
              ["Star 500", "Accidental Insurance of INR 5 Lakhs"],
              ["Star 1000", "Star Summit"],
              ["Ruby Executives", "Theatric Thailand"],
              ["Pearl Executives", "Magnificent Malaysia"],
              ["Emerald Executives", "Unmatched Uzbekistan"],
              ["Sapphire Executives", "Dazzling Dubai"],
              ["Executive Diamond", "Spectacular Singapore and Star cruise"],
              ["Executive Blue Diamond", "Ravishing Russia"],
              ["Executive Purple Diamond", "Charming China"],
              ["Executive White Diamond", "Stunning South Africa"],
              ["Black Diamond Ambassador", "Exuberant Europe"],
              ["Royal Black Diamond Ambassador", "Amazing Australia"],
              ["Imperial Black Diamond Ambassador", "Unique USA"],
              [
                "Crown Black Diamond Ambassador",
                "Top-notch tour to dream destination",
              ],
            ].map(([rank, reward]) => (
              <TableRow key={rank}>
                <TableCell>{rank}</TableCell>
                <TableCell>{reward}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>

        <p className="mt-4 font-semibold">Conditions:</p>
        <ul className="list-disc pl-6 mt-2 space-y-1">
          <li>
            Star Summit and all international tours are for the VBO and default
            co-applicant. It is non-transferable in any case.
          </li>
          <li>
            Reward programs are available only for people who are actively
            pursuing the business (earning DTR) till the commencement of the
            reward event.
          </li>
          <li>
            It is the discretion of the company to decide/change the schedule of
            the rewards/ the reward itself and may announce any alternative
            reward/ destination under any unfavourable circumstance.
          </li>
          <li>
            The itinerary/duration of the trips shall be announced by the
            company and might change from time to time.
          </li>
          <li>
            The reward shall expire for a VBO once it is announced and conducted
            by the company for the period in which s/he achieved but not availed
            as per the company’s itinerary, whatsoever may be the reason.
          </li>
          <li>
            Conveyance excluded for Star Summit and till the point of boarding
            (as announced by the company) for all international trips.
          </li>
        </ul>
      </section>

      <section>
        <h4 className="text-xl font-semibold mb-3">
          Rank Qualification Timeline
        </h4>
        <Table className="border border-gray-300 p-4">
          <TableHeader>
            <TableRow>
              <TableHead>Rank</TableHead>
              <TableHead>Timeline*</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {[
              ["Ruby Executive", "15 months"],
              ["Pearl Executive", "15 months"],
              ["Emerald Executive", "15 months"],
              ["Sapphire Executive", "15 months"],
              ["Executive Diamond", "15 months"],
              ["Executive Blue Diamond", "15 months"],
              ["Executive Purple Diamond", "15 months"],
              ["Executive White Diamond", "15 months"],
              ["Black Diamond Ambassador", "15 months"],
              ["Royal Black Diamond Ambassador", "5 years"],
              ["Imperial Black Diamond Ambassador", "5 years"],
              ["Crown Black Diamond Ambassador", "5 years"],
            ].map(([rank, timeline]) => (
              <TableRow key={rank}>
                <TableCell>{rank}</TableCell>
                <TableCell>{timeline}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        <p className="mt-2">
          *All timelines are counted from the week of achievement of the
          previous rank.
        </p>
      </section>

      <section>
        <h4 className="text-xl font-semibold mb-3">Insurance Coverage</h4>
        <p>Star 500 VBOs will have accidental insurance coverage of 5 lakhs.</p>
        <p className="mt-4 font-semibold">Conditions:</p>
        <ul className="list-disc pl-6 mt-2 space-y-1">
          <li>They should have downloaded and are using the VIVA App.</li>
          <li>
            KYDS documents should have been verified for self and default
            co-applicant.
          </li>
          <li>
            The VBO contract should have been duly signed by self and default
            co-applicant, sponsor and uploaded on Virtual Office and verified by
            the company.
          </li>
        </ul>
      </section>

      <section>
        <h4 className="text-xl font-semibold mb-3">
          Rank Qualification Criteria
        </h4>
        <p>Ranks are accounted by considering several factors:</p>
        <ul className="list-disc pl-6 mt-2 space-y-1">
          <li>Personal retailing</li>
          <li>Personal sponsoring</li>
          <li>Achievers in the organisations</li>
          <li>New group volume from all the organisations</li>
          <li>Aggregate income</li>
        </ul>
        <img
          className="mt-4 mx-auto"
          src="	https://magicads.ae/indus-viva/assets/img/new/box-Imgs.png"
          alt="Rank Qualification Chart"
        />
      </section>
      <section>
        <h2 className="text-2xl font-bold pt-3 pb-4">Ranks</h2>

        {[
          {
            title: "Star",
            description: "A VR who retails 300 PV products in a cycle*",
            conditions: [
              "The rank can be qualified in 1 week by selling the required volume if other criteria are fulfilled.",
              "Maximum 100 PV shall be considered from a unique customer in a cycle. Hence, products need to be sold to 3 or more customers. Not applicable if products are sent to overseas customers from the company itself.",
            ],
          },
          {
            title: "Star 250",
            description:
              "A Star who has one each personally sponsored active Stars in both the organisations in the qualifying week.",
          },
          {
            title: "Star 500",
            description:
              "An active Star 250 who retails 600 PV and has 5 personally sponsored active Stars in the qualifying week.",
            conditions: [
              "Maximum 100 PV shall be considered from a unique customer in the cycle. Hence, products need to be sold to 6 or more customers if qualified in a single cycle. Not applicable if products are sent to overseas customers from the company itself.",
              "The Stars should be active in the qualifying week.",
              "The retail volume shall be considered only from the subsequent week of achieving Star rank.",
              "The 5 personally sponsored Stars include the 2 Stars who were considered for Star 250 and at least 1 Star should be there in both the organisations.",
            ],
          },
          {
            title: "Star 1000",
            description:
              "An active Star 500 who has a minimum of 25 Stars or above inclusive of one active Star 500 in both the organisations.",
            conditions: [
              "Both active and inactive Stars are eligible for consideration.",
              "A minimum of 25 Stars or above inclusive of at least one active Star 500 each in both the organisations is required to qualify, regardless of sponsorship.",
              "Stars with other statuses such as sales order hold, suspended, vacated, resigned or terminated will not be considered",
            ],
          },
        ].map((rank, idx) => (
          <div key={idx} className="mb-6">
            <h4 className="text-lg font-semibold mb-2">{rank.title}</h4>
            <p className="cnt_down mb-2">{rank.description}</p>
            {rank.conditions && (
              <ul className="list-disc pl-5 space-y-1">
                {rank.conditions.map((c, i) => (
                  <li key={i}>{c}</li>
                ))}
              </ul>
            )}
          </div>
        ))}

        <div className="mb-6">
          <h4 className="text-lg font-semibold mb-2">The Rank Criteria</h4>
          <img
            src="https://magicads.ae/indus-viva/assets/img/new/rank-criteria-iv-1s.jpg"
            alt="Rank Criteria"
            className="rounded-xl mb-4"
          />
          <p>
            <strong>
              ***The given Activity Level is required to be maintained in all
              the qualifying weeks.
            </strong>
          </p>
          <p>
            <strong>
              *Averaging is applicable for ranks from Ruby Executive to
              Executive White Diamond.
            </strong>
          </p>
          <p className="cnt_down">
            Averaging = 50% of the volume criteria should be met in all the
            respective qualifying weeks. The total volume from the qualifying
            weeks should be equivalent to the total volume required by the
            qualifying criteria weeks.
          </p>
          <p className="cnt_down">
            ###In PET, the sum of the required volume of the total period should
            be met, that’s how averaging in PET will be considered.
          </p>
          <p className="cnt_down">
            ** For a Royal Black Diamond Ambassador, 1,00,000 PV each has to be
            generated from 1st, 2nd and all berth organisations combined for
            four consecutive weeks to meet rank criteria.
          </p>
          <p className="cnt_down">
            # For an Imperial Black Diamond Ambassador, 1,00,000 PV each has to
            be generated from 1st, 2nd and 2,00,000 PV has to be generated from
            all berth organisations combined for four consecutive weeks: a
            maximum of 1,00,000 PV from a single berth organisation.
          </p>
          <p className="cnt_down">
            ##For a Crown Black Diamond Ambassador, 1,00,000 PV each has to be
            generated from 1st, 2nd and 3,00,000 PV has to be generated from all
            berth organisations combined for four consecutive weeks: a maximum
            of 1,00,000 PV from a single berth organisation.
          </p>
          <p className="cnt_down">
            AL: Activity Level | GV: Group Volume| ORG: No. of Organisations|
            MWA: Minimum Weekly Average | AR: Aggregate Revenue
          </p>
          <p className="cnt_down">
            PET VOLUME IS APPLICABLE ONLY FOR THOSE IDS WHICH ARE ENROLLED IN
            THE YEAR 2025.
          </p>
        </div>

        <div className="mb-6">
          <h4 className="text-lg font-semibold mb-3">Paid As Ranks</h4>
          {[
            ["Paid As Star", "Retail 75 PV in the qualifying week."],
            [
              "Paid As Star 250",
              "ID should have one each personally paid as Stars in both the organisations.",
            ],
            [
              "Paid As Star 500",
              "ID should be Active and have 5 paid as personally sponsored Stars with at least one in both the organisations and a retail of 75 PV in the qualifying week.",
            ],
            [
              "Paid as STAR 1000",
              "ID should be Active and have an active Star 500 and 750 GV on both the organisations in the qualifying week.",
            ],
            [
              "Paid as Ruby Executive*",
              "ID should be at least 50 PV Active and have a minimum of 1,000 GV each on both the PTs and 500 GV each in 2 PETs in the qualifying week.",
            ],
            [
              "Paid as Executive Diamond*",
              "ID should be at least 200 PV/ PCM Active and have a minimum of 10,000 GV on both the PTs and 500 GV each in 2 PETs in the qualifying week.",
            ],
            [
              "Paid as Crown Black Diamond Ambassador",
              "ID should be at least 200 PV/PCM Active and should have a minimum of 1,00,000 GV on five PTs and 50,000 GV each in 3 PETs in the qualifying week. Volume from berth IDs shall be considered from multiple legs with the same condition of rank qualifying.",
            ],
          ].map(([rank, desc], i) => (
            <div key={i} className="mb-4">
              <h4 className="text-xl font-semibold mb-2">{rank}</h4>
              <p className="cnt_down">{desc}</p>
            </div>
          ))}
          <p className="mt-4">
            <strong>Note:</strong> Paid as rank criteria for other
            Executive/Diamond/Ambassador ranks shall be to have one week volume
            required to achieve the respective ranks along with the respective
            activity level as mentioned here.
          </p>
        </div>
      </section>
      <section>
        <h4 className="text-xl font-semibold mb-3">
          Minimum PV Required to be Active
        </h4>
        <div className="border rounded-xl overflow-hidden">
          <Table className="w-full">
            <TableHeader>
              <TableRow>
                <TableHead className="p-4 border">Rank</TableHead>
                <TableHead className="p-4 border">PV Requirement</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {[
                ["Star 1000 and below", "25 PV"],
                ["Ruby/Pearl Executive", "50 PV"],
                ["Emerald/Sapphire Executive", "100 PV"],
                ["Executive Diamond & Above", "200 PV/PCM"],
              ].map(([rank, pv]) => (
                <TableRow key={rank}>
                  <TableCell className="p-4 border">{rank}</TableCell>
                  <TableCell className="p-4 border">{pv}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </section>
      <section>
        <h4 className="text-xl font-semibold mb-3">Disclaimer</h4>
        <p className="cnt_down">
          This is the official Compensation Plan, Policy & Procedure and Terms &
          Conditions document of IndusViva, valid only in India, for the year
          2025; pertaining to the business opportunity offered to Viva Business
          Owners. IndusViva withholds all the rights to amend or remove any of
          the clauses mentioned here without any notice. The company has the
          right to nullify any of the clauses, if necessary, to protect the
          interest of the business. Refer to{" "}
          <strong>
            <a href="https://indusviva.com/compensation-plan/">
              https://indusviva.com/compensation-plan/
            </a>
          </strong>{" "}
          for the latest updates. Any disputes, Bangalore jurisdiction only.
        </p>
        <p className="mt-4 font-semibold">Updated as on 28th December 2024</p>
      </section>
    </div>
  );
};

export default Bonuses;
