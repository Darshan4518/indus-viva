import { useState, useEffect } from "react";
import { Menu } from "lucide-react";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { Link } from "react-router";
import logo from "@/assets/img/new/logo.svg";
import logoblack from "@/assets/img/new/logo-black.png";

import CartSheet from "./cart/CartSheet";
import VerificationDialog from "./VerificationDailog";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navItems = [
    "Home",
    "About",
    "Medical Panel",
    "Our Products",
    "Virtual Office",
    "Contact Us",
    "Customer Care",
  ];

  return (
    <motion.header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 w-full transition-all duration-300",
        scrolled
          ? "bg-[#62bf9a54] backdrop-blur-xl"
          : "bg-transparent shadow-xs shadow-gray-100/20"
      )}
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="relative z-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-4 max-w-[90%] h-20 tv:h-30">
          <div className="flex h-16 items-center justify-between tv:h-30">
            {/* Logo */}
            <div className="flex items-center">
              <Link to="/" className="flex items-center space-x-2">
                <img src={logo} alt="logo" className="md:w-40 md:h-40 w-30 h-30" />
              </Link>
            </div>

            {/* Desktop Nav */}
            <nav className="hidden xl:flex xl:space-x-8 space-x-4">
              {navItems.map((item) => (
                <Link
                  key={item}
                  to={
                    item === "Home"
                      ? "/"
                      : `/${item.toLowerCase().replace(/\s+/g, "-")}`
                  }
                  className="text-white transition-colors 3xl:text-xl tv:text-4xl"
                >
                  {item}
                </Link>
              ))}
            </nav>

            {/* Icons */}
            <div className="flex items-center space-x-6">
              <VerificationDialog />
              <CartSheet />
              <Sheet>
                <SheetTrigger
                  asChild
                  style={{
                    cursor: "pointer",
                  }}
                >
                  <Menu className="h-7 w-7" color="white" />
                </SheetTrigger>

                <SheetContent
                  side="right"
                  className="w-[320px] px-6 pt-6 overflow-y-scroll"
                >
                  {/* Logo & Close Button */}
                  <div className="flex items-center justify-between mb-8">
                    <img src={logoblack} alt="Logo" className="h-8" />
                  </div>

                  {/* Navigation */}
                  <nav className="space-y-4 xl:hidden">
                    {navItems.map((item) => (
                      <SheetClose asChild key={item}>
                        <Link
                          to={
                            item === "Home"
                              ? "/"
                              : `/${item.toLowerCase().replace(/\s+/g, "-")}`
                          }
                          className="flex items-center justify-between text-black font-medium border-b py-2"
                        >
                          {item}
                        </Link>
                      </SheetClose>
                    ))}
                  </nav>

                  {/* Divider */}
                  <div className="my-6 md:my-0 border-t md:border-none pt-4" />

                  {/* Information Section */}
                  <div className="space-y-3 text-sm text-black">
                    <h3 className="text-base font-bold">Information</h3>
                    <p>📞 1800 103 4916</p>
                    <p>📧 support@indusviva.com</p>
                    <p>
                      📍 IndusViva HealthSciences Private Limited, No 92-1–36,
                      <br />
                      Viva Tower, Nandi Durga Road,
                      <br />
                      Jayamahal Extension, Bangalore (Bangalore) Urban,
                      Karnataka – 560046.
                    </p>
                  </div>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>
      </div>
    </motion.header>
  );
}
