import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import ctabg from "@/assets/img/new/cta-bg.png";
import { Parallax } from "react-parallax";

export default function QualitySection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <Parallax bgImage={ctabg} strength={350}>
      <section className="relative py-24 md:py-32">
        <div className="absolute inset-0 bg-gradient-to-t from-teal-700/75 to-teal-700 bg-cover bg-no-repeat z-0"></div>

        <div
          ref={ref}
          className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center"
        >
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8 }}
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-white max-w-4xl mx-auto leading-tight"
          >
            At IndusViva, we prioritize safety, efficacy, and quality, ensuring
            the delivery of top-notch products to society.
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mt-6 text-xl text-white/90 max-w-3xl mx-auto"
          >
            Adopting the concept of Quality by Design, our products are
            meticulously crafted based on a thorough assessment of society's
            wellness needs and the extensive experience of scientists from
            various wellness sectors.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-10"
          >
            <Button
              size="lg"
              className="bg-white text-teal-800 hover:bg-teal-50"
            >
              Discover More
            </Button>
          </motion.div>
        </div>
      </section>
    </Parallax>
  );
}
