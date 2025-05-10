import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import abouth5 from "@/assets/img/new/about-h-5.png";
import { Parallax } from "react-parallax";
import solidBg from "@/assets/img/new/solid-bg.png";

export default function ResearchSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <Parallax
      bgImage={solidBg}
      strength={800}
      bgImageStyle={{
        objectFit: "fill",
        width: "100%",
        height: "100%",
      }}
      className="min-h-[200vh]" 
    >
      <section ref={ref} className="bg-white">
        <div className="container mx-auto  bg-[#0e7f7614]  ">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className=" px-10">
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6 }}
                className="text-lg text-gray-700"
              >
                Our Research and Development (R&D) division, including the
                specialized Transitional Phytochemistry team, uncovers the best
                ingredients from the treasures of ancient Ayurvedic texts.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="mt-8"
              >
                <Button className="bg-teal-600 hover:bg-teal-700 text-white py-8 px-12 rounded-none text-sm">
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
                    className=" h-8 w-8 -rotate-45"
                  >
                    <path d="M5 12h14" />
                    <path d="m12 5 7 7-7 7" />
                  </svg>
                </Button>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="relative overflow-hidden"
            >
              <img
                src={abouth5}
                alt="Research and Development Facility"
                className="w-full h-auto object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      <div className="h-screen"></div>
    </Parallax>
  );
}
