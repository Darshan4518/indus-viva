import NavigationHeroSection from "@/components/NavigationHeroSection";
import { Card, CardContent } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const data = [
  { firstName: "Mark", lastName: "Otto", username: "@mdo" },
  { firstName: "Jacob", lastName: "Thornton", username: "@fat" },
  { firstName: "Larry", lastName: "the Bird", username: "@twitter" },
  { firstName: "Mark", lastName: "Otto", username: "@mdo" },
  { firstName: "Jacob", lastName: "Thornton", username: "@fat" },
  { firstName: "Larry", lastName: "the Bird", username: "@twitter" },
];

export default function DelistedDistributors() {
  return (
    <main className="bg-[#0A0E1A] text-white">
      <NavigationHeroSection
        title="DelistedDistributors"
        path="DelistedDistributors"
      />
      <section className="py-10 bg-white text-black">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-10">
            <h2 className="text-5xl font-bold">De-listed Distributors List</h2>
            <p className="text-gray-600 mt-4">
              Lorem Ipsum es simplemente el texto de relleno de las imprentas y
              archivos de texto. Lorem Ipsum ha sido el texto de relleno
              estándar de las industrias desde el año 1500...
            </p>
          </div>

          <Card className=" shadow-none">
            <CardContent className="overflow-x-auto p-6">
              <h2 className="text-4xl font-bold text-center mb-6">
                De-listed Distributors List
              </h2>
              <hr className="mb-6" />
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className=" font-bold">First Name</TableHead>
                    <TableHead className=" font-bold">Last Name</TableHead>
                    <TableHead className=" font-bold">Username</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {data.map((user, index) => (
                    <TableRow key={index}>
                      <TableCell className=" text-lg">
                        {user.firstName}
                      </TableCell>
                      <TableCell className=" text-lg">
                        {user.lastName}
                      </TableCell>
                      <TableCell className=" text-lg">
                        {user.username}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </div>
      </section>
    </main>
  );
}
