import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import mainBg from "@/assets/img/new/main_background.jpeg";
import home3 from "@/assets/img/new/home-3-hero.png";

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-white">
      <div className="absolute inset-0 z-10">
        <div
          className={`absolute inset-0' bg-cover bg-center opacity-70"`}
        ></div>
        <img src={mainBg} alt="mainBg" className=" w-full h-full" />
        <div className="absolute inset-0 bg-gradient-to-r from-teal-900/30 to-teal-800/30"></div>
      </div>

      <div className="container relative z-10 px-4 py-24 sm:px-6 lg:px-8  w-full h-full flex items-center "> 
        <div className="max-w-4xl 3xl:max-w-full  lg:mx-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h1 className="text-3xl font-bold tracking-tight sm:text-5xl md:text-6xl 3xl:text-8xl tv:text-[12rem] ">
              NURTURING HEALTH <br />
              <div className="mt-2 3xl:mt-4  flex gap-2 items-center">
                <img src={home3} alt="home" className=" w-20 h-20 " />
                <span>THROUGH</span>
              </div>
              <span className=" mt-2 3xl:mt-4 block">NATURE'S LEGACY</span>
            </h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-8 max-w-2xl 3xl:max-w-4xl tv:max-w-6xl"
          >
            <p className="text-lg text-teal-50 3xl:text-xl tv:text-4xl">
              We create entrepreneurship. We empower entrepreneurs. We advocate
              Advanced Ayurveda. We formulate, manufacture and market.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-10"
          >
            <Button
              size="lg"
              className="bg-teal-600 hover:bg-teal-700 text-white px-12 py-8 3xl:px-16 3xl:py-10 tv:px-20 tv:py-12 flex items-center justify-center gap-4 3xl:text-2xl tv:text-3xl"
            >
              Discover More
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className=" h-10 w-10 -rotate-45"
              >
                <path d="M5 12h14" />
                <path d="m12 5 7 7-7 7" />
              </svg>
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
