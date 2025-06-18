import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ShoppingCart } from "lucide-react";
import { Link } from "react-router";

interface ProductCardProps {
  id: number;
  name: string;
  img: string;
  price: number;
  pv:number;
}

function ProductCard({ id, name, img, price,pv }: ProductCardProps) {
  return (
    <motion.div
      className="group relative overflow-hidden rounded-3xl bg-white shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true }}
      whileHover={{ y: -8 }}
    >
      {/* Image Section */}
      <div className="relative aspect-[4/5] overflow-hidden bg-gradient-to-br from-gray-50 to-gray-100">
        <motion.img
          src={img}
          alt={name}
          className="w-full h-full object-cover"
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        />

        {/* Overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

        {/* Quick Actions */}
        <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-4 group-hover:translate-y-0">
          <Button
            size="sm"
            className="w-full bg-white/95 backdrop-blur-sm text-gray-800 hover:bg-white border-0 shadow-lg font-medium"
          >
            <ShoppingCart className="w-4 h-4 mr-2" />
            Quick Add
          </Button>
        </div>
      </div>

      {/* Content Section */}
      <div className="p-6">
        {/* Product Name */}
        <h3 className="text-lg font-bold text-gray-900 mb-3 line-clamp-2 leading-tight">
          {name}
        </h3>

        {/* Price Section */}
        <div className="flex items-center justify-center mb-4">
          <span className="text-2xl font-bold text-emerald-600">
            ₹{price.toLocaleString()}
          </span>
        </div>

        {/* Action Button */}
        <Link
          to={`product/${id}`}
          state={{
            product: { name, img, price,id,pv },
          }}
        >
          <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
            <Button className="w-full bg-gradient-to-r from-emerald-600 to-emerald-700 hover:from-emerald-700 hover:to-emerald-800 text-white font-semibold py-3 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
              Know More
            </Button>
          </motion.div>
        </Link>
      </div>

      {/* Subtle border animation */}
      <div className="absolute inset-0 rounded-3xl border-2 border-transparent group-hover:border-emerald-200 transition-colors duration-300 pointer-events-none" />
    </motion.div>
  );
}

export default ProductCard;
