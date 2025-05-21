import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
// import abouth5 from "@/assets/img/new/about-h-5.png";
import { Parallax } from "react-parallax";
import solidBg from "@/assets/img/bg/solid-bg.png";

export default function ResearchSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section className="relative">
    <section ref={ref} className="w-full bg-[#0e7f7614] py-16">
      <div className="container mx-auto px-4 sm:px-6 md:px-10">
        <div className="flex items-center justify-center">
          <div className="space-y-6 text-center min-h-[40vh] max-w-5xl">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="text-base sm:text-lg md:text-2xl text-gray-800 p-5"
            >
              Our Research and Development (R&D) division, including the
              specialized Transitional Phytochemistry team, uncovers the best
              ingredients from the treasures of ancient Ayurvedic texts.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="flex justify-center">
                <Button className="bg-teal-600 hover:bg-teal-700 text-white py-3 px-5 sm:py-4 sm:px-6 rounded-none text-sm sm:text-base flex items-center gap-2">
                  Read More
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-5 w-5 -rotate-45"
                  >
                    <path d="M5 12h14" />
                    <path d="m12 5 7 7-7 7" />
                  </svg>
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>

      <Parallax
        bgImage={solidBg}
        strength={600}
        bgImageStyle={{
          objectFit: "cover",
          objectPosition: "center",
          width: "100%",
          height: "100vh",
        }}
        className="w-full min-h-[50vh] lg:min-h-screen  "
      />
    </section>
  );
}
