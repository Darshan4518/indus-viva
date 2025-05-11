import React from "react";
import {
  Table,
  TableHeader,
  TableBody,
  TableRow,
  TableCell,
  TableHead,
} from "@/components/ui/table";

const pricingData = [
  {
    order: 1,
    firstOrder: "25 PV = INR 2,997.50",
    reorder: "INR 2,497.50",
    mrp: "INR 2,997.50",
  },
  {
    order: 2,
    firstOrder: "50 PV = INR 5,495.00",
    reorder: "INR 4,995.00",
    mrp: "INR 5,995.00",
  },
  {
    order: 3,
    firstOrder: "100 PV = INR 9,990.00",
    reorder: "INR 9,990.00",
    mrp: "INR 11,990.00",
  },
  {
    order: 4,
    firstOrder: "200 PV = INR 19,980.00",
    reorder: "INR 19,980.00",
    mrp: "INR 23,980.00",
  },
];

export const ProductPricing: React.FC = () => (
  <div className="my-8 border border-gray-400 p-6 rounded-sm">
    <h2 className="md:text-3xl text-xl font-bold text-center mb-6">Product Pricing</h2>
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>#</TableHead>
          <TableHead>First Order (DP)</TableHead>
          <TableHead>Reorder (DP)</TableHead>
          <TableHead>MRP</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {pricingData.map((row, index) => (
          <TableRow key={index}>
            <TableCell>{row.order}</TableCell>
            <TableCell>{row.firstOrder}</TableCell>
            <TableCell>{row.reorder}</TableCell>
            <TableCell>{row.mrp}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
    <p className="mt-4 text-sm font-medium">
      <strong>Billing shall be done on MRP.</strong> A handling charge of INR
      100/- per unit shall be extra for all modes of delivery.
    </p>
  </div>
);
