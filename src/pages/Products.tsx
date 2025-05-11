import NavigationHeroSection from "@/components/NavigationHeroSection";
import ProductCard from "@/components/products/product-card";
import { motion } from "framer-motion";
import lp01 from "@/assets/img/new/lp-01.png";
import lp02 from "@/assets/img/new/lp-02.png";
import lp03 from "@/assets/img/new/lp-03.png";
import lp04 from "@/assets/img/new/lp-04.png";

interface Product {
  id: number;
  name: string;
  category: string;
  image: string;
  sale?: boolean;
}

const products: Product[] = [
  {
    id: 1,
    name: "iPulse",
    category: "Immune Booster",
    image: lp01,
    sale: true,
  },
  {
    id: 2,
    name: "iCoffee",
    category: "Diabetic Support",
    image: lp02,
    sale: false,
  },
  {
    id: 3,
    name: "iGlow",
    category: "Skin Health",
    image: lp03,
    sale: true,
  },
  {
    id: 4,
    name: "iCare",
    category: "Women Health",
    image: lp04,
    sale: true,
  },
  {
    id: 5,
    name: "iCare",
    category: "Women Health",
    image: lp04,
    sale: true,
  },
];

export default function ProductSection() {
  return (
    <section className="relative z-10">
      <NavigationHeroSection title="Our Products" path="Products" />
      <div className="py-20 bg-white text-center max-w-7xl mx-auto">
        <motion.p
          className="text-sm text-gray-600 font-medium mb-2"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          ● OUR PRODUCTS
        </motion.p>

        <motion.h2
          className="text-4xl font-bold mb-10"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          From Nature to You
        </motion.h2>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 px-4 md:px-20">
          {products.map((product, index) => (
            <ProductCard
              key={index}
              name={product.name}
              img={product.image}
              sale={product.sale || false}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
