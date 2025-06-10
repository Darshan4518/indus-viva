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

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useLocation } from "react-router";
import { IProducts } from "@/lib/ingrediantsData";

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
  const product:IProducts = location.state;
  const [mainImage, setMainImage] = useState(product?.images[0]);
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
                {product?.images?.map((img, idx) => (
                  <div
                    key={idx}
                    className={`border-2 rounded-md cursor-pointer flex-shrink-0 ${
                      mainImage === img ? "border-green-600" : "border-gray-200"
                    }`}
                    onClick={() => setMainImage(img)}
                  >
                    <img
                      src={img || "/placeholder.svg"}
                      alt={`Thumbnail ${idx + 1}`}
                      className="h-12 w-12 sm:h-16 sm:w-16 md:h-20 md:w-20 object-cover rounded-sm"
                    />
                  </div>
                ))}
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
                {product?.title}
              </h1>
              <p className="text-base sm:text-lg lg:text-xl text-gray-600">
                {product?.subtitle}
              </p>

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
              <div className="flex items-baseline">
                <span className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900">
                  $89.99
                </span>
                <span className="ml-2 text-base sm:text-lg text-gray-500 line-through">
                  $119.99
                </span>
                <span className="ml-2 text-sm sm:text-base text-green-600 font-medium">
                  25% off
                </span>
              </div>
              <p className="text-xs sm:text-sm text-gray-500 mt-1">
                Price for bulk orders (MOQ applies)
              </p>
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

                <div className="flex justify-between items-center">
                  <label
                    htmlFor="size"
                    className="text-sm sm:text-base font-medium"
                  >
                    Package Size:
                  </label>
                  <Select defaultValue="1kg">
                    <SelectTrigger className="w-24 sm:w-28 bg-white text-xs sm:text-sm">
                      <SelectValue placeholder="1kg" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="100g">100g</SelectItem>
                      <SelectItem value="500g">500g</SelectItem>
                      <SelectItem value="1kg">1kg</SelectItem>
                      <SelectItem value="5kg">5kg</SelectItem>
                      <SelectItem value="25kg">25kg</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="flex justify-between items-center">
                  <label
                    htmlFor="grade"
                    className="text-sm sm:text-base font-medium"
                  >
                    Grade:
                  </label>
                  <Select defaultValue="food">
                    <SelectTrigger className="w-24 sm:w-28 bg-white text-xs sm:text-sm">
                      <SelectValue placeholder="Food" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="food">Food</SelectItem>
                      <SelectItem value="cosmetic">Cosmetic</SelectItem>
                      <SelectItem value="pharmaceutical">
                        Pharmaceutical
                      </SelectItem>
                    </SelectContent>
                  </Select>
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
                <Button className="w-full bg-green-600 hover:bg-green-700 text-white py-5 sm:py-6 text-sm sm:text-base lg:text-lg rounded-lg">
                  Add to Cart
                </Button>

                <Button
                  variant="outline"
                  className="w-full border-green-600 text-green-600 hover:bg-green-50 py-5 sm:py-6 text-sm sm:text-base lg:text-lg rounded-lg"
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

      {/* Key Features Section with Image */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        <motion.div
          variants={fadeIn}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          custom={1}
          className="bg-white rounded-2xl shadow-lg p-6 sm:p-8 border border-green-100"
        >
          <div>
            <h2 className="text-lg sm:text-xl font-semibold text-green-700 mb-2">
              Description:{" "}
            </h2>
            <div className="prose max-w-none">
              <p className="text-sm text-gray-700 leading-relaxed">
                Sesavita, harnessing clinically proven lignans from sesame, has
                transformed lives for over a decade. This remarkable extract
                modulates lipid metabolism, reduces lipid peroxidation, and
                enhances liver function, ensuring comprehensive health benefits.
                Sesavita's potential extends to immunoregulation and the
                prevention of thrombosis, showcasing its multifaceted impact on
                well-being. At the heart of Sesavita lies sesamin, a pivotal
                component known for its cholesterol-lowering effects, regulation
                of blood sugar levels, and promotion of relaxation with improved
                sleep quality. Experience the holistic benefits of Sesavita and
                discover a new standard in natural health support.
              </p>
            </div>
          </div>

          {/* Features Image */}
          <div className="flex justify-center my-6">
            <img
              src={product?.aboutImage}
              alt="Product Features"
              className="h-16 sm:h-20 md:h-24 w-auto object-contain"
            />
          </div>

          {/* Key Points */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            <motion.div
              variants={fadeIn}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              custom={2}
              className="space-y-3"
            >
              <div className="flex items-start space-x-3">
                <ul className="text-gray-700 text-sm sm:text-base space-y-1 list-disc">
                  {product?.descriptionPoints?.map((point, ind) => (
                    <li key={ind}>{point}</li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </div>

          {/* Additional Features Row */}
          <div className="mt-8 pt-6 border-t border-gray-100">
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              <div className="text-center">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-2">
                  <Leaf className="h-6 w-6 text-green-600" />
                </div>
                <p className="text-xs sm:text-sm font-medium text-gray-700">
                  100% Natural
                </p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-2">
                  <ShieldCheck className="h-6 w-6 text-green-600" />
                </div>
                <p className="text-xs sm:text-sm font-medium text-gray-700">
                  Certified Quality
                </p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-2">
                  <Star className="h-6 w-6 text-green-600" />
                </div>
                <p className="text-xs sm:text-sm font-medium text-gray-700">
                  Premium Grade
                </p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-2">
                  <TruckIcon className="h-6 w-6 text-green-600" />
                </div>
                <p className="text-xs sm:text-sm font-medium text-gray-700">
                  Fast Delivery
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
