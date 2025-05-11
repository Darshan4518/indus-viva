import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Badge } from "../ui/badge";
import project02 from "@/assets/img/new/project-02.png";
import project01 from "@/assets/img/new/project-01.png";
import projectBg from "@/assets/img/bg/project-bg-pattern.png";

export default function SustainabilitySection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <section
      ref={ref}
      className="relative bg-teal-600 text-white py-16 md:py-24 overflow-hidden"
    >
      <div className="absolute inset-0 z-0">
        <div className={`absolute inset-0 bg-cover bg-center opacity-70`}></div>
        <img src={projectBg} alt="mainBg" className=" w-full h-full" />
        <div className="absolute inset-0 bg-gradient-to-r from-teal-900/30 to-teal-800/30"></div>
      </div>
      <div className="container relative px-4 sm:px-6 lg:px-8 z-10">
        {/* First sustainability section */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-24  "
        >
          <motion.div variants={itemVariants} className="order-2 lg:order-1">
            <div className="relative overflow-hidden rounded-lg">
              <motion.div
                initial={{ width: "10%" }}
                animate={inView ? { width: "100%" } : { width: "10%" }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="w-full"
              >
                <img
                  src={project02}
                  alt="Sustainable manufacturing facility"
                  width={700}
                  height={500}
                  className="w-full h-auto object-cover rounded-lg"
                />
              </motion.div>
            </div>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="order-1 lg:order-2 md:max-w-[80%] "
          >
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className="h-px w-13 bg-[#FFE9C9]"></div>
                <span className="text-3xl  text-[#FFE9C9]">01</span>
              </div>
              <div className=" w-full flex flex-col mx-12">
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold">
                  SUSTAINABLY SOURCED FROM THE HEART OF NATURE
                </h2>

                <div className="mt-8">
                  <Badge className="mt-4 bg-[#FFE9C9] text-black py-1.5 px-3 rounded-full">
                    INDUS VIVA
                  </Badge>

                  <h3 className="mt-4 text-2xl md:text-3xl font-bold">
                    SUSTAINABLY SOURCED FROM THE HEART OF NATURE
                  </h3>

                  <p className="mt-4 text-teal-50">
                    Salacia roots grow in pristine forests, harvested by tribal
                    communities who honor the land's natural balance.
                  </p>

                  <Button
                    variant="link"
                    className="mt-6 border-teal-300 text-teal-50 text-xl hover:text-blue-500 cursor-pointer"
                  >
                    Read More
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className=" h-6 w-6 -rotate-45"
                    >
                      <path d="M5 12h14" />
                      <path d="m12 5 7 7-7 7" />
                    </svg>
                  </Button>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Second sustainability section with opposite direction */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mx-w-[80%]"
        >
          <motion.div variants={itemVariants} className="order-2 lg:order-2">
            <div className="relative overflow-hidden rounded-lg">
              <motion.div
                initial={{ width: "10%" }}
                animate={inView ? { width: "100%" } : { width: "10%" }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="w-full"
              >
                <img
                  src={project01}
                  alt="Advanced extraction process"
                  width={800}
                  height={600}
                  className="w-full h-auto object-cover rounded-lg"
                />
              </motion.div>
            </div>
          </motion.div>

          <motion.div variants={itemVariants} className="order-1 lg:order-1">
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className="h-px w-15 bg-[#FFE9C9]"></div>
                <span className="text-3xl  text-[#FFE9C9]">02</span>
              </div>

              <div className=" flex flex-col mx-12">
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold">
                  ADVANCED EXTRACTION PRESERVES POTENCY
                </h2>

                <div className="mt-8">
                  <Badge className="mt-4 bg-[#FFE9C9] text-black py-1.5 px-3 rounded-full">
                    INDUS VIVA
                  </Badge>

                  <h3 className="mt-4 text-2xl md:text-3xl font-bold">
                    ADVANCED EXTRACTION PRESERVES POTENCY
                  </h3>

                  <p className="mt-4 text-teal-50">
                    Our state-of-the-art extraction methods ensure maximum
                    retention of the plant's beneficial compounds, delivering
                    superior efficacy in every product.
                  </p>

                  <Button
                    variant="link"
                    className="mt-6 border-teal-300 text-teal-50 text-xl hover:text-blue-500 cursor-pointer"
                  >
                    Read More
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className=" h-6 w-6 -rotate-45"
                    >
                      <path d="M5 12h14" />
                      <path d="m12 5 7 7-7 7" />
                    </svg>
                  </Button>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
