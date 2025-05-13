import { Button } from "@/components/ui/button";
import { Play } from "lucide-react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import aboutbg from "@/assets/img/new/about-bg.png";
import abouth1 from "@/assets/img/new/about-h-1.png";

export default function PhilosophySection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section
      ref={ref}
      className="relative py-16 md:py-24 bg-white overflow-hidden"
    >
      {/* Background image */}
      <img
        src={aboutbg}
        alt="Background"
        className="absolute inset-0 w-full h-full object-cover z-0"
      />

      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={
              inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }
            }
            transition={{ duration: 0.8 }}
            className="relative rounded-lg overflow-hidden"
          >
            <img
              src={abouth1}
              alt="Manufacturing Process"
              className="w-full h-auto object-cover rounded-lg"
            />
          </motion.div>

          {/* Right content */}
          <div className="space-y-6 text-center lg:text-left">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8 }}
              className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900"
            >
              The Philosophy Behind Our Products
            </motion.h2>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-base sm:text-lg text-gray-700 space-y-4"
            >
              <p>
                Ayurveda, an age-old Indian system of medicine deeply rooted in{" "}
                <span className="font-semibold">philosophy</span>, embraces a
                holistic perspective on health and well-being. It revolves
                around achieving equilibrium among{" "}
                <span className="font-semibold">mind, body, and spirit</span>.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex flex-col sm:flex-row items-center justify-center sm:justify-start gap-4 pt-4"
            >
              <Button className="bg-teal-600 hover:bg-teal-700 text-white px-6 py-3 text-sm rounded-none w-full sm:w-auto">
                Read More
              </Button>

              <div className="flex items-center space-x-3">
                <div className="p-4 rounded-full border border-black flex items-center justify-center">
                  <Play className="h-5 w-5 sm:h-6 sm:w-6" />
                </div>
                <p className="text-gray-600 text-lg sm:text-xl md:text-2xl">
                  Play Video
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
