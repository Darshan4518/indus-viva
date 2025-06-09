import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const videoUrls = [
  "https://www.youtube.com/embed/gwDXyKoFCXs?mute=1&autoplay=1&loop=1&playlist=gwDXyKoFCXs",
  "https://www.youtube.com/embed/GVF9BTLwS_o?mute=1&autoplay=1&loop=1&playlist=GVF9BTLwS_o",
  "https://www.youtube.com/embed/d8rxRDhytEE?mute=1&autoplay=1&loop=1&playlist=d8rxRDhytEE",
  "https://www.youtube.com/embed/LgxXWLk4s08?mute=1&autoplay=1&loop=1&playlist=LgxXWLk4s08",
  "https://www.youtube.com/embed/C0JPMlDhF5g?mute=1&autoplay=1&loop=1&playlist=C0JPMlDhF5g",
];

export default function VideosSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section ref={ref} className="py-12 md:py-16 bg-white text-black">
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
              className="w-full"
            >
              <div className="w-full aspect-video h-full">
                <iframe
                  src={url}
                  title={`YouTube video ${index + 1}`}
                  frameBorder="0"
                  className="w-full h-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  loading="lazy"
                ></iframe>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
