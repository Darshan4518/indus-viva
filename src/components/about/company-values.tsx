import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { ArrowRight } from "lucide-react";
import icon5 from "@/assets/img/services/icon-05.png";
import icon2 from "@/assets/img/services/icon-02.png";
import icon3 from "@/assets/img/services/icon-03.png";
import icon4 from "@/assets/img/services/icon-04.png";

const values = [
  {
    id: 1,
    title: "Our Vision",
    description:
      "Partnering with Leaders in creating a million entrepreneurs and touching a billion lives.",
    icon: icon5,
  },
  {
    id: 2,
    title: "Our Mission",
    description:
      "To empower You with reliable, viable, and sustainable Entrepreneurial Opportunity founded on superlative products.",
    icon: icon2,
  },
  {
    id: 3,
    title: "Innovation",
    description:
      "Constantly evolving our products and processes to deliver the best natural health solutions.",
    icon: icon3,
  },
  {
    id: 4,
    title: "Quality",
    description:
      "Ensuring the highest standards in every product through rigorous testing and quality control.",
    icon: icon4,
  },
];

export default function CompanyValues() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section ref={ref} className="py-16 md:py-24 bg-[#0e7f7614] rounded-[10%]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl ">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6 }}
            className=" lg:col-span-2 max-w-sm"
          >
            <div className="flex items-center  gap-2 mb-4">
              <div className="w-2 h-2 rounded-full bg-teal-600"></div>
              <span className="text-teal-600 font-medium text-xs">
                COMPANY VALUES
              </span>
            </div>

            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 ">
              EMPOWERING YOU THROUGH VALUES AND OPPORTUNITIES
            </h2>
          </motion.div>
          {values.map((value, index) => (
            <motion.div
              key={value.id}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
              className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow hover:bg-neutral-200"
            >
              <div className="mb-6">
                <img src={value.icon} alt="icon"  />
              </div>
              <h3 className="text-2xl font-bold mb-4">{value.title}</h3>
              <p className="text-gray-500 mb-6 text-xs " style={{
                lineHeight:2
              }}>{value.description}</p>
                <ArrowRight className="ml-2 h-6 w-6" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
