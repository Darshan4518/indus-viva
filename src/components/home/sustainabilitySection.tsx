"use client";

import { useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Swiper, SwiperSlide } from "swiper/react";
// @ts-expect-error
import "swiper/css";
import { Autoplay } from "swiper/modules";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import image1 from "@/assets/img/1.png";
import image2 from "@/assets/img/2.png";
import image3 from "@/assets/img/3.png";
import image4 from "@/assets/img/4.png";
import image5 from "@/assets/img/5.png";
import image6 from "@/assets/img/6.png";
import image7 from "@/assets/img/7.png";
import image8 from "@/assets/img/8.png";
import image9 from "@/assets/img/9.png";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const sustainabilityItems = [
  {
    id: 1,
    number: "01",
    title: "SUSTAINABLY SOURCED FROM THE HEART OF NATURE",
    subtitle: "SUSTAINABLY SOURCED FROM THE HEART OF NATURE",
    description:
      "Salacia roots grow in pristine forests, harvested by tribal communities who honor the land's natural balance.",
    images: [image1, image2, image3],
  },
  {
    id: 2,
    number: "02",
    title: "ADVANCED EXTRACTION PRESERVES POTENCY",
    subtitle: "ADVANCED EXTRACTION PRESERVES POTENCY",
    description:
      "Our state-of-the-art extraction methods ensure maximum retention of the plant's beneficial compounds, delivering superior efficacy in every product.",
    images: [image4, image5, image6],
  },
  {
    id: 3,
    number: "03",
    title: "Innovation Meets Tradition",
    subtitle: "Salacia roots travel to our state-of-the-art facility",
    description:
      "Salacia roots travel to our state-of-the-art facility, where advanced extraction methods preserve their potency. With a dedicated team ensuring strict quality control, each product undergoes thorough testing for purity and safety.",
    images: [image7, image8, image9],
  },
];

