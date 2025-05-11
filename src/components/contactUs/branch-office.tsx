import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { MapPin, Mail, Phone, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const branchOffices = [
  {
    id: 1,
    location: "New Delhi Viva Hub",
    address:
      "IndusViva HealthSciences Private Limited,No.B-1/623, 1st Floor, District Centre Crossing, Opposite Metro Pillar Number 574, Janakpuri New Delhi – 110058.",
    email: "support@indusviva.com",
    phone: "1800 103 4916",
  },
  {
    id: 2,
    location: "Mumbai Viva Hub",
    address:
      "Indusviva Healthsciences Private Limited, Gami Industrial Park, Unit No. 72 & 73, Building – B, Plot No. C, Park 39A, S Central Road, Opp. Pawne Kata, TTC Industrial Area, Pawne MIDC, Navi Mumbai, Maharashtra 400705.",
    email: "support@indusviva.com",
    phone: "1800 103 4916",
  },
  {
    id: 3,
    location: "Kochi Viva Hub",
    address:
      "IndusViva HealthSciences Private Limited Division no :38 building no: 40Market road, Edappally kochi 682 024.",
    email: "support@indusviva.com",
    phone: "1800 103 4916",
  },
  {
    id: 4,
    location: "Hyderabad Viva Hub",
    address:
      "IndusViva Healthsciences Private Limited Arks Cold Storage, Pocharam, Annojiguda, Hyderabad,500088.",
    email: "support@indusviva.com",
    phone: "1800 103 4916",
  },
];

export default function BranchOffices() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section ref={ref} className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8  max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Branch Offices
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Per ipsum ultrices sollicitudin iaculis platea facilisi semper
            aliquam up senectus cursus vivamus volutpat penatibus
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {branchOffices.map((office, index) => (
            <motion.div
              key={office.id}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: 0.1 * index }}
              className="bg-white rounded-2xl shadow-sm p-6 relative overflow-hidden group "
            >
              {/* Decorative element */}
              <div className="absolute top-0 right-0 w-20 h-20 bg-teal-100 rounded-bl-full -mr-10 -mt-10 transition-all duration-300 group-hover:bg-teal-200"></div>

              <div className="relative z-10">
                <div className="flex items-start mb-4">
                  <MapPin className="h-5 w-5 text-teal-600 mt-1 mr-2 flex-shrink-0" />
                  <h3 className="text-base font-bold">{office.location}</h3>
                </div>
                <hr className="  border-gray-300 py-2" />

                <p className="text-gray-600  min-h-[120px] text-xs">
                  {office.address}
                </p>

                <div className="space-y-2 mb-6">
                  <div className="flex items-center text-teal-600">
                    <Mail className="h-4 w-4 mr-2" />
                    <a
                      href={`mailto:${office.email}`}
                      className="hover:underline"
                    >
                      {office.email}
                    </a>
                  </div>
                  <div className="flex items-center text-teal-600">
                    <Phone className="h-4 w-4 mr-2" />
                    <a
                      href={`tel:${office.phone.replace(/\s/g, "")}`}
                      className="hover:underline"
                    >
                      {office.phone}
                    </a>
                  </div>
                </div>
                <hr className="  border-gray-300 py-2" />

                <Button
                  variant="default"
                  className="w-full bg-teal-600 hover:bg-teal-700 text-white flex items-center justify-center"
                >
                  View Location
                  <ArrowRight className="ml-2 h-4 w-4 -rotate-45" />
                </Button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
