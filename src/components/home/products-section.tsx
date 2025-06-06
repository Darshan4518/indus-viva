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

// import lp01 from "@/assets/img/new/lp-01.png";
// import lp02 from "@/assets/img/new/lp-02.png";
// import lp03 from "@/assets/img/new/lp-03.png";
// import lp04 from "@/assets/img/new/lp-04.png";
import Amlagex from "@/assets/img/products/Amlagex.png";
import ashwagandha from "@/assets/img/products/ashwagandha.png";
import Bacolive from "@/assets/img/products/Bacolive.png";
import Banalife from "@/assets/img/products/Banalife.png";
import Belafort from "@/assets/img/products/Belafort.png";
import BerberineHydrochloride from "@/assets/img/products/Berberine-Hydrochloride.png";
import BioTurmin from "@/assets/img/products/BioTurmin.png";
import Boswegex from "@/assets/img/products/Boswegex.png";
import Carogex from "@/assets/img/products/Carogex.png";
import Chlorobean from "@/assets/img/products/Chlorobean.png";
import Forskolin from "@/assets/img/products/Forskolin.png";
import Lycogex from "@/assets/img/products/Lycogex.png";
import Rosegex from "@/assets/img/products/Rosegex.png";
import Salcital from "@/assets/img/products/Salcital.png";
import Senna from "@/assets/img/products/Senna.png";
import Zinberin from "@/assets/img/products/Zinberin.png";



import ProductCard from "./product-card";

// interface Product {
//   id: number;
//   name: string;
//   category: string;
//   image: string;
//   color: string;
// }

// const products: Product[] = [
//   {
//     id: 1,
//     name: "iPulse",
//     category: "Immune Booster",
//     image: lp01,
//     color: "bg-amber-50",
//   },
//   {
//     id: 2,
//     name: "iCoffee",
//     category: "Diabetic Support",
//     image: lp02,
//     color: "bg-blue-50",
//   },
//   {
//     id: 3,
//     name: "iGlow",
//     category: "Skin Health",
//     image: lp03,
//     color: "bg-pink-50",
//   },
//   {
//     id: 4,
//     name: "iCare",
//     category: "Women Health",
//     image: lp04,
//     color: "bg-green-50",
//   },
//   {
//     id: 5,
//     name: "iCare",
//     category: "Women Health",
//     image: lp04,
//     color: "bg-green-50",
//   },
// ];

interface Product {
  id: number;
  name: string;
  image: string;
}

const products: Product[] = [
  {
    id: 1,
    name: "Amlagex",
    image: Amlagex,
  },
  {
    id: 2,
    name: "Ashwagandha",
    image: ashwagandha,
  },
  {
    id: 3,
    name: "Bacolive",
    image: Bacolive,
  },
  {
    id: 4,
    name: "Banalife",
    image: Banalife,
  },
  {
    id: 5,
    name: "Belafort",
    image: Belafort,
  },
  {
    id: 6,
    name: "Berberine Hydrochloride",
    image: BerberineHydrochloride,
  },
  {
    id: 7,
    name: "BioTurmin",
    image: BioTurmin,
  },
  {
    id: 8,
    name: "Boswegex",
    image: Boswegex,
  },
  {
    id: 9,
    name: "Carogex",
    image: Carogex,
  },
  {
    id: 10,
    name: "Chlorobean",
    image: Chlorobean,
  },
  {
    id: 11,
    name: "Forskolin",
    image: Forskolin,
  },
  {
    id: 12,
    name: "Lycogex",
    image: Lycogex,
  },
  {
    id: 13,
    name: "Rosegex",
    image: Rosegex,
  },
  {
    id: 14,
    name: "Salcital",
    image: Salcital,
  },
  {
    id: 15,
    name: "Senna",
    image: Senna,
  },
  {
    id: 16,
    name: "Zinberin",
    image: Zinberin,
  },
];
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
            autoplay={{ delay: 3000, disableOnInteraction: false }}
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
              <SwiperSlide key={product.id}>
                <ProductCard img={product.image} name={product.name} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}

// function ProductCard({
//   product,
//   inView,
// }: {
//   product: Product;
//   inView: boolean;
// }) {
//   const [imageLoaded, setImageLoaded] = useState(false);

//   useEffect(() => {
//     const img = new Image();
//     img.src = product.image;
//     img.onload = () => setImageLoaded(true);
//   }, [product.image]);

//   return (
//     <motion.div
//       initial={{ opacity: 0, scale: 0.9 }}
//       animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
//       transition={{ duration: 0.5, delay: product.id * 0.1 }}
//       className={`rounded-2xl overflow-hidden ${product.color} h-full flex flex-col`}
//     >
//       <div className="p-8 flex-1">
//         <motion.div
//           initial={{ width: "10%" }}
//           animate={imageLoaded && inView ? { width: "100%" } : { width: "10%" }}
//           transition={{
//             duration: 0.8,
//             ease: "easeOut",
//             delay: 0.2 + product.id * 0.1,
//           }}
//           className="relative aspect-square mb-6 overflow-hidden rounded-lg bg-white"
//         >
//           <img
//             src={product.image || "/placeholder.svg"}
//             alt={product.name}
//             className="w-full h-full object-contain"
//             style={{ opacity: imageLoaded ? 1 : 0, transition: "opacity 0.3s" }}
//           />
//         </motion.div>

//         <div className="space-y-2">
//           <p className="text-sm font-medium text-gray-600">
//             {product.category}
//           </p>
//           <h3 className="text-2xl font-bold text-gray-900">{product.name}</h3>
//         </div>
//       </div>

//       <div className="p-6 pt-0 mt-auto">
//         <Button className="w-full bg-teal-600 hover:bg-teal-700 text-white">
//           Buy Now
//           <svg
//             xmlns="http://www.w3.org/2000/svg"
//             width="24"
//             height="24"
//             viewBox="0 0 24 24"
//             fill="none"
//             stroke="currentColor"
//             strokeWidth="2"
//             strokeLinecap="round"
//             strokeLinejoin="round"
//             className=" -rotate-45 h-6 w-6"
//           >
//             <path d="M5 12h14" />
//             <path d="m12 5 7 7-7 7" />
//           </svg>
//         </Button>
//       </div>
//     </motion.div>
//   );
// }
