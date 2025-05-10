
import { Button } from "@/components/ui/button"
import { Play } from "lucide-react"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import aboutbg from "@/assets/img/new/about-bg.png"
import abouth1 from "@/assets/img/new/about-h-1.png"


export default function PhilosophySection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section ref={ref} className=" relative py-16 md:py-24 ">
      <img src={aboutbg} alt="aboutbg" className=" absolute inset-0 w-full h-full bg-cover  " />
      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, width: "10%" }}
            animate={inView ? { opacity: 1, width: "100%" } : { opacity: 0, width: "10%" }}
            transition={{ duration: 0.8 }}
            className="relative rounded-lg overflow-hidden"
          >
            <img
              src={abouth1}
              alt="Manufacturing Process"
              className="w-full h-auto object-cover rounded-lg"
            />
          </motion.div>

          <div className="space-y-6">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8 }}
              className="text-3xl md:text-4xl font-bold text-gray-900"
            >
              The Philosophy Behind Our products
            </motion.h2>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-lg text-gray-700 space-y-4"
            >
              <p>
                Ayurveda, an age-old Indian system of medicine deeply rooted in{" "}
                <span className="font-semibold">philosophy</span>, embraces a holistic perspective on health and
                well-being. It revolves around achieving equilibrium among{" "}
                <span className="font-semibold">mind, body, and spirit</span>.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex justify-evenly items-center  sm:flex-row gap-4 pt-4 max-w-2xl"
            >
              <Button className="bg-teal-600 hover:bg-teal-700 text-white py-8 px-10 rounded-none text-sm">Read More</Button>
              <div  className=" flex items-center">
                <div className=" p-5 rounded-full border border-black flex items-center justify-center">
                  <Play className=" h-4 w-4" />
                </div>
               <p className=" text-gray-600 text-xl md:text-3xl ml-3"> Play Video</p> 
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
