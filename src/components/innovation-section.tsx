import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import about1 from "@/assets/img/new/about-1.png";
import about2 from "@/assets/img/new/about-2.png";

export default function InnovationSection() {
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
    <section ref={ref} className=" bg-[#0e7f7614] py-16 md:py-24 relative z-10 ">
      <div className="container  ">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center px-4 sm:px-6 lg:px-8"
        >
          <motion.div variants={itemVariants} className="order-2 lg:order-1">
            <div className="relative overflow-hidden rounded-lg">
              <img
                src={about1}
                alt="Laboratory scientists"
                width={800}
                height={600}
                className="w-full h-auto object-cover"
              />
            </div>
          </motion.div>

          <motion.div variants={itemVariants} className="order-1 lg:order-2">
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                Innovation Meets Tradition
              </h2>

              <p className="text-gray-700">
                Once harvested, Salacia roots travel to our state-of-the-art
                facility, where advanced extraction methods preserve their
                potency. With a dedicated team ensuring strict quality control,
                each product undergoes thorough testing for purity and safety.
                Our research and development team continually innovates to
                create new formulations, blending ancient Ayurvedic wisdom with
                modern scientific precision. This fusion of tradition and
                technology allows us to deliver nutraceuticals that meet the
                highest standards of quality and efficacy.
              </p>
            </div>
          </motion.div>
        </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="mt-24 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center px-4 sm:px-6 lg:px-8 "
          >
            <motion.div variants={itemVariants}>
              <div className="space-y-6">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                  Bridging Ancient Wisdom with Modern Health
                </h2>

                <p className="text-gray-700 text-xl">
                  Salacia reticulata, revered for centuries in Ayurveda, meets
                  modern science at Indusviva Health Sciences. We combine the
                  time-tested benefits of this ancient herb with the latest
                  research to create high-quality, natural health solutions. Our
                  products empower consumers to experience the transformative
                  effects of Salacia, promoting a healthier and more balanced
                  life. It's the perfect harmony between tradition and
                  innovation, offering the best of both worlds for today's
                  health-conscious consumers.
                </p>
              </div>
            </motion.div>

            <motion.div variants={itemVariants}>
              <div className="relative overflow-hidden rounded-lg">
                <img
                  src={about2}
                  alt="Modern laboratory equipment"
                  width={800}
                  height={600}
                  className="w-full h-auto object-cover"
                />
              </div>
            </motion.div>
          </motion.div>
        </div>
    </section>
  );
}
