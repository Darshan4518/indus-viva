import { motion } from "framer-motion";

function ProductCard({
  name,
  img,
  sale,
}: {
  name: string;
  img: any;
  sale: boolean;
}) {
  return (
    <motion.div
      className="relative group overflow-hidden bg-white"
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      {sale && (
        <span className="absolute top-2 left-2 z-10 bg-black text-white text-xs px-2 py-1 rounded-full">
          SALE
        </span>
      )}

      <div className="relative overflow-hidden">
        <img src={img} alt={name} className="w-full h-auto mx-auto" />

        <div className="absolute bottom-0 left-0 right-0 bg-emerald-700 text-white text-sm font-semibold text-center py-3 translate-y-full opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
          Know More
        </div>
      </div>

      <div className="py-4 text-center text-lg font-medium">{name}</div>
    </motion.div>
  );
}

export default ProductCard;
