import { motion } from "framer-motion";

function ProductCard({ img, name }: { img: any; name: string }) {
  return (
    <motion.div
      className="relative group overflow-hidden bg-white rounded-2xl shadow-md"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true }}
    >
      <div className="relative overflow-hidden">
        <motion.img
          src={img}
          alt={name}
          className="w-full h-auto mx-auto transition-transform duration-500 group-hover:scale-105"
          whileHover={{ scale: 1.05 }}
        />
      </div>
      <motion.h3
        className="text-xl font-semibold text-center text-gray-800 py-4 group-hover:text-primary transition-colors duration-300 line-clamp-1"
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.5 }}
      >
        {name}
      </motion.h3>
    </motion.div>
  );
}

export default ProductCard;
