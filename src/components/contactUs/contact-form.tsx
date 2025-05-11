
import { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { MapPin, Phone, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const ContactForm = () => {
      const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Add your form submission logic here
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };
  return (
      <section ref={ref} id="contact-us" className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              className="space-y-8"
            >
              <motion.div variants={itemVariants}>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
                  Contact Us
                </h2>
              </motion.div>

              <motion.div
                variants={itemVariants}
                className="flex items-start space-x-4"
              >
                <div className="bg-teal-100 p-3 rounded-full">
                  <MapPin className="h-4 w-4 text-teal-600" />
                </div>
                <div>
                  <h3 className="text-lg font-medium text-gray-900 mb-2">
                    Location
                  </h3>
                  <p className="text-gray-600 texx-sm">
                    IndusViva HealthSciences Private Limited, No 92-1-36,Viva
                    Tower, Nandi Durga Road, Jayamahal Extension, Bangalore
                    (Banglore) Urban, Karnataka - 560046.
                  </p>
                </div>
              </motion.div>

              <motion.div
                variants={itemVariants}
                className="flex items-start space-x-4"
              >
                <div className="bg-teal-100 p-3 rounded-full">
                  <Phone className="h-4 w-4 text-teal-600" />
                </div>
                <div>
                  <h3 className="text-lg font-medium text-gray-900 mb-2">
                    Phone
                  </h3>
                  <p className="text-gray-600">1800 103 4916</p>
                </div>
              </motion.div>

              <motion.div
                variants={itemVariants}
                className="flex items-start space-x-4"
              >
                <div className="bg-teal-100 p-3 rounded-full">
                  <Mail className="h-4 w-4 text-teal-600" />
                </div>
                <div>
                  <h3 className="text-lg font-medium text-gray-900 mb-2">
                    Email
                  </h3>
                  <p className="text-gray-600">support@indusviva.com</p>
                </div>
              </motion.div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
              transition={{ duration: 0.8 }}
            >
              <div className="">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">
                  Get in touch
                </h3>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <Input
                      type="text"
                      name="fullName"
                      placeholder="FULL NAME*"
                      value={formData.fullName}
                      onChange={handleChange}
                      className="w-full border-0 border-b border-gray-300 focus:border-teal-600 focus:ring-0 focus:outline-none focus-visible:outline-none focus-visible:ring-0 rounded-none shadow-none"
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <Input
                      type="email"
                      name="email"
                      placeholder="EMAIL HERE*"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full border-0 border-b border-gray-300 focus:border-teal-600 focus:ring-0 focus:outline-none focus-visible:outline-none focus-visible:ring-0 rounded-none shadow-none"
                      required
                    />

                    <Input
                      type="text"
                      name="subject"
                      placeholder="SUBJECT *"
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full border-0 border-b border-gray-300 focus:border-teal-600 focus:ring-0 focus:outline-none focus-visible:outline-none focus-visible:ring-0 rounded-none shadow-none"
                      required
                    />
                  </div>

                  <div>
                    <Textarea
                      name="message"
                      placeholder="WRITE NOTE*"
                      value={formData.message}
                      onChange={handleChange}
                      rows={3}
                      className="w-full border-0 border-b border-gray-300 focus:border-teal-600 focus:ring-0 focus:outline-none focus-visible:outline-none focus-visible:ring-0 rounded-none shadow-none"
                    />
                  </div>

                  <Button
                    type="submit"
                    className="bg-teal-600 hover:bg-teal-700 text-white px-8 py-2"
                  >
                    Send message
                  </Button>
                </form>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
  )
}

export default ContactForm