const SustainabilitySection = () => {
  const sectionRef = useRef(null);
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    if (typeof window === "undefined") return;

    gsap.set([".section-title", ".section-description"], {
      opacity: 1,
      y: 0,
    });

    const headerTl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 90%",
        toggleActions: "play none none none",
      },
    });

    headerTl
      .fromTo(".section-title", { y: 50, opacity: 0 }, {
        y: 0,
        opacity: 1,
        duration: 0.8,
        ease: "power3.out",
      })
      .fromTo(".section-description", { y: 30, opacity: 0 }, {
        y: 0,
        opacity: 1,
        duration: 0.8,
        ease: "power3.out",
      }, "-=0.4");

    itemRefs.current.forEach((item, index) => {
      if (!item) return;

      gsap.set(item, { opacity: 0, y: 100, scale: 0.95 });

      ScrollTrigger.create({
        trigger: item,
        start: "top 70%",
        end: "bottom 30%",
        onEnter: () => {
          itemRefs.current.forEach((otherItem, otherIndex) => {
            if (otherItem && otherIndex !== index) {
              gsap.to(otherItem, {
                opacity: 0,
                y: -50,
                scale: 0.95,
                duration: 0.5,
                ease: "power2.inOut",
              });
            }
          });

          const tl = gsap.timeline();
          tl.to(item, {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.8,
            ease: "power3.out",
          });

          const content = item.querySelector(".item-content");
          const elements = content?.querySelectorAll(".animate-in");

          if (elements?.length) {
            gsap.set(elements, { y: 30, opacity: 0 });
            tl.to(elements, {
              y: 0,
              opacity: 1,
              stagger: 0.15,
              duration: 0.6,
              ease: "power2.out",
            }, "-=0.4");
          }
        },
        onLeave: () => {
          gsap.to(item, {
            opacity: 0,
            y: -50,
            scale: 0.95,
            duration: 0.5,
            ease: "power2.inOut",
          });
        },
        onEnterBack: () => {
          itemRefs.current.forEach((otherItem, otherIndex) => {
            if (otherItem && otherIndex !== index) {
              gsap.to(otherItem, {
                opacity: 0,
                y: 50,
                scale: 0.95,
                duration: 0.5,
                ease: "power2.inOut",
              });
            }
          });

          const tl = gsap.timeline();
          tl.to(item, {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.8,
            ease: "power3.out",
          });

          const content = item.querySelector(".item-content");
          const elements = content?.querySelectorAll(".animate-in");

          if (elements?.length) {
            gsap.set(elements, { y: 30, opacity: 0 });
            tl.to(elements, {
              y: 0,
              opacity: 1,
              stagger: 0.15,
              duration: 0.6,
              ease: "power2.out",
            }, "-=0.4");
          }
        },
        onLeaveBack: () => {
          gsap.to(item, {
            opacity: 0,
            y: 100,
            scale: 0.95,
            duration: 0.5,
            ease: "power2.inOut",
          });
        },
      });
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <div className="bg-[#088772] min-h-screen" ref={sectionRef}>
      <div className="text-center py-20 px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-white section-title">
          Sustainability Initiatives
        </h2>
        <p className="text-white max-w-2xl mx-auto mt-4 section-description">
          Discover how we're committed to sustainable practices throughout our
          entire production process.
        </p>
      </div>

      <div className="relative p-3 space-y-10">
        {sustainabilityItems.map((item, index) => (
          <div
            key={item.id}
            ref={(el: any) => (itemRefs.current[index] = el)}
            className="px-2 md:px-4 pb-8"
          >
            <div className="bg-white rounded-xl overflow-hidden flex flex-col lg:flex-row items-center 
              h-auto min-h-[80vh] md:min-h-[70vh] lg:max-w-[90%] mx-auto 
              lg:p-6 p-4 w-full shadow-md md:max-w-[60%]">
              
              {/* Left Content */}
              <div className="p-4 md:p-8 lg:p-10 w-full lg:w-1/2 space-y-2 lg:space-y-4 
                flex flex-col justify-center item-content text-center lg:text-left">
                <div className="flex items-center justify-center lg:justify-start space-x-4 animate-in">
                  <div className="h-px w-10 bg-black"></div>
                  <span className="text-xl 3xl:text-4xl font-semibold text-black">
                    {item.number}
                  </span>
                </div>
                <h2 className="text-sm md:text-lg lg:text-2xl 3xl:text-4xl font-bold text-gray-800 uppercase animate-in">
                  {item.title}
                </h2>
                <h3 className="text-xs md:text-base lg:text-lg 3xl:text-2xl font-medium text-gray-600 animate-in">
                  {item.subtitle}
                </h3>
                <p className="text-gray-500 text-sm md:text-sm lg:text-base 3xl:text-xl line-clamp-3 lg:line-clamp-none animate-in">
                  {item.description}
                </p>
                <div className="flex justify-center lg:justify-start animate-in">
                  <Button
                    size="lg"
                    className="bg-teal-600 hover:bg-teal-700 text-white px-6 py-3 
                      md:px-10 md:py-4 3xl:px-16 3xl:py-6 text-sm md:text-base 3xl:text-xl"
                  >
                    Read More
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
                      className="h-5 w-5 md:h-6 md:w-6 ml-2 -rotate-45"
                    >
                      <path d="M5 12h14" />
                      <path d="m12 5 7 7-7 7" />
                    </svg>
                  </Button>
                </div>
              </div>

              {/* Right Content */}
              <div className="w-full lg:w-1/2 h-64 md:h-80 lg:h-full py-2">
                <Swiper
                  slidesPerView={1}
                  className="h-full w-full rounded-xl overflow-hidden"
                  modules={[Autoplay]}
                  loop={true}
                  autoplay={{ delay: 3000, disableOnInteraction: false }}
                  speed={1000}
                  grabCursor={true}
                >
                  {item.images.map((image, i) => (
                    <SwiperSlide key={i}>
                      <img
                        src={image || "/placeholder.svg"}
                        alt={`${item.title} ${i + 1}`}
                        className="w-full h-full object-cover rounded-xl"
                        style={{ borderRadius: "inherit", display: "block" }}
                      />
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SustainabilitySection;
