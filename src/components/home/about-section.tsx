import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import bgVideo from "../../assets/img/video/Nature.mp4";

export default function AboutSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const variants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section ref={ref} className="relative bg-white h-[80vh] overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 h-full">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12 h-full">
          {/* Text Content */}
          <motion.div
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={variants}
            transition={{ duration: 0.6 }}
            className="md:w-[30%] w-full flex flex-col justify-center h-full"
          >
            <h2 className="text-2xl font-bold text-gray-800 ml-[5%]">
              ABOUT OUR COMPANY
            </h2>

            <h3 className="text-lg md:text-xl font-semibold text-gray-700 my-4">
              We bring the ancient healing power of Salacia reticulata into the
              modern world.
            </h3>

            <p className="text-sm md:text-base text-gray-600 mb-4">
              First mentioned in the Charaka Samhita around 700 BC, Salacia—also
              known as Ekanayakam or Saptaranga—has been used in Ayurveda for
              centuries to naturally support healthy blood sugar levels and
              manage diabetes.
            </p>

            <p className="text-sm md:text-base text-gray-600">
              At IndusViva, we blend this traditional wisdom with modern
              nutraceutical science to create products that honor both heritage
              and health.
            </p>
          </motion.div>

          {/* Video Content */}
          <motion.div
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={variants}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="md:w-[70%] w-full h-full flex items-center justify-center"
          >
            <video
              autoPlay
              muted
              loop
              playsInline
              className="h-full w-full object-cover rounded-xl shadow-lg"
            >
              <source src={bgVideo} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
