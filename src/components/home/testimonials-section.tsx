import { useRef } from "react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import home5test from "@/assets/img/testimonial/home-5-test-bg.jpg";

const testimonials = [
  {
    id: 1,
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    name: "Lorem ipsum",
    title: "CLIENT",
    avatar:
      "https://wac-cdn.atlassian.com/dam/jcr:ba03a215-2f45-40f5-8540-b2015223c918/Max-R_Headshot%20(1).jpg?cdnVersion=2706",
    rating: 5,
    bgColor: "bg-blue-50",
  },
  {
    id: 2,
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    name: "Lorem ipsum",
    title: "CLIENT",
    avatar:
      "https://wac-cdn.atlassian.com/dam/jcr:ba03a215-2f45-40f5-8540-b2015223c918/Max-R_Headshot%20(1).jpg?cdnVersion=2706",
    rating: 5,
    bgColor: "bg-pink-50",
  },
  {
    id: 3,
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    name: "Lorem ipsum",
    title: "CLIENT",
    avatar:
      "https://wac-cdn.atlassian.com/dam/jcr:ba03a215-2f45-40f5-8540-b2015223c918/Max-R_Headshot%20(1).jpg?cdnVersion=2706",
    rating: 5,
    bgColor: "bg-green-50",
  },
  {
    id: 4,
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    name: "Lorem ipsum",
    title: "CLIENT",
    avatar:
      "https://wac-cdn.atlassian.com/dam/jcr:ba03a215-2f45-40f5-8540-b2015223c918/Max-R_Headshot%20(1).jpg?cdnVersion=2706",
    rating: 5,
    bgColor: "bg-amber-50",
  },
];

export default function TestimonialsSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const prevRef = useRef<HTMLButtonElement>(null);
  const nextRef = useRef<HTMLButtonElement>(null);

  return (
    <section ref={ref} className="relative z-10 py-16 md:py-24 bg-gray-50 overflow-hidden">
      <img
        src={home5test}
        alt="Testimonial Background"
        className="absolute inset-0 w-full h-full object-cover z-0"
      />
      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6 }}
            className="flex justify-center items-center gap-2 mb-4"
          >
            <div className="w-2 h-2 rounded-full bg-teal-600"></div>
            <span className="text-teal-600 font-medium">OUR TESTIMONIALS</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900"
          >
            HAPPY BUSINESSES
          </motion.h2>
        </div>

        <div className="relative mt-12">
          <Swiper
            modules={[Navigation, Pagination]}
            spaceBetween={16}
            slidesPerView={1}
            breakpoints={{
              640: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            navigation={{
              prevEl: prevRef.current,
              nextEl: nextRef.current,
            }}
            pagination={{ clickable: true }}
            onBeforeInit={(swiper) => {
              // @ts-expect-error
              swiper.params.navigation.prevEl = prevRef.current;
              // @ts-expect-error
              swiper.params.navigation.nextEl = nextRef.current;
            }}
            className="!pb-16"
          >
            {testimonials.map((testimonial) => (
              <SwiperSlide key={testimonial.id}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{
                    duration: 0.8,
                    delay: 0.3 + testimonial.id * 0.1,
                  }}
                  className={`rounded-xl p-6 sm:p-8 md:p-10 h-full ${testimonial.bgColor} shadow-md`}
                >
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="h-5 w-5 text-amber-500 fill-amber-500"
                      />
                    ))}
                  </div>

                  <p className="text-gray-700 mb-6 text-sm sm:text-base">
                    {testimonial.content}
                  </p>

                  <div className="flex items-center">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full overflow-hidden bg-gray-200 mr-4">
                      <img
                        src={testimonial.avatar || "/placeholder.svg"}
                        alt={testimonial.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 text-sm sm:text-base">
                        {testimonial.name}
                      </h4>
                      <p className="text-xs sm:text-sm text-gray-500">
                        {testimonial.title}
                      </p>
                    </div>
                  </div>
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>

          <div className="flex justify-center sm:justify-end gap-2 mt-8">
            <button
              ref={prevRef}
              className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-teal-500 text-white flex items-center justify-center hover:bg-teal-600 transition"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              ref={nextRef}
              className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-teal-500 text-white flex items-center justify-center hover:bg-teal-600 transition"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
