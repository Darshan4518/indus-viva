import { Button } from "@/components/ui/button";
import { User, Mail, MessageSquare } from "lucide-react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import message from "@/assets/img/new/message.png";

export default function ContactSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section ref={ref} id="contact-us" className="py-16 md:py-24 bg-[#f2f9f8]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">
              Contact Us
            </h2>
            <motion.div
              initial={{ opacity: 0, width: "10%" }}
              animate={
                inView
                  ? { opacity: 1, width: "100%" }
                  : { opacity: 0, width: "10%" }
              }
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <img
                src={message}
                alt="Contact"
                className="w-full h-auto rounded-lg"
              />
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8 }}
            className="bg-white p-8 rounded-lg shadow-sm"
          >
            <div className="mb-8">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-2 h-2 rounded-full bg-teal-600"></div>
                <span className="text-teal-600 font-medium">GET IN TOUCH</span>
              </div>

              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Creating a healthier world through nature and science.
                 Connect with us to explore how our innovations can enhance your
                journey to well-being.
              </h3>
             
            </div>

            <form className="space-y-6">
              <div className=" grid md:grid-cols-2 grid-cols-1 gap-3 ">
                <div className="relative flex items-center h-12 col-span-1 border border-gray-400 rounded-xl px-2">
                  <input
                    type="text"
                    placeholder="Full Name*"
                    className=" border-none outline-none  w-full h-full "
                  />
                  <User className=" h-5 w-5 text-gray-400" />
                </div>
 
                <div className="relative flex items-center h-12 col-span-1 border border-gray-400 rounded-xl px-2">
                  <input
                    type="email"
                    placeholder="Email Here*"
                    className=" border-none outline-none   w-full h-full ring-0"
                  />
                  <Mail className="  h-5 w-5 text-gray-400" />
                </div>
              </div>

              <div className="relative">
                <textarea
                  placeholder="Write Your Comment*"
                  className="pl-10 w-full border border-gray-400"
                  rows={8}
                />
                <MessageSquare className="absolute left-3 top-6 h-5 w-5 text-gray-400" />
              </div>

              <div className=" w-full">
                <Button className=" bg-teal-600 hover:bg-teal-700 text-white py-6">
                Send message
              </Button>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
