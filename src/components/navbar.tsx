import { useState, useEffect } from "react";
import { User, ShoppingCart, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router";
import logo from "@/assets/img/new/logo.svg"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrolled]);

  return (
    <motion.header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 w-full transition-all duration-300 backdrop-blur-xl ",
        scrolled ? "bg-[#62bf9a54]" : "bg-transparent"
      )}
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="relative z-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl h-20">
          <div className="flex h-16 items-center justify-between">
            <div className="flex items-center">
              <Link to="/" className="flex items-center space-x-2">
                <img src={logo} alt="logo" className=" w-50 h-50" />
                
              </Link>
            </div>

            <nav className="hidden md:flex space-x-8">
              {[
                "Home",
                "About",
                "Medical Panel",
                "Our Products",
                "Virtual Office",
                "Contact Us",
                "Customer Care",
              ].map((item) => (
                <Link
                  key={item}
                  to={`#${item.toLowerCase().replace(/\s+/g, "-")}`}
                  className="text-white hover:text-teal-100 transition-colors"
                >
                  {item}
                </Link>
              ))}
            </nav>

            <div className="flex items-center space-x-4">
              <Button
                variant="ghost"
                size="icon"
                className="text-white hover:text-teal-100"
              >
                <User className="h-5 w-5" />
                <span className="sr-only">Login</span>
              </Button>
              <div className="relative">
                <Button
                  variant="ghost"
                  size="icon"
                  className="text-white hover:text-teal-100"
                >
                  <ShoppingCart className="h-5 w-5" />
                  <span className="sr-only">Cart</span>
                </Button>
                <span className="absolute -top-1 -right-1 flex h-4 w-4 items-center justify-center rounded-full bg-red-500 text-xs font-bold text-white">
                  3
                </span>
              </div>
              <Button
                variant="ghost"
                size="icon"
                className="md:hidden text-white hover:text-teal-100"
                onClick={() => setIsOpen(!isOpen)}
              >
                {isOpen ? (
                  <X className="h-5 w-5" />
                ) : (
                  <Menu className="h-5 w-5" />
                )}
                <span className="sr-only">Menu</span>
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 z-10 bg-teal-600 text-white md:hidden"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <div className="container mx-auto px-4 py-20">
              <nav className="flex flex-col space-y-6">
                {[
                  "Home",
                  "About",
                  "Medical Panel",
                  "Our Products",
                  "Virtual Office",
                  "Contact Us",
                  "Customer Care",
                ].map((item) => (
                  <Link
                    key={item}
                    to={`#${item.toLowerCase().replace(/\s+/g, "-")}`}
                    className="text-xl font-medium text-white hover:text-teal-100 transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    {item}
                  </Link>
                ))}
              </nav>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
