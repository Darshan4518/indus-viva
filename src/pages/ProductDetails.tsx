import { useState } from "react";
import { motion } from "framer-motion";
import {
  Star,
  Leaf,
  ShieldCheck,
  TruckIcon,
  Heart,
  Share2,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

import { useLocation } from "react-router";
import { useCartStore } from "@/stores/useCartStore";

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

export default function ProductDetailsPage() {
  const location = useLocation();
  const { addToCart } = useCartStore();
  const product = location?.state?.product;

  const [mainImage, setMainImage] = useState(product?.img);
  const [quantity, setQuantity] = useState("1");

  return (
    <div className="bg-gradient-to-b from-green-300 to-white py-20 text-gray-900 min-h-screen">
      {/* Main product section */}
      <div className="max-w-[2000px] mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6 lg:py-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 xl:gap-12">
          {/* Left column - Images */}
          <div className="lg:col-span-5 xl:col-span-5 space-y-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="lg:sticky lg:top-4"
            >
              <div className="border border-gray-200 rounded-lg bg-white p-2 sm:p-4">
                <motion.img
                  key={mainImage}
                  src={mainImage}
                  alt="Product Preview"
                  className="rounded-lg w-full h-[250px] sm:h-[350px] md:h-[400px] lg:h-[450px] 2xl:h-[600px] object-contain"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5 }}
                />
              </div>

              <div className="flex space-x-2 mt-2 sm:mt-4 overflow-x-auto pb-2 scrollbar-hide">
                <div
                  className={`border-2 rounded-md cursor-pointer flex-shrink-0 `}
                  onClick={() => setMainImage(product?.img)}
                >
                  <img
                    src={product?.img || "/placeholder.svg"}
                    alt={`Thumbnail `}
                    className="h-12 w-12 sm:h-16 sm:w-16 md:h-20 md:w-20 object-cover rounded-sm"
                  />
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right column - Product details */}
          <div className="lg:col-span-7 xl:col-span-7 space-y-4 sm:space-y-6">
            <motion.div
              variants={fadeIn}
              initial="hidden"
              animate="visible"
              className="space-y-2"
            >
              <h1 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-800">
                {product?.name}
              </h1>

              <div className="flex items-center space-x-2 sm:space-x-4">
                <div className="flex items-center">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star
                      key={star}
                      className={`w-4 h-4 sm:w-5 sm:h-5 ${
                        star <= 4
                          ? "fill-yellow-400 text-yellow-400"
                          : "text-gray-300"
                      }`}
                    />
                  ))}
                </div>
                <span className="text-xs sm:text-sm text-blue-600 hover:underline cursor-pointer">
                  426 ratings
                </span>
              </div>
            </motion.div>

            <div className="border-t border-b border-gray-200 py-3 sm:py-4">
              <span className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900">
                ₹ {product?.price}
              </span>
            </div>

            <motion.div
              variants={fadeIn}
              initial="hidden"
              animate="visible"
              custom={1}
              className="space-y-3 sm:space-y-4"
            >
              <div className="flex flex-wrap items-center gap-2">
                <Badge className="bg-green-100 text-green-800 text-xs py-1 px-2 sm:px-3 rounded-full">
                  Batch Consistency | Forskolin Rich | Naturally Thermogenic
                </Badge>
                <Badge className="bg-green-700 text-white text-xs py-1 px-2 sm:px-3 rounded-full">
                  Organic Certified
                </Badge>
              </div>

              <div className="grid grid-cols-2 gap-2 sm:gap-4">
                <div className="flex items-center space-x-2">
                  <Leaf className="h-4 w-4 sm:h-5 sm:w-5 text-green-600" />
                  <span className="text-xs sm:text-sm">100% Natural</span>
                </div>
                <div className="flex items-center space-x-2">
                  <ShieldCheck className="h-4 w-4 sm:h-5 sm:w-5 text-green-600" />
                  <span className="text-xs sm:text-sm">Quality Tested</span>
                </div>
                <div className="flex items-center space-x-2">
                  <TruckIcon className="h-4 w-4 sm:h-5 sm:w-5 text-green-600" />
                  <span className="text-xs sm:text-sm">Fast Shipping</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Star className="h-4 w-4 sm:h-5 sm:w-5 text-green-600" />
                  <span className="text-xs sm:text-sm">Top Rated</span>
                </div>
              </div>
            </motion.div>

            <motion.div
              variants={fadeIn}
              initial="hidden"
              animate="visible"
              custom={2}
              className="space-y-3 sm:space-y-4 bg-green-50 p-3 sm:p-4 rounded-lg border border-green-100"
            >
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <label
                    htmlFor="quantity"
                    className="text-sm sm:text-base font-medium"
                  >
                    Quantity:
                  </label>
                  <div className="flex items-center border border-gray-300 rounded-md bg-white">
                    <button
                      className="px-2 py-1 text-gray-600 hover:text-green-600 text-lg"
                      onClick={() =>
                        setQuantity((prev) =>
                          Math.max(1, Number.parseInt(prev) - 1).toString()
                        )
                      }
                    >
                      -
                    </button>
                    <input
                      type="text"
                      value={quantity}
                      onChange={(e) => {
                        const val = Number.parseInt(e.target.value);
                        if (!isNaN(val) && val > 0) setQuantity(val.toString());
                      }}
                      className="w-10 text-center border-0 focus:ring-0 focus:outline-none text-sm sm:text-base"
                    />
                    <button
                      className="px-2 py-1 text-gray-600 hover:text-green-600 text-lg"
                      onClick={() =>
                        setQuantity((prev) =>
                          (Number.parseInt(prev) + 1).toString()
                        )
                      }
                    >
                      +
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              variants={fadeIn}
              initial="hidden"
              animate="visible"
              custom={3}
              className="space-y-3"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <Button
                  className="w-full cursor-pointer bg-green-600 hover:bg-green-700 text-white py-5 sm:py-6 text-sm sm:text-base lg:text-lg rounded-lg"
                  onClick={() => {
                    addToCart(product, parseInt(quantity));
                  }}
                >
                  Add to Cart
                </Button>

                <Button
                  variant="outline"
                  className="w-full cursor-pointer border-green-600 text-green-600 hover:bg-green-50 py-5 sm:py-6 text-sm sm:text-base lg:text-lg rounded-lg"
                >
                  Buy Now
                </Button>
              </div>

              <div className="flex justify-between pt-2">
                <Button
                  variant="ghost"
                  size="sm"
                  className="text-xs sm:text-sm text-gray-600 hover:text-green-600 flex items-center gap-1"
                >
                  <Heart className="h-3 w-3 sm:h-4 sm:w-4" />
                  <span className="hidden xs:inline">Add to Wishlist</span>
                  <span className="xs:hidden">Wishlist</span>
                </Button>
                <Button
                  variant="ghost"
                  size="sm"
                  className="text-xs sm:text-sm text-gray-600 hover:text-green-600 flex items-center gap-1"
                >
                  <Share2 className="h-3 w-3 sm:h-4 sm:w-4" />
                  <span>Share</span>
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
