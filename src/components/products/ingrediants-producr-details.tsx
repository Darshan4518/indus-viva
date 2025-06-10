import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { products } from "@/lib/ingrediantsData";

const fadeIn = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.3,
      duration: 0.6,
      ease: "easeOut",
    },
  }),
};

const Section = ({ title, children, index }: any) => (
  <motion.div
    variants={fadeIn}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true }}
    custom={index}
    className="space-y-4"
  >
    <h2 className="text-2xl md:text-3xl font-bold text-[#088772]">{title}</h2>
    <div className="text-gray-700 text-sm md:text-base leading-relaxed">
      {children}
    </div>
  </motion.div>
);

export default function ProductDetailsPage() {
  const product = products[0]; 

  return (
    <div className="bg-white text-gray-900 px-6 py-12 max-w-5xl mx-auto space-y-12">
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center space-y-4"
      >
        <h1 className="text-4xl md:text-5xl font-bold text-[#088772]">
          {product.title}
        </h1>
        <p className="text-gray-600 max-w-2xl mx-auto">{product.subtitle}</p>
        <Badge className="bg-yellow-200 text-yellow-800 text-xs py-1 px-3 rounded-full">
          {product.badge}
        </Badge>
      </motion.div>

      {product.clinicalStudies.map((study, index) => (
        <Section title={study.title} index={index + 1} key={index}>
          <p>{study.description}</p>
          {study.points && (
            <ul className="list-disc list-inside ml-4 mt-2">
              {study.points.map((point, i) => (
                <li key={i}>{point}</li>
              ))}
            </ul>
          )}
        </Section>
      ))}

      <Section title="Benefits of Sesavita™" index={10}>
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 list-disc list-inside ml-4">
          {product.benefits.map((benefit, i) => (
            <li key={i}>{benefit}</li>
          ))}
        </ul>
      </Section>

      <Section title="Product Grades & Usage" index={11}>
        <ul className="list-disc list-inside ml-4">
          {product.usage.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
      </Section>

      <motion.div
        variants={fadeIn}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        custom={12}
        className="text-center"
      >
        <Button className="bg-[#088772] text-white px-6 py-3 text-lg rounded-xl hover:bg-[#066c5d] transition-all">
          Request COA / Sample / Contact Us
        </Button>
      </motion.div>
    </div>
  );
}
