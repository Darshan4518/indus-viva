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
      className="relative bg-white py-16 md:py-24 overflow-hidden h-screen "
    >
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-0"
      >
        <source src={bgVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div className="relative z-20 container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={variants}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 flex w-full justify-center items-center gap-2"
        >
          <span className="inline-block h-2 w-2 rounded-full bg-red-600"></span>
          <h2 className="text-sm font-medium text-white">ABOUT OUR COMPANY</h2>
        </motion.div>

        <motion.div
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={variants}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-4xl mx-auto text-center flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 w-full h-full"
        >
          <h3 className="text-xs md:text-lg font-bold text-white tv:text-2xl">
            We bring the ancient healing power of Salacia reticulata into the
            modern world.
          </h3>
          <p className="text-xs md:text-lg text-white md:my-8 my-4 font-bold tv:text-2xl">
            First mentioned in the Charaka Samhita around 700 BC, Salacia—also
            known as Ekanayakam or Saptaranga—has been used in Ayurveda for
            centuries to naturally support healthy blood sugar levels and manage
            diabetes.
          </p>
          <p className="text-xs md:text-lg text-white font-bold tv:text-2xl">
            At IndusViva, we blend this traditional wisdom with modern
            nutraceutical science to create products that honor both heritage
            and health.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
