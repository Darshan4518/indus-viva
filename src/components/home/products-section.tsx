import { useRef } from "react";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
// @ts-expect-error
import "swiper/css";
// @ts-expect-error
import "swiper/css/navigation";
// @ts-expect-error
import "swiper/css/pagination";

import ProductCard from "./product-card";
import { Link } from "react-router";
import { products } from "@/lib/ingrediantsData";

export default function ProductsSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const prevRef = useRef<HTMLButtonElement>(null);
  const nextRef = useRef<HTMLButtonElement>(null);

  const titleVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  return (
    <section
      ref={ref}
      id="our-products"
      className="py-16 md:py-24 bg-white overflow-hidden"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12 flex items-center justify-between max-w-[90%] mx-auto">
          <div>
            <motion.div
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              variants={titleVariants}
              className="flex items-center gap-2 mb-4"
            >
              <div className="w-2 h-2 rounded-full bg-teal-600"></div>
              <span className="text-teal-600 font-medium">PRODUCTS</span>
            </motion.div>

            <motion.h2
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              variants={titleVariants}
              className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900"
            >
              FROM NATURE TO YOU
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="mt-6 text-lg text-gray-700 max-w-3xl"
            >
              Our products, cater to diverse unmet needs in consumer health.
              Rooted in strong Ayurvedic evidence, these science-driven projects
              undergo constant validation through modern scientific tools.
            </motion.p>
          </div>

          <div className="hidden md:flex justify-end gap-2 mt-6 ">
            <Button
              ref={prevRef}
              variant="outline"
              size="icon"
              className=" border-teal-200 hover:bg-teal-50 hover:border-teal-300 bg-[#5ec199] "
            >
              <ArrowLeft className="h-8 w-8 text-teal-700" />
            </Button>
            <Button
              ref={nextRef}
              variant="outline"
              size="icon"
              className=" border-teal-200 hover:bg-teal-50 hover:border-teal-300 bg-[#5ec199]"
            >
              <ArrowRight className="h-8 w-8 text-teal-700" />
            </Button>
          </div>
        </div>

        <div className="relative mt-12">
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={20}
            autoplay={{ delay: 1000, disableOnInteraction: false }}
            speed={800}
            slidesPerGroup={1}
            slidesPerView={1}
            breakpoints={{
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
              1280: { slidesPerView: 4 },
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
            className="!pb-14"
          >
            {products.map((product) => (
              <SwiperSlide key={product?.id}>
                <Link to={`/product/${product?.id}`} state={product} >
                  <ProductCard img={product?.images[0]} name={product?.title} />
                </Link>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}
