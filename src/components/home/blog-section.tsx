import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import thumb1 from "@/assets/img/new/thumb-01.png";
import thumb2 from "@/assets/img/new/thumb-02.png";
import thumb3 from "@/assets/img/new/thumb-03.png";
import { CalendarDays } from "lucide-react";

const blogPosts = [
  {
    id: 1,
    title: "Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit.",
    image: thumb1,
    category: "Creative",
    date: "20 SEP, 2023",
  },
  {
    id: 2,
    title: "Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit.",
    image: thumb2,
    category: "Creative",
    date: "20 SEP, 2023",
  },
  {
    id: 3,
    title: "Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit.",
    image: thumb3,
    category: "Creative",
    date: "20 SEP, 2023",
  },
];

export default function BlogSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section ref={ref} className="py-12 md:py-24 bg-white w-full">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-10 md:mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-2 mb-3 sm:mb-4"
          >
            <div className="w-2 h-2 rounded-full bg-teal-600"></div>
            <span className="text-teal-600 font-medium text-sm sm:text-base">
              BLOG ARTICLES
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900"
          >
            RECENT BLOG ARTICLES
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10">
          {blogPosts.map((post, index) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, width: "10%" }}
              animate={
                inView
                  ? { opacity: 1, width: "100%" }
                  : { opacity: 0, width: "10%" }
              }
              transition={{ duration: 0.8, delay: 0.3 + index * 0.1 }}
              className="group"
            >
              <div className="overflow-hidden rounded-lg mb-4 sm:mb-6">
                <img
                  src={post.image || "/placeholder.svg"}
                  alt={post.title}
                  className="w-full h-52 sm:h-60 md:h-72 object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              <div className="flex items-start gap-4 mb-4">
                <div className="bg-teal-600 text-white text-xs gap-2 py-2 px-2 flex flex-col items-center justify-center rounded-lg min-w-[48px]">
                  <span className="-rotate-90 text-xs">SEP</span>
                  <span className="-rotate-90 text-xs">2023</span>
                  <span className="-rotate-90 text-xs">20</span>
                  <div className="p-1 bg-white rounded-sm">
                    <CalendarDays className="text-black w-4 h-4" />
                  </div>
                </div>

                <div className="flex-col text-gray-700 text-sm">
                  <div className="flex items-center gap-1 mb-1">
                    <div className="w-1 h-1 rounded-full bg-teal-600"></div>
                    <span>{post.category}</span>
                  </div>

                  <h3 className="text-base sm:text-lg md:text-xl font-bold mb-2 group-hover:text-teal-600 transition-colors">
                    {post.title}
                  </h3>
                  <a
                    href="#"
                    className="inline-flex items-center text-sm sm:text-base text-teal-600 font-medium hover:text-teal-700 transition-colors mt-2"
                  >
                    Read More
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-5 w-5 ml-1 -rotate-45"
                    >
                      <path d="M5 12h14" />
                      <path d="m12 5 7 7-7 7" />
                    </svg>
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
