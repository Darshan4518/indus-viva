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
    <section
      ref={ref}
      className="relative bg-gray-300/45 min-h-[90vh] overflow-hidden py-12 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-[90%] mx-auto h-full flex flex-col-reverse lg:flex-row items-center justify-between gap-8 lg:gap-16 mt-10">
        {/* Text Content */}
        <motion.div
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={variants}
          transition={{ duration: 0.6 }}
          className="w-full lg:w-[35%] flex flex-col justify-center text-center md:text-left"
        >
          <h2 className="text-2xl lg:text-2xl font-bold text-gray-800 lg:ml-[10%] text-center lg:text-left">
            ABOUT OUR COMPANY
          </h2>

          <h3 className="text-lg sm:text-xl md:text-xl font-semibold text-gray-700 my-4">
            We bring the ancient healing power of Salacia reticulata into the
            modern world.
          </h3>

          <p className="text-sm sm:text-base text-gray-600 mb-3 leading-relaxed">
            First mentioned in the Charaka Samhita around 700 BC, Salacia—also
            known as Ekanayakam or Saptaranga—has been used in Ayurveda for
            centuries to naturally support healthy blood sugar levels and manage
            diabetes.
          </p>

          <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
            At IndusViva, we blend this traditional wisdom with modern
            nutraceutical science to create products that honor both heritage
            and health.
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={variants}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="w-full lg:w-[65%] flex items-center justify-center"
        >
          <div className="w-full h-[15.625rem] sm:h-[18.75rem] md:h-[25rem] lg:h-[31.25rem] ">
            <video
              autoPlay
              muted
              loop
              playsInline
              className="w-full h-full object-fill"
            >
              <source src={bgVideo} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
