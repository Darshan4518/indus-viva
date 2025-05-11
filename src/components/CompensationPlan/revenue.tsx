import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const Revenue = () => {
  return (
    <div className="">
      <hr className="my-4" />
      <h2 className="text-4xl font-bold py-6">Revenues</h2>

      {/* Retail Revenue */}
      <section className="mb-6">
        <h4 className="text-2xl font-semibold mb-3">Retail Revenue (Rr)</h4>
        <p className="mb-2">
          VR’s/VBO’s main work is to sell IndusViva’s products to
          customers/consumers. Online retail through e-Commerce store link
          allows you to earn revenue without purchasing the products with own
          investment. Commission can be earned without adjoining a single VR, by
          building a strong customer base. Each direct seller earns 20% of the
          DP* by selling at retail price to the customers/consumers. The
          personal volume from retail sales counts towards direct seller’s
          activity requirement.
        </p>
        <p className="font-semibold mb-1">
          *Minimum target is 100 PV to earn the full RR for 1st order.
        </p>
        <p className="mb-1">
          Retail Revenue is not available on the first 25 PV if the first order
          placed is below 100 PV.
        </p>
        <p className="font-semibold">
          Note: Retail Revenue shall be eligible for orders placed through
          Virtual Office only if the ID is active.
        </p>
      </section>

      <hr className="my-4" />

      {/* Business Incubator Revenue */}
      <section className="mb-6">
        <h4 className="text-2xl font-semibold mb-3">
          Business Incubator Revenue (Bir)
        </h4>
        <p>
          A VBO from the rank of Star and above earns 20 GBU and 10 GBU on
          advancement of a personally sponsored VR to the rank of Star in 1+1
          week and 1+2 week respectively.
        </p>
      </section>

      <hr className="my-4" />

      {/* Dual Team Revenue */}
      <section className="mb-6">
        <h4 className="text-2xl font-semibold mb-3">Dual Team Revenue (Dtr)</h4>
        <p className="mb-4">
          A VBO shall be eligible for 10% of the balanced GV (5% of the sum of
          the balanced GV) of both organisations, except the first order of
          their immediate associates, as Dual Team Revenue. This shall have a
          capping at 2,500 GBU. The remaining GV at one organisation after
          balancing shall be carried forward to next week. Personally retailed
          volume exceeding 200 PV in a week will be spilled to the lesser side
          for DTR*. If there is no team in both the organisations, then the
          spilled over volume shall get assigned to one of the organisations and
          in the subsequent week to the other organisation, which would enable
          the VBO to get DTR for whatever volume balanced, without having any
          organisation.
        </p>

        {/* DTR Table */}
        <Table className="mb-3 border border-gray-300 ">
          <TableBody>
            {[
              [
                "30,000 GV",
                "27,000 GV",
                "27,000 GV",
                "4,500 (1st Org.)",
                "2,500 GBU (Capping)",
              ],
              [
                "5,000 GV",
                "3,000 GV",
                "3,500 GV",
                "1,500 (1st Org.)",
                "350 GBU",
              ],
              ["1,000 GV", "1,500 GV", "1,000 GV", "500 (2nd Org.)", "100 GBU"],
              ["25 GV", "25 GV", "25 GV", "--", "2.5 GBU"],
              [
                "1st Organisation",
                "2nd Organisation",
                "Balanced Group Volume",
                "Carried Forward Volume",
                "DTB Eligible",
              ],
            ].map((row, i) => (
              <TableRow key={i}>
                {row.map((cell, j) => (
                  <TableCell className=" text-lg p-2" key={j}>
                    {cell}
                  </TableCell>
                ))}
              </TableRow>
            ))}
          </TableBody>
        </Table>

        <p className="text-sm font-semibold">
          *Spilled volume should be considered only for DTR and it shall not be
          considered for any rank criteria.
        </p>
      </section>

      <hr className="my-4" />

      {/* Carry Forward Limit */}
      <section className="mb-6">
        <h4 className="text-2xl font-semibold mb-3">
          Dual Team Revenue – Carry Forward Limit
        </h4>
        <p className="mb-3">
          The carry forward limit for a VBO ranked Star 1000 or below is 10,000
          GV. The Executive ranks* and above shall have a maximum carry forward
          GV equivalent to 10 times of their rank qualifying GV required in a
          week, combining both the organisations; maximum up to 5,00,000 GV.
          Only one side shall be carried forward.
        </p>

        {/* Carry Forward Table */}
        <Table className="mb-3 border border-gray-300 p-10" border={1}>
          <TableBody>
            {[
              ["VBOs up to Star 1000", "10,000 GV"],
              ["Ruby Executive", "20,000 GV"],
              ["Pearl Executive", "50,000 GV"],
              ["Emerald Executive", "1,00,000 GV"],
              ["Sapphire Executive", "1,50,000 GV"],
              ["Executive Diamond", "2,00,000 GV"],
              ["Executive Blue Diamond", "3,00,000 GV"],
              ["Executive Purple Diamond", "4,00,000 GV"],
              ["Executive White Diamond and above", "5,00,000 GV"],
            ].map((row, i) => (
              <TableRow key={i}>
                {row.map((cell, j) => (
                  <TableCell key={j} className=" text-lg p-2">
                    {cell}
                  </TableCell>
                ))}
              </TableRow>
            ))}
          </TableBody>
        </Table>

        <p className="font-semibold text-gray-500">
          Note: Carry forward volume will be reset after flashing out the
          balanced GV beyond the capping limit on every Friday closing.
        </p>
        <p className="font-semibold text-gray-500">
          *The activity level of the respective rank should be maintained
        </p>
      </section>
      <section className="mb-6">
        <h4 className="text-2xl font-semibold mb-3">
          Rank Maintenance Revenue (RMR)
        </h4>
        <p className="mb-2">
          Upon maintaining the paid as rank in the subsequent week of the
          qualifying*/requalifying** week, same as their achieved rank, a VBO
          shall be eligible to earn Rank Maintenance Revenue (RMR) from the rank
          of Ruby Executive.
        </p>
        <p className="mb-2">
          On reaching the aggregate income criteria of the subsequent rank, if a
          VBO fails to advance to that rank, their RMR shall be lapsed. For an
          Executive White Diamond, on completing the aggregate income of
          4,00,000 GBU and for Black Diamond Ambassador and above, on completing
          5 years from the week of achieving the rank, RMR shall be expired, if
          they fail to advance to the next rank within that period.
        </p>
        <p className="font-semibold mb-1">
          *Qualifying - The week in which the rank is achieved.
        </p>
        <p className="font-semibold mb-4">
          **Requalifying – The week in which the rank is maintained after once
          missed.
        </p>

        {/* RMR Table */}
        <Table className="mb-4 border border-gray-300">
          <TableHeader>
            <TableRow>
              <TableHead>Ranks</TableHead>
              <TableHead>Week 1</TableHead>
              <TableHead>Week 2</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {[
              ["Ruby Executive", "QFN/RQN", "50 GBU"],
              ["Pearl Executive", "QFN/RQN", "100 GBU"],
              ["Emerald Executive", "QFN/RQN", "150 GBU"],
              ["Sapphire Executive", "QFN/RQN", "200 GBU"],
              ["Executive Diamond", "QFN/RQN", "250 GBU"],
              ["Executive Blue Diamond", "QFN/RQN", "300 GBU"],
              ["Executive Purple Diamond", "QFN/RQN", "350 GBU"],
              ["Executive White Diamond", "QFN/RQN", "400 GBU"],
              ["Black Diamond Ambassador", "QFN/RQN", "500 GBU"],
              ["Royal Black Diamond Ambassador", "QFN/RQN", "1,000 GBU"],
              ["Imperial Black Diamond Ambassador", "QFN/RQN", "1,500 GBU"],
              ["Crown Black Diamond Ambassador", "QFN/RQN", "2,500 GBU"],
            ].map(([rank, w1, w2], i) => (
              <TableRow key={i}>
                <TableCell>{rank}</TableCell>
                <TableCell>{w1}</TableCell>
                <TableCell>{w2}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </section>

      <hr className="my-4" />

      {/* Co-applicant Revenue */}
      <section className="mb-6">
        <h4 className="text-2xl font-semibold mb-3">Co-applicant Revenue</h4>
        <p className="mb-2">
          Upon achieving Executive Diamond Rank, a VBO shall be eligible for 500
          GBU as Co-applicant Revenue every month for a period of 1 year,
          provided that the VBO maintains the paid as rank, same as that of the
          achieved rank, at least in one bonus week of a month. If any
          month/months lapse, subsequent month/months shall be counted. If a VBO
          advances to the next rank before the tenure of current Co-applicant
          Revenue expires, they only need to maintain the paid as criteria for
          the previous rank to avail the Co-applicant Revenue until the 12
          revenues are received. It is exclusively paid to the co-applicant*.
          The Co-applicant Revenue period shall be extended on rank advancement.
        </p>
        <img
          className="w-full rounded border mb-2"
          src="https://magicads.ae/indus-viva/assets/img/new/table-1024x216.png"
          alt="Co-applicant Revenue Table"
        />
        <p className="font-semibold">
          *Co-applicant must be default co-applicant. Eligibility to a
          non-default co-applicant is subject to approval.
        </p>
        <p className="font-semibold">
          Note: The company shall review various parameters to pay co-applicant
          revenue including the visibility of co-applicant in business and it
          will be solely under the discretion of the company.
        </p>
      </section>

      <hr className="my-4" />

      {/* Single Team Revenue */}
      <section className="mb-6">
        <h4 className="text-2xl font-semibold mb-3">
          Single Team Revenue (STR)
        </h4>
        <p>
          Upon achieving the Black Diamond Ambassador rank, a VBO shall get an
          opportunity to open any number of organisations parallel to their 1st
          and 2nd organisations which shall be called their berth organisations,
          where the VBO shall be eligible for 5% of the newly generated GV from
          each organisation as Single Team Revenue (STR), which shall have a
          capping at 5,000 GBU on each berth organisation. This revenue requires
          no balancing assuming that the group volume generated in the berth IDs
          balances with the group volume generated in the first two
          organisations.
        </p>
      </section>

      <hr className="my-4" />

      {/* Royalty */}
      <section className="mb-6">
        <h4 className="text-2xl font-semibold mb-3">Royalty</h4>
        <p className="mb-2">
          1 GBU per 100 PV of the Global Business Volume (GBV) in a month shall
          be allocated to the Royalty. It shall be considered based on closings
          (Fridays) in the month. The Royalty shall be distributed among those
          with the highest achieved rank/performance level in the company based
          on the aggregate points they earn starting from Black Diamond
          Ambassador. Once the subsequent higher rank/performance level such as
          Royal, Imperial and Crown Black Diamond Ambassadors or their Platinum
          Performance is achieved by at least one VBO, Royalty shall be limited
          to that rank or performance level*.
        </p>
        <p className="mb-1">
          *Paid as or Platinum performance level of Black Diamond Ambassadors or
          above shall earn points in the respective weeks in which higher
          achieved rank/s or performance level/s don’t maintain the rank or
          performance level same as their achieved rank or performance level.
          However, such points shall be nullified if the higher rank or
          performance level is maintained for at least one week in that month.
        </p>
      </section>
    </div>
  );
};

export default Revenue;
