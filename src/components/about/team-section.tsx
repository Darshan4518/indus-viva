import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Parallax } from "react-parallax";
import bg from "@/assets/img/bg/video-bg.jpg";
import play from "@/assets/img/icon/play.png";
import { Dialog, DialogContent, DialogTrigger } from "../ui/dialog";
import dummyMember from "@/assets/img/new/dummy-member-01.jpg";

const teamMembers = [
  {
    id: 1,
    name: "Dr. John Smith",
    position: "Chief Medical Officer",
    image: dummyMember,
  },
  {
    id: 2,
    name: "Dr. Sarah Johnson",
    position: "Research Director",
    image: dummyMember,
  },
  {
    id: 3,
    name: "Dr. Michael Chen",
    position: "Product Development",
    image: dummyMember,
  },
  {
    id: 4,
    name: "Dr. Emily Williams",
    position: "Quality Assurance",
    image: dummyMember,
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
    <Parallax
      bgImage={bg}
      strength={800}
      bgImageStyle={{
        objectFit: "fill",
        width: "100%",
        height: "100%",
      }}
      className="min-h-[200vh]"
    >
      <section ref={ref} className="py-16 md:py-24 bg-white">
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

          {/* Team Cards */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {teamMembers.map((member) => (
              <motion.div
                key={member.id}
                variants={itemVariants}
                className="group"
              >
                {/* Image */}
                <motion.div
                  initial={{ width: "10%" }}
                  animate={inView ? { width: "100%" } : { width: "10%" }}
                  transition={{ duration: 0.8, delay: 0.3 + member.id * 0.1 }}
                  className="relative overflow-hidden rounded-lg bg-gray-100 mb-4"
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
                      <div className="flex justify-center gap-4">
                        {/* Social Icons (as before) */}
                      </div>
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

      <div className="h-screen flex items-center justify-center relative z-10">
        <Dialog>
          <DialogTrigger asChild>
            <button>
              <img
                src={play}
                alt="Play"
                className=" cursor-pointer hover:scale-110 transition-transform"
              />
            </button>
          </DialogTrigger>
          <DialogContent className="max-w-5xl w-full  aspect-video">
            <div className="w-full h-full p-2">
              <iframe
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/C0JPMlDhF5g?mute=1&autoplay=1"
                title="YouTube video player"
                frameBorder="0"
                allow="autoplay; encrypted-media"
                allowFullScreen
              ></iframe>
            </div>
          </DialogContent>
        </Dialog>
      </div>
    </Parallax>
  );
}
