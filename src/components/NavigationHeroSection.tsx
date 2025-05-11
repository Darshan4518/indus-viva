import { motion } from "framer-motion";

export default function NavigationHeroSection({path,title}:{path:string,title:string}) {
  return (
    <div className="relative z-10 bg-[#0a0e1a] py-30 text-white text-center overflow-hidden bg-[url('https://magicads.ae/indus-viva/assets/img/breadcrumb/breadcrumb-pattern.png')] bg-no-repeat bg-cover">
      <motion.h1
        className="text-5xl font-bold"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
       {title}
      </motion.h1>

      <motion.p
        className="mt-3 text-gray-400"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.6 }}
      >
        <span className="text-green-400">Home</span> – {path}
      </motion.p>

      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <motion.div
          className="absolute w-40 h-40"
          animate={{ y: [0, 20, 0], x: [0, 10, 0] }}
          transition={{ duration: 6, repeat: Infinity }}
          style={{ left: "20%", top: "10%" }}>
            <img src="https://magicads.ae/indus-viva/assets/img/breadcrumb/shape-1.png" alt="shape1" className="w-full h-full"  />
        </motion.div>
        <motion.div
          className="absolute w-40 h-40 "
          animate={{ y: [0, -20, 0], x: [0, -10, 0] }}
          transition={{ duration: 7, repeat: Infinity }}
          style={{ right: "20%", top: "10%" }}
        >
          <img src="https://magicads.ae/indus-viva/assets/img/breadcrumb/shape-3.png" alt="shape2" className="w-full h-full" />
        </motion.div>
      </div>
    </div>
  );
}
