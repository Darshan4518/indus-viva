import { useRef, useLayoutEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function SustainabilityHorizontalSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const triggerRef = useRef<HTMLDivElement>(null);
  const horizontalRef = useRef<HTMLDivElement>(null);
  const [isMounted, setIsMounted] = useState(false);

  const sustainabilityItems = [
    {
      id: 1,
      number: "01",
      title: "SUSTAINABLY SOURCED FROM THE HEART OF NATURE",
      subtitle: "SUSTAINABLY SOURCED FROM THE HEART OF NATURE",
      description:
        "Salacia roots grow in pristine forests, harvested by tribal communities who honor the land's natural balance.",
      image: "https://magicads.ae/indus-viva/assets/img/new/project-02.png",
    },
    {
      id: 2,
      number: "02",
      title: "ADVANCED EXTRACTION PRESERVES POTENCY",
      subtitle: "ADVANCED EXTRACTION PRESERVES POTENCY",
      description:
        "Our state-of-the-art extraction methods ensure maximum retention of the plant's beneficial compounds, delivering superior efficacy in every product.",
      image: "https://magicads.ae/indus-viva/assets/img/new/project-01.png",
    },
    {
      id: 3,
      number: "03",
      title: "Innovation Meets Tradition",
      subtitle: "Salacia roots travel to our state-of-the-art facility",
      description:
        "Salacia roots travel to our state-of-the-art facility, where advanced extraction methods preserve their potency. With a dedicated team ensuring strict quality control, each product undergoes thorough testing for purity and safety.",
      image: "https://magicads.ae/indus-viva/assets/img/new/about-1.png",
    },
  ];

  useLayoutEffect(() => {
    setIsMounted(true);
  }, []);

  useLayoutEffect(() => {
    if (!isMounted || window.innerWidth < 768) return;

    const scrollTween = gsap.to(horizontalRef.current, {
      x: () =>
        horizontalRef.current
          ? -(horizontalRef.current.scrollWidth - window.innerWidth)
          : 0,
      ease: "none",
      scrollTrigger: {
        trigger: triggerRef.current,
        start: "top top",
        end: () =>
          horizontalRef.current
            ? `+=${horizontalRef.current.scrollWidth - window.innerWidth}`
            : "+=1000",
        scrub: 1,
        pin: true,
        anticipatePin: 1,
        invalidateOnRefresh: true,
        markers: false,
      },
    });

    const sections = document.querySelectorAll(".sustainability-item");
    sections.forEach((section) => {
      const heading = section.querySelector(".heading");
      const content = section.querySelector(".content");
      const image = section.querySelector(".image-container");

      gsap.fromTo(
        heading,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          scrollTrigger: {
            trigger: section,
            containerAnimation: scrollTween,
            start: "left center",
            toggleActions: "play none none reverse",
          },
        }
      );

      gsap.fromTo(
        content,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          delay: 0.2,
          scrollTrigger: {
            trigger: section,
            containerAnimation: scrollTween,
            start: "left center",
            toggleActions: "play none none reverse",
          },
        }
      );

      gsap.fromTo(
        image,
        { opacity: 0, scale: 0.8 },
        {
          opacity: 1,
          scale: 1,
          duration: 1.2,
          delay: 0.3,
          scrollTrigger: {
            trigger: section,
            containerAnimation: scrollTween,
            start: "left center",
            toggleActions: "play none none reverse",
          },
        }
      );
    });

    const progressItems = document.querySelectorAll(".progress-indicator");
    sustainabilityItems.forEach((_, index) => {
      ScrollTrigger.create({
        trigger: `.sustainability-item-${index + 1}`,
        containerAnimation: scrollTween,
        start: "left center",
        end: "right center",
        onEnter: () => {
          progressItems.forEach((item, i) => {
            item.classList.toggle("active", i === index);
          });
        },
        onEnterBack: () => {
          progressItems.forEach((item, i) => {
            item.classList.toggle("active", i === index);
          });
        },
      });
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, [isMounted]);

  return (
    <section
      ref={sectionRef}
      className="relative bg-teal-600 text-white overflow-hidden"
    >
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-cover bg-center opacity-70"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-teal-900/30 to-teal-800/30"></div>
      </div>

      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Sustainability Initiatives
          </h2>
          <p className="text-teal-50 max-w-2xl mx-auto">
            Discover how we're committed to sustainable practices throughout our
            entire production process.
          </p>
        </div>
      </div>

      <div ref={triggerRef} className="relative z-10">
        <div
          ref={horizontalRef}
          className="md:flex block items-start h-auto md:h-[500px]"
          style={{
            width:
              isMounted && window.innerWidth >= 768
                ? `${sustainabilityItems.length * 100}vw`
                : "100%",
          }}
        >
          {sustainabilityItems.map((item, index) => (
            <div
              key={item.id}
              className={`sustainability-item sustainability-item-${
                index + 1
              } md:flex-shrink-0 w-full md:w-screen px-4 sm:px-6 lg:px-8 mt-12`}
            >
              <div className="container mx-auto">
                <div
                  className={`grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                    index % 2 === 0 ? "" : "lg:grid-flow-dense"
                  }`}
                >
                  <div
                    className={`image-container order-2 ${
                      index % 2 === 0 ? "lg:order-1" : "lg:order-2"
                    }`}
                  >
                    <div className="relative overflow-hidden rounded-lg">
                      <img
                        src={item.image || "/placeholder.svg"}
                        alt={item.title}
                        className="w-full h-auto object-cover rounded-lg"
                      />
                    </div>
                  </div>

                  {/* Text */}
                  <div
                    className={`order-1 ${
                      index % 2 === 0 ? "lg:order-2" : "lg:order-1"
                    } md:max-w-[90%]`}
                  >
                    <div className="space-y-6">
                      <div className="flex items-center space-x-4 heading">
                        <div className="h-px w-12 bg-[#FFE9C9]"></div>
                        <span className="text-3xl text-[#FFE9C9]">
                          {item.number}
                        </span>
                      </div>

                      <div className="flex flex-col mx-0 lg:mx-12 content">
                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold">
                          {item.title}
                        </h2>

                        <div className="mt-8">
                          <Badge className="mt-4 bg-[#FFE9C9] text-black py-1.5 px-3 rounded-full">
                            INDUS VIVA
                          </Badge>

                          <h3 className="mt-4 text-2xl md:text-3xl font-bold">
                            {item.subtitle}
                          </h3>

                          <p className="mt-4 text-teal-50">
                            {item.description}
                          </p>

                          <Button
                            variant="link"
                            className="mt-6 border-teal-300 text-teal-50 text-xl hover:text-blue-500 cursor-pointer"
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
                              className="h-6 w-6 -rotate-45 ml-1"
                            >
                              <path d="M5 12h14" />
                              <path d="m12 5 7 7-7 7" />
                            </svg>
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex justify-center space-x-4">
          {sustainabilityItems.map((_, index) => (
            <div
              key={index}
              className={`progress-indicator h-3 w-3 rounded-full bg-white/30 transition-all duration-300 ${
                index === 0 ? "active bg-white" : ""
              }`}
            ></div>
          ))}
        </div>
      </div>

      {/* Scroll prompt */}
      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8 pb-8">
        <div className="flex justify-center items-center">
          <div className="text-white/70 text-sm flex items-center">
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
              className="h-4 w-4 mr-2"
            >
              <path d="M9 18l6-6-6-6" />
            </svg>
            Scroll to explore
          </div>
        </div>
      </div>
    </section>
  );
}
