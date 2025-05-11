import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Check } from "lucide-react";
import corporate from "@/assets/img/new/Corporate.jpg";

export default function WhoWeAre() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section ref={ref} className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8 }}
            className="relative h-[80vh] rounded-2xl overflow-hidden"
          >
            <motion.div
              initial={{ width: "10%" }}
              animate={inView ? { width: "100%" } : { width: "10%" }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="w-full "
            >
              <img
                src={corporate}
                alt="IndusViva Headquarters"
                className="w-full h-full object-contain rounded-2xl "
              />
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8 }}
          >
            <div className="space-y-6">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-teal-600"></div>
                <span className="text-teal-600 font-medium">WHO WE ARE</span>
              </div>

              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                Shaping a Better Tomorrow
              </h2>

              <div className="text-gray-700 space-y-4">
                <p className=" text-xs">
                  We Bring The Ancient Healing Power Of{" "}
                  <span className="font-semibold">Salacia Reticulata</span> Into
                  The Modern World. First Mentioned In The Charaka Samhita
                  Around 700 BC, Salacia—also Known As Ekanayakam Or
                  Saptaranga—has Been Used In{" "}
                  <span className="font-semibold">Ayurveda</span> For Centuries
                  To <span className="font-semibold">Naturally Support</span>{" "}
                  Healthy Blood Sugar Levels And Manage Diabetes.
                </p>
                <p className=" text-xs">
                  At Indusviva, We Blend This Traditional Wisdom With{" "}
                  <span className="font-semibold">
                    Modern Nutraceutical Science
                  </span>{" "}
                  To Create Products That Honor Both{" "}
                  <span className="font-semibold">Heritage And Health</span>.
                </p>
              </div>

              <div className="space-y-3 pt-4">
                {[
                  "Ancient Wisdom, Modern Health",
                  "Traditional Healing",
                  "Combining Heritage with Innovation",
                  "Holistic Health Approach",
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    animate={
                      inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }
                    }
                    transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                    className="flex items-start gap-2"
                  >
                    <Check className="h-6 w-6 text-gray-700  mt-1 flex-shrink-0" />
                    <span className="text-gray-700 text-2xl font-serif">
                      {item}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
