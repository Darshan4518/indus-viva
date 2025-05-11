
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"

export default function AboutSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const variants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  }

  return (
    <section ref={ref} className="bg-white py-16 md:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={variants}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 flex w-full justify-center items-center gap-2"
        >
          <span className="inline-block h-2 w-2 rounded-full bg-teal-600 "></span>
          <h2 className="text-sm font-medium text-gray-500">ABOUT OUR COMPANY</h2>
        </motion.div>

        <motion.div
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={variants}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-4xl mx-auto text-center"
        >
          <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8">
            We bring the ancient healing power of Salacia reticulata into the modern world.
          </h3>
          <p className="text-2xl md:text-3xl text-gray-900 mb-8 font-bold">
            First mentioned in the Charaka Samhita around 700 BC, Salacia—also known as Ekanayakam or Saptaranga—has
            been used in Ayurveda for centuries to naturally support healthy blood sugar levels and manage diabetes.
          </p>
          <p className="text-2xl md:text-3xl text-gray-900 font-bold">
            At IndusViva, we blend this traditional wisdom with modern nutraceutical science to create products that
            honor both heritage and health.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
