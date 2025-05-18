"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Eye, EyeOff } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import logo from "@/assets/img/new/logo-black.png";
import { Swiper, SwiperSlide } from "swiper/react";
// @ts-expect-error
import "swiper/css";
// @ts-expect-error
import "swiper/css/autoplay";
// @ts-expect-error
import "swiper/css/pagination";
// @ts-expect-error
import "swiper/css/effect-fade";

import { Autoplay, EffectFade, Pagination } from "swiper/modules";
import { Link } from "react-router";

type Slide = {
  image: string;
  title: string;
  description: string;
};

const slides: Slide[] = [
  {
    image: "https://ismailvtl-images-project.vercel.app/startup-launch.png",
    title: "Welcome Back!",
    description: "Login to continue your wellness journey with IndusViva.",
  },
  {
    image: "https://ismailvtl-images-project.vercel.app/startup-launch.png",
    title: "Premium Products",
    description:
      "Discover the range of scientifically backed health supplements.",
  },
  {
    image: "https://ismailvtl-images-project.vercel.app/startup-launch.png",
    title: "Join the Mission",
    description:
      "Be part of a community driving wellness and success together.",
  },
];

export default function LoginForm() {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Login attempt with:", { email, password });
  };

  return (
    <section className="min-h-screen bg-[#0a7c7330] py-12 flex items-center justify-center">
      <div className="container max-w-6xl bg-white rounded-lg shadow-sm grid grid-cols-1 md:grid-cols-2 overflow-hidden">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="p-8 md:p-12 w-full  mx-auto max-w-md"
        >
          <div className="mb-8 ">
            <img src={logo} alt="IndusViva Logo" className="h-10 mb-10" />
            <h1 className="text-2xl md:text-2xl font-bold text-gray-900 mb-2">
              Login to your Account
            </h1>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email <span className="text-red-500">*</span>
              </label>
              <Input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="EMAIL@WEBSITE.COM"
                className=" rounded-full"
                required
              />
            </div>

            <div className="space-y-2">
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700"
              >
                Password
              </label>
              <div className="relative">
                <Input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="ENTER YOUR PASSWORD"
                  className="pr-10 rounded-full"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute inset-y-0 right-0 pr-3 flex items-center"
                >
                  {showPassword ? (
                    <EyeOff className="h-5 w-5 text-gray-400" />
                  ) : (
                    <Eye className="h-5 w-5 text-gray-400" />
                  )}
                </button>
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <Checkbox
                  id="show-password"
                  onCheckedChange={() => setShowPassword(!showPassword)}
                />
                <label
                  htmlFor="show-password"
                  className="ml-2 text-sm text-gray-600"
                >
                  Show Password
                </label>
              </div>
              <Link
                to="/forgot-password"
                className="text-sm text-teal-600 hover:text-teal-500"
              >
                Forgot Password?
              </Link>
            </div>

            <Button
              type="submit"
              className="w-full bg-teal-500 hover:bg-teal-600 text-white py-5 rounded-full "
            >
              Login
            </Button>

            <div className="text-center text-sm text-gray-600">
              Not registered yet?{" "}
              <Link
                to="/register"
                className="text-teal-600 hover:text-teal-500"
              >
                Create an account
              </Link>
            </div>
          </form>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative bg-blue-50 p-8 md:p-12 flex items-center justify-center"
        >
          <div className="w-full h-full relative">
            <Swiper
              modules={[Autoplay, Pagination, EffectFade]}
              autoplay={{ delay: 5000, disableOnInteraction: false }}
              pagination={{ clickable: true }}
              effect="fade"
              loop
              className="w-full h-full"
            >
              {slides.map((slide, index) => (
                <SwiperSlide key={index}>
                  <div className="absolute inset-0 flex flex-col items-center justify-center text-center space-y-4 bg-blue-50 h-full w-full ">
                    <img
                      src={slide.image}
                      alt={slide.title}
                      className="h-[60%] mx-auto object-contain"
                    />
                    <h2 className="text-xl md:text-2xl font-bold text-gray-900">
                      {slide.title}
                    </h2>
                    <p className="text-gray-600 max-w-sm mx-auto">
                      {slide.description}
                    </p>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
