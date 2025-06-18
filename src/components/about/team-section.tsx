import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import ceo from "@/assets/img/management/Adv-Abhilash-Thomas---CEO.png";
import director from "@/assets/img/management/Subramanyam-M---Director.png";
import chairman from "@/assets/img/management/C-A-Anzar---Chairman.png";

const teamMembers = [
  {
    id: 1,
    name: "C A Anzar",
    position: "Chairman",
    image: chairman,
  },
  {
    id: 2,
    name: "Adv Abhilash Thomas",
    position: "CEO",
    image: ceo,
  },
  {
    id: 3,
    name: "Subramanyam M",
    position: " Director",
    image: director,
  },
];
export default function TeamSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <section ref={ref} className="py-12 md:py-10 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="w-2 h-2 rounded-full bg-teal-600"></div>
            <span className="text-teal-600 font-medium">EXPERT MEMBER</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900">
            DEDICATED TEAM
          </h2>
        </motion.div>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 py-20 max-w-7xl mx-auto"
        >
          {teamMembers.map((member) => (
            <motion.div
              key={member.id}
              variants={itemVariants}
              className="group"
            >
              <motion.div
                initial={{ width: "10%" }}
                animate={inView ? { width: "100%" } : { width: "10%" }}
                transition={{ duration: 0.8, delay: 0.3 + member.id * 0.1 }}
                className="relative overflow-hidden rounded-lg bg-gray-100 mb-4 shadow-lg shadow-gray-300"
              >
                <div className="aspect-square">
                  <img
                    src={member.image || "/placeholder.svg"}
                    alt={member.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                  <div className="p-4 w-full text-white">
                    <div className="flex justify-center gap-4"></div>
                  </div>
                </div>
              </motion.div>
              <h3 className="text-xl font-bold text-center">{member.name}</h3>
              <p className="text-gray-500 text-center">{member.position}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
