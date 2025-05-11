import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const videoUrls = [
  "https://www.youtube.com/embed/gwDXyKoFCXs?mute=1&amp;autoplay=1",
  "https://www.youtube.com/embed/GVF9BTLwS_o?mute=1&autoplay=1",
  "https://www.youtube.com/embed/d8rxRDhytEE?mute=1&autoplay=1",
  "https://www.youtube.com/embed/LgxXWLk4s08?mute=1&autoplay=1",
  "https://www.youtube.com/embed/C0JPMlDhF5g?mute=1&autoplay=1",
];

export default function VideosSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section ref={ref} className="py-16 md:py-24 bg-white text-black">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 mb-4"
          >
            <div className="w-2 h-2 rounded-full bg-teal-600"></div>
            <span className="text-teal-600 font-medium">WATCH & EXPLORE</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold"
          >
            FEATURED VIDEOS
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 items-center">
          {videoUrls.map((url, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.2 }}
            >
              <iframe
                width="100%"
                height="315"
                src={url}
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen={true}
              ></iframe>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
