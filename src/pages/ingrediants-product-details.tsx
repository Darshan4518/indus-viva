import { useState } from "react";
import { motion } from "framer-motion";
import { Star } from "lucide-react";
import { useLocation } from "react-router";
import type { IProducts } from "@/lib/ingrediantsData";

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.5,
      ease: "easeOut",
    },
  }),
};

const scaleIn = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

export default function ProductDetailsPage() {
  const location = useLocation();
  const product: IProducts = location.state;
  const [mainImage, setMainImage] = useState(product?.images[0]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-300 via-green-200 to-green-200 relative">
      {/* Main Content */}
      <div className="relative max-w-[90%] mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16">
        <div className="flex flex-col md:flex-row items-start justify-between gap-8 md:gap-12">
          {/* Left - Product Images */}
          <motion.div
            variants={scaleIn}
            initial="hidden"
            animate="visible"
            className="w-full md:w-[35%] space-y-3"
          >
            {/* Main Image */}
            <div className="relative group">
              <div className="relative bg-white/40 backdrop-blur-sm border border-white/50 rounded-2xl p-4 shadow-xl">
                <motion.img
                  key={mainImage}
                  src={mainImage}
                  alt="Product Preview"
                  className="rounded-xl w-full object-contain"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                />
              </div>
            </div>

            {/* Thumbnails */}
            <div className="flex space-x-3 mt-6 overflow-x-auto pb-2 scrollbar-hide">
              {product?.images?.map((img, idx) => (
                <motion.div
                  key={idx}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`relative border-2 rounded-xl cursor-pointer flex-shrink-0 transition-all duration-200 ${
                    mainImage === img
                      ? "border-emerald-500 shadow-lg shadow-emerald-500/25"
                      : "border-gray-200 hover:border-emerald-300"
                  }`}
                  onClick={() => setMainImage(img)}
                >
                  <img
                    src={img || "/placeholder.svg"}
                    alt={`Thumbnail ${idx + 1}`}
                    className="h-16 w-16 sm:h-20 sm:w-20 object-cover rounded-lg"
                  />
                  {mainImage === img && (
                    <div className="absolute inset-0 bg-emerald-500/10 rounded-lg"></div>
                  )}
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right - Product Details */}
          <motion.div
            variants={fadeIn}
            initial="hidden"
            animate="visible"
            custom={1}
            className="w-full md:w-[60%] space-y-3"
          >
            {/* Description */}
            <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 sm:p-8 border border-white/50 space-y-3">
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-1 h-8 bg-gradient-to-b from-emerald-500 to-teal-500 rounded-full"></div>
                <h2 className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-emerald-700 to-teal-700 bg-clip-text text-transparent">
                  Description
                </h2>
              </div>

              <div className="prose max-w-none">
                <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
                  {product?.description}
                </p>
              </div>

              {/* Key Benefits */}
              <motion.div
                variants={fadeIn}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={3}
                className=" py-3"
              >
                <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center">
                  <Star className="h-5 w-5 text-emerald-600 mr-2" />
                  Key Benefits
                </h3>
                <ul className="text-gray-700 text-sm sm:text-base space-y-3">
                  {product?.descriptionPoints?.map((point, ind) => (
                    <motion.li
                      key={ind}
                      variants={fadeIn}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true }}
                      custom={ind + 4}
                      className="flex items-start space-x-3"
                    >
                      <span>{point}</span>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